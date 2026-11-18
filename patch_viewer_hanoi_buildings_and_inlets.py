# -*- coding: utf-8 -*-
"""
Script to enrich Network3DViewer.jsx with:
1. Tertiary building inlet pipes (DN65 - DN100) connecting the street grid to building bases.
2. Smart AMR Water Meters with status beacons at building intake points.
3. Realistic Hanoi urban clusters filling the internal gaps:
   - KĐT Trung Yên & Trung Hòa (VPI Tower, Trung Yên 1, 9, 11, Trần Kim Xuyến)
   - KĐT Mễ Trì Thượng & Cung Trí Thức (Viện Huyết Học, CT1, CT2, Miếu Đầm)
   - Khu Lương Thế Vinh - Triều Khúc - Phùng Khoang
   - Khu Quan Nhân - Cự Lộc - Giáp Nhất (Ven Sông Tô Lịch)
"""

with open('Network3DViewer.jsx', 'r', encoding='utf-8') as f:
    viewer_code = f.read()

# 1. ADD REALISTIC HANOI CLUSTERS TO FILL INTERNAL GAPS
hanoi_clusters_anchor = "// --- KHU VỰC PHÍA BẮC & ĐÔNG BẮC (NAM TRUNG YÊN, CẦU GIẤY, YÊN HÒA) ---"

hanoi_clusters_code = """    // =========================================================================
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

"""

if "10C. THỰC TẾ HÀ NỘI" not in viewer_code and hanoi_clusters_anchor in viewer_code:
    viewer_code = viewer_code.replace(hanoi_clusters_anchor, hanoi_clusters_code + "\n    " + hanoi_clusters_anchor, 1)
    print("✓ Added Hanoi urban clusters (Trung Yên, Mễ Trì Thượng, Quan Nhân, Cự Lộc).")

# 2. ADD BUILDING INLET FEEDER PIPES (TERTIARY D65-D100) & AMR METERS
inlet_feeder_anchor = "// =========================================================================\n    // 12. CHỐT KHÓA NƯỚC THÔNG MINH"

