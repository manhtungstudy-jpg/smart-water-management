import sys

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update dropdown checkmark colors
old_check_primary = '{gisAssetsLayer.pipesPrimary ? <CheckSquare size={15} color="#00f0ff" /> : <Square size={15} color="#64748b" />}'
new_check_primary = '{gisAssetsLayer.pipesPrimary ? <CheckSquare size={15} color="#0284c7" /> : <Square size={15} color="#64748b" />}'
assert old_check_primary in text, "old_check_primary not found"
text = text.replace(old_check_primary, new_check_primary)

old_check_secondary = '{gisAssetsLayer.pipesSecondary ? <CheckSquare size={15} color="#f59e0b" /> : <Square size={15} color="#64748b" />}'
new_check_secondary = '{gisAssetsLayer.pipesSecondary ? <CheckSquare size={15} color="#f97316" /> : <Square size={15} color="#64748b" />}'
assert old_check_secondary in text, "old_check_secondary not found"
text = text.replace(old_check_secondary, new_check_secondary)

old_check_service = '{gisAssetsLayer.pipesService ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}'
new_check_service = '{gisAssetsLayer.pipesService ? <CheckSquare size={15} color="#eab308" /> : <Square size={15} color="#64748b" />}'
assert old_check_service in text, "old_check_service not found"
text = text.replace(old_check_service, new_check_service)
print("1. Updated dropdown checkmark colors (Cấp 1 Blue đậm #0284c7, Cấp 2 Cam #f97316, Cấp 3 Vàng #eab308).")

# 2. Replace bottom timeline scrubber with 24-Hour SCADA Hydraulic Operation Sparkline Chart
old_timeline_block = """                {/* Qatium 24-Hour Simulation Time Scrubber (Bottom Bar) */}
                <div className="qatium-timeline-bar">
                  <button
                    className="timeline-play-btn"
                    onClick={() => {
                      setSimPlaying(!simPlaying);
                      showToast(simPlaying ? "Đã tạm dừng mô phỏng 24h" : "Đang chạy mô phỏng biến thiên thủy lực 24h...");
                    }}
                    title={simPlaying ? 'Tạm dừng mô phỏng' : 'Chạy mô phỏng 24h'}
                  >
                    {simPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                  </button>

                  <div className="timeline-time-info">
                    <span className="timeline-clock">{currentSim.label}</span>
                    <span className="timeline-desc">
                      Q = <b>{currentSim.flow} m³/h</b> · P = <b>{currentSim.pressure} bar</b>
                    </span>
                  </div>

                  <div className="timeline-slider-wrap">
                    <input
                      type="range"
                      min="0"
                      max="23"
                      value={simTime}
                      onChange={(e) => setSimTime(parseInt(e.target.value, 10))}
                      className="timeline-slider"
                      title="Kéo để tua nhanh dòng thời gian mô phỏng"
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span className={`metric-badge ${
                      simTime >= 2 && simTime <= 4 ? 'badge-danger' :
                      (simTime >= 6 && simTime <= 8) || (simTime >= 18 && simTime <= 20) ? 'badge-warning' : 'badge-success'
                    }`}>
                      {currentSim.status}
                    </span>
                    <button
                      className="btn-sm btn-secondary"
                      onClick={() => setSimTime(14)}
                      title="Đặt lại giờ mặc định"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                </div>"""

new_timeline_block = """                {/* 24-HOUR SCADA HYDRAULIC OPERATION INTERACTIVE CHART */}
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
                </div>"""

assert old_timeline_block in text, "old_timeline_block not found"
text = text.replace(old_timeline_block, new_timeline_block)
print("2. Replaced bottom timeline slider with 24-Hour SCADA Hydraulic Operation Sparkline Chart.")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: App.jsx updated!")
