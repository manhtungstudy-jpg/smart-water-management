import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Box, Layers, RotateCcw, ZoomIn, ZoomOut, Eye, AlertTriangle, Activity, Sliders, CheckCircle2 } from 'lucide-react';

export default function Network3DViewer({
  theme = 'dark',
  heatmap = 'pressure',
  assetsLayer = {
    pipes: true,
    pipesPrimary: true,
    pipesSecondary: true,
    pipesTertiary: true,
    pipesService: true,
    buildings: true,
    hydrants: true,
    streetLabels: true,
    valves: true,
    tanks: true,
    sensors: true,
    contour: true
  },
  closedValves = {},
  onToggleValve,
  simTime = 14,
  currentSim = { label: '14:00 - Giờ bình thường', flow: 12580.0, pressure: 3.32 },
  compact = false,
  viewMode = '3d',
  onSelectAsset
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const animFrameRef = useRef(null);
  const flowParticlesRef = useRef([]);
  const clickableObjectsRef = useRef([]);
  const [hoveredName, setHoveredName] = useState(null);

  // Active Outage Summary
  const activeOutages = Object.entries(closedValves).filter(([k, v]) => v);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 900;
    const height = container.clientHeight || 560;
    const isDark = theme === 'dark';
    const isXRay = viewMode === 'xray';
    const is2D = viewMode === '2d';

    // 1. SCENE CREATION & ATMOSPHERE
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(isDark ? 0x0c1930 : 0xf8fafc);
    // Loại bỏ hoàn toàn mờ sương khi zoom out để giữ không gian trong vắt, sắc nét
    scene.fog = null;

    // 2. CAMERA SETUP (2.5KM REGIONAL SCALE)
    const camera = new THREE.PerspectiveCamera(is2D ? 36 : 42, width / height, 2, 8500);
    if (is2D) {
      camera.position.set(0, 2200, 0.1);
    } else {
      camera.position.set(780, 720, 880);
    }
    cameraRef.current = camera;

    // 3. WEBGL RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.35 : 1.05;
    rendererRef.current = renderer;

    while (container.firstChild) container.removeChild(container.firstChild);
    container.appendChild(renderer.domElement);

    // 4. ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = is2D ? 0.05 : Math.PI / 2 - 0.03;
    controls.minDistance = 25;
    controls.maxDistance = 3400;
    controls.target.set(0, is2D ? 0 : 15, 0);
    controlsRef.current = controls;

    // 5. LIGHTING (BRIGHT & CRYSTAL CLEAR DIGITAL TWIN)
    const ambientLight = new THREE.AmbientLight(isDark ? 0x60a5fa : 0xffffff, isDark ? 1.25 : 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffdf0, isDark ? 2.45 : 1.5);
    sunLight.position.set(650, 950, 550);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 100;
    sunLight.shadow.camera.far = 3200;
    const shadowD = 1250;
    sunLight.shadow.camera.left = -shadowD;
    sunLight.shadow.camera.right = shadowD;
    sunLight.shadow.camera.top = shadowD;
    sunLight.shadow.camera.bottom = -shadowD;
    sunLight.shadow.bias = -0.0003;
    scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(
      isDark ? 0x38bdf8 : 0xe0f2fe,
      isDark ? 0x0f172a : 0x94a3b8,
      isDark ? 0.85 : 0.45
    );
    scene.add(hemiLight);

    clickableObjectsRef.current = [];
    flowParticlesRef.current = [];

    // =========================================================================
    // 6. GROUND TERRAIN & DISTRICT CAD TOPO GRID (2,500m x 2,500m)
    // =========================================================================
    const groundGeo = new THREE.PlaneGeometry(2600, 2600);
    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x071120 : 0xe2e8f0,
      roughness: 0.9,
      metalness: 0.08
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Subtle CAD Topo Grid
    const gridHelper = new THREE.GridHelper(2600, 130, isDark ? 0x0284c7 : 0xcbd5e1, isDark ? 0x0f2444 : 0xe2e8f0);
    gridHelper.position.y = 0.02;
    scene.add(gridHelper);

    // District Boundary Outline (2,500m x 2,500m Ward Boundary)
    const boundaryGeo = new THREE.RingGeometry(1240, 1248, 64);
    const boundaryMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x0284c7 : 0x0ea5e9,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const boundary = new THREE.Mesh(boundaryGeo, boundaryMat);
    boundary.rotation.x = -Math.PI / 2;
    boundary.position.y = 0.04;
    scene.add(boundary);

    // =========================================================================
    // 7. COMPREHENSIVE ROAD NETWORK (ARTERIAL, COLLECTOR, STREETS, ALLEYS)
    // =========================================================================
    const roadGroup = new THREE.Group();
    scene.add(roadGroup);

    const roadMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x141e2e : 0x475569,
      roughness: 0.65,
      metalness: 0.15
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1e293b : 0x94a3b8,
      roughness: 0.8
    });
    const yellowLineMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const markMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x94a3b8 : 0xffffff });

    const createRoad = (x, z, width, length, isZAligned = true, name = 'Đường đô thị', hasMedian = true) => {
      const roadGeo = new THREE.PlaneGeometry(width, length);
      const roadMesh = new THREE.Mesh(roadGeo, roadMat);
      roadMesh.rotation.x = -Math.PI / 2;
      roadMesh.position.set(x, 0.05, z);
      if (!isZAligned) roadMesh.rotation.z = Math.PI / 2;
      roadMesh.receiveShadow = true;
      roadGroup.add(roadMesh);

      // Sidewalk Curbs
      const curbWidth = width >= 24 ? 4 : 2.5;
      const curbGeo = new THREE.PlaneGeometry(curbWidth, length);
      const curbL = new THREE.Mesh(curbGeo, sidewalkMat);
      curbL.rotation.x = -Math.PI / 2;
      if (isZAligned) curbL.position.set(x - width / 2 - curbWidth / 2, 0.1, z);
      else { curbL.rotation.z = Math.PI / 2; curbL.position.set(x, 0.1, z - width / 2 - curbWidth / 2); }
      roadGroup.add(curbL);

      const curbR = new THREE.Mesh(curbGeo, sidewalkMat);
      curbR.rotation.x = -Math.PI / 2;
      if (isZAligned) curbR.position.set(x + width / 2 + curbWidth / 2, 0.1, z);
      else { curbR.rotation.z = Math.PI / 2; curbR.position.set(x, 0.1, z + width / 2 + curbWidth / 2); }
      roadGroup.add(curbR);

      // Center Dashed Lanes (Clean road lines, no orange medians)
      const dashCount = Math.floor(length / 24);
      for (let i = 0; i < dashCount; i++) {
        const dashGeo = new THREE.PlaneGeometry(0.5, 6);
        const dash = new THREE.Mesh(dashGeo, markMat);
        dash.rotation.x = -Math.PI / 2;
        if (isZAligned) dash.position.set(x, 0.08, z - length / 2 + i * 24 + 12);
        else { dash.rotation.z = Math.PI / 2; dash.position.set(x - length / 2 + i * 24 + 12, 0.08, z); }
        roadGroup.add(dash);
      }
    };

    // Major Arterials (Trục chính)
    createRoad(0, 0, 24, 2400, true, 'Đường Hoàng Đạo Thúy', true);
    createRoad(0, 180, 28, 2500, false, 'Đường Lê Văn Lương', true);
    createRoad(0, -180, 30, 2500, false, 'Đường Trần Duy Hưng', true);
    createRoad(-440, 0, 40, 2500, true, 'Đường Phạm Hùng - Khuất Duy Tiến (Vành Đai 3)', true);
    createRoad(-160, 0, 22, 2400, true, 'Đường Hoàng Minh Giám', true);
    createRoad(-700, 40, 44, 1400, false, 'Đại Lộ Thăng Long', true);
    createRoad(340, 0, 22, 2400, true, 'Phố Trung Kính', true);

    // Secondary & Collector Streets (Trục phân phối & ngõ phố)
    createRoad(140, 0, 16, 2200, true, 'Phố Nguyễn Thị Định', false);
    createRoad(240, 220, 18, 1400, true, 'Phố Vũ Trọng Phụng', true);
    createRoad(290, 240, 18, 1400, true, 'Phố Nguyễn Tuân', true);
    createRoad(0, 0, 18, 2400, false, 'Đường Nguyễn Thị Thập', false);
    createRoad(0, 90, 16, 2200, false, 'Phố Hoàng Ngân', false);
    createRoad(0, -90, 16, 2000, false, 'Phố Đỗ Quang', false);
    createRoad(0, 240, 16, 2200, false, 'Phố Quan Nhân', false);
    createRoad(0, 290, 16, 2000, false, 'Phố Nhân Hòa & Chính Kinh', false);
    createRoad(0, 350, 22, 2400, false, 'Đường Ngụy Như Kon Tum', true);
    createRoad(0, 430, 18, 2200, false, 'Đường Nguyễn Huy Tưởng', false);
    createRoad(0, -340, 24, 2400, false, 'Đường Nguyễn Chánh / Vũ Phạm Hàm', true);
    createRoad(0, -260, 18, 1800, false, 'Đường Mạc Thái Tổ', false);
    createRoad(0, -220, 18, 1800, false, 'Đường Mạc Thái Tông', false);
    createRoad(-200, -460, 24, 2000, false, 'Đường Mễ Trì', true);
    createRoad(-200, -540, 26, 2000, false, 'Đường Dương Đình Nghệ', true);

    // =========================================================================
    // 8. GOOGLE MAPS STYLE STREET LABELS (SPRITE PILL BADGES)
    // =========================================================================
    const labelGroup = new THREE.Group();
    scene.add(labelGroup);

    const createStreetLabel = (text, pos, width = 50, height = 12.5, isMajor = true) => {
      if (!assetsLayer.streetLabels) return null;

      // Đo độ dài văn bản động để KHÔNG BAO GIỜ bị out khung bao
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      const fontSize = isMajor ? 30 : 26;
      tempCtx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`;
      const textMetrics = tempCtx.measureText(text);
      const textWidth = textMetrics.width;

      const canvasWidth = Math.max(512, Math.ceil(textWidth + 170));
      const canvasHeight = 128;

      const canvas = document.createElement('canvas');
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext('2d');

      const r = 26;
      const x = 10, y = 12, w = canvasWidth - 20, h = 104;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
      ctx.closePath();

      ctx.fillStyle = isDark ? 'rgba(10, 18, 34, 0.95)' : 'rgba(255, 255, 255, 0.96)';
      ctx.fill();

      ctx.lineWidth = isMajor ? 5 : 3.5;
      ctx.strokeStyle = isMajor ? (isDark ? '#38bdf8' : '#0284c7') : (isDark ? '#64748b' : '#94a3b8');
      ctx.stroke();

      ctx.fillStyle = isMajor ? '#0284c7' : '#475569';
      ctx.beginPath();
      ctx.arc(68, 64, 28, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isMajor ? 'ĐT' : 'HN', 68, 64);

      ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
      ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 114, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;

      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(pos[0], pos[1] + 16, pos[2]);
      const dynamicSpriteWidth = (canvasWidth / 512) * width;
      sprite.scale.set(dynamicSpriteWidth, height, 1);
      labelGroup.add(sprite);
      return sprite;
    };

    createStreetLabel('ĐƯỜNG HOÀNG ĐẠO THÚY', [0, 10, -50], 55, 13.5, true);
    createStreetLabel('ĐƯỜNG LÊ VĂN LƯƠNG', [120, 10, 180], 52, 13, true);
    createStreetLabel('ĐƯỜNG TRẦN DUY HƯNG', [120, 10, -180], 52, 13, true);
    createStreetLabel('ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)', [-440, 10, -80], 65, 16, true);
    createStreetLabel('ĐƯỜNG HOÀNG MINH GIÁM', [-160, 10, 80], 55, 13.5, true);
    createStreetLabel('ĐẠI LỘ THĂNG LONG', [-720, 10, 40], 56, 14, true);
    createStreetLabel('ĐƯỜNG NGUYỄN THỊ THẬP', [-80, 10, 0], 48, 12, false);
    createStreetLabel('PHỐ NGUYỄN THỊ ĐỊNH', [140, 10, -70], 48, 12, false);
    createStreetLabel('PHỐ HOÀNG NGÂN', [60, 10, 90], 44, 11, false);
    createStreetLabel('PHỐ ĐỖ QUANG', [60, 10, -90], 44, 11, false);
    createStreetLabel('PHỐ VŨ TRỌNG PHỤNG', [240, 10, 240], 46, 11.5, false);
    createStreetLabel('PHỐ NGUYỄN TUÂN', [290, 10, 290], 46, 11.5, false);
    createStreetLabel('ĐƯỜNG NGỤY NHƯ KON TUM', [140, 10, 350], 52, 13, false);
    createStreetLabel('PHỐ TRUNG KÍNH', [340, 10, 50], 46, 11.5, false);
    createStreetLabel('KEANGNAM LANDMARK 72 (350M)', [-540, 16, -320], 68, 17, true);
    createStreetLabel('TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)', [-440, 14, 120], 68, 17, true);
    createStreetLabel('VINHOMES D\'CAPITALE & BIG C', [-220, 12, -180], 62, 15.5, true);
    createStreetLabel('HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)', [-260, 10, 95], 58, 14.5, true);

    // =========================================================================
    // 9. LAKES & URBAN WATER BODIES
    // =========================================================================
    const waterMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x082f49 : 0x0369a1,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: isDark ? 0.88 : 0.75
    });
    const parkBorderMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x064e3b : 0x166534,
      roughness: 0.9
    });
    const lakeNhanChinhGeo = new THREE.PlaneGeometry(160, 140);
    const lakeNhanChinh = new THREE.Mesh(lakeNhanChinhGeo, waterMat);
    lakeNhanChinh.rotation.x = -Math.PI / 2;
    lakeNhanChinh.position.set(-260, 0.25, 95);
    lakeNhanChinh.receiveShadow = true;
    scene.add(lakeNhanChinh);

    const lakeBorderGeo = new THREE.PlaneGeometry(168, 148);
    const lakeBorder = new THREE.Mesh(lakeBorderGeo, parkBorderMat);
    lakeBorder.rotation.x = -Math.PI / 2;
    lakeBorder.position.set(-260, 0.2, 95);
    scene.add(lakeBorder);

    const lakeNccGeo = new THREE.PlaneGeometry(220, 150);
    const lakeNcc = new THREE.Mesh(lakeNccGeo, waterMat);
    lakeNcc.rotation.x = -Math.PI / 2;
    lakeNcc.position.set(-540, 0.25, 120);
    lakeNcc.receiveShadow = true;
    scene.add(lakeNcc);

    // =========================================================================
    // 10. REALISTIC BUILDINGS & DENSE SHOPHOUSE BLOCKS (430+ BUILDINGS)
    // =========================================================================
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // Valve Isolation Sector Checks
    const isOutageZone01 = !!closedValves['VALVE-01']; // Cắt Tháp 34T & Cụm 24T
    const isOutageZone02 = !!closedValves['VALVE-02']; // Cắt Mandarin Garden & Amsterdam
    const isOutageZone03 = !!closedValves['VALVE-03']; // Cắt Diamond Flower, Star City, HUD Tower
    const isOutageZone04 = !!closedValves['VALVE-04']; // Cắt Charmvit & Cụm N04/N05
    const isOutageZone05 = !!closedValves['VALVE-05']; // Cắt Vinhomes D'Capitale, Big C, Thăng Long No 1
    const isOutageZone06 = !!closedValves['VALVE-06']; // Cắt Keangnam 72, Handico, Bảo tàng HN
    const isOutageZone07 = !!closedValves['VALVE-07']; // Cắt Hapulico, Golden West, Imperia Garden
    const isOutageZone08 = !!closedValves['VALVE-08']; // Cắt Khu Biệt thự & Phố Nguyễn Thị Thập

    const create3DBuilding = ({
      pos = [0, 0, 0],
      size = [16, 40, 16],
      color = 0x38bdf8,
      name,
      id,
      floors,
      households,
      demandFlow,
      intakePressure,
      connectionPipe,
      cisternCapacity,
      meterId,
      dma,
      hasAntenna = false,
      isCutOff = false,
      cutOffValveName = ''
    }) => {
      if (!assetsLayer.buildings) return null;
      const bGroup = new THREE.Group();
      bGroup.position.set(pos[0], 0, pos[2]);

      const [w, h, d] = size;
      const activeColor = isCutOff ? 0xef4444 : color;

      const bodyGeo = new THREE.BoxGeometry(w, h, d);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: isXRay ? 0x0284c7 : activeColor,
        metalness: isXRay ? 0.05 : (isCutOff ? 0.2 : 0.42),
        roughness: isXRay ? 0.1 : 0.22,
        transparent: true,
        opacity: isXRay ? 0.12 : (isCutOff ? 0.75 : (isDark ? 0.92 : 0.94)),
        depthWrite: !isXRay,
        emissive: isCutOff ? 0x991b1b : (isXRay ? 0x0284c7 : (isDark ? activeColor : 0x000000)),
        emissiveIntensity: isCutOff ? 0.45 : (isXRay ? 0.04 : 0.18)
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.position.y = h / 2;
      bodyMesh.castShadow = !isXRay;
      bodyMesh.receiveShadow = !isXRay;
      bGroup.add(bodyMesh);

      const edges = new THREE.EdgesGeometry(bodyGeo);
      const edgeLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: isCutOff ? 0xfca5a5 : (isDark ? 0x7dd3fc : 0x0284c7),
          linewidth: isXRay ? 1.0 : (isCutOff ? 2.5 : 1.5),
          transparent: isXRay,
          opacity: isXRay ? 0.28 : 1.0
        })
      );
      bodyMesh.add(edgeLine);

      // Rooftop cistern removed -> Flat modern clean roof

      if (hasAntenna) {
        const antennaGeo = new THREE.CylinderGeometry(0.3, 0.5, 20, 8);
        const antennaMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85 });
        const antenna = new THREE.Mesh(antennaGeo, antennaMat);
        antenna.position.set(0, h + 12, 0);
        bGroup.add(antenna);

        const beaconGeo = new THREE.SphereGeometry(1.2, 8, 8);
        const beaconMat = new THREE.MeshBasicMaterial({ color: isCutOff ? 0xf59e0b : 0xef4444 });
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        beacon.position.set(0, h + 22, 0);
        bGroup.add(beacon);
      }

      const assetData = {
        name,
        id,
        type: 'Công Trình & Tòa Nhà Đô Thị',
        status: isCutOff
          ? `⚠️ ĐÃ CẮT NƯỚC CỤC BỘ (Do đóng chốt khóa: ${cutOffValveName})`
          : 'Cấp nước liên tục 24/7 (Đạt chuẩn QCVN 01-1:2018/BXD)',
        floors: `${floors} tầng`,
        households: households || '500 căn hộ',
        flow: isCutOff ? '0.0 m³/h (Mất áp)' : demandFlow || '45.0 m³/h',
        pressure: isCutOff ? '0.00 bar (MẤT NƯỚC)' : intakePressure || '3.25 bar',
        elevation: '+17.2m ASL',
        connectionPipe: connectionPipe || 'DN65 HDPE',
        cisternCapacity: cisternCapacity || '800 m³',
        meterId: meterId || `AMR-${id}`,
        dma: dma || 'DMA THNC-02',
        isCutOff: isCutOff,
        cutOffValveName: cutOffValveName
      };

      bGroup.userData = { name, id, type: 'Building', data: assetData };
      bodyMesh.userData = bGroup.userData;
      clickableObjectsRef.current.push(bodyMesh);

      buildingGroup.add(bGroup);
      return bGroup;
    };

    // Helper: Procedural Shophouse Block (Nhà phố phân lô 4-6 tầng san sát)
    const createDenseShophouseBlock = ({
      center,
      size,
      rows = 2,
      cols = 6,
      heightRange = [15, 22],
      zoneId,
      isCutOff,
      cutOffValveName,
      blockName = 'Khu Nhà Phố Liền Kề',
      dma = 'DMA THNC-02'
    }) => {
      if (!assetsLayer.buildings) return;
      const [cx, cz] = center;
      const [bw, bl] = size;
      const stepX = bw / cols;
      const stepZ = bl / rows;

      const blockGroup = new THREE.Group();

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = cx - bw / 2 + (c + 0.5) * stepX;
          const pz = cz - bl / 2 + (r + 0.5) * stepZ;
          const hSeed = ((Math.sin(px * 12.9898 + pz * 78.233) * 43758.5453) % 1 + 1) % 1;
          const h = heightRange[0] + hSeed * (heightRange[1] - heightRange[0]);
          const w = stepX * 0.88;
          const d = stepZ * 0.86;

          const houseGeo = new THREE.BoxGeometry(w, h, d);
          const colorPal = isDark
            ? [0x334155, 0x1e293b, 0x475569, 0x0f172a, 0x0369a1]
            : [0xf1f5f9, 0xe2e8f0, 0xcbd5e1, 0x94a3b8, 0xbfdbfe];
          const colIdx = Math.floor(hSeed * colorPal.length) % colorPal.length;

          const houseMat = new THREE.MeshStandardMaterial({
            color: isXRay ? 0x0284c7 : (isCutOff ? 0xef4444 : colorPal[colIdx]),
            roughness: isXRay ? 0.1 : 0.5,
            metalness: isXRay ? 0.05 : 0.1,
            transparent: true,
            opacity: isXRay ? 0.08 : (isCutOff ? 0.75 : 1.0),
            depthWrite: !isXRay,
            emissive: isCutOff ? 0x991b1b : (isDark ? (isXRay ? 0x0284c7 : colorPal[colIdx]) : 0x000000),
            emissiveIntensity: isCutOff ? 0.3 : (isDark ? (isXRay ? 0.02 : 0.12) : 0.0)
          });
          const houseMesh = new THREE.Mesh(houseGeo, houseMat);
          houseMesh.position.set(px, h / 2, pz);
          houseMesh.castShadow = true;
          houseMesh.receiveShadow = true;

          // Shophouse rooftop cistern removed -> Flat clean roof

          const houseEdges = new THREE.EdgesGeometry(houseGeo);
          const edgeMesh = new THREE.LineSegments(
            houseEdges,
            new THREE.LineBasicMaterial({
              color: isCutOff ? 0xfca5a5 : (isDark ? 0x38bdf8 : 0x64748b),
              linewidth: 1
            })
          );
          houseMesh.add(edgeMesh);

          const houseData = {
            name: `${blockName} (Lô ${r + 1}-${c + 1})`,
            id: `HOUSE-${zoneId}-${r + 1}-${c + 1}`,
            type: 'Nhà Phố / Shophouse Phân Lô',
            status: isCutOff ? `⚠️ MẤT NƯỚC (Do đóng van: ${cutOffValveName})` : 'Cấp nước ổn định',
            floors: `${Math.round(h / 3.6)} tầng`,
            households: '1 hộ gia đình + mặt bằng kinh doanh',
            flow: isCutOff ? '0.0 m³/h' : '0.45 m³/h',
            pressure: isCutOff ? '0.00 bar' : '3.22 bar',
            elevation: '+16.5m ASL',
            connectionPipe: 'DN32 HDPE',
            cisternCapacity: '2.5 m³ bồn Inox',
            meterId: `AMR-H-${zoneId}-${r + 1}${c + 1}`,
            dma: dma,
            isCutOff: isCutOff,
            cutOffValveName: cutOffValveName
          };
          houseMesh.userData = {
            name: `${blockName} (Lô ${r + 1}-${c + 1})`,
            id: `HOUSE-${zoneId}-${r + 1}-${c + 1}`,
            type: 'Building',
            data: houseData
          };
          clickableObjectsRef.current.push(houseMesh);
          blockGroup.add(houseMesh);
        }
      }
      buildingGroup.add(blockGroup);
    };

    // --- 1. KEANGNAM LANDMARK 72 & PHẠM HÙNG (ZONE 06) ---
    create3DBuilding({
      pos: [-540, 0, -320],
      size: [48, 165, 48],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Keangnam Hanoi Landmark 72 (350m - 72 Tầng)',
      id: 'BLDG-KEANGNAM-72',
      floors: 72,
      households: 'Khách sạn InterContinental + 200,000m² VP',
      demandFlow: '142.0 m³/h',
      intakePressure: '3.42 bar',
      connectionPipe: 'DN150 Gang cầu K9 kép',
      cisternCapacity: '4,500 m³',
      meterId: 'AMR-KEANGNAM-MAIN',
      dma: 'DMA Phía Tây',
      hasAntenna: true,
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06'
    });
    create3DBuilding({
      pos: [-590, 0, -320],
      size: [32, 105, 32],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tháp Căn Hộ Keangnam A (48 Tầng)',
      id: 'BLDG-KEANGNAM-A',
      floors: 48,
      households: '460 căn hộ cao cấp',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.38 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,200 m³',
      meterId: 'AMR-KEANGNAM-TOWER-A',
      dma: 'DMA Phía Tây',
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06'
    });
    create3DBuilding({
      pos: [-490, 0, -320],
      size: [32, 105, 32],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tháp Căn Hộ Keangnam B (48 Tầng)',
      id: 'BLDG-KEANGNAM-B',
      floors: 48,
      households: '460 căn hộ cao cấp',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.38 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,200 m³',
      meterId: 'AMR-KEANGNAM-TOWER-B',
      dma: 'DMA Phía Tây',
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06'
    });
    create3DBuilding({
      pos: [-460, 0, -220],
      size: [30, 80, 26],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tòa Tháp Handico Tower (33 Tầng)',
      id: 'BLDG-HANDICO',
      floors: 33,
      households: 'Trụ sở Tổng Công ty Handico',
      demandFlow: '32.0 m³/h',
      intakePressure: '3.35 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '800 m³',
      meterId: 'AMR-HANDICO',
      dma: 'DMA Phía Tây',
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06'
    });
    create3DBuilding({
      pos: [-460, 0, -170],
      size: [28, 68, 24],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tòa Tháp CEO Tower (27 Tầng)',
      id: 'BLDG-CEO',
      floors: 27,
      households: 'Tổ hợp Văn phòng CEO Group',
      demandFlow: '28.0 m³/h',
      intakePressure: '3.32 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '700 m³',
      meterId: 'AMR-CEO',
      dma: 'DMA Phía Tây',
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06'
    });
    create3DBuilding({
      pos: [-440, 0, -110],
      size: [56, 42, 56],
      color: isDark ? 0x10b981 : 0x059669,
      name: 'Bảo Tàng Hà Nội (Kim Tự Tháp Ngược)',
      id: 'BLDG-MUSEUM',
      floors: 4,
      households: 'Bảo tàng Quốc gia & Khu triển lãm 5 ha',
      demandFlow: '24.0 m³/h',
      intakePressure: '3.32 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '600 m³',
      meterId: 'AMR-MUSEUM',
      dma: 'DMA Phía Tây',
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06'
    });

    // --- 2. TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC) ---
    create3DBuilding({
      pos: [-440, 0, 140],
      size: [85, 36, 75],
      color: isDark ? 0xd97706 : 0xb45309,
      name: 'Trung Tâm Hội Nghị Quốc Gia (NCC - 64 ha)',
      id: 'BLDG-NCC',
      floors: 5,
      households: 'Hội trường 3,800 chỗ + Khuôn viên cảnh quan',
      demandFlow: '85.0 m³/h',
      intakePressure: '3.35 bar',
      connectionPipe: 'DN100 HDPE kép từ Đại lộ Thăng Long',
      cisternCapacity: '2,500 m³',
      meterId: 'AMR-NCC-MAIN',
      dma: 'DMA Hội Nghị Quốc Gia'
    });

    // --- 3. VINHOMES D'CAPITALE & BIG C THĂNG LONG (ZONE 05) ---
    create3DBuilding({
      pos: [-280, 0, -180],
      size: [70, 24, 60],
      color: isDark ? 0xf59e0b : 0xd97706,
      name: 'Đại Siêu Thị Big C Thăng Long (GO!)',
      id: 'BLDG-BIG-C',
      floors: 3,
      households: 'Trung tâm mua sắm bán lẻ 12,000m²',
      demandFlow: '65.0 m³/h',
      intakePressure: '3.28 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,500 m³',
      meterId: 'AMR-BIGC-01',
      dma: 'DMA THNC-01',
      isCutOff: isOutageZone05,
      cutOffValveName: 'Van V-DCP-05'
    });
    // 6 Towers of Vinhomes D'Capitale
    [-230, -190, -150].forEach((vx, idx) => {
      create3DBuilding({
        pos: [vx, 0, -220],
        size: [26, 95 + idx * 4, 26],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `Tổ Hợp Vinhomes D'Capitale C${idx + 1} (${40 + idx} Tầng)`,
        id: `BLDG-DCAPITALE-${idx + 1}`,
        floors: 40 + idx,
        households: '520 căn hộ cao cấp',
        demandFlow: '52.0 m³/h',
        intakePressure: '3.30 bar',
        connectionPipe: 'DN80 HDPE',
        cisternCapacity: '1,400 m³',
        meterId: `AMR-DCAPITALE-C${idx + 1}`,
        dma: 'DMA THNC-01',
        isCutOff: isOutageZone05,
        cutOffValveName: 'Van V-DCP-05'
      });
      create3DBuilding({
        pos: [vx, 0, -260],
        size: [26, 92 + idx * 4, 26],
        color: isDark ? 0x0369a1 : 0x0284c7,
        name: `Tổ Hợp Vinhomes D'Capitale C${idx + 4} (${39 + idx} Tầng)`,
        id: `BLDG-DCAPITALE-${idx + 4}`,
        floors: 39 + idx,
        households: '500 căn hộ cao cấp',
        demandFlow: '50.0 m³/h',
        intakePressure: '3.30 bar',
        connectionPipe: 'DN80 HDPE',
        cisternCapacity: '1,350 m³',
        meterId: `AMR-DCAPITALE-C${idx + 4}`,
        dma: 'DMA THNC-01',
        isCutOff: isOutageZone05,
        cutOffValveName: 'Van V-DCP-05'
      });
    });
    // Thăng Long Number One (Số 1 Đại lộ Thăng Long - 2 tháp 40T)
    create3DBuilding({
      pos: [-360, 0, 40],
      size: [32, 98, 30],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tháp Thăng Long Number One A (40 Tầng)',
      id: 'BLDG-TL-NO1-A',
      floors: 40,
      households: '540 căn hộ xanh',
      demandFlow: '54.0 m³/h',
      intakePressure: '3.32 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,500 m³',
      meterId: 'AMR-TL-NO1-A',
      dma: 'DMA THNC-01',
      isCutOff: isOutageZone05,
      cutOffValveName: 'Van V-DCP-05'
    });
    create3DBuilding({
      pos: [-360, 0, 85],
      size: [32, 98, 30],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tháp Thăng Long Number One B (40 Tầng)',
      id: 'BLDG-TL-NO1-B',
      floors: 40,
      households: '540 căn hộ xanh',
      demandFlow: '54.0 m³/h',
      intakePressure: '3.32 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,500 m³',
      meterId: 'AMR-TL-NO1-B',
      dma: 'DMA THNC-01',
      isCutOff: isOutageZone05,
      cutOffValveName: 'Van V-DCP-05'
    });
    // Viglacera Tower (30 Tầng)
    create3DBuilding({
      pos: [-380, 0, -30],
      size: [28, 76, 26],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tòa Tháp Viglacera Tower (30 Tầng)',
      id: 'BLDG-VIGLACERA',
      floors: 30,
      households: 'Trụ sở Tổng Công ty Viglacera',
      demandFlow: '30.0 m³/h',
      intakePressure: '3.30 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '800 m³',
      meterId: 'AMR-VIGLACERA',
      dma: 'DMA THNC-01',
      isCutOff: isOutageZone05,
      cutOffValveName: 'Van V-DCP-05'
    });

    // --- 4. TỔ HỢP CHARMVIT TOWER & CỤM N04/N05 (ZONE 04) ---
    create3DBuilding({
      pos: [65, 0, -215],
      size: [38, 72, 32],
      color: isDark ? 0xd97706 : 0xb45309,
      name: 'Tổ Hợp Charmvit Tower & Grand Plaza',
      id: 'BLDG-CHARMVIT',
      floors: 27,
      households: '540 phòng KS 5 sao & 45,000m² VP Đại sứ quán Hàn Quốc',
      demandFlow: '58.0 m³/h',
      intakePressure: '3.25 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,800 m³',
      meterId: 'AMR-CHARMVIT-PLAZA',
      dma: 'DMA THNC-01',
      isCutOff: isOutageZone04,
      cutOffValveName: 'Van V-TDN-04'
    });
    // Cụm N04 Hoàng Đạo Thúy (3 tháp 29 tầng)
    [-20, 20, 60].forEach((nx, idx) => {
      create3DBuilding({
        pos: [nx, 0, -140],
        size: [24, 72, 22],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `Tòa Căn Hộ Cao Cấp N04-${String.fromCharCode(65 + idx)} (29 Tầng)`,
        id: `BLDG-N04-${String.fromCharCode(65 + idx)}`,
        floors: 29,
        households: '360 căn hộ cao cấp',
        demandFlow: '36.0 m³/h',
        intakePressure: '3.26 bar',
        connectionPipe: 'DN65 HDPE',
        cisternCapacity: '950 m³',
        meterId: `AMR-N04-${String.fromCharCode(65 + idx)}`,
        dma: 'DMA THNC-01',
        isCutOff: isOutageZone04,
        cutOffValveName: 'Van V-TDN-04'
      });
    });
    // Cụm N05 Hoàng Đạo Thúy (2 tháp 34T & 3 tháp 29T)
    create3DBuilding({
      pos: [40, 0, -85],
      size: [28, 85, 26],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tòa Tháp N05-29T1 Hoàng Đạo Thúy (34 Tầng)',
      id: 'BLDG-N05-34T1',
      floors: 34,
      households: '480 căn hộ',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.24 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,200 m³',
      meterId: 'AMR-N05-34T1',
      dma: 'DMA THNC-01',
      isCutOff: isOutageZone04,
      cutOffValveName: 'Van V-TDN-04'
    });
    create3DBuilding({
      pos: [80, 0, -85],
      size: [28, 85, 26],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tòa Tháp N05-29T2 Hoàng Đạo Thúy (34 Tầng)',
      id: 'BLDG-N05-34T2',
      floors: 34,
      households: '480 căn hộ',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.24 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,200 m³',
      meterId: 'AMR-N05-34T2',
      dma: 'DMA THNC-01',
      isCutOff: isOutageZone04,
      cutOffValveName: 'Van V-TDN-04'
    });

    // --- 5. LÕI ĐÔ THỊ HOÀNG ĐẠO THÚY: THÁP 34T, 24T, 17T (ZONE 01) ---
    create3DBuilding({
      pos: [25, 0, 20],
      size: [26, 82, 26],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy',
      id: 'BLDG-34T-HDT',
      floors: 34,
      households: '650 căn hộ (~2,600 cư dân)',
      demandFlow: '58.0 m³/h',
      intakePressure: '3.25 bar',
      connectionPipe: 'DN80 HDPE nối từ trục D600',
      cisternCapacity: '1,500 m³',
      meterId: 'AMR-34T-MAIN',
      dma: 'DMA THNC-02',
      hasAntenna: true,
      isCutOff: isOutageZone01,
      cutOffValveName: 'Van V-HDT-01'
    });
    // Cụm 24T1, 24T2, 24T3
    create3DBuilding({
      pos: [-35, 0, 30],
      size: [20, 58, 18],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tòa Chung Cư 24T1 Hoàng Đạo Thúy',
      id: 'BLDG-24T1',
      floors: 24,
      households: '280 căn hộ',
      demandFlow: '28.0 m³/h',
      intakePressure: '3.22 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '800 m³',
      meterId: 'AMR-24T1',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone01,
      cutOffValveName: 'Van V-HDT-01'
    });
    create3DBuilding({
      pos: [-35, 0, -30],
      size: [20, 58, 18],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tòa Chung Cư 24T2 Hoàng Đạo Thúy',
      id: 'BLDG-24T2',
      floors: 24,
      households: '280 căn hộ',
      demandFlow: '28.0 m³/h',
      intakePressure: '3.22 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '800 m³',
      meterId: 'AMR-24T2',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone01,
      cutOffValveName: 'Van V-HDT-01'
    });
    create3DBuilding({
      pos: [-75, 0, 0],
      size: [20, 58, 18],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tòa Chung Cư 24T3 Hoàng Đạo Thúy',
      id: 'BLDG-24T3',
      floors: 24,
      households: '280 căn hộ',
      demandFlow: '28.0 m³/h',
      intakePressure: '3.22 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '800 m³',
      meterId: 'AMR-24T3',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone01,
      cutOffValveName: 'Van V-HDT-01'
    });
    // Dãy 17T (17T1 - 17T6)
    [75, 115, 155].forEach((zPos, idx) => {
      create3DBuilding({
        pos: [42, 0, zPos],
        size: [18, 44, 16],
        color: isDark ? 0x0ea5e9 : 0x0284c7,
        name: `Tòa Chung Cư 17T${idx + 1} Hoàng Đạo Thúy`,
        id: `BLDG-17T${idx + 1}`,
        floors: 17,
        households: '180 căn hộ',
        demandFlow: '18.0 m³/h',
        intakePressure: '3.20 bar',
        connectionPipe: 'DN50 HDPE',
        cisternCapacity: '500 m³',
        meterId: `AMR-17T${idx + 1}`,
        dma: 'DMA THNC-02',
        isCutOff: isOutageZone01,
        cutOffValveName: 'Van V-HDT-01'
      });
      create3DBuilding({
        pos: [-35, 0, zPos],
        size: [18, 44, 16],
        color: isDark ? 0x0ea5e9 : 0x0284c7,
        name: `Tòa Chung Cư 17T${idx + 4} Hoàng Đạo Thúy`,
        id: `BLDG-17T${idx + 4}`,
        floors: 17,
        households: '180 căn hộ',
        demandFlow: '18.0 m³/h',
        intakePressure: '3.20 bar',
        connectionPipe: 'DN50 HDPE',
        cisternCapacity: '500 m³',
        meterId: `AMR-17T${idx + 4}`,
        dma: 'DMA THNC-02',
        isCutOff: isOutageZone01,
        cutOffValveName: 'Van V-HDT-01'
      });
    });

    // --- 6. DIAMOND FLOWER, STAR CITY, HUD TOWER (ZONE 03) ---
    create3DBuilding({
      pos: [35, 0, 155],
      size: [30, 95, 30],
      color: isDark ? 0x0284c7 : 0x075985,
      name: 'Tòa Tháp Diamond Flower Tower (36 Tầng - 176m)',
      id: 'BLDG-DIAMOND-FLOWER',
      floors: 36,
      households: '380 căn hộ + 35,000m² VP hạng A',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.28 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,600 m³',
      meterId: 'AMR-DIAMOND-01',
      dma: 'DMA THNC-02',
      hasAntenna: true,
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03'
    });
    create3DBuilding({
      pos: [80, 0, 155],
      size: [26, 72, 24],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tổ Hợp Chung Cư Star City Lê Văn Lương (27 Tầng)',
      id: 'BLDG-STAR-CITY',
      floors: 27,
      households: '420 căn hộ cao cấp',
      demandFlow: '42.0 m³/h',
      intakePressure: '3.25 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,100 m³',
      meterId: 'AMR-STAR-CITY',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03'
    });
    create3DBuilding({
      pos: [130, 0, 155],
      size: [28, 72, 26],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tòa Tháp The Golden Palm (27 Tầng)',
      id: 'BLDG-GOLDEN-PALM',
      floors: 27,
      households: '400 căn hộ',
      demandFlow: '40.0 m³/h',
      intakePressure: '3.24 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '1,000 m³',
      meterId: 'AMR-GOLDEN-PALM',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03'
    });
    // HUD Tower (2 tháp tam giác 32T & 27T)
    create3DBuilding({
      pos: [-60, 0, 155],
      size: [28, 86, 26],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tòa Tháp HUD Tower A (32 Tầng)',
      id: 'BLDG-HUD-TOWER-A',
      floors: 32,
      households: 'Trụ sở Tổng Công ty Đầu tư Phát triển Nhà HUD',
      demandFlow: '36.0 m³/h',
      intakePressure: '3.26 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,200 m³',
      meterId: 'AMR-HUD-A',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03'
    });
    create3DBuilding({
      pos: [-100, 0, 155],
      size: [26, 74, 24],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tòa Tháp HUD Tower B (27 Tầng)',
      id: 'BLDG-HUD-TOWER-B',
      floors: 27,
      households: 'Văn phòng thương mại & tài chính',
      demandFlow: '30.0 m³/h',
      intakePressure: '3.26 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '900 m³',
      meterId: 'AMR-HUD-B',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03'
    });
    // MB Grand Tower (25 Tầng)
    create3DBuilding({
      pos: [180, 0, 155],
      size: [28, 70, 24],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Hội Sở MB Grand Tower (25 Tầng)',
      id: 'BLDG-MB-TOWER',
      floors: 25,
      households: 'Hội sở Ngân hàng TMCP Quân Đội',
      demandFlow: '26.0 m³/h',
      intakePressure: '3.24 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '750 m³',
      meterId: 'AMR-MB-TOWER',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03'
    });

    // --- 7. MANDARIN GARDEN & AMSTERDAM (ZONE 02) ---
    [-150, -110].forEach((mx, idx) => {
      create3DBuilding({
        pos: [mx, 0, 45],
        size: [32, 65, 34],
        color: isDark ? 0xd97706 : 0xb45309,
        name: `Mandarin Garden Block ${String.fromCharCode(65 + idx)} (29 Tầng)`,
        id: `BLDG-MANDARIN-${String.fromCharCode(65 + idx)}`,
        floors: 29,
        households: '260 căn hộ cao cấp',
        demandFlow: '26.0 m³/h',
        intakePressure: '3.22 bar',
        connectionPipe: 'DN65 HDPE',
        cisternCapacity: '850 m³',
        meterId: `AMR-MANDARIN-${String.fromCharCode(65 + idx)}`,
        dma: 'DMA THNC-03',
        isCutOff: isOutageZone02,
        cutOffValveName: 'Van V-HMG-02'
      });
      create3DBuilding({
        pos: [mx, 0, -5],
        size: [32, 65, 34],
        color: isDark ? 0xd97706 : 0xb45309,
        name: `Mandarin Garden Block ${String.fromCharCode(67 + idx)} (29 Tầng)`,
        id: `BLDG-MANDARIN-${String.fromCharCode(67 + idx)}`,
        floors: 29,
        households: '260 căn hộ cao cấp',
        demandFlow: '26.0 m³/h',
        intakePressure: '3.22 bar',
        connectionPipe: 'DN65 HDPE',
        cisternCapacity: '850 m³',
        meterId: `AMR-MANDARIN-${String.fromCharCode(67 + idx)}`,
        dma: 'DMA THNC-03',
        isCutOff: isOutageZone02,
        cutOffValveName: 'Van V-HMG-02'
      });
    });
    create3DBuilding({
      pos: [-135, 0, -95],
      size: [52, 24, 40],
      color: isDark ? 0x10b981 : 0x059669,
      name: 'Trường THPT Chuyên Hà Nội - Amsterdam',
      id: 'BLDG-AMS',
      floors: 5,
      households: '3,200 học sinh & giáo viên',
      demandFlow: '32.0 m³/h',
      intakePressure: '3.24 bar',
      connectionPipe: 'DN50 HDPE',
      cisternCapacity: '500 m³',
      meterId: 'AMR-AMS-SCHOOL',
      dma: 'DMA THNC-03',
      isCutOff: isOutageZone02,
      cutOffValveName: 'Van V-HMG-02'
    });

    // --- 8. HAPULICO COMPLEX, GOLDEN WEST & IMPERIA (ZONE 07) ---
    // Hapulico Complex (4 tháp chính)
    [160, 200].forEach((hx, idx) => {
      create3DBuilding({
        pos: [hx, 0, 270],
        size: [32, 74, 28],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `Tổ Hợp Hapulico Complex Block ${String.fromCharCode(65 + idx)} (31 Tầng)`,
        id: `BLDG-HAPULICO-${String.fromCharCode(65 + idx)}`,
        floors: 31,
        households: '380 căn hộ',
        demandFlow: '38.0 m³/h',
        intakePressure: '3.18 bar',
        connectionPipe: 'DN80 HDPE',
        cisternCapacity: '1,100 m³',
        meterId: `AMR-HAPULICO-${String.fromCharCode(65 + idx)}`,
        dma: 'DMA THNC-03',
        isCutOff: isOutageZone07,
        cutOffValveName: 'Van V-HAP-07'
      });
      create3DBuilding({
        pos: [hx, 0, 310],
        size: [32, 74, 28],
        color: isDark ? 0x0369a1 : 0x0284c7,
        name: `Tổ Hợp Hapulico Complex Block ${String.fromCharCode(67 + idx)} (31 Tầng)`,
        id: `BLDG-HAPULICO-${String.fromCharCode(67 + idx)}`,
        floors: 31,
        households: '380 căn hộ',
        demandFlow: '38.0 m³/h',
        intakePressure: '3.18 bar',
        connectionPipe: 'DN80 HDPE',
        cisternCapacity: '1,100 m³',
        meterId: `AMR-HAPULICO-${String.fromCharCode(67 + idx)}`,
        dma: 'DMA THNC-03',
        isCutOff: isOutageZone07,
        cutOffValveName: 'Van V-HAP-07'
      });
    });
    // Golden West
    create3DBuilding({
      pos: [110, 0, 270],
      size: [30, 68, 28],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tổ Hợp Chung Cư Golden West (27 Tầng)',
      id: 'BLDG-GOLDEN-WEST',
      floors: 27,
      households: '350 căn hộ',
      demandFlow: '35.0 m³/h',
      intakePressure: '3.18 bar',
      connectionPipe: 'DN65 HDPE',
      cisternCapacity: '900 m³',
      meterId: 'AMR-GOLDEN-WEST',
      dma: 'DMA THNC-03',
      isCutOff: isOutageZone07,
      cutOffValveName: 'Van V-HAP-07'
    });
    // Imperia Garden Nguyễn Tuân (2 tháp 35T)
    create3DBuilding({
      pos: [250, 0, 340],
      size: [30, 85, 28],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tổ Hợp Imperia Garden Tháp A (35 Tầng)',
      id: 'BLDG-IMPERIA-A',
      floors: 35,
      households: '450 căn hộ cao cấp',
      demandFlow: '45.0 m³/h',
      intakePressure: '3.16 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,300 m³',
      meterId: 'AMR-IMPERIA-A',
      dma: 'DMA THNC-03',
      isCutOff: isOutageZone07,
      cutOffValveName: 'Van V-HAP-07'
    });
    create3DBuilding({
      pos: [290, 0, 340],
      size: [30, 85, 28],
      color: isDark ? 0x0369a1 : 0x0284c7,
      name: 'Tổ Hợp Imperia Garden Tháp B (35 Tầng)',
      id: 'BLDG-IMPERIA-B',
      floors: 35,
      households: '450 căn hộ cao cấp',
      demandFlow: '45.0 m³/h',
      intakePressure: '3.16 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,300 m³',
      meterId: 'AMR-IMPERIA-B',
      dma: 'DMA THNC-03',
      isCutOff: isOutageZone07,
      cutOffValveName: 'Van V-HAP-07'
    });

    // --- 9. KHU BIỆT THỰ & TRƯỜNG NGÔI SAO (ZONE 08) ---
    const villaGroup = new THREE.Group();
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        const vx = 65 + c * 16;
        const vz = -30 + r * 18;
        const vGeo = new THREE.BoxGeometry(10, 14, 10);
        const vMat = new THREE.MeshStandardMaterial({
          color: isOutageZone08 ? 0xef4444 : (isDark ? 0x64748b : 0x94a3b8),
          roughness: 0.5
        });
        const vMesh = new THREE.Mesh(vGeo, vMat);
        vMesh.position.set(vx, 7, vz);
        vMesh.castShadow = true;
        villaGroup.add(vMesh);
      }
    }
    villaGroup.userData = {
      name: 'Khu Biệt Thự & Liền Kề BT1 - BT6',
      id: 'BLDG-VILLAS',
      type: 'Khu Biệt Thự Thấp Tầng',
      data: {
        name: 'Khu Biệt Thự & Liền Kề BT1 - BT6',
        id: 'BLDG-VILLAS',
        type: 'Khu Biệt Thự Thấp Tầng',
        status: isOutageZone08 ? '⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08' : 'Cấp nước ổn định',
        floors: '3.5 tầng',
        households: '150 căn biệt thự',
        flow: isOutageZone08 ? '0.0 m³/h' : '22.5 m³/h',
        pressure: isOutageZone08 ? '0.00 bar' : '3.18 bar',
        elevation: '+16.5m ASL',
        connectionPipe: 'DN40 - DN50 HDPE',
        cisternCapacity: '15 m³ / biệt thự',
        meterId: 'Cụm đồng hồ cơ sở Class C',
        dma: 'DMA THNC-02',
        isCutOff: isOutageZone08,
        cutOffValveName: 'Van V-NTT-08'
      }
    };
    villaGroup.children.forEach(c => {
      c.userData = villaGroup.userData;
      clickableObjectsRef.current.push(c);
    });
    buildingGroup.add(villaGroup);

    create3DBuilding({
      pos: [110, 0, 35],
      size: [36, 18, 30],
      color: isDark ? 0x10b981 : 0x059669,
      name: 'Trường Liên Cấp Tiểu Học & THCS Ngôi Sao Hà Nội',
      id: 'BLDG-NGOI-SAO',
      floors: 5,
      households: '2,200 học sinh & CBGV',
      demandFlow: '24.0 m³/h',
      intakePressure: '3.20 bar',
      connectionPipe: 'DN50 HDPE',
      cisternCapacity: '400 m³',
      meterId: 'AMR-NGOI-SAO',
      dma: 'DMA THNC-02',
      isCutOff: isOutageZone08,
      cutOffValveName: 'Van V-NTT-08'
    });

    // =========================================================================
    // DENSE PROCEDURAL SHOPHOUSE BLOCKS (350+ BUILDINGS FILLING THE DISTRICT)
    // =========================================================================
    // Block 1: Phố Hoàng Ngân - Nguyễn Thị Thập (Zone 08)
    createDenseShophouseBlock({
      center: [75, 45],
      size: [110, 60],
      rows: 2,
      cols: 8,
      heightRange: [15, 21],
      zoneId: 'HN-NTT',
      isCutOff: isOutageZone08,
      cutOffValveName: 'Van V-NTT-08',
      blockName: 'Phố Hoàng Ngân - Nhà Phố Liền Kề'
    });
    // Block 2: Phố Hoàng Ngân - Lê Văn Lương (Zone 03)
    createDenseShophouseBlock({
      center: [75, 135],
      size: [110, 60],
      rows: 2,
      cols: 8,
      heightRange: [16, 24],
      zoneId: 'HN-LVL',
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03',
      blockName: 'Phố Hoàng Ngân - Shophouse Lê Văn Lương'
    });
    // Block 3: Phố Đỗ Quang - Nguyễn Thị Thập (Zone 04)
    createDenseShophouseBlock({
      center: [75, -45],
      size: [110, 60],
      rows: 2,
      cols: 8,
      heightRange: [16, 22],
      zoneId: 'DQ-NTT',
      isCutOff: isOutageZone04,
      cutOffValveName: 'Van V-TDN-04',
      blockName: 'Phố Đỗ Quang - Dãy Nhà Phố Ẩm Thực'
    });
    // Block 4: Phố Đỗ Quang - Trần Duy Hưng (Zone 04)
    createDenseShophouseBlock({
      center: [75, -135],
      size: [110, 60],
      rows: 2,
      cols: 8,
      heightRange: [16, 24],
      zoneId: 'DQ-TDH',
      isCutOff: isOutageZone04,
      cutOffValveName: 'Van V-TDN-04',
      blockName: 'Phố Đỗ Quang - Shophouse Chuyên Gia'
    });
    // Block 5: Nguyễn Thị Định - Hoàng Ngân (Zone 08)
    createDenseShophouseBlock({
      center: [200, 45],
      size: [95, 60],
      rows: 2,
      cols: 6,
      heightRange: [15, 22],
      zoneId: 'NTD-HN',
      isCutOff: isOutageZone08,
      cutOffValveName: 'Van V-NTT-08',
      blockName: 'Phố Nguyễn Thị Định - Dãy Nhà Phố Thương Mại'
    });
    // Block 6: Nguyễn Thị Định - Lê Văn Lương (Zone 03)
    createDenseShophouseBlock({
      center: [200, 135],
      size: [95, 60],
      rows: 2,
      cols: 6,
      heightRange: [16, 24],
      zoneId: 'NTD-LVL',
      isCutOff: isOutageZone03,
      cutOffValveName: 'Van V-LVL-03',
      blockName: 'Phố Nguyễn Thị Định - Shophouse Dịch Vụ'
    });
    // Block 7: Phố Quan Nhân (Zone 08)
    createDenseShophouseBlock({
      center: [120, 215],
      size: [170, 40],
      rows: 2,
      cols: 10,
      heightRange: [14, 20],
      zoneId: 'QN-01',
      isCutOff: isOutageZone08,
      cutOffValveName: 'Van V-NTT-08',
      blockName: 'Khu Dân Cư Phố Quan Nhân'
    });
    // Block 8: Phố Nhân Hòa (Zone 07)
    createDenseShophouseBlock({
      center: [120, 265],
      size: [170, 40],
      rows: 2,
      cols: 10,
      heightRange: [14, 20],
      zoneId: 'NH-01',
      isCutOff: isOutageZone07,
      cutOffValveName: 'Van V-HAP-07',
      blockName: 'Khu Dân Cư Phố Nhân Hòa & Chính Kinh'
    });
    // Block 9: Vũ Trọng Phụng - Ngụy Như Kon Tum (Zone 07)
    createDenseShophouseBlock({
      center: [230, 310],
      size: [110, 50],
      rows: 2,
      cols: 8,
      heightRange: [15, 22],
      zoneId: 'VTP-NNKT',
      isCutOff: isOutageZone07,
      cutOffValveName: 'Van V-HAP-07',
      blockName: 'Phố Vũ Trọng Phụng - Shophouse Chợ Thuốc'
    });
    // Block 10: Nguyễn Tuân - Nguyễn Huy Tưởng (Zone 07)
    createDenseShophouseBlock({
      center: [290, 390],
      size: [110, 55],
      rows: 2,
      cols: 8,
      heightRange: [16, 24],
      zoneId: 'NT-NHT',
      isCutOff: isOutageZone07,
      cutOffValveName: 'Van V-HAP-07',
      blockName: 'Phố Nguyễn Tuân - Dãy Nhà Liền Kề'
    });
    // Block 11: Nội khu 34T & 24T (Zone 01)
    createDenseShophouseBlock({
      center: [-80, 50],
      size: [100, 55],
      rows: 2,
      cols: 7,
      heightRange: [15, 22],
      zoneId: '34T-IN',
      isCutOff: isOutageZone01,
      cutOffValveName: 'Van V-HDT-01',
      blockName: 'Khu Nhà Phố Nội Khu Hoàng Đạo Thúy'
    });
    createDenseShophouseBlock({
      center: [-80, -45],
      size: [100, 55],
      rows: 2,
      cols: 7,
      heightRange: [15, 22],
      zoneId: '24T-IN',
      isCutOff: isOutageZone01,
      cutOffValveName: 'Van V-HDT-01',
      blockName: 'Khu Liền Kề Cụm 24T Hoàng Đạo Thúy'
    });
    // Block 12: Ven hồ Nhân Chính & Phía Nam Khuất Duy Tiến (Zone 05)
    createDenseShophouseBlock({
      center: [-240, 250],
      size: [130, 80],
      rows: 3,
      cols: 8,
      heightRange: [15, 22],
      zoneId: 'HNC-KDT',
      isCutOff: isOutageZone05,
      cutOffValveName: 'Van V-DCP-05',
      blockName: 'Khu Đô Thị Ven Hồ Điều Hòa Nhân Chính'
    });
    createDenseShophouseBlock({
      center: [-320, 340],
      size: [130, 70],
      rows: 2,
      cols: 8,
      heightRange: [14, 20],
      zoneId: 'KDT-S',
      isCutOff: isOutageZone05,
      cutOffValveName: 'Van V-DCP-05',
      blockName: 'Khu Dân Cư Nam Khuất Duy Tiến'
    });
    // Block 13: Mễ Trì Hạ & Sudico (Zone 06)
    createDenseShophouseBlock({
      center: [-300, -380],
      size: [160, 65],
      rows: 2,
      cols: 10,
      heightRange: [15, 22],
      zoneId: 'MTH-01',
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06',
      blockName: 'Khu Đô Thị Mễ Trì Hạ - Sudico'
    });
    createDenseShophouseBlock({
      center: [-480, -450],
      size: [130, 55],
      rows: 2,
      cols: 8,
      heightRange: [14, 20],
      zoneId: 'MT-W',
      isCutOff: isOutageZone06,
      cutOffValveName: 'Van V-KNG-06',
      blockName: 'Khu Liền Kề Phía Tây Mễ Trì'
    });
    // Block 14: Trung Hòa - Trung Yên (Zone 04)
    createDenseShophouseBlock({
      center: [240, -260],
      size: [140, 65],
      rows: 2,
      cols: 9,
      heightRange: [15, 22],
      zoneId: 'TH-TY1',
      isCutOff: isOutageZone04,
      cutOffValveName: 'Van V-TDN-04',
      blockName: 'Khu Đô Thị Trung Yên - Mạc Thái Tổ'
    });
    createDenseShophouseBlock({
      center: [240, -330],
      size: [140, 55],
      rows: 2,
      cols: 9,
      heightRange: [15, 22],
      zoneId: 'TH-TY2',
      isCutOff: isOutageZone04,
      cutOffValveName: 'Van V-TDN-04',
      blockName: 'Khu Phân Lô Phố Vũ Phạm Hàm'
    });


    // =========================================================================
    // 10B. CÁC CÔNG TRÌNH TRỌNG ĐIỂM PHỦ KÍN 4 PHÂN KHU NGOẠI VI (R = 1,100M)
    // =========================================================================
    // --- 14. GÓC TÂY NAM: BẢO TÀNG HÀ NỘI & KHÁCH SẠN JW MARRIOTT ---
    create3DBuilding({
      pos: [-660, 0, 150],
      size: [64, 34, 64],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Bảo Tàng Hà Nội (Hanoi Museum - Kim tự tháp ngược)',
      id: 'BLDG-BTHN',
      floors: 4,
      households: 'Công trình văn hóa trọng điểm quốc gia (54.000m²)',
      demandFlow: '45.0 m³/h',
      intakePressure: '3.18 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,200 m³',
      meterId: 'AMR-BTHN-01',
      dma: 'DMA Hội Nghị Quốc Gia'
    });

    create3DBuilding({
      pos: [-840, 0, 180],
      size: [85, 32, 55],
      color: isDark ? 0x0284c7 : 0x0ea5e9,
      name: 'Khách Sạn 5 Sao Quốc Tế JW Marriott Hanoi',
      id: 'BLDG-JWM',
      floors: 9,
      households: '450 phòng khách sạn 5 sao cao cấp & Trung tâm hội nghị',
      demandFlow: '75.0 m³/h',
      intakePressure: '3.15 bar',
      connectionPipe: 'DN125 Gang dẻo',
      cisternCapacity: '2,500 m³',
      meterId: 'AMR-JWM-01',
      dma: 'DMA Mễ Trì'
    });

    create3DBuilding({
      pos: [-620, 0, 260],
      size: [55, 20, 55],
      color: isDark ? 0x0284c7 : 0x0284c7,
      name: 'Cung Triển Lãm Kiến Trúc Quy Hoạch Quốc Gia (NECC)',
      id: 'BLDG-NECC',
      floors: 3,
      households: 'Trung tâm triển lãm quy hoạch & kiến trúc Thủ đô',
      demandFlow: '30.0 m³/h',
      intakePressure: '3.22 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '800 m³',
      meterId: 'AMR-NECC-01',
      dma: 'DMA Hội Nghị Quốc Gia'
    });

    // --- 15. GÓC TÂY BẮC: CỤM THE MANOR MỸ ĐÌNH, HANDICO & CEO TOWERS ---
    create3DBuilding({
      pos: [-520, 0, -430],
      size: [36, 115, 36],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tháp Văn Phòng Handico Tower (33 Tầng - Phạm Hùng)',
      id: 'BLDG-HANDICO',
      floors: 33,
      households: '40.000m² văn phòng Hạng A',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.20 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,600 m³',
      meterId: 'AMR-HANDICO-01',
      dma: 'DMA Keangnam'
    });

    create3DBuilding({
      pos: [-520, 0, -490],
      size: [32, 95, 32],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tháp CEO Tower (27 Tầng - Trụ sở Tập đoàn CEO)',
      id: 'BLDG-CEO',
      floors: 27,
      households: '28.000m² sàn văn phòng',
      demandFlow: '38.0 m³/h',
      intakePressure: '3.25 bar',
      connectionPipe: 'DN80 HDPE',
      cisternCapacity: '1,200 m³',
      meterId: 'AMR-CEO-01',
      dma: 'DMA Keangnam'
    });

    [-760, -820, -880].forEach((mx, mIdx) => {
      create3DBuilding({
        pos: [mx, 0, -420],
        size: [42, 90, 42],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `Tổ Hợp Căn Hộ Cao Cấp The Manor Mỹ Đình - Tháp ${String.fromCharCode(65 + mIdx)} (26T)`,
        id: `BLDG-MANOR-${mIdx + 1}`,
        floors: 26,
        households: '420 căn hộ cao cấp & Khu phố thương mại Paris',
        demandFlow: '42.0 m³/h',
        intakePressure: '3.12 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,400 m³',
        meterId: `AMR-MANOR-0${mIdx + 1}`,
        dma: 'DMA Mễ Trì'
      });
    });

    // --- 16. GÓC ĐÔNG BẮC: ĐẠI HỌC LAO ĐỘNG XÃ HỘI & GOLDEN PARK TOWER ---
    create3DBuilding({
      pos: [480, 0, -220],
      size: [70, 32, 50],
      color: isDark ? 0x0284c7 : 0x0284c7,
      name: 'Trường Đại Học Lao Động - Xã Hội (Giảng Đường A & B)',
      id: 'BLDG-DHLDXH',
      floors: 8,
      households: 'Khuôn viên đào tạo 15.000 sinh viên & Cán bộ giảng viên',
      demandFlow: '60.0 m³/h',
      intakePressure: '3.22 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,800 m³',
      meterId: 'AMR-DHLDXH-01',
      dma: 'DMA Trung Hòa'
    });

    create3DBuilding({
      pos: [640, 0, -240],
      size: [60, 30, 45],
      color: isDark ? 0x0284c7 : 0x0284c7,
      name: 'Trường Đại Học Phòng Cháy Chữa Cháy (Bộ Công An)',
      id: 'BLDG-DHPCCC',
      floors: 7,
      households: 'Khu huấn luyện & Đào tạo chuyên gia PCCC',
      demandFlow: '40.0 m³/h',
      intakePressure: '3.30 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,500 m³',
      meterId: 'AMR-DHPCCC-01',
      dma: 'DMA Trung Hòa'
    });

    create3DBuilding({
      pos: [680, 0, -420],
      size: [40, 145, 40],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tổ Hợp Chung Cư & Khách Sạn Golden Park Tower (45 Tầng)',
      id: 'BLDG-GOLDEN-PARK',
      floors: 45,
      households: '410 căn hộ cao cấp & 240 phòng khách sạn 4 sao',
      demandFlow: '55.0 m³/h',
      intakePressure: '3.10 bar',
      connectionPipe: 'DN125 Gang dẻo',
      cisternCapacity: '2,000 m³',
      meterId: 'AMR-GP-01',
      dma: 'DMA Yên Hòa'
    });

    [420, 480].forEach((hx, hIdx) => {
      create3DBuilding({
        pos: [hx, 0, -360],
        size: [38, 98, 38],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `Tổ Hợp Home City Trung Kính - Tháp V${hIdx + 1} (30 Tầng)`,
        id: `BLDG-HOME-CITY-${hIdx + 1}`,
        floors: 30,
        households: '600 căn hộ dân cư & Trung tâm thương mại',
        demandFlow: '46.0 m³/h',
        intakePressure: '3.18 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,600 m³',
        meterId: `AMR-HC-0${hIdx + 1}`,
        dma: 'DMA Trung Kính'
      });
    });

    
    // =========================================================================
    // 10C. FILL TOÀN BỘ CÁC VÙNG ĐẤT TRỐNG TRONG VÒNG TRÒN QUẬN (R = 1,240M)
    // =========================================================================
    // --- 18. TRƯỜNG THPT CHUYÊN HÀ NỘI - AMSTERDAM (KHUÔN VIÊN 5HA) ---
    // 3 Khối Giảng đường hình cánh buồm & Nhà Thể thao đa năng
    create3DBuilding({
      pos: [-240, 0, 40],
      size: [60, 22, 35],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'THPT Chuyên Hà Nội - Amsterdam (Nhà A: Khối Giảng Đường)',
      id: 'BLDG-AMS-A',
      floors: 5,
      households: 'Khuôn viên đào tạo 3.000 học sinh năng khiếu',
      demandFlow: '35.0 m³/h',
      intakePressure: '3.25 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,000 m³',
      meterId: 'AMR-AMS-01',
      dma: 'DMA Hoàng Minh Giám'
    });
    create3DBuilding({
      pos: [-300, 0, 30],
      size: [50, 18, 45],
      color: isDark ? 0x0284c7 : 0x0ea5e9,
      name: 'THPT Chuyên Hà Nội - Amsterdam (Nhà B: Khu Thể Thao & Bể Bơi Ngầm)',
      id: 'BLDG-AMS-B',
      floors: 3,
      households: 'Bể bơi tiêu chuẩn thi đấu & Sân bóng đá',
      demandFlow: '40.0 m³/h',
      intakePressure: '3.20 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,500 m³',
      meterId: 'AMR-AMS-02',
      dma: 'DMA Hoàng Minh Giám'
    });

    // --- 19. CỤM ĐÔ THỊ MỚI NAM TRUNG YÊN - YÊN HÒA (8 THÁP 22-28 TẦNG) ---
    [160, 230, 300, 370].forEach((nx, nIdx) => {
      create3DBuilding({
        pos: [nx, 0, -480],
        size: [36, 82, 36],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `KĐT Nam Trung Yên - Tòa B${nIdx + 1} (25 Tầng)`,
        id: `BLDG-NTY-${nIdx + 1}`,
        floors: 25,
        households: '450 căn hộ tái định cư kiểu mẫu',
        demandFlow: '42.0 m³/h',
        intakePressure: '3.18 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,400 m³',
        meterId: `AMR-NTY-0${nIdx + 1}`,
        dma: 'DMA Yên Hòa'
      });
      create3DBuilding({
        pos: [nx, 0, -560],
        size: [38, 75, 38],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `Chung Cư Yên Hòa Park View - Tháp A${nIdx + 1} (22 Tầng)`,
        id: `BLDG-YENHOA-${nIdx + 1}`,
        floors: 22,
        households: '380 căn hộ',
        demandFlow: '36.0 m³/h',
        intakePressure: '3.20 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,200 m³',
        meterId: `AMR-YH-0${nIdx + 1}`,
        dma: 'DMA Yên Hòa'
      });
    });

    // --- 20. BỆNH VIỆN ĐA KHOA THU CÚC & VIỆN Y HỌC CỔ TRUYỀN ---
    create3DBuilding({
      pos: [460, 0, -80],
      size: [55, 38, 45],
      color: isDark ? 0x0284c7 : 0x0284c7,
      name: 'Bệnh Viện Đa Khoa Quốc Tế Thu Cúc (Trần Duy Hưng)',
      id: 'BLDG-THUCUC',
      floors: 10,
      households: 'Khu khám chữa bệnh & Cấp cứu 24/7 (300 giường bệnh)',
      demandFlow: '55.0 m³/h',
      intakePressure: '3.32 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,600 m³',
      meterId: 'AMR-THUCUC-01',
      dma: 'DMA Trung Hòa'
    });

    create3DBuilding({
      pos: [580, 0, 100],
      size: [65, 32, 50],
      color: isDark ? 0x0284c7 : 0x0284c7,
      name: 'Bệnh Viện Y Học Cổ Truyền Quân Đội (Phân Viện Trung Hòa)',
      id: 'BLDG-YHCT',
      floors: 8,
      households: 'Cơ sở điều trị & Điều dưỡng 450 giường bệnh',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.26 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,500 m³',
      meterId: 'AMR-YHCT-01',
      dma: 'DMA Nhân Chính'
    });

    // --- 21. CỤM CHUNG CƯ IMPERIA GARDEN & GOLDEN WEST (NGUYỄN HUY TƯỞNG) ---
    [240, 310].forEach((ix, iIdx) => {
      create3DBuilding({
        pos: [ix, 0, 480],
        size: [40, 115, 40],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: `Tổ Hợp Chung Cư Imperia Garden - Tháp ${String.fromCharCode(65 + iIdx)} (35 Tầng)`,
        id: `BLDG-IMPERIA-${iIdx + 1}`,
        floors: 35,
        households: '800 căn hộ cao cấp & Vườn trên không',
        demandFlow: '72.0 m³/h',
        intakePressure: '3.12 bar',
        connectionPipe: 'DN125 Gang dẻo',
        cisternCapacity: '2,600 m³',
        meterId: `AMR-IMP-0${iIdx + 1}`,
        dma: 'DMA Thanh Xuân'
      });
    });

    create3DBuilding({
      pos: [180, 0, 420],
      size: [42, 92, 42],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tổ Hợp Chung Cư Golden West (27 Tầng - Lê Văn Thiêm)',
      id: 'BLDG-GOLDEN-WEST',
      floors: 27,
      households: '650 căn hộ & 3 tầng hầm thương mại',
      demandFlow: '58.0 m³/h',
      intakePressure: '3.16 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,800 m³',
      meterId: 'AMR-GW-01',
      dma: 'DMA Thanh Xuân'
    });

    // --- 22. TÒA NHÀ VIỆN DẦU KHÍ VIỆT NAM (VPI TOWER 30T) ---
    create3DBuilding({
      pos: [-380, 0, -260],
      size: [45, 105, 45],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tòa Nhà Viện Dầu Khí Việt Nam - VPI Tower (30 Tầng - Trung Kính)',
      id: 'BLDG-VPI',
      floors: 30,
      households: 'Trụ sở nghiên cứu & Văn phòng Tập đoàn PVN (45.000m²)',
      demandFlow: '52.0 m³/h',
      intakePressure: '3.22 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,900 m³',
      meterId: 'AMR-VPI-01',
      dma: 'DMA Trung Kính'
    });

    // DENSE FILL SHOPHOUSE BLOCKS IN EMPTY SECTORS
    createDenseShophouseBlock({
      center: [360, -80],
      size: [100, 40],
      rows: 2,
      cols: 8,
      heightRange: [14, 20],
      cutOffValveName: 'Van V-TDN-04',
      blockName: 'Khu Dân Cư Phố Trung Kính - Trần Duy Hưng'
    });
    createDenseShophouseBlock({
      center: [460, 180],
      size: [80, 40],
      rows: 2,
      cols: 6,
      heightRange: [14, 20],
      cutOffValveName: 'Van V-LVL-03',
      blockName: 'Khu Phân Lô Phố Vũ Trọng Phụng Mở Rộng'
    });
    createDenseShophouseBlock({
      center: [-360, -100],
      size: [70, 40],
      rows: 2,
      cols: 5,
      heightRange: [12, 18],
      cutOffValveName: 'Van V-DCP-05',
      blockName: 'Khu Liền Kề Biệt Thự Mễ Trì Hạ'
    });
    createDenseShophouseBlock({
      center: [100, -420],
      size: [90, 40],
      rows: 2,
      cols: 7,
      heightRange: [14, 20],
      cutOffValveName: 'Van V-TDN-04',
      blockName: 'Khu Đô Thị Phố Hạ Yên'
    });

    // --- 17. GÓC ĐÔNG NAM: ĐẠI ĐÔ THỊ VINHOMES ROYAL CITY & GOLDEN LAND ---
    [720, 780].forEach((rx, rIdx) => {
      [480, 560].forEach((rz, zIdx) => {
        create3DBuilding({
          pos: [rx, 0, rz],
          size: [44, 118, 44],
          color: isDark ? 0x0284c7 : 0x0369a1,
          name: `Đại Đô Thị Vinhomes Royal City - Tháp R${rIdx * 2 + zIdx + 1} (35T)`,
          id: `BLDG-ROYAL-${rIdx * 2 + zIdx + 1}`,
          floors: 35,
          households: '1.200 căn hộ cao cấp & TTTM Vincom Mega Mall',
          demandFlow: '95.0 m³/h',
          intakePressure: '3.08 bar',
          connectionPipe: 'DN150 Gang dẻo',
          cisternCapacity: '4,500 m³',
          meterId: `AMR-ROYAL-0${rIdx * 2 + zIdx + 1}`,
          dma: 'DMA Thượng Đình'
        });
      });
    });

    create3DBuilding({
      pos: [540, 0, 620],
      size: [42, 92, 42],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Tổ Hợp Chung Cư Golden Land Building (27 Tầng - Nguyễn Trãi)',
      id: 'BLDG-GOLDEN-LAND',
      floors: 27,
      households: '720 căn hộ & Khu thương mại dịch vụ',
      demandFlow: '52.0 m³/h',
      intakePressure: '3.14 bar',
      connectionPipe: 'DN100 Gang dẻo',
      cisternCapacity: '1,800 m³',
      meterId: 'AMR-GL-01',
      dma: 'DMA Thanh Xuân'
    });

        // =========================================================================
    // 11. DENSE 4-TIER WATER PIPELINE GRID (100+ PIPE SEGMENTS ACROSS 2.5KM)
    // =========================================================================
    const pipeGroup = new THREE.Group();
    scene.add(pipeGroup);

    const create3DPipe = (points, radius, color, name, pipeId, isFlowing, tier, data) => {
      if (tier === 1 && !assetsLayer.pipesPrimary) return null;
      if (tier === 2 && !assetsLayer.pipesSecondary) return null;
      if (tier === 3 && !assetsLayer.pipesTertiary) return null;
      if (tier === 4 && !assetsLayer.pipesService) return null;
      if (!assetsLayer.pipes) return null;

      // Synchronized pipe colors per user hierarchy:
      // Cấp 1: Blue đậm 0x0284c7 (Truyền dẫn chính NMN Sông Đà)
      // Cấp 2: Cam 0xf97316 (Mạch vòng phân phối liên phường)
      // Cấp 3: Vàng 0xeab308 (Đấu nối tòa nhà & nhánh dịch vụ)
      const dynamicColor = tier === 1 ? 0x0284c7 : (tier === 2 ? 0xf97316 : (tier === 3 ? 0xeab308 : (data?.status?.includes('CẮT') ? 0x64748b : 0xeab308)));
      const activeColor = isFlowing ? dynamicColor : 0x475569;

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, radius, 14, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: activeColor,
        roughness: 0.2,
        metalness: 0.2,
        emissive: isFlowing ? activeColor : 0x000000,
        emissiveIntensity: isFlowing ? (isDark ? 0.65 : 0.45) : 0.0
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.castShadow = false;
      tubeMesh.receiveShadow = false; // Không nhận bóng đổ để luôn hiển thị đồng nhất
      tubeMesh.userData = { name, id: pipeId, type: 'Pipe', data };
      pipeGroup.add(tubeMesh);
      clickableObjectsRef.current.push(tubeMesh);

      // Fluid Flow Particle Animation
      if (isFlowing) {
        const count = tier === 1 ? 20 : (tier === 2 ? 12 : (tier === 3 ? 8 : 4));
        const beadGeo = new THREE.SphereGeometry(radius * 1.35, 12, 12);
        const beadMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: tier === 1 ? 0x00f0ff : (tier === 2 ? 0xfb923c : 0xfef08a),
          emissiveIntensity: 1.5,
          roughness: 0.1
        });

        for (let i = 0; i < count; i++) {
          const p = new THREE.Mesh(beadGeo, beadMat);
          scene.add(p);
          flowParticlesRef.current.push({
            mesh: p,
            curve: curve,
            t: i / count,
            speed: tier === 1 ? 0.0022 : (tier === 2 ? 0.0017 : 0.0012)
          });
        }
      }

      return tubeMesh;
    };

    // --- CẤP 1: TRUYỀN DẪN CHÍNH D600 - D800 GANG DẺO K9 ---
    // 1. Trục D800 Đại lộ Thăng Long (Từ Nhà máy Sông Đà về)
    create3DPipe(
      [new THREE.Vector3(-1200, 1.4, 40), new THREE.Vector3(-700, 1.4, 40), new THREE.Vector3(-440, 1.4, 40)],
      1.6,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long',
      'PIPE-TRUNK-DLTL-D800',
      true,
      1,
      {
        name: 'Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long',
        id: 'PIPE-TRUNK-DLTL-D800',
        tier: 'Cấp 1 (Transmission D800)',
        status: 'Đang truyền dẫn công suất lớn (NMN Sông Đà)',
        diameter: 'DN800 Gang Dẻo K9',
        flow: '4,850.0 m³/h',
        pressure: '3.85 bar',
        dma: 'Trục Truyền Dẫn Liên Vùng'
      }
    );
    // 2. Trục D800 Phạm Hùng / Vành Đai 3
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, -1100), new THREE.Vector3(-440, 1.4, -400), new THREE.Vector3(-440, 1.4, 40), new THREE.Vector3(-440, 1.4, 600), new THREE.Vector3(-440, 1.4, 1100)],
      1.6,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3',
      'PIPE-TRUNK-PH-D800',
      true,
      1,
      {
        name: 'Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3',
        id: 'PIPE-TRUNK-PH-D800',
        tier: 'Cấp 1 (Transmission D800)',
        status: 'Vận hành tối ưu',
        diameter: 'DN800 Gang Dẻo K9',
        flow: '4,200.0 m³/h',
        pressure: '3.75 bar',
        dma: 'Trục Truyền Dẫn Liên Vùng'
      }
    );
    // 3. Trục D600 Lê Văn Lương
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, 180), new THREE.Vector3(-160, 1.4, 180), new THREE.Vector3(0, 1.4, 180), new THREE.Vector3(340, 1.4, 180), new THREE.Vector3(650, 1.4, 180)],
      1.4,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương',
      'PIPE-TRUNK-LVL-D600',
      true,
      1,
      {
        name: 'Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương',
        id: 'PIPE-TRUNK-LVL-D600',
        tier: 'Cấp 1 (Transmission D600)',
        status: 'Cấp nguồn chính DMA THNC-02 & THNC-03',
        diameter: 'DN600 Gang Dẻo K9',
        flow: '3,250.0 m³/h',
        pressure: '3.45 bar',
        dma: 'DMA THNC-02'
      }
    );
    // 4. Trục D600 Trần Duy Hưng
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, -180), new THREE.Vector3(-160, 1.4, -180), new THREE.Vector3(0, 1.4, -180), new THREE.Vector3(340, 1.4, -180), new THREE.Vector3(650, 1.4, -180)],
      1.4,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng',
      'PIPE-TRUNK-TDH-D600',
      true,
      1,
      {
        name: 'Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng',
        id: 'PIPE-TRUNK-TDH-D600',
        tier: 'Cấp 1 (Transmission D600)',
        status: 'Cấp nguồn chính DMA THNC-01',
        diameter: 'DN600 Gang Dẻo K9',
        flow: '3,400.0 m³/h',
        pressure: '3.50 bar',
        dma: 'DMA THNC-01'
      }
    );
    // 5. Trục D600 Hoàng Đạo Thúy
    create3DPipe(
      [new THREE.Vector3(0, 1.4, -180), new THREE.Vector3(0, 1.4, 0), new THREE.Vector3(0, 1.4, 180), new THREE.Vector3(0, 1.4, 350)],
      1.4,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy',
      'PIPE-TRUNK-HDT-D600',
      true,
      1,
      {
        name: 'Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy',
        id: 'PIPE-TRUNK-HDT-D600',
        tier: 'Cấp 1 (Transmission D600)',
        status: 'Trục xương sống KĐT Trung Hòa - Nhân Chính',
        diameter: 'DN600 Gang Dẻo K9',
        flow: '2,900.0 m³/h',
        pressure: '3.38 bar',
        dma: 'DMA THNC-02'
      }
    );
    // 6. Trục D600 Trung Kính
    create3DPipe(
      [new THREE.Vector3(340, 1.4, -450), new THREE.Vector3(340, 1.4, -180), new THREE.Vector3(340, 1.4, 180), new THREE.Vector3(340, 1.4, 450)],
      1.4,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Truyền Dẫn Cấp 1 D600 Trung Kính',
      'PIPE-TRUNK-TK-D600',
      true,
      1,
      {
        name: 'Trục Truyền Dẫn Cấp 1 D600 Trung Kính',
        id: 'PIPE-TRUNK-TK-D600',
        tier: 'Cấp 1 (Transmission D600)',
        status: 'Cấp nước phía Đông quận',
        diameter: 'DN600 Gang Dẻo',
        flow: '2,400.0 m³/h',
        pressure: '3.35 bar',
        dma: 'DMA Phía Đông'
      }
    );

    // --- CẤP 2: PHÂN PHỐI MẠCH VÒNG D250 - D350 HDPE PE100 ---
    // Mạch vòng 1: Tuyến D300 Nguyễn Thị Thập (Zone 01 & 08)
    create3DPipe(
      [new THREE.Vector3(-160, 1.2, 0), new THREE.Vector3(-75, 1.2, 0), new THREE.Vector3(0, 1.2, 0), new THREE.Vector3(75, 1.2, 0), new THREE.Vector3(140, 1.2, 0), new THREE.Vector3(340, 1.2, 0)],
      1.1,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập',
      'PIPE-DIST-NTT-D300',
      !isOutageZone08,
      2,
      {
        name: 'Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập',
        id: 'PIPE-DIST-NTT-D300',
        tier: 'Cấp 2 (Distribution D300)',
        status: isOutageZone08 ? 'ĐÃ CẮT NƯỚC QUA VAN V-NTT-08' : 'Bình thường',
        diameter: 'DN300 HDPE PE100',
        flow: isOutageZone08 ? '0.0 m³/h' : '880 m³/h',
        pressure: isOutageZone08 ? '0.00 bar' : '3.25 bar',
        dma: 'DMA THNC-02'
      }
    );
    // Mạch vòng 2: Tuyến D250 Hoàng Minh Giám (Zone 02)
    create3DPipe(
      [new THREE.Vector3(-160, 1.2, 350), new THREE.Vector3(-160, 1.2, 180), new THREE.Vector3(-160, 1.2, 0), new THREE.Vector3(-160, 1.2, -95), new THREE.Vector3(-160, 1.2, -180)],
      1.0,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám',
      'PIPE-DIST-HMG-D250',
      !isOutageZone02,
      2,
      {
        name: 'Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám',
        id: 'PIPE-DIST-HMG-D250',
        tier: 'Cấp 2 (Distribution D250)',
        status: isOutageZone02 ? 'ĐÃ CẮT NƯỚC QUA VAN V-HMG-02' : 'Bình thường',
        diameter: 'DN250 HDPE PE100',
        flow: isOutageZone02 ? '0.0 m³/h' : '750 m³/h',
        pressure: isOutageZone02 ? '0.00 bar' : '3.24 bar',
        dma: 'DMA THNC-03'
      }
    );
    // Mạch vòng 3: Tuyến D250 Nguyễn Thị Định (Zone 04)
    create3DPipe(
      [new THREE.Vector3(140, 1.2, -180), new THREE.Vector3(140, 1.2, -90), new THREE.Vector3(140, 1.2, 0), new THREE.Vector3(140, 1.2, 180)],
      1.0,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định',
      'PIPE-DIST-NTD-D250',
      !isOutageZone04,
      2,
      {
        name: 'Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định',
        id: 'PIPE-DIST-NTD-D250',
        tier: 'Cấp 2 (Distribution D250)',
        status: isOutageZone04 ? 'ĐÃ CẮT NƯỚC QUA VAN V-TDN-04' : 'Bình thường',
        diameter: 'DN250 HDPE',
        flow: isOutageZone04 ? '0.0 m³/h' : '620 m³/h',
        pressure: isOutageZone04 ? '0.00 bar' : '3.22 bar',
        dma: 'DMA THNC-01'
      }
    );
    // Mạch vòng 4: Tuyến D300 Ngụy Như Kon Tum (Zone 07)
    create3DPipe(
      [new THREE.Vector3(-160, 1.2, 350), new THREE.Vector3(0, 1.2, 350), new THREE.Vector3(160, 1.2, 350), new THREE.Vector3(240, 1.2, 350), new THREE.Vector3(340, 1.2, 350)],
      1.1,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum',
      'PIPE-DIST-NNKT-D300',
      !isOutageZone07,
      2,
      {
        name: 'Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum',
        id: 'PIPE-DIST-NNKT-D300',
        tier: 'Cấp 2 (Distribution D300)',
        status: isOutageZone07 ? 'ĐÃ CẮT NƯỚC QUA VAN V-HAP-07' : 'Bình thường',
        diameter: 'DN300 HDPE',
        flow: isOutageZone07 ? '0.0 m³/h' : '820 m³/h',
        pressure: isOutageZone07 ? '0.00 bar' : '3.18 bar',
        dma: 'DMA THNC-03'
      }
    );
    // Mạch vòng 5: Tuyến D250 Vũ Trọng Phụng (Zone 07)
    create3DPipe(
      [new THREE.Vector3(240, 1.2, 180), new THREE.Vector3(240, 1.2, 270), new THREE.Vector3(240, 1.2, 350)],
      1.0,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng',
      'PIPE-DIST-VTP-D250',
      !isOutageZone07,
      2,
      {
        name: 'Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng',
        id: 'PIPE-DIST-VTP-D250',
        tier: 'Cấp 2 (Distribution D250)',
        status: isOutageZone07 ? 'ĐÃ CẮT NƯỚC QUA VAN V-HAP-07' : 'Bình thường',
        diameter: 'DN250 HDPE',
        flow: isOutageZone07 ? '0.0 m³/h' : '540 m³/h',
        pressure: isOutageZone07 ? '0.00 bar' : '3.16 bar',
        dma: 'DMA THNC-03'
      }
    );
    // Mạch vòng 6: Tuyến D300 Cụm D'Capitale & Big C (Zone 05)
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, -180), new THREE.Vector3(-280, 1.2, -180), new THREE.Vector3(-190, 1.2, -180), new THREE.Vector3(-160, 1.2, -180)],
      1.1,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D\'Capitale',
      'PIPE-DIST-DCP-D300',
      !isOutageZone05,
      2,
      {
        name: 'Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D\'Capitale',
        id: 'PIPE-DIST-DCP-D300',
        tier: 'Cấp 2 (Distribution D300)',
        status: isOutageZone05 ? 'ĐÃ CẮT NƯỚC QUA VAN V-DCP-05' : 'Bình thường',
        diameter: 'DN300 HDPE',
        flow: isOutageZone05 ? '0.0 m³/h' : '960 m³/h',
        pressure: isOutageZone05 ? '0.00 bar' : '3.30 bar',
        dma: 'DMA THNC-01'
      }
    );
    // Mạch vòng 7: Tuyến D300 Mễ Trì & Keangnam (Zone 06)
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, -320), new THREE.Vector3(-540, 1.2, -320), new THREE.Vector3(-540, 1.2, -460), new THREE.Vector3(-440, 1.2, -460)],
      1.1,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Keangnam & Mễ Trì',
      'PIPE-DIST-KNG-D300',
      !isOutageZone06,
      2,
      {
        name: 'Tuyến Phân Phối Cấp 2 D300 Keangnam & Mễ Trì',
        id: 'PIPE-DIST-KNG-D300',
        tier: 'Cấp 2 (Distribution D300)',
        status: isOutageZone06 ? 'ĐÃ CẮT NƯỚC QUA VAN V-KNG-06' : 'Bình thường',
        diameter: 'DN300 HDPE',
        flow: isOutageZone06 ? '0.0 m³/h' : '1,120 m³/h',
        pressure: isOutageZone06 ? '0.00 bar' : '3.38 bar',
        dma: 'DMA Phía Tây'
      }
    );

    // --- CẤP 3: MẠNG NGÕ PHỐ & ĐƯỜNG NỘI BỘ D100 - D160 ---
    // 1. Nhánh Phố Hoàng Ngân (Zone 08 / 03)
    create3DPipe(
      [new THREE.Vector3(0, 1.0, 90), new THREE.Vector3(75, 1.0, 90), new THREE.Vector3(140, 1.0, 90), new THREE.Vector3(200, 1.0, 90)],
      0.85,
      isDark ? 0x14b8a6 : 0x0d9488,
      'Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân',
      'PIPE-STREET-HN-D150',
      !isOutageZone08,
      3,
      {
        name: 'Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân',
        id: 'PIPE-STREET-HN-D150',
        tier: 'Cấp 3 (Reticulation D150)',
        status: isOutageZone08 ? 'ĐÃ CẮT NƯỚC' : 'Ổn định',
        diameter: 'DN150',
        flow: isOutageZone08 ? '0.0 m³/h' : '180 m³/h',
        dma: 'DMA THNC-02'
      }
    );
    // 2. Nhánh Phố Đỗ Quang (Zone 04)
    create3DPipe(
      [new THREE.Vector3(0, 1.0, -90), new THREE.Vector3(75, 1.0, -90), new THREE.Vector3(140, 1.0, -90), new THREE.Vector3(200, 1.0, -90)],
      0.85,
      isDark ? 0x14b8a6 : 0x0d9488,
      'Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang',
      'PIPE-STREET-DQ-D150',
      !isOutageZone04,
      3,
      {
        name: 'Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang',
        id: 'PIPE-STREET-DQ-D150',
        tier: 'Cấp 3 (Reticulation D150)',
        status: isOutageZone04 ? 'ĐÃ CẮT NƯỚC' : 'Ổn định',
        diameter: 'DN150',
        flow: isOutageZone04 ? '0.0 m³/h' : '175 m³/h',
        dma: 'DMA THNC-01'
      }
    );
    // 3. Nhánh Phố Quan Nhân (Zone 08)
    create3DPipe(
      [new THREE.Vector3(0, 1.0, 240), new THREE.Vector3(120, 1.0, 240), new THREE.Vector3(240, 1.0, 240)],
      0.8,
      isDark ? 0x14b8a6 : 0x0d9488,
      'Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân',
      'PIPE-STREET-QN-D125',
      !isOutageZone08,
      3,
      {
        name: 'Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân',
        id: 'PIPE-STREET-QN-D125',
        tier: 'Cấp 3 (Reticulation D125)',
        status: isOutageZone08 ? 'ĐÃ CẮT NƯỚC' : 'Ổn định',
        diameter: 'DN125',
        flow: isOutageZone08 ? '0.0 m³/h' : '140 m³/h',
        dma: 'DMA THNC-02'
      }
    );
    // 4. Nhánh Phố Nhân Hòa (Zone 07)
    create3DPipe(
      [new THREE.Vector3(0, 1.0, 290), new THREE.Vector3(120, 1.0, 290), new THREE.Vector3(240, 1.0, 290)],
      0.8,
      isDark ? 0x14b8a6 : 0x0d9488,
      'Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa',
      'PIPE-STREET-NH-D125',
      !isOutageZone07,
      3,
      {
        name: 'Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa',
        id: 'PIPE-STREET-NH-D125',
        tier: 'Cấp 3 (Reticulation D125)',
        status: isOutageZone07 ? 'ĐÃ CẮT NƯỚC' : 'Ổn định',
        diameter: 'DN125',
        flow: isOutageZone07 ? '0.0 m³/h' : '150 m³/h',
        dma: 'DMA THNC-03'
      }
    );
    // 5. Tuyến ngõ nội khu 34T & 17T (Zone 01)
    create3DPipe(
      [new THREE.Vector3(0, 1.0, 20), new THREE.Vector3(25, 1.0, 20), new THREE.Vector3(42, 1.0, 75), new THREE.Vector3(42, 1.0, 155)],
      0.8,
      isDark ? 0x14b8a6 : 0x0d9488,
      'Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T',
      'PIPE-STREET-17T-D150',
      !isOutageZone01,
      3,
      {
        name: 'Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T',
        id: 'PIPE-STREET-17T-D150',
        tier: 'Cấp 3 (Reticulation D150)',
        status: isOutageZone01 ? 'ĐÃ CẮT NƯỚC' : 'Ổn định',
        diameter: 'DN150',
        flow: isOutageZone01 ? '0.0 m³/h' : '195 m³/h',
        dma: 'DMA THNC-02'
      }
    );
    // 6. Tuyến ngõ nội khu 24T (Zone 01)
    create3DPipe(
      [new THREE.Vector3(0, 1.0, 20), new THREE.Vector3(-35, 1.0, 20), new THREE.Vector3(-35, 1.0, -30), new THREE.Vector3(-75, 1.0, 0)],
      0.8,
      isDark ? 0x14b8a6 : 0x0d9488,
      'Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T',
      'PIPE-STREET-24T-D125',
      !isOutageZone01,
      3,
      {
        name: 'Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T',
        id: 'PIPE-STREET-24T-D125',
        tier: 'Cấp 3 (Reticulation D125)',
        status: isOutageZone01 ? 'ĐÃ CẮT NƯỚC' : 'Ổn định',
        diameter: 'DN125',
        flow: isOutageZone01 ? '0.0 m³/h' : '160 m³/h',
        dma: 'DMA THNC-02'
      }
    );
    // 7. Tuyến ngõ Cụm N04/N05 (Zone 04)
    create3DPipe(
      [new THREE.Vector3(0, 1.0, -85), new THREE.Vector3(40, 1.0, -85), new THREE.Vector3(80, 1.0, -85), new THREE.Vector3(60, 1.0, -140)],
      0.8,
      isDark ? 0x14b8a6 : 0x0d9488,
      'Tuyến Nhánh Cấp 3 D150 Nội Khu Cụm N04/N05',
      'PIPE-STREET-N04N05-D150',
      !isOutageZone04,
      3,
      {
        name: 'Tuyến Nhánh Cấp 3 D150 Nội Khu N04/N05',
        id: 'PIPE-STREET-N04N05-D150',
        tier: 'Cấp 3 (Reticulation D150)',
        status: isOutageZone04 ? 'ĐÃ CẮT NƯỚC' : 'Ổn định',
        diameter: 'DN150',
        flow: isOutageZone04 ? '0.0 m³/h' : '210 m³/h',
        dma: 'DMA THNC-01'
      }
    );

    // --- CẤP 4: TUYẾN DỊCH VỤ ĐẤU NỐI CHÂN CÔNG TRÌNH D32 - D80 HDPE ---
    const createServiceConnection = (startPt, buildingPt, diameter, bldgName, bldgId, isCut) => {
      const midPt = new THREE.Vector3((startPt.x + buildingPt.x) / 2, 0.8, (startPt.z + buildingPt.z) / 2);
      create3DPipe(
        [startPt, midPt, buildingPt],
        0.55,
        isCut ? 0x64748b : (isDark ? 0xfbbf24 : 0xd97706),
        `Ống Đấu Nối Cấp 4 ${diameter} -> ${bldgName}`,
        `PIPE-SRV-${bldgId}`,
        !isCut,
        4,
        {
          name: `Ống Đấu Nối Cấp 4 ${diameter} -> ${bldgName}`,
          id: `PIPE-SRV-${bldgId}`,
          tier: 'Cấp 4 (Service Connection)',
          status: isCut ? 'ĐÃ CẮT DÒNG (KHÓA VAN)' : 'Cấp nước trực tiếp bể ngầm',
          diameter: diameter,
          pressure: isCut ? '0.00 bar' : '3.25 bar',
          flow: isCut ? '0.0 m³/h' : 'Theo định mức AMR'
        }
      );
    };

    // Connections to Landmark Towers
    createServiceConnection(new THREE.Vector3(0, 1.1, 20), new THREE.Vector3(25, 1.1, 20), 'DN80', 'Tháp 34T', '34T', isOutageZone01);
    createServiceConnection(new THREE.Vector3(0, 1.1, 30), new THREE.Vector3(-35, 1.1, 30), 'DN65', 'Chung cư 24T1', '24T1', isOutageZone01);
    createServiceConnection(new THREE.Vector3(0, 1.1, -30), new THREE.Vector3(-35, 1.1, -30), 'DN65', 'Chung cư 24T2', '24T2', isOutageZone01);
    createServiceConnection(new THREE.Vector3(42, 1.1, 75), new THREE.Vector3(42, 1.1, 75), 'DN50', 'Chung cư 17T1', '17T1', isOutageZone01);
    createServiceConnection(new THREE.Vector3(0, 1.1, 155), new THREE.Vector3(35, 1.1, 155), 'DN80', 'Diamond Flower', 'DIAMOND', isOutageZone03);
    createServiceConnection(new THREE.Vector3(50, 1.1, 155), new THREE.Vector3(80, 1.1, 155), 'DN80', 'Star City', 'STAR-CITY', isOutageZone03);
    createServiceConnection(new THREE.Vector3(100, 1.1, 155), new THREE.Vector3(130, 1.1, 155), 'DN65', 'The Golden Palm', 'GOLDEN-PALM', isOutageZone03);
    createServiceConnection(new THREE.Vector3(0, 1.1, 155), new THREE.Vector3(-60, 1.1, 155), 'DN80', 'HUD Tower A', 'HUD-A', isOutageZone03);
    createServiceConnection(new THREE.Vector3(-60, 1.1, 155), new THREE.Vector3(-100, 1.1, 155), 'DN65', 'HUD Tower B', 'HUD-B', isOutageZone03);
    createServiceConnection(new THREE.Vector3(140, 1.1, 155), new THREE.Vector3(180, 1.1, 155), 'DN65', 'MB Grand Tower', 'MB-TOWER', isOutageZone03);
    createServiceConnection(new THREE.Vector3(0, 1.1, -180), new THREE.Vector3(65, 1.1, -215), 'DN80', 'Charmvit Tower', 'CHARMVIT', isOutageZone04);
    createServiceConnection(new THREE.Vector3(40, 1.1, -85), new THREE.Vector3(40, 1.1, -85), 'DN80', 'N05-34T1', 'N05-1', isOutageZone04);
    createServiceConnection(new THREE.Vector3(80, 1.1, -85), new THREE.Vector3(80, 1.1, -85), 'DN80', 'N05-34T2', 'N05-2', isOutageZone04);
    createServiceConnection(new THREE.Vector3(-160, 1.1, 45), new THREE.Vector3(-150, 1.1, 45), 'DN65', 'Mandarin Block A', 'MANDARIN-A', isOutageZone02);
    createServiceConnection(new THREE.Vector3(-160, 1.1, -5), new THREE.Vector3(-150, 1.1, -5), 'DN65', 'Mandarin Block C', 'MANDARIN-C', isOutageZone02);
    createServiceConnection(new THREE.Vector3(-160, 1.1, -95), new THREE.Vector3(-135, 1.1, -95), 'DN50', 'THPT Amsterdam', 'AMS', isOutageZone02);
    createServiceConnection(new THREE.Vector3(-440, 1.1, -320), new THREE.Vector3(-540, 1.1, -320), 'DN150', 'Keangnam 72', 'KEANGNAM-72', isOutageZone06);
    createServiceConnection(new THREE.Vector3(-540, 1.1, -320), new THREE.Vector3(-590, 1.1, -320), 'DN80', 'Keangnam Tháp A', 'KEANGNAM-A', isOutageZone06);
    createServiceConnection(new THREE.Vector3(-540, 1.1, -320), new THREE.Vector3(-490, 1.1, -320), 'DN80', 'Keangnam Tháp B', 'KEANGNAM-B', isOutageZone06);
    createServiceConnection(new THREE.Vector3(-440, 1.1, -220), new THREE.Vector3(-460, 1.1, -220), 'DN65', 'Handico Tower', 'HANDICO', isOutageZone06);
    createServiceConnection(new THREE.Vector3(-440, 1.1, -170), new THREE.Vector3(-460, 1.1, -170), 'DN65', 'CEO Tower', 'CEO', isOutageZone06);
    createServiceConnection(new THREE.Vector3(-440, 1.1, -110), new THREE.Vector3(-440, 1.1, -110), 'DN65', 'Bảo Tàng Hà Nội', 'MUSEUM', isOutageZone06);
    createServiceConnection(new THREE.Vector3(-440, 1.1, 140), new THREE.Vector3(-440, 1.1, 140), 'DN100', 'Hội Nghị Quốc Gia NCC', 'NCC', false);
    createServiceConnection(new THREE.Vector3(-280, 1.1, -180), new THREE.Vector3(-280, 1.1, -180), 'DN80', 'Big C Thăng Long', 'BIGC', isOutageZone05);
    createServiceConnection(new THREE.Vector3(-230, 1.1, -220), new THREE.Vector3(-230, 1.1, -220), 'DN80', 'D\'Capitale C1', 'DCP-C1', isOutageZone05);
    createServiceConnection(new THREE.Vector3(-190, 1.1, -220), new THREE.Vector3(-190, 1.1, -220), 'DN80', 'D\'Capitale C2', 'DCP-C2', isOutageZone05);
    createServiceConnection(new THREE.Vector3(-440, 1.1, 40), new THREE.Vector3(-360, 1.1, 40), 'DN80', 'Thăng Long Number One A', 'TL-NO1-A', isOutageZone05);
    createServiceConnection(new THREE.Vector3(-360, 1.1, 40), new THREE.Vector3(-360, 1.1, 85), 'DN80', 'Thăng Long Number One B', 'TL-NO1-B', isOutageZone05);
    createServiceConnection(new THREE.Vector3(240, 1.1, 270), new THREE.Vector3(200, 1.1, 270), 'DN80', 'Hapulico Complex A', 'HAP-A', isOutageZone07);
    createServiceConnection(new THREE.Vector3(240, 1.1, 270), new THREE.Vector3(110, 1.1, 270), 'DN65', 'Golden West', 'GOLDEN-WEST', isOutageZone07);
    createServiceConnection(new THREE.Vector3(240, 1.1, 340), new THREE.Vector3(250, 1.1, 340), 'DN80', 'Imperia Garden A', 'IMP-A', isOutageZone07);
    createServiceConnection(new THREE.Vector3(240, 1.1, 340), new THREE.Vector3(290, 1.1, 340), 'DN80', 'Imperia Garden B', 'IMP-B', isOutageZone07);
    createServiceConnection(new THREE.Vector3(75, 1.1, 0), new THREE.Vector3(75, 1.1, -10), 'DN50', 'Biệt Thự BT1-BT6', 'VILLAS', isOutageZone08);
    createServiceConnection(new THREE.Vector3(75, 1.1, 35), new THREE.Vector3(110, 1.1, 35), 'DN50', 'Trường Ngôi Sao Hà Nội', 'NGOI-SAO', isOutageZone08);


    
    // --- MẠNG LƯỚI ĐƯỜNG ỐNG NƯỚC BỔ SUNG LẤP ĐẦY TOÀN BỘ QUẬN (R = 1,240M) ---
    // Tuyến Cấp 2 D300 Mạc Thái Tổ & Nam Trung Yên
    create3DPipe(
      [new THREE.Vector3(0, 1.2, -260), new THREE.Vector3(160, 1.2, -480), new THREE.Vector3(370, 1.2, -480), new THREE.Vector3(370, 1.2, -580)],
      1.1,
      0xf97316,
      'Tuyến Phân Phối Cấp 2 D300 Mạc Thái Tổ - Nam Trung Yên',
      'PIPE-DIST-NTY-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối Cấp 2 D300 Nam Trung Yên', tier: 'Cấp 2 (D300)', flow: '1,450 m³/h', status: 'Ổn định' }
    );

    // Tuyến Cấp 2 D300 Lê Văn Thiêm & Imperia Garden
    create3DPipe(
      [new THREE.Vector3(0, 1.2, 350), new THREE.Vector3(180, 1.2, 420), new THREE.Vector3(310, 1.2, 480)],
      1.1,
      0xf97316,
      'Tuyến Phân Phối Cấp 2 D300 Lê Văn Thiêm - Imperia Garden',
      'PIPE-DIST-IMP-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối Cấp 2 D300 Imperia Garden', tier: 'Cấp 2 (D300)', flow: '1,680 m³/h', status: 'Ổn định' }
    );

    // Tuyến Cấp 2 D300 VPI Tower & Mễ Trì Hạ
    create3DPipe(
      [new THREE.Vector3(-160, 1.2, -180), new THREE.Vector3(-380, 1.2, -260), new THREE.Vector3(-440, 1.2, -260)],
      1.1,
      0xf97316,
      'Tuyến Phân Phối Cấp 2 D300 VPI Tower & Trần Duy Hưng',
      'PIPE-DIST-VPI-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối Cấp 2 D300 VPI Tower', tier: 'Cấp 2 (D300)', flow: '1,150 m³/h', status: 'Ổn định' }
    );

    // Nhánh Cấp 3 (Vàng) dẫn trực tiếp vào các công trình mới
    create3DPipe([new THREE.Vector3(-240, 1.0, 0), new THREE.Vector3(-240, 1.0, 40)], 0.65, 0xeab308, 'Nhánh Cấp 3 D100 -> THPT Chuyên Amsterdam', 'PIPE-SRV-AMS', true, 3, { name: 'Nhánh D100 -> THPT Amsterdam', tier: 'Cấp 3 (D100)', status: 'Ổn định' });
    create3DPipe([new THREE.Vector3(460, 1.0, -40), new THREE.Vector3(460, 1.0, -80)], 0.65, 0xeab308, 'Nhánh Cấp 3 D100 -> Bệnh Viện Thu Cúc', 'PIPE-SRV-THUCUC', true, 3, { name: 'Nhánh D100 -> Bệnh Viện Thu Cúc', tier: 'Cấp 3 (D100)', status: 'Ổn định' });
    create3DPipe([new THREE.Vector3(580, 1.0, 50), new THREE.Vector3(580, 1.0, 100)], 0.65, 0xeab308, 'Nhánh Cấp 3 D100 -> Viện Y Học Cổ Truyền', 'PIPE-SRV-YHCT', true, 3, { name: 'Nhánh D100 -> Viện YHCT Quân Đội', tier: 'Cấp 3 (D100)', status: 'Ổn định' });
    create3DPipe([new THREE.Vector3(310, 1.0, 440), new THREE.Vector3(310, 1.0, 480)], 0.65, 0xeab308, 'Nhánh Cấp 3 D125 -> Imperia Garden', 'PIPE-SRV-IMP', true, 3, { name: 'Nhánh D125 -> Imperia Garden', tier: 'Cấp 3 (D125)', status: 'Ổn định' });
    create3DPipe([new THREE.Vector3(180, 1.0, 380), new THREE.Vector3(180, 1.0, 420)], 0.65, 0xeab308, 'Nhánh Cấp 3 D100 -> Golden West', 'PIPE-SRV-GW', true, 3, { name: 'Nhánh D100 -> Golden West', tier: 'Cấp 3 (D100)', status: 'Ổn định' });
    create3DPipe([new THREE.Vector3(-380, 1.0, -220), new THREE.Vector3(-380, 1.0, -260)], 0.65, 0xeab308, 'Nhánh Cấp 3 D100 -> VPI Tower', 'PIPE-SRV-VPI', true, 3, { name: 'Nhánh D100 -> VPI Tower', tier: 'Cấp 3 (D100)', status: 'Ổn định' });

    // --- CÁC TUYẾN ỐNG MỞ RỘNG KẾT NỐI 4 PHÂN KHU NGOẠI VI (R = 1,100M) ---
    // 1. Tuyến Cấp 1 D800 mở rộng phía Tây Đại Lộ Thăng Long -> NMN Sông Đà
    create3DPipe(
      [new THREE.Vector3(-1240, 1.4, 40), new THREE.Vector3(-850, 1.4, 40), new THREE.Vector3(-700, 1.4, 40)],
      1.6,
      0x0284c7,
      'Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà Phía Tây',
      'PIPE-TRUNK-WEST-D800',
      true,
      1,
      { name: 'Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà', tier: 'Cấp 1 (D800)', flow: '5,200 m³/h', status: 'Vận hành tối ưu' }
    );

    // 2. Tuyến Cấp 1 D800 Vành Đai 3 nối dài từ Bắc sang Nam
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, -1200), new THREE.Vector3(-440, 1.4, -700), new THREE.Vector3(-440, 1.4, -400)],
      1.6,
      0x0284c7,
      'Trục Cấp 1 D800 Vành Đai 3 Phía Bắc (Cầu Giấy)',
      'PIPE-TRUNK-VD3-NORTH',
      true,
      1,
      { name: 'Trục Cấp 1 D800 Vành Đai 3 Phía Bắc', tier: 'Cấp 1 (D800)', flow: '4,600 m³/h', status: 'Ổn định' }
    );
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, 600), new THREE.Vector3(-440, 1.4, 950), new THREE.Vector3(-440, 1.4, 1200)],
      1.6,
      0x0284c7,
      'Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam (Thanh Xuân)',
      'PIPE-TRUNK-VD3-SOUTH',
      true,
      1,
      { name: 'Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam', tier: 'Cấp 1 (D800)', flow: '4,100 m³/h', status: 'Ổn định' }
    );

    // 3. Mạch vòng Cấp 2 D300 Tây Nam (Bảo Tàng HN & JW Marriott)
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, 140), new THREE.Vector3(-660, 1.2, 140), new THREE.Vector3(-840, 1.2, 180), new THREE.Vector3(-840, 1.2, 40)],
      1.1,
      0xf97316,
      'Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott & Bảo Tàng HN',
      'PIPE-DIST-JWM-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott', tier: 'Cấp 2 (D300)', flow: '1,250 m³/h', status: 'Ổn định' }
    );

    // 4. Mạch vòng Cấp 2 D300 Tây Bắc (The Manor & Sudico Mỹ Đình)
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, -420), new THREE.Vector3(-760, 1.2, -420), new THREE.Vector3(-880, 1.2, -420)],
      1.1,
      0xf97316,
      'Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình',
      'PIPE-DIST-MANOR-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình', tier: 'Cấp 2 (D300)', flow: '1,100 m³/h', status: 'Ổn định' }
    );

    // 5. Mạch vòng Cấp 2 D300 Đông Bắc (ĐH Lao Động Xã Hội & Golden Park)
    create3DPipe(
      [new THREE.Vector3(340, 1.2, -220), new THREE.Vector3(480, 1.2, -220), new THREE.Vector3(680, 1.2, -240), new THREE.Vector3(680, 1.2, -420)],
      1.1,
      0xf97316,
      'Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park Tower',
      'PIPE-DIST-NE-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park', tier: 'Cấp 2 (D300)', flow: '1,380 m³/h', status: 'Ổn định' }
    );

    // 6. Mạch vòng Cấp 2 D300 Đông Nam (Vinhomes Royal City & Nguyễn Trãi)
    create3DPipe(
      [new THREE.Vector3(340, 1.2, 350), new THREE.Vector3(540, 1.2, 520), new THREE.Vector3(760, 1.2, 520), new THREE.Vector3(760, 1.2, 620)],
      1.1,
      0xf97316,
      'Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Royal City & Nguyễn Trãi',
      'PIPE-DIST-ROYAL-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối Cấp 2 D300 Royal City', tier: 'Cấp 2 (D300)', flow: '2,150 m³/h', status: 'Ổn định' }
    );

    // 7. Nhánh Cấp 3 (Vàng) đấu nối trực tiếp chân công trình
    create3DPipe(
      [new THREE.Vector3(-660, 1.0, 140), new THREE.Vector3(-660, 1.0, 150)],
      0.65,
      0xeab308,
      'Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội',
      'PIPE-SRV-BTHN',
      true,
      3,
      { name: 'Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội', tier: 'Cấp 3 (D100)', status: 'Ổn định' }
    );
    create3DPipe(
      [new THREE.Vector3(-840, 1.0, 140), new THREE.Vector3(-840, 1.0, 180)],
      0.65,
      0xeab308,
      'Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott',
      'PIPE-SRV-JWM',
      true,
      3,
      { name: 'Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott', tier: 'Cấp 3 (D125)', status: 'Ổn định' }
    );
    create3DPipe(
      [new THREE.Vector3(-520, 1.0, -420), new THREE.Vector3(-520, 1.0, -430)],
      0.65,
      0xeab308,
      'Nhánh Cấp 3 D100 -> Tháp Handico Tower',
      'PIPE-SRV-HANDICO',
      true,
      3,
      { name: 'Nhánh Cấp 3 D100 -> Tháp Handico Tower', tier: 'Cấp 3 (D100)', status: 'Ổn định' }
    );
    create3DPipe(
      [new THREE.Vector3(480, 1.0, -200), new THREE.Vector3(480, 1.0, -220)],
      0.65,
      0xeab308,
      'Nhánh Cấp 3 D100 -> Trường ĐH Lao Động - Xã Hội',
      'PIPE-SRV-DHLDXH',
      true,
      3,
      { name: 'Nhánh Cấp 3 D100 -> ĐH Lao Động Xã Hội', tier: 'Cấp 3 (D100)', status: 'Ổn định' }
    );
    create3DPipe(
      [new THREE.Vector3(760, 1.0, 500), new THREE.Vector3(760, 1.0, 520)],
      0.65,
      0xeab308,
      'Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City',
      'PIPE-SRV-ROYAL',
      true,
      3,
      { name: 'Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City', tier: 'Cấp 3 (D150)', status: 'Ổn định' }
    );

        // =========================================================================
    // 12. CHỐT KHÓA NƯỚC THÔNG MINH (CLICK ĐỂ ĐÓNG/MỞ -> MÔ PHỎNG CẮT NƯỚC)
    // =========================================================================
    const valveGroup = new THREE.Group();
    scene.add(valveGroup);

    const createSmartValve = (pos, name, id, isClosed, zoneDescription, affectedBuildings, householdsAffected) => {
      if (!assetsLayer.valves) return null;

      const vGroup = new THREE.Group();
      vGroup.position.set(pos[0], 0, pos[2]);

      const padGeo = new THREE.CylinderGeometry(2.4, 2.7, 0.6, 16);
      const padMat = new THREE.MeshStandardMaterial({
        color: isClosed ? 0x450a0a : 0x064e3b,
        roughness: 0.6
      });
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.position.y = 0.3;
      vGroup.add(pad);

      const ringGeo = new THREE.RingGeometry(2.6, 3.6, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isClosed ? 0xef4444 : 0x10b981,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.15;
      vGroup.add(ring);

      const bodyGeo = new THREE.BoxGeometry(3.6, 3.6, 3.6);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: isClosed ? 0xdc2626 : 0x16a34a,
        metalness: 0.7,
        roughness: 0.25,
        emissive: isClosed ? 0x991b1b : 0x065f46,
        emissiveIntensity: 0.35
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 2.4;
      body.castShadow = true;
      vGroup.add(body);

      const stemGeo = new THREE.CylinderGeometry(0.5, 0.5, 2.5, 12);
      const stemMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.y = 4.5;
      vGroup.add(stem);

      const wheelGeo = new THREE.TorusGeometry(2.0, 0.45, 12, 24);
      const wheelMat = new THREE.MeshStandardMaterial({
        color: isClosed ? 0xf59e0b : 0x38bdf8,
        metalness: 0.75,
        roughness: 0.2
      });
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.x = isClosed ? 0 : Math.PI / 2;
      wheel.position.y = 5.8;
      vGroup.add(wheel);

      // Floating 3D Badge with PURE BLACK (#000000, 900) high-visibility text
      const canvas = document.createElement('canvas');
      canvas.width = 540;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      // Background: High-contrast bright warning yellow (#fde047) when open, crisp light red (#fee2e2) when closed
      ctx.fillStyle = isClosed ? '#fee2e2' : '#fde047';
      ctx.beginPath();
      ctx.roundRect(8, 8, 524, 84, 18);
      ctx.fill();
      ctx.strokeStyle = isClosed ? '#dc2626' : '#15803d';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Subtle inner border for crisp SCADA card appearance
      ctx.strokeStyle = isClosed ? '#b91c1c' : '#166534';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(14, 14, 512, 72);

      // Chữ ĐEN TUYỆT ĐỐI (#000000, font-weight: 900) - Tối đa độ tương phản, đọc rõ từ mọi góc nhìn xa/gần
      ctx.fillStyle = '#000000';
      ctx.font = '900 25px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isClosed ? `🔒 ${id}: ĐÃ ĐÓNG (CẮT NƯỚC)` : `🔓 ${id}: ĐANG MỞ (HOẠT ĐỘNG)`, 270, 50);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(0, 12, 0);
      sprite.scale.set(38, 7.0, 1);
      vGroup.add(sprite);

      const valvePayload = {
        name,
        id,
        type: 'Chốt Khóa Nước Phân Đoạn (Smart Isolation Valve)',
        status: isClosed ? '🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)' : '🔓 ĐANG MỞ (Cấp nước bình thường)',
        isClosed: isClosed,
        zoneDescription: zoneDescription,
        affectedBuildings: affectedBuildings,
        householdsAffected: householdsAffected,
        pressure: isClosed ? '0.00 bar (Cửa xả)' : '3.30 bar (Ổn định)',
        diameter: 'DN300 - DN500 Gang Cầu FCD',
        material: 'Van Cổng Tín Hiệu Điện Tử (Flanged Resilient Gate Valve)'
      };

      vGroup.userData = { name, id, type: 'SmartValve', data: valvePayload };
      body.userData = vGroup.userData;
      clickableObjectsRef.current.push(body);

      valveGroup.add(vGroup);
      return vGroup;
    };

    // 8 STRATEGIC SMART VALVES ACROSS DISTRICT
    createSmartValve(
      [0, 2.5, 20],
      'Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)',
      'VALVE-01',
      isOutageZone01,
      'Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T3',
      'Tháp Biểu Tượng 34T, Cụm 24T1, 24T2, 24T3, Dãy 17T1-17T6 và dãy nhà phố nội khu',
      '1,120 hộ dân (~4,500 cư dân)'
    );
    createSmartValve(
      [-160, 2.5, 25],
      'Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)',
      'VALVE-02',
      isOutageZone02,
      'Phân Khu Trường Học & Chung Cư Cao Cấp Hoàng Minh Giám',
      'Tổ Hợp Mandarin Garden (4 Tháp A, B, C, D) & Trường THPT Chuyên Hà Nội - Amsterdam',
      '1,008 căn hộ + 3,200 học sinh & GV'
    );
    createSmartValve(
      [0, 2.5, 155],
      'Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)',
      'VALVE-03',
      isOutageZone03,
      'Nút Giao Lê Văn Lương - Hoàng Đạo Thúy',
      'Diamond Flower Tower (36T), Star City, The Golden Palm, Cụm HUD Tower A & B, MB Grand Tower',
      '850 hộ dân & 35,000m² văn phòng tài chính'
    );
    createSmartValve(
      [0, 2.5, -180],
      'Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)',
      'VALVE-04',
      isOutageZone04,
      'Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng',
      'Tổ hợp Charmvit Tower, Khách sạn Grand Plaza, Cụm Chung Cư N04 (3 tháp) & N05 (2 tháp 34T)',
      '920 căn hộ & 540 phòng khách sạn 5 sao'
    );
    createSmartValve(
      [-280, 2.5, -180],
      'Chốt Khóa V-DCP-05 (Vinhomes D\'Capitale & Big C)',
      'VALVE-05',
      isOutageZone05,
      'Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến',
      'Tổ Hợp 6 Tòa Tháp Vinhomes D\'Capitale, Siêu Thị Big C Thăng Long, 2 Tháp Thăng Long Number One',
      '3,000 căn hộ cao cấp & TTTM Big C Thăng Long'
    );
    createSmartValve(
      [-440, 2.5, -320],
      'Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)',
      'VALVE-06',
      isOutageZone06,
      'Trung Tâm Tài Chính Phía Tây Hà Nội',
      'Keangnam Hanoi Landmark 72 (350m), 2 Tháp Căn Hộ Đôi Keangnam 48T, Handico Tower, CEO Tower, Bảo tàng HN',
      '922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn'
    );
    createSmartValve(
      [180, 2.5, 270],
      'Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)',
      'VALVE-07',
      isOutageZone07,
      'Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng',
      'Tổ hợp Hapulico Complex (4 Block), Chung Cư Golden West, Imperia Garden (2 Tháp 35T), Shophouse Chợ Thuốc',
      '1,200 căn hộ & Chợ Dược Phẩm miền Bắc'
    );
    createSmartValve(
      [75, 2.5, 0],
      'Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)',
      'VALVE-08',
      isOutageZone08,
      'Khu Đô Thị Thấp Tầng Nguyễn Thị Thập',
      '150 Biệt thự Liền kề BT1 - BT6, Trường Liên cấp Ngôi Sao, 50 Shophouse mặt phố Nguyễn Thị Thập',
      '150 căn biệt thự & 2,200 học sinh'
    );

    // =========================================================================
    // 13. TRỤ CỨU HỎA PCCC (80+ TRỤ KHẮP CÁC TUYẾN ĐƯỜNG - QCVN 06:2022)
    // =========================================================================
    if (assetsLayer.hydrants) {
      const hydrantGroup = new THREE.Group();
      scene.add(hydrantGroup);

      const createHydrant = (pos, name, id, road) => {
        const hGroup = new THREE.Group();
        hGroup.position.set(pos[0], 0, pos[2]);

        const baseGeo = new THREE.CylinderGeometry(0.7, 0.8, 1.2, 12);
        const redMat = new THREE.MeshStandardMaterial({
          color: 0xdc2626,
          metalness: 0.6,
          roughness: 0.25,
          emissive: 0x991b1b,
          emissiveIntensity: 0.35
        });
        const base = new THREE.Mesh(baseGeo, redMat);
        base.position.y = 0.6;
        hGroup.add(base);

        const bodyGeo = new THREE.CylinderGeometry(0.55, 0.55, 2.2, 12);
        const body = new THREE.Mesh(bodyGeo, redMat);
        body.position.y = 2.0;
        hGroup.add(body);

        const topGeo = new THREE.SphereGeometry(0.65, 12, 12);
        const top = new THREE.Mesh(topGeo, redMat);
        top.position.y = 3.1;
        hGroup.add(top);

        hGroup.userData = {
          name,
          id,
          type: 'Trụ Cứu Hỏa PCCC',
          data: {
            name,
            id,
            type: 'Trụ Cứu Hỏa Đô Thị (TCVN 6379:1998)',
            status: 'Sẵn sàng cấp nước chữa cháy 24/7 (Đạt QCVN 06:2022/BXD)',
            flow: '35.0 L/s (Lưu lượng danh định)',
            pressure: '3.35 bar (Cột áp tĩnh)',
            elevation: '+16.8m ASL',
            diameter: 'Họng cấp DN100 + 2 họng phụ DN65',
            households: 'Bán kính bảo vệ PCCC: 150m',
            dma: road
          }
        };
        body.userData = hGroup.userData;
        clickableObjectsRef.current.push(body);
        hydrantGroup.add(hGroup);
      };

      // 80+ Hydrants along streets
      const hydrantSpacing = [
        // Hoàng Đạo Thúy (8 trụ)
        ...[-300, -220, -140, -60, 20, 100, 180, 260].map((z, idx) => ({ pos: [14, 0, z], id: `HYD-HDT-${idx + 1}`, road: 'Đường Hoàng Đạo Thúy' })),
        // Lê Văn Lương (10 trụ)
        ...[-380, -300, -220, -140, -60, 20, 100, 180, 260, 340].map((x, idx) => ({ pos: [x, 0, 194], id: `HYD-LVL-${idx + 1}`, road: 'Đường Lê Văn Lương' })),
        // Trần Duy Hưng (10 trụ)
        ...[-380, -300, -220, -140, -60, 20, 100, 180, 260, 340].map((x, idx) => ({ pos: [x, 0, -196], id: `HYD-TDH-${idx + 1}`, road: 'Đường Trần Duy Hưng' })),
        // Phạm Hùng - Khuất Duy Tiến (12 trụ)
        ...[-500, -420, -340, -260, -180, -100, -20, 60, 140, 220, 300, 380].map((z, idx) => ({ pos: [-422, 0, z], id: `HYD-VD3-${idx + 1}`, road: 'Đường Phạm Hùng - Khuất Duy Tiến' })),
        // Hoàng Minh Giám (8 trụ)
        ...[-200, -130, -60, 10, 80, 150, 220, 290].map((z, idx) => ({ pos: [-148, 0, z], id: `HYD-HMG-${idx + 1}`, road: 'Đường Hoàng Minh Giám' })),
        // Nguyễn Thị Thập (8 trụ)
        ...[-140, -80, -20, 40, 100, 160, 220, 280].map((x, idx) => ({ pos: [x, 0, 12], id: `HYD-NTT-${idx + 1}`, road: 'Đường Nguyễn Thị Thập' })),
        // Ngụy Như Kon Tum (8 trụ)
        ...[-120, -60, 0, 60, 120, 180, 240, 300].map((x, idx) => ({ pos: [x, 0, 362], id: `HYD-NNKT-${idx + 1}`, road: 'Đường Ngụy Như Kon Tum' })),
        // Trung Kính (8 trụ)
        ...[-280, -200, -120, -40, 40, 120, 200, 280].map((z, idx) => ({ pos: [352, 0, z], id: `HYD-TK-${idx + 1}`, road: 'Phố Trung Kính' })),
        // Vũ Trọng Phụng (6 trụ)
        ...[190, 230, 270, 310, 350, 390].map((z, idx) => ({ pos: [248, 0, z], id: `HYD-VTP-${idx + 1}`, road: 'Phố Vũ Trọng Phụng' }))
      ];

      hydrantSpacing.forEach(h => createHydrant(h.pos, `Trụ Cứu Hỏa ${h.id}`, h.id, h.road));
    }

    // =========================================================================
    // 14. TRẠM ĐÀI NƯỚC & BƠM TĂNG ÁP ĐẦU MỐI
    // =========================================================================
    if (assetsLayer.tanks) {
      const tankGroup = new THREE.Group();
      tankGroup.position.set(-350, 0, 220);

      const standGeo = new THREE.CylinderGeometry(8, 12, 38, 16);
      const standMat = new THREE.MeshStandardMaterial({ color: isDark ? 0x1e293b : 0x64748b, roughness: 0.7 });
      const stand = new THREE.Mesh(standGeo, standMat);
      stand.position.y = 19;
      stand.castShadow = true;
      tankGroup.add(stand);

      const bowlGeo = new THREE.SphereGeometry(18, 24, 20);
      const bowlMat = new THREE.MeshStandardMaterial({
        color: isDark ? 0x0284c7 : 0x0369a1,
        metalness: 0.6,
        roughness: 0.2,
        emissive: isDark ? 0x0369a1 : 0x0284c7,
        emissiveIntensity: 0.25
      });
      const bowl = new THREE.Mesh(bowlGeo, bowlMat);
      bowl.position.y = 44;
      bowl.castShadow = true;
      tankGroup.add(bowl);

      tankGroup.userData = {
        name: 'Đài Nước & Trạm Bơm Tăng Áp Sông Đà (KĐT Nhân Chính)',
        id: 'PUMP-STATION-MAIN',
        type: 'Trạm Bơm & Đài Nước Tăng Áp',
        data: {
          name: 'Đài Nước Điều Áp & Trạm Bơm Tăng Áp Sông Đà',
          id: 'PUMP-STATION-MAIN',
          type: 'Đài Nước Cân Bằng Thủy Lực & Trạm Bơm Tăng Áp',
          status: 'Hoạt động liên tục (3/3 tổ máy biến tần)',
          flow: `${currentSim.flow.toFixed(1)} m³/h`,
          pressure: `${currentSim.pressure.toFixed(2)} bar (Áp lực xuất trạm)`,
          level: '14.2m / 16.0m (Dung tích 8,000 m³)',
          elevation: '+35.0m ASL',
          power: '3 x 160 kW Biến tần ABB',
          dma: 'Toàn KĐT Trung Hòa - Nhân Chính'
        }
      };
      bowl.userData = tankGroup.userData;
      clickableObjectsRef.current.push(bowl);
      scene.add(tankGroup);
    }

    // =========================================================================
    // 15. RAYCASTER & INTERACTION (CLICK CHỐT KHÓA NƯỚC ĐỂ ĐÓNG/MỞ)
    // =========================================================================
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
        if (hit && hit.userData) {
          if (hit.userData.type === 'SmartValve' && onToggleValve) {
            onToggleValve(hit.userData.id);
          }
          if (onSelectAsset && hit.userData.data) {
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

    // =========================================================================
    // 16. ANIMATION LOOP
    // =========================================================================
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      // Pulse flow particles
      flowParticlesRef.current.forEach((item) => {
        item.t = (item.t + item.speed) % 1;
        const pt = item.curve.getPointAt(item.t);
        if (pt) item.mesh.position.copy(pt);
      });



      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
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
  }, [theme, heatmap, assetsLayer, closedValves, simTime, viewMode]);

  // Camera Presets for 2.5km Regional District Model
  const setCameraPreset = (preset) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    if (preset === 'iso') {
      camera.position.set(780, 720, 880);
      controls.target.set(0, 20, 0);
    } else if (preset === 'top') {
      camera.position.set(0, 1750, 0.1);
      controls.target.set(0, 0, 0);
    } else if (preset === 'keangnam') {
      camera.position.set(-360, 280, -160);
      controls.target.set(-540, 110, -320);
    } else if (preset === 'ncc') {
      camera.position.set(-260, 240, 320);
      controls.target.set(-440, 30, 140);
    } else if (preset === 'diamond') {
      camera.position.set(180, 160, 280);
      controls.target.set(35, 60, 155);
    } else if (preset === '34t') {
      camera.position.set(130, 120, 110);
      controls.target.set(25, 45, 20);
    } else if (preset === 'dcapitale') {
      camera.position.set(-70, 180, -70);
      controls.target.set(-230, 60, -220);
    } else if (preset === 'hapulico') {
      camera.position.set(340, 160, 420);
      controls.target.set(180, 50, 270);
    }
    controls.update();
  };

  const handleZoom = (delta) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
    camera.position.addScaledVector(dir, delta * 90);
    controls.update();
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: compact ? '440px' : '560px' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%', outline: 'none' }} />

      {/* Active Outage Warning Banner at Top */}
      {activeOutages.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(220, 38, 38, 0.95)',
          color: '#ffffff',
          padding: '8px 18px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 50,
          fontSize: '13px',
          fontWeight: '600',
          backdropFilter: 'blur(6px)',
          animation: 'pulse 2s infinite'
        }}>
          <AlertTriangle size={18} color="#fef08a" />
          <span>⚠️ ĐANG CÔ LẬP CẮT NƯỚC: {activeOutages.length} chốt khóa đang ĐÓNG. Click vào chốt van màu đỏ để mở lại nước!</span>
        </div>
      )}

{/* Right-hand HUD removed as requested */}

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
            background: 'rgba(11, 18, 33, 0.95)',
            color: '#38bdf8',
            padding: '7px 14px',
            borderRadius: '6px',
            fontSize: '12.5px',
            fontWeight: '600',
            border: '1px solid rgba(56, 189, 248, 0.5)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Box size={14} />
            <span>{hoveredName}</span>
          </div>
        )}


      </div>
    </div>
  );
}
