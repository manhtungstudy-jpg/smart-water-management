import sys

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Big C color
old_big_c = """      pos: [-280, 0, -180],
      size: [70, 24, 60],
      color: isDark ? 0xdc2626 : 0xb91c1c,
      name: 'Đại Siêu Thị Big C Thăng Long (GO!)',"""

new_big_c = """      pos: [-280, 0, -180],
      size: [70, 24, 60],
      color: isDark ? 0xf59e0b : 0xd97706,
      name: 'Đại Siêu Thị Big C Thăng Long (GO!)',"""

assert old_big_c in content, 'Big C block not found!'
content = content.replace(old_big_c, new_big_c)
print('1. Big C updated successfully')

# 2. Update createRoad to remove orange yellowLineMat medians
old_road_median = """      // Center Median or Dashed Lanes
      if (hasMedian && width >= 20) {
        const medianGeo = new THREE.PlaneGeometry(2.2, length);
        const median = new THREE.Mesh(medianGeo, yellowLineMat);
        median.rotation.x = -Math.PI / 2;
        if (isZAligned) median.position.set(x, 0.08, z);
        else { median.rotation.z = Math.PI / 2; median.position.set(x, 0.08, z); }
        roadGroup.add(median);
      } else {
        const dashCount = Math.floor(length / 18);
        for (let i = 0; i < dashCount; i++) {
          const dashGeo = new THREE.PlaneGeometry(0.6, 6);
          const dash = new THREE.Mesh(dashGeo, markMat);
          dash.rotation.x = -Math.PI / 2;
          if (isZAligned) dash.position.set(x, 0.08, z - length / 2 + i * 18 + 9);
          else { dash.rotation.z = Math.PI / 2; dash.position.set(x - length / 2 + i * 18 + 9, 0.08, z); }
          roadGroup.add(dash);
        }
      }"""

new_road_median = """      // Center Dashed Lanes (Clean road lines, no orange medians)
      const dashCount = Math.floor(length / 24);
      for (let i = 0; i < dashCount; i++) {
        const dashGeo = new THREE.PlaneGeometry(0.5, 6);
        const dash = new THREE.Mesh(dashGeo, markMat);
        dash.rotation.x = -Math.PI / 2;
        if (isZAligned) dash.position.set(x, 0.08, z - length / 2 + i * 24 + 12);
        else { dash.rotation.z = Math.PI / 2; dash.position.set(x - length / 2 + i * 24 + 12, 0.08, z); }
        roadGroup.add(dash);
      }"""

assert old_road_median in content, 'Road median block not found!'
content = content.replace(old_road_median, new_road_median)
print('2. Road medians removed successfully')

# 3. Update Lakes (waterMat + stone/park border)
old_lakes = """    const waterMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0284c7 : 0x0ea5e9,
      roughness: 0.05,
      metalness: 0.85,
      transparent: true,
      opacity: isDark ? 0.92 : 0.82
    });
    const lakeNhanChinhGeo = new THREE.PlaneGeometry(160, 140);
    const lakeNhanChinh = new THREE.Mesh(lakeNhanChinhGeo, waterMat);
    lakeNhanChinh.rotation.x = -Math.PI / 2;
    lakeNhanChinh.position.set(-260, 0.25, 95);
    lakeNhanChinh.receiveShadow = true;
    scene.add(lakeNhanChinh);

    const lakeNccGeo = new THREE.PlaneGeometry(220, 150);
    const lakeNcc = new THREE.Mesh(lakeNccGeo, waterMat);
    lakeNcc.rotation.x = -Math.PI / 2;
    lakeNcc.position.set(-540, 0.25, 120);
    lakeNcc.receiveShadow = true;
    scene.add(lakeNcc);"""

new_lakes = """    const waterMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x082f49 : 0x0369a1,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: isDark ? 0.88 : 0.75
    });
    const parkBorderMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x064e3b : 0x166534,
      roughness: 0.9
    });
    const lakeNhanChinhGeo = new THREE.PlaneGeometry(160, 140);
    const lakeNhanChinh = new THREE.Mesh(lakeNhanChinhGeo, waterMat);
    lakeNhanChinh.rotation.x = -Math.PI / 2;
    lakeNhanChinh.position.set(-260, 0.25, 95);
    lakeNhanChinh.receiveShadow = true;
    scene.add(lakeNhanChinh);

    const lakeBorderGeo = new THREE.PlaneGeometry(168, 148);
    const lakeBorder = new THREE.Mesh(lakeBorderGeo, parkBorderMat);
    lakeBorder.rotation.x = -Math.PI / 2;
    lakeBorder.position.set(-260, 0.2, 95);
    scene.add(lakeBorder);

    const lakeNccGeo = new THREE.PlaneGeometry(220, 150);
    const lakeNcc = new THREE.Mesh(lakeNccGeo, waterMat);
    lakeNcc.rotation.x = -Math.PI / 2;
    lakeNcc.position.set(-540, 0.25, 120);
    lakeNcc.receiveShadow = true;
    scene.add(lakeNcc);"""

