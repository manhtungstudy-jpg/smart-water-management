# -*- coding: utf-8 -*-
"""
Clean, Elegant Cartographic Overhaul for Network3DViewer.jsx:
1. ELIMINATES the harsh black wireframe grid (no gridHelper).
2. Soft, clean Google Maps ground palette (#f8fafc / #f1f5f9 / #e2e8f0).
3. Clean Google Maps road ribbons (white/cream roads with subtle borders).
4. Pipelines are the HERO: elevated, bright, glowing, clean flow particles, highly legible.
5. Minimalist 3D architectural styling (clean buildings, no dark wireframe clutter).
"""

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\Network3DViewer.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Remove GridHelper
code = code.replace(
    '''    // Subtle CAD Topo Grid
    const gridHelper = new THREE.GridHelper(2600, 130, isDark ? 0x1e293b : 0xcbd5e1, isDark ? 0x0c1524 : 0xe2e8f0);
    gridHelper.position.y = 0.02;
    scene.add(gridHelper);''',
    '''    // Clean Google Maps Ground (No harsh wireframe moiré grid)'''
)

# 2. Update Ground Materials to soft Google Maps cartography
code = code.replace(
    '''    // Outer Regional Ground (14,000m x 14,000m - trải dài vô tận ra chân trời không bị cụt)
    const outerGroundGeo = new THREE.PlaneGeometry(14000, 14000);
    const outerGroundMat = new THREE.MeshStandardMaterial({
      color: 0xcbd5e1, // Google Maps terrain light slate
      roughness: 0.95,
      metalness: 0.04
    });
    const outerGround = new THREE.Mesh(outerGroundGeo, outerGroundMat);
    outerGround.rotation.x = -Math.PI / 2;
    outerGround.position.y = -0.3;
    outerGround.receiveShadow = true;
    scene.add(outerGround);

    // Inner Core Urban Ground (2,600m x 2,600m)
    const groundGeo = new THREE.PlaneGeometry(2600, 2600);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0, // Clean urban ground
      roughness: 0.88,
      metalness: 0.06
    });''',
    '''    // Outer Regional Ground (14,000m x 14,000m - trải dài vô tận ra chân trời dịu mắt)
    const outerGroundGeo = new THREE.PlaneGeometry(14000, 14000);
    const outerGroundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0a1120 : 0xf1f5f9, // Soft clean terrain
      roughness: 0.98,
      metalness: 0.02
    });
    const outerGround = new THREE.Mesh(outerGroundGeo, outerGroundMat);
    outerGround.rotation.x = -Math.PI / 2;
    outerGround.position.y = -0.3;
    outerGround.receiveShadow = true;
    scene.add(outerGround);

    // Inner Core Urban Ground (2,600m x 2,600m)
    const groundGeo = new THREE.PlaneGeometry(2600, 2600);
    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0f172a : 0xf8fafc, // Google Maps clean light canvas
      roughness: 0.92,
      metalness: 0.02
    });'''
)

# 3. Clean Road Ribbon Styling (Google Maps white/cream roads instead of black stripes)
code = code.replace(
    '''    const roadMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x141e2e : 0x475569,
      roughness: 0.65,
      metalness: 0.15
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1e293b : 0x94a3b8,
      roughness: 0.8
    });''',
    '''    // Google Maps Clean Road Ribbons (Đường sá sáng rõ, không đen kịt)
    const roadMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1e293b : 0xffffff, // Google Maps clean white avenue
      roughness: 0.45,
      metalness: 0.05
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0f172a : 0xe2e8f0, // Soft grey curbs
      roughness: 0.75
    });'''
)

