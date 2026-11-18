# -*- coding: utf-8 -*-
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Fix the valve chip text color
old_chip = """                  {/* Valve Status Chip (Screenshot Row 3) */}
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
                      <span style={{ color: closedValves['VALVE-08'] ? '#ef4444' : '#10b981', fontSize: '13px' }}>●</span>
                      <span>VALVE-08: {closedValves['VALVE-08'] ? 'ĐÃ ĐÓNG' : 'MỞ'}</span>
                      <span style={{ fontSize: '11px' }}>{closedValves['VALVE-08'] ? '🔒' : '🔓'}</span>
                    </div>
                  </div>"""

new_chip = """                  {/* Valve Status Chip (Screenshot Row 3) */}
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
                  </div>"""

code = code.replace(old_chip, new_chip)

# Add white-space: nowrap to filter buttons
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.pipesPrimary ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.pipesPrimary ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.pipesSecondary ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.pipesSecondary ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.pipesService ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.pipesService ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.buildings ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.buildings ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.hydrants ? \'active\' : \'\'}`}\n                        onClick={() => setGisAssetsLayer(p => ({ ...p, hydrants: !p.hydrants }))}\n                        style={{ color: \'#ef4444\' }}',
    'className={`qatium-hud-btn ${gisAssetsLayer.hydrants ? \'active\' : \'\'}`}\n                        onClick={() => setGisAssetsLayer(p => ({ ...p, hydrants: !p.hydrants }))}\n                        style={{ whiteSpace: \'nowrap\', color: \'#f87171\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.streetLabels ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.streetLabels ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.valves ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.valves ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.tanks ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.tanks ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)
code = code.replace(
    'className={`qatium-hud-btn ${gisAssetsLayer.sensors ? \'active\' : \'\'}`}',
    'className={`qatium-hud-btn ${gisAssetsLayer.sensors ? \'active\' : \'\'}`} style={{ whiteSpace: \'nowrap\' }}'
)

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Polished App.jsx HUD labels & styling!")