assert old_lakes in content, 'Lakes block not found!'
content = content.replace(old_lakes, new_lakes)
print('3. Lakes updated successfully')

# 4. Update create3DPipe (Self-illuminating, no receiveShadow, bright neon cyan/azure/teal)
old_pipe_func = """      const curve = new THREE.CatmullRomCurve3(points);
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
        });"""

new_pipe_func = """      // Vibrant high-visibility water colors per tier:
      // Tier 1: Electric Cyan 0x00f0ff (never dark)
      // Tier 2: Sky Azure 0x38bdf8
      // Tier 3: Mint Aqua 0x2dd4bf
      // Tier 4: Warm Amber 0xfbbf24
      const dynamicColor = tier === 1 ? 0x00f0ff : (tier === 2 ? 0x38bdf8 : (tier === 3 ? 0x2dd4bf : (data?.status?.includes('CẮT') ? 0x64748b : 0xfbbf24)));
      const activeColor = isFlowing ? dynamicColor : 0x475569;

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, radius, 14, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: activeColor,
        roughness: 0.2,
        metalness: 0.15,
        emissive: isFlowing ? activeColor : 0x000000,
        emissiveIntensity: isFlowing ? (isDark ? 0.72 : 0.52) : 0.0
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.castShadow = false;
      tubeMesh.receiveShadow = false; // Do not receive shadows from tall buildings!
      tubeMesh.userData = { name, id: pipeId, type: 'Pipe', data };
      pipeGroup.add(tubeMesh);
      clickableObjectsRef.current.push(tubeMesh);

      // Fluid Flow Particle Animation
      if (isFlowing) {
        const count = tier === 1 ? 20 : (tier === 2 ? 12 : (tier === 3 ? 8 : 4));
        const beadGeo = new THREE.SphereGeometry(radius * 1.3, 12, 12);
        const beadMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: tier === 1 ? 0x00f0ff : (tier === 2 ? 0x38bdf8 : 0x2dd4bf),
          emissiveIntensity: 1.4,
          roughness: 0.1
        });"""

assert old_pipe_func in content, 'Pipe func block not found!'
content = content.replace(old_pipe_func, new_pipe_func)
print('4. Pipe illumination & shadow fix updated successfully')

# 5. Update createSmartValve badge (High-contrast card with black bold text)
old_valve_badge = """      // Floating 3D Badge
      const canvas = document.createElement('canvas');
      canvas.width = 384;
      canvas.height = 96;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = isClosed ? '#dc2626' : '#16a34a';
      ctx.beginPath();
      ctx.roundRect(8, 8, 368, 80, 20);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isClosed ? `🔒 ${id}: ĐÃ ĐÓNG (CẮT NƯỚC)` : `🔓 ${id}: ĐANG MỞ (CLICK KHÓA)`, 192, 48);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(0, 11, 0);
      sprite.scale.set(28, 7, 1);
      vGroup.add(sprite);"""

new_valve_badge = """      // Floating 3D Badge with high-contrast BLACK text
      const canvas = document.createElement('canvas');
      canvas.width = 420;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      // Background: Crisp light amber-yellow (#fef08a) when open, soft light red (#fee2e2) when closed
      ctx.fillStyle = isClosed ? '#fee2e2' : '#fef08a';
      ctx.beginPath();
      ctx.roundRect(8, 8, 404, 84, 18);
      ctx.fill();
      ctx.strokeStyle = isClosed ? '#dc2626' : '#15803d';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Subtle inner border for crisp SCADA card appearance
      ctx.strokeStyle = isClosed ? '#b91c1c' : '#166534';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(14, 14, 392, 72);

      // Chữ đen đậm nét (Black Bold Text)
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isClosed ? `🔒 ${id}: ĐÃ ĐÓNG (CẮT NƯỚC)` : `🔓 ${id}: ĐANG MỞ (CLICK KHÓA)`, 210, 50);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(0, 12, 0);
      sprite.scale.set(30, 7.5, 1);
      vGroup.add(sprite);"""

assert old_valve_badge in content, 'Valve badge block not found!'
content = content.replace(old_valve_badge, new_valve_badge)
print('5. Valve badge black bold text updated successfully')

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(content)

print('SUCCESS: All 5 updates written to generate_dense_viewer.py')
