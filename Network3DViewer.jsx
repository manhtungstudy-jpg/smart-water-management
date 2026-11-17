import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  Box,
  Layers,
  Compass,
  RotateCcw,
  Maximize2,
  ZoomIn,
  ZoomOut,
  ChevronRight,
  Eye,
  Sliders
} from 'lucide-react';

export default function Network3DViewer({
  theme = 'dark',
  heatmap = 'pressure',
  assetsLayer = { pipes: true, valves: true, tanks: true, sensors: true, contour: true },
  isolatedPipe = false,
  simTime = 14,
  currentSim = { label: '14:00 - Giờ bình thường', flow: 145.8, pressure: 3.24 },
  compact = false,
  onSelectAsset
}) {
  const mountRef = useRef(null);
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animFrameRef = useRef(null);
  const flowParticlesRef = useRef([]);
  const clickableObjectsRef = useRef([]);
  const [hoveredName, setHoveredName] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 900;
    const height = container.clientHeight || 580;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const isDark = theme === 'dark';
    // Brightened midnight navy for dark mode, crisp clean slate for light mode
    scene.background = new THREE.Color(isDark ? 0x0c1930 : 0xf8fafc);
    // Light subtle fog for spatial depth without murky darkness
    scene.fog = new THREE.FogExp2(isDark ? 0x0c1930 : 0xf1f5f9, 0.0018);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(130, 120, 160);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Orbit Controls (Full 3D rotation, tilt, pan, zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Prevent camera from going below ground
    controls.minDistance = 25;
    controls.maxDistance = 450;
    controls.target.set(0, 12, 0);
    controlsRef.current = controls;

    // 5. Enhanced Lighting (High brightness in dark mode, razor-sharp contrast in light mode)
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0xbae6fd : 0xffffff,
      isDark ? 1.35 : 1.15
    );
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, isDark ? 2.0 : 2.2);
    dirLight.position.set(100, 200, 110);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 500;
    dirLight.shadow.camera.left = -150;
    dirLight.shadow.camera.right = 150;
    dirLight.shadow.camera.top = 150;
    dirLight.shadow.camera.bottom = -150;
    scene.add(dirLight);

    // Secondary Rim Light for dramatic digital twin highlights
    const rimLight = new THREE.DirectionalLight(isDark ? 0x38bdf8 : 0x0284c7, isDark ? 1.2 : 0.6);
    rimLight.position.set(-120, 80, -100);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(
      isDark ? 0x38bdf8 : 0xffffff,
      isDark ? 0x0f172a : 0x94a3b8,
      isDark ? 0.75 : 0.85
    );
    scene.add(hemiLight);

    // 6. Ground Topography & High-Contrast Grid
    const gridHelper = new THREE.GridHelper(
      320,
      32,
      isDark ? 0x0284c7 : 0x475569,
      isDark ? 0x1e3a8a : 0x94a3b8
    );
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Lake / Water Body (+0m ASL) with vibrant reflection
    const waterGeo = new THREE.PlaneGeometry(100, 140);
    const waterMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0284c7 : 0x0ea5e9,
      roughness: 0.1,
      metalness: 0.7,
      transparent: true,
      opacity: isDark ? 0.85 : 0.75
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.x = -Math.PI / 2;
    waterMesh.position.set(100, 0.2, 0);
    waterMesh.receiveShadow = true;
    scene.add(waterMesh);

    clickableObjectsRef.current = [];

    // Helper function to create 3D extruded polygon zones
    const createDmaZone = (coords, height, color, name, dmaId, data) => {
      const shape = new THREE.Shape();
      coords.forEach(([x, z], idx) => {
        if (idx === 0) shape.moveTo(x, z);
        else shape.lineTo(x, z);
      });
      shape.closePath();

      const extrudeSettings = {
        depth: height,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.6,
        bevelThickness: 0.6
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.rotateX(Math.PI / 2); // align to X-Z ground plane

      const material = new THREE.MeshStandardMaterial({
        color: color,
        transparent: true,
        opacity: isDark ? 0.45 : 0.65,
        roughness: isDark ? 0.2 : 0.1,
        metalness: isDark ? 0.3 : 0.1,
        emissive: isDark ? color : 0x000000,
        emissiveIntensity: isDark ? 0.25 : 0.0
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = 0;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { name, id: dmaId, type: 'DMA', data };

      // High-contrast edge outline: glowing pastel in dark mode, crisp technical slate in light mode
      const edges = new THREE.EdgesGeometry(geometry);
      const edgeColor = isDark
        ? (color === 0x3b82f6 ? 0x60a5fa : color === 0x10b981 ? 0x34d399 : 0xfbbf24)
        : (color === 0x3b82f6 ? 0x1d4ed8 : color === 0x10b981 ? 0x047857 : 0xb45309);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: edgeColor, linewidth: 2.5 }));
      mesh.add(line);

      scene.add(mesh);
      clickableObjectsRef.current.push(mesh);
      return mesh;
    };

    // DMA 1: Phía Nam (+15m elevation representation -> height: 6)
    createDmaZone(
      [[-80, -20], [-25, -20], [-15, 60], [-70, 60]],
      6,
      0x3b82f6,
      'DMA 1 - Khu Biệt Thự Phía Nam',
      'DMA-01',
      {
        name: 'DMA 1 - Khu Biệt Thự Phía Nam',
        id: 'DMA-01',
        type: 'Phân Vùng Thủy Lực (DMA)',
        status: 'Vận hành tối ưu',
        pressure: `${(currentSim.pressure - 0.1).toFixed(2)} bar`,
        flow: `${(currentSim.flow * 0.33).toFixed(1)} m³/h`,
        elevation: '+15.0m ASL',
        households: '320 hộ dân',
        nrw: '11.8%',
        headloss: '0.14 m/km',
        material: 'Ductile Iron & HDPE',
        dma: 'DMA 1'
      }
    );

    // DMA 2: Trung Tâm (+22m elevation representation -> height: 10)
    createDmaZone(
      [[-15, -25], [55, -25], [65, 55], [-5, 55]],
      10,
      0x10b981,
      'DMA 2 - Cụm Trung Tâm & Công Viên',
      'DMA-02',
      {
        name: 'DMA 2 - Cụm Trung Tâm & Công Viên',
        id: 'DMA-02',
        type: 'Phân Vùng Thủy Lực (DMA)',
        status: isolatedPipe ? 'Đã cô lập qua PRV-02' : 'Ổn định',
        pressure: isolatedPipe ? '2.35 bar (Giảm tải)' : `${currentSim.pressure.toFixed(2)} bar`,
        flow: isolatedPipe ? '22.0 m³/h' : `${(currentSim.flow * 0.43).toFixed(1)} m³/h`,
        elevation: '+22.0m ASL',
        households: '450 hộ dân',
        nrw: '13.2%',
        headloss: '0.19 m/km',
        material: 'Ductile Iron D150-D200',
        dma: 'DMA 2'
      }
    );

    // DMA 3: Ven Hồ & Đồi Cao (+45m elevation representation -> height: 18)
    createDmaZone(
      [[-40, -85], [50, -85], [55, -35], [-30, -35]],
      18,
      0xf59e0b,
      'DMA 3 - Khu Biệt Thự Ven Hồ',
      'DMA-03',
      {
        name: 'DMA 3 - Khu Biệt Thự Ven Hồ',
        id: 'DMA-03',
        type: 'Phân Vùng Thủy Lực (DMA)',
        status: 'Áp lực cao (Cần giám sát)',
        pressure: `${(currentSim.pressure + 0.2).toFixed(2)} bar`,
        flow: `${(currentSim.flow * 0.24).toFixed(1)} m³/h`,
        elevation: '+45.0m ASL (Đỉnh đồi)',
        households: '280 hộ dân',
        nrw: '10.5%',
        headloss: '0.22 m/km',
        material: 'HDPE D110-D160',
        dma: 'DMA 3'
      }
    );

    // 7. 3D Hydraulic Pipe Network (Sleek engineering pipes with subtle, gentle fluid beads)
    const pipeGroup = new THREE.Group();
    scene.add(pipeGroup);
    flowParticlesRef.current = [];

    const create3DPipe = (points, radius, color, name, pipeId, isFlowing, data) => {
      const curve = new THREE.CatmullRomCurve3(points);
      
      const tubeGeo = new THREE.TubeGeometry(curve, 48, radius, 16, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.35,
        metalness: 0.2,
        transparent: false,
        wireframe: false
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.castShadow = true;
      tubeMesh.receiveShadow = true;
      tubeMesh.userData = { name, id: pipeId, type: 'Pipe', data };
      pipeGroup.add(tubeMesh);
      clickableObjectsRef.current.push(tubeMesh);

      // Subtle, gentle flowing fluid beads (neatly proportioned, calm drift, soft glow)
      if (isFlowing) {
        const count = pipeId === 'PIPE-MAIN-01' ? 8 : (pipeId === 'PIPE-HILL-02' ? 7 : 5);
        const beadGeo = new THREE.SphereGeometry(radius * 1.14, 12, 12);
        const beadMat = new THREE.MeshStandardMaterial({
          color: isDark ? 0x38bdf8 : 0x0284c7,
          emissive: isDark ? 0x0ea5e9 : 0x38bdf8,
          emissiveIntensity: isDark ? 0.9 : 0.6,
          roughness: 0.3,
          metalness: 0.1
        });

        const particles = [];
        for (let i = 0; i < count; i++) {
          const p = new THREE.Mesh(beadGeo, beadMat);
          scene.add(p);
          particles.push({
            mesh: p,
            curve: curve,
            t: i / count,
            speed: 0.0020
          });
        }
        flowParticlesRef.current.push(...particles);
      }

      return tubeMesh;
    };

    if (assetsLayer.pipes) {
      // Main Transmission Pipe D200 (P1 -> DMA 1 -> DMA 2)
      create3DPipe(
        [
          new THREE.Vector3(-105, 5, 10),
          new THREE.Vector3(-55, 7, 10),
          new THREE.Vector3(-20, 7.5, 10),
          new THREE.Vector3(20, 11, 10),
          new THREE.Vector3(65, 11, 10)
        ],
        1.8,
        heatmap === 'pressure' ? 0x0284c7 : 0x0284c7,
        'Tuyến Ống Truyền Tải Chính D200',
        'PIPE-MAIN-01',
        true, // isFlowing
        {
          name: 'Tuyến Ống Truyền Tải Chính D200',
          id: 'PIPE-MAIN-01',
          type: 'Ống Truyền Tải Thủy Lực',
          status: 'Tối ưu (Vận tốc 1.15 m/s)',
          diameter: 'DN200',
          material: 'Gang Dẻo (Ductile Iron K9)',
          length: '1,850 m',
          flow: `${currentSim.flow.toFixed(1)} m³/h`,
          pressure: `${currentSim.pressure.toFixed(2)} bar`,
          elevation: '+12.5m -> +22.0m',
          headloss: '0.16 m/km',
          dma: 'Liên vùng (Đầu mối -> DMA 1 -> DMA 2)'
        }
      );

      // Hill Climb Pipe D150 (DMA 1 -> Hilltop Tank T1 at +45m)
      create3DPipe(
        [
          new THREE.Vector3(-20, 7.5, 10),
          new THREE.Vector3(-15, 10, -25),
          new THREE.Vector3(5, 13, -65),
          new THREE.Vector3(32, 17, -95)
        ],
        1.4,
        0x0ea5e9,
        'Tuyến Ống Đẩy Đồi Cao D150',
        'PIPE-HILL-02',
        true, // isFlowing
        {
          name: 'Tuyến Ống Đẩy Đồi Cao D150',
          id: 'PIPE-HILL-02',
          type: 'Ống Đẩy Trạm Bơm Lên Đài Nước',
          status: 'Vận hành liên tục',
          diameter: 'DN150',
          material: 'Gang Dẻo (Ductile Iron)',
          length: '1,120 m',
          flow: '42.0 m³/h',
          pressure: '3.45 bar',
          elevation: '+15.0m -> +45.0m (Leo dốc)',
          headloss: '0.24 m/km',
          dma: 'DMA 3'
        }
      );

      // DMA 2 Branch Pipe (Affected by PRV-02 isolation simulation)
      create3DPipe(
        [
          new THREE.Vector3(20, 11, 10),
          new THREE.Vector3(20, 11, 35),
          new THREE.Vector3(20, 11, 48)
        ],
        1.2,
        isolatedPipe ? 0x64748b : 0x10b981,
        'Tuyến Nhánh Phân Phối DMA 2',
        'PIPE-BRANCH-03',
        !isolatedPipe, // stops flowing when isolated!
        {
          name: 'Tuyến Nhánh Phân Phối DMA 2',
          id: 'PIPE-BRANCH-03',
          type: 'Ống Phân Phối D150',
          status: isolatedPipe ? 'Đã cô lập (Ngắt dòng qua PRV-02)' : 'Hoạt động bình thường',
          diameter: 'DN150',
          material: 'Nhựa HDPE PE100',
          length: '750 m',
          flow: isolatedPipe ? '0.0 m³/h' : '62.4 m³/h',
          pressure: isolatedPipe ? '2.10 bar' : '3.20 bar',
          elevation: '+22.0m ASL',
          headloss: isolatedPipe ? '0.00 m/km' : '0.18 m/km',
          dma: 'DMA 2'
        }
      );
    }

    // 8. 3D Modeled Assets (Pump P1, Water Tank T1, PRV Valves, Sensors)
    if (assetsLayer.tanks) {
      // P1: Main Booster Pump Facility (-105, 0, 10)
      const pumpGroup = new THREE.Group();
      pumpGroup.position.set(-105, 0, 10);

      // Building Base
      const bldgGeo = new THREE.BoxGeometry(16, 8, 14);
      const bldgMat = new THREE.MeshStandardMaterial({ color: isDark ? 0x0f172a : 0xe2e8f0, roughness: 0.4 });
      const bldgMesh = new THREE.Mesh(bldgGeo, bldgMat);
      bldgMesh.position.y = 4;
      pumpGroup.add(bldgMesh);

      // Pump Turbines
      const pumpCylGeo = new THREE.CylinderGeometry(4, 4, 10, 16);
      const pumpCylMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.7, roughness: 0.2 });
      const pumpCyl = new THREE.Mesh(pumpCylGeo, pumpCylMat);
      pumpCyl.rotation.x = Math.PI / 2;
      pumpCyl.position.set(0, 7, 0);
      pumpGroup.add(pumpCyl);

      pumpGroup.userData = {
        name: 'Trạm Bơm Tăng Áp Tổng P1',
        id: 'PUMP-01',
        type: 'Trạm Bơm Thủy Lực Đầu Mối',
        data: {
          name: 'Trạm Bơm Tăng Áp Tổng P1',
          id: 'PUMP-01',
          type: 'Trạm Bơm Thủy Lực Đầu Mối',
          status: 'Hoạt động 100% (2 tổ máy)',
          pressure: '3.82 bar',
          flow: `${currentSim.flow.toFixed(1)} m³/h`,
          power: '45 kW (Biến tần VFD)',
          elevation: '+12.5m ASL',
          rpm: '1,480 RPM',
          head: '42.0 m cột nước',
          dma: 'Khu Đầu Mối Nhà Máy Nước'
        }
      };
      scene.add(pumpGroup);
      clickableObjectsRef.current.push(bldgMesh, pumpCyl);

      // T1: Elevated Water Tank atop Solid Hilltop Base (32, 0, -95 - firmly grounded)
      const tankGroup = new THREE.Group();
      tankGroup.position.set(32, 0, -95);

      // Solid 3D Hill Mound Base (+0m to +16m elevation)
      const hillBaseGeo = new THREE.CylinderGeometry(24, 35, 16, 32);
      const hillBaseMat = new THREE.MeshStandardMaterial({
        color: isDark ? 0x172554 : 0x64748b,
        roughness: 0.6,
        metalness: 0.2
      });
      const hillBase = new THREE.Mesh(hillBaseGeo, hillBaseMat);
      hillBase.position.y = 8;
      hillBase.receiveShadow = true;
      tankGroup.add(hillBase);

      // Hill wireframe edge ring
      const hillEdges = new THREE.EdgesGeometry(hillBaseGeo);
      const hillLine = new THREE.LineSegments(
        hillEdges,
        new THREE.LineBasicMaterial({ color: isDark ? 0x38bdf8 : 0x334155, linewidth: 1.5 })
      );
      hillBase.add(hillLine);

      // Reinforced Concrete Foundation Slab (+16m to +18.5m)
      const slabGeo = new THREE.CylinderGeometry(17, 17, 2.5, 32);
      const slabMat = new THREE.MeshStandardMaterial({
        color: isDark ? 0x334155 : 0xcbd5e1,
        roughness: 0.4,
        metalness: 0.3
      });
      const slabMesh = new THREE.Mesh(slabGeo, slabMat);
      slabMesh.position.y = 17.25;
      slabMesh.receiveShadow = true;
      slabMesh.castShadow = true;
      tankGroup.add(slabMesh);

      // 4 Heavy Structural Steel Truss Legs (+18.5m to +28.5m)
      const legGeo = new THREE.CylinderGeometry(0.8, 0.8, 10, 8);
      const legMat = new THREE.MeshStandardMaterial({
        color: isDark ? 0x94a3b8 : 0x475569,
        metalness: 0.8,
        roughness: 0.2
      });
      [[-5.5, -5.5], [5.5, -5.5], [-5.5, 5.5], [5.5, 5.5]].forEach(([lx, lz]) => {
        const leg = new THREE.Mesh(legGeo, legMat);
        leg.position.set(lx, 23.5, lz);
        leg.castShadow = true;
        tankGroup.add(leg);
      });

      // Center Riser Intake Pipe (connects vertically into tank center)
      const riserGeo = new THREE.CylinderGeometry(1.6, 1.6, 12, 16);
      const riserMat = new THREE.MeshStandardMaterial({
        color: 0x0ea5e9,
        metalness: 0.6,
        roughness: 0.3
      });
      const riser = new THREE.Mesh(riserGeo, riserMat);
      riser.position.set(0, 22.5, 0);
      tankGroup.add(riser);

      // Tank Cylinder (+28.5m to +43m)
      const tankGeo = new THREE.CylinderGeometry(10.5, 10.5, 14, 32);
      const tankMat = new THREE.MeshStandardMaterial({
        color: isDark ? 0x0284c7 : 0x0284c7,
        metalness: 0.6,
        roughness: 0.2
      });
      const tankMesh = new THREE.Mesh(tankGeo, tankMat);
      tankMesh.position.y = 35.5;
      tankMesh.castShadow = true;
      tankGroup.add(tankMesh);

      // Dome Roof
      const domeGeo = new THREE.SphereGeometry(10.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const domeMat = new THREE.MeshStandardMaterial({
        color: isDark ? 0x38bdf8 : 0xe0f2fe,
        metalness: 0.4,
        roughness: 0.25
      });
      const domeMesh = new THREE.Mesh(domeGeo, domeMat);
      domeMesh.position.y = 42.5;
      domeMesh.castShadow = true;
      tankGroup.add(domeMesh);

      tankGroup.userData = {
        name: 'Đài Nước Điều Áp Đồi Cao T1',
        id: 'TANK-01',
        type: 'Bể Chứa & Đài Nước Tự Chảy',
        data: {
          name: 'Đài Nước Điều Áp Đồi Cao T1',
          id: 'TANK-01',
          type: 'Bể Chứa & Đài Nước Tự Chảy',
          status: '78% Dung Tích (3,900 m³)',
          capacity: '5,000 m³',
          level: '18.4 m (Cột nước đài)',
          elevation: '+45.0m ASL (Đỉnh đồi)',
          inflow: '42.0 m³/h',
          outflow: '38.5 m³/h',
          pressure: '4.10 bar (Áp lực tự chảy)',
          material: 'Bê tông cốt thép dự ứng lực',
          dma: 'DMA 3 - Ven Hồ'
        }
      };
      scene.add(tankGroup);
      clickableObjectsRef.current.push(tankMesh, domeMesh, slabMesh);
    }

    // 9. PRV Valves (3D Flanged Valves)
    if (assetsLayer.valves) {
      const createPRV = (pos, name, id, isClosed, data) => {
        const valGroup = new THREE.Group();
        valGroup.position.copy(pos);

        const valBodyGeo = new THREE.BoxGeometry(4, 4, 4);
        const valBodyMat = new THREE.MeshStandardMaterial({
          color: isClosed ? 0xdc2626 : 0xf59e0b,
          metalness: 0.6,
          roughness: 0.3
        });
        const valBody = new THREE.Mesh(valBodyGeo, valBodyMat);
        valGroup.add(valBody);

        const bonnetGeo = new THREE.CylinderGeometry(0.8, 0.8, 4, 8);
        const bonnetMat = new THREE.MeshStandardMaterial({ color: 0xd97706 });
        const bonnet = new THREE.Mesh(bonnetGeo, bonnetMat);
        bonnet.position.y = 3;
        valGroup.add(bonnet);

        const wheelGeo = new THREE.TorusGeometry(1.6, 0.4, 8, 16);
        const wheel = new THREE.Mesh(wheelGeo, bonnetMat);
        wheel.rotation.x = Math.PI / 2;
        wheel.position.y = 5;
        valGroup.add(wheel);

        valGroup.userData = { name, id, type: 'PRV', data };
        scene.add(valGroup);
        clickableObjectsRef.current.push(valBody);
        return valGroup;
      };

      // PRV-01
      createPRV(
        new THREE.Vector3(-20, 8.5, 10),
        'Van Giảm Áp Thủy Lực PRV-01',
        'PRV-01',
        false,
        {
          name: 'Van Giảm Áp Thủy Lực PRV-01',
          id: 'PRV-01',
          type: 'Van Thủy Lực Tự Động',
          status: 'Đang điều tiết (Mở 72%)',
          diameter: 'DN150',
          inletPressure: '3.82 bar',
          outletPressure: '3.12 bar',
          flow: '48.2 m³/h',
          elevation: '+18.0m ASL',
          material: 'Gang Cầu FCD',
          dma: 'DMA 1'
        }
      );

      // PRV-02
      createPRV(
        new THREE.Vector3(20, 12, 10),
        'Van Giảm Áp Thủy Lực PRV-02',
        'PRV-02',
        isolatedPipe,
        {
          name: 'Van Giảm Áp Thủy Lực PRV-02',
          id: 'PRV-02',
          type: 'Van Thủy Lực Tự Động',
          status: isolatedPipe ? 'ĐÃ ĐÓNG CÔ LẬP (MÔ PHỎNG)' : 'Đang điều tiết (Mở 85%)',
          diameter: 'DN200',
          inletPressure: '3.82 bar',
          outletPressure: isolatedPipe ? '0.00 bar' : '3.22 bar',
          flow: isolatedPipe ? '0.0 m³/h' : '62.4 m³/h',
          elevation: '+21.5m ASL',
          material: 'Gang Cầu FCD',
          dma: 'DMA 2'
        }
      );
    }

    // 10. IoT Sensor Nodes with Floating Ring Waves
    const sensorRings = [];
    if (assetsLayer.sensors) {
      const createSensorNode = (pos, color, name, id, data) => {
        const nodeGeo = new THREE.SphereGeometry(2, 16, 16);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: color,
          emissive: color,
          emissiveIntensity: 0.6
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.copy(pos);
        scene.add(nodeMesh);

        // Ring wave
        const ringGeo = new THREE.RingGeometry(2.2, 3.2, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.copy(pos);
        scene.add(ringMesh);
        sensorRings.push({ ring: ringMesh, scale: 1 });

        nodeMesh.userData = { name, id, type: 'Sensor', data };
        clickableObjectsRef.current.push(nodeMesh);
      };

      createSensorNode(
        new THREE.Vector3(-45, 8.5, 10),
        0x0284c7,
        'Cảm Biến Áp Lực IoT SN-01',
        'SN-01',
        {
          name: 'Cảm Biến Áp Lực IoT SN-01',
          id: 'SN-01',
          type: 'Cảm Biến Áp Lực 0-10 bar',
          status: 'Bình thường',
          pressure: '3.12 bar',
          elevation: '+17.2m ASL',
          battery: '94%',
          dma: 'DMA 1'
        }
      );

      createSensorNode(
        new THREE.Vector3(20, 12, 48),
        0xef4444,
        'Cảm Biến Sụt Áp & Điểm Rò Rỉ SN-02',
        'SN-02',
        {
          name: 'Cảm Biến Sụt Áp & Điểm Rò Rỉ SN-02',
          id: 'SN-02',
          type: 'Cảm Biến Cảnh Báo Sụt Áp',
          status: 'Cảnh báo sụt áp cục bộ (2.1 bar)',
          pressure: '2.10 bar',
          elevation: '+20.5m ASL',
          battery: '88%',
          dma: 'DMA 2'
        }
      );
    }

    // 11. Raycaster for Interactive 3D Clicks & Hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clickableObjectsRef.current, true);

      if (intersects.length > 0) {
        let hit = intersects[0].object;
        while (hit && !hit.userData?.data && hit.parent) {
          hit = hit.parent;
        }
        if (hit && hit.userData?.data) {
          if (onSelectAsset) {
            onSelectAsset(hit.userData.data);
          }
        }
      }
    };

    const onPointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clickableObjectsRef.current, true);

      if (intersects.length > 0) {
        let hit = intersects[0].object;
        while (hit && !hit.userData?.name && hit.parent) {
          hit = hit.parent;
        }
        if (hit && hit.userData?.name) {
          renderer.domElement.style.cursor = 'pointer';
          setHoveredName(hit.userData.name);
          return;
        }
      }
      renderer.domElement.style.cursor = 'grab';
      setHoveredName(null);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);

    // 12. Animation Loop (Flow Particles, Radar Waves, Camera Controls)
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      // Smooth, gentle water flow particles
      flowParticlesRef.current.forEach((item) => {
        item.t = (item.t + item.speed) % 1;
        const pt = item.curve.getPointAt(item.t);
        if (pt) item.mesh.position.copy(pt);
      });

      // Animate radar rings
      sensorRings.forEach((item) => {
        item.scale += 0.02;
        if (item.scale > 3) item.scale = 1;
        item.ring.scale.set(item.scale, item.scale, item.scale);
        item.ring.material.opacity = Math.max(0, 1 - item.scale / 3);
      });

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('pointerdown', onPointerDown);
        renderer.domElement.removeEventListener('pointermove', onPointerMove);
      }
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (rendererRef.current) rendererRef.current.dispose();
      flowParticlesRef.current.forEach(item => scene.remove(item.mesh));
    };
  }, [theme, heatmap, assetsLayer, isolatedPipe, simTime]);

  // Camera Presets
  const setCameraPreset = (preset) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    if (preset === 'iso') {
      camera.position.set(130, 120, 160);
      controls.target.set(0, 12, 0);
    } else if (preset === 'top') {
      camera.position.set(0, 240, 0.1);
      controls.target.set(0, 0, 0);
    } else if (preset === 'hill') {
      camera.position.set(-25, 60, -170);
      controls.target.set(32, 28, -95);
    } else if (preset === 'pump') {
      camera.position.set(-140, 35, 40);
      controls.target.set(-105, 5, 10);
    }
    controls.update();
  };

  const handleZoom = (delta) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    camera.position.addScaledVector(dir, delta * 25);
    controls.update();
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: compact ? '440px' : '580px', overflow: 'hidden' }}>
      {/* Three.js Canvas Container */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', minHeight: compact ? '440px' : '580px' }} />

      {/* Floating 3D Navigation Compass / Angle Control Bar */}
      <div style={{
        position: 'absolute',
        top: '14px',
        right: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        zIndex: 30
      }}>
        <div className="qatium-hud-pill-group" style={{ flexDirection: compact ? 'row' : 'column', padding: '4px', gap: '4px' }}>
          <button
            className="qatium-hud-btn"
            onClick={() => setCameraPreset('iso')}
            title="Góc 3D Phối cảnh tiêu chuẩn (Isometric)"
            style={{ padding: '5px 8px' }}
          >
            <Box size={13} />
            <span>{compact ? '3D' : '3D Isometric'}</span>
          </button>
          <button
            className="qatium-hud-btn"
            onClick={() => setCameraPreset('top')}
            title="Góc nhìn thẳng từ trên xuống (2D Top-Down)"
            style={{ padding: '5px 8px' }}
          >
            <Layers size={13} />
            <span>{compact ? '2D' : 'Mặt bằng 2D'}</span>
          </button>
          {!compact && (
            <>
              <button
                className="qatium-hud-btn"
                onClick={() => setCameraPreset('hill')}
                title="Góc cận cảnh Đài Nước Đồi Cao T1"
                style={{ padding: '6px 10px', width: '100%', justifyContent: 'flex-start' }}
              >
                <Eye size={14} />
                <span>Đài Nước T1</span>
              </button>
              <button
                className="qatium-hud-btn"
                onClick={() => setCameraPreset('pump')}
                title="Góc cận cảnh Trạm Bơm P1"
                style={{ padding: '6px 10px', width: '100%', justifyContent: 'flex-start' }}
              >
                <Eye size={14} />
                <span>Trạm Bơm P1</span>
              </button>
            </>
          )}
        </div>

        <div className="qatium-hud-pill-group" style={{ display: 'flex', justifyContent: 'space-between', padding: '4px' }}>
          <button
            className="qatium-hud-btn"
            onClick={() => handleZoom(1)}
            title="Phóng to"
            style={{ padding: '5px 7px' }}
          >
            <ZoomIn size={13} />
          </button>
          <button
            className="qatium-hud-btn"
            onClick={() => handleZoom(-1)}
            title="Thu nhỏ"
            style={{ padding: '5px 7px' }}
          >
            <ZoomOut size={13} />
          </button>
          <button
            className="qatium-hud-btn"
            onClick={() => setCameraPreset('iso')}
            title="Đặt lại camera"
            style={{ padding: '5px 7px' }}
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Floating 3D Interaction Tooltip & Helper Hint */}
      <div style={{
        position: 'absolute',
        bottom: compact ? '14px' : '80px',
        left: '16px',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        zIndex: 30
      }}>
        {hoveredName && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.92)',
            color: '#38bdf8',
            padding: '5px 10px',
            borderRadius: '6px',
            fontSize: '11.5px',
            fontWeight: '600',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Box size={12} />
            <span>{compact ? hoveredName : `Bấm để kiểm tra: ${hoveredName}`}</span>
          </div>
        )}
        {!compact && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.75)',
            color: '#cbd5e1',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            🖱️ <b>Xoay 360°:</b> Kéo chuột trái · <b>Di chuyển:</b> Kéo chuột phải · <b>Thu/Phóng:</b> Cuộn chuột
          </div>
        )}
      </div>
    </div>
  );
}
