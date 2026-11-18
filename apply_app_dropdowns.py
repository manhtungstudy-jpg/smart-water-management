# -*- coding: utf-8 -*-
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Add icons to lucide-react import
import_patch = """  Compass,
  Eye,
  Box,
  Maximize2,
  Info,
  Flame,
  Tag,
  ChevronDown,
  Check,
  CheckSquare,
  Square,
  Circle,
  Disc"""

code = code.replace(
    """  Compass,
  Eye,
  Box,
  Maximize2,
  Info,
  Flame,
  Tag""",
    import_patch
)

# 2. Add activeDropdown state and click-outside handler
state_anchor = "  const [gisViewMode, setGisViewMode] = useState('3d'); // '3d' | '2d'"
new_state = """  const [gisViewMode, setGisViewMode] = useState('3d'); // '3d' | '2d' | 'xray'
  const [activeDropdown, setActiveDropdown] = useState(null); // 'mode' | 'pipes' | 'devices' | 'buildings' | null

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.qatium-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);"""

if state_anchor in code:
    code = code.replace(state_anchor, new_state, 1)
    print("Added activeDropdown state and click-outside listener.")
else:
    print("Warning: state_anchor not found")

# 3. Replace HUD controls in Tab 2
import re

hud_start = code.find('{/* Floating Modern Clean HUD Controls (Top Left) */}')
hud_end = code.find('{/* 3D WebGL Digital Twin (Three.js with OrbitControls) */}')

