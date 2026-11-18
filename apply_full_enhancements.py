import sys

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Check what was already applied in the previous run:
# 1. Building tanks
if "const tankGeo = new THREE.CylinderGeometry(w * 0.18, w * 0.18, 5, 16);" in text:
    target_bldg_tank = """      // Rooftop Cistern
      const tankGeo = new THREE.CylinderGeometry(w * 0.18, w * 0.18, 5, 16);
      const tankMat = new THREE.MeshStandardMaterial({
        color: isCutOff ? 0x64748b : 0x0284c7,
        metalness: 0.65,
        roughness: 0.2
      });
      const tankMesh = new THREE.Mesh(tankGeo, tankMat);
      tankMesh.position.set(0, h + 2.5, 0);
      bGroup.add(tankMesh);"""
    text = text.replace(target_bldg_tank, "      // Rooftop cistern removed -> Flat modern clean roof")
    print("1. Removed building rooftop tanks.")
else:
    print("1. Building rooftop tanks already removed.")

# 2. Shophouse tanks
if "const tankGeo = new THREE.CylinderGeometry(w * 0.18, w * 0.18, 2.2, 12);" in text:
    target_shophouse_tank = """          const tankGeo = new THREE.CylinderGeometry(w * 0.18, w * 0.18, 2.2, 12);
          const tankMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.2 });
          const tankMesh = new THREE.Mesh(tankGeo, tankMat);
          tankMesh.position.set(px, h + 1.1, pz);
          blockGroup.add(tankMesh);"""
    text = text.replace(target_shophouse_tank, "          // Shophouse rooftop cistern removed -> Flat clean roof")
    print("2. Removed shophouse rooftop tanks.")
else:
    print("2. Shophouse rooftop tanks already removed.")

# 3. Valve badge overflow
if "canvas.width = 420;" in text:
    target_valve_badge = """      // Floating 3D Badge with high-contrast BLACK text
      const canvas = document.createElement('canvas');
      canvas.width = 420;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      // Background: Crisp light amber-yellow (#fef08a) when open, soft light red (#fee2e2) when closed
      ctx.fillStyle = isClosed ? '#fee2e2' : '#fef08a';
      ctx.beginPath();
      ctx.roundRect(8, 8, 404, 84, 18);
      ctx.fill();
      ctx.strokeStyle = isClosed ? '#dc2626' : '#15803d';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Subtle inner border for crisp SCADA card appearance
      ctx.strokeStyle = isClosed ? '#b91c1c' : '#166534';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(14, 14, 392, 72);

      // Chữ đen đậm nét (Black Bold Text)
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isClosed ? `🔒 ${id}: ĐÃ ĐÓNG (CẮT NƯỚC)` : `🔓 ${id}: ĐANG MỞ (CLICK KHÓA)`, 210, 50);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(0, 12, 0);
      sprite.scale.set(30, 7.5, 1);
      vGroup.add(sprite);"""

    new_valve_badge = """      // Floating 3D Badge with high-contrast BLACK text (Width 540, fits all text without overflow)
      const canvas = document.createElement('canvas');
      canvas.width = 540;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      // Background: Crisp light amber-yellow (#fef08a) when open, soft light red (#fee2e2) when closed
      ctx.fillStyle = isClosed ? '#fee2e2' : '#fef08a';
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

      // Chữ đen đậm nét (Black Bold Text) - Fit hoàn hảo không tràn khung
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isClosed ? `🔒 ${id}: ĐÃ ĐÓNG (CẮT NƯỚC)` : `🔓 ${id}: ĐANG MỞ (HOẠT ĐỘNG)`, 270, 50);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(0, 12, 0);
      sprite.scale.set(38, 7.0, 1);
      vGroup.add(sprite);"""
    text = text.replace(target_valve_badge, new_valve_badge)
    print("3. Fixed valve badge overflow.")
else:
    print("3. Valve badge already updated.")

# 4. Pipe colors
if "tier === 1 ? 0x00f0ff" in text:
    target_pipe_colors = """      // Vibrant high-visibility water colors per tier:
      // Tier 1: Electric Cyan 0x00f0ff (never dark)
      // Tier 2: Sky Azure 0x38bdf8
      // Tier 3: Mint Aqua 0x2dd4bf
      // Tier 4: Warm Amber 0xfbbf24
      const dynamicColor = tier === 1 ? 0x00f0ff : (tier === 2 ? 0x38bdf8 : (tier === 3 ? 0x2dd4bf : (data?.status?.includes('CẮT') ? 0x64748b : 0xfbbf24)));
      const activeColor = isFlowing ? dynamicColor : 0x475569;

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, radius, 14, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: activeColor,
        roughness: 0.2,
        metalness: 0.15,
        emissive: isFlowing ? activeColor : 0x000000,
        emissiveIntensity: isFlowing ? (isDark ? 0.72 : 0.52) : 0.0
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.castShadow = false;
      tubeMesh.receiveShadow = false; // Do not receive shadows from tall buildings!
      tubeMesh.userData = { name, id: pipeId, type: 'Pipe', data };
      pipeGroup.add(tubeMesh);
      clickableObjectsRef.current.push(tubeMesh);

      // Fluid Flow Particle Animation
      if (isFlowing) {
        const count = tier === 1 ? 20 : (tier === 2 ? 12 : (tier === 3 ? 8 : 4));
        const beadGeo = new THREE.SphereGeometry(radius * 1.3, 12, 12);
        const beadMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: tier === 1 ? 0x00f0ff : (tier === 2 ? 0x38bdf8 : 0x2dd4bf),
          emissiveIntensity: 1.4,
          roughness: 0.1
        });"""

    new_pipe_colors = """      // Synchronized pipe colors per user hierarchy:
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
        });"""
    text = text.replace(target_pipe_colors, new_pipe_colors)
    print("4. Synchronized pipe colors.")
else:
    print("4. Pipe colors already updated.")

# 5. Right-hand panel
if "Floating 3D Navigation Compass / Camera Control Bar" in text:
    old_right_panel_start = "      {/* Floating 3D Navigation Compass / Camera Control Bar */}"
    old_right_panel_end = """        <div className="qatium-hud-pill-group" style={{ display: 'flex', justifyContent: 'space-between', padding: '4px' }}>
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
      </div>"""
    idx_start = text.find(old_right_panel_start)
    idx_end = text.find(old_right_panel_end) + len(old_right_panel_end)
    text = text[:idx_start] + "{/* Right-hand HUD removed as requested */}" + text[idx_end:]
    print("5. Removed right-hand navigation HUD panel.")
else:
    print("5. Right-hand HUD already removed.")

# 6. Insert additional landmark buildings right before section 11
section_11_marker = "    // =========================================================================\n    // 11. DENSE 4-TIER WATER PIPELINE GRID"
assert section_11_marker in text, "section_11_marker not found!"

additional_landmarks = """
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
"""

text = text.replace(section_11_marker, additional_landmarks + "\n    " + section_11_marker)
print("6. Inserted additional landmark buildings.")

# 7. Insert extended water pipes right before section 12
section_12_marker = "    // =========================================================================\n    // 12. CHỐT KHÓA NƯỚC THÔNG MINH"
assert section_12_marker in text, "section_12_marker not found!"

additional_pipes = """
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
"""

text = text.replace(section_12_marker, additional_pipes + "\n    " + section_12_marker)
print("7. Inserted extended water pipes.")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: generate_dense_viewer.py updated with all district enhancements!")
