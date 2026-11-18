# -*- coding: utf-8 -*-
with open('App.jsx', 'r', encoding='utf-8') as f:
    app_code = f.read()

app_code = app_code.replace("dma: 'DMA Cụm D'Capitale - Mễ Trì'", 'dma: "DMA Cụm D\'Capitale - Mễ Trì"')
app_code = app_code.replace("'Tổ Hợp Vinhomes D'Capitale (Tháp C1, C2, C3, C4, C5, C6)'", '"Tổ Hợp Vinhomes D\'Capitale (Tháp C1, C2, C3, C4, C5, C6)"')

with open('App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("App.jsx fixed successfully.")

with open('Network3DViewer.jsx', 'r', encoding='utf-8') as f:
    viewer_code = f.read()

viewer_code = viewer_code.replace("bldg: 'Vinhomes D'Capitale C1'", 'bldg: "Vinhomes D\'Capitale C1"')
viewer_code = viewer_code.replace("bldg: 'Vinhomes D'Capitale C2'", 'bldg: "Vinhomes D\'Capitale C2"')
viewer_code = viewer_code.replace("bldg: 'Vinhomes D'Capitale C3'", 'bldg: "Vinhomes D\'Capitale C3"')

with open('Network3DViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(viewer_code)

print("Network3DViewer.jsx fixed successfully.")
