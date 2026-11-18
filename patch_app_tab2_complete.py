# -*- coding: utf-8 -*-
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Expand closedValves and valveInfoMap if needed
if "'VALVE-12'" not in text:
    old_closed_valves = """  const [closedValves, setClosedValves] = useState({
    'VALVE-01': false,
    'VALVE-02': false,
    'VALVE-03': false,
    'VALVE-04': false,
    'VALVE-05': false,
    'VALVE-06': false,
    'VALVE-07': false,
    'VALVE-08': false
  });"""
    new_closed_valves = """  const [closedValves, setClosedValves] = useState({
    'VALVE-01': false,
    'VALVE-02': false,
    'VALVE-03': false,
    'VALVE-04': false,
    'VALVE-05': false,
    'VALVE-06': false,
    'VALVE-07': false,
    'VALVE-08': false,
    'VALVE-09': false,
    'VALVE-10': false,
    'VALVE-11': false,
    'VALVE-12': false
  });"""
    if old_closed_valves in text:
        text = text.replace(old_closed_valves, new_closed_valves)

    old_valve_map_end = """    'VALVE-08': {
      name: 'Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)',
      zone: 'Khu Đô Thị Thấp Tầng Nguyễn Thị Thập',
      affected: '150 Biệt thự Liền kề BT1 - BT6 & Trường Liên cấp Ngôi Sao',
      households: '150 căn biệt thự & 2.200 học sinh'
    }
  };"""
    new_valve_map_end = """    'VALVE-08': {
      name: 'Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)',
      zone: 'Khu Đô Thị Thấp Tầng Nguyễn Thị Thập',
      affected: '150 Biệt thự Liền kề BT1 - BT6 & Trường Liên cấp Ngôi Sao',
      households: '150 căn biệt thự & 2.200 học sinh'
    },
    'VALVE-09': {
      name: 'Chốt Khóa V-AMS-09 (Hoàng Minh Giám - Amsterdam)',
      zone: 'Cụm Giáo Dục & Bể Bơi Thi Đấu Amsterdam',
      affected: 'Trường THPT Chuyên Hà Nội - Amsterdam & Bể bơi ngầm',
      households: '3.000 học sinh & Cán bộ giáo viên'
    },
    'VALVE-10': {
      name: 'Chốt Khóa V-IMP-10 (Nguyễn Huy Tưởng - Imperia)',
      zone: 'Phân Khu Đô Thị Cao Tầng Nguyễn Huy Tưởng',
      affected: 'Tổ hợp 4 Tháp Imperia Garden (35T) & Golden West (27T)',
      households: '1.450 căn hộ cao cấp'
    },
    'VALVE-11': {
      name: 'Chốt Khóa V-NTY-11 (Nam Trung Yên - Mạc Thái Tổ)',
      zone: 'Khu Đô Thị Kiểu Mẫu Nam Trung Yên - Yên Hòa',
      affected: 'Cụm 8 Tháp Chung Cư B1 - B4 & Yên Hòa Park View',
      households: '830 căn hộ cư dân'
    },
    'VALVE-12': {
      name: 'Chốt Khóa V-VPI-12 (Trung Kính - Viện Dầu Khí)',
      zone: 'Trung Tâm Nghiên Cứu Năng Lượng & Y Tế',
      affected: 'Tháp VPI Tower (30T), Bệnh viện Thu Cúc & Viện YHCT',
      households: '45.000m² văn phòng & 750 giường bệnh'
    }
  };"""
    if old_valve_map_end in text:
        text = text.replace(old_valve_map_end, new_valve_map_end)

# 2. Add activeDropdown state if not present
if "activeDropdown" not in text:
    state_anchor = "const [gisViewMode, setGisViewMode] = useState('3d');"
    new_state = """const [gisViewMode, setGisViewMode] = useState('3d');
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.qatium-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);"""
    text = text.replace(state_anchor, new_state)

# 3. Replace Tab 2 completely with modern full-bleed Digital Twin
tab2_start = text.find("{activeTab === 'gis' && (")
tab2_end = text.find("{/* TAB 3: TELEMETRY (ÁP LỰC & LƯU LƯỢNG) */}")
if tab2_end == -1:
    tab2_end = text.find("{activeTab === 'telemetry' && (")

print(f"tab2_start: {tab2_start}, tab2_end: {tab2_end}")
assert tab2_start != -1 and tab2_end != -1, "Tab 2 markers not found!"

