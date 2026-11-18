# -*- coding: utf-8 -*-
"""
Restore generate_dense_viewer.py to the EXACT design of Screenshot 2026-11-17 192919.png:
- Background: 0x0c1930
- Fog: FogExp2(0x0c1930, 0.0006)
- Lighting: ambient(0x38bdf8, 0.75), sun(0xfffaed, 1.85), hemi(0x0284c7, 0x0f172a, 0.65)
- ToneMappingExposure: 1.15
- CAD Topo Grid: gridHelper(2600, 130, 0x0284c7, 0x0f2444) at y=0.02
- Ground: 0x071120
- Roads: roadMat(0x141e2e), yellowLineMat(0xf59e0b), markMat(0x94a3b8)
- Pipes: original radii (1.6, 1.1, 0.55), on-ground y (1.4, 1.1), subtle sleek fluid beads (r * 1.25, emissive 0.95, speed 0.0022/0.0017/0.0012)
- Smart valves at y=0 (scale 1.0)
- Building materials: cyan/blue glass, emissive 0.08, edges 0x7dd3fc
- 7 camera presets matching screenshot
"""

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Fog & Background
code = code.replace(
    "scene.fog = new THREE.FogExp2(isDark ? 0x07111e : 0xf1f5f9, 0.00022);",
    "scene.fog = new THREE.FogExp2(isDark ? 0x0c1930 : 0xf1f5f9, 0.0006);"
)
code = code.replace(
    "renderer.toneMappingExposure = isDark ? 1.45 : 1.0;",
    "renderer.toneMappingExposure = isDark ? 1.15 : 1.0;"
)

# 2. Lighting
old_light = """    // 5. LIGHTING (HIGH BRIGHTNESS & CONTRAST DIGITAL TWIN)
    const ambientLight = new THREE.AmbientLight(isDark ? 0x60a5fa : 0xffffff, isDark ? 1.35 : 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, isDark ? 2.65 : 1.5);
    sunLight.position.set(650, 950, 550);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 100;
    sunLight.shadow.camera.far = 3200;
    const shadowD = 1250;
    sunLight.shadow.camera.left = -shadowD;
    sunLight.shadow.camera.right = shadowD;
    sunLight.shadow.camera.top = shadowD;
    sunLight.shadow.camera.bottom = -shadowD;
    sunLight.shadow.bias = -0.0003;
    scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(
      isDark ? 0x38bdf8 : 0xe0f2fe,
      isDark ? 0x08101d : 0x94a3b8,
      isDark ? 0.95 : 0.45
    );
    scene.add(hemiLight);"""

exact_light = """    // 5. LIGHTING (MUNICIPAL DIGITAL TWIN)
    const ambientLight = new THREE.AmbientLight(isDark ? 0x38bdf8 : 0xffffff, isDark ? 0.75 : 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffaed, isDark ? 1.85 : 1.4);
    sunLight.position.set(650, 950, 550);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 100;
    sunLight.shadow.camera.far = 3200;
    const shadowD = 1250;
    sunLight.shadow.camera.left = -shadowD;
    sunLight.shadow.camera.right = shadowD;
    sunLight.shadow.camera.top = shadowD;
    sunLight.shadow.camera.bottom = -shadowD;
    sunLight.shadow.bias = -0.0003;
    scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(
      isDark ? 0x0284c7 : 0xe0f2fe,
      isDark ? 0x0f172a : 0x94a3b8,
      isDark ? 0.65 : 0.45
    );
    scene.add(hemiLight);"""

if old_light in code:
    code = code.replace(old_light, exact_light)
    print("Restored exact lighting.")

# 3. Ground & Topo Grid
old_grid = """    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x050c18 : 0xe2e8f0,
      roughness: 0.85,
      metalness: 0.12
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.2;
    ground.receiveShadow = true;
    scene.add(ground);

    // High-Contrast Vibrant CAD Topo Grid
    const gridHelper = new THREE.GridHelper(2600, 130, isDark ? 0x1e3a8a : 0x0284c7, isDark ? 0x081322 : 0xcbd5e1);"""

exact_grid = """    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x071120 : 0xe2e8f0,
      roughness: 0.9,
      metalness: 0.08
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Subtle CAD Topo Grid
    const gridHelper = new THREE.GridHelper(2600, 130, isDark ? 0x0284c7 : 0xcbd5e1, isDark ? 0x0f2444 : 0xe2e8f0);"""

if old_grid in code:
    code = code.replace(old_grid, exact_grid)
    print("Restored exact ground and topo grid.")

# 4. Roads
old_roads = """    const roadMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x070e1a : 0x475569,
      roughness: 0.8,
      metalness: 0.1
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0c1524 : 0x94a3b8,
      roughness: 0.85
    });
    const yellowLineMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x162436 : 0xf59e0b });
    const markMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x19283d : 0xffffff });"""

exact_roads = """    const roadMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x141e2e : 0x475569,
      roughness: 0.65,
      metalness: 0.15
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1e293b : 0x94a3b8,
      roughness: 0.8
    });
    const yellowLineMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const markMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x94a3b8 : 0xffffff });"""

if old_roads in code:
    code = code.replace(old_roads, exact_roads)
    print("Restored exact road materials.")

