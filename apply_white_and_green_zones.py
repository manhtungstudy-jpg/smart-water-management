# -*- coding: utf-8 -*-
"""
Script to apply precise updates based on user's annotated map (fdsasf.png):
1. WHITE ZONES (5 zones): Add dense orthogonal secondary & tertiary pipelines (D150-D300)
   connecting all existing buildings in:
   - Zone 1: West/North-West (Keangnam, The Manor, Sudico, West Point, Golden Palace)
   - Zone 2: North/North-East (Nam Trung Yên, Big C, Charmvit, Home City, PVI, N04, N05)
   - Zone 3: South-West (Ecolife, Roman Plaza, Mỗ Lao, The Pride)
   - Zone 4: South (Nguyễn Trãi, Phùng Khoang, Thanh Xuân Nam, Triều Khúc)
   - Zone 5: South-East (Royal City, King Palace, Golden Land, Khương Đình)
2. GREEN ZONES (4 zones): Add realistic Hanoi buildings, shophouses, and complete water infrastructure:
   - Green 1: North Peak (Duy Tân tech hub, Cầu Giấy admin cluster, Cầu Giấy park & lake)
   - Green 2: West Rim (Phú Đô F1 village, Mễ Trì Thượng extension, Sa Đôi sports complex)
   - Green 3: East Rim (Láng Hạ - Huỳnh Thúc Kháng ext, Đầm Hồng lake, Khương Trung - Khương Đình)
   - Green 4: South Base (Nguyễn Xiển Vành Đai 3 Nam, Eco Green City, Đại Kim, Triều Khúc lake)
"""

with open('Network3DViewer.jsx', 'r', encoding='utf-8') as f:
    viewer_code = f.read()

# =========================================================================
# PART 1: GREEN ZONES BUILDINGS (Insert before pipeGroup)
# =========================================================================
bldg_anchor = "// =========================================================================\n    // 11. DENSE 4-TIER WATER PIPELINE GRID"

green_buildings_code = """    // =========================================================================
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

"""

if "10D. CÁC CỤM ĐÔ THỊ MỚI LẤP ĐẦY 4 VÙNG GREEN" not in viewer_code and bldg_anchor in viewer_code:
    viewer_code = viewer_code.replace(bldg_anchor, green_buildings_code + "\n    " + bldg_anchor, 1)
    print("✓ Added Green Zones buildings and shophouses.")

# =========================================================================
# PART 2: DENSE PIPELINES FOR ALL 5 WHITE ZONES & 4 GREEN ZONES
# =========================================================================
pipe_anchor = "// =========================================================================\n    // 12. CHỐT KHÓA NƯỚC THÔNG MINH"

dense_pipe_networks_code = """    // =========================================================================
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
"""

if "11C. MẠNG LƯỚI ĐƯỜNG ỐNG PHÂN PHỐI CẤP 2 & CẤP 3 DÀY ĐẶC" not in viewer_code and pipe_anchor in viewer_code:
    viewer_code = viewer_code.replace(pipe_anchor, dense_pipe_networks_code + "\n    " + pipe_anchor, 1)
    print("✓ Added dense pipeline networks for all 5 White Zones & 4 Green Zones.")

# =========================================================================
# PART 3: ADDITIONAL VALVES & SENSORS FOR GREEN ZONES
# =========================================================================
valves_anchor = "// =========================================================================\n    // 13. TRỤ CỨU HỎA PCCC"

green_valves_code = """    // --- CHỐT KHÓA VAN PHÂN VÙNG VÀ CẢM BIẾN MỚI CHO 4 VÙNG GREEN ---
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
"""

if "VALVE-G1-NORTH" not in viewer_code and valves_anchor in viewer_code:
    viewer_code = viewer_code.replace(valves_anchor, green_valves_code + "\n    " + valves_anchor, 1)
    print("✓ Added Smart Valves for Green Zones.")

# =========================================================================
# PART 4: ADD FEEDER INLETS FOR ALL GREEN ZONE BUILDINGS & SHOPHOUSES
# =========================================================================
inlet_list_anchor = "buildingInletFeederList = ["
green_inlets_code = """buildingInletFeederList = [
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
      { start: [320, 1.0, 1080], end: [320, 1.0, 1040], bldg: 'Kim Giang Cửa Ngõ Nam KDC', id: 'INLET-KG-CN', meter: 'AMR-KG-CN' },"""

if "ĐẤU NỐI CẤP 3 VÙNG GREEN 1" not in viewer_code and inlet_list_anchor in viewer_code:
    viewer_code = viewer_code.replace(inlet_list_anchor, green_inlets_code + "\n", 1)
    print("✓ Added Tertiary Inlets & AMR Meters for Green Zones.")

with open('Network3DViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(viewer_code)

print("Finished applying White & Green zones upgrade!")
