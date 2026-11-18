# -*- coding: utf-8 -*-
with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Add viewMode to component props
code = code.replace(
    "  compact = false,\n  onSelectAsset\n}) {",
    "  compact = false,\n  viewMode = '3d',\n  onSelectAsset\n}) {"
)

# 2. Add isXRay and is2D flags in useEffect
old_flags = "    const isDark = theme === 'dark';"
new_flags = """    const isDark = theme === 'dark';
    const isXRay = viewMode === 'xray';
    const is2D = viewMode === '2d';"""

if old_flags in code:
    code = code.replace(old_flags, new_flags, 1)
    print("Added viewMode flags.")

# 3. Adjust camera and controls for 2D mode
old_cam = """    // 2. CAMERA SETUP (2.5KM REGIONAL SCALE)
    const camera = new THREE.PerspectiveCamera(42, width / height, 2, 8500);
    camera.position.set(780, 720, 880);
    cameraRef.current = camera;"""

new_cam = """    // 2. CAMERA SETUP (2.5KM REGIONAL SCALE)
    const camera = new THREE.PerspectiveCamera(is2D ? 36 : 42, width / height, 2, 8500);
    if (is2D) {
      camera.position.set(0, 2200, 0.1);
    } else {
      camera.position.set(780, 720, 880);
    }
    cameraRef.current = camera;"""

if old_cam in code:
    code = code.replace(old_cam, new_cam)
    print("Updated camera for 2D mode.")

old_ctrl = """    controls.maxPolarAngle = Math.PI / 2 - 0.03;
    controls.minDistance = 25;
    controls.maxDistance = 3400;
    controls.target.set(0, 15, 0);"""

new_ctrl = """    controls.maxPolarAngle = is2D ? 0.05 : Math.PI / 2 - 0.03;
    controls.minDistance = 25;
    controls.maxDistance = 3400;
    controls.target.set(0, is2D ? 0 : 15, 0);"""

if old_ctrl in code:
    code = code.replace(old_ctrl, new_ctrl)
    print("Updated controls for 2D mode.")

