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
    const height = container.clientHeight || (compact ? 440 : Math.max(760, window.innerHeight - 65));
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
    // --- TRỤC ĐƯỜNG VÀNH ĐAI NGOẠI VI (OUTER RING ARTERIALS & COLLECTORS) ---
    createRoad(0, 720, 32, 2500, false, 'Đường Nguyễn Trãi (Trục Chính Đông Nam)', true);
    createRoad(-780, 200, 26, 1200, false, 'Đường Tố Hữu (Lê Văn Lương kéo dài)', true);
    createRoad(-780, 70, 24, 1200, false, 'Đường Đỗ Đức Dục - Miếu Đầm', true);
    createRoad(-850, 0, 26, 2000, true, 'Đường Sa Đôi - Lê Quang Đạo', true);
    createRoad(620, 0, 22, 2200, true, 'Trục Phố Khương Đình - Thượng Đình', true);
    createRoad(0, 560, 20, 2200, false, 'Phố Triều Khúc - Lương Thế Vinh', false);
    createRoad(200, -780, 24, 2000, false, 'Đường Tôn Thất Thuyết / Trần Thái Tông', true);
    createRoad(-440, 0, 36, 2500, true, 'Vành Đai 3 - Cầu Cạn Phạm Hùng', false);


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
    // 10B. DENSE OUTER RING EXPANSION (R = 500m -> 1,240m BOUNDARY FILL)
    // =========================================================================
    // --- KHU VỰC PHÍA TÂY & TÂY BẮC (MỸ ĐÌNH, MỄ TRÌ, THE MANOR, JW MARRIOTT) ---
    create3DBuilding({
      pos: [-800, 0, 90],
      size: [78, 48, 65],
      color: isDark ? 0x0284c7 : 0x0369a1,
      name: 'Khách Sạn JW Marriott Hotel Hanoi (Biểu Tượng Rồng Bên Hồ)',
      id: 'BLDG-JW-MARRIOTT',
      floors: 9,
      households: '450 phòng 5 sao quốc tế & Trung tâm hội nghị',
      demandFlow: '48.0 m³/h',
      intakePressure: '3.45 bar',
      connectionPipe: 'DN125 Gang dẻo',
      cisternCapacity: '2,200 m³',
      meterId: 'AMR-MARRIOTT-01',
      dma: 'DMA Mễ Trì',
      hasAntenna: true
    });

    // Cụm Vinhomes West Point (3 tháp W1, W2, W3 cao 35-39 tầng)
    [
      { pos: [-680, 0, 30], size: [32, 105, 30], name: 'Vinhomes West Point - Tháp W1 (39T)', id: 'BLDG-WP-1', floors: 39 },
      { pos: [-620, 0, 70], size: [34, 112, 32], name: 'Vinhomes West Point - Tháp W2 (39T)', id: 'BLDG-WP-2', floors: 39 },
      { pos: [-720, 0, 70], size: [32, 98, 30], name: 'Vinhomes West Point - Tháp W3 (35T)', id: 'BLDG-WP-3', floors: 35 }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '580 căn hộ cao cấp',
        demandFlow: '42.0 m³/h',
        intakePressure: '3.38 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,500 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Mễ Trì Hạ',
        hasAntenna: true
      });
    });

    // Cụm The Manor Mỹ Đình & Sudico
    [
      { pos: [-860, 0, -220], size: [42, 92, 42], name: 'Tổ Hợp The Manor Mỹ Đình - Tháp Paris (26T)', id: 'BLDG-MANOR-PARIS' },
      { pos: [-920, 0, -180], size: [40, 88, 40], name: 'Tổ Hợp The Manor Mỹ Đình - Tháp Rome (26T)', id: 'BLDG-MANOR-ROME' },
      { pos: [-820, 0, -170], size: [38, 85, 38], name: 'Tổ Hợp Căn Hộ Sudico Mễ Trì (25T)', id: 'BLDG-SUDICO-1' },
      { pos: [-920, 0, -320], size: [44, 95, 40], name: 'Tổ Hợp The Emerald Mỹ Đình (30T)', id: 'BLDG-EMERALD' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0369a1 : 0x0284c7,
        name: b.name,
        id: b.id,
        floors: 26,
        households: '480 căn hộ',
        demandFlow: '36.0 m³/h',
        intakePressure: '3.42 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,400 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Mỹ Đình'
      });
    });

    // Cụm Golden Palace Mễ Trì (3 tháp hoa sen)
    [
      { pos: [-980, 0, 40], id: 'BLDG-GP-A', name: 'Golden Palace Mễ Trì - Tháp A (30T)' },
      { pos: [-1040, 0, 80], id: 'BLDG-GP-B', name: 'Golden Palace Mễ Trì - Tháp B (30T)' },
      { pos: [-980, 0, 120], id: 'BLDG-GP-C', name: 'Golden Palace Mễ Trì - Tháp C (30T)' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: [36, 95, 36],
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: 30,
        households: '520 căn hộ',
        demandFlow: '38.0 m³/h',
        intakePressure: '3.40 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,600 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Mễ Trì'
      });
    });

    // Shophouses Phía Tây
    [
      { center: [-700, -140], size: [120, 60], rows: 2, cols: 8, name: 'KDC Phố Đồng Me - Mễ Trì Hạ' },
      { center: [-760, -260], size: [110, 60], rows: 2, cols: 7, name: 'Khu Shophouse Mễ Trì Thượng' },
      { center: [-840, -80], size: [110, 60], rows: 2, cols: 7, name: 'Khu Liền Kề Sa Đôi' },
      { center: [-940, -60], size: [110, 60], rows: 2, cols: 7, name: 'KDC Phố Cương Kiên' },
      { center: [-660, 180], size: [100, 60], rows: 2, cols: 7, name: 'KDC Phố Đỗ Đức Dục' },
      { center: [-840, 220], size: [120, 60], rows: 2, cols: 8, name: 'Khu Biệt Thự Mễ Trì Viên' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [14, 21],
        zoneId: `WEST-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Mễ Trì - Mỹ Đình'
      });
    });

        // =========================================================================
    // 10C. THỰC TẾ HÀ NỘI: CỤM ĐÔ THỊ TRUNG YÊN, TRUNG HÒA & MỄ TRÌ THƯỢNG
    // =========================================================================
    // --- 1. CỤM KĐT TRUNG YÊN & TRUNG HÒA (Phố Trung Kính - Trần Kim Xuyến) ---
    [
      { pos: [140, 0, -280], size: [38, 95, 38], name: 'Tòa Tháp Viện Dầu Khí Việt Nam (VPI Tower - 30T)', id: 'BLDG-VPI-TOWER', floors: 30, dma: 'DMA Trung Yên' },
      { pos: [220, 0, -260], size: [32, 78, 30], name: 'Tổ Hợp Chung Cư Trung Yên 1 (24T)', id: 'BLDG-TY-1', floors: 24, dma: 'DMA Trung Yên' },
      { pos: [280, 0, -320], size: [34, 82, 32], name: 'Tổ Hợp Căn Hộ Trung Yên Plaza (28T)', id: 'BLDG-TY-PLAZA', floors: 28, dma: 'DMA Trung Yên' },
      { pos: [180, 0, -350], size: [32, 75, 30], name: 'Chung Cư Trung Yên 9 (22T)', id: 'BLDG-TY-9', floors: 22, dma: 'DMA Trung Yên' },
      { pos: [240, 0, -380], size: [32, 75, 30], name: 'Chung Cư Trung Yên 11 (22T)', id: 'BLDG-TY-11', floors: 22, dma: 'DMA Trung Yên' },
      { pos: [320, 0, -280], size: [36, 88, 34], name: 'Tòa Nhà Cảnh Sát Phòng Cháy Chữa Cháy Hà Nội', id: 'BLDG-PCCC-HN', floors: 26, dma: 'DMA Trung Yên' },
      { pos: [380, 0, -340], size: [34, 85, 32], name: 'Tổ Hợp Tháp Đôi Star City Lê Văn Lương (27T)', id: 'BLDG-STAR-CITY', floors: 27, dma: 'DMA THNC-02' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '420 căn hộ & văn phòng',
        demandFlow: '35.0 m³/h',
        intakePressure: '3.30 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,400 m³',
        meterId: `AMR-${b.id}`,
        dma: b.dma,
        hasAntenna: true
      });
    });

    // Shophouse Trung Yên & Trần Kim Xuyến
    [
      { center: [200, -200], size: [110, 50], rows: 2, cols: 7, name: 'Phố Trần Kim Xuyến - Dãy Biệt Thự Liền Kề' },
      { center: [280, -210], size: [110, 50], rows: 2, cols: 7, name: 'Phố Hạ Yên Quyết - Khu Nhà Phố Liền Kề' },
      { center: [140, -340], size: [90, 45], rows: 2, cols: 6, name: 'KDC Phố Nguyễn Chánh - Trung Hòa' },
      { center: [220, -330], size: [90, 45], rows: 2, cols: 6, name: 'KDC Phố Đặng Thùy Trâm Kéo Dài' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [15, 22],
        zoneId: `TY-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Trung Yên'
      });
    });

    // --- 2. CỤM MỄ TRÌ THƯỢNG & CUNG TRÍ THỨC (Phía Tây Vành Đai 3) ---
    [
      { pos: [-620, 0, -240], size: [52, 42, 52], name: 'Cung Trí Thức Thành Phố Hà Nội', id: 'BLDG-CUNG-TRI-THUC', floors: 12, dma: 'DMA Mễ Trì' },
      { pos: [-700, 0, -320], size: [58, 48, 54], name: 'Viện Huyết Học & Truyền Máu Trung Ương', id: 'BLDG-VIEN-HUYET-HOC', floors: 14, dma: 'DMA Cầu Giấy' },
      { pos: [-580, 0, -420], size: [36, 88, 36], name: 'Chung Cư Golden Field Mỹ Đình (30T)', id: 'BLDG-GOLDEN-FIELD', floors: 30, dma: 'DMA Mỹ Đình' },
      { pos: [-650, 0, -480], size: [34, 82, 34], name: 'Tổ Hợp Chung Cư CT1 Mễ Trì Thượng (25T)', id: 'BLDG-CT1-MTT', floors: 25, dma: 'DMA Mễ Trì' },
      { pos: [-720, 0, -440], size: [34, 82, 34], name: 'Tổ Hợp Chung Cư CT2 Mễ Trì Thượng (25T)', id: 'BLDG-CT2-MTT', floors: 25, dma: 'DMA Mễ Trì' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0369a1 : 0x0284c7,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '450 căn hộ & Cơ quan',
        demandFlow: '40.0 m³/h',
        intakePressure: '3.38 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,800 m³',
        meterId: `AMR-${b.id}`,
        dma: b.dma,
        hasAntenna: true
      });
    });

    // --- 3. CỤM QUAN NHÂN, CỰ LỘC & GIÁP NHẤT (Ven Sông Tô Lịch) ---
    [
      { pos: [380, 0, 120], size: [34, 88, 32], name: 'Tổ Hợp Chung Cư The Legacy Lê Văn Thiêm (25T)', id: 'BLDG-LEGACY', floors: 25, dma: 'DMA Nhân Chính' },
      { pos: [440, 0, 80], size: [32, 82, 30], name: 'Tòa Nhà Diamond Plaza Quan Nhân (22T)', id: 'BLDG-DIAMOND-QN', floors: 22, dma: 'DMA Nhân Chính' },
      { pos: [520, 0, 60], size: [32, 78, 30], name: 'Chung Cư 282 Nguyễn Huy Tưởng (24T)', id: 'BLDG-282-NHT', floors: 24, dma: 'DMA Thanh Xuân' },
      { pos: [600, 0, 20], size: [34, 85, 32], name: 'Tổ Hợp Chung Cư Stellar Garden 35 Lê Văn Thiêm (28T)', id: 'BLDG-STELLAR', floors: 28, dma: 'DMA Thanh Xuân' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '380 căn hộ',
        demandFlow: '32.0 m³/h',
        intakePressure: '3.22 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,200 m³',
        meterId: `AMR-${b.id}`,
        dma: b.dma
      });
    });

    // Shophouses Cự Lộc - Giáp Nhất
    [
      { center: [460, 40], size: [100, 45], rows: 2, cols: 7, name: 'Làng Cự Lộc - Dãy Nhà Phố Cổ' },
      { center: [560, 20], size: [100, 45], rows: 2, cols: 7, name: 'Phố Giáp Nhất - Bờ Sông Tô Lịch' },
      { center: [360, 220], size: [90, 45], rows: 2, cols: 6, name: 'KDC Phố Nguyễn Huy Tưởng' },
      { center: [440, 260], size: [90, 45], rows: 2, cols: 6, name: 'KDC Phố Ngụy Như Kon Tum Nối Dài' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [14, 21],
        zoneId: `QN-CL-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Nhân Chính'
      });
    });


    // --- KHU VỰC PHÍA BẮC & ĐÔNG BẮC (NAM TRUNG YÊN, CẦU GIẤY, YÊN HÒA) ---
    // Cụm Cao Ốc Nam Trung Yên (B10, B11, A10, A14)
    [
      { pos: [-180, 0, -480], size: [30, 88, 28], name: 'Chung Cư Nam Trung Yên B10A (30T)', id: 'BLDG-NTY-B10A' },
      { pos: [-120, 0, -520], size: [30, 88, 28], name: 'Chung Cư Nam Trung Yên B10B (30T)', id: 'BLDG-NTY-B10B' },
      { pos: [-60, 0, -580], size: [32, 92, 30], name: 'Chung Cư Nam Trung Yên B11A (32T)', id: 'BLDG-NTY-B11A' },
      { pos: [40, 0, -540], size: [32, 92, 30], name: 'Chung Cư Nam Trung Yên B11B (32T)', id: 'BLDG-NTY-B11B' },
      { pos: [120, 0, -600], size: [34, 105, 32], name: 'Tổ Hợp Căn Hộ Cao Cấp A10 Nam Trung Yên (37T)', id: 'BLDG-NTY-A10' },
      { pos: [180, 0, -520], size: [34, 105, 32], name: 'Tổ Hợp Căn Hộ Cao Cấp A14 Nam Trung Yên (37T)', id: 'BLDG-NTY-A14' },
      { pos: [-100, 0, -680], size: [38, 92, 38], name: 'Tòa Tháp Tài Chính PVI Tower (26 Tầng)', id: 'BLDG-PVI' },
      { pos: [60, 0, -720], size: [36, 128, 36], name: 'Tổ Hợp Golden Park Tower Cầu Giấy (45 Tầng)', id: 'BLDG-GOLDEN-PARK' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: 32,
        households: '460 căn hộ & văn phòng',
        demandFlow: '38.0 m³/h',
        intakePressure: '3.32 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,500 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Nam Trung Yên',
        hasAntenna: true
      });
    });

    // Cụm Home City & Chelsea Park Yên Hòa
    [
      { pos: [320, 0, -460], size: [32, 95, 30], name: 'Tổ Hợp Home City Trung Kính - Tháp V1 (30T)', id: 'BLDG-HC-1' },
      { pos: [380, 0, -520], size: [32, 95, 30], name: 'Tổ Hợp Home City Trung Kính - Tháp V2 (30T)', id: 'BLDG-HC-2' },
      { pos: [440, 0, -480], size: [34, 98, 32], name: 'Tổ Hợp Central Field 219 Trung Kính (29T)', id: 'BLDG-CENTRAL-FIELD' },
      { pos: [260, 0, -650], size: [32, 82, 28], name: 'Tổ Hợp Chelsea Park Yên Hòa - Tháp Bắc (25T)', id: 'BLDG-CHELSEA-N' },
      { pos: [320, 0, -650], size: [32, 82, 28], name: 'Tổ Hợp Chelsea Park Yên Hòa - Tháp Nam (25T)', id: 'BLDG-CHELSEA-S' },
      { pos: [200, 0, -880], size: [38, 105, 36], name: 'Discovery Central Dịch Vọng Hậu (35T)', id: 'BLDG-DISCOVERY-DVH' },
      { pos: [300, 0, -920], size: [36, 98, 36], name: 'Tháp Văn Phòng CMC Tower Duy Tân (28T)', id: 'BLDG-CMC-TOWER' },
      { pos: [420, 0, -850], size: [34, 92, 32], name: 'Tòa Nhà FPT Tower Cầu Giấy (25T)', id: 'BLDG-FPT-TOWER' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0369a1 : 0x0284c7,
        name: b.name,
        id: b.id,
        floors: 28,
        households: '420 căn hộ & văn phòng',
        demandFlow: '34.0 m³/h',
        intakePressure: '3.28 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,300 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Cầu Giấy'
      });
    });

    // Shophouses Phía Bắc
    [
      { center: [220, -400], size: [110, 60], rows: 2, cols: 8, name: 'KDC Phố Hạ Yên - Mạc Thái Tổ' },
      { center: [120, -420], size: [110, 60], rows: 2, cols: 7, name: 'Khu Shophouse Nam Trung Yên' },
      { center: [-100, -380], size: [120, 60], rows: 2, cols: 8, name: 'Khu Dân Cư Phố Nguyễn Chánh' },
      { center: [340, -380], size: [110, 60], rows: 2, cols: 7, name: 'Khu Shophouse Trung Kính Bắc' },
      { center: [220, -540], size: [110, 60], rows: 2, cols: 7, name: 'KDC Phố Yên Hòa Mở Rộng' },
      { center: [360, -600], size: [120, 60], rows: 2, cols: 8, name: 'Khu Liền Kề Cầu Giấy' },
      { center: [180, -750], size: [120, 60], rows: 2, cols: 8, name: 'KDC Phố Trần Thái Tông' },
      { center: [340, -800], size: [120, 60], rows: 2, cols: 8, name: 'Khu Phân Lô Phố Duy Tân' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [14, 22],
        zoneId: `NORTH-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Nam Trung Yên'
      });
    });

    // --- KHU VỰC PHÍA ĐÔNG & ĐÔNG NAM (THANH XUÂN, LÁNG HẠ, NGUYỄN TUÂN, ROYAL CITY MỞ RỘNG) ---
    // Mở Rộng Vinhomes Royal City (Tháp R3, R4, R5, R6 35T)
    [
      { pos: [840, 0, 480], size: [44, 115, 44], name: 'Vinhomes Royal City - Tháp R3 (35T)', id: 'BLDG-ROYAL-R3' },
      { pos: [840, 0, 560], size: [44, 115, 44], name: 'Vinhomes Royal City - Tháp R4 (35T)', id: 'BLDG-ROYAL-R4' },
      { pos: [920, 0, 520], size: [42, 115, 42], name: 'Vinhomes Royal City - Tháp R5 (35T)', id: 'BLDG-ROYAL-R5' },
      { pos: [980, 0, 560], size: [42, 115, 42], name: 'Vinhomes Royal City - Tháp R6 (35T)', id: 'BLDG-ROYAL-R6' },
      { pos: [680, 0, 760], size: [38, 118, 38], name: 'Tổ Hợp King Palace 108 Nguyễn Trãi (36T)', id: 'BLDG-KING-PALACE' },
      { pos: [480, 0, 320], size: [32, 80, 30], name: 'Rivera Park 69 Vũ Trọng Phụng - Tháp A (24T)', id: 'BLDG-RIVERA-A' },
      { pos: [540, 0, 320], size: [32, 80, 30], name: 'Rivera Park 69 Vũ Trọng Phụng - Tháp B (24T)', id: 'BLDG-RIVERA-B' },
      { pos: [460, 0, 120], size: [36, 118, 36], name: 'Tòa Tháp Diamond Flower Tower (36T - Lê Văn Lương)', id: 'BLDG-DIAMOND-FLOWER' },
      { pos: [540, 0, 140], size: [32, 95, 32], name: 'Tổ Hợp BRG Grand Plaza Láng Hạ (28T)', id: 'BLDG-BRG-LANG-HA' },
      { pos: [620, 0, 180], size: [34, 102, 34], name: 'Tòa Tháp Sky City Towers 88 Láng Hạ (31T)', id: 'BLDG-SKY-CITY' },
      { pos: [460, 0, 220], size: [32, 92, 30], name: 'Tổ Hợp Căn Hộ Bohemia Residence (33T)', id: 'BLDG-BOHEMIA' },
      { pos: [520, 0, 220], size: [32, 92, 30], name: 'Tổ Hợp Golden West Lê Văn Thiêm (27T)', id: 'BLDG-GOLDEN-WEST' },
      { pos: [460, 0, 420], size: [34, 98, 32], name: 'Hapulico Complex Giai Đoạn 2 - Tháp 24T3', id: 'BLDG-HAPU-24T3' },
      { pos: [520, 0, 420], size: [34, 98, 32], name: 'Hapulico Complex Giai Đoạn 2 - Tháp 24T4', id: 'BLDG-HAPU-24T4' },
      { pos: [580, 0, 380], size: [32, 92, 30], name: 'Khu Chung Cư Thống Nhất Complex 82 Nguyễn Tuân (25T)', id: 'BLDG-THONG-NHAT' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: 30,
        households: '500 căn hộ cao cấp',
        demandFlow: '40.0 m³/h',
        intakePressure: '3.20 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,500 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Thanh Xuân',
        hasAntenna: true
      });
    });

    // Shophouses Phía Đông & Đông Nam
    [
      { center: [640, 80], size: [120, 60], rows: 2, cols: 8, name: 'KDC Phố Láng Hạ Mở Rộng' },
      { center: [740, 120], size: [120, 60], rows: 2, cols: 8, name: 'Khu Shophouse Giảng Võ - Láng Hạ' },
      { center: [840, 180], size: [130, 60], rows: 2, cols: 9, name: 'KDC Phố Thái Hà Cửa Ngõ' },
      { center: [640, 320], size: [120, 60], rows: 2, cols: 8, name: 'Khu Shophouse Phố Nguyễn Tuân' },
      { center: [740, 360], size: [120, 60], rows: 2, cols: 8, name: 'KDC Phố Vũ Trọng Phụng Nối Dài' },
      { center: [840, 420], size: [120, 60], rows: 2, cols: 8, name: 'Khu Dân Cư Phố Khương Đình 1' },
      { center: [660, 600], size: [120, 60], rows: 2, cols: 8, name: 'KDC Phố Thượng Đình Cửa Ngõ' },
      { center: [780, 720], size: [130, 60], rows: 2, cols: 9, name: 'Khu Nhà Phố Liền Kề Nguyễn Trãi' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [15, 22],
        zoneId: `EAST-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Thanh Xuân'
      });
    });

    
    // --- BỔ SUNG CÔNG TRÌNH VIỀN NGOÀI CÙNG LẤP ĐẦY KHUNG TRÒN R = 800 - 1,240M ---
    // Sector 1: Tây Bắc (Mỹ Đình - Cương Kiên - Sa Đôi)
    [
      { pos: [-1050, 0, -220], size: [38, 95, 38], name: 'Tổ Hợp Tháp Văn Phòng Mỹ Đình 1 (30T)', id: 'BLDG-MD1-A' },
      { pos: [-1120, 0, -160], size: [36, 88, 36], name: 'Tòa Tháp Căn Hộ Cương Kiên (28T)', id: 'BLDG-CK-28' },
      { pos: [-1050, 0, -380], size: [40, 92, 40], name: 'Chung Cư An Lạc Phùng Khoang Mở Rộng', id: 'BLDG-ANLAC' },
      { pos: [-750, 0, -480], size: [38, 90, 36], name: 'Tổ Hợp Florence Mỹ Đình (25T)', id: 'BLDG-FLORENCE' },
      { pos: [-880, 0, -480], size: [36, 86, 36], name: 'Chung Cư Iris Garden Mỹ Đình (25T)', id: 'BLDG-IRIS' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: 28,
        households: '420 căn hộ',
        demandFlow: '32.0 m³/h',
        intakePressure: '3.35 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,200 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Mỹ Đình'
      });
    });

    // Sector 2: Đông Bắc (Dịch Vọng Hậu - Cầu Giấy Ngoại Vi)
    [
      { pos: [520, 0, -680], size: [36, 95, 36], name: 'Tòa Tháp Viễn Thông Mobifone Duy Tân (28T)', id: 'BLDG-MOBIFONE' },
      { pos: [620, 0, -620], size: [34, 88, 34], name: 'Tổ Hợp Dịch Vọng Hậu Plaza (26T)', id: 'BLDG-DVH-PLAZA' },
      { pos: [720, 0, -560], size: [38, 92, 38], name: 'Tòa Tháp Căn Hộ Park View Yên Hòa (29T)', id: 'BLDG-PARKVIEW' },
      { pos: [820, 0, -480], size: [36, 88, 36], name: 'Tổ Hợp Thăng Long Number Two (27T)', id: 'BLDG-TL-NO2' },
      { pos: [920, 0, -420], size: [36, 88, 36], name: 'Cụm Tòa Nhà Đường Láng Ngoại Vi (26T)', id: 'BLDG-LANG-EXT' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0369a1 : 0x0284c7,
        name: b.name,
        id: b.id,
        floors: 27,
        households: '390 căn hộ',
        demandFlow: '30.0 m³/h',
        intakePressure: '3.25 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,100 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Cầu Giấy'
      });
    });

    // Sector 3: Đông Nam (Thượng Đình - Khương Đình - Kim Giang)
    [
      { pos: [1050, 0, 480], size: [42, 105, 42], name: 'Tổ Hợp Căn Hộ Cao Cấp Sông Tô Lịch (32T)', id: 'BLDG-TOLICH-1' },
      { pos: [1120, 0, 560], size: [40, 98, 40], name: 'Chung Cư Khương Đình Riverside (30T)', id: 'BLDG-KHUONGDINH-R' },
      { pos: [1020, 0, 680], size: [38, 92, 38], name: 'Tòa Tháp Kim Giang Complex (28T)', id: 'BLDG-KIMG-1' },
      { pos: [920, 0, 820], size: [36, 88, 36], name: 'Tổ Hợp Đô Thị Mới Đại Kim Cửa Ngõ (26T)', id: 'BLDG-DAIKIM' },
      { pos: [800, 0, 920], size: [38, 92, 38], name: 'Tòa Nhà Hạ Đình Plaza (28T)', id: 'BLDG-HADINH' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: 28,
        households: '440 căn hộ',
        demandFlow: '35.0 m³/h',
        intakePressure: '3.18 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,300 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Thượng Đình'
      });
    });

    // Sector 4: Nam & Tây Nam (Mỗ Lao - Phùng Khoang Mở Rộng)
    [
      { pos: [-780, 0, 620], size: [38, 102, 38], name: 'Tổ Hợp Tháp Doanh Nhân Mỗ Lao (36T)', id: 'BLDG-MOLAO-DN' },
      { pos: [-860, 0, 720], size: [36, 95, 36], name: 'Khu Đô Thị Mỗ Lao Tháp A (32T)', id: 'BLDG-MOLAO-A' },
      { pos: [-920, 0, 800], size: [36, 95, 36], name: 'Khu Đô Thị Mỗ Lao Tháp B (32T)', id: 'BLDG-MOLAO-B' },
      { pos: [-720, 0, 920], size: [36, 90, 36], name: 'Chung Cư Hồ Gươm Plaza Hà Đông (29T)', id: 'BLDG-HOGUOM-PZ' },
      { pos: [-520, 0, 980], size: [36, 88, 36], name: 'Tổ Hợp Grand SunLake Văn Quán Cửa Ngõ', id: 'BLDG-SUNLAKE' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: 30,
        households: '480 căn hộ',
        demandFlow: '38.0 m³/h',
        intakePressure: '3.22 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,450 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Mỗ Lao - Hà Đông'
      });
    });

    // Bổ sung 8 Block Shophouse viền ngoài cùng
    [
      { center: [-1000, -280], size: [130, 60], rows: 2, cols: 9, name: 'KDC Phố Sa Đôi Ngoại Vi' },
      { center: [-900, -420], size: [120, 60], rows: 2, cols: 8, name: 'Khu Liền Kề Mỹ Đình Ngoại Vi' },
      { center: [650, -520], size: [120, 60], rows: 2, cols: 8, name: 'Khu Shophouse Cầu Giấy Mở Rộng' },
      { center: [850, -400], size: [130, 60], rows: 2, cols: 9, name: 'KDC Phố Đường Láng Biên Đông' },
      { center: [1050, 420], size: [130, 60], rows: 2, cols: 9, name: 'Khu Phố Khương Đình Mở Rộng' },
      { center: [950, 620], size: [130, 60], rows: 2, cols: 9, name: 'KDC Phố Kim Giang Cửa Ngõ' },
      { center: [-850, 640], size: [130, 60], rows: 2, cols: 9, name: 'Khu Shophouse Làng Việt Kiều Châu Âu' },
      { center: [-750, 840], size: [130, 60], rows: 2, cols: 9, name: 'KDC Phố Mỗ Lao Cửa Ngõ' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [14, 21],
        zoneId: `OUTER-EXT-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Vành Đai Ngoại Vi'
      });
    });

    // --- KHU VỰC PHÍA NAM & TÂY NAM (TỐ HỮU, PHÙNG KHOANG, THANH XUÂN NAM, TRIỀU KHÚC) ---
    [
      { pos: [-380, 0, 540], size: [36, 112, 34], name: 'Tổ Hợp Chung Cư Ecolife Capitol (34T - Tố Hữu)', id: 'BLDG-ECOLIFE' },
      { pos: [-450, 0, 600], size: [36, 112, 34], name: 'Tổ Hợp Roman Plaza Tố Hữu - Tháp A (32T)', id: 'BLDG-ROMAN-A' },
      { pos: [-530, 0, 660], size: [34, 108, 34], name: 'Tổ Hợp Roman Plaza Tố Hữu - Tháp B (32T)', id: 'BLDG-ROMAN-B' },
      { pos: [-600, 0, 780], size: [36, 115, 34], name: 'Tổ Hợp The Pride Hải Phát (35T - Tố Hữu)', id: 'BLDG-THE-PRIDE' },
      { pos: [-660, 0, 840], size: [34, 105, 34], name: 'Tổ Hợp C14 Bắc Hà Bộ Công An (30T)', id: 'BLDG-C14-BH' },
      { pos: [80, 0, 680], size: [32, 92, 30], name: 'Tổ Hợp Căn Hộ PCC1 Triều Khúc (27T)', id: 'BLDG-PCC1-TK' },
      { pos: [160, 0, 720], size: [32, 92, 30], name: 'Tổ Hợp Pandora 53 Triều Khúc (27T)', id: 'BLDG-PANDORA' },
      { pos: [240, 0, 760], size: [30, 88, 30], name: 'Chung Cư BlueGem Tower Triều Khúc (29T)', id: 'BLDG-BLUEGEM' },
      { pos: [120, 0, 840], size: [54, 45, 54], name: 'Khu Giảng Đường Đại Học Hà Nội (HANU)', id: 'BLDG-HANU' },
      { pos: [220, 0, 880], size: [58, 48, 58], name: 'Khuôn Viên Đại Học Kiến Trúc Hà Nội (HAU)', id: 'BLDG-HAU' },
      { pos: [320, 0, 940], size: [52, 42, 52], name: 'Học Viện Công Nghệ Bưu Chính Viễn Thông (PTIT)', id: 'BLDG-PTIT' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: 30,
        households: '450 căn hộ & Giảng đường',
        demandFlow: '36.0 m³/h',
        intakePressure: '3.25 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,600 m³',
        meterId: `AMR-${b.id}`,
        dma: 'DMA Phùng Khoang',
        hasAntenna: true
      });
    });

    // Shophouses Phía Nam
    [
      { center: [-220, 520], size: [110, 60], rows: 2, cols: 7, name: 'KDC Phố Phùng Khoang Mới' },
      { center: [-320, 620], size: [120, 60], rows: 2, cols: 8, name: 'Khu Liền Kề Hồ Mễ Trì' },
      { center: [-160, 680], size: [110, 60], rows: 2, cols: 7, name: 'KDC Phố Lương Thế Vinh Nam' },
      { center: [-240, 780], size: [120, 60], rows: 2, cols: 8, name: 'Khu Shophouse Cửa Ngõ Hà Đông' },
      { center: [40, 580], size: [110, 60], rows: 2, cols: 7, name: 'KDC Làng Triều Khúc Cổ' },
      { center: [120, 620], size: [110, 60], rows: 2, cols: 7, name: 'Khu Phân Lô Phố Triều Khúc' },
      { center: [20, 760], size: [120, 60], rows: 2, cols: 8, name: 'KDC Phố Nguyễn Quý Đức' },
      { center: [-80, 860], size: [120, 60], rows: 2, cols: 8, name: 'Khu Dân Cư Thanh Xuân Nam' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [14, 21],
        zoneId: `SOUTH-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Thanh Xuân Nam'
      });
    });


        // =========================================================================
    // 10D. CÁC CỤM ĐÔ THỊ MỚI LẤP ĐẦY 4 VÙNG GREEN (THEO BẢN ĐỒ THỰC TẾ HÀ NỘI)
    // =========================================================================
    // --- GREEN 1: ĐỈNH BẮC (CẦU GIẤY, DUY TÂN TECH HUB, BỘ TN&MT) ---
    [
      { pos: [-120, 0, -880], size: [42, 92, 38], name: 'Trụ Sở Bộ Tài Nguyên & Môi Trường (28T)', id: 'BLDG-BTNMT', floors: 28, dma: 'DMA Cầu Giấy' },
      { pos: [-220, 0, -920], size: [38, 85, 36], name: 'Trụ Sở Thanh Tra Chính Phủ (25T)', id: 'BLDG-TTCP', floors: 25, dma: 'DMA Cầu Giấy' },
      { pos: [-60, 0, -980], size: [48, 52, 44], name: 'Cung Tri Thức Hà Nội Giai Đoạn 2', id: 'BLDG-CTT-GD2', floors: 16, dma: 'DMA Cầu Giấy' },
      { pos: [160, 0, -980], size: [36, 115, 36], name: 'Tòa Tháp FPT Software Duy Tân (32T)', id: 'BLDG-FPT-DUYTAN', floors: 32, dma: 'DMA Cầu Giấy' },
      { pos: [240, 0, -1040], size: [38, 110, 38], name: 'Tòa Tháp Viễn Thông Viettel Cầu Giấy (30T)', id: 'BLDG-VIETTEL-CG', floors: 30, dma: 'DMA Cầu Giấy' },
      { pos: [100, 0, -1060], size: [36, 98, 36], name: 'Tổ Hợp CMC Creative Space Duy Tân (28T)', id: 'BLDG-CMC-SPACE', floors: 28, dma: 'DMA Cầu Giấy' },
      { pos: [-80, 0, -1080], size: [34, 92, 34], name: 'Chung Cư Cao Cấp Green Park Tower (29T)', id: 'BLDG-GREEN-PARK', floors: 29, dma: 'DMA Cầu Giấy' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '460 căn hộ & khối cơ quan',
        demandFlow: '42.0 m³/h',
        intakePressure: '3.18 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,600 m³',
        meterId: `AMR-${b.id}`,
        dma: b.dma,
        hasAntenna: true
      });
    });

    // Shophouse Green 1: Phố Duy Tân - Trần Thái Tông
    [
      { center: [60, -940], size: [110, 45], rows: 2, cols: 7, name: 'Phố Duy Tân - Dãy Shophouse CNTT' },
      { center: [-140, -1020], size: [110, 45], rows: 2, cols: 7, name: 'Phố Tôn Thất Thuyết Mở Rộng' },
      { center: [180, -1080], size: [100, 45], rows: 2, cols: 6, name: 'KDC Phố Trần Thái Tông Ngoại Vi' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [15, 22],
        zoneId: `GREEN1-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Cầu Giấy'
      });
    });

    // --- GREEN 2: CÁNH TÂY (PHÚ ĐÔ, ĐẠI LỘ THĂNG LONG, SA ĐÔI, F1 CIRCUIT) ---
    [
      { pos: [-1020, 0, 180], size: [65, 45, 55], name: 'Trung Tâm Thể Thao & Văn Hóa Nam Từ Liêm', id: 'BLDG-TTTDTT-NTL', floors: 12, dma: 'DMA Phú Đô' },
      { pos: [-1120, 0, 240], size: [42, 95, 40], name: 'Tổ Hợp Khách Sạn & Căn Hộ F1 Hanoi (28T)', id: 'BLDG-F1-HOTEL', floors: 28, dma: 'DMA Phú Đô' },
      { pos: [-1080, 0, 320], size: [38, 88, 36], name: 'Chung Cư Sa Đôi Garden View (26T)', id: 'BLDG-SADOI-GV', floors: 26, dma: 'DMA Phú Đô' },
      { pos: [-950, 0, 260], size: [36, 85, 34], name: 'Tòa Tháp Mễ Trì Grand Tower (25T)', id: 'BLDG-MT-GRAND', floors: 25, dma: 'DMA Phú Đô' },
      { pos: [-920, 0, 360], size: [34, 80, 34], name: 'Chung Cư Phú Đô Riverside (24T)', id: 'BLDG-PHUDO-RS', floors: 24, dma: 'DMA Phú Đô' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0369a1 : 0x0284c7,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '400 căn hộ & dịch vụ',
        demandFlow: '36.0 m³/h',
        intakePressure: '3.42 bar',
        connectionPipe: 'DN100 HDPE',
        cisternCapacity: '1,400 m³',
        meterId: `AMR-${b.id}`,
        dma: b.dma
      });
    });

    // Shophouse Green 2: Làng Phú Đô & Cương Kiên
    [
      { center: [-1020, 100], size: [110, 45], rows: 2, cols: 7, name: 'Làng Phú Đô Cổ - Dãy Nhà Phố Nghề' },
      { center: [-1120, 160], size: [100, 45], rows: 2, cols: 6, name: 'KDC Phố Lê Quang Đạo Mở Rộng' },
      { center: [-980, 340], size: [100, 45], rows: 2, cols: 6, name: 'Khu Shophouse Vành Đai Sa Đôi' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [14, 21],
        zoneId: `GREEN2-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Phú Đô'
      });
    });

    // --- GREEN 3: CÁNH ĐÔNG (LÁNG HẠ, HUỲNH THÚC KHÁNG KÉO DÀI, ĐẦM HỒNG, KHƯƠNG ĐÌNH) ---
    [
      { pos: [780, 0, -120], size: [38, 105, 36], name: 'Tổ Hợp Huỳnh Thúc Kháng Plaza (30T)', id: 'BLDG-HTK-PLAZA', floors: 30, dma: 'DMA Đống Đa' },
      { pos: [860, 0, -60], size: [36, 95, 34], name: 'Tòa Tháp Thái Hà Diamond (28T)', id: 'BLDG-THAIHA-D', floors: 28, dma: 'DMA Đống Đa' },
      { pos: [940, 0, 0], size: [38, 92, 36], name: 'Chung Cư Hoàng Cầu Skyline Nối Dài (27T)', id: 'BLDG-HOANGCAU-EXT', floors: 27, dma: 'DMA Đống Đa' },
      { pos: [820, 0, 120], size: [36, 88, 34], name: 'Tổ Hợp Căn Hộ Hồ Đầm Hồng (26T)', id: 'BLDG-DAMHONG-1', floors: 26, dma: 'DMA Khương Đình' },
      { pos: [900, 0, 160], size: [34, 85, 32], name: 'Chung Cư Khương Trung Lakeside (25T)', id: 'BLDG-KHUONGTRUNG-LS', floors: 25, dma: 'DMA Khương Đình' },
      { pos: [980, 0, 220], size: [36, 88, 36], name: 'Tổ Hợp Eco Lake Khương Đình (26T)', id: 'BLDG-ECOLAKE-KD', floors: 26, dma: 'DMA Khương Đình' },
      { pos: [1060, 0, 280], size: [38, 92, 38], name: 'Tòa Tháp Ven Sông Tô Lịch Plaza (28T)', id: 'BLDG-TOLICH-PLAZA', floors: 28, dma: 'DMA Khương Đình' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '440 căn hộ cao cấp',
        demandFlow: '38.0 m³/h',
        intakePressure: '3.22 bar',
        connectionPipe: 'DN100 Gang dẻo',
        cisternCapacity: '1,500 m³',
        meterId: `AMR-${b.id}`,
        dma: b.dma
      });
    });

    // Shophouse Green 3: Láng Hạ Đông & Đầm Hồng
    [
      { center: [820, -40], size: [110, 45], rows: 2, cols: 7, name: 'Phố Huỳnh Thúc Kháng - Dãy Phố Thương Mại' },
      { center: [920, 60], size: [110, 45], rows: 2, cols: 7, name: 'KDC Bờ Hồ Đầm Hồng' },
      { center: [1020, 160], size: [100, 45], rows: 2, cols: 6, name: 'KDC Phố Khương Trung Nối Dài' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [15, 22],
        zoneId: `GREEN3-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Khương Đình'
      });
    });

    // --- GREEN 4: ĐÁY NAM (NGUYỄN XIỂN VÀNH ĐAI 3 NAM, ECO GREEN, ĐẠI KIM, HỒ TRIỀU KHÚC) ---
    [
      { pos: [-180, 0, 1040], size: [40, 118, 38], name: 'Tổ Hợp Chung Cư Eco Green City Tháp CT1 (35T)', id: 'BLDG-ECOGREEN-1', floors: 35, dma: 'DMA Nguyễn Xiển' },
      { pos: [-80, 0, 1080], size: [40, 118, 38], name: 'Tổ Hợp Chung Cư Eco Green City Tháp CT2 (35T)', id: 'BLDG-ECOGREEN-2', floors: 35, dma: 'DMA Nguyễn Xiển' },
      { pos: [40, 0, 1120], size: [40, 118, 38], name: 'Tổ Hợp Chung Cư Eco Green City Tháp CT3 (35T)', id: 'BLDG-ECOGREEN-3', floors: 35, dma: 'DMA Nguyễn Xiển' },
      { pos: [160, 0, 1080], size: [38, 105, 36], name: 'Chung Cư Bea Sky Nguyễn Xiển (30T)', id: 'BLDG-BEASKY', floors: 30, dma: 'DMA Nguyễn Xiển' },
      { pos: [260, 0, 1140], size: [36, 95, 36], name: 'Tòa Tháp Tài Chính Kim Văn Kim Lũ Golden Silk (32T)', id: 'BLDG-GOLDEN-SILK', floors: 32, dma: 'DMA Đại Kim' },
      { pos: [380, 0, 1080], size: [38, 98, 36], name: 'Tổ Hợp Chung Cư VC2 Golden Heart Đại Kim (33T)', id: 'BLDG-GOLDEN-HEART', floors: 33, dma: 'DMA Đại Kim' },
      { pos: [480, 0, 1120], size: [36, 92, 34], name: 'Khu Đô Thị Mới Đại Kim Hacinco (29T)', id: 'BLDG-DAIKIM-HACINCO', floors: 29, dma: 'DMA Đại Kim' }
    ].forEach(b => {
      create3DBuilding({
        pos: b.pos,
        size: b.size,
        color: isDark ? 0x0284c7 : 0x0369a1,
        name: b.name,
        id: b.id,
        floors: b.floors,
        households: '580 căn hộ cao cấp',
        demandFlow: '48.0 m³/h',
        intakePressure: '3.15 bar',
        connectionPipe: 'DN125 Gang dẻo',
        cisternCapacity: '2,000 m³',
        meterId: `AMR-${b.id}`,
        dma: b.dma,
        hasAntenna: true
      });
    });

    // Shophouse Green 4: Trục Nguyễn Xiển - Đại Kim
    [
      { center: [-120, 980], size: [110, 45], rows: 2, cols: 7, name: 'Phố Nguyễn Xiển - Dãy Shophouse Dịch Vụ' },
      { center: [80, 1020], size: [110, 45], rows: 2, cols: 7, name: 'Khu Biệt Thự Liền Kề Hồ Triều Khúc' },
      { center: [320, 1040], size: [110, 45], rows: 2, cols: 7, name: 'KDC Phố Kim Giang Cửa Ngõ Nam' }
    ].forEach((sh, idx) => {
      createDenseShophouseBlock({
        center: sh.center,
        size: sh.size,
        rows: sh.rows,
        cols: sh.cols,
        heightRange: [15, 22],
        zoneId: `GREEN4-SH-${idx + 1}`,
        blockName: sh.name,
        dma: 'DMA Nguyễn Xiển'
      });
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

      // THỰC TẾ CẤP THOÁT NƯỚC ĐÔ THỊ: Tuyến ống đi thẳng theo vỉa hè / tim đường, chỉ bẻ góc tại ngã ba, ngã tư
      let curve;
      if (points.length === 2) {
        curve = new THREE.LineCurve3(points[0], points[1]);
      } else {
        const path = new THREE.CurvePath();
        for (let i = 0; i < points.length - 1; i++) {
          path.add(new THREE.LineCurve3(points[i], points[i + 1]));
        }
        curve = path;
      }
      const segmentCount = Math.max(16, (points.length - 1) * 16);
      const tubeGeo = new THREE.TubeGeometry(curve, segmentCount, radius, 12, false);
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

        
    // --- TUYẾN ỐNG TRUYỀN DẪN VÀ MẠCH VÒNG NGOẠI VI (OUTER RING PIPELINE EXTENSIONS) ---
    // Trục D800 Nước Mặt Sông Đà Cửa Ngõ Tây (Kéo dài từ -1240 về -700)
    create3DPipe(
      [new THREE.Vector3(-1240, 1.4, 40), new THREE.Vector3(-1100, 1.4, 40), new THREE.Vector3(-700, 1.4, 40)],
      1.6,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục D800 Nước Mặt Sông Đà Cửa Ngõ Tây',
      'PIPE-SD-WEST-EXT',
      true,
      1,
      { name: 'Trục D800 Nước Mặt Sông Đà Cửa Ngõ Tây', tier: 'Cấp 1 (D800)', flow: '1,450 m³/h', pressure: '4.85 bar', status: 'Áp lực cấp nguồn liên vùng' }
    );

    // Trục D800 Vành Đai 3 Phía Bắc (Kéo dài đến biên -1240)
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, -1100), new THREE.Vector3(-440, 1.4, -1240)],
      1.6,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục D800 Vành Đai 3 Bắc -> Cầu Giấy',
      'PIPE-VD3-NORTH-EXT',
      true,
      1,
      { name: 'Trục D800 Vành Đai 3 Bắc -> Cầu Giấy', tier: 'Cấp 1 (D800)', flow: '980 m³/h', pressure: '3.65 bar', status: 'Truyền dẫn liên quận' }
    );

    // Trục D800 Vành Đai 3 Phía Nam (Kéo dài đến biên +1240)
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, 1100), new THREE.Vector3(-440, 1.4, 1240)],
      1.6,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục D800 Vành Đai 3 Nam -> Thanh Xuân / Hoàng Mai',
      'PIPE-VD3-SOUTH-EXT',
      true,
      1,
      { name: 'Trục D800 Vành Đai 3 Nam -> Thanh Xuân / Hoàng Mai', tier: 'Cấp 1 (D800)', flow: '1,120 m³/h', pressure: '3.70 bar', status: 'Truyền dẫn liên quận' }
    );

    // Trục D600 Trần Duy Hưng Phía Đông (Kéo dài ra +1240)
    create3DPipe(
      [new THREE.Vector3(650, 1.4, -180), new THREE.Vector3(950, 1.4, -180), new THREE.Vector3(1240, 1.4, -180)],
      1.4,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục D600 Trần Duy Hưng Đông -> Nguyễn Chí Thanh / Đống Đa',
      'PIPE-TDH-EAST-EXT',
      true,
      1,
      { name: 'Trục D600 Trần Duy Hưng Đông -> Nguyễn Chí Thanh', tier: 'Cấp 1 (D600)', flow: '680 m³/h', pressure: '3.42 bar', status: 'Ổn định' }
    );

    // Trục D600 Lê Văn Lương Phía Đông (Kéo dài ra +1240)
    create3DPipe(
      [new THREE.Vector3(650, 1.4, 180), new THREE.Vector3(950, 1.4, 180), new THREE.Vector3(1240, 1.4, 180)],
      1.4,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục D600 Lê Văn Lương Đông -> Láng Hạ',
      'PIPE-LVL-EAST-EXT',
      true,
      1,
      { name: 'Trục D600 Lê Văn Lương Đông -> Láng Hạ', tier: 'Cấp 1 (D600)', flow: '720 m³/h', pressure: '3.38 bar', status: 'Ổn định' }
    );

    // Trục D600 Nguyễn Trãi (Trục Chính Đông Nam từ -440 đến 1240)
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, 720), new THREE.Vector3(0, 1.4, 720), new THREE.Vector3(450, 1.4, 720), new THREE.Vector3(850, 1.4, 720), new THREE.Vector3(1240, 1.4, 720)],
      1.4,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục D600 Nguyễn Trãi (Hà Đông -> Ngã Tư Sở)',
      'PIPE-NT-MAIN',
      true,
      1,
      { name: 'Trục D600 Nguyễn Trãi', tier: 'Cấp 1 (D600)', flow: '890 m³/h', pressure: '3.50 bar', status: 'Trục truyền dẫn chính' }
    );

    // Trục D500 Tố Hữu (Lê Văn Lương kéo dài từ -440 đến -1240)
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, 200), new THREE.Vector3(-750, 1.4, 200), new THREE.Vector3(-1050, 1.4, 200), new THREE.Vector3(-1240, 1.4, 200)],
      1.25,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Trục D500 Tố Hữu -> Nam Cường / Hà Đông',
      'PIPE-TH-MAIN',
      true,
      1,
      { name: 'Trục D500 Tố Hữu', tier: 'Cấp 1 (D500)', flow: '560 m³/h', pressure: '3.45 bar', status: 'Ổn định' }
    );

    // Mạch Vòng D350 Tây Bắc (Mễ Trì - Mỹ Đình - Sa Đôi)
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, -180), new THREE.Vector3(-800, 1.2, -180), new THREE.Vector3(-850, 1.2, 0), new THREE.Vector3(-800, 1.2, 90), new THREE.Vector3(-440, 1.2, 40)],
      1.1,
      0x38bdf8,
      'Mạch Vòng D350 Cụm Đô Thị Mễ Trì - JW Marriott',
      'PIPE-RING-WEST',
      true,
      2,
      { name: 'Mạch Vòng D350 Mễ Trì - Marriott', tier: 'Cấp 2 (D350)', flow: '320 m³/h', pressure: '3.42 bar', status: 'Vòng khép kín' }
    );

    // Mạch Vòng D350 Đông Bắc (Nam Trung Yên - Home City - Cầu Giấy)
    create3DPipe(
      [new THREE.Vector3(0, 1.2, -180), new THREE.Vector3(0, 1.2, -540), new THREE.Vector3(340, 1.2, -540), new THREE.Vector3(340, 1.2, -180)],
      1.1,
      0x38bdf8,
      'Mạch Vòng D350 KĐT Nam Trung Yên - Trung Kính',
      'PIPE-RING-NORTH',
      true,
      2,
      { name: 'Mạch Vòng D350 Nam Trung Yên', tier: 'Cấp 2 (D350)', flow: '290 m³/h', pressure: '3.32 bar', status: 'Vòng khép kín' }
    );

    // Mạch Vòng D350 Đông Nam (Vũ Trọng Phụng - Nguyễn Tuân - Nguyễn Trãi)
    create3DPipe(
      [new THREE.Vector3(240, 1.2, 180), new THREE.Vector3(240, 1.2, 720), new THREE.Vector3(650, 1.2, 720), new THREE.Vector3(650, 1.2, 180)],
      1.1,
      0x38bdf8,
      'Mạch Vòng D350 Cụm Đô Thị Thanh Xuân - Thượng Đình',
      'PIPE-RING-SOUTH-EAST',
      true,
      2,
      { name: 'Mạch Vòng D350 Thanh Xuân - Thượng Đình', tier: 'Cấp 2 (D350)', flow: '380 m³/h', pressure: '3.25 bar', status: 'Vòng khép kín' }
    );

    // Mạch Vòng D350 Tây Nam (Phùng Khoang - Triều Khúc - Lương Thế Vinh)
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, 200), new THREE.Vector3(-440, 1.2, 720), new THREE.Vector3(0, 1.2, 720), new THREE.Vector3(0, 1.2, 350)],
      1.1,
      0x38bdf8,
      'Mạch Vòng D350 KĐT Phùng Khoang - Triều Khúc',
      'PIPE-RING-SOUTH-WEST',
      true,
      2,
      { name: 'Mạch Vòng D350 Phùng Khoang', tier: 'Cấp 2 (D350)', flow: '280 m³/h', pressure: '3.30 bar', status: 'Vòng khép kín' }
    );

        // =========================================================================
    // 11B. MẠNG LƯỚI ĐẤU NỐI CẤP 3 & CỤM ĐỒNG HỒ NƯỚC THÔNG MINH AMR VÀO TÒA NHÀ
    // (TCVN 33:2006: Ống nhánh DN65 - DN100 HDPE trực giao nối từ trục đường vào chân móng)
    // =========================================================================
    const buildingInletFeederList = [
      // ĐẤU NỐI CẤP 3 VÙNG GREEN 1 (ĐỈNH BẮC - DUY TÂN & CẦU GIẤY)
      { start: [-120, 1.0, -980], end: [-120, 1.0, -880], bldg: 'Bộ Tài Nguyên & Môi Trường', id: 'INLET-BTNMT', meter: 'AMR-BTNMT' },
      { start: [-220, 1.0, -980], end: [-220, 1.0, -920], bldg: 'Thanh Tra Chính Phủ', id: 'INLET-TTCP', meter: 'AMR-TTCP' },
      { start: [-60, 1.0, -980], end: [-60, 1.0, -980], bldg: 'Cung Tri Thức Hà Nội GĐ2', id: 'INLET-CTT2', meter: 'AMR-CTT2' },
      { start: [160, 1.0, -980], end: [160, 1.0, -980], bldg: 'FPT Software Duy Tân', id: 'INLET-FPT-DT', meter: 'AMR-FPT-DT' },
      { start: [240, 1.0, -980], end: [240, 1.0, -1040], bldg: 'Viettel Cầu Giấy', id: 'INLET-VT-CG', meter: 'AMR-VT-CG' },
      { start: [100, 1.0, -980], end: [100, 1.0, -1060], bldg: 'CMC Creative Space', id: 'INLET-CMC-S', meter: 'AMR-CMC-S' },
      { start: [-80, 1.0, -980], end: [-80, 1.0, -1080], bldg: 'Green Park Tower', id: 'INLET-GPT', meter: 'AMR-GPT' },
      { start: [60, 1.0, -980], end: [60, 1.0, -940], bldg: 'Phố Duy Tân Shophouse CNTT', id: 'INLET-DT-SH', meter: 'AMR-DT-SH' },
      { start: [-140, 1.0, -980], end: [-140, 1.0, -1020], bldg: 'Tôn Thất Thuyết Mở Rộng', id: 'INLET-TTT-EXT', meter: 'AMR-TTT-EXT' },
      { start: [180, 1.0, -980], end: [180, 1.0, -1080], bldg: 'Trần Thái Tông Ngoại Vi', id: 'INLET-TTT-NV', meter: 'AMR-TTT-NV' },

      // ĐẤU NỐI CẤP 3 VÙNG GREEN 2 (CÁNH TÂY - PHÚ ĐÔ & F1)
      { start: [-1020, 1.0, 180], end: [-1020, 1.0, 180], bldg: 'TT Thể Thao Nam Từ Liêm', id: 'INLET-TDTT-NTL', meter: 'AMR-TDTT-NTL' },
      { start: [-1120, 1.0, 180], end: [-1120, 1.0, 240], bldg: 'Tổ Hợp F1 Hanoi Hotel', id: 'INLET-F1-H', meter: 'AMR-F1-H' },
      { start: [-1080, 1.0, 360], end: [-1080, 1.0, 320], bldg: 'Sa Đôi Garden View', id: 'INLET-SD-GV', meter: 'AMR-SD-GV' },
      { start: [-950, 1.0, 180], end: [-950, 1.0, 260], bldg: 'Mễ Trì Grand Tower', id: 'INLET-MT-GT', meter: 'AMR-MT-GT' },
      { start: [-920, 1.0, 360], end: [-920, 1.0, 360], bldg: 'Phú Đô Riverside', id: 'INLET-PD-RS', meter: 'AMR-PD-RS' },
      { start: [-1020, 1.0, 180], end: [-1020, 1.0, 100], bldg: 'Làng Phú Đô Cổ Shophouse', id: 'INLET-PD-SH', meter: 'AMR-PD-SH' },
      { start: [-1120, 1.0, 180], end: [-1120, 1.0, 160], bldg: 'Lê Quang Đạo Mở Rộng', id: 'INLET-LQD-EXT', meter: 'AMR-LQD-EXT' },
      { start: [-980, 1.0, 360], end: [-980, 1.0, 340], bldg: 'Shophouse Sa Đôi Vành Đai', id: 'INLET-SD-VD', meter: 'AMR-SD-VD' },

      // ĐẤU NỐI CẤP 3 VÙNG GREEN 3 (CÁNH ĐÔNG - LÁNG HẠ, HUỲNH THÚC KHÁNG, ĐẦM HỒNG)
      { start: [780, 1.0, -60], end: [780, 1.0, -120], bldg: 'Huỳnh Thúc Kháng Plaza', id: 'INLET-HTK-PZ', meter: 'AMR-HTK-PZ' },
      { start: [860, 1.0, -60], end: [860, 1.0, -60], bldg: 'Thái Hà Diamond', id: 'INLET-TH-DIA', meter: 'AMR-TH-DIA' },
      { start: [940, 1.0, -60], end: [940, 1.0, 0], bldg: 'Hoàng Cầu Skyline Nối Dài', id: 'INLET-HC-EXT', meter: 'AMR-HC-EXT' },
      { start: [820, 1.0, 220], end: [820, 1.0, 120], bldg: 'Căn Hộ Hồ Đầm Hồng', id: 'INLET-DH-1', meter: 'AMR-DH-1' },
      { start: [900, 1.0, 220], end: [900, 1.0, 160], bldg: 'Khương Trung Lakeside', id: 'INLET-KT-LS', meter: 'AMR-KT-LS' },
      { start: [980, 1.0, 220], end: [980, 1.0, 220], bldg: 'Eco Lake Khương Đình', id: 'INLET-EL-KD', meter: 'AMR-EL-KD' },
      { start: [1060, 1.0, 220], end: [1060, 1.0, 280], bldg: 'Tô Lịch Plaza', id: 'INLET-TL-PZ', meter: 'AMR-TL-PZ' },
      { start: [820, 1.0, -60], end: [820, 1.0, -40], bldg: 'Huỳnh Thúc Kháng Shophouse', id: 'INLET-HTK-SH', meter: 'AMR-HTK-SH' },
      { start: [920, 1.0, 220], end: [920, 1.0, 60], bldg: 'Bờ Hồ Đầm Hồng KDC', id: 'INLET-DH-SH', meter: 'AMR-DH-SH' },
      { start: [1020, 1.0, 220], end: [1020, 1.0, 160], bldg: 'Khương Trung Nối Dài KDC', id: 'INLET-KT-EXT', meter: 'AMR-KT-EXT' },

      // ĐẤU NỐI CẤP 3 VÙNG GREEN 4 (ĐÁY NAM - NGUYỄN XIỂN, ECO GREEN, ĐẠI KIM)
      { start: [-180, 1.0, 1080], end: [-180, 1.0, 1040], bldg: 'Eco Green City CT1', id: 'INLET-EG-1', meter: 'AMR-EG-1' },
      { start: [-80, 1.0, 1080], end: [-80, 1.0, 1080], bldg: 'Eco Green City CT2', id: 'INLET-EG-2', meter: 'AMR-EG-2' },
      { start: [40, 1.0, 1080], end: [40, 1.0, 1120], bldg: 'Eco Green City CT3', id: 'INLET-EG-3', meter: 'AMR-EG-3' },
      { start: [160, 1.0, 1080], end: [160, 1.0, 1080], bldg: 'Bea Sky Nguyễn Xiển', id: 'INLET-BEASKY', meter: 'AMR-BEASKY' },
      { start: [260, 1.0, 1080], end: [260, 1.0, 1140], bldg: 'Kim Văn Kim Lũ Golden Silk', id: 'INLET-KVKL', meter: 'AMR-KVKL' },
      { start: [380, 1.0, 1080], end: [380, 1.0, 1080], bldg: 'VC2 Golden Heart Đại Kim', id: 'INLET-GH-DK', meter: 'AMR-GH-DK' },
      { start: [480, 1.0, 1080], end: [480, 1.0, 1120], bldg: 'Đại Kim Hacinco', id: 'INLET-DK-HAC', meter: 'AMR-DK-HAC' },
      { start: [-120, 1.0, 1080], end: [-120, 1.0, 980], bldg: 'Shophouse Nguyễn Xiển', id: 'INLET-NX-SH', meter: 'AMR-NX-SH' },
      { start: [80, 1.0, 1080], end: [80, 1.0, 1020], bldg: 'Hồ Triều Khúc Biệt Thự Liền Kề', id: 'INLET-HTK-LK', meter: 'AMR-HTK-LK' },
      { start: [320, 1.0, 1080], end: [320, 1.0, 1040], bldg: 'Kim Giang Cửa Ngõ Nam KDC', id: 'INLET-KG-CN', meter: 'AMR-KG-CN' },

      // =========================================================================
      // KHU VỰC VÀNH ĐAI NGOẠI VI PHÍA TÂY & TÂY BẮC (MỸ ĐÌNH, MỄ TRÌ, THE MANOR)
      // =========================================================================
      { start: [-800, 1.0, 40], end: [-800, 1.0, 90], bldg: 'Khách Sạn JW Marriott Hanoi', id: 'INLET-MARRIOTT-EXT', meter: 'AMR-JWM-EXT' },
      { start: [-680, 1.0, 0], end: [-680, 1.0, 30], bldg: 'Vinhomes West Point W1', id: 'INLET-WP-1', meter: 'AMR-WP-1' },
      { start: [-620, 1.0, 40], end: [-620, 1.0, 70], bldg: 'Vinhomes West Point W2', id: 'INLET-WP-2', meter: 'AMR-WP-2' },
      { start: [-720, 1.0, 40], end: [-720, 1.0, 70], bldg: 'Vinhomes West Point W3', id: 'INLET-WP-3', meter: 'AMR-WP-3' },
      { start: [-860, 1.0, -180], end: [-860, 1.0, -220], bldg: 'The Manor Mỹ Đình (Tháp Paris)', id: 'INLET-MANOR-P', meter: 'AMR-MANOR-P' },
      { start: [-920, 1.0, -180], end: [-920, 1.0, -180], bldg: 'The Manor Mỹ Đình (Tháp Rome)', id: 'INLET-MANOR-R', meter: 'AMR-MANOR-R' },
      { start: [-820, 1.0, -180], end: [-820, 1.0, -170], bldg: 'Tổ Hợp Sudico Mễ Trì', id: 'INLET-SUDICO', meter: 'AMR-SUDICO' },
      { start: [-920, 1.0, -260], end: [-920, 1.0, -320], bldg: 'Tổ Hợp The Emerald Mỹ Đình', id: 'INLET-EMERALD', meter: 'AMR-EMERALD' },
      { start: [-980, 1.0, 0], end: [-980, 1.0, 40], bldg: 'Golden Palace Mễ Trì (Tháp A)', id: 'INLET-GP-A', meter: 'AMR-GP-A' },
      { start: [-1040, 1.0, 40], end: [-1040, 1.0, 80], bldg: 'Golden Palace Mễ Trì (Tháp B)', id: 'INLET-GP-B', meter: 'AMR-GP-B' },
      { start: [-980, 1.0, 80], end: [-980, 1.0, 120], bldg: 'Golden Palace Mễ Trì (Tháp C)', id: 'INLET-GP-C', meter: 'AMR-GP-C' },
      { start: [-1050, 1.0, -180], end: [-1050, 1.0, -220], bldg: 'Tháp Văn Phòng Mỹ Đình 1', id: 'INLET-MD1-A', meter: 'AMR-MD1-A' },
      { start: [-1120, 1.0, -180], end: [-1120, 1.0, -160], bldg: 'Căn Hộ Cương Kiên', id: 'INLET-CK-28', meter: 'AMR-CK-28' },
      { start: [-1050, 1.0, -340], end: [-1050, 1.0, -380], bldg: 'Chung Cư An Lạc Ngoại Vi', id: 'INLET-ANLAC', meter: 'AMR-ANLAC' },
      { start: [-750, 1.0, -420], end: [-750, 1.0, -480], bldg: 'Tổ Hợp Florence Mỹ Đình', id: 'INLET-FLORENCE', meter: 'AMR-FLORENCE' },
      { start: [-880, 1.0, -420], end: [-880, 1.0, -480], bldg: 'Chung Cư Iris Garden', id: 'INLET-IRIS', meter: 'AMR-IRIS' },
      { start: [-700, 1.0, -180], end: [-700, 1.0, -140], bldg: 'KDC Phố Đồng Me - Mễ Trì Hạ', id: 'INLET-DONGME', meter: 'AMR-DONGME' },
      { start: [-760, 1.0, -220], end: [-760, 1.0, -260], bldg: 'Khu Shophouse Mễ Trì Thượng', id: 'INLET-MTT-SH', meter: 'AMR-MTT-SH' },
      { start: [-840, 1.0, 0], end: [-840, 1.0, -80], bldg: 'Khu Liền Kề Sa Đôi', id: 'INLET-SADOI-SH', meter: 'AMR-SADOI-SH' },
      { start: [-940, 1.0, 0], end: [-940, 1.0, -60], bldg: 'KDC Phố Cương Kiên', id: 'INLET-CK-SH', meter: 'AMR-CK-SH' },
      { start: [-660, 1.0, 100], end: [-660, 1.0, 180], bldg: 'KDC Phố Đỗ Đức Dục', id: 'INLET-DDD-SH', meter: 'AMR-DDD-SH' },
      { start: [-840, 1.0, 180], end: [-840, 1.0, 220], bldg: 'Khu Biệt Thự Mễ Trì Viên', id: 'INLET-MTV-SH', meter: 'AMR-MTV-SH' },
      { start: [-1000, 1.0, -180], end: [-1000, 1.0, -280], bldg: 'KDC Phố Sa Đôi Ngoại Vi', id: 'INLET-SADOI-EXT', meter: 'AMR-SD-EXT' },
      { start: [-900, 1.0, -360], end: [-900, 1.0, -420], bldg: 'Khu Liền Kề Mỹ Đình Ngoại Vi', id: 'INLET-MD-EXT', meter: 'AMR-MD-EXT' },

      // =========================================================================
      // KHU VỰC VÀNH ĐAI NGOẠI VI PHÍA BẮC & ĐÔNG BẮC (NAM TRUNG YÊN, CẦU GIẤY)
      // =========================================================================
      { start: [-180, 1.0, -380], end: [-180, 1.0, -480], bldg: 'Chung Cư Nam Trung Yên B10A', id: 'INLET-NTY-B10A', meter: 'AMR-NTY-B10A' },
      { start: [-120, 1.0, -380], end: [-120, 1.0, -520], bldg: 'Chung Cư Nam Trung Yên B10B', id: 'INLET-NTY-B10B', meter: 'AMR-NTY-B10B' },
      { start: [-60, 1.0, -380], end: [-60, 1.0, -580], bldg: 'Chung Cư Nam Trung Yên B11A', id: 'INLET-NTY-B11A', meter: 'AMR-NTY-B11A' },
      { start: [40, 1.0, -380], end: [40, 1.0, -540], bldg: 'Chung Cư Nam Trung Yên B11B', id: 'INLET-NTY-B11B', meter: 'AMR-NTY-B11B' },
      { start: [120, 1.0, -420], end: [120, 1.0, -600], bldg: 'Tổ Hợp Căn Hộ A10 Nam Trung Yên', id: 'INLET-NTY-A10', meter: 'AMR-NTY-A10' },
      { start: [180, 1.0, -420], end: [180, 1.0, -520], bldg: 'Tổ Hợp Căn Hộ A14 Nam Trung Yên', id: 'INLET-NTY-A14', meter: 'AMR-NTY-A14' },
      { start: [-100, 1.0, -540], end: [-100, 1.0, -680], bldg: 'Tháp Tài Chính PVI Tower', id: 'INLET-PVI', meter: 'AMR-PVI' },
      { start: [60, 1.0, -540], end: [60, 1.0, -720], bldg: 'Golden Park Tower Cầu Giấy', id: 'INLET-GP-TOWER', meter: 'AMR-GP-TOWER' },
      { start: [320, 1.0, -380], end: [320, 1.0, -460], bldg: 'Tổ Hợp Home City Tháp V1', id: 'INLET-HC-1', meter: 'AMR-HC-1' },
      { start: [380, 1.0, -380], end: [380, 1.0, -520], bldg: 'Tổ Hợp Home City Tháp V2', id: 'INLET-HC-2', meter: 'AMR-HC-2' },
      { start: [440, 1.0, -380], end: [440, 1.0, -480], bldg: 'Central Field 219 Trung Kính', id: 'INLET-CF-219', meter: 'AMR-CF-219' },
      { start: [260, 1.0, -540], end: [260, 1.0, -650], bldg: 'Chelsea Park Yên Hòa (Tháp Bắc)', id: 'INLET-CP-N', meter: 'AMR-CP-N' },
      { start: [320, 1.0, -540], end: [320, 1.0, -650], bldg: 'Chelsea Park Yên Hòa (Tháp Nam)', id: 'INLET-CP-S', meter: 'AMR-CP-S' },
      { start: [200, 1.0, -780], end: [200, 1.0, -880], bldg: 'Discovery Central Dịch Vọng Hậu', id: 'INLET-DISCOVERY', meter: 'AMR-DISCOVERY' },
      { start: [300, 1.0, -780], end: [300, 1.0, -920], bldg: 'CMC Tower Duy Tân', id: 'INLET-CMC', meter: 'AMR-CMC' },
      { start: [420, 1.0, -780], end: [420, 1.0, -850], bldg: 'FPT Tower Cầu Giấy', id: 'INLET-FPT', meter: 'AMR-FPT' },
      { start: [520, 1.0, -780], end: [520, 1.0, -680], bldg: 'Tháp Viễn Thông Mobifone Duy Tân', id: 'INLET-MOBIFONE', meter: 'AMR-MOBIFONE' },
      { start: [620, 1.0, -780], end: [620, 1.0, -620], bldg: 'Dịch Vọng Hậu Plaza', id: 'INLET-DVH-PLAZA', meter: 'AMR-DVH-PLAZA' },
      { start: [720, 1.0, -780], end: [720, 1.0, -560], bldg: 'Park View Yên Hòa', id: 'INLET-PARKVIEW', meter: 'AMR-PARKVIEW' },
      { start: [820, 1.0, -540], end: [820, 1.0, -480], bldg: 'Thăng Long Number Two', id: 'INLET-TL-NO2', meter: 'AMR-TL-NO2' },
      { start: [920, 1.0, -380], end: [920, 1.0, -420], bldg: 'Cụm Tòa Nhà Đường Láng Ngoại Vi', id: 'INLET-LANG-EXT', meter: 'AMR-LANG-EXT' },
      { start: [220, 1.0, -380], end: [220, 1.0, -400], bldg: 'KDC Phố Hạ Yên - Mạc Thái Tổ', id: 'INLET-HAYEN-SH', meter: 'AMR-HAYEN-SH' },
      { start: [120, 1.0, -380], end: [120, 1.0, -420], bldg: 'Khu Shophouse Nam Trung Yên', id: 'INLET-NTY-SH', meter: 'AMR-NTY-SH' },
      { start: [-100, 1.0, -340], end: [-100, 1.0, -380], bldg: 'KDC Phố Nguyễn Chánh', id: 'INLET-NC-SH', meter: 'AMR-NC-SH' },
      { start: [340, 1.0, -340], end: [340, 1.0, -380], bldg: 'Khu Shophouse Trung Kính Bắc', id: 'INLET-TKB-SH', meter: 'AMR-TKB-SH' },
      { start: [220, 1.0, -480], end: [220, 1.0, -540], bldg: 'KDC Phố Yên Hòa Mở Rộng', id: 'INLET-YH-SH', meter: 'AMR-YH-SH' },
      { start: [360, 1.0, -540], end: [360, 1.0, -600], bldg: 'Khu Liền Kề Cầu Giấy', id: 'INLET-CG-SH', meter: 'AMR-CG-SH' },
      { start: [180, 1.0, -680], end: [180, 1.0, -750], bldg: 'KDC Phố Trần Thái Tông', id: 'INLET-TTT-SH', meter: 'AMR-TTT-SH' },
      { start: [340, 1.0, -740], end: [340, 1.0, -800], bldg: 'Khu Phân Lô Phố Duy Tân', id: 'INLET-DT-SH', meter: 'AMR-DT-SH' },
      { start: [650, 1.0, -480], end: [650, 1.0, -520], bldg: 'Khu Shophouse Cầu Giấy Mở Rộng', id: 'INLET-CG-EXT', meter: 'AMR-CG-EXT' },
      { start: [850, 1.0, -340], end: [850, 1.0, -400], bldg: 'KDC Phố Đường Láng Biên Đông', id: 'INLET-LANG-BD', meter: 'AMR-LANG-BD' },

      // =========================================================================
      // KHU VỰC VÀNH ĐAI PHÍA ĐÔNG & ĐÔNG NAM (THANH XUÂN, LÁNG HẠ, ROYAL CITY)
      // =========================================================================
      { start: [840, 1.0, 720], end: [840, 1.0, 480], bldg: 'Vinhomes Royal City Tháp R3', id: 'INLET-RC-R3', meter: 'AMR-RC-R3' },
      { start: [840, 1.0, 720], end: [840, 1.0, 560], bldg: 'Vinhomes Royal City Tháp R4', id: 'INLET-RC-R4', meter: 'AMR-RC-R4' },
      { start: [920, 1.0, 720], end: [920, 1.0, 520], bldg: 'Vinhomes Royal City Tháp R5', id: 'INLET-RC-R5', meter: 'AMR-RC-R5' },
      { start: [980, 1.0, 720], end: [980, 1.0, 560], bldg: 'Vinhomes Royal City Tháp R6', id: 'INLET-RC-R6', meter: 'AMR-RC-R6' },
      { start: [680, 1.0, 720], end: [680, 1.0, 760], bldg: 'King Palace 108 Nguyễn Trãi', id: 'INLET-KING-P', meter: 'AMR-KING-P' },
      { start: [480, 1.0, 240], end: [480, 1.0, 320], bldg: 'Rivera Park 69 Vũ Trọng Phụng (Tháp A)', id: 'INLET-RIV-A', meter: 'AMR-RIV-A' },
      { start: [540, 1.0, 240], end: [540, 1.0, 320], bldg: 'Rivera Park 69 Vũ Trọng Phụng (Tháp B)', id: 'INLET-RIV-B', meter: 'AMR-RIV-B' },
      { start: [460, 1.0, 180], end: [460, 1.0, 120], bldg: 'Diamond Flower Tower', id: 'INLET-DFT-EXT', meter: 'AMR-DFT-EXT' },
      { start: [540, 1.0, 180], end: [540, 1.0, 140], bldg: 'BRG Grand Plaza Láng Hạ', id: 'INLET-BRG-LH', meter: 'AMR-BRG-LH' },
      { start: [620, 1.0, 180], end: [620, 1.0, 180], bldg: 'Sky City Towers 88 Láng Hạ', id: 'INLET-SKY-CITY', meter: 'AMR-SKY-CITY' },
      { start: [460, 1.0, 180], end: [460, 1.0, 220], bldg: 'Bohemia Residence', id: 'INLET-BOHEMIA', meter: 'AMR-BOHEMIA' },
      { start: [520, 1.0, 180], end: [520, 1.0, 220], bldg: 'Golden West Lê Văn Thiêm', id: 'INLET-GWEST', meter: 'AMR-GWEST' },
      { start: [460, 1.0, 350], end: [460, 1.0, 420], bldg: 'Hapulico Complex GĐ2 (Tháp 24T3)', id: 'INLET-HAPU-3', meter: 'AMR-HAPU-3' },
      { start: [520, 1.0, 350], end: [520, 1.0, 420], bldg: 'Hapulico Complex GĐ2 (Tháp 24T4)', id: 'INLET-HAPU-4', meter: 'AMR-HAPU-4' },
      { start: [580, 1.0, 350], end: [580, 1.0, 380], bldg: 'Thống Nhất Complex 82 Nguyễn Tuân', id: 'INLET-THONGNHAT', meter: 'AMR-THONGNHAT' },
      { start: [1050, 1.0, 720], end: [1050, 1.0, 480], bldg: 'Tổ Hợp Căn Hộ Sông Tô Lịch (32T)', id: 'INLET-TOLICH', meter: 'AMR-TOLICH' },
      { start: [1120, 1.0, 720], end: [1120, 1.0, 560], bldg: 'Khương Đình Riverside (30T)', id: 'INLET-KDR', meter: 'AMR-KDR' },
      { start: [1020, 1.0, 720], end: [1020, 1.0, 680], bldg: 'Kim Giang Complex (28T)', id: 'INLET-KIMG', meter: 'AMR-KIMG' },
      { start: [920, 1.0, 720], end: [920, 1.0, 820], bldg: 'Đô Thị Mới Đại Kim Cửa Ngõ', id: 'INLET-DAIKIM', meter: 'AMR-DAIKIM' },
      { start: [800, 1.0, 720], end: [800, 1.0, 920], bldg: 'Tòa Nhà Hạ Đình Plaza', id: 'INLET-HADINH', meter: 'AMR-HADINH' },
      { start: [640, 1.0, 140], end: [640, 1.0, 80], bldg: 'KDC Phố Láng Hạ Mở Rộng', id: 'INLET-LH-SH', meter: 'AMR-LH-SH' },
      { start: [740, 1.0, 180], end: [740, 1.0, 120], bldg: 'Khu Shophouse Giảng Võ - Láng Hạ', id: 'INLET-GV-SH', meter: 'AMR-GV-SH' },
      { start: [840, 1.0, 180], end: [840, 1.0, 180], bldg: 'KDC Phố Thái Hà Cửa Ngõ', id: 'INLET-TH-SH', meter: 'AMR-TH-SH' },
      { start: [640, 1.0, 240], end: [640, 1.0, 320], bldg: 'Khu Shophouse Phố Nguyễn Tuân', id: 'INLET-NT-SH', meter: 'AMR-NT-SH' },
      { start: [740, 1.0, 280], end: [740, 1.0, 360], bldg: 'KDC Phố Vũ Trọng Phụng Nối Dài', id: 'INLET-VTP-SH', meter: 'AMR-VTP-SH' },
      { start: [840, 1.0, 350], end: [840, 1.0, 420], bldg: 'Khu Dân Cư Phố Khương Đình 1', id: 'INLET-KD1-SH', meter: 'AMR-KD1-SH' },
      { start: [660, 1.0, 520], end: [660, 1.0, 600], bldg: 'KDC Phố Thượng Đình Cửa Ngõ', id: 'INLET-TD-SH', meter: 'AMR-TD-SH' },
      { start: [780, 1.0, 720], end: [780, 1.0, 720], bldg: 'Khu Nhà Phố Liền Kề Nguyễn Trãi', id: 'INLET-NTR-SH', meter: 'AMR-NTR-SH' },
      { start: [1050, 1.0, 480], end: [1050, 1.0, 420], bldg: 'Khu Phố Khương Đình Mở Rộng', id: 'INLET-KD-EXT', meter: 'AMR-KD-EXT' },
      { start: [950, 1.0, 560], end: [950, 1.0, 620], bldg: 'KDC Phố Kim Giang Cửa Ngõ', id: 'INLET-KG-EXT', meter: 'AMR-KG-EXT' },

      // =========================================================================
      // KHU VỰC VÀNH ĐAI PHÍA NAM & TÂY NAM (TỐ HỮU, TRIỀU KHÚC, PHÙNG KHOANG, MỖ LAO)
      // =========================================================================
      { start: [-380, 1.0, 350], end: [-380, 1.0, 540], bldg: 'Ecolife Capitol (34T - Tố Hữu)', id: 'INLET-ECOLIFE', meter: 'AMR-ECOLIFE' },
      { start: [-450, 1.0, 350], end: [-450, 1.0, 600], bldg: 'Roman Plaza Tố Hữu (Tháp A)', id: 'INLET-ROMAN-A', meter: 'AMR-ROMAN-A' },
      { start: [-530, 1.0, 350], end: [-530, 1.0, 660], bldg: 'Roman Plaza Tố Hữu (Tháp B)', id: 'INLET-ROMAN-B', meter: 'AMR-ROMAN-B' },
      { start: [-600, 1.0, 350], end: [-600, 1.0, 780], bldg: 'Tổ Hợp The Pride Hải Phát (35T)', id: 'INLET-THE-PRIDE', meter: 'AMR-THE-PRIDE' },
      { start: [-660, 1.0, 350], end: [-660, 1.0, 840], bldg: 'Tổ Hợp C14 Bắc Hà Bộ Công An', id: 'INLET-C14-BH', meter: 'AMR-C14-BH' },
      { start: [80, 1.0, 560], end: [80, 1.0, 680], bldg: 'PCC1 Triều Khúc (27T)', id: 'INLET-PCC1', meter: 'AMR-PCC1' },
      { start: [160, 1.0, 560], end: [160, 1.0, 720], bldg: 'Pandora 53 Triều Khúc (27T)', id: 'INLET-PANDORA', meter: 'AMR-PANDORA' },
      { start: [240, 1.0, 560], end: [240, 1.0, 760], bldg: 'BlueGem Tower Triều Khúc (29T)', id: 'INLET-BLUEGEM', meter: 'AMR-BLUEGEM' },
      { start: [120, 1.0, 720], end: [120, 1.0, 840], bldg: 'Khu Giảng Đường Đại Học Hà Nội (HANU)', id: 'INLET-HANU', meter: 'AMR-HANU' },
      { start: [220, 1.0, 720], end: [220, 1.0, 880], bldg: 'Đại Học Kiến Trúc Hà Nội (HAU)', id: 'INLET-HAU', meter: 'AMR-HAU' },
      { start: [320, 1.0, 720], end: [320, 1.0, 940], bldg: 'Học Viện Công Nghệ PTIT', id: 'INLET-PTIT', meter: 'AMR-PTIT' },
      { start: [-780, 1.0, 720], end: [-780, 1.0, 620], bldg: 'Tháp Doanh Nhân Mỗ Lao (36T)', id: 'INLET-MOLAO-DN', meter: 'AMR-MOLAO-DN' },
      { start: [-860, 1.0, 720], end: [-860, 1.0, 720], bldg: 'KĐT Mỗ Lao (Tháp A)', id: 'INLET-MOLAO-A', meter: 'AMR-MOLAO-A' },
      { start: [-920, 1.0, 720], end: [-920, 1.0, 800], bldg: 'KĐT Mỗ Lao (Tháp B)', id: 'INLET-MOLAO-B', meter: 'AMR-MOLAO-B' },
      { start: [-720, 1.0, 720], end: [-720, 1.0, 920], bldg: 'Hồ Gươm Plaza Hà Đông', id: 'INLET-HOGUOM', meter: 'AMR-HOGUOM' },
      { start: [-520, 1.0, 720], end: [-520, 1.0, 980], bldg: 'Grand SunLake Văn Quán', id: 'INLET-SUNLAKE', meter: 'AMR-SUNLAKE' },
      { start: [-220, 1.0, 350], end: [-220, 1.0, 520], bldg: 'KDC Phố Phùng Khoang Mới', id: 'INLET-PK-SH', meter: 'AMR-PK-SH' },
      { start: [-320, 1.0, 350], end: [-320, 1.0, 620], bldg: 'Khu Liền Kề Hồ Mễ Trì', id: 'INLET-HMT-SH', meter: 'AMR-HMT-SH' },
      { start: [-160, 1.0, 560], end: [-160, 1.0, 680], bldg: 'KDC Phố Lương Thế Vinh Nam', id: 'INLET-LTV-SH', meter: 'AMR-LTV-SH' },
      { start: [-240, 1.0, 560], end: [-240, 1.0, 780], bldg: 'Khu Shophouse Cửa Ngõ Hà Đông', id: 'INLET-HD-SH', meter: 'AMR-HD-SH' },
      { start: [40, 1.0, 560], end: [40, 1.0, 580], bldg: 'KDC Làng Triều Khúc Cổ', id: 'INLET-TKC-SH', meter: 'AMR-TKC-SH' },
      { start: [120, 1.0, 560], end: [120, 1.0, 620], bldg: 'Khu Phân Lô Phố Triều Khúc', id: 'INLET-TK-SH', meter: 'AMR-TK-SH' },
      { start: [20, 1.0, 720], end: [20, 1.0, 760], bldg: 'KDC Phố Nguyễn Quý Đức', id: 'INLET-NQD-SH', meter: 'AMR-NQD-SH' },
      { start: [-80, 1.0, 720], end: [-80, 1.0, 860], bldg: 'Khu Dân Cư Thanh Xuân Nam', id: 'INLET-TXN-SH', meter: 'AMR-TXN-SH' },
      { start: [-850, 1.0, 720], end: [-850, 1.0, 640], bldg: 'Làng Việt Kiều Châu Âu', id: 'INLET-VKCA-SH', meter: 'AMR-VKCA-SH' },
      { start: [-750, 1.0, 720], end: [-750, 1.0, 840], bldg: 'KDC Phố Mỗ Lao Cửa Ngõ', id: 'INLET-ML-SH', meter: 'AMR-ML-SH' },

      // =========================================================================
      // CÁC CỤM ĐÔ THỊ THỰC TẾ HÀ NỘI (TRUNG YÊN, MỄ TRÌ THƯỢNG, CỰ LỘC, QUAN NHÂN)
      // =========================================================================
      { start: [0, 1.0, -280], end: [140, 1.0, -280], bldg: 'Viện Dầu Khí Việt Nam (VPI Tower)', id: 'INLET-VPI', meter: 'AMR-VPI' },
      { start: [180, 1.0, -220], end: [220, 1.0, -260], bldg: 'Chung Cư Trung Yên 1', id: 'INLET-TY1', meter: 'AMR-TY1' },
      { start: [280, 1.0, -260], end: [280, 1.0, -320], bldg: 'Trung Yên Plaza', id: 'INLET-TYP', meter: 'AMR-TYP' },
      { start: [180, 1.0, -280], end: [180, 1.0, -350], bldg: 'Chung Cư Trung Yên 9', id: 'INLET-TY9', meter: 'AMR-TY9' },
      { start: [240, 1.0, -340], end: [240, 1.0, -380], bldg: 'Chung Cư Trung Yên 11', id: 'INLET-TY11', meter: 'AMR-TY11' },
      { start: [320, 1.0, -220], end: [320, 1.0, -280], bldg: 'Cảnh Sát PCCC Hà Nội', id: 'INLET-PCCC', meter: 'AMR-PCCC' },
      { start: [380, 1.0, -220], end: [380, 1.0, -340], bldg: 'Star City Lê Văn Lương', id: 'INLET-STARCITY', meter: 'AMR-STARCITY' },
      { start: [-440, 1.0, -240], end: [-620, 1.0, -240], bldg: 'Cung Trí Thức Hà Nội', id: 'INLET-CTT', meter: 'AMR-CTT' },
      { start: [-440, 1.0, -320], end: [-700, 1.0, -320], bldg: 'Viện Huyết Học & Truyền Máu TW', id: 'INLET-VHH', meter: 'AMR-VHH' },
      { start: [-440, 1.0, -420], end: [-580, 1.0, -420], bldg: 'Golden Field Mỹ Đình', id: 'INLET-GFIELD', meter: 'AMR-GFIELD' },
      { start: [-440, 1.0, -460], end: [-650, 1.0, -480], bldg: 'Chung Cư CT1 Mễ Trì Thượng', id: 'INLET-CT1-MTT', meter: 'AMR-CT1-MTT' },
      { start: [-440, 1.0, -460], end: [-720, 1.0, -440], bldg: 'Chung Cư CT2 Mễ Trì Thượng', id: 'INLET-CT2-MTT', meter: 'AMR-CT2-MTT' },
      { start: [340, 1.0, 120], end: [380, 1.0, 120], bldg: 'The Legacy Lê Văn Thiêm', id: 'INLET-LEGACY', meter: 'AMR-LEGACY' },
      { start: [340, 1.0, 80], end: [440, 1.0, 80], bldg: 'Diamond Plaza Quan Nhân', id: 'INLET-DP-QN', meter: 'AMR-DP-QN' },
      { start: [340, 1.0, 60], end: [520, 1.0, 60], bldg: 'Chung Cư 282 Nguyễn Huy Tưởng', id: 'INLET-282-NHT', meter: 'AMR-282-NHT' },
      { start: [340, 1.0, 20], end: [600, 1.0, 20], bldg: 'Stellar Garden 35 Lê Văn Thiêm', id: 'INLET-STELLAR', meter: 'AMR-STELLAR' },
      { start: [200, 1.0, -180], end: [200, 1.0, -200], bldg: 'Phố Trần Kim Xuyến Liền Kề', id: 'INLET-TKX-SH', meter: 'AMR-TKX-SH' },
      { start: [280, 1.0, -180], end: [280, 1.0, -210], bldg: 'Phố Hạ Yên Quyết Shophouse', id: 'INLET-HYQ-SH', meter: 'AMR-HYQ-SH' },
      { start: [460, 1.0, 0], end: [460, 1.0, 40], bldg: 'Làng Cự Lộc Dãy Phố Cổ', id: 'INLET-CULOC-SH', meter: 'AMR-CL-SH' },
      { start: [560, 1.0, 0], end: [560, 1.0, 20], bldg: 'Phố Giáp Nhất Bờ Sông Tô Lịch', id: 'INLET-GIAPNHAT-SH', meter: 'AMR-GN-SH' },
      { start: [360, 1.0, 180], end: [360, 1.0, 220], bldg: 'KDC Phố Nguyễn Huy Tưởng', id: 'INLET-NHT-SH', meter: 'AMR-NHT-SH' },
      { start: [440, 1.0, 240], end: [440, 1.0, 260], bldg: 'KDC Phố Ngụy Như Kon Tum Nối Dài', id: 'INLET-NNKT-SH', meter: 'AMR-NNKT-SH' }
    ];

    buildingInletFeederList.forEach(inlet => {
      // 1. Tuyến ống nhánh Cấp 3 (DN65 - DN100 HDPE)
      create3DPipe(
        [new THREE.Vector3(inlet.start[0], inlet.start[1], inlet.start[2]), new THREE.Vector3(inlet.end[0], inlet.end[1], inlet.end[2])],
        0.55,
        0x38bdf8,
        `Ống Nhánh Cấp 3 Đấu Nối -> ${inlet.bldg}`,
        inlet.id,
        true,
        3,
        { name: `Ống Nhánh Cấp 3 Đấu Nối ${inlet.bldg}`, tier: 'Cấp 3 (DN80 HDPE)', flow: '38.5 m³/h', status: 'Cấp nước ổn định' }
      );

      // 2. Cụm Đồng Hồ Nước Thông Minh AMR tại chân công trình
      const meterGroup = new THREE.Group();
      meterGroup.position.set(inlet.end[0], 0.2, inlet.end[2]);

      const mPadGeo = new THREE.BoxGeometry(2.2, 0.5, 2.2);
      const mPadMat = new THREE.MeshStandardMaterial({ color: isDark ? 0x1e293b : 0x94a3b8, roughness: 0.8 });
      const mPad = new THREE.Mesh(mPadGeo, mPadMat);
      mPad.position.y = 0.25;
      meterGroup.add(mPad);

      // Hộp đồng hồ điện tử AMR phát tín hiệu LED
      const mBoxGeo = new THREE.BoxGeometry(1.2, 0.9, 1.0);
      const mBoxMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x0284c7,
        emissiveIntensity: isDark ? 0.45 : 0.2,
        metalness: 0.6
      });
      const mBox = new THREE.Mesh(mBoxGeo, mBoxMat);
      mBox.position.y = 0.8;
      meterGroup.add(mBox);

      // Đèn LED báo nguồn nước trực tuyến
      const ledGeo = new THREE.SphereGeometry(0.25, 8, 8);
      const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(0, 1.4, 0);
      meterGroup.add(led);

      const meterData = {
        name: `Đồng Hồ Tổng AMR ${inlet.bldg}`,
        id: inlet.meter,
        type: 'Đồng Hồ Đo Nước Điện Tử AMR (DN80)',
        status: 'Trực tuyến 24/7 (Đo xa tự động NB-IoT)',
        reading: 'Lưu lượng tức thời: 38.5 m³/h · Áp lực: 3.25 bar',
        elevation: '+16.5m ASL',
        targetBuilding: inlet.bldg
      };

      meterGroup.userData = { name: meterData.name, id: inlet.meter, type: 'Meter', data: meterData };
      mBox.userData = meterGroup.userData;
      clickableObjectsRef.current.push(mBox);
      pipeGroup.add(meterGroup);
    });

        // =========================================================================
    // 11C. MẠNG LƯỚI ĐƯỜNG ỐNG PHÂN PHỐI CẤP 2 & CẤP 3 DÀY ĐẶC (TCVN 33:2006)
    // PHỦ KÍN 5 VÙNG TRẮNG VÀ 4 VÙNG GREEN THEO ĐÚNG BẢN ĐỒ KHOANH VÙNG CỦA USER
    // =========================================================================
    // --- VÙNG TRẮNG 1 (TÂY BẮC): KEANGNAM, THE MANOR, SUDICO, WEST POINT ---
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, -220), new THREE.Vector3(-760, 1.2, -220), new THREE.Vector3(-1050, 1.2, -220)],
      1.15,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối D250 Phố Mễ Trì (Zone Trắng 1)',
      'PIPE-W1-METRI-D250',
      true,
      2,
      { name: 'Tuyến Phân Phối D250 Phố Mễ Trì', tier: 'Cấp 2 (D250)', flow: '420 m³/h', pressure: '3.40 bar', status: 'Cấp nước The Manor & Keangnam' }
    );
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, -320), new THREE.Vector3(-650, 1.2, -320), new THREE.Vector3(-920, 1.2, -320)],
      1.1,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối D250 Phố Đồng Me (Zone Trắng 1)',
      'PIPE-W1-DONGME-D250',
      true,
      2,
      { name: 'Tuyến Phân Phối D250 Phố Đồng Me', tier: 'Cấp 2 (D250)', flow: '380 m³/h', pressure: '3.42 bar', status: 'Cấp nước Sudico & The Emerald' }
    );
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, 40), new THREE.Vector3(-750, 1.2, 40), new THREE.Vector3(-1050, 1.2, 40)],
      1.15,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối D250 Phố Đỗ Đức Dục (Zone Trắng 1)',
      'PIPE-W1-DDD-D250',
      true,
      2,
      { name: 'Tuyến Phân Phối D250 Phố Đỗ Đức Dục', tier: 'Cấp 2 (D250)', flow: '390 m³/h', pressure: '3.45 bar', status: 'Cấp nước Vinhomes West Point' }
    );
    create3DPipe(
      [new THREE.Vector3(-850, 1.2, -420), new THREE.Vector3(-850, 1.2, -180), new THREE.Vector3(-850, 1.2, 100), new THREE.Vector3(-850, 1.2, 250)],
      1.15,
      0x38bdf8,
      'Mạch Vòng D300 Trục Sa Đôi - Lê Quang Đạo (Zone Trắng 1)',
      'PIPE-W1-SADOI-D300',
      true,
      2,
      { name: 'Mạch Vòng D300 Trục Sa Đôi', tier: 'Cấp 2 (D300)', flow: '460 m³/h', pressure: '3.42 bar', status: 'Mạch vòng khép kín' }
    );

    // --- VÙNG TRẮNG 2 (BẮC & ĐÔNG BẮC): NAM TRUNG YÊN, PVI, HOME CITY, CHARMVIT ---
    create3DPipe(
      [new THREE.Vector3(-200, 1.2, -260), new THREE.Vector3(0, 1.2, -260), new THREE.Vector3(340, 1.2, -260), new THREE.Vector3(650, 1.2, -260)],
      1.15,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối D300 Phố Mạc Thái Tổ (Zone Trắng 2)',
      'PIPE-W2-MTT-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối D300 Phố Mạc Thái Tổ', tier: 'Cấp 2 (D300)', flow: '520 m³/h', pressure: '3.35 bar', status: 'Cấp nước Nam Trung Yên' }
    );
    create3DPipe(
      [new THREE.Vector3(-200, 1.2, -340), new THREE.Vector3(0, 1.2, -340), new THREE.Vector3(340, 1.2, -340), new THREE.Vector3(650, 1.2, -340)],
      1.15,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối D300 Phố Mạc Thái Tông (Zone Trắng 2)',
      'PIPE-W2-MTTONG-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối D300 Phố Mạc Thái Tông', tier: 'Cấp 2 (D300)', flow: '480 m³/h', pressure: '3.32 bar', status: 'Cấp nước B10 & B11' }
    );
    create3DPipe(
      [new THREE.Vector3(340, 1.2, -180), new THREE.Vector3(340, 1.2, -380), new THREE.Vector3(340, 1.2, -650)],
      1.2,
      0x38bdf8,
      'Tuyến Phân Phối D300 Phố Trung Kính Bắc (Zone Trắng 2)',
      'PIPE-W2-TK-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối D300 Phố Trung Kính Bắc', tier: 'Cấp 2 (D300)', flow: '560 m³/h', pressure: '3.30 bar', status: 'Cấp nước Home City & Central Field' }
    );
    create3DPipe(
      [new THREE.Vector3(-120, 1.2, -260), new THREE.Vector3(-120, 1.2, -540), new THREE.Vector3(-120, 1.2, -720)],
      1.1,
      0x38bdf8,
      'Tuyến Phân Phối D250 Trục Nội Khu Nam Trung Yên (Zone Trắng 2)',
      'PIPE-W2-NTY-INT-D250',
      true,
      2,
      { name: 'Tuyến Phân Phối D250 Nam Trung Yên', tier: 'Cấp 2 (D250)', flow: '390 m³/h', pressure: '3.28 bar', status: 'Cấp nước A10, A14 & PVI' }
    );

    // --- VÙNG TRẮNG 3 & 4 (NAM & TÂY NAM): ECOLIFE, ROMAN PLAZA, LƯƠNG THẾ VINH, TRIỀU KHÚC ---
    create3DPipe(
      [new THREE.Vector3(-440, 1.2, 540), new THREE.Vector3(-160, 1.2, 540), new THREE.Vector3(0, 1.2, 540), new THREE.Vector3(240, 1.2, 540)],
      1.15,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối D300 Phố Tố Hữu Phụ & Phùng Khoang (Zone Trắng 3)',
      'PIPE-W3-TH-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối D300 Tố Hữu - Phùng Khoang', tier: 'Cấp 2 (D300)', flow: '490 m³/h', pressure: '3.32 bar', status: 'Cấp nước Ecolife & Roman Plaza' }
    );
    create3DPipe(
      [new THREE.Vector3(-160, 1.2, 350), new THREE.Vector3(-160, 1.2, 540), new THREE.Vector3(-160, 1.2, 720), new THREE.Vector3(-160, 1.2, 880)],
      1.15,
      0x38bdf8,
      'Tuyến Phân Phối D300 Phố Lương Thế Vinh (Zone Trắng 4)',
      'PIPE-W4-LTV-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối D300 Phố Lương Thế Vinh', tier: 'Cấp 2 (D300)', flow: '440 m³/h', pressure: '3.25 bar', status: 'Cấp nước KDC Lương Thế Vinh' }
    );
    create3DPipe(
      [new THREE.Vector3(120, 1.2, 560), new THREE.Vector3(120, 1.2, 720), new THREE.Vector3(120, 1.2, 920)],
      1.15,
      0x38bdf8,
      'Tuyến Phân Phối D300 Phố Triều Khúc (Zone Trắng 4)',
      'PIPE-W4-TK-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối D300 Phố Triều Khúc', tier: 'Cấp 2 (D300)', flow: '420 m³/h', pressure: '3.22 bar', status: 'Cấp nước PCC1 & Pandora' }
    );

    // --- VÙNG TRẮNG 5 (ĐÔNG NAM): ROYAL CITY, KING PALACE, KHƯƠNG ĐÌNH ---
    create3DPipe(
      [new THREE.Vector3(720, 1.2, 480), new THREE.Vector3(980, 1.2, 480), new THREE.Vector3(980, 1.2, 620), new THREE.Vector3(720, 1.2, 620)],
      1.2,
      0x38bdf8,
      'Mạch Vòng Cấp 2 D300 Khép Kín Đại Đô Thị Royal City (Zone Trắng 5)',
      'PIPE-W5-RC-RING-D300',
      true,
      2,
      { name: 'Mạch Vòng D300 Royal City', tier: 'Cấp 2 (D300)', flow: '680 m³/h', pressure: '3.20 bar', status: 'Vòng khép kín nội bộ' }
    );
    create3DPipe(
      [new THREE.Vector3(620, 1.2, 350), new THREE.Vector3(620, 1.2, 560), new THREE.Vector3(620, 1.2, 720), new THREE.Vector3(620, 1.2, 880)],
      1.15,
      isDark ? 0x0ea5e9 : 0x0284c7,
      'Tuyến Phân Phối D300 Phố Khương Đình (Zone Trắng 5)',
      'PIPE-W5-KD-D300',
      true,
      2,
      { name: 'Tuyến Phân Phối D300 Phố Khương Đình', tier: 'Cấp 2 (D300)', flow: '450 m³/h', pressure: '3.18 bar', status: 'Cấp nước Khương Đình' }
    );

    // --- CÁC TUYẾN ỐNG CẤP NƯỚC ĐỒNG BỘ 4 VÙNG GREEN ---
    // Tuyến Green 1: Đỉnh Bắc Cầu Giấy (Duy Tân & Bộ TN&MT)
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, -980), new THREE.Vector3(-120, 1.4, -980), new THREE.Vector3(120, 1.4, -980), new THREE.Vector3(300, 1.4, -980)],
      1.3,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Cấp 1 D400 Cầu Giấy Bắc - Tôn Thất Thuyết (Vùng Green 1)',
      'PIPE-G1-TTT-D400',
      true,
      1,
      { name: 'Trục Cấp 1 D400 Tôn Thất Thuyết', tier: 'Cấp 1 (D400)', flow: '650 m³/h', pressure: '3.35 bar', status: 'Cấp nước Tech Hub Duy Tân' }
    );

    // Tuyến Green 2: Biên Tây Phú Đô & F1
    create3DPipe(
      [new THREE.Vector3(-850, 1.2, 180), new THREE.Vector3(-1180, 1.2, 180), new THREE.Vector3(-1180, 1.2, 360), new THREE.Vector3(-850, 1.2, 360)],
      1.15,
      0x38bdf8,
      'Mạch Vòng D300 Làng Phú Đô & Sa Đôi (Vùng Green 2)',
      'PIPE-G2-PHUDO-D300',
      true,
      2,
      { name: 'Mạch Vòng D300 Phú Đô', tier: 'Cấp 2 (D300)', flow: '410 m³/h', pressure: '3.42 bar', status: 'Cấp nước KĐT Phú Đô' }
    );

    // Tuyến Green 3: Biên Đông Láng Hạ - Huỳnh Thúc Kháng - Đầm Hồng
    create3DPipe(
      [new THREE.Vector3(650, 1.2, -60), new THREE.Vector3(1120, 1.2, -60), new THREE.Vector3(1120, 1.2, 220), new THREE.Vector3(650, 1.2, 220)],
      1.15,
      0x38bdf8,
      'Mạch Vòng D300 Huỳnh Thúc Kháng & Hồ Đầm Hồng (Vùng Green 3)',
      'PIPE-G3-DAMHONG-D300',
      true,
      2,
      { name: 'Mạch Vòng D300 Huỳnh Thúc Kháng', tier: 'Cấp 2 (D300)', flow: '480 m³/h', pressure: '3.25 bar', status: 'Cấp nước Đầm Hồng' }
    );

    // Tuyến Green 4: Đáy Nam Nguyễn Xiển & Eco Green
    create3DPipe(
      [new THREE.Vector3(-440, 1.4, 1080), new THREE.Vector3(0, 1.4, 1080), new THREE.Vector3(260, 1.4, 1080), new THREE.Vector3(550, 1.4, 1080)],
      1.35,
      isDark ? 0x0284c7 : 0x0369a1,
      'Trục Cấp 1 D500 Nguyễn Xiển Vành Đai 3 Nam (Vùng Green 4)',
      'PIPE-G4-NGUYENXIEN-D500',
      true,
      1,
      { name: 'Trục Cấp 1 D500 Nguyễn Xiển', tier: 'Cấp 1 (D500)', flow: '780 m³/h', pressure: '3.30 bar', status: 'Cấp nước Eco Green & Đại Kim' }
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


    // --- 4 TRẠM BUỒNG VAN GIẢM ÁP & ĐO ĐẾM ĐẦU VÀO DMA NGOẠI VI (PRV & BULK METERS) ---
    createSmartValve(
      [-1120, 0, 40],
      'Trạm Van PRV & Bulk Meter Nguồn Nước Sông Đà',
      'VALVE-PRV-GATE-WEST',
      false,
      'Cửa Ngõ Nguồn Tây (Đại Lộ Thăng Long)',
      'Tiếp nhận nước sạch từ NMN Sông Đà cấp cho toàn quận Cầu Giấy & Nam Từ Liêm',
      '120.000 dân cư & tổ hợp thương mại'
    );
    createSmartValve(
      [-440, 0, -1120],
      'Trạm Van PRV Vành Đai 3 Bắc Cầu Giấy',
      'VALVE-PRV-GATE-NORTH',
      false,
      'Cửa Ngõ Phía Bắc (Phạm Hùng - Cầu Giấy)',
      'Điều áp phân vùng DMA Nam Trung Yên, Dịch Vọng Hậu, KĐT Cầu Giấy',
      '65.000 dân cư'
    );
    createSmartValve(
      [920, 0, 720],
      'Trạm Van PRV Cửa Ngõ Nguyễn Trãi',
      'VALVE-PRV-GATE-SOUTH',
      false,
      'Cửa Ngõ Phía Đông Nam (Nguyễn Trãi - Thanh Xuân)',
      'Điều áp phân vùng cấp nước Royal City, Thượng Đình, Nhân Chính',
      '85.000 dân cư'
    );
    createSmartValve(
      [1120, 0, 180],
      'Trạm Van PRV Cửa Ngõ Láng Hạ',
      'VALVE-PRV-GATE-EAST',
      false,
      'Cửa Ngõ Phía Đông (Lê Văn Lương - Láng Hạ)',
      'Kết nối mạng lưới truyền dẫn quận Đống Đa - Ba Đình',
      '55.000 dân cư'
    );

            // --- CHỐT KHÓA VAN PHÂN VÙNG VÀ CẢM BIẾN MỚI CHO 4 VÙNG GREEN ---
    createSmartValve(
      [-120, 0, -980],
      'Trạm Van PRV Cầu Giấy Bắc - Tôn Thất Thuyết',
      'VALVE-G1-NORTH',
      false,
      'Phân Vùng Đỉnh Bắc (Green 1)',
      'Bộ TN&MT, Cung Tri Thức, Duy Tân Tech Hub',
      '42.000 dân cư & cơ quan'
    );
    createSmartValve(
      [-1050, 0, 200],
      'Trạm Van Phân Đoạn Phú Đô - Lê Quang Đạo',
      'VALVE-G2-WEST',
      false,
      'Phân Vùng Cánh Tây (Green 2)',
      'Làng Phú Đô, KĐT Sa Đôi, Sân Vận Động Nam Từ Liêm',
      '35.000 dân cư'
    );
    createSmartValve(
      [900, 0, 80],
      'Trạm Van Phân Đoạn Hồ Đầm Hồng - Huỳnh Thúc Kháng',
      'VALVE-G3-EAST',
      false,
      'Phân Vùng Cánh Đông (Green 3)',
      'Khu Đô Thị Láng Hạ Đông, Hồ Đầm Hồng, Khương Trung',
      '38.000 dân cư'
    );
    createSmartValve(
      [160, 0, 1080],
      'Trạm Van PRV Nguyễn Xiển - Eco Green City',
      'VALVE-G4-SOUTH',
      false,
      'Phân Vùng Đáy Nam (Green 4)',
      'Tổ Hợp Eco Green City, Bea Sky, KĐT Đại Kim Kim Lũ',
      '56.000 dân cư'
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

      // Bổ sung 36 Trụ Cứu Hỏa Vành Đai Mới (QCVN 06:2022/BXD cự ly 150m)
      const outerHydrants = [
        // Nguyễn Trãi (10 trụ)
        ...[-380, -260, -140, -20, 100, 220, 340, 460, 580, 700].map((x, idx) => ({ pos: [x, 0, 734], id: `HYD-NT-${idx + 1}`, road: 'Đường Nguyễn Trãi' })),
        // Tố Hữu (8 trụ)
        ...[-1050, -950, -850, -750, -650, -550, -480, -420].map((x, idx) => ({ pos: [x, 0, 214], id: `HYD-TH-${idx + 1}`, road: 'Đường Tố Hữu' })),
        // Vành Đai 3 Bắc & Nam Mở Rộng (10 trụ)
        ...[-1050, -950, -850, -750, -650, 650, 750, 850, 950, 1050].map((z, idx) => ({ pos: [-422, 0, z], id: `HYD-VD3-EXT-${idx + 1}`, road: 'Đường Vành Đai 3 Ngoại Vi' })),
        // Sa Đôi - Mễ Trì (8 trụ)
        ...[-300, -200, -100, 0, 100, 200, 300, 400].map((z, idx) => ({ pos: [-836, 0, z], id: `HYD-SD-${idx + 1}`, road: 'Đường Sa Đôi - Mễ Trì' }))
      ];
      outerHydrants.forEach(h => createHydrant(h.pos, `Trụ Cứu Hỏa ${h.id}`, h.id, h.road));

    }

    // =========================================================================
    // 14. TRẠM ĐÀI NƯỚC & BƠM TĂNG ÁP ĐẦU MỐI
    // =========================================================================
    
    
    // =========================================================================
    // 13B. IOT SCADA SENSOR TELEMETRY NODES (PT, FM, WQ - TCVN 33:2006)
    // =========================================================================
    if (assetsLayer.sensors) {
      const sensorGroup = new THREE.Group();
      scene.add(sensorGroup);

      const createSensorNode = ({ pos, name, id, type, metric, value, unit, status, dma }) => {
        const sGroup = new THREE.Group();
        sGroup.position.set(pos[0], 0, pos[2]);

        // Cột đỡ cảm biến công nghiệp
        const postGeo = new THREE.CylinderGeometry(0.35, 0.45, 3.2, 12);
        const postMat = new THREE.MeshStandardMaterial({
          color: isDark ? 0x1e293b : 0x64748b,
          metalness: 0.8,
          roughness: 0.3
        });
        const post = new THREE.Mesh(postGeo, postMat);
        post.position.y = 1.6;
        sGroup.add(post);

        // Đầu cảm biến phát quang SCADA (PT: Xanh Cyan, FM: Xanh Lá, WQ: Tím Clo)
        const headColor = type === 'PT' ? 0x38bdf8 : (type === 'FM' ? 0x10b981 : 0xa855f7);
        const headGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.7, 16);
        const headMat = new THREE.MeshStandardMaterial({
          color: headColor,
          emissive: headColor,
          emissiveIntensity: isDark ? 0.95 : 0.6,
          metalness: 0.6,
          roughness: 0.2
        });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 3.5;
        sGroup.add(head);

        // Vòng tròn xung nhịp truyền sóng viễn thông IoT 4G/NB-IoT
        const haloGeo = new THREE.RingGeometry(1.2, 1.8, 16);
        const haloMat = new THREE.MeshBasicMaterial({
          color: headColor,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.75
        });
        const halo = new THREE.Mesh(haloGeo, haloMat);
        halo.rotation.x = -Math.PI / 2;
        halo.position.y = 3.9;
        sGroup.add(halo);

        const assetData = {
          name,
          id,
          type: type === 'PT' 
            ? 'Cảm biến Áp lực Mạng lưới (Pressure Transmitter)' 
            : (type === 'FM' ? 'Đồng hồ Lưu lượng Điện từ DMA (Flow Meter)' : 'Cảm biến Quan trắc Chất lượng nước (Clo dư & pH)'),
          status: 'Trực tuyến 24/7 (SCADA RTU / 4G Telemetry)',
          reading: `${value} ${unit}`,
          metric: metric,
          elevation: '+16.8m ASL',
          dma: dma,
          frequency: 'Chu kỳ truyền tin: 10 giây/lần'
        };

        sGroup.userData = { name, id, type: 'Sensor', data: assetData };
        head.userData = sGroup.userData;
        clickableObjectsRef.current.push(head);
        sensorGroup.add(sGroup);
      };

      // 24 Trạm Cảm biến IoT SCADA bố trí tại các vị trí đầu mối và điểm cuối mạng
      const scadaSensors = [
        // Cảm biến Áp lực (PT - Pressure Transmitters)
        { pos: [0, 0, 0], name: 'Điểm Đo Áp Lực Trung Tâm (Ngã Tư Hoàng Đạo Thúy)', id: 'PT-HDT-01', type: 'PT', metric: 'Áp lực thủy lực', value: '3.24', unit: 'bar', dma: 'DMA THNC-01' },
        { pos: [-440, 0, 40], name: 'Cảm Biến Áp Lực ĐL Thăng Long - Vành Đai 3', id: 'PT-VD3-02', type: 'PT', metric: 'Áp lực đầu vào', value: '4.85', unit: 'bar', dma: 'DMA Nguồn Tây' },
        { pos: [0, 0, -180], name: 'Điểm Đo Áp Lực Trần Duy Hưng', id: 'PT-TDH-03', type: 'PT', metric: 'Áp lực tuyến chính', value: '3.42', unit: 'bar', dma: 'DMA THNC-02' },
        { pos: [0, 0, 180], name: 'Điểm Đo Áp Lực Lê Văn Lương', id: 'PT-LVL-04', type: 'PT', metric: 'Áp lực tuyến chính', value: '3.38', unit: 'bar', dma: 'DMA THNC-03' },
        { pos: [-440, 0, -950], name: 'Cảm Biến Áp Lực Cuối Tuyến Bắc (Vành Đai 3 Bắc)', id: 'PT-NORTH-05', type: 'PT', metric: 'Áp lực cuối mạng', value: '2.85', unit: 'bar', dma: 'DMA Nam Trung Yên' },
        { pos: [850, 0, 720], name: 'Cảm Biến Áp Lực Cuối Tuyến Đông Nam (Nguyễn Trãi)', id: 'PT-SOUTH-06', type: 'PT', metric: 'Áp lực cuối mạng', value: '2.92', unit: 'bar', dma: 'DMA Thượng Đình' },
        { pos: [-980, 0, 80], name: 'Cảm Biến Áp Lực Vùng Tây Mễ Trì', id: 'PT-WEST-07', type: 'PT', metric: 'Áp lực cấp nước', value: '3.40', unit: 'bar', dma: 'DMA Mễ Trì' },
        { pos: [240, 0, 860], name: 'Cảm Biến Áp Lực Điểm Cao Triều Khúc', id: 'PT-SOUTH-08', type: 'PT', metric: 'Áp lực nút bất lợi', value: '2.75', unit: 'bar', dma: 'DMA Thanh Xuân Nam' },
        { pos: [340, 0, -650], name: 'Cảm Biến Áp Lực Cầu Giấy - Yên Hòa', id: 'PT-CG-09', type: 'PT', metric: 'Áp lực phân phối', value: '3.15', unit: 'bar', dma: 'DMA Cầu Giấy' },
        { pos: [950, 0, 180], name: 'Cảm Biến Áp Lực Biên Phía Đông (Láng Hạ)', id: 'PT-EAST-10', type: 'PT', metric: 'Áp lực truyền dẫn', value: '3.20', unit: 'bar', dma: 'DMA Láng Hạ' },

        // Đồng hồ Đo Lưu lượng Điện từ (FM - Flow Meters)
        { pos: [-1100, 0, 40], name: 'Đồng Hồ Tổng Cửa Ngõ Nước Mặt Sông Đà', id: 'FM-INLET-SD', type: 'FM', metric: 'Lưu lượng tổng', value: '1,450.0', unit: 'm³/h', dma: 'DMA Cửa Ngõ Nguồn' },
        { pos: [-440, 0, -1050], name: 'Đồng Hồ Lưu Lượng Đầu Vào Bắc Vành Đai 3', id: 'FM-INLET-VD3-N', type: 'FM', metric: 'Lưu lượng phân vùng', value: '980.0', unit: 'm³/h', dma: 'DMA Nam Trung Yên' },
        { pos: [880, 0, 720], name: 'Đồng Hồ Lưu Lượng Đầu Vào Đông Nam Nguyễn Trãi', id: 'FM-INLET-NT', type: 'FM', metric: 'Lưu lượng phân vùng', value: '890.0', unit: 'm³/h', dma: 'DMA Thượng Đình' },
        { pos: [1050, 0, 180], name: 'Đồng Hồ Lưu Lượng Đầu Vào Phía Đông Lê Văn Lương', id: 'FM-INLET-LVL', type: 'FM', metric: 'Lưu lượng phân vùng', value: '720.0', unit: 'm³/h', dma: 'DMA Láng Hạ' },
        { pos: [140, 0, 0], name: 'Đồng Hồ Lưu Lượng Tiểu Vùng THNC-01', id: 'FM-SUB-01', type: 'FM', metric: 'Lưu lượng tiêu thụ', value: '145.8', unit: 'm³/h', dma: 'DMA THNC-01' },
        { pos: [-160, 0, 0], name: 'Đồng Hồ Lưu Lượng Tiểu Vùng THNC-02', id: 'FM-SUB-02', type: 'FM', metric: 'Lưu lượng tiêu thụ', value: '128.5', unit: 'm³/h', dma: 'DMA THNC-02' },
        { pos: [0, 0, 350], name: 'Đồng Hồ Lưu Lượng Tiểu Vùng THNC-03', id: 'FM-SUB-03', type: 'FM', metric: 'Lưu lượng tiêu thụ', value: '162.0', unit: 'm³/h', dma: 'DMA THNC-03' },

        // Cảm biến Quan trắc Chất lượng nước (WQ - Water Quality: Clo dư & pH)
        { pos: [-800, 0, 90], name: 'Trạm Quan Trắc Chất Lượng Nước Mễ Trì', id: 'WQ-WEST-01', type: 'WQ', metric: 'Clo dư / pH', value: '0.45 mg/L | pH 7.4', unit: '', dma: 'DMA Mễ Trì' },
        { pos: [0, 0, 0], name: 'Trạm Quan Trắc Chất Lượng Nước Trung Tâm THNC', id: 'WQ-CORE-02', type: 'WQ', metric: 'Clo dư / pH', value: '0.55 mg/L | pH 7.5', unit: '', dma: 'DMA THNC-01' },
        { pos: [840, 0, 520], name: 'Trạm Quan Trắc Chất Lượng Nước Royal City', id: 'WQ-EAST-03', type: 'WQ', metric: 'Clo dư / pH', value: '0.42 mg/L | pH 7.3', unit: '', dma: 'DMA Thượng Đình' },
        { pos: [-180, 0, -480], name: 'Trạm Quan Trắc Chất Lượng Nước Nam Trung Yên', id: 'WQ-NORTH-04', type: 'WQ', metric: 'Clo dư / pH', value: '0.38 mg/L | pH 7.4', unit: '', dma: 'DMA Nam Trung Yên' },
        { pos: [120, 0, 840], name: 'Trạm Quan Trắc Chất Lượng Nước Triều Khúc', id: 'WQ-SOUTH-05', type: 'WQ', metric: 'Clo dư / pH', value: '0.35 mg/L | pH 7.2', unit: '', dma: 'DMA Thanh Xuân Nam' },
        { pos: [-950, 0, 160], name: 'Trạm Kiểm Soát Clo Dư Bể Chứa Tây Hà Nội', id: 'WQ-TANK-WEST', type: 'WQ', metric: 'Clo dư khử trùng', value: '0.65 mg/L | pH 7.6', unit: '', dma: 'DMA Mễ Trì' },
        { pos: [280, 0, 960], name: 'Trạm Kiểm Soát Clo Dư Bể Chứa Nam Hà Nội', id: 'WQ-TANK-SOUTH', type: 'WQ', metric: 'Clo dư khử trùng', value: '0.62 mg/L | pH 7.5', unit: '', dma: 'DMA Thanh Xuân Nam' }
      ];

      scadaSensors.forEach(s => createSensorNode(s));
    }

    if (assetsLayer.tanks) {
      // TRẠM CẤP NƯỚC TĂNG ÁP & BỂ CHỨA ĐIỀU HÒA NGOẠI VI TÂY HÀ NỘI (-960, 0, 160)
      const westTankGroup = new THREE.Group();
      westTankGroup.position.set(-960, 0, 160);

      const wTankBaseGeo = new THREE.CylinderGeometry(28, 30, 14, 28);
      const wTankMat = new THREE.MeshStandardMaterial({
        color: isDark ? 0x0284c7 : 0x0369a1,
        metalness: 0.65,
        roughness: 0.25
      });
      const wTankMesh = new THREE.Mesh(wTankBaseGeo, wTankMat);
      wTankMesh.position.y = 7;
      wTankMesh.castShadow = true;
      westTankGroup.add(wTankMesh);

      const wDomeGeo = new THREE.SphereGeometry(28.2, 28, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
      const wDomeMat = new THREE.MeshStandardMaterial({ color: isDark ? 0x38bdf8 : 0x0284c7, metalness: 0.8 });
      const wDome = new THREE.Mesh(wDomeGeo, wDomeMat);
      wDome.position.y = 10;
      westTankGroup.add(wDome);

      westTankGroup.userData = {
        name: 'Trạm Bơm Tăng Áp & Bể Chứa Điều Hòa Ngoại Vi Mễ Trì',
        id: 'TANK-BOOSTER-WEST',
        type: 'Trạm Bơm & Bể Chứa Ngoại Vi',
        data: {
          name: 'Trạm Bơm Tăng Áp & Bể Chứa Điều Hòa Mễ Trì (Tây Hà Nội)',
          id: 'TANK-BOOSTER-WEST',
          type: 'Bể ngầm điều hòa 12.000 m³ + Trạm bơm 4 tổ máy',
          status: 'Vận hành tự động SCADA - Dự phòng cấp nước khẩn cấp',
          capacity: '12.000 m³ nước sạch',
          pressure: 'Áp lực đẩy: 4.65 bar',
          flow: 'Lưu lượng bơm điều hòa: 1.250 m³/h',
          elevation: '+17.2m ASL',
          dma: 'DMA Mễ Trì - Tây Hà Nội'
        }
      };
      wTankMesh.userData = westTankGroup.userData;
      clickableObjectsRef.current.push(wTankMesh);
      scene.add(westTankGroup);

      // TRẠM CẤP NƯỚC BỂ CHỨA TRIỀU KHÚC - THANH XUÂN NAM (280, 0, 960)
      const southTankGroup = new THREE.Group();
      southTankGroup.position.set(280, 0, 960);

      const sTankBaseGeo = new THREE.CylinderGeometry(24, 26, 12, 24);
      const sTankMesh = new THREE.Mesh(sTankBaseGeo, wTankMat);
      sTankMesh.position.y = 6;
      sTankMesh.castShadow = true;
      southTankGroup.add(sTankMesh);

      const sDomeGeo = new THREE.SphereGeometry(24.2, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.45);
      const sDome = new THREE.Mesh(sDomeGeo, wDomeMat);
      sDome.position.y = 8;
      southTankGroup.add(sDome);

      southTankGroup.userData = {
        name: 'Trạm Bể Chứa Điều Hòa & Bơm Cấp Nước Triều Khúc',
        id: 'TANK-SOUTH-TRIEUKHUC',
        type: 'Trạm Bơm & Bể Chứa Ngoại Vi',
        data: {
          name: 'Trạm Bể Chứa Điều Hòa Triều Khúc - Thanh Xuân Nam',
          id: 'TANK-SOUTH-TRIEUKHUC',
          type: 'Bể ngầm điều hòa 8.500 m³',
          status: 'Cân bằng áp lực giờ cao điểm phía Nam',
          capacity: '8.500 m³ nước sạch',
          pressure: 'Áp lực: 3.55 bar',
          flow: '820 m³/h',
          elevation: '+16.1m ASL',
          dma: 'DMA Thanh Xuân Nam'
        }
      };
      sTankMesh.userData = southTankGroup.userData;
      clickableObjectsRef.current.push(sTankMesh);
      scene.add(southTankGroup);

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
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: compact ? '440px' : 'calc(100vh - 65px)' }}>
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
