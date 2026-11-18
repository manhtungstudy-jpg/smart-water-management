# -*- coding: utf-8 -*-
"""
Script to apply comprehensive visual overhaul to Network3DViewer.jsx:
1. Pipes: Double radius, elevate, vivid hydraulic hierarchy (Deep Sapphire, Radiant Cyan, Glowing Amber), glowing fluid beads.
2. Buildings: Neutral clean architectural porcelain/white/slate with dark crown caps and sharp edges. Red on water cutoff.
3. Low-Rise Villas & Shophouses: Real Vietnamese terracotta red-orange pitched roofs with warm cream walls and silver inox water tanks.
4. Street Labels: 3.5x larger, elevated to y = 55m, high-res canvas, Google Maps 3D badge styling with landmark pill badges.
"""

import re

file_path = r'D:\Ai_agents\Báo cáo dự án\smart-water-management\Network3DViewer.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    code = f.read()

# -------------------------------------------------------------------------
# 1. OVERHAUL createStreetLabel
# -------------------------------------------------------------------------
old_street_label = re.search(r'    const createStreetLabel = \(text, pos, width = 50, height = 12\.5, isMajor = true\) => \{[\s\S]*?return sprite;\s*\};', code)
if old_street_label:
    new_street_label = '''    const createStreetLabel = (text, pos, width = 160, height = 42, isMajor = true) => {
      if (!assetsLayer.streetLabels) return null;

      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      const r = 48;
      const x = 16, y = 16, w = 992, h = 224;

      // Drop shadow for 3D aerial legibility
      ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
      ctx.shadowBlur = 18;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 6;

      // Rounded pill container
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();

      ctx.fillStyle = isDark ? '#0f172a' : '#ffffff';
      ctx.fill();

      // Reset shadow for borders & text
      ctx.shadowColor = 'transparent';
      ctx.lineWidth = isMajor ? 8 : 5;
      ctx.strokeStyle = isMajor ? (isDark ? '#38bdf8' : '#1d4ed8') : (isDark ? '#475569' : '#cbd5e1');
      ctx.stroke();

      // Highway / Route Shield Icon
      const iconX = 72, iconY = 128, iconR = 48;
      ctx.beginPath();
      ctx.arc(iconX, iconY, iconR, 0, Math.PI * 2);
      ctx.fillStyle = isMajor ? (text.includes('KEANGNAM') || text.includes('NCC') || text.includes('THÁP') || text.includes('DIAMOND') ? '#7c3aed' : '#1d4ed8') : '#d97706';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isMajor ? (text.includes('KEANGNAM') || text.includes('34T') ? '⭐' : 'ĐT') : 'HN', iconX, iconY);

      // Main Street / Landmark Name
      ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
      ctx.font = `bold ${isMajor ? '54px' : '46px'} -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 142, iconY);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;

      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      // Elevate sprite to float cleanly above buildings and roads
      sprite.position.set(pos[0], pos[1] + 48, pos[2]);
      sprite.scale.set(width, height, 1);
      labelGroup.add(sprite);
      return sprite;
    };'''
    code = code.replace(old_street_label.group(0), new_street_label)
    print("Replaced createStreetLabel successfully.")
else:
    print("WARNING: Could not find createStreetLabel!")

# Update Street label calls with generous width/height
street_calls_old = '''    createStreetLabel('ĐƯỜNG HOÀNG ĐẠO THÚY', [0, 10, -50], 55, 13.5, true);
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
    createStreetLabel('HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)', [-260, 10, 95], 58, 14.5, true);'''

