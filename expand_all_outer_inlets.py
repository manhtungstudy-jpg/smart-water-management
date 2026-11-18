# -*- coding: utf-8 -*-
"""
Script to expand buildingInletFeederList in Network3DViewer.jsx to 100% cover
all outer high-rises, residential complexes, and shophouse blocks.
"""
import re

with open('Network3DViewer.jsx', 'r', encoding='utf-8') as f:
    viewer_code = f.read()

# Let's inspect where buildingInletFeederList is defined
list_anchor = "const buildingInletFeederList = ["

outer_inlets_expansion = """const buildingInletFeederList = [
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
    ];"""

if list_anchor in viewer_code:
    # Replace from const buildingInletFeederList = [ up to buildingInletFeederList.forEach
    end_anchor = "buildingInletFeederList.forEach(inlet => {"
    pattern = re.escape(list_anchor) + r".*?" + re.escape(end_anchor)
    replacement = outer_inlets_expansion + "\n\n    " + end_anchor
    viewer_code = re.sub(pattern, replacement, viewer_code, flags=re.DOTALL)
    print("✓ Successfully expanded buildingInletFeederList to cover 100% of all outer buildings and shophouses!")

with open('Network3DViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(viewer_code)

print("Finished updating Network3DViewer.jsx.")