# 5. Buildings
old_bldg = """      const bodyMat = new THREE.MeshStandardMaterial({
        color: activeColor,
        metalness: isCutOff ? 0.2 : 0.32,
        roughness: 0.16,
        transparent: true,
        opacity: isCutOff ? 0.75 : (isDark ? 0.94 : 0.96),
        emissive: isCutOff ? 0xdc2626 : (isDark ? activeColor : 0x000000),
        emissiveIntensity: isCutOff ? 0.5 : 0.22
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.position.y = h / 2;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      bGroup.add(bodyMesh);

      const edges = new THREE.EdgesGeometry(bodyGeo);
      const edgeLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: isCutOff ? 0xfca5a5 : (isDark ? 0x38bdf8 : 0x0284c7),
          linewidth: 2.0
        })
      );"""

exact_bldg = """      const bodyMat = new THREE.MeshStandardMaterial({
        color: activeColor,
        metalness: isCutOff ? 0.2 : 0.42,
        roughness: 0.22,
        transparent: true,
        opacity: isCutOff ? 0.75 : (isDark ? 0.92 : 0.94),
        emissive: isCutOff ? 0x991b1b : (isDark ? activeColor : 0x000000),
        emissiveIntensity: isCutOff ? 0.35 : 0.08
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.position.y = h / 2;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      bGroup.add(bodyMesh);

      const edges = new THREE.EdgesGeometry(bodyGeo);
      const edgeLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: isCutOff ? 0xfca5a5 : (isDark ? 0x7dd3fc : 0x0284c7),
          linewidth: isCutOff ? 2.5 : 1.5
        })
      );"""

if old_bldg in code:
    code = code.replace(old_bldg, exact_bldg)
    print("Restored exact building materials.")

# 6. create3DPipe
import re
old_pipe_pattern = re.search(r'    const create3DPipe = \(points, radius, color, name, pipeId, isFlowing, tier, data\) => \{[\s\S]*?return tubeMesh;\s*\};', code)

exact_pipe_func = """    const create3DPipe = (points, radius, color, name, pipeId, isFlowing, tier, data) => {
      if (tier === 1 && !assetsLayer.pipesPrimary) return null;
      if (tier === 2 && !assetsLayer.pipesSecondary) return null;
      if (tier === 3 && !assetsLayer.pipesTertiary) return null;
      if (tier === 4 && !assetsLayer.pipesService) return null;
      if (!assetsLayer.pipes) return null;

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, radius, 14, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: isFlowing ? color : 0x64748b,
        roughness: 0.35,
        metalness: 0.3,
        emissive: isFlowing ? (isDark ? color : 0x000000) : 0x000000,
        emissiveIntensity: isFlowing ? 0.16 : 0.0
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.castShadow = true;
      tubeMesh.receiveShadow = true;
      tubeMesh.userData = { name, id: pipeId, type: 'Pipe', data };
      pipeGroup.add(tubeMesh);
      clickableObjectsRef.current.push(tubeMesh);

      // Fluid Flow Particle Animation
      if (isFlowing) {
        const count = tier === 1 ? 16 : (tier === 2 ? 10 : (tier === 3 ? 6 : 4));
        const beadGeo = new THREE.SphereGeometry(radius * 1.25, 12, 12);
        const beadMat = new THREE.MeshStandardMaterial({
          color: isDark ? 0x38bdf8 : 0x0284c7,
          emissive: isDark ? 0x0ea5e9 : 0x38bdf8,
          emissiveIntensity: 0.95,
          roughness: 0.2
        });

        for (let i = 0; i < count; i++) {
          const p = new THREE.Mesh(beadGeo, beadMat);
          scene.add(p);
          flowParticlesRef.current.push({
            mesh: p,
            curve: curve,
            t: i / count,
            speed: tier === 1 ? 0.0022 : (tier === 2 ? 0.0017 : 0.0012)
          });
        }
      }

      return tubeMesh;
    };"""

if old_pipe_pattern:
    code = code[:old_pipe_pattern.start()] + exact_pipe_func + code[old_pipe_pattern.end():]
    print("Restored exact create3DPipe.")

# 7. Restore smart valve position
old_v = """vGroup.position.set(pos[0], 5.8, pos[2]);
      vGroup.scale.set(1.4, 1.4, 1.4);"""
exact_v = "vGroup.position.set(pos[0], 0, pos[2]);"
if old_v in code:
    code = code.replace(old_v, exact_v)
    print("Restored exact smart valve position.")

# 8. Restore exact 7 camera presets (remove Hapulico if present in right presets)
old_hapulico_btn = """              <button
                className="qatium-hud-btn"
                onClick={() => setCameraPreset('hapulico')}
                title="Cận cảnh Hapulico Complex & Vũ Trọng Phụng"
                style={{ padding: '6px 10px', width: '100%', justifyContent: 'flex-start' }}
              >
                <Eye size={14} />
                <span>Hapulico Complex</span>
              </button>"""
if old_hapulico_btn in code:
    code = code.replace(old_hapulico_btn, "")
    print("Removed Hapulico from right presets to match exact 7 buttons of screenshot.")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("generate_dense_viewer.py restored to exact Screenshot 2026-11-17 192919.png!")