street_calls_new = '''    createStreetLabel('ĐƯỜNG HOÀNG ĐẠO THÚY', [0, 10, -50], 195, 48, true);
    createStreetLabel('ĐƯỜNG LÊ VĂN LƯƠNG', [120, 10, 180], 185, 46, true);
    createStreetLabel('ĐƯỜNG TRẦN DUY HƯNG', [120, 10, -180], 185, 46, true);
    createStreetLabel('ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)', [-440, 10, -80], 215, 52, true);
    createStreetLabel('ĐƯỜNG HOÀNG MINH GIÁM', [-160, 10, 80], 190, 47, true);
    createStreetLabel('ĐẠI LỘ THĂNG LONG', [-720, 10, 40], 195, 48, true);
    createStreetLabel('ĐƯỜNG NGUYỄN THỊ THẬP', [-80, 10, 0], 175, 42, false);
    createStreetLabel('PHỐ NGUYỄN THỊ ĐỊNH', [140, 10, -70], 170, 42, false);
    createStreetLabel('PHỐ HOÀNG NGÂN', [60, 10, 90], 160, 39, false);
    createStreetLabel('PHỐ ĐỖ QUANG', [60, 10, -90], 160, 39, false);
    createStreetLabel('PHỐ VŨ TRỌNG PHỤNG', [240, 10, 240], 170, 42, false);
    createStreetLabel('PHỐ NGUYỄN TUÂN', [290, 10, 290], 170, 42, false);
    createStreetLabel('ĐƯỜNG NGỤY NHƯ KON TUM', [140, 10, 350], 185, 46, false);
    createStreetLabel('PHỐ TRUNG KÍNH', [340, 10, 50], 170, 42, false);
    createStreetLabel('KEANGNAM LANDMARK 72 (350M)', [-540, 30, -320], 240, 58, true);
    createStreetLabel('TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)', [-440, 24, 120], 230, 56, true);
    createStreetLabel('VINHOMES D\'CAPITALE & BIG C', [-220, 22, -180], 220, 54, true);
    createStreetLabel('HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)', [-260, 18, 95], 210, 52, true);'''

code = code.replace(street_calls_old, street_calls_new)

# -------------------------------------------------------------------------
# 2. OVERHAUL create3DBuilding (NEUTRAL ARCHITECTURAL FACADES)
# -------------------------------------------------------------------------
old_bldg_func = re.search(r'    const create3DBuilding = \(\{[\s\S]*?buildingGroup\.add\(bGroup\);\s*return bGroup;\s*\};', code)
if old_bldg_func:
    new_bldg_func = '''    const create3DBuilding = ({
      pos = [0, 0, 0],
      size = [16, 40, 16],
      color = 0xffffff,
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

      // Realistic Architectural Palette: Clean White Porcelain / Soft Grey Glass
      // (NEVER saturated blue, so water pipes can be the vivid hero of the scene)
      let archColor = isDark ? 0x1e293b : 0xffffff;
      if (!isDark && name) {
        if (name.includes('Keangnam') || name.includes('Diamond Flower') || name.includes('Charmvit') || name.includes('MB')) {
          archColor = 0xf1f5f9; // Crystal glass white
        } else if (name.includes('Mandarin') || name.includes('D\'Capitale') || name.includes('Hapulico') || name.includes('34T')) {
          archColor = 0xf8fafc; // Warm porcelain limestone
        }
      }
      const activeColor = isCutOff ? 0xef4444 : archColor;

      const bodyGeo = new THREE.BoxGeometry(w, h, d);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: activeColor,
        metalness: isCutOff ? 0.2 : 0.25,
        roughness: isCutOff ? 0.3 : 0.35,
        transparent: isCutOff,
        opacity: isCutOff ? 0.8 : 1.0,
        emissive: isCutOff ? 0x991b1b : 0x000000,
        emissiveIntensity: isCutOff ? 0.45 : 0.0
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.position.y = h / 2;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      bGroup.add(bodyMesh);

      // Clean architectural edges for sharp definition
      const edges = new THREE.EdgesGeometry(bodyGeo);
      const edgeLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: isCutOff ? 0xdc2626 : (isDark ? 0x334155 : 0xcbd5e1),
          linewidth: isCutOff ? 2.5 : 1.0
        })
      );
      bodyMesh.add(edgeLine);

      // Contrasting Rooftop Crown Cap (Dark Slate / Bronze)
      const capH = Math.max(2, h * 0.04);
      const capGeo = new THREE.BoxGeometry(w * 0.96, capH, d * 0.96);
      const capMat = new THREE.MeshStandardMaterial({
        color: isCutOff ? 0x7f1d1d : (isDark ? 0x0f172a : 0x334155),
        roughness: 0.5
      });
      const capMesh = new THREE.Mesh(capGeo, capMat);
      capMesh.position.set(0, h + capH / 2, 0);
      bGroup.add(capMesh);

      // Stainless Steel Rooftop Water Cistern (Inox Tân Á / Sơn Hà)
      const tankGeo = new THREE.CylinderGeometry(w * 0.18, w * 0.18, 5, 16);
      const tankMat = new THREE.MeshStandardMaterial({
        color: isCutOff ? 0xef4444 : 0xe2e8f0,
        metalness: 0.9,
        roughness: 0.15
      });
      const tankMesh = new THREE.Mesh(tankGeo, tankMat);
      tankMesh.position.set(0, h + capH + 2.5, 0);
      bGroup.add(tankMesh);

      if (hasAntenna) {
        const antennaGeo = new THREE.CylinderGeometry(0.3, 0.5, 20, 8);
        const antennaMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85 });
        const antenna = new THREE.Mesh(antennaGeo, antennaMat);
        antenna.position.set(0, h + capH + 12, 0);
        bGroup.add(antenna);

        const beaconGeo = new THREE.SphereGeometry(1.4, 8, 8);
        const beaconMat = new THREE.MeshBasicMaterial({ color: isCutOff ? 0xf59e0b : 0xef4444 });
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        beacon.position.set(0, h + capH + 22, 0);
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
    };'''
    code = code.replace(old_bldg_func.group(0), new_bldg_func)
    print("Replaced create3DBuilding successfully.")

