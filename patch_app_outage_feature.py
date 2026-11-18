# -*- coding: utf-8 -*-
"""
Script to apply Outage Management Schedule & Broadcast System,
Complete Tertiary (Level 3) Building Inlets with AMR Smart Meters,
and fill all remaining sparse areas according to real Hanoi geography.
"""

import re

# =========================================================================
# PART 1: UPDATE App.jsx WITH OUTAGE MANAGEMENT MODAL & HUD BUTTON
# =========================================================================
with open('App.jsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

# Add states in App component
state_anchor = "const [searchQuery, setSearchQuery] = useState('');"
state_additions = """const [searchQuery, setSearchQuery] = useState('');
  const [showOutageSchedule, setShowOutageSchedule] = useState(false);
  const [outageNoticeSent, setOutageNoticeSent] = useState({});
  const [outageSchedules, setOutageSchedules] = useState([
    {
      id: 'OUT-2026-11-01',
      title: 'Bảo trì & Súc xả Định kỳ Tuyến D600 Lê Văn Lương',
      time: '00:00 - 05:00 (Đêm Mai)',
      date: '19/11/2026',
      dma: 'DMA THNC-02 & THNC-03',
      valveId: 'V-LVL-03',
      valveName: 'Van Cổng Cấp 2 V-LVL-03',
      reason: 'Súc xả bùn cặn tuyến D600 & thay thế đồng hồ điện từ AMR DN300',
      affectedBuildings: [
        'Mandarin Garden (Tháp A, B, C, D)',
        'Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy',
        'Cụm Căn Hộ N04 (A, B, C) & N05 (34T1, 34T2)',
        'Dãy Shophouse Hoàng Ngân - Lê Văn Lương',
        'Tổ Hợp Diamond Flower Tower (36T)'
      ],
      households: '8.450 hộ dân & 32 đơn vị thương mại',
      tankSupport: 'Xe téc 12m³ túc trực tại cổng Mandarin Garden & 34T HDT',
      status: 'Đã lên lịch (Chờ phát tin)'
    },
    {
      id: 'OUT-2026-11-02',
      title: 'Đấu nối Mạng lưới Cấp nước KĐT Nam Trung Yên',
      time: '23:30 - 04:30 (Thứ Bảy)',
      date: '21/11/2026',
      dma: 'DMA Nam Trung Yên',
      valveId: 'V-NTY-02',
      valveName: 'Van Phân Đoạn V-NTY-02',
      reason: 'Đấu nối hoàn thiện tuyến ống D300 HDPE dự án phát triển đô thị mới',
      affectedBuildings: [
        'Chung Cư Nam Trung Yên B10A & B10B (30T)',
        'Chung Cư Nam Trung Yên B11A & B11B (32T)',
        'Tổ Hợp Căn Hộ A10 & A14 Nam Trung Yên',
        'Tòa Tháp Tài Chính PVI Tower (26T)',
        'Khu Shophouse Phố Mạc Thái Tổ & Hạ Yên'
      ],
      households: '6.280 hộ dân & 18 khối cơ quan',
      tankSupport: 'Trạm cấp nước dã chiến tại Công viên Nam Trung Yên',
      status: 'Đã lên lịch (Chờ phát tin)'
    },
    {
      id: 'OUT-2026-11-03',
      title: 'Kiểm định Van Giảm Áp PRV & Nguồn Nước Sông Đà',
      time: '01:00 - 05:00 (Chủ Nhật)',
      date: '22/11/2026',
      dma: 'DMA Cụm D\'Capitale - Mễ Trì',
      valveId: 'V-DCP-05',
      valveName: 'Van Khống Chế V-DCP-05',
      reason: 'Bảo dưỡng trạm van giảm áp PRV-GATE-WEST & cân chỉnh áp lực',
      affectedBuildings: [
        'Tổ Hợp Vinhomes D\'Capitale (Tháp C1, C2, C3, C4, C5, C6)',
        'Đại Siêu Thị Big C Thăng Long (GO!)',
        'Tòa Tháp CEO Tower & Handico Tower (33T)',
        'Khu Biệt Thự Liền Kề Mễ Trì Hạ'
      ],
      households: '9.820 hộ dân & TTTM Vincom Mega Mall',
      tankSupport: 'Cấp nước từ Bể chứa điều hòa Mễ Trì (12.000 m³)',
      status: 'Đã lên lịch (Chờ phát tin)'
    }
  ]);"""

if state_anchor in app_code and "showOutageSchedule" not in app_code:
    app_code = app_code.replace(state_anchor, state_additions, 1)
    print("✓ Added Outage Management state in App.jsx.")

# Add Outage Schedule HUD Button next to Export GIS
hud_btn_anchor = """                  {/* 6. XUẤT DỮ LIỆU GIS */}
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
                  </div>"""

hud_btn_new = """                  {/* 6. XUẤT DỮ LIỆU GIS */}
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

                  {/* 7. NÚT CHỨC NĂNG: LỊCH CẮT NƯỚC & THÔNG BÁO TÒA NHÀ BỊ ẢNH HƯỞNG */}
                  <div className="qatium-hud-pill-group">
                    <button
                      className={`qatium-hud-btn ${showOutageSchedule ? 'active' : ''}`}
                      onClick={() => setShowOutageSchedule(!showOutageSchedule)}
                      title="Xem lịch cắt nước định kỳ/khẩn cấp & phát thông báo tới các tòa nhà bị ảnh hưởng"
                      style={{
                        padding: '6px 14px',
                        background: showOutageSchedule ? 'rgba(239, 68, 68, 0.28)' : 'rgba(11, 20, 38, 0.92)',
                        borderColor: showOutageSchedule ? '#ef4444' : 'rgba(56, 189, 248, 0.35)',
                        color: showOutageSchedule ? '#fca5a5' : '#38bdf8',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Calendar size={13} color={showOutageSchedule ? '#ef4444' : '#38bdf8'} />
                      <span>Lịch Cắt Nước & Thông Báo</span>
                      <span style={{
                        background: '#ef4444',
                        color: '#ffffff',
                        fontSize: '10px',
                        fontWeight: 800,
                        padding: '1px 6px',
                        borderRadius: '10px',
                        marginLeft: '3px'
                      }}>
                        {outageSchedules.length}
                      </span>
                    </button>
                  </div>"""

if hud_btn_anchor in app_code:
    app_code = app_code.replace(hud_btn_anchor, hud_btn_new, 1)
    print("✓ Added Outage Schedule HUD button in App.jsx.")

# Add Outage Management Modal right before closing tag of Tab 2
modal_anchor = "{/* Qatium Asset Inspector Drawer (Right Flyout) */}"
modal_code = """{/* MODAL: BẢNG ĐIỀU HÀNH LỊCH CẮT NƯỚC & PHÁT THÔNG BÁO ĐÔ THỊ */}
                {showOutageSchedule && (
                  <div style={{
                    position: 'absolute',
                    top: '64px',
                    right: '18px',
                    width: '460px',
                    maxHeight: 'calc(100vh - 160px)',
                    background: 'rgba(11, 20, 38, 0.96)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    borderRadius: '12px',
                    boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(239, 68, 68, 0.25)',
                    zIndex: 60,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.25s ease'
                  }}>
                    {/* Header */}
                    <div style={{
                      padding: '14px 18px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      borderBottom: '1px solid rgba(239, 68, 68, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={18} color="#ef4444" />
                        <div>
                          <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#f8fafc' }}>
                            Lịch Cắt Nước & Điều Phối Đô Thị
                          </div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                            Thông báo BQL Tòa Nhà & Cư Dân (TCVN 33:2006)
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowOutageSchedule(false)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#94a3b8',
                          cursor: 'pointer',
                          padding: '4px',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Schedule List */}
                    <div style={{ padding: '14px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {outageSchedules.map((sc, idx) => {
                        const isNotified = outageNoticeSent[sc.id];
                        const isSimulating = closedValves[sc.valveId];

                        return (
                          <div key={sc.id} style={{
                            background: isSimulating ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                            border: `1px solid ${isSimulating ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                            borderRadius: '8px',
                            padding: '12px 14px'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
                              <div style={{ fontWeight: 700, fontSize: '13px', color: '#f8fafc' }}>
                                #{idx + 1}. {sc.title}
                              </div>
                              <span style={{
                                fontSize: '10.5px',
                                fontWeight: 700,
                                padding: '2px 8px',
                                borderRadius: '6px',
                                background: isSimulating ? '#ef4444' : 'rgba(56, 189, 248, 0.15)',
                                color: isSimulating ? '#ffffff' : '#38bdf8',
                                whiteSpace: 'nowrap'
                              }}>
                                {isSimulating ? '⚠️ ĐANG MÔ PHỎNG' : sc.date}
                              </span>
                            </div>

                            <div style={{ fontSize: '11.5px', color: '#cbd5e1', marginBottom: '6px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                              <div>⏰ <strong>Thời gian:</strong> <span style={{ color: '#fef08a' }}>{sc.time}</span></div>
                              <div>📍 <strong>Phân vùng:</strong> {sc.dma} (Chốt khóa: <span style={{ color: '#38bdf8' }}>{sc.valveName}</span>)</div>
                              <div>🔧 <strong>Nhiệm vụ:</strong> {sc.reason}</div>
                            </div>

                            {/* Danh sách tòa nhà bị ảnh hưởng */}
                            <div style={{
                              background: 'rgba(0, 0, 0, 0.35)',
                              borderRadius: '6px',
                              padding: '8px 10px',
                              marginTop: '8px',
                              marginBottom: '10px'
                            }}>
                              <div style={{ fontSize: '11px', fontWeight: 700, color: '#fca5a5', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <AlertTriangle size={12} color="#ef4444" />
                                <span>Tòa nhà bị mất nước ({sc.affectedBuildings.length} tòa · {sc.households}):</span>
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                {sc.affectedBuildings.map((bName, bIdx) => (
                                  <div key={bIdx} style={{ fontSize: '11px', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <span style={{ color: '#ef4444', fontSize: '10px' }}>●</span>
                                    <span>{bName}</span>
                                  </div>
                                ))}
                              </div>
                              <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: '6px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '4px' }}>
                                🚛 <strong>Hỗ trợ cấp nước:</strong> {sc.tankSupport}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button
                                onClick={() => handleToggleValve(sc.valveId)}
                                style={{
                                  flex: 1,
                                  padding: '7px 10px',
                                  fontSize: '11.5px',
                                  fontWeight: 700,
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  border: 'none',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '6px',
                                  background: isSimulating ? '#ef4444' : '#0284c7',
                                  color: '#ffffff',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                {isSimulating ? (
                                  <>
                                    <span>Mở Lại Van</span>
                                  </>
                                ) : (
                                  <>
                                    <Eye size={13} />
                                    <span>Mô Phỏng Cắt Nước 3D</span>
                                  </>
                                )}
                              </button>

                              <button
                                onClick={() => {
                                  setOutageNoticeSent(p => ({ ...p, [sc.id]: true }));
                                  alert(`✅ ĐÃ PHÁT THÔNG BÁO CẮT NƯỚC THÀNH CÔNG!\\n\\n• Kế hoạch: ${sc.title}\\n• Thời gian: ${sc.time} - Ngày ${sc.date}\\n• Đã phát qua: SMS Brandname 'VIWACO_SCADA' + Zalo ZNS + App Cư Dân\\n• Đối tượng: Ban Quản trị các tòa nhà & ${sc.households}.`);
                                }}
                                style={{
                                  padding: '7px 12px',
                                  fontSize: '11.5px',
                                  fontWeight: 700,
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  border: '1px solid rgba(56, 189, 248, 0.4)',
                                  background: isNotified ? 'rgba(16, 185, 129, 0.2)' : 'rgba(2, 132, 199, 0.15)',
                                  color: isNotified ? '#86efac' : '#38bdf8',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '5px'
                                }}
                                title="Phát tin thông báo khẩn cấp tới BQL và cư dân"
                              >
                                <CheckCircle2 size={13} color={isNotified ? '#10b981' : '#38bdf8'} />
                                <span>{isNotified ? 'Đã Phát Tin' : 'Phát Thông Báo'}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Qatium Asset Inspector Drawer (Right Flyout) */}"""

if modal_anchor in app_code and "showOutageSchedule && (" not in app_code:
    app_code = app_code.replace(modal_anchor, modal_code, 1)
    print("✓ Added Outage Management Modal in App.jsx.")

with open('App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Finished updating App.jsx.")
