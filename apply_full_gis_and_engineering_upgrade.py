# -*- coding: utf-8 -*-
"""
Script to apply comprehensive engineering and UI upgrade:
1. Full-height map canvas (calc(100vh - 65px)) eliminating empty white space.
2. Orthogonal (Manhattan grid) pipeline routing with straight pipes (replacing CatmullRom spline arcs).
3. 3D IoT SCADA Sensor Nodes module (24 nodes with glowing status, pressure, flow, chlorine).
4. Additional outer perimeter buildings, pipes, and valves to fully populate the circle.
"""

# Update App.jsx
with open('App.jsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

old_main = '<main className="content-container">'
new_main = '<main className={`content-container ${activeTab === \'gis\' ? \'gis-tab-active\' : \'\'}`}>\n          {/* Fixed height full-bleed for GIS tab */}'

if old_main in app_code:
    app_code = app_code.replace(old_main, new_main, 1)
    with open('App.jsx', 'w', encoding='utf-8') as f:
        f.write(app_code)
    print("✓ App.jsx updated with gis-tab-active class.")
else:
    print("• App.jsx already has gis-tab-active or different tag.")

# Update index.css
with open('index.css', 'r', encoding='utf-8') as f:
    css_code = f.read()

gis_css_anchor = "/* FULL-BLEED EDGE-TO-EDGE 3D DIGITAL TWIN COMMAND CENTER */"
gis_css_additions = """/* FULL-BLEED EDGE-TO-EDGE 3D DIGITAL TWIN COMMAND CENTER */
.content-container.gis-tab-active {
  padding: 0 !important;
  max-width: 100% !important;
  margin: 0 !important;
  gap: 0 !important;
  overflow: hidden !important;
  height: calc(100vh - 65px) !important;
  background: #090e1a !important;
}

.content-container.gis-tab-active .gis-full-screen-card {
  width: 100% !important;
  height: 100% !important;
  min-height: calc(100vh - 65px) !important;
  border-radius: 0 !important;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
  box-shadow: none !important;
  background: #090e1a !important;
}

.content-container.gis-tab-active .map-canvas-container {
  height: 100% !important;
  min-height: calc(100vh - 65px) !important;
  border-radius: 0 !important;
}
"""

if gis_css_anchor in css_code:
    css_code = css_code.replace(gis_css_anchor, gis_css_additions, 1)
    with open('index.css', 'w', encoding='utf-8') as f:
        f.write(css_code)
    print("✓ index.css updated with full-height GIS styles.")
else:
    css_code += "\n" + gis_css_additions
    with open('index.css', 'w', encoding='utf-8') as f:
        f.write(css_code)
    print("✓ index.css appended with full-height GIS styles.")

# Update Network3DViewer.jsx
with open('Network3DViewer.jsx', 'r', encoding='utf-8') as f:
    viewer_code = f.read()

# 1. Height calculation in useEffect
old_h = "const height = container.clientHeight || 560;"
new_h = "const height = container.clientHeight || (compact ? 440 : Math.max(760, window.innerHeight - 65));"
if old_h in viewer_code:
    viewer_code = viewer_code.replace(old_h, new_h, 1)
    print("✓ Updated height calc in Network3DViewer.jsx.")

# 2. Return container minHeight
old_ret = "minHeight: compact ? '440px' : '560px'"
new_ret = "minHeight: compact ? '440px' : 'calc(100vh - 65px)'"
if old_ret in viewer_code:
    viewer_code = viewer_code.replace(old_ret, new_ret, 1)
    print("✓ Updated return container minHeight in Network3DViewer.jsx.")

# 3. Replace CatmullRomCurve3 with Orthogonal LineCurve3 / CurvePath
old_curve = """      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, radius, 14, false);"""

new_curve = """      // THỰC TẾ CẤP THOÁT NƯỚC ĐÔ THỊ: Tuyến ống đi thẳng theo vỉa hè / tim đường, chỉ bẻ góc tại ngã ba, ngã tư
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
      const tubeGeo = new THREE.TubeGeometry(curve, segmentCount, radius, 12, false);"""

if old_curve in viewer_code:
    viewer_code = viewer_code.replace(old_curve, new_curve, 1)
    print("✓ Replaced CatmullRom splines with Orthogonal LineCurves.")
else:
    print("• Notice: CatmullRom pattern may have slight differences, checking alternative...")
    viewer_code = viewer_code.replace("const curve = new THREE.CatmullRomCurve3(points);", """let curve;
      if (points.length === 2) {
        curve = new THREE.LineCurve3(points[0], points[1]);
      } else {
        const path = new THREE.CurvePath();
        for (let i = 0; i < points.length - 1; i++) {
          path.add(new THREE.LineCurve3(points[i], points[i + 1]));
        }
        curve = path;
      }""", 1)
    viewer_code = viewer_code.replace("const tubeGeo = new THREE.TubeGeometry(curve, 64, radius, 14, false);", """const segmentCount = Math.max(16, (points.length - 1) * 16);
      const tubeGeo = new THREE.TubeGeometry(curve, segmentCount, radius, 12, false);""", 1)
    print("✓ Replaced CatmullRom splines with alternative check.")

# 4. Add IoT SCADA Sensor 3D Nodes Module
sensor_module_code = """
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
"""

if "13B. IOT SCADA SENSOR TELEMETRY NODES" not in viewer_code:
    tank_find = "if (assetsLayer.tanks) {"
    viewer_code = viewer_code.replace(tank_find, sensor_module_code + "\n    " + tank_find, 1)
    print("✓ Added 3D IoT SCADA Sensor Nodes module.")

# 5. Additional Outer Perimeter Buildings and Shophouses to fully populate the circle
extra_perimeter_code = """
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
"""

if "BỔ SUNG CÔNG TRÌNH VIỀN NGOÀI CÙNG" not in viewer_code:
    building_end = "// --- KHU VỰC PHÍA NAM & TÂY NAM (TỐ HỮU, PHÙNG KHOANG, THANH XUÂN NAM, TRIỀU KHÚC) ---"
    viewer_code = viewer_code.replace(building_end, extra_perimeter_code + "\n    " + building_end, 1)
    print("✓ Added extra perimeter buildings and shophouses.")

with open('Network3DViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(viewer_code)

print("All updates to Network3DViewer.jsx, App.jsx, and index.css completed successfully!")