if hud_start != -1 and hud_end != -1:
    new_hud_jsx = """{/* Floating Modern Clean HUD Dropdowns (Top Left) */}
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
                  {/* 1. DROPDOWN: CHẾ ĐỘ (2D, 3D, X-Ray) */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'mode' || gisViewMode !== '3d' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'mode' ? null : 'mode')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Chọn chế độ hiển thị không gian (2D, 3D, X-Ray)"
                      >
                        <Compass size={13} color="#38bdf8" />
                        <span>Chế độ: <span style={{ color: gisViewMode === 'xray' ? '#38bdf8' : '#ffffff' }}>{gisViewMode === '3d' ? '3D' : (gisViewMode === '2d' ? '2D' : 'X-Ray')}</span></span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'mode' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'mode' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '240px',
                        background: 'rgba(11, 20, 38, 0.96)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Chế độ không gian
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            background: gisViewMode === '3d' ? 'rgba(2, 132, 199, 0.25)' : 'transparent',
                            color: gisViewMode === '3d' ? '#38bdf8' : '#cbd5e1',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={() => { setGisViewMode('3d'); setActiveDropdown(null); }}
                        >
                          {gisViewMode === '3d' ? <Disc size={14} color="#38bdf8" /> : <Circle size={14} color="#64748b" />}
                          <div>
                            <div style={{ fontSize: '12.5px', fontWeight: 600 }}>3D (Digital Twin)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Phối cảnh không gian 3D chuẩn Qatium</div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            background: gisViewMode === '2d' ? 'rgba(2, 132, 199, 0.25)' : 'transparent',
                            color: gisViewMode === '2d' ? '#38bdf8' : '#cbd5e1',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={() => { setGisViewMode('2d'); setActiveDropdown(null); }}
                        >
                          {gisViewMode === '2d' ? <Disc size={14} color="#38bdf8" /> : <Circle size={14} color="#64748b" />}
                          <div>
                            <div style={{ fontSize: '12.5px', fontWeight: 600 }}>2D (Mặt phẳng)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Bản đồ quy hoạch nhìn từ trên xuống</div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            background: gisViewMode === 'xray' ? 'rgba(2, 132, 199, 0.25)' : 'transparent',
                            color: gisViewMode === 'xray' ? '#38bdf8' : '#cbd5e1',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={() => { setGisViewMode('xray'); setActiveDropdown(null); }}
                        >
                          {gisViewMode === 'xray' ? <Disc size={14} color="#38bdf8" /> : <Circle size={14} color="#64748b" />}
                          <div>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#38bdf8' }}>X-Ray (Trong suốt công trình)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Làm trong suốt khối nhà để soi mạng ống ngầm</div>
                          </div>
                        </div>
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
                        title="Bật/tắt các cấp tuyến ống dẫn nước"
                      >
                        <Droplets size={13} color="#00f0ff" />
                        <span>Đường ống ({[gisAssetsLayer.pipesPrimary, gisAssetsLayer.pipesSecondary, gisAssetsLayer.pipesService].filter(Boolean).length}/3)</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'pipes' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'pipes' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '240px',
                        background: 'rgba(11, 20, 38, 0.96)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Mạng lưới đường ống
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.pipesPrimary ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesPrimary: !p.pipesPrimary })); }}
                        >
                          {gisAssetsLayer.pipesPrimary ? <CheckSquare size={15} color="#00f0ff" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600 }}>Cấp 1 (D500 - D800)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Tuyến truyền dẫn chính từ NMN Sông Đà</div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.pipesSecondary ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesSecondary: !p.pipesSecondary })); }}
                        >
                          {gisAssetsLayer.pipesSecondary ? <CheckSquare size={15} color="#f59e0b" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600 }}>Cấp 2 (D200 - D300)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Mạch vòng phân phối liên phường</div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.pipesService ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesService: !p.pipesService })); }}
                        >
                          {gisAssetsLayer.pipesService ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600 }}>Cấp 3 (Đấu Nối Tòa Nhà)</div>
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
                        background: 'rgba(11, 20, 38, 0.96)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Thiết bị & Quan trắc SCADA
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.valves ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, valves: !p.valves })); }}
                        >
                          {gisAssetsLayer.valves ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Van PRV & Chốt cách ly</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.sensors ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, sensors: !p.sensors })); }}
                        >
                          {gisAssetsLayer.sensors ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Cảm biến áp & lưu lượng</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.hydrants ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, hydrants: !p.hydrants })); }}
                        >
                          {gisAssetsLayer.hydrants ? <CheckSquare size={15} color="#ef4444" /> : <Square size={15} color="#64748b" />}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Flame size={13} color="#ef4444" />
                            <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Trụ PCCC (38 trụ)</span>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.tanks ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, tanks: !p.tanks })); }}
                        >
                          {gisAssetsLayer.tanks ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Đài nước & Trạm bơm</span>
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
                        title="Bật/tắt khối nhà 3D và tên đường"
                      >
                        <Box size={13} color="#38bdf8" />
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
                        background: 'rgba(11, 20, 38, 0.96)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Địa hình & Kiến trúc
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.buildings ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, buildings: !p.buildings })); }}
                        >
                          {gisAssetsLayer.buildings ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Khối Nhà 3D</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: gisAssetsLayer.streetLabels ? '#ffffff' : '#94a3b8',
                            transition: 'all 0.15s ease'
                          }}
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

                  {/* 5. VALVE-08 QUICK STATUS CHIP */}
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
                  </div>
                </div>

                """
    code = code[:hud_start] + new_hud_jsx + code[hud_end:]
    print("Replaced HUD controls with modern dropdown groups!")
else:
    print("Warning: could not locate HUD tags")

# 4. Pass viewMode to Network3DViewer call
code = code.replace(
    """                {/* 3D WebGL Digital Twin (Three.js with OrbitControls) */}
                <Network3DViewer
                  theme={gisTheme}
                  heatmap={gisHeatmap}
                  assetsLayer={gisAssetsLayer}""",
    """                {/* 3D WebGL Digital Twin (Three.js with OrbitControls) */}
                <Network3DViewer
                  theme={gisTheme}
                  heatmap={gisHeatmap}
                  viewMode={gisViewMode}
                  assetsLayer={gisAssetsLayer}"""
)

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("App.jsx updated successfully!")