# 4. Implement X-Ray in create3DBuilding
old_bldg = """      const bodyMat = new THREE.MeshStandardMaterial({
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

new_bldg = """      const bodyMat = new THREE.MeshStandardMaterial({
        color: isXRay ? 0x0284c7 : activeColor,
        metalness: isXRay ? 0.05 : (isCutOff ? 0.2 : 0.42),
        roughness: isXRay ? 0.1 : 0.22,
        transparent: true,
        opacity: isXRay ? 0.12 : (isCutOff ? 0.75 : (isDark ? 0.92 : 0.94)),
        depthWrite: !isXRay,
        emissive: isCutOff ? 0x991b1b : (isXRay ? 0x0284c7 : (isDark ? activeColor : 0x000000)),
        emissiveIntensity: isCutOff ? 0.35 : (isXRay ? 0.04 : 0.18)
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.position.y = h / 2;
      bodyMesh.castShadow = !isXRay;
      bodyMesh.receiveShadow = !isXRay;
      bGroup.add(bodyMesh);

      const edges = new THREE.EdgesGeometry(bodyGeo);
      const edgeLine = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({
          color: isCutOff ? 0xfca5a5 : (isDark ? 0x7dd3fc : 0x0284c7),
          linewidth: isXRay ? 1.0 : (isCutOff ? 2.5 : 1.5),
          transparent: isXRay,
          opacity: isXRay ? 0.28 : 1.0
        })
      );"""

if old_bldg in code:
    code = code.replace(old_bldg, new_bldg)
    print("Updated create3DBuilding with X-Ray transparency.")

# 5. Implement X-Ray in createDenseShophouseBlock
old_shop = """          const houseMat = new THREE.MeshStandardMaterial({
            color: isCutOff ? 0xef4444 : houseColor,
            metalness: isCutOff ? 0.2 : 0.25,
            roughness: 0.35,
            transparent: true,
            opacity: isCutOff ? 0.75 : (isDark ? 0.88 : 0.92),
            emissive: isCutOff ? 0x991b1b : (isDark ? houseColor : 0x000000),
            emissiveIntensity: isCutOff ? 0.3 : 0.0
          });
          const houseMesh = new THREE.Mesh(houseGeo, houseMat);
          houseMesh.position.set(px, h / 2, pz);
          houseMesh.castShadow = true;
          houseMesh.receiveShadow = true;

          const tankGeo = new THREE.CylinderGeometry(w * 0.18, w * 0.18, 2.2, 12);
          const tankMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.2 });
          const tankMesh = new THREE.Mesh(tankGeo, tankMat);
          tankMesh.position.set(px, h + 1.1, pz);
          blockGroup.add(tankMesh);

          const houseEdges = new THREE.EdgesGeometry(houseGeo);
          const edgeMesh = new THREE.LineSegments(
            houseEdges,
            new THREE.LineBasicMaterial({
              color: isCutOff ? 0xfca5a5 : (isDark ? 0x64748b : 0x94a3b8),
              linewidth: 1
            })
          );"""

new_shop = """          const houseMat = new THREE.MeshStandardMaterial({
            color: isXRay ? 0x0284c7 : (isCutOff ? 0xef4444 : houseColor),
            metalness: isXRay ? 0.05 : (isCutOff ? 0.2 : 0.25),
            roughness: isXRay ? 0.1 : 0.35,
            transparent: true,
            opacity: isXRay ? 0.08 : (isCutOff ? 0.75 : (isDark ? 0.88 : 0.92)),
            depthWrite: !isXRay,
            emissive: isCutOff ? 0x991b1b : (isDark ? houseColor : 0x000000),
            emissiveIntensity: isCutOff ? 0.3 : (isDark ? (isXRay ? 0.02 : 0.12) : 0.0)
          });
          const houseMesh = new THREE.Mesh(houseGeo, houseMat);
          houseMesh.position.set(px, h / 2, pz);
          houseMesh.castShadow = !isXRay;
          houseMesh.receiveShadow = !isXRay;

          const tankGeo = new THREE.CylinderGeometry(w * 0.18, w * 0.18, 2.2, 12);
          const tankMat = new THREE.MeshStandardMaterial({
            color: 0x94a3b8,
            metalness: 0.85,
            roughness: 0.2,
            transparent: isXRay,
            opacity: isXRay ? 0.15 : 1.0,
            depthWrite: !isXRay
          });
          const tankMesh = new THREE.Mesh(tankGeo, tankMat);
          tankMesh.position.set(px, h + 1.1, pz);
          blockGroup.add(tankMesh);

          const houseEdges = new THREE.EdgesGeometry(houseGeo);
          const edgeMesh = new THREE.LineSegments(
            houseEdges,
            new THREE.LineBasicMaterial({
              color: isCutOff ? 0xfca5a5 : (isDark ? 0x64748b : 0x94a3b8),
              linewidth: 1,
              transparent: isXRay,
              opacity: isXRay ? 0.2 : 1.0
            })
          );"""

if old_shop in code:
    code = code.replace(old_shop, new_shop)
    print("Updated createDenseShophouseBlock with X-Ray.")

# 6. Remove bottom legend bar 'Click chốt van...'
old_legend = """        {!compact && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.85)',
            color: '#94a3b8',
            padding: '5px 12px',
            borderRadius: '6px',
            fontSize: '11px',
            maxWidth: '460px',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            🖱️ <b>Click Chốt Van:</b> Đóng / Mở cắt nước mô phỏng · <b>Click Tòa Nhà / Nhà Phố / Trụ PCCC:</b> Tra cứu thông số · <b>Kéo chuột:</b> Xoay 360°
          </div>
        )}"""

if old_legend in code:
    code = code.replace(old_legend, "")
    print("Removed bottom legend bar 'Click chốt van...'.")

# 7. Add viewMode to useEffect dependency array
code = code.replace(
    "}, [theme, heatmap, assetsLayer, closedValves, simTime]);",
    "}, [theme, heatmap, assetsLayer, closedValves, simTime, viewMode]);"
)

with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\generate_dense_viewer.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("generate_dense_viewer.py updated with viewMode and X-Ray support!")
