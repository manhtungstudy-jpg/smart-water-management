# -*- coding: utf-8 -*-
"""
Script to apply Outer Ring Density Enhancement to Network3DViewer.jsx
Fills the 2.5km circular boundary (R = 500m - 1240m) with realistic urban buildings,
shophouse blocks, arterial roads, 4-tier water pipelines, PRV gateway stations,
hydrants, and satellite booster pump / equalization tanks.
"""

import re

with open('Network3DViewer.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. ROAD EXTENSIONS (Insert after existing roads around line 233)
road_anchor = "createRoad(-200, -540, 26, 2000, false, 'Đường Dương Đình Nghệ', true);"

road_additions = """
    // --- TRỤC ĐƯỜNG VÀNH ĐAI NGOẠI VI (OUTER RING ARTERIALS & COLLECTORS) ---
    createRoad(0, 720, 32, 2500, false, 'Đường Nguyễn Trãi (Trục Chính Đông Nam)', true);
    createRoad(-780, 200, 26, 1200, false, 'Đường Tố Hữu (Lê Văn Lương kéo dài)', true);
    createRoad(-780, 70, 24, 1200, false, 'Đường Đỗ Đức Dục - Miếu Đầm', true);
    createRoad(-850, 0, 26, 2000, true, 'Đường Sa Đôi - Lê Quang Đạo', true);
    createRoad(620, 0, 22, 2200, true, 'Trục Phố Khương Đình - Thượng Đình', true);
    createRoad(0, 560, 20, 2200, false, 'Phố Triều Khúc - Lương Thế Vinh', false);
    createRoad(200, -780, 24, 2000, false, 'Đường Tôn Thất Thuyết / Trần Thái Tông', true);
    createRoad(-440, 0, 36, 2500, true, 'Vành Đai 3 - Cầu Cạn Phạm Hùng', false);
"""

if road_anchor in code:
    code = code.replace(road_anchor, road_anchor + road_additions)
    print("✓ Added outer roads successfully.")
else:
    print("✗ Could not find road_anchor!")

# 2. OUTER RING BUILDINGS & SHOPHOUSE BLOCKS (Insert right before pipeGroup)
building_anchor = "// =========================================================================\n    // 11. DENSE 4-TIER WATER PIPELINE GRID"

outer_buildings_code = """
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

"""

if building_anchor in code:
    code = code.replace(building_anchor, outer_buildings_code + "\n    " + building_anchor)
    print("✓ Added outer buildings and shophouses successfully.")
else:
    print("✗ Could not find building_anchor!")

# 3. PIPELINE EXTENSIONS (Insert right before valveGroup)
valve_anchor = "// =========================================================================\n    // 12. CHỐT KHÓA NƯỚC THÔNG MINH"

outer_pipes_code = """
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
"""

if valve_anchor in code:
    code = code.replace(valve_anchor, outer_pipes_code + "\n    " + valve_anchor)
    print("✓ Added outer pipeline network successfully.")
else:
    print("✗ Could not find valve_anchor!")

# 4. DMA PRV GATEWAY STATIONS (Insert in valve creation)
valve_end_anchor = "    // =========================================================================\n    // 13. TRỤ CỨU HỎA PCCC"

outer_valves_code = """
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
"""

if valve_end_anchor in code:
    code = code.replace(valve_end_anchor, outer_valves_code + "\n    " + valve_end_anchor)
    print("✓ Added outer PRV gateway stations successfully.")
else:
    print("✗ Could not find valve_end_anchor!")

# 5. EXPANDED HYDRANTS ALONG OUTER ROADS
hydrant_anchor = "hydrantSpacing.forEach(h => createHydrant(h.pos, `Trụ Cứu Hỏa ${h.id}`, h.id, h.road));"

outer_hydrants_code = """
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
"""

if hydrant_anchor in code:
    code = code.replace(hydrant_anchor, hydrant_anchor + "\n" + outer_hydrants_code)
    print("✓ Added outer hydrants successfully.")
else:
    print("✗ Could not find hydrant_anchor!")

# 6. SATELLITE WATER BOOSTER PUMP & EQUALIZATION TANK (In assetsLayer.tanks)
tank_anchor = "if (assetsLayer.tanks) {"

outer_tanks_code = """
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
"""

if tank_anchor in code:
    code = code.replace(tank_anchor, outer_tanks_code)
    print("✓ Added satellite tanks successfully.")
else:
    print("✗ Could not find tank_anchor!")

with open('Network3DViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Finished updating Network3DViewer.jsx successfully!")