# -------------------------------------------------------------------------
# 3. OVERHAUL createDenseShophouseBlock (TERRACOTTA ROOFS & REAL SHOPHOUSES)
# -------------------------------------------------------------------------
old_shophouse = re.search(r'    // Helper: Procedural Shophouse Block \(Nhà phố phân lô 4-6 tầng san sát\)[\s\S]*?buildingGroup\.add\(blockGroup\);\s*\};', code)
if old_shophouse:
    new_shophouse = '''    // Helper: Procedural Shophouse Block with Warm Terracotta Pitched Roofs
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
          const totalH = heightRange[0] + hSeed * (heightRange[1] - heightRange[0]);
          const wallH = totalH * 0.75;
          const roofH = Math.max(3.8, Math.min(stepX, stepZ) * 0.42);
          const w = stepX * 0.90;
          const d = stepZ * 0.88;

          // Warm Vietnamese Townhouse Wall Palette: Ivory, Warm Cream, Pale Linen
          const wallPal = isDark
            ? [0x1e293b, 0x334155, 0x1e293b]
            : [0xfffbeb, 0xfef3c7, 0xfafaf9, 0xffffff];
          const colIdx = Math.floor(hSeed * wallPal.length) % wallPal.length;

          // House Wall Mesh
          const houseGeo = new THREE.BoxGeometry(w, wallH, d);
          const houseMat = new THREE.MeshStandardMaterial({
            color: isCutOff ? 0xef4444 : wallPal[colIdx],
            roughness: 0.65,
            metalness: 0.05,
            transparent: isCutOff,
            opacity: isCutOff ? 0.75 : 1.0,
            emissive: isCutOff ? 0x991b1b : 0x000000,
            emissiveIntensity: isCutOff ? 0.35 : 0.0
          });
          const houseMesh = new THREE.Mesh(houseGeo, houseMat);
          houseMesh.position.set(px, wallH / 2, pz);
          houseMesh.castShadow = true;
          houseMesh.receiveShadow = true;
          blockGroup.add(houseMesh);

          // Vietnamese Pitched Roof (Mái ngói dốc kiểu biệt thự/nhà phố - Terracotta Orange)
          const roofGeo = new THREE.ConeGeometry(Math.max(w, d) * 0.72, roofH, 4);
          const roofColors = [0xc2410c, 0xb91c1c, 0xd97706, 0xea580c]; // Terracotta brick red / warm tile
          const roofColor = isDark ? 0x991b1b : roofColors[colIdx % roofColors.length];
          const roofMat = new THREE.MeshStandardMaterial({
            color: isCutOff ? 0xef4444 : roofColor,
            roughness: 0.55,
            metalness: 0.1
          });
          const roofMesh = new THREE.Mesh(roofGeo, roofMat);
          roofMesh.rotation.y = Math.PI / 4;
          roofMesh.position.set(px, wallH + roofH / 2, pz);
          roofMesh.castShadow = true;
          blockGroup.add(roofMesh);

          // Rooftop Stainless Steel Water Cistern (Inox)
          const tankGeo = new THREE.CylinderGeometry(w * 0.16, w * 0.16, 2.4, 12);
          const tankMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.15 });
          const tankMesh = new THREE.Mesh(tankGeo, tankMat);
          tankMesh.position.set(px + w * 0.22, wallH + roofH * 0.7, pz + d * 0.22);
          blockGroup.add(tankMesh);

          if (isCutOff) {
            const houseEdges = new THREE.EdgesGeometry(houseGeo);
            const edgeMesh = new THREE.LineSegments(
              houseEdges,
              new THREE.LineBasicMaterial({ color: 0xdc2626, linewidth: 2 })
            );
            houseMesh.add(edgeMesh);
          }

          const houseData = {
            name: `${blockName} (Lô ${r + 1}-${c + 1})`,
            id: `HOUSE-${zoneId}-${r + 1}-${c + 1}`,
            type: 'Nhà Phố / Shophouse Phân Lô',
            status: isCutOff ? `⚠️ MẤT NƯỚC (Do đóng van: ${cutOffValveName})` : 'Cấp nước ổn định',
            floors: `${Math.round(totalH / 3.6)} tầng`,
            households: '1 hộ gia đình + mặt bằng kinh doanh',
            flow: isCutOff ? '0.0 m³/h' : '0.45 m³/h',
            pressure: isCutOff ? '0.00 bar' : '3.18 bar',
            connectionPipe: 'DN32 HDPE',
            cisternCapacity: '2.5 m³ (Bồn inox áp mái)',
            meterId: `MTR-${zoneId}-${r + 1}-${c + 1}`,
            dma: dma,
            isCutOff: isCutOff,
            cutOffValveName: cutOffValveName
          };

          houseMesh.userData = { name: houseData.name, id: houseData.id, type: 'Building', data: houseData };
          clickableObjectsRef.current.push(houseMesh);
        }
      }

      buildingGroup.add(blockGroup);
    };'''
    code = code.replace(old_shophouse.group(0), new_shophouse)
    print("Replaced createDenseShophouseBlock successfully.")

