# -*- coding: utf-8 -*-
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Ensure default theme is dark
code = code.replace("const [gisTheme, setGisTheme] = useState('light');", "const [gisTheme, setGisTheme] = useState('dark');")

# 2. Replace Primary Controls Row with Screenshot 2026-11-17 192919.png design
old_primary_pattern = """                  {/* Primary Controls Row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    {/* Theme Mode Toggle */}
                    <div className="qatium-hud-pill-group" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                      <button
                        className={`qatium-hud-btn ${gisTheme === 'light' ? 'active' : ''}`}
                        onClick={() => setGisTheme('light')}
                        style={{
                          padding: '5px 10px',
                          fontSize: '12px',
                          fontWeight: 600,
                          background: gisTheme === 'light' ? '#0f172a' : 'transparent',
                          color: gisTheme === 'light' ? '#ffffff' : '#475569'
                        }}
                      >
                        <span>Google Maps 3D</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisTheme === 'dark' ? 'active' : ''}`}
                        onClick={() => setGisTheme('dark')}
                        style={{
                          padding: '5px 10px',
                          fontSize: '12px',
                          fontWeight: 600,
                          background: gisTheme === 'dark' ? '#0f172a' : 'transparent',
                          color: gisTheme === 'dark' ? '#ffffff' : '#475569'
                        }}
                      >
                        <span>Bản Đồ Đêm</span>
                      </button>
                    </div>

                    {/* Heatmap Mode Toggle */}
                    <div className="qatium-hud-pill-group" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                      <button
                        className={`qatium-hud-btn ${gisHeatmap === 'pressure' ? 'active' : ''}`}
                        onClick={() => setGisHeatmap('pressure')}
                        style={{
                          padding: '5px 10px',
                          fontSize: '12px',
                          fontWeight: 600,
                          background: gisHeatmap === 'pressure' ? '#0284c7' : 'transparent',
                          color: gisHeatmap === 'pressure' ? '#ffffff' : '#475569'
                        }}
                      >
                        <Gauge size={13} />
                        <span>Áp lực</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisHeatmap === 'flow' ? 'active' : ''}`}
                        onClick={() => setGisHeatmap('flow')}
                        style={{
                          padding: '5px 10px',
                          fontSize: '12px',
                          fontWeight: 600,
                          background: gisHeatmap === 'flow' ? '#ea580c' : 'transparent',
                          color: gisHeatmap === 'flow' ? '#ffffff' : '#475569'
                        }}
                      >
                        <Droplets size={13} />
                        <span>Lưu lượng</span>
                      </button>
                    </div>

                    {/* Quick Valve Simulation Pill (Clean & Non-intrusive) */}
                    <div className="qatium-hud-pill-group" style={{ background: 'rgba(255, 255, 255, 0.92)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                      <div style={{ padding: '4px 8px', fontSize: '11.5px', fontWeight: 600, color: '#0284c7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Sliders size={13} />
                        <span>Chốt Van:</span>
                      </div>
                      {['VALVE-01', 'VALVE-02', 'VALVE-03', 'VALVE-04', 'VALVE-05', 'VALVE-06', 'VALVE-07', 'VALVE-08'].map(vId => {
                        const isClosed = !!closedValves[vId];
                        return (
                          <button
                            key={vId}
                            onClick={() => handleToggleValve(vId)}
                            title={`Click để ${isClosed ? 'Mở lại' : 'ĐÓNG'} chốt van ${vId}`}
                            style={{
                              padding: '4px 7px',
                              fontSize: '11px',
                              fontWeight: 700,
                              borderRadius: '4px',
                              border: 'none',
                              background: isClosed ? '#dc2626' : 'transparent',
                              color: isClosed ? '#ffffff' : '#64748b',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {vId.replace('VALVE-', 'V')}: {isClosed ? '🔒' : '🔓'}
                          </button>
                        );
                      })}
                    </div>
                  </div>"""

