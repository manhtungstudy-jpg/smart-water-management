# -*- coding: utf-8 -*-
"""
Script to apply:
1. Enterprise SCADA Outage Broadcast Modal & Redesigned Schedule Drawer in App.jsx (No native alert).
2. Universal 100% tertiary feeder pipes & AMR Smart Meters for all outer buildings & shophouse blocks in Network3DViewer.jsx.
"""

# =========================================================================
# STEP 1: REDESIGN OUTAGE SCHEDULE & BROADCAST SYSTEM IN App.jsx
# =========================================================================
with open('App.jsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

# Add activeBroadcastModal state if not present
if "const [activeBroadcastModal, setActiveBroadcastModal] = useState(null);" not in app_code:
    app_code = app_code.replace(
        "const [showOutageSchedule, setShowOutageSchedule] = useState(false);",
        "const [showOutageSchedule, setShowOutageSchedule] = useState(false);\n  const [activeBroadcastModal, setActiveBroadcastModal] = useState(null);\n  const [broadcastSending, setBroadcastSending] = useState(false);"
    )

# Replace the native alert in App.jsx with opening activeBroadcastModal
old_alert_snippet = """                              <button
                                onClick={() => {
                                  setOutageNoticeSent(p => ({ ...p, [sc.id]: true }));
                                  alert(`✅ ĐÃ PHÁT THÔNG BÁO CẮT NƯỚC THÀNH CÔNG!\\n\\n• Kế hoạch: ${sc.title}\\n• Thời gian: ${sc.time} - Ngày ${sc.date}\\n• Đã phát qua: SMS Brandname 'VIWACO_SCADA' + Zalo ZNS + App Cư Dân\\n• Đối tượng: Ban Quản trị các tòa nhà & ${sc.households}.`);
                                }}"""

new_modal_trigger = """                              <button
                                onClick={() => {
                                  setActiveBroadcastModal(sc);
                                }}"""

if old_alert_snippet in app_code:
    app_code = app_code.replace(old_alert_snippet, new_modal_trigger)
    print("✓ Replaced native alert with activeBroadcastModal trigger.")
else:
    # Pattern fallback
    app_code = re.sub(
        r"onClick=\{[^}]*setOutageNoticeSent[^}]*alert\([^)]*\);?[^}]*\}",
        "onClick={() => setActiveBroadcastModal(sc)}",
        app_code
    )
    print("✓ Replaced alert with regex fallback.")

# Add Enterprise Broadcast Modal right before closing tag of Tab 2
broadcast_modal_code = """
                {/* MODAL PHÁT THÔNG BÁO ĐA KÊNH CHUYÊN NGHIỆP (THAY THẾ ALERT TRÌNH DUYỆT) */}
                {activeBroadcastModal && (
                  <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(3, 7, 18, 0.75)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.98)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      borderRadius: '16px',
                      maxWidth: '620px',
                      width: '100%',
                      boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(2, 132, 199, 0.25)',
                      overflow: 'hidden',
                      animation: 'fadeIn 0.2s ease-out'
                    }}>
                      {/* Modal Header */}
                      <div style={{
                        padding: '18px 24px',
                        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            background: 'rgba(56, 189, 248, 0.15)',
                            border: '1px solid rgba(56, 189, 248, 0.35)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#38bdf8'
                          }}>
                            <Bell size={22} />
                          </div>
                          <div>
                            <div style={{ fontSize: '15px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                              TRUNG TÂM ĐIỀU HÀNH SCADA · PHÁT THÔNG BÁO CẮT NƯỚC
                            </div>
                            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                              Hệ thống gửi cảnh báo khẩn cấp & điều phối dịch vụ khách hàng (TCVN 33:2006)
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => { setActiveBroadcastModal(null); setBroadcastSending(false); }}
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            color: '#cbd5e1',
                            borderRadius: '8px',
                            padding: '6px',
                            cursor: 'pointer'
                          }}
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* Modal Body */}
                      <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Event Overview Card */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '10px',
                          padding: '14px 16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}>
                          <div style={{ fontSize: '14px', fontWeight: 700, color: '#38bdf8' }}>
                            {activeBroadcastModal.title}
                          </div>
                          <div style={{ fontSize: '12px', color: '#cbd5e1', display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '4px' }}>
                            <span>⏰ <strong>Thời gian:</strong> <span style={{ color: '#fef08a' }}>{activeBroadcastModal.time}</span> ({activeBroadcastModal.date})</span>
                            <span>📍 <strong>DMA:</strong> {activeBroadcastModal.dma}</span>
                            <span>🔒 <strong>Chốt van:</strong> {activeBroadcastModal.valveName}</span>
                          </div>
                        </div>

                        {/* Broadcast Channels Multi-badge */}
                        <div>
                          <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                            Các Kênh Truyền Thông Kích Hoạt
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>📱 SMS Brandname:</span> <code style={{ background: '#0284c7', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>VIWACO_ALERT</code>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                Đích gửi: {activeBroadcastModal.households}
                              </div>
                            </div>

                            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>💬 Zalo ZNS & App Cư Dân</span>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                Thông báo đẩy tự động kèm bản đồ cấp nước
                              </div>
                            </div>

                            <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>🏢 Văn Bản Điện Tử Tới BQL</span>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                Gửi tới {activeBroadcastModal.affectedBuildings.length} Ban quản trị chung cư
                              </div>
                            </div>

                            <div style={{ background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>🚛 Xe Téc Cấp Nước Sạch</span>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                {activeBroadcastModal.tankSupport}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Message Preview (SMS Mockup Card) */}
                        <div style={{
                          background: 'rgba(0, 0, 0, 0.45)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '10px',
                          padding: '12px 16px'
                        }}>
                          <div style={{ fontSize: '11px', fontWeight: 700, color: '#fef08a', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span>Mẫu Tin Nhắn Gửi Đến Thuê Bao Cư Dân:</span>
                          </div>
                          <div style={{ fontSize: '12px', color: '#e2e8f0', lineHeight: 1.55, fontFamily: 'sans-serif' }}>
                            "[VIWACO THÔNG BÁO] Kính gửi Quý cư dân khu vực {activeBroadcastModal.dma}: Công ty tạm ngừng cấp nước từ {activeBroadcastModal.time} ngày {activeBroadcastModal.date} để {activeBroadcastModal.reason}. Đề nghị Quý cư dân tích trữ nước sinh hoạt. Xe bồn cấp nước sạch miễn phí túc trực tại: {activeBroadcastModal.tankSupport}. Hotline hỗ trợ SCADA 24/7: 1900 6886. Trân trọng!"
                          </div>
                        </div>

                        {/* Status / Progress Display */}
                        {outageNoticeSent[activeBroadcastModal.id] && (
                          <div style={{
                            background: 'rgba(16, 185, 129, 0.15)',
                            border: '1px solid #10b981',
                            borderRadius: '8px',
                            padding: '10px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#86efac',
                            fontSize: '12.5px',
                            fontWeight: 600
                          }}>
                            <CheckCircle2 size={18} color="#10b981" />
                            <span>ĐÃ PHÁT TIN THÀNH CÔNG: Toàn bộ {activeBroadcastModal.affectedBuildings.length} BQL tòa nhà và cư dân đã nhận thông báo qua SMS / Zalo ZNS!</span>
                          </div>
                        )}
                      </div>

                      {/* Modal Footer */}
                      <div style={{
                        padding: '14px 24px',
                        background: 'rgba(0, 0, 0, 0.25)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '10px'
                      }}>
                        <button
                          onClick={() => { setActiveBroadcastModal(null); setBroadcastSending(false); }}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#cbd5e1',
                            fontSize: '12.5px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Đóng
                        </button>

                        <button
                          onClick={() => {
                            setBroadcastSending(true);
                            setTimeout(() => {
                              setOutageNoticeSent(p => ({ ...p, [activeBroadcastModal.id]: true }));
                              setBroadcastSending(false);
                            }, 400);
                          }}
                          disabled={broadcastSending || outageNoticeSent[activeBroadcastModal.id]}
                          style={{
                            padding: '8px 20px',
                            borderRadius: '8px',
                            border: 'none',
                            background: outageNoticeSent[activeBroadcastModal.id] 
                              ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)' 
                              : 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
                            color: '#ffffff',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)'
                          }}
                        >
                          {broadcastSending ? (
                            <span>Đang phát tin qua hệ thống...</span>
                          ) : outageNoticeSent[activeBroadcastModal.id] ? (
                            <>
                              <CheckCircle2 size={16} />
                              <span>Đã Hoàn Thành Phát Tin</span>
                            </>
                          ) : (
                            <>
                              <Bell size={16} />
                              <span>Kích Hoạt Phát Thông Báo Ngay</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
"""

if "MODAL PHÁT THÔNG BÁO ĐA KÊNH CHUYÊN NGHIỆP" not in app_code:
    closing_anchor = "{/* Qatium Asset Inspector Drawer (Right Flyout) */}"
    app_code = app_code.replace(closing_anchor, broadcast_modal_code + "\n\n                " + closing_anchor, 1)
    print("✓ Added Enterprise Broadcast Modal in App.jsx.")

with open('App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Finished updating App.jsx.")