new_tab2_jsx = """{activeTab === 'gis' && (
            <div className="panel-card gis-full-screen-card" style={{ position: 'relative' }}>
              {/* 3D Canvas Stage */}
              <div className="map-canvas-container dark-theme" style={{ width: '100%', height: '100%', position: 'relative' }}>
                
                {/* Floating Modern Clean HUD Dropdowns (Top Left) */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  zIndex: 35,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  alignItems: 'center',
                  pointerEvents: 'auto'
                }}>
                  {/* 1. DROPDOWN: CHẾ ĐỘ */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'mode' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'mode' ? null : 'mode')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Chế độ hiển thị không gian 3D, 2D GIS hoặc X-Ray trong suốt"
                      >
                        <Compass size={13} color="#38bdf8" />
                        <span>Chế độ: {gisViewMode === '3d' ? '3D' : gisViewMode === '2d' ? '2D' : 'X-Ray'}</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'mode' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'mode' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '240px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Góc Nhìn & Không Gian
                        </div>
                        {[
                          { id: '3d', label: '3D (Digital Twin)', desc: 'Không gian 3D lập phương đô thị thực tế' },
                          { id: '2d', label: '2D (Mặt phẳng GIS)', desc: 'Góc nhìn trực diện từ trên xuống (Top-down)' },
                          { id: 'xray', label: 'X-Ray (Trong suốt công trình)', desc: 'Làm trong suốt công trình để nhìn rõ toàn bộ mạng ống ngầm' }
                        ].map(m => (
                          <div
                            key={m.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '8px 10px',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              background: gisViewMode === m.id ? 'rgba(2, 132, 199, 0.2)' : 'transparent',
                              color: gisViewMode === m.id ? '#38bdf8' : '#cbd5e1',
                              transition: 'all 0.15s ease'
                            }}
                            onClick={() => { setGisViewMode(m.id); setActiveDropdown(null); }}
                          >
                            <span style={{ fontSize: '14px' }}>{gisViewMode === m.id ? '●' : '○'}</span>
                            <div>
                              <div style={{ fontSize: '12.5px', fontWeight: 600 }}>{m.label}</div>
                              <div style={{ fontSize: '10.5px', color: '#94a3b8' }}>{m.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2. DROPDOWN: ĐƯỜNG ỐNG */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'pipes' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'pipes' ? null : 'pipes')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Bật/tắt hiển thị các cấp mạng lưới đường ống nước"
                      >
                        <Droplets size={13} color="#0284c7" />
                        <span>Đường ống ({[gisAssetsLayer.pipesPrimary, gisAssetsLayer.pipesSecondary, gisAssetsLayer.pipesService].filter(Boolean).length}/3)</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'pipes' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'pipes' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '270px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Mạng Lưới Đường Ống
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.pipesPrimary ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesPrimary: !p.pipesPrimary })); }}
                        >
                          {gisAssetsLayer.pipesPrimary ? <CheckSquare size={15} color="#0284c7" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0284c7' }}>Cấp 1 (D500 - D800)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Tuyến truyền dẫn chính từ NMN Sông Đà</div>
                          </div>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.pipesSecondary ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesSecondary: !p.pipesSecondary })); }}
                        >
                          {gisAssetsLayer.pipesSecondary ? <CheckSquare size={15} color="#f97316" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#f97316' }}>Cấp 2 (D200 - D300)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Mạch vòng phân phối liên phường</div>
                          </div>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.pipesService ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesService: !p.pipesService })); }}
                        >
                          {gisAssetsLayer.pipesService ? <CheckSquare size={15} color="#eab308" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#eab308' }}>Cấp 3 (Đấu Nối Tòa Nhà)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Nhánh dịch vụ dẫn vào chân công trình</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. DROPDOWN: THIẾT BỊ */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'devices' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'devices' ? null : 'devices')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Bật/tắt các loại thiết bị mạng lưới & quan trắc"
                      >
                        <Sliders size={13} color="#38bdf8" />
                        <span>Thiết bị ({[gisAssetsLayer.valves, gisAssetsLayer.sensors, gisAssetsLayer.hydrants, gisAssetsLayer.tanks].filter(Boolean).length}/4)</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'devices' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'devices' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '230px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Thiết bị & Quan trắc SCADA
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.valves ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, valves: !p.valves })); }}
                        >
                          {gisAssetsLayer.valves ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Van PRV & Chốt cách ly</span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.sensors ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, sensors: !p.sensors })); }}
                        >
                          {gisAssetsLayer.sensors ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Cảm biến áp & lưu lượng</span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.hydrants ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, hydrants: !p.hydrants })); }}
                        >
                          {gisAssetsLayer.hydrants ? <CheckSquare size={15} color="#ef4444" /> : <Square size={15} color="#64748b" />}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Flame size={13} color="#ef4444" />
                            <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Trụ PCCC (38 trụ)</span>
                          </div>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.tanks ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, tanks: !p.tanks })); }}
                        >
                          {gisAssetsLayer.tanks ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Đài nước & Trạm Bơm</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 4. DROPDOWN: CÔNG TRÌNH */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'buildings' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'buildings' ? null : 'buildings')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Bật/tắt hiển thị khối nhà 3D và nhãn tên đường"
                      >
                        <Building2 size={13} color="#38bdf8" />
                        <span>Công trình ({[gisAssetsLayer.buildings, gisAssetsLayer.streetLabels].filter(Boolean).length}/2)</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'buildings' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'buildings' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '220px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Địa hình & Kiến trúc
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.buildings ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, buildings: !p.buildings })); }}
                        >
                          {gisAssetsLayer.buildings ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Khối Nhà 3D</span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.streetLabels ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, streetLabels: !p.streetLabels })); }}
                        >
                          {gisAssetsLayer.streetLabels ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Tag size={13} color="#38bdf8" />
                            <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Tên đường (Maps)</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 5. DROPDOWN: CHỐT VAN PHÂN ĐOẠN TOÀN MẠNG LƯỚI */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'valves' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'valves' ? null : 'valves')}
                        style={{
                          whiteSpace: 'nowrap',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '7px',
                          fontWeight: 700,
                          fontSize: '12px',
                          color: Object.values(closedValves).some(Boolean) ? '#fca5a5' : '#86efac'
                        }}
                        title="Bảng điều khiển & giám sát toàn bộ các chốt van phân đoạn mạng lưới"
                      >
                        <span style={{ fontSize: '13px', lineHeight: 1 }}>
                          {Object.values(closedValves).some(Boolean) ? '🔴' : '🟢'}
                        </span>
                        <span>
                          Chốt Van {Object.values(closedValves).filter(Boolean).length > 0 
                            ? `(${Object.values(closedValves).filter(Boolean).length} ĐÃ ĐÓNG ⚠️)` 
                            : `(Tất cả ${Object.keys(closedValves).length} MỞ)`}
                        </span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'valves' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'valves' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '350px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '8px',
                        zIndex: 100,
                        maxHeight: '440px',
                        overflowY: 'auto'
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span>Điều Khiển Chốt Van Cô Lập</span>
                          <span style={{ color: '#94a3b8', fontSize: '10.5px' }}>{Object.keys(closedValves).length} vị trí</span>
                        </div>

                        {Object.entries(valveInfoMap).map(([vId, info]) => {
                          const isClosed = closedValves[vId];
                          return (
                            <div
                              key={vId}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '8px',
                                padding: '8px 10px',
                                borderRadius: '6px',
                                background: isClosed ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                                border: isClosed ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid rgba(255, 255, 255, 0.06)',
                                marginBottom: '5px',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                              }}
                              onClick={() => handleToggleValve(vId)}
                              title={`Click để ${isClosed ? 'MỞ lại' : 'ĐÓNG'} ${vId}`}
                            >
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <span style={{ fontSize: '13px' }}>{isClosed ? '🔒' : '🔓'}</span>
                                  <span style={{ fontSize: '12px', fontWeight: 700, color: isClosed ? '#f87171' : '#f8fafc' }}>{vId}</span>
                                  <span style={{ fontSize: '11px', color: '#cbd5e1' }}>{info.name.split('(')[1]?.replace(')', '') || info.name}</span>
                                </div>
                                <div style={{ fontSize: '10.5px', color: isClosed ? '#fca5a5' : '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {isClosed ? `⚠️ CẮT NƯỚC: ${info.affected}` : info.zone}
                                </div>
                              </div>
                              <span style={{
                                padding: '3px 8px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                fontWeight: 700,
                                background: isClosed ? '#ef4444' : '#10b981',
                                color: '#ffffff',
                                flexShrink: 0
                              }}>
                                {isClosed ? 'ĐÃ ĐÓNG' : 'MỞ'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* 6. XUẤT DỮ LIỆU GIS */}
                  <div className="qatium-hud-pill-group">
                    <button
                      className="qatium-hud-btn"
                      onClick={() => handleExportCSV('Mo_Hinh_Mang_3D_GIS.csv')}
                      title="Xuất cơ sở dữ liệu GIS thủy lực"
                      style={{ padding: '6px 12px' }}
                    >
                      <Download size={13} color="#38bdf8" />
                      <span>Xuất GIS</span>
                    </button>
                  </div>
                </div>

                {/* 3D WebGL Digital Twin (Three.js with OrbitControls) */}
                <Network3DViewer
                  theme={gisTheme}
                  heatmap={gisHeatmap}
                  viewMode={gisViewMode}
                  assetsLayer={gisAssetsLayer}
                  isolatedPipe={isolatedPipe}
                  closedValves={closedValves}
                  onToggleValve={handleToggleValve}
                  simTime={simTime}
                  currentSim={currentSim}
                  onSelectAsset={(asset) => setSelectedAsset(asset)}
                />

                {/* Qatium Asset Inspector Drawer (Right Flyout) */}
                {selectedAsset && (
                  <div className="qatium-inspector-drawer">
                    <div className="inspector-header">
                      <div className="inspector-title">
                        <Box size={16} color="#0284c7" />
                        <span>{selectedAsset.name}</span>
                      </div>
                      <button
                        className="inspector-close"
                        onClick={() => setSelectedAsset(null)}
                        aria-label="Đóng bảng tra cứu"
                      >
                        <X size={15} />
                      </button>
                    </div>

                    <div className="inspector-body">
                      <div className="inspector-section">
                        <div className="inspector-section-title">THÔNG SỐ THỦY LỰC REAL-TIME</div>
                        <div className="inspector-grid">
                          <div className="inspector-item">
                            <span className="inspector-label">Trạng thái</span>
                            <span className="inspector-val highlight-val">{selectedAsset.data?.status || 'Bình thường'}</span>
                          </div>
                          <div className="inspector-item">
                            <span className="inspector-label">Áp lực P</span>
                            <span className="inspector-val">{selectedAsset.data?.intakePressure || selectedAsset.data?.pressure || currentSim.pressure + ' bar'}</span>
                          </div>
                          <div className="inspector-item">
                            <span className="inspector-label">Lưu lượng Q</span>
                            <span className="inspector-val">{selectedAsset.data?.demandFlow || selectedAsset.data?.flow || '45.0 m³/h'}</span>
                          </div>
                          <div className="inspector-item">
                            <span className="inspector-label">DMA Quản lý</span>
                            <span className="inspector-val">{selectedAsset.data?.dma || 'DMA THNC-02'}</span>
                          </div>
                        </div>
                      </div>

                      {selectedAsset.type === 'SmartValve' && (
                        <div className="inspector-section" style={{ background: 'rgba(2, 132, 199, 0.08)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                          <div className="inspector-section-title" style={{ color: '#38bdf8' }}>ĐIỀU KHIỂN CHỐT KHÓA NƯỚC</div>
                          <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5', margin: '4px 0 10px' }}>
                            {selectedAsset.data?.zoneDescription}
                          </p>
                          <button
                            className={`btn-sm ${selectedAsset.data?.isClosed ? 'btn-primary' : 'btn-danger'}`}
                            onClick={() => handleToggleValve(selectedAsset.id)}
                            style={{ width: '100%', justifyContent: 'center', padding: '9px 12px', fontWeight: 'bold' }}
                          >
                            {selectedAsset.data?.isClosed ? '🔓 MỞ LẠI CHỐT KHÓA NƯỚC' : '🔒 ĐÓNG CHỐT VAN (CÔ LẬP SỰ CỐ)'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 24-HOUR SCADA HYDRAULIC OPERATION INTERACTIVE CHART */}
                <div className="qatium-timeline-bar" style={{
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(11, 20, 38, 0.95)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(56, 189, 248, 0.28)',
                  borderRadius: '10px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.65)'
                }}>
                  {/* Play/Pause Button */}
                  <button
                    className="timeline-play-btn"
                    onClick={() => {
                      setSimPlaying(!simPlaying);
                      showToast(simPlaying ? "Đã tạm dừng mô phỏng 24h" : "Đang chạy mô phỏng biến thiên thủy lực 24h...");
                    }}
                    title={simPlaying ? 'Tạm dừng mô phỏng' : 'Chạy mô phỏng biến thiên 24h'}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: simPlaying ? '#0284c7' : '#0369a1',
                      border: 'none',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                      boxShadow: '0 0 12px rgba(2, 132, 199, 0.45)'
                    }}
                  >
                    {simPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                  </button>

                  {/* Telemetry Metrics Badge */}
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: '180px', flexShrink: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Activity size={13} color="#38bdf8" />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.02em' }}>{currentSim.label}</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px', display: 'flex', gap: '8px' }}>
                      <span>Q = <b style={{ color: '#38bdf8' }}>{currentSim.flow} m³/h</b></span>
                      <span>·</span>
                      <span>P = <b style={{ color: '#f59e0b' }}>{currentSim.pressure} bar</b></span>
                    </div>
                  </div>

                  {/* Interactive 24-Hour Operation Chart (SVG Sparkline & Scrubber) */}
                  <div style={{ flex: 1, position: 'relative', height: '46px', display: 'flex', alignItems: 'center' }}>
                    <svg
                      viewBox="0 0 460 44"
                      style={{ width: '100%', height: '100%', overflow: 'visible', cursor: 'pointer' }}
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const pct = Math.max(0, Math.min(1, clickX / rect.width));
                        const targetHour = Math.round(pct * 23);
                        setSimTime(targetHour);
                      }}
                    >
                      <defs>
                        <linearGradient id="flowGrad24" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill for Flow Demand */}
                      <path
                        d="M 10 38 L 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34 L 450 38 Z"
                        fill="url(#flowGrad24)"
                      />

                      {/* Line for Flow Q (Cyan Blue) */}
                      <path
                        d="M 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34"
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="2.2"
                      />

                      {/* Dashed Line for Pressure P (Amber/Orange) */}
                      <path
                        d="M 10 16 Q 50 12 70 11 T 130 26 T 190 22 T 270 23 T 350 32 T 410 21 T 450 14"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.6"
                        strokeDasharray="3 3"
                        opacity="0.85"
                      />

                      {/* 24 Hourly Interactive Vertical Tick Bars */}
                      {Array.from({ length: 24 }).map((_, h) => {
                        const x = 10 + (h / 23) * 440;
                        const isCurrent = h === simTime;
                        return (
                          <g key={h}>
                            <line
                              x1={x}
                              y1={8}
                              x2={x}
                              y2={38}
                              stroke={isCurrent ? '#38bdf8' : 'rgba(255,255,255,0.08)'}
                              strokeWidth={isCurrent ? 2 : 1}
                            />
                            {h % 3 === 0 && (
                              <text
                                x={x}
                                y={43}
                                textAnchor="middle"
                                fontSize="8.5"
                                fill={isCurrent ? '#38bdf8' : '#64748b'}
                                fontWeight={isCurrent ? 'bold' : 'normal'}
                              >
                                {h}h
                              </text>
                            )}
                          </g>
                        );
                      })}

                      {/* Active Hour Glowing Cursor Pin */}
                      {(() => {
                        const curX = 10 + (simTime / 23) * 440;
                        return (
                          <g>
                            <line x1={curX} y1={2} x2={curX} y2={38} stroke="#38bdf8" strokeWidth="2.5" />
                            <circle cx={curX} cy={6} r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                          </g>
                        );
                      })()}
                    </svg>
                  </div>

                  {/* Status & Reset */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span className={`metric-badge ${
                      simTime >= 2 && simTime <= 4 ? 'badge-danger' :
                      (simTime >= 6 && simTime <= 8) || (simTime >= 18 && simTime <= 20) ? 'badge-warning' : 'badge-success'
                    }`} style={{ fontSize: '11px', padding: '4px 8px' }}>
                      {currentSim.status}
                    </span>
                    <button
                      className="btn-sm btn-secondary"
                      onClick={() => setSimTime(14)}
                      title="Đặt lại giờ mặc định (14:00)"
                      style={{ padding: '6px' }}
                    >
                      <RotateCcw size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          """

text = text[:tab2_start] + new_tab2_jsx + text[tab2_end:]

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: App.jsx patched with complete modern Tab 2!")