inlet_feeder_code = """    // =========================================================================
    // 11B. MẠNG LƯỚI ĐẤU NỐI CẤP 3 & CỤM ĐỒNG HỒ NƯỚC THÔNG MINH AMR VÀO TÒA NHÀ
    // (TCVN 33:2006: Ống nhánh DN65 - DN100 HDPE trực giao nối từ trục đường vào chân móng)
    // =========================================================================
    const buildingInletFeederList = [
      // Trục Hoàng Đạo Thúy (x = 0) cấp nước vào các tòa nhà hai bên vỉa hè
      { start: [0, 1.0, 20], end: [25, 1.0, 20], bldg: 'Tòa 34T Hoàng Đạo Thúy', id: 'INLET-34T', meter: 'AMR-34T' },
      { start: [0, 1.0, 30], end: [-35, 1.0, 30], bldg: 'Tòa 24T1 Hoàng Đạo Thúy', id: 'INLET-24T1', meter: 'AMR-24T1' },
      { start: [0, 1.0, -30], end: [-35, 1.0, -30], bldg: 'Tòa 24T2 Hoàng Đạo Thúy', id: 'INLET-24T2', meter: 'AMR-24T2' },
      { start: [0, 1.0, -85], end: [40, 1.0, -85], bldg: 'Tòa N05-29T1', id: 'INLET-N05-1', meter: 'AMR-N05-1' },
      { start: [0, 1.0, -85], end: [80, 1.0, -85], bldg: 'Tòa N05-29T2', id: 'INLET-N05-2', meter: 'AMR-N05-2' },
      { start: [0, 1.0, -140], end: [40, 1.0, -140], bldg: 'Tòa N04-A', id: 'INLET-N04-A', meter: 'AMR-N04-A' },
      { start: [0, 1.0, -140], end: [80, 1.0, -140], bldg: 'Tòa N04-B', id: 'INLET-N04-B', meter: 'AMR-N04-B' },
      
      // Trục Lê Văn Lương (z = 180) cấp nước vào Mandarin Garden & Diamond Flower
      { start: [-140, 1.0, 180], end: [-140, 1.0, 240], bldg: 'Mandarin Garden Block A', id: 'INLET-MG-A', meter: 'AMR-MG-A' },
      { start: [-90, 1.0, 180], end: [-90, 1.0, 240], bldg: 'Mandarin Garden Block B', id: 'INLET-MG-B', meter: 'AMR-MG-B' },
      { start: [-40, 1.0, 180], end: [-40, 1.0, 240], bldg: 'Mandarin Garden Block C', id: 'INLET-MG-C', meter: 'AMR-MG-C' },
      { start: [10, 1.0, 180], end: [10, 1.0, 240], bldg: 'Mandarin Garden Block D', id: 'INLET-MG-D', meter: 'AMR-MG-D' },
      { start: [460, 1.0, 180], end: [460, 1.0, 120], bldg: 'Diamond Flower Tower', id: 'INLET-DFT', meter: 'AMR-DFT' },

      // Trục Trần Duy Hưng (z = -180) cấp nước vào D'Capitale, Big C, Charmvit
      { start: [-280, 1.0, -180], end: [-280, 1.0, -210], bldg: 'Big C Thăng Long (GO!)', id: 'INLET-BIGC', meter: 'AMR-BIGC' },
      { start: [65, 1.0, -180], end: [65, 1.0, -215], bldg: 'Charmvit Grand Plaza', id: 'INLET-CHARMVIT', meter: 'AMR-CHARMVIT' },
      { start: [-320, 1.0, -180], end: [-320, 1.0, -220], bldg: 'Vinhomes D\'Capitale C1', id: 'INLET-DCAP-1', meter: 'AMR-DCAP-1' },
      { start: [-240, 1.0, -180], end: [-240, 1.0, -220], bldg: 'Vinhomes D\'Capitale C2', id: 'INLET-DCAP-2', meter: 'AMR-DCAP-2' },
      { start: [-160, 1.0, -180], end: [-160, 1.0, -220], bldg: 'Vinhomes D\'Capitale C3', id: 'INLET-DCAP-3', meter: 'AMR-DCAP-3' },

      // Trục Vành Đai 3 Phạm Hùng (x = -440) cấp nước vào Keangnam, NCC, Thăng Long No.1
      { start: [-440, 1.0, -320], end: [-540, 1.0, -320], bldg: 'Keangnam Hanoi Landmark 72', id: 'INLET-KEANGNAM-72', meter: 'AMR-KN-72' },
      { start: [-440, 1.0, -220], end: [-460, 1.0, -220], bldg: 'Handico Tower', id: 'INLET-HANDICO', meter: 'AMR-HANDICO' },
      { start: [-440, 1.0, -170], end: [-460, 1.0, -170], bldg: 'CEO Tower', id: 'INLET-CEO', meter: 'AMR-CEO' },
      { start: [-440, 1.0, 40], end: [-360, 1.0, 40], bldg: 'Thăng Long Number One A', id: 'INLET-TL1-A', meter: 'AMR-TL1-A' },
      { start: [-440, 1.0, 85], end: [-360, 1.0, 85], bldg: 'Thăng Long Number One B', id: 'INLET-TL1-B', meter: 'AMR-TL1-B' },
      { start: [-440, 1.0, 140], end: [-440, 1.0, 180], bldg: 'Trung Tâm Hội Nghị Quốc Gia', id: 'INLET-NCC', meter: 'AMR-NCC' },

      // Trục Nguyễn Trãi (z = 720) cấp nước vào Vinhomes Royal City & King Palace
      { start: [720, 1.0, 720], end: [720, 1.0, 560], bldg: 'Royal City Tháp R1 & R2', id: 'INLET-RC-1', meter: 'AMR-RC-1' },
      { start: [840, 1.0, 720], end: [840, 1.0, 560], bldg: 'Royal City Tháp R3 & R4', id: 'INLET-RC-3', meter: 'AMR-RC-3' },
      { start: [680, 1.0, 720], end: [680, 1.0, 760], bldg: 'King Palace 108 Nguyễn Trãi', id: 'INLET-KP', meter: 'AMR-KP' },
      { start: [540, 1.0, 720], end: [540, 1.0, 620], bldg: 'Golden Land Building', id: 'INLET-GL', meter: 'AMR-GL' },

      // Trục Tố Hữu (z = 200) cấp nước vào Ecolife Capitol & Roman Plaza
      { start: [-440, 1.0, 200], end: [-380, 1.0, 540], bldg: 'Ecolife Capitol Tố Hữu', id: 'INLET-ECOLIFE', meter: 'AMR-ECOLIFE' },
      { start: [-450, 1.0, 200], end: [-450, 1.0, 600], bldg: 'Roman Plaza Tháp A', id: 'INLET-ROMAN-A', meter: 'AMR-ROMAN-A' },
      { start: [-530, 1.0, 200], end: [-530, 1.0, 660], bldg: 'Roman Plaza Tháp B', id: 'INLET-ROMAN-B', meter: 'AMR-ROMAN-B' },

      // Cụm VPI Tower, Nam Trung Yên & Cung Trí Thức
      { start: [0, 1.0, -280], end: [140, 1.0, -280], bldg: 'Viện Dầu Khí Việt Nam (VPI Tower)', id: 'INLET-VPI', meter: 'AMR-VPI' },
      { start: [-180, 1.0, -420], end: [-180, 1.0, -480], bldg: 'Chung Cư Nam Trung Yên B10A', id: 'INLET-NTY-B10', meter: 'AMR-NTY-B10' },
      { start: [-440, 1.0, -240], end: [-620, 1.0, -240], bldg: 'Cung Trí Thức Hà Nội', id: 'INLET-CTT', meter: 'AMR-CTT' },
      { start: [-700, 1.0, 40], end: [-800, 1.0, 90], bldg: 'JW Marriott Hotel Hanoi', id: 'INLET-JWM', meter: 'AMR-JWM' }
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
"""

if "11B. MẠNG LƯỚI ĐẤU NỐI CẤP 3" not in viewer_code and inlet_feeder_anchor in viewer_code:
    viewer_code = viewer_code.replace(inlet_feeder_anchor, inlet_feeder_code + "\n    " + inlet_feeder_anchor, 1)
    print("✓ Added Tertiary building inlet feeder pipes and Smart AMR Meters.")

with open('Network3DViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(viewer_code)

print("Finished updating Network3DViewer.jsx.")
