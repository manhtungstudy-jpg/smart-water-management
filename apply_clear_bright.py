# -*- coding: utf-8 -*-
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Eliminate Fog completely (no murky haze when zooming out)
old_fog = "scene.fog = new THREE.FogExp2(isDark ? 0x0c1930 : 0xf1f5f9, 0.0006);"
new_fog = "// Loại bỏ hoàn toàn mờ sương khi zoom out để giữ không gian trong vắt, sắc nét\n    scene.fog = null;"

if old_fog in code:
    code = code.replace(old_fog, new_fog)
    print("Eliminated fog effect.")
else:
    print("Warning: old_fog not found")

# 2. Increase Tone Mapping Exposure for overall scene luminance
code = code.replace(
    "renderer.toneMappingExposure = isDark ? 1.15 : 1.0;",
    "renderer.toneMappingExposure = isDark ? 1.35 : 1.05;"
)

# 3. Boost Ambient, Sun, and Hemi Lights
old_lights = """    // 5. LIGHTING (MUNICIPAL DIGITAL TWIN)
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

new_lights = """    // 5. LIGHTING (BRIGHT & CRYSTAL CLEAR DIGITAL TWIN)
    const ambientLight = new THREE.AmbientLight(isDark ? 0x60a5fa : 0xffffff, isDark ? 1.25 : 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffdf0, isDark ? 2.45 : 1.5);
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
      isDark ? 0x0f172a : 0x94a3b8,
      isDark ? 0.85 : 0.45
    );
    scene.add(hemiLight);"""

if old_lights in code:
    code = code.replace(old_lights, new_lights)
    print("Boosted scene lighting.")
else:
    print("Warning: old_lights not found")

# 4. Building luminous glow
code = code.replace(
    "emissiveIntensity: isCutOff ? 0.35 : 0.08",
    "emissiveIntensity: isCutOff ? 0.45 : (isDark ? 0.18 : 0.0)"
)
code = code.replace(
    "emissiveIntensity: isCutOff ? 0.3 : 0.0",
    "emissiveIntensity: isCutOff ? 0.3 : (isDark ? 0.12 : 0.0)"
)

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("generate_dense_viewer.py updated with bright & crystal-clear no-fog settings!")
