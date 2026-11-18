import sys

# =============================================================================
# STEP 1: UPDATE generate_dense_viewer.py
# =============================================================================
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    text = f.read()

# 1.1 Update createStreetLabel to measure text width and avoid overflow
old_street_label = """    const createStreetLabel = (text, pos, width = 50, height = 12.5, isMajor = true) => {
      if (!assetsLayer.streetLabels) return null;

      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');

      const r = 26;
      const x = 10, y = 12, w = 492, h = 104;
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
      ctx.font = `bold ${isMajor ? '32px' : '28px'} -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText(text, 114, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;

      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(pos[0], pos[1] + 16, pos[2]);
      sprite.scale.set(width, height, 1);
      labelGroup.add(sprite);
      return sprite;
    };"""

new_street_label = """    const createStreetLabel = (text, pos, width = 50, height = 12.5, isMajor = true) => {
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
    };"""

assert old_street_label in text, "old_street_label not found!"
text = text.replace(old_street_label, new_street_label)
print("1. Updated createStreetLabel with dynamic measurement (Zero overflow).")

# 1.2 Update createSmartValve with PURE BLACK (#000000, 900)
old_valve_badge = """      // Floating 3D Badge with high-contrast BLACK text (Width 540, fits all text without overflow)
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

new_valve_badge = """      // Floating 3D Badge with PURE BLACK (#000000, 900) high-visibility text
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
      vGroup.add(sprite);"""

assert old_valve_badge in text, "old_valve_badge not found!"
text = text.replace(old_valve_badge, new_valve_badge)
print("2. Updated createSmartValve with pure black #000000 (900 weight).")

# 1.3 Add dense filling buildings, institutional campuses, and shophouses
fill_buildings_marker = "// --- 17. GÓC ĐÔNG NAM: ĐẠI ĐÔ THỊ VINHOMES ROYAL CITY & GOLDEN LAND ---"
assert fill_buildings_marker in text, "fill_buildings_marker not found!"

fill_buildings_code = """
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
    createShophouseBlock([360, 0, -80], [10, 4], [10, 14, 10], 5, false, { cutOffValveName: 'Van V-TDN-04', blockName: 'Khu Dân Cư Phố Trung Kính - Trần Duy Hưng' });
    createShophouseBlock([460, 0, 180], [8, 4], [10, 14, 10], 5, false, { cutOffValveName: 'Van V-LVL-03', blockName: 'Khu Phân Lô Phố Vũ Trọng Phụng Mở Rộng' });
    createShophouseBlock([-360, 0, -100], [6, 4], [10, 14, 10], 4, false, { cutOffValveName: 'Van V-DCP-05', blockName: 'Khu Liền Kề Biệt Thự Mễ Trì Hạ' });
    createShophouseBlock([100, 0, -420], [8, 4], [10, 14, 10], 5, false, { cutOffValveName: 'Van V-TDN-04', blockName: 'Khu Đô Thị Phố Hạ Yên' });
"""

text = text.replace(fill_buildings_marker, fill_buildings_code + "\n    " + fill_buildings_marker)
print("3. Inserted filling buildings, campuses, and shophouse blocks across empty sectors.")

# 1.4 Add extended pipelines for the new sectors
pipe_fill_marker = "// --- CÁC TUYẾN ỐNG MỞ RỘNG KẾT NỐI 4 PHÂN KHU NGOẠI VI (R = 1,100M) ---"
assert pipe_fill_marker in text, "pipe_fill_marker not found!"

extended_fill_pipes = """
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
"""

text = text.replace(pipe_fill_marker, extended_fill_pipes + "\n    " + pipe_fill_marker)
print("4. Inserted extended pipelines across the district.")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: generate_dense_viewer.py updated!")