new_primary_block = """                  {/* Primary Controls Row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    {/* Theme Mode Toggle */}
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${gisTheme === 'dark' ? 'active' : ''}`}
                        onClick={() => setGisTheme('dark')}
                      >
                        <span>Digital Twin (Tối)</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisTheme === 'light' ? 'active' : ''}`}
                        onClick={() => setGisTheme('light')}
                      >
                        <span>SCADA (Sáng)</span>
                      </button>
                    </div>

                    {/* Heatmap Mode Toggle */}
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${gisHeatmap === 'pressure' ? 'active' : ''}`}
                        onClick={() => setGisHeatmap('pressure')}
                      >
                        <Gauge size={13} />
                        <span>Áp lực (bar)</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisHeatmap === 'flow' ? 'active' : ''}`}
                        onClick={() => setGisHeatmap('flow')}
                      >
                        <Droplets size={13} />
                        <span>Lưu lượng (m³/h)</span>
                      </button>
                    </div>
                  </div>"""

if old_primary_pattern in code:
    code = code.replace(old_primary_pattern, new_primary_block)
    print("Replaced primary HUD controls successfully!")
else:
    print("WARNING: old_primary_pattern not found!")

# 3. Replace Filter Chips Row with clean standard qatium-hud-pill-group matching screenshot
import re

old_filter_pattern = re.search(r'                  {/\* Clean Filter Chips Row with Clear Semantic Distinction \*/}        <div style=\{\{ display: \'flex\', flexWrap: \'wrap\', gap: \'6px\', alignItems: \'center\' \}\}>[\s\S]*?<\/div>\s*<\/div>\s*\{/\* 3D WebGL Digital Twin', code)

new_filter_block = """                  {/* Filter Chips Row matching Screenshot */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.pipesPrimary ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, pipesPrimary: !p.pipesPrimary }))}
                      >
                        <span>Cấp 1 (D500)</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.pipesSecondary ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, pipesSecondary: !p.pipesSecondary }))}
                      >
                        <span>Cấp 2 (D200)</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.pipesService ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, pipesService: !p.pipesService }))}
                      >
                        <span>Cấp 3 (Đấu Nối)</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.buildings ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, buildings: !p.buildings }))}
                      >
                        <span>Khối Nhà 3D</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.hydrants ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, hydrants: !p.hydrants }))}
                        style={{ color: gisAssetsLayer.hydrants ? '#f87171' : undefined }}
                      >
                        <Flame size={12} color="#ef4444" style={{ marginRight: '3px' }} />
                        <span>Trụ PCCC (38)</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.streetLabels ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, streetLabels: !p.streetLabels }))}
                      >
                        <Tag size={12} style={{ marginRight: '3px' }} />
                        <span>Tên Đường (Maps)</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.valves ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, valves: !p.valves }))}
                      >
                        <span>Van PRV</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.tanks ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, tanks: !p.tanks }))}
                      >
                        <span>Đài nước & Bơm</span>
                      </button>
                      <button
                        className={`qatium-hud-btn ${gisAssetsLayer.sensors ? 'active' : ''}`}
                        onClick={() => setGisAssetsLayer(p => ({ ...p, sensors: !p.sensors }))}
                      >
                        <span>Cảm biến</span>
                      </button>
                    </div>
                  </div>

                  {/* Single Valve Status Chip (Screenshot Row 3) */}
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      className="qatium-hud-pill-group"
                      style={{
                        padding: '4px 10px',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleToggleValve('VALVE-08')}
                      title="Click để mô phỏng đóng/mở chốt van VALVE-08"
                    >
                      <span style={{ color: closedValves['VALVE-08'] ? '#ef4444' : '#10b981', fontSize: '14px' }}>●</span>
                      <span>VALVE-08: {closedValves['VALVE-08'] ? 'ĐÃ ĐÓNG' : 'MỞ'}</span>
                      <span style={{ fontSize: '11px' }}>{closedValves['VALVE-08'] ? '🔒' : '🔓'}</span>
                    </div>
                  </div>
                </div>

                {/* 3D WebGL Digital Twin"""

if old_filter_pattern:
    code = code[:old_filter_pattern.start()] + new_filter_block + code[old_filter_pattern.end() - len('                {/* 3D WebGL Digital Twin'):]
    print("Replaced filter chips row successfully!")
else:
    print("WARNING: old_filter_pattern not found!")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)
print("Updated App.jsx successfully!")
