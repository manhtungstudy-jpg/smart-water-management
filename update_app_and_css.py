import sys

# 1. UPDATE App.jsx
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1.1 Expand closedValves and valveInfoMap
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

assert old_closed_valves in text, "old_closed_valves not found"
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

assert old_valve_map_end in text, "old_valve_map_end not found"
text = text.replace(old_valve_map_end, new_valve_map_end)
print("1.1 Expanded closedValves and valveInfoMap to 12 valves.")

# 1.2 Convert VALVE-08 quick chip to Dropdown 'Chốt Van'
old_valve_chip = """                  {/* 5. VALVE-08 QUICK STATUS CHIP */}
                  <div
                    className="qatium-hud-pill-group"
                    style={{
                      padding: '5px 12px',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      color: '#cbd5e1'
                    }}
                    onClick={() => handleToggleValve('VALVE-08')}
                    title="Click để mô phỏng đóng/mở chốt van VALVE-08"
                  >
                    <span style={{ color: closedValves['VALVE-08'] ? '#ef4444' : '#10b981', fontSize: '14px', lineHeight: 1 }}>●</span>
                    <span style={{ color: '#ffffff', letterSpacing: '0.02em' }}>VALVE-08: {closedValves['VALVE-08'] ? 'ĐÃ ĐÓNG' : 'MỞ'}</span>
                    <span style={{ fontSize: '11px' }}>{closedValves['VALVE-08'] ? '🔒' : '🔓'}</span>
                  </div>"""

new_valve_dropdown = """                  {/* 5. DROPDOWN: CHỐT VAN PHÂN ĐOẠN TOÀN MẠNG LƯỚI */}
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
                  </div>"""

assert old_valve_chip in text, "old_valve_chip not found"
text = text.replace(old_valve_chip, new_valve_dropdown)
print("1.2 Converted VALVE-08 chip to Dropdown 'Chốt Van' for all valves.")

# 1.3 Add full-bleed class to Tab 2 panel-card
old_tab2_card = """          {/* TAB 2: 3D DIGITAL TWIN NETWORK (QATIUM REFERENCE) */}
          {activeTab === 'gis' && (
            <div className="panel-card" style={{ position: 'relative' }}>"""

new_tab2_card = """          {/* TAB 2: 3D DIGITAL TWIN NETWORK (FULL-BLEED QATIUM DIGITAL TWIN) */}
          {activeTab === 'gis' && (
            <div className="panel-card gis-full-screen-card" style={{ position: 'relative' }}>"""

assert old_tab2_card in text, "old_tab2_card not found"
text = text.replace(old_tab2_card, new_tab2_card)
print("1.3 Wrapped Tab 2 in full-bleed gis-full-screen-card.")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

# 2. UPDATE index.css FOR FULL-BLEED 3D VIEWER
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\index.css', 'r', encoding='utf-8') as f:
    css = f.read()

full_bleed_css = """
/* FULL-BLEED EDGE-TO-EDGE 3D DIGITAL TWIN COMMAND CENTER */
.content-container:has(.gis-full-screen-card) {
  padding: 0 !important;
  max-width: 100% !important;
  margin: 0 !important;
  gap: 0 !important;
  overflow: hidden;
  height: calc(100vh - 65px);
}

.gis-full-screen-card {
  width: 100% !important;
  height: 100% !important;
  min-height: calc(100vh - 65px) !important;
  border-radius: 0 !important;
  border: none !important;
  box-shadow: none !important;
  background: #0b1528 !important;
  margin: 0 !important;
}

.gis-full-screen-card .panel-card-header {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(11, 20, 38, 0.92);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 8px;
  z-index: 40;
  padding: 6px 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 12px;
}

.gis-full-screen-card .panel-card-header .panel-card-title span {
  color: #f8fafc;
  font-size: 13px;
  font-weight: 700;
}

.gis-full-screen-card .panel-card-header span:not(.panel-card-title span) {
  display: none;
}
"""

if "gis-full-screen-card" not in css:
    css += full_bleed_css
    with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\index.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("2. Added full-bleed CSS styles.")
else:
    print("2. Full-bleed CSS already exists.")

print("SUCCESS: App.jsx and index.css updated successfully!")
