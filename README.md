# Smart Water Management System (SWMS) & 3D Digital Twin
> Hệ thống Giám sát Cấp nước Thông minh & Bản sao số 3D (Digital Twin) theo chuẩn Qatium tại Khu Đô Thị Trung Hòa – Nhân Chính, Hà Nội.

## 🚀 Live Demo
Trải nghiệm trực tiếp giao diện tương tác:
👉 **[https://manhtungstudy-jpg.github.io/smart-water-management/](https://manhtungstudy-jpg.github.io/smart-water-management/)**

---

## 🌟 Tính Năng Chính

1. **Tổng quan Giám sát (Overview Dashboard)**:
   - 4 Thẻ KPI động: Tổng lưu lượng cấp ($m^3/h$), Áp lực trung bình ($bar$), Tỷ lệ thất thoát ($NRW\ 10.8\% - 12.5\%$), Nhật ký sự cố tức thời.
   - Bản đồ số GIS 3D phân vùng DMA thu nhỏ (DMA THNC-01, THNC-02, THNC-03).
   - Biểu đồ Thủy lực 24h đường đôi: So sánh **Đường Thực Tế (Actual)** và **Đường Định Mức (Baseline)**, tự động khoanh vùng bất thường giờ cao điểm và lưu lượng đêm (MNF).
   - Bảng nhật ký sự cố SCADA phân loại mức độ (High Pressure, Low Pressure, Leak Suspected, Water Quality) có tính năng điều động kỹ thuật (Dispatch / Acknowledge).

2. **Bản sao số 3D Digital Twin (WebGL / Three.js)**:
   - Mô hình không gian 3D quy mô 2.500m × 2.500m KĐT Trung Hòa – Nhân Chính với bầu trời khí quyển Google Maps Atmospheric Sky.
   - 430+ khối nhà kiến trúc 3D (Keangnam Landmark 72, Diamond Flower 36T, Tháp Biểu tượng 34T, Charmvit & Grand Plaza, D'Capitale, Amsterdam...).
   - Mạng lưới đường ống 3 cấp: Tuyến truyền dẫn D500, Mạch vòng phân phối D200, và Nhánh dịch vụ đấu nối D100/50.
   - **8 Chốt khóa thông minh (Smart Isolation Valves V01 - V08)**: Cho phép thao tác đóng/mở van mô phỏng cắt nước cô lập vùng sự cố theo thời gian thực (hiển thị màu đỏ và cảnh báo số hộ dân ảnh hưởng).
   - 8 Camera Bookmarks phóng nhanh đến các địa danh trọng điểm.
   - Thanh tua thời gian mô phỏng 24h với dòng hạt thủy lực phát sáng (dynamic fluid beads).

3. **Áp lực & Lưu lượng SCADA (Telemetry)**:
   - Giám sát 6 điểm quan trắc tự động kết nối SCADA/NB-IoT (Trạm bơm Lê Văn Lương, cổng vào DMA THNC-01, trục Hoàng Đạo Thúy, Charmvit, nhánh 17T1-17T4, hố xả cặn Big C).
   - Tự động phát hiện cảnh báo áp cao hoặc sụt áp cục bộ so với dải định mức an toàn.
   - Xuất dữ liệu bảng ra file Excel/CSV.

4. **Phát hiện Rò rỉ & Dò sóng âm (NRW & Acoustic Correlation)**:
   - Phân tích lưu lượng tối thiểu ban đêm (MNF - Minimum Night Flow từ 02:00 - 04:00 sáng).
   - Bảng xếp hạng mức độ ưu tiên xử lý rò rỉ theo từng tiểu vùng DMA THNC-01, 02, 03.
   - **Công cụ Dò sóng âm tương quan (Acoustic Correlator)**: Tự động định vị chính xác vị trí rò ngầm dưới lòng đường, ước tính lưu lượng thất thoát ($m^3/h$) và đề xuất giải pháp xử lý.

5. **Chất lượng Nước Đa Chỉ Tiêu (Water Quality QCVN)**:
   - Quan trắc 4 chỉ số hóa lý cốt lõi đạt chuẩn QCVN 01-1:2018/BYT: Độ đục (NTU), Clo dư ($mg/L$), Độ pH, Tổng chất rắn hòa tan TDS ($ppm$).
   - Bảng giám sát chi tiết 4 trạm quan trắc online và cơ chế van tự động xả cặn (Auto Flushing Valve).

6. **Kiểm toán Thất thoát IWA (Water Balance Audit)**:
   - Báo cáo cân bằng nước theo chuẩn mực Hiệp hội Nước Quốc tế (IWA) cho quy mô toàn KĐT Trung Hòa - Nhân Chính (380.000 $m^3$/tháng).
   - Phân tách thất thoát vật lý (rò rỉ ống ngầm) và thất thoát thương mại (sai số đồng hồ).
   - Tích hợp in báo cáo ra PDF hoặc tải file CSV.

---

## 🛠️ Cài Đặt & Chạy Cục Bộ

```bash
# Cài đặt dependencies
npm install

# Khởi chạy máy chủ phát triển (mặc định port 3000)
npm run dev

# Đóng gói sản phẩm
npm run build

# Xem thử bản đóng gói
npm run preview
```