# 4. Remove wireframe clutter on buildings & shophouses
# Remove houseEdges and edgeMesh in createDenseShophouseBlock
old_shophouse_edges = '''          const houseEdges = new THREE.EdgesGeometry(houseGeo);
          const edgeMesh = new THREE.LineSegments(
            houseEdges,
            new THREE.LineBasicMaterial({
              color: isCutOff ? 0xfca5a5 : (isDark ? 0x64748b : 0x94a3b8),
              linewidth: 1
            })
          );
          houseMesh.add(edgeMesh);'''

new_shophouse_edges = '''          // Minimalist clean facade (no harsh moire wireframe)
          if (isCutOff) {
            const houseEdges = new THREE.EdgesGeometry(houseGeo);
            const edgeMesh = new THREE.LineSegments(
              houseEdges,
              new THREE.LineBasicMaterial({ color: 0xef4444, linewidth: 2 })
            );
            houseMesh.add(edgeMesh);
          }'''

if old_shophouse_edges in code:
    code = code.replace(old_shophouse_edges, new_shophouse_edges)
    print("Cleaned shophouse edge wireframes")

# Remove edgeLine on major buildings unless cut off
old_building_edges = '''      const edges = new THREE.EdgesGeometry(bodyGeo);
      const edgeLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: isCutOff ? 0xfca5a5 : (isDark ? 0x7dd3fc : 0x0284c7),
          linewidth: isCutOff ? 2.5 : 1.5
        })
      );
      bodyMesh.add(edgeLine);'''

new_building_edges = '''      // Clean architectural edges (only prominent on outage alert)
      if (isCutOff) {
        const edges = new THREE.EdgesGeometry(bodyGeo);
        const edgeLine = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0xef4444, linewidth: 2.5 })
        );
        bodyMesh.add(edgeLine);
      }'''

if old_building_edges in code:
    code = code.replace(old_building_edges, new_building_edges)
    print("Cleaned major building edge wireframes")

# 5. Make Water Pipes the HERO (Elevate above ground and add emissive glow)
code = code.replace(
    '''      const tubeMat = new THREE.MeshStandardMaterial({
        color: isFlowing ? color : 0x64748b,
        roughness: 0.35,
        metalness: 0.3,
        emissive: isFlowing ? (isDark ? color : 0x000000) : 0x000000,
        emissiveIntensity: isFlowing ? 0.16 : 0.0
      });''',
    '''      const tubeMat = new THREE.MeshStandardMaterial({
        color: isFlowing ? color : 0x94a3b8,
        roughness: 0.25,
        metalness: 0.35,
        emissive: isFlowing ? color : 0x000000,
        emissiveIntensity: isFlowing ? 0.45 : 0.0
      });'''
)

# Elevate pipe curves slightly higher above road level (y from 1.0-1.4 to 1.6-2.2)
code = code.replace('new THREE.Vector3(-1200, 1.4, 40)', 'new THREE.Vector3(-1200, 2.0, 40)')
code = code.replace('new THREE.Vector3(-700, 1.4, 40)', 'new THREE.Vector3(-700, 2.0, 40)')
code = code.replace('new THREE.Vector3(-440, 1.4, 40)', 'new THREE.Vector3(-440, 2.0, 40)')
code = code.replace(', 1.4,', ', 2.0,')
code = code.replace(', 1.2,', ', 1.7,')
code = code.replace(', 1.0,', ', 1.5,')

# Soften building colors for clean Google 3D pastel aesthetics
code = code.replace(
    '''          const colorPal = isDark
            ? [0x334155, 0x1e293b, 0x475569, 0x0f172a, 0x0369a1]
            : [0xf1f5f9, 0xe2e8f0, 0xcbd5e1, 0x94a3b8, 0xbfdbfe];''',
    '''          const colorPal = isDark
            ? [0x1e293b, 0x334155, 0x1e293b, 0x3b82f6, 0x0284c7]
            : [0xffffff, 0xf8fafc, 0xf1f5f9, 0xe2e8f0, 0xdbeafe];'''
)

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\Network3DViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Applied clean cartographic overhaul to Network3DViewer.jsx successfully!")
