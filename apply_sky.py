# -*- coding: utf-8 -*-
"""
Update script to add Google Maps Atmospheric Sky, Distant Horizon Clouds, and Regional Terrain.
"""
import re

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace the scene creation and background
old_scene_block = r'''    // 1. SCENE CREATION
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(isDark ? 0x050b14 : 0xf1f5f9);
    scene.fog = new THREE.FogExp2(isDark ? 0x050b14 : 0xf1f5f9, 0.00045);'''

new_scene_block = r'''    // 1. SCENE CREATION & GOOGLE MAPS PROCEDURAL ATMOSPHERIC SKY & HORIZON
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Equirectangular Google Maps Atmospheric Sky with Horizon Clouds
    const createGoogleMapsSky = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');

      // Atmospheric Sky Gradient: deep azure zenith -> cyan atmospheric glow -> misty white horizon
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0.0, '#1d4ed8');  // Deep celestial blue
      grad.addColorStop(0.22, '#3b82f6'); // Sky blue
      grad.addColorStop(0.48, '#93c5fd'); // Atmospheric cyan-blue
      grad.addColorStop(0.68, '#bfdbfe'); // Soft pale blue
      grad.addColorStop(0.80, '#e0f2fe'); // Misty horizon base
      grad.addColorStop(0.92, '#f0f9ff'); // Distant horizon fog
      grad.addColorStop(1.0, '#cbd5e1');  // Terrestrial blend

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Soft Cumulus Cloud Layers near the horizon
      const drawCloud = (cx, cy, rx, ry, alpha) => {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.filter = 'blur(10px)';
        ctx.fill();
        ctx.restore();
      };

      for (let l = 0; l < 4; l++) {
        const yCenter = canvas.height * (0.64 + l * 0.06);
        const alpha = 0.25 + l * 0.16;
        for (let i = 0; i < 48; i++) {
          const x = (i / 48) * canvas.width + Math.sin(i * 3.1) * 35;
          const rx = 65 + Math.sin(i * 4.7) * 40;
          const ry = 18 + Math.cos(i * 2.3) * 10;
          drawCloud(x, yCenter + Math.sin(i * 1.8) * 12, rx, ry, alpha);
        }
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.mapping = THREE.EquirectangularReflectionMapping;
      return texture;
    };

    const skyTexture = createGoogleMapsSky();
    scene.background = skyTexture;
    scene.environment = skyTexture;

    // Google Maps Atmospheric Horizon Fog (blends ground and distant objects seamlessly into the cloudy horizon)
    const horizonFogColor = 0xdbeafe;
    scene.fog = new THREE.Fog(horizonFogColor, 1400, 5600);'''

if old_scene_block in code:
    code = code.replace(old_scene_block, new_scene_block)
    print("Replaced scene creation block")
else:
    print("Warning: old_scene_block not found")

# Replace lighting block
old_light_block = r'''    // 5. LIGHTING (MUNICIPAL DIGITAL TWIN)
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
    scene.add(hemiLight);'''

new_light_block = r'''    // 5. LIGHTING (GOOGLE MAPS NATURAL DAYLIGHT)
    const ambientLight = new THREE.AmbientLight(0xbae6fd, 0.95);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffbf0, 1.65);
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

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0xe2e8f0, 0.6);
    scene.add(hemiLight);'''

if old_light_block in code:
    code = code.replace(old_light_block, new_light_block)
    print("Replaced lighting block")
else:
    print("Warning: old_light_block not found")

# Replace ground terrain with outer regional ground + inner core ground
old_ground_block = r'''    // =========================================================================
    // 6. GROUND TERRAIN & DISTRICT PLOT BLOCKS (2,500m x 2,500m)
    // =========================================================================
    const groundGeo = new THREE.PlaneGeometry(2600, 2600);
    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x071120 : 0xe2e8f0,
      roughness: 0.9,
      metalness: 0.08
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.2;
    ground.receiveShadow = true;
    scene.add(ground);'''

new_ground_block = r'''    // =========================================================================
    // 6. GROUND TERRAIN: VAST REGIONAL GROUND (14,000m x 14,000m) & CORE DISTRICT
    // =========================================================================
    // Outer Regional Ground (14,000m x 14,000m - trải dài vô tận ra chân trời không bị cụt)
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
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 3D Procedural Cumulus Clouds along the horizon (Dải mây bồng bềnh chân trời xa)
    const cloudGroup = new THREE.Group();
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.95,
      metalness: 0.02,
      transparent: true,
      opacity: 0.76,
      emissive: 0xf0f9ff,
      emissiveIntensity: 0.2
    });

    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      const dist = 2400 + Math.sin(i * 3.7) * 700;
      const cx = Math.cos(angle) * dist;
      const cz = Math.sin(angle) * dist;
      const cy = 260 + Math.cos(i * 2.5) * 90;

      const clusterGroup = new THREE.Group();
      clusterGroup.position.set(cx, cy, cz);

      const puffs = 4;
      for (let p = 0; p < puffs; p++) {
        const pr = 70 + Math.sin(p * 2.1) * 30;
        const pGeo = new THREE.SphereGeometry(pr, 10, 8);
        const pMesh = new THREE.Mesh(pGeo, cloudMat);
        pMesh.position.set((p - puffs / 2) * 60, Math.sin(p * 1.5) * 16, Math.cos(p * 1.5) * 28);
        pMesh.scale.set(1.4, 0.55, 1.0); // Flattened base
        clusterGroup.add(pMesh);
      }
      cloudGroup.add(clusterGroup);
    }
    scene.add(cloudGroup);'''

if old_ground_block in code:
    code = code.replace(old_ground_block, new_ground_block)
    print("Replaced ground block")
else:
    print("Warning: old_ground_block not found")

# Add subtle cloud drift in animation loop
old_anim_block = r'''      // Pulse flow particles
      flowParticlesRef.current.forEach((item) => {
        item.t = (item.t + item.speed) % 1;
        const pt = item.curve.getPointAt(item.t);
        if (pt) item.mesh.position.copy(pt);
      });'''

new_anim_block = r'''      // Pulse flow particles
      flowParticlesRef.current.forEach((item) => {
        item.t = (item.t + item.speed) % 1;
        const pt = item.curve.getPointAt(item.t);
        if (pt) item.mesh.position.copy(pt);
      });

      // Subtle slow drift of distant horizon clouds
      cloudGroup.rotation.y += 0.00015;'''

if old_anim_block in code:
    code = code.replace(old_anim_block, new_anim_block)
    print("Replaced animation loop block")
else:
    print("Warning: old_anim_block not found")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated generate_dense_viewer.py successfully!")