# -------------------------------------------------------------------------
# 4. OVERHAUL villaGroup (ZONE 08 - BIỆT THỰ LIỀN KỀ NGUYỄN THỊ THẬP)
# -------------------------------------------------------------------------
old_villas = re.search(r'    // --- 9\. KHU BIỆT THỰ & TRƯỜNG NGÔI SAO \(ZONE 08\) ---[\s\S]*?villaGroup\.children\.forEach\(c => \{[\s\S]*?\}\);', code)
if old_villas:
    new_villas = '''    // --- 9. KHU BIỆT THỰ & TRƯỜNG NGÔI SAO (ZONE 08) ---
    const villaGroup = new THREE.Group();
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        const vx = 65 + c * 22;
        const vz = -30 + r * 22;
        const vWallH = 10;
        const vRoofH = 5.5;

        // Villa Wall: warm ivory
        const vGeo = new THREE.BoxGeometry(14, vWallH, 14);
        const vMat = new THREE.MeshStandardMaterial({
          color: isOutageZone08 ? 0xef4444 : (isDark ? 0x334155 : 0xfffbeb),
          roughness: 0.65,
          metalness: 0.05
        });
        const vMesh = new THREE.Mesh(vGeo, vMat);
        vMesh.position.set(vx, vWallH / 2, vz);
        vMesh.castShadow = true;
        villaGroup.add(vMesh);

        // Villa Pitched Terracotta Roof
        const vRoofGeo = new THREE.ConeGeometry(12, vRoofH, 4);
        const vRoofMat = new THREE.MeshStandardMaterial({
          color: isOutageZone08 ? 0xdc2626 : (isDark ? 0x991b1b : 0xc2410c), // Classic Red Terracotta Tile
          roughness: 0.55
        });
        const vRoofMesh = new THREE.Mesh(vRoofGeo, vRoofMat);
        vRoofMesh.rotation.y = Math.PI / 4;
        vRoofMesh.position.set(vx, vWallH + vRoofH / 2, vz);
        vRoofMesh.castShadow = true;
        villaGroup.add(vRoofMesh);

        // Rooftop Inox Tank
        const vTankGeo = new THREE.CylinderGeometry(2.0, 2.0, 2.2, 12);
        const vTankMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.15 });
        const vTank = new THREE.Mesh(vTankGeo, vTankMat);
        vTank.position.set(vx + 3.5, vWallH + vRoofH * 0.7, vz + 3.5);
        villaGroup.add(vTank);

        const villaData = {
          name: `Biệt Thự Vườn BT${r + 1}-${c + 1} (Nguyễn Thị Thập)`,
          id: `BLDG-VILLA-${r + 1}-${c + 1}`,
          type: 'Biệt Thự Đơn Lập Cao Cấp',
          status: isOutageZone08 ? '⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08' : 'Cấp nước ổn định',
          floors: '3.5 tầng + Áp mái',
          households: '1 hộ gia đình',
          flow: isOutageZone08 ? '0.0 m³/h' : '1.2 m³/h',
          pressure: isOutageZone08 ? '0.00 bar' : '3.18 bar',
          elevation: '+16.5m ASL',
          connectionPipe: 'DN50 HDPE',
          cisternCapacity: '15 m³ / biệt thự',
          meterId: `MTR-VILLA-${r + 1}-${c + 1}`,
          dma: 'DMA THNC-02',
          isCutOff: isOutageZone08,
          cutOffValveName: 'Van V-NTT-08'
        };
        vMesh.userData = { name: villaData.name, id: villaData.id, type: 'Building', data: villaData };
        clickableObjectsRef.current.push(vMesh);
      }
    }
    villaGroup.userData = {
      name: 'Khu Biệt Thự & Liền Kề BT1 - BT6 (Nguyễn Thị Thập)',
      id: 'BLDG-VILLAS',
      type: 'Khu Biệt Thự Thấp Tầng',
      data: {
        name: 'Khu Biệt Thự & Liền Kề BT1 - BT6 (Nguyễn Thị Thập)',
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
    };'''
    code = code.replace(old_villas.group(0), new_villas)
    print("Replaced villaGroup successfully.")

