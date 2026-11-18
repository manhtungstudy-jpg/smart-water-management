# -*- coding: utf-8 -*-
"""
Script to implement Combined Options 1 + 2 + 3 in generate_dense_viewer.py:
1. Geometry & Elevation: Scale radii 3x-3.5x, elevate pipes to y=4.5m - 7.2m off ground.
2. High-Contrast Color Hierarchy:
   - Dim road centerlines and grid lines to subtle dark slate/royal blue.
   - Tier 1: Brilliant Electric Neon Cyan (0x00f0ff) with 1.35 emissive.
   - Tier 2: Vivid Neon Amber/Gold (0xffaa00) with 1.25 emissive.
   - Tier 3/4: Radiant Electric Purple (0xc084fc) with 1.1 emissive.
3. Fluid Flow Animation Overhaul:
   - Meteor pulse flow beads (1.55x visual pipe radius) with emissiveIntensity = 4.0.
   - Increased particle count and faster velocity for instant visual comprehension from 25X zoom.
"""

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Subordinate Roads & Grid Lines (Option 2)
old_road_mats = """    const roadMat = new THREE.MeshStandardMaterial({
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

new_road_mats = """    const roadMat = new THREE.MeshStandardMaterial({
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

if old_road_mats in code:
    code = code.replace(old_road_mats, new_road_mats)
    print("Updated road materials to subtle background tone.")
else:
    print("Warning: old_road_mats not found")

# Also subordinate grid helper
old_grid_helper = "const gridHelper = new THREE.GridHelper(2600, 130, isDark ? 0x38bdf8 : 0x0284c7, isDark ? 0x1e3a8a : 0xcbd5e1);"
new_grid_helper = "const gridHelper = new THREE.GridHelper(2600, 130, isDark ? 0x1e3a8a : 0x0284c7, isDark ? 0x081322 : 0xcbd5e1);"
if old_grid_helper in code:
    code = code.replace(old_grid_helper, new_grid_helper)
    print("Updated grid helper to subtle blueprint matrix.")

# 2. Overhaul create3DPipe (Options 1, 2, 3)
import re

old_pipe_func = re.search(r'    const create3DPipe = \(points, radius, color, name, pipeId, isFlowing, tier, data\) => \{[\s\S]*?return tubeMesh;\s*\};', code)

new_pipe_func = """    const create3DPipe = (points, radius, color, name, pipeId, isFlowing, tier, data) => {
      if (tier === 1 && !assetsLayer.pipesPrimary) return null;
      if (tier === 2 && !assetsLayer.pipesSecondary) return null;
      if (tier === 3 && !assetsLayer.pipesTertiary) return null;
      if (tier === 4 && !assetsLayer.pipesService) return null;
      if (!assetsLayer.pipes) return null;

      // Option 1: Visual Scaling (Radii 3.0x - 3.5x for unmistakable legibility at regional 25X zoom)
      const visualRadius = tier === 1 ? Math.max(radius * 3.4, 5.4) : (tier === 2 ? Math.max(radius * 3.0, 3.6) : Math.max(radius * 2.8, 2.2));

      // Option 1: Elevation Offset (Floating pipeline layer elevated at y=4.5m - 7.2m above roads and terrain)
      const elevationOffset = tier === 1 ? 7.2 : (tier === 2 ? 5.8 : 4.5);
      const elevatedPoints = points.map(pt => new THREE.Vector3(pt.x, Math.max(pt.y, 0) + elevationOffset, pt.z));

      const curve = new THREE.CatmullRomCurve3(elevatedPoints);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, visualRadius, 14, false);

      // Option 2: High-Contrast Color & Radiant Emissive Palette
      // - Tier 1: Electric Neon Cyan (0x00f0ff)
      // - Tier 2: Radiant Neon Amber/Gold (0xffaa00)
      // - Tier 3/4: Vivid Neon Purple (0xc084fc)
      let pipeColor, pipeEmissive;
      if (tier === 1) {
        pipeColor = isDark ? 0x00f0ff : 0x0284c7;
        pipeEmissive = 1.35;
      } else if (tier === 2) {
        pipeColor = isDark ? 0xffaa00 : 0xd97706;
        pipeEmissive = 1.25;
      } else {
        pipeColor = isDark ? 0xc084fc : 0x7c3aed;
        pipeEmissive = 1.05;
      }

      const tubeMat = new THREE.MeshStandardMaterial({
        color: isFlowing ? pipeColor : 0x475569,
        roughness: 0.15,
        metalness: 0.45,
        emissive: isFlowing ? (isDark ? pipeColor : 0x000000) : 0x000000,
        emissiveIntensity: isFlowing ? pipeEmissive : 0.0,
        transparent: true,
        opacity: isFlowing ? 0.96 : 0.6
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.castShadow = true;
      tubeMesh.receiveShadow = true;
      tubeMesh.userData = { name, id: pipeId, type: 'Pipe', data };
      pipeGroup.add(tubeMesh);
      clickableObjectsRef.current.push(tubeMesh);

      // Option 3: Overhauled Fluid Flow Animation (Meteor Pulse Packets)
      if (isFlowing) {
        const count = tier === 1 ? 30 : (tier === 2 ? 20 : 12);
        const beadRadius = visualRadius * 1.55;
        const beadGeo = new THREE.SphereGeometry(beadRadius, 14, 14);
        const beadMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: tier === 1 ? 0x00f0ff : (tier === 2 ? 0xffaa00 : 0xe9d5ff),
          emissiveIntensity: 4.2,
          roughness: 0.05,
          metalness: 0.1
        });

        for (let i = 0; i < count; i++) {
          const p = new THREE.Mesh(beadGeo, beadMat);
          scene.add(p);
          flowParticlesRef.current.push({
            mesh: p,
            curve: curve,
            t: i / count,
            speed: tier === 1 ? 0.0042 : (tier === 2 ? 0.0034 : 0.0025)
          });
        }
      }

      return tubeMesh;
    };"""

if old_pipe_func:
    code = code[:old_pipe_func.start()] + new_pipe_func + code[old_pipe_func.end():]
    print("Replaced create3DPipe successfully.")
else:
    print("Warning: old_pipe_func not found")

# 3. Elevate Smart Valves to match elevated pipes
old_valve_pos = "vGroup.position.set(pos[0], 0, pos[2]);"
new_valve_pos = """vGroup.position.set(pos[0], 5.8, pos[2]);
      vGroup.scale.set(1.4, 1.4, 1.4);"""

if old_valve_pos in code:
    code = code.replace(old_valve_pos, new_valve_pos)
    print("Elevated smart valves to pipe height.")
else:
    print("Warning: old_valve_pos not found")

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("generate_dense_viewer.py updated with Options 1+2+3 successfully!")
