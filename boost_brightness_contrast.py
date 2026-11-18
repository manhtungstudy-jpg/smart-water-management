# -*- coding: utf-8 -*-
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Fog: reduce density from 0.0006 to 0.00022 for crystal-clear contrast
code = code.replace(
    "scene.fog = new THREE.FogExp2(isDark ? 0x0c1930 : 0xf1f5f9, 0.0006);",
    "scene.fog = new THREE.FogExp2(isDark ? 0x07111e : 0xf1f5f9, 0.00022);"
)

# 2. Tone Mapping Exposure: bump from 1.15 to 1.45
code = code.replace(
    "renderer.toneMappingExposure = isDark ? 1.15 : 1.0;",
    "renderer.toneMappingExposure = isDark ? 1.45 : 1.0;"
)

# 3. Ambient & Sun & Hemi Lighting: boost intensity and vibrant cyan-blue fill
old_light = """    // 5. LIGHTING (MUNICIPAL DIGITAL TWIN)
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

new_light = """    // 5. LIGHTING (HIGH BRIGHTNESS & CONTRAST DIGITAL TWIN)
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

code = code.replace(old_light, new_light)

# 4. Topo Grid & Ground: crisp high-contrast grid lines
old_grid = """    const groundMat = new THREE.MeshStandardMaterial({
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

new_grid = """    const groundMat = new THREE.MeshStandardMaterial({
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
    const gridHelper = new THREE.GridHelper(2600, 130, isDark ? 0x38bdf8 : 0x0284c7, isDark ? 0x1e3a8a : 0xcbd5e1);"""

code = code.replace(old_grid, new_grid)

# 5. Buildings: Increase emissive & sharpen edge highlights
old_bldg_mat = """      const bodyMat = new THREE.MeshStandardMaterial({
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

new_bldg_mat = """      const bodyMat = new THREE.MeshStandardMaterial({
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

code = code.replace(old_bldg_mat, new_bldg_mat)

# 6. Pipe Glow & Fluid Flow Particles: Electric glow with high emissive contrast
old_pipe_mat = """      const tubeMat = new THREE.MeshStandardMaterial({
        color: isFlowing ? color : 0x64748b,
        roughness: 0.35,
        metalness: 0.3,
        emissive: isFlowing ? (isDark ? color : 0x000000) : 0x000000,
        emissiveIntensity: isFlowing ? 0.16 : 0.0
      });"""

new_pipe_mat = """      const pipeGlowColor = tier === 1 ? (isDark ? 0x00f0ff : 0x0284c7) : (tier === 2 ? (isDark ? 0xfbbf24 : 0xd97706) : color);
      const pipeEmissive = tier === 1 ? 0.95 : (tier === 2 ? 0.85 : 0.6);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: isFlowing ? pipeGlowColor : 0x64748b,
        roughness: 0.2,
        metalness: 0.35,
        emissive: isFlowing ? (isDark ? pipeGlowColor : 0x000000) : 0x000000,
        emissiveIntensity: isFlowing ? pipeEmissive : 0.0
      });"""

code = code.replace(old_pipe_mat, new_pipe_mat)

# 7. Flow beads: Vibrant bright light pulses
old_bead = """        const beadMat = new THREE.MeshStandardMaterial({
          color: isDark ? 0x38bdf8 : 0x0284c7,
          emissive: isDark ? 0x0ea5e9 : 0x38bdf8,
          emissiveIntensity: 0.95,
          roughness: 0.2
        });"""

new_bead = """        const beadMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: isDark ? 0x38bdf8 : 0x0284c7,
          emissiveIntensity: 2.4,
          roughness: 0.1
        });"""

code = code.replace(old_bead, new_bead)

# 8. Shophouses edge contrast
code = code.replace(
    "color: isCutOff ? 0xfca5a5 : (isDark ? 0x64748b : 0x94a3b8),",
    "color: isCutOff ? 0xfca5a5 : (isDark ? 0x38bdf8 : 0x64748b),"
)

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("generate_dense_viewer.py updated with high brightness & contrast settings!")