# -------------------------------------------------------------------------
# 5. OVERHAUL create3DPipe (THICKER, RADIANT COLORS, EMISSIVE FLUID BEADS)
# -------------------------------------------------------------------------
old_pipe_func = re.search(r'    const create3DPipe = \(points, radius, color, name, pipeId, isFlowing, tier, data\) => \{[\s\S]*?return tubeMesh;\s*\};', code)
if old_pipe_func:
    new_pipe_func = '''    const create3DPipe = (points, radius, color, name, pipeId, isFlowing, tier, data) => {
      if (tier === 1 && !assetsLayer.pipesPrimary) return null;
      if (tier === 2 && !assetsLayer.pipesSecondary) return null;
      if (tier === 3 && !assetsLayer.pipesTertiary) return null;
      if (tier === 4 && !assetsLayer.pipesService) return null;
      if (!assetsLayer.pipes) return null;

      // Pipe Radius Scaling - DRAMATICALLY ENLARGED SO PIPELINES ARE THE HERO
      let displayRadius = radius * 2.2;
      let displayColor = color;
      let emissiveColor = color;
      let emissiveInt = 0.85;

      if (tier === 1) {
        displayRadius = 4.2; // Massive primary transmission trunk D500-D800
        displayColor = 0x1d4ed8; // Deep Royal Electric Sapphire
        emissiveColor = 0x2563eb;
        emissiveInt = 0.95;
      } else if (tier === 2) {
        displayRadius = 2.8; // Secondary distribution loop D200-D300
        displayColor = 0x06b6d4; // Radiant Aqua Turquoise
        emissiveColor = 0x0891b2;
        emissiveInt = 0.85;
      } else if (tier === 3 || tier === 4) {
        displayRadius = 1.8; // Tertiary and service connections D50-D100
        displayColor = 0xf59e0b; // Bright Golden Amber
        emissiveColor = 0xd97706;
        emissiveInt = 0.85;
      }

      // Elevate points slightly higher above road level to ensure crisp 3D popping
      const elevatedPoints = points.map(pt => {
        const p = pt.clone();
        p.y = Math.max(p.y, tier === 1 ? 3.6 : (tier === 2 ? 2.8 : 2.2));
        return p;
      });

      const curve = new THREE.CatmullRomCurve3(elevatedPoints);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, displayRadius, 16, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: isFlowing ? displayColor : 0x64748b,
        roughness: 0.2,
        metalness: 0.45,
        emissive: isFlowing ? emissiveColor : 0x000000,
        emissiveIntensity: isFlowing ? emissiveInt : 0.0
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.castShadow = true;
      tubeMesh.receiveShadow = true;
      tubeMesh.userData = { name, id: pipeId, type: 'Pipe', data };
      pipeGroup.add(tubeMesh);
      clickableObjectsRef.current.push(tubeMesh);

      // Fluid Flow Particle Animation - Brilliant Pulsating Beads
      if (isFlowing) {
        const count = tier === 1 ? 20 : (tier === 2 ? 14 : (tier === 3 ? 8 : 5));
        const beadGeo = new THREE.SphereGeometry(displayRadius * 1.55, 12, 12);
        const beadMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0x38bdf8,
          emissiveIntensity: 1.6,
          roughness: 0.1
        });

        for (let i = 0; i < count; i++) {
          const p = new THREE.Mesh(beadGeo, beadMat);
          scene.add(p);
          flowParticlesRef.current.push({
            mesh: p,
            curve: curve,
            t: i / count,
            speed: tier === 1 ? 0.0024 : (tier === 2 ? 0.0018 : 0.0013)
          });
        }
      }

      return tubeMesh;
    };'''
    code = code.replace(old_pipe_func.group(0), new_pipe_func)
    print("Replaced create3DPipe successfully.")

# -------------------------------------------------------------------------
# 6. OVERHAUL createServiceConnection (BRIGHT GLOWING AMBER)
# -------------------------------------------------------------------------
old_service = re.search(r'    const createServiceConnection = \(startPt, buildingPt, diameter, bldgName, bldgId, isCut\) => \{[\s\S]*?\}\);', code)
if old_service:
    new_service = '''    const createServiceConnection = (startPt, buildingPt, diameter, bldgName, bldgId, isCut) => {
      const sPt = new THREE.Vector3(startPt.x, 2.2, startPt.z);
      const bPt = new THREE.Vector3(buildingPt.x, 2.2, buildingPt.z);
      const midPt = new THREE.Vector3((sPt.x + bPt.x) / 2, 2.4, (sPt.z + bPt.z) / 2);
      create3DPipe(
        [sPt, midPt, bPt],
        1.6,
        isCut ? 0x64748b : 0xf59e0b,
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
          material: 'HDPE PE100 PN16',
          supplyTo: bldgName,
          pressure: isCut ? '0.00 bar' : '3.25 bar',
          flow: isCut ? '0.0 m³/h' : '45.0 m³/h'
        }
      );
    };'''
    code = code.replace(old_service.group(0), new_service)
    print("Replaced createServiceConnection successfully.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(code)

print("Finished visual overhaul for Network3DViewer.jsx!")
