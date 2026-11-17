import React, { useState } from 'react';
import {
  Droplets,
  Activity,
  AlertTriangle,
  TrendingDown,
  Gauge,
  MapPin,
  Layers,
  Search,
  Bell,
  Download,
  Filter,
  CheckCircle2,
  RefreshCw,
  Sliders,
  ChevronRight,
  ShieldAlert,
  Zap,
  Building,
  Radio,
  FileText,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDma, setSelectedDma] = useState('DMA 2');
  const [timeframe, setTimeframe] = useState('24h'); // '24h' | '7d' | '30d'
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [gisLayer, setGisLayer] = useState({ pipes: true, valves: true, sensors: true });
  const [searchQuery, setSearchQuery] = useState('');

  const [alarms, setAlarms] = useState([
    { id: 1, type: 'Áp lực cao bất thường', location: 'Trạm bơm Phân khu 3 (DMA 3)', time: '14:22', status: 'High Pressure', severity: 'danger', handled: false },
    { id: 2, type: 'Nghi vấn rò rỉ đêm (MNF)', location: 'Tuyến ống chính Zone A (DMA 1)', time: '13:50', status: 'Leak Suspected', severity: 'warning', handled: false },
    { id: 3, type: 'Sụt áp cục bộ', location: 'Khu biệt thự BT2 - Cụm B (DMA 2)', time: '12:15', status: 'Low Pressure', severity: 'warning', handled: true },
    { id: 4, type: 'Độ đục vượt chuẩn nhẹ (NTU)', location: 'Cửa xả Bể chứa ngầm Splendora', time: '10:04', status: 'Water Quality', severity: 'info', handled: false }
  ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAction = (id) => {
    setAlarms(prev => prev.map(a => {
      if (a.id === id) {
        const nextState = !a.handled;
        showToast(nextState ? `Đã điều động kỹ thuật viên xử lý: ${a.type}` : `Đã hoàn tác trạng thái sự cố: ${a.type}`);
        return { ...a, handled: nextState };
      }
      return a;
    }));
  };

  const handleExportCSV = (filename = 'water_management_report.csv') => {
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" 
      + "Diem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai\n"
      + "FM-01 (Dau vao Tong),Nha May Nuoc,145.8,3.8,Toi uu\n"
      + "PRV-02 (Giam ap),DMA 1,48.2,3.1,On dinh\n"
      + "PRV-03 (Giam ap),DMA 2,62.4,3.2,On dinh\n"
      + "FM-04 (Dong ho DMA),DMA 3,35.2,3.4,Canh bao Ap cao\n"
      + "SN-05 (Cam bien diem cut),DMA 2,0.0,2.1,Sut ap cuc bo\n"
      + "FM-06 (Ho Dieu Hoa),Splendora,18.5,2.9,Dang khoa\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Đã xuất và tải về: ${filename}`);
  };

  const handlePrint = () => {
    window.print();
  };

  const dmaDetails = {
    'DMA 1': { name: 'DMA 1 - Khu Biệt Thự Phía Nam', flow: '48.2 m³/h', pressure: '3.1 bar', households: 320, nrw: '11.8%', status: 'Bình thường' },
    'DMA 2': { name: 'DMA 2 - Cụm Trung Tâm & Công Viên', flow: '62.4 m³/h', pressure: '3.2 bar', households: 450, nrw: '13.2%', status: 'Ổn định' },
    'DMA 3': { name: 'DMA 3 - Khu Biệt Thự Ven Hồ', flow: '35.2 m³/h', pressure: '3.4 bar', households: 280, nrw: '10.5%', status: 'Cảnh báo áp lực' },
  };

  // Line Chart datasets for 24h, 7d, 30d
  const chartDataMap = {
    '24h': {
      title: 'Lưu Lượng Thủy Lực 24 Giờ (m³/h)',
      subtitle: 'So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline',
      points: [
        { label: '00h', actual: 68, baseline: 65, alert: false },
        { label: '02h', actual: 74, baseline: 60, alert: true, note: 'MNF vượt chuẩn (+14 m³/h)' },
        { label: '04h', actual: 62, baseline: 60, alert: false },
        { label: '06h', actual: 110, baseline: 105, alert: false },
        { label: '08h', actual: 172, baseline: 160, alert: true, note: 'Đỉnh cao điểm sáng' },
        { label: '10h', actual: 130, baseline: 132, alert: false },
        { label: '12h', actual: 142, baseline: 140, alert: false },
        { label: '14h', actual: 145.8, baseline: 138, alert: false },
        { label: '16h', actual: 138, baseline: 135, alert: false },
        { label: '18h', actual: 165, baseline: 162, alert: false },
        { label: '20h', actual: 152, baseline: 150, alert: false },
        { label: '22h', actual: 98, baseline: 95, alert: false }
      ]
    },
    '7d': {
      title: 'Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)',
      subtitle: 'Xu hướng cấp nước theo ngày trong tuần',
      points: [
        { label: 'Thứ 2', actual: 3250, baseline: 3200, alert: false },
        { label: 'Thứ 3', actual: 3310, baseline: 3220, alert: false },
        { label: 'Thứ 4', actual: 3480, baseline: 3250, alert: true, note: 'Tăng vọt giữa tuần (+7%)' },
        { label: 'Thứ 5', actual: 3290, baseline: 3240, alert: false },
        { label: 'Thứ 6', actual: 3380, baseline: 3300, alert: false },
        { label: 'Thứ 7', actual: 3620, baseline: 3550, alert: false },
        { label: 'CN', actual: 3590, baseline: 3500, alert: false }
      ]
    },
    '30d': {
      title: 'Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)',
      subtitle: 'Đường biến thiên chu kỳ tháng',
      points: [
        { label: 'Tuần 1', actual: 23100, baseline: 22800, alert: false },
        { label: 'Tuần 2', actual: 24500, baseline: 23000, alert: true, note: 'Đợt nắng nóng tăng tiêu thụ' },
        { label: 'Tuần 3', actual: 23200, baseline: 22900, alert: false },
        { label: 'Tuần 4', actual: 22800, baseline: 22700, alert: false }
      ]
    }
  };

  const currentChart = chartDataMap[timeframe];
  const maxVal = Math.max(...currentChart.points.map(p => Math.max(p.actual, p.baseline))) * 1.15;
  const minVal = Math.min(...currentChart.points.map(p => Math.min(p.actual, p.baseline))) * 0.85;

  const getY = (val) => {
    const height = 180;
    const topPadding = 20;
    return height - ((val - minVal) / (maxVal - minVal)) * (height - topPadding) + 10;
  };

  const getPointsPath = (key) => {
    const width = 620;
    const step = width / (currentChart.points.length - 1);
    return currentChart.points.map((pt, i) => `${i * step + 40},${getY(pt[key])}`).join(' L ');
  };

  return (
    <div className="app-layout">
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`app-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-badge">
            <Droplets size={22} />
          </div>
          <div>
            <div className="logo-title">Smart Water Management</div>
            <div className="logo-sub">IoE Infrastructure</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-label">Phân Hệ Nghiệp Vụ</div>
          <button
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => { setActiveTab('overview'); setMobileMenuOpen(false); }}
          >
            <Activity size={18} />
            <span>1. Tổng quan Giám sát</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'gis' ? 'active' : ''}`}
            onClick={() => { setActiveTab('gis'); setMobileMenuOpen(false); }}
          >
            <Layers size={18} />
            <span>2. Bản đồ Mạng lưới GIS</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'telemetry' ? 'active' : ''}`}
            onClick={() => { setActiveTab('telemetry'); setMobileMenuOpen(false); }}
          >
            <Gauge size={18} />
            <span>3. Áp lực & Lưu lượng</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'leaks' ? 'active' : ''}`}
            onClick={() => { setActiveTab('leaks'); setMobileMenuOpen(false); }}
          >
            <AlertTriangle size={18} />
            <span>4. Phát hiện Rò rỉ (NRW)</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'quality' ? 'active' : ''}`}
            onClick={() => { setActiveTab('quality'); setMobileMenuOpen(false); }}
          >
            <Droplets size={18} />
            <span>5. Chất lượng Nước</span>
          </button>

          <div className="nav-label" style={{ marginTop: '16px' }}>Báo Cáo & Quản Trị</div>
          <button
            className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => { setActiveTab('reports'); setMobileMenuOpen(false); }}
          >
            <Download size={18} />
            <span>6. Kiểm toán Thất thoát</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="system-status">
            <span className="status-dot"></span>
            <span>IoE Mesh Online (48 Node)</span>
          </div>
          <RefreshCw size={14} color="#94a3b8" style={{ cursor: 'pointer' }} onClick={() => showToast("Đã đồng bộ lại 48 node cảm biến")} />
        </div>
      </aside>

      {/* Main Container */}
      <div className="main-wrapper">
        {/* Top Navbar */}
        <header className="top-header">
          <div className="header-left-group">
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="header-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Tìm kiếm phân vùng DMA, trạm bơm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="header-actions">
            <button className="action-btn" onClick={() => handleExportCSV('Bao_Cao_Van_Hanh_Ngay.csv')} title="Xuất Báo Cáo Ngày dạng CSV">
              <Download size={15} />
              <span>Xuất Báo Cáo Ngày</span>
            </button>
            <button
              className="action-btn"
              style={{ position: 'relative' }}
              onClick={() => showToast("Cảnh báo: 1 sự cố áp cao cần xử lý tại DMA 3")}
              aria-label="Thông báo sự cố"
              title="Xem thông báo sự cố"
            >
              <Bell size={16} />
              <span style={{
                position: 'absolute',
                top: '6px',
                right: '8px',
                width: '7px',
                height: '7px',
                background: '#ef4444',
                borderRadius: '50%'
              }}></span>
            </button>
            <div className="user-profile" title="Tài khoản kỹ sư trực ban">
              <div className="user-avatar">AD</div>
              <div className="user-info">
                <span className="user-name">Kỹ Sư Trực Ban</span>
                <span className="user-role">Vận Hành Cấp Nước</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content depending on Active Tab */}
        <main className="content-container">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <>
              <div className="page-title-row">
                <div>
                  <h1 className="page-title">Hệ Thống Quản Lý Cấp Nước Thông Minh</h1>
                  <p className="page-subtitle">Giám sát áp lực, lưu lượng 3 phân vùng DMA và tỷ lệ thất thoát nước thời gian thực</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span className="metric-badge badge-success">
                    <CheckCircle2 size={13} />
                    <span>Trạm bơm chính hoạt động 100%</span>
                  </span>
                </div>
              </div>

              {/* 4 KPI Cards */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span>Tổng Lưu Lượng Cấp (Inflow)</span>
                    <div className="metric-icon-wrap" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                      <Droplets size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">145.8</span>
                    <span className="metric-unit">m³/h</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-success">↑ 3.2% so với định mức giờ</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Áp Lực Trung Bình Mạng Lưới</span>
                    <div className="metric-icon-wrap" style={{ background: '#ecfdf5', color: '#10b981' }}>
                      <Gauge size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">3.2</span>
                    <span className="metric-unit">bar</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-info">Dải tối ưu (2.8 - 3.5 bar)</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Tỷ Lệ Thất Thoát Nước (NRW)</span>
                    <div className="metric-icon-wrap" style={{ background: '#fef3c7', color: '#d97706' }}>
                      <TrendingDown size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">12.5%</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-success">↓ 1.1% so với tuần trước</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Cảnh Báo Kích Hoạt</span>
                    <div className="metric-icon-wrap" style={{ background: '#fee2e2', color: '#ef4444' }}>
                      <AlertTriangle size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value" style={{ color: '#ef4444' }}>
                      {alarms.filter(a => !a.handled).length}
                    </span>
                    <span className="metric-unit">sự cố cần xử lý</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-danger">1 rò rỉ nghi vấn đêm</span>
                  </div>
                </div>
              </div>

              {/* Main Dual Grid: GIS Map & LINE CHART */}
              <div className="dashboard-main-grid">
                {/* GIS Map */}
                <div className="panel-card">
                  <div className="panel-card-header">
                    <div className="panel-card-title">
                      <MapPin size={17} color="#0284c7" />
                      <span>Sơ Đồ Mạng Lưới Cấp Nước & Phân Vùng DMA</span>
                    </div>
                    <div className="panel-card-actions">
                      <button className="btn-sm btn-secondary" onClick={() => setActiveTab('gis')}>
                        Mở Rộng GIS →
                      </button>
                    </div>
                  </div>

                  <div className="map-canvas-container">
                    <svg className="map-svg" viewBox="0 0 700 440">
                      <rect width="700" height="440" fill="#f8fafc" />
                      <path d="M 0 350 Q 200 320 400 380 T 700 340 L 700 440 L 0 440 Z" fill="#e2e8f0" opacity="0.4" />
                      <path d="M 520 80 Q 640 120 620 280 T 540 400 L 700 400 L 700 80 Z" fill="#bae6fd" opacity="0.3" />
                      <text x="590" y="240" fill="#0284c7" fontSize="12" fontWeight="600" opacity="0.6">Hồ Điều Hòa</text>

                      {/* DMA 1 */}
                      <polygon
                        points="90,180 280,180 250,370 70,330"
                        fill={selectedDma === 'DMA 1' ? '#93c5fd' : '#dbeafe'}
                        stroke="#3b82f6"
                        strokeWidth={selectedDma === 'DMA 1' ? 3 : 1.5}
                        opacity="0.75"
                        onClick={() => setSelectedDma('DMA 1')}
                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                      />
                      <text x="140" y="270" fill="#1e40af" fontSize="13" fontWeight="700">DMA 1 (3.1 bar)</text>

                      {/* DMA 2 */}
                      <polygon
                        points="290,170 490,160 470,360 260,370"
                        fill={selectedDma === 'DMA 2' ? '#86efac' : '#dcfce7'}
                        stroke="#22c55e"
                        strokeWidth={selectedDma === 'DMA 2' ? 3 : 1.5}
                        opacity="0.75"
                        onClick={() => setSelectedDma('DMA 2')}
                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                      />
                      <text x="350" y="260" fill="#166534" fontSize="13" fontWeight="700">DMA 2 (3.2 bar)</text>

                      {/* DMA 3 */}
                      <polygon
                        points="180,40 450,40 480,150 280,160"
                        fill={selectedDma === 'DMA 3' ? '#cbd5e1' : '#f1f5f9'}
                        stroke="#64748b"
                        strokeWidth={selectedDma === 'DMA 3' ? 3 : 1.5}
                        opacity="0.8"
                        onClick={() => setSelectedDma('DMA 3')}
                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                      />
                      <text x="300" y="100" fill="#334155" fontSize="13" fontWeight="700">DMA 3 (3.4 bar)</text>

                      {/* Pipes */}
                      <path d="M 50 240 L 180 240 L 300 240 L 460 230" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" fill="none" />
                      <path d="M 180 240 L 180 80 L 320 80" stroke="#0284c7" strokeWidth="3.5" strokeDasharray="6,4" fill="none" />
                      <path d="M 360 240 L 360 340" stroke="#0284c7" strokeWidth="3" fill="none" />

                      {/* Pump Station Icons */}
                      <circle cx="50" cy="240" r="14" fill="#0284c7" stroke="#ffffff" strokeWidth="3" />
                      <text x="44" y="244" fill="#ffffff" fontSize="11" fontWeight="bold">P1</text>

                      <circle cx="300" cy="240" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="2.5" />
                      <text x="294" y="243" fill="#ffffff" fontSize="9" fontWeight="bold">P2</text>

                      {/* Sensor Nodes */}
                      <circle cx="160" cy="240" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="240" cy="190" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="400" cy="230" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="340" cy="80" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Pulsing Alert */}
                      <circle cx="160" cy="240" r="14" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.6">
                        <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>

                    <div className="map-overlay-badge">
                      <div className="map-overlay-title">{dmaDetails[selectedDma].name}</div>
                      <div className="map-overlay-sub">
                        Lưu lượng: <b>{dmaDetails[selectedDma].flow}</b> | Áp lực: <b>{dmaDetails[selectedDma].pressure}</b> | Thất thoát: <b>{dmaDetails[selectedDma].nrw}</b>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LINE CHART: THỦY LỰC ĐƯỜNG TRUNG BÌNH & THỰC TẾ (MỤC 1 & 3 YÊU CẦU) */}
                <div className="panel-card">
                  <div className="panel-card-header">
                    <div>
                      <div className="panel-card-title">
                        <Activity size={17} color="#0284c7" />
                        <span>Biểu Đồ Thủy Lực Giám Sát Bất Thường</span>
                      </div>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{currentChart.subtitle}</span>
                    </div>

                    {/* Bộ lọc Ngày / Tuần / Tháng */}
                    <div className="timeframe-group">
                      <button
                        className={`timeframe-btn ${timeframe === '24h' ? 'active' : ''}`}
                        onClick={() => setTimeframe('24h')}
                      >
                        24 Giờ
                      </button>
                      <button
                        className={`timeframe-btn ${timeframe === '7d' ? 'active' : ''}`}
                        onClick={() => setTimeframe('7d')}
                      >
                        7 Ngày
                      </button>
                      <button
                        className={`timeframe-btn ${timeframe === '30d' ? 'active' : ''}`}
                        onClick={() => setTimeframe('30d')}
                      >
                        30 Ngày
                      </button>
                    </div>
                  </div>

                  <div className="line-chart-wrapper">
                    {/* Legend */}
                    <div className="line-chart-legend">
                      <div className="legend-line-item">
                        <div className="line-sample-actual"></div>
                        <span>Đường Thực Tế (Actual)</span>
                      </div>
                      <div className="legend-line-item">
                        <div className="line-sample-baseline"></div>
                        <span>Đường Trung Bình (Baseline)</span>
                      </div>
                      <div className="legend-line-item">
                        <div className="line-sample-alert"></div>
                        <span>Điểm Cảnh Báo Lệch Chuẩn</span>
                      </div>
                    </div>

                    {/* SVG Line Chart */}
                    <div style={{ position: 'relative', width: '100%', height: '220px', background: '#ffffff' }}>
                      <svg viewBox="0 0 700 220" style={{ width: '100%', height: '100%' }}>
                        {/* Grid lines */}
                        <line x1="40" y1="30" x2="680" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="40" y1="80" x2="680" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="40" y1="130" x2="680" y2="130" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="40" y1="180" x2="680" y2="180" stroke="#e2e8f0" strokeWidth="1.5" />

                        {/* Baseline Line (Nét đứt xám) */}
                        <path
                          d={`M ${getPointsPath('baseline')}`}
                          fill="none"
                          stroke="#94a3b8"
                          strokeWidth="2.5"
                          strokeDasharray="6,5"
                        />

                        {/* Actual Line (Nét liền xanh đậm) */}
                        <path
                          d={`M ${getPointsPath('actual')}`}
                          fill="none"
                          stroke="#0284c7"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Data Points */}
                        {currentChart.points.map((pt, i) => {
                          const width = 620;
                          const step = width / (currentChart.points.length - 1);
                          const cx = i * step + 40;
                          const cyActual = getY(pt.actual);

                          return (
                            <g key={i}>
                              {/* Alert Ring if point is an anomaly */}
                              {pt.alert && (
                                <circle
                                  cx={cx}
                                  cy={cyActual}
                                  r="9"
                                  fill="rgba(239, 68, 68, 0.25)"
                                  stroke="#ef4444"
                                  strokeWidth="1.5"
                                />
                              )}

                              {/* Point Circle */}
                              <circle
                                cx={cx}
                                cy={cyActual}
                                r={pt.alert ? "5" : "4"}
                                fill={pt.alert ? "#ef4444" : "#0284c7"}
                                stroke="#ffffff"
                                strokeWidth="2"
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => setHoveredPoint(pt)}
                                onMouseLeave={() => setHoveredPoint(null)}
                              />

                              {/* X Axis Label */}
                              <text
                                x={cx}
                                y="202"
                                textAnchor="middle"
                                fontSize="11"
                                fill="#64748b"
                                fontFamily="var(--font-mono)"
                              >
                                {pt.label}
                              </text>
                            </g>
                          );
                        })}
                      </svg>

                      {/* Tooltip on Hover */}
                      {hoveredPoint && (
                        <div style={{
                          position: 'absolute',
                          top: '10px',
                          right: '20px',
                          background: '#0f172a',
                          color: '#ffffff',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          zIndex: 10
                        }}>
                          <div style={{ fontWeight: '700', marginBottom: '2px' }}>Thời điểm: {hoveredPoint.label}</div>
                          <div>Thực tế: <b style={{ color: '#38bdf8' }}>{hoveredPoint.actual} m³/h</b></div>
                          <div>Trung bình: <b>{hoveredPoint.baseline} m³/h</b></div>
                          {hoveredPoint.note && (
                            <div style={{ color: '#f87171', marginTop: '4px', fontWeight: '600' }}>
                              ⚠ {hoveredPoint.note}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                      <span>Lưu lượng tối thiểu ban đêm (MNF): <b>65 m³/h</b> (Nguy cơ rò rỉ khi {'>'} 70 m³/h)</span>
                      <span>Hệ số an toàn áp lực: <b>1.15</b></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alarm Log Table */}
              <div className="panel-card">
                <div className="panel-card-header">
                  <div className="panel-card-title">
                    <ShieldAlert size={17} color="#ef4444" />
                    <span>Nhật Ký Sự Cố & Cảnh Báo Thất Thoát Tức Thời</span>
                  </div>
                  <div className="panel-card-actions">
                    <span className="metric-badge badge-warning">Cần xác nhận xử lý</span>
                  </div>
                </div>

                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Trạng Thái</th>
                        <th>Loại Sự Cố</th>
                        <th>Vị Trí Phân Vùng</th>
                        <th>Thời Điểm</th>
                        <th>Tình Trạng</th>
                        <th>Hành Động Khắc Phục</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alarms.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <span className={`metric-badge ${
                              item.severity === 'danger' ? 'badge-danger' :
                              item.severity === 'warning' ? 'badge-warning' : 'badge-info'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                          <td style={{ fontWeight: '600' }}>{item.type}</td>
                          <td>{item.location}</td>
                          <td style={{ fontFamily: 'var(--font-mono)' }}>{item.time}</td>
                          <td>
                            {item.handled ? (
                              <span style={{ color: '#10b981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <CheckCircle2 size={14} /> Đã tiếp nhận
                              </span>
                            ) : (
                              <span style={{ color: '#ef4444', fontWeight: '600' }}>Chưa xử lý</span>
                            )}
                          </td>
                          <td>
                            <button
                              className={`btn-sm ${item.handled ? 'btn-secondary' : 'btn-primary'}`}
                              onClick={() => handleAction(item.id)}
                            >
                              {item.handled ? 'Hoàn tác' : 'Điều động kỹ thuật (Dispatch)'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: GIS NETWORK MAP (MỤC 2 YÊU CẦU) */}
          {activeTab === 'gis' && (
            <div className="panel-card">
              <div className="panel-card-header">
                <div>
                  <div className="panel-card-title">
                    <Layers size={18} color="#0284c7" />
                    <span>Bản Đồ Mạng Lưới Cấp Nước GIS Toàn Diện</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Quản lý tuyến ống, van điều áp và trạm đo lưu lượng</span>
                </div>

                <div className="chip-group">
                  <button
                    className={`chip ${gisLayer.pipes ? 'active' : ''}`}
                    onClick={() => setGisLayer(p => ({ ...p, pipes: !p.pipes }))}
                  >
                    Tuyến Ống (D100/D200)
                  </button>
                  <button
                    className={`chip ${gisLayer.valves ? 'active' : ''}`}
                    onClick={() => setGisLayer(p => ({ ...p, valves: !p.valves }))}
                  >
                    Van Giảm Áp (PRV)
                  </button>
                  <button
                    className={`chip ${gisLayer.sensors ? 'active' : ''}`}
                    onClick={() => setGisLayer(p => ({ ...p, sensors: !p.sensors }))}
                  >
                    Cảm Biến IoT
                  </button>
                </div>
              </div>

              <div className="map-canvas-container" style={{ minHeight: '560px' }}>
                <svg className="map-svg" viewBox="0 0 900 560">
                  <rect width="900" height="560" fill="#f8fafc" />
                  <path d="M 0 420 Q 300 380 600 480 T 900 430 L 900 560 L 0 560 Z" fill="#e2e8f0" opacity="0.5" />
                  <path d="M 680 90 Q 820 150 780 360 T 700 520 L 900 520 L 900 90 Z" fill="#bae6fd" opacity="0.35" />
                  <text x="760" y="320" fill="#0284c7" fontSize="14" fontWeight="bold" opacity="0.7">Hồ Điều Hòa Splendora</text>

                  {/* DMA Polygons */}
                  <polygon points="120,240 380,240 340,480 90,440" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                  <text x="180" y="360" fill="#1e40af" fontSize="15" fontWeight="bold">DMA 1 - Khu Biệt Thự Phía Nam</text>

                  <polygon points="400,230 660,210 630,470 360,480" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" opacity="0.7" />
                  <text x="440" y="350" fill="#166534" fontSize="15" fontWeight="bold">DMA 2 - Trung Tâm & Công Viên</text>

                  <polygon points="250,60 620,60 650,200 380,210" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" opacity="0.8" />
                  <text x="390" y="140" fill="#334155" fontSize="15" fontWeight="bold">DMA 3 - Khu Biệt Thự Ven Hồ</text>

                  {/* Pipes Layer */}
                  {gisLayer.pipes && (
                    <>
                      <path d="M 70 320 L 250 320 L 420 320 L 640 300" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" fill="none" />
                      <path d="M 250 320 L 250 110 L 440 110" stroke="#0284c7" strokeWidth="4" strokeDasharray="8,5" fill="none" />
                      <path d="M 480 320 L 480 440" stroke="#0284c7" strokeWidth="4" fill="none" />
                    </>
                  )}

                  {/* Valves Layer */}
                  {gisLayer.valves && (
                    <>
                      <rect x="235" y="312" width="16" height="16" fill="#f59e0b" rx="3" stroke="#fff" strokeWidth="2" />
                      <rect x="410" y="312" width="16" height="16" fill="#f59e0b" rx="3" stroke="#fff" strokeWidth="2" />
                    </>
                  )}

                  {/* Sensors Layer */}
                  {gisLayer.sensors && (
                    <>
                      <circle cx="210" cy="320" r="7" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                      <circle cx="560" cy="300" r="7" fill="#10b981" stroke="#fff" strokeWidth="2" />
                      <circle cx="340" cy="110" r="7" fill="#10b981" stroke="#fff" strokeWidth="2" />
                    </>
                  )}

                  {/* Main Pump */}
                  <circle cx="70" cy="320" r="18" fill="#0284c7" stroke="#ffffff" strokeWidth="3" />
                  <text x="63" y="325" fill="#ffffff" fontSize="13" fontWeight="bold">P1</text>
                  <text x="35" y="355" fill="#0f172a" fontSize="12" fontWeight="700">Trạm Bơm Tổng</text>
                </svg>

                <div className="map-legend">
                  <div className="legend-item"><span className="legend-color" style={{ background: '#0284c7', height: '4px' }}></span> Tuyến ống truyền tải D200</div>
                  <div className="legend-item"><span className="legend-color" style={{ background: '#f59e0b' }}></span> Van giảm áp tự động (PRV)</div>
                  <div className="legend-item"><span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span> Cảm biến áp lực cảnh báo</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TELEMETRY (ÁP LỰC & LƯU LƯỢNG) */}
          {activeTab === 'telemetry' && (
            <div className="panel-card">
              <div className="panel-card-header">
                <div>
                  <div className="panel-card-title">
                    <Gauge size={18} color="#0284c7" />
                    <span>Dữ Liệu Đo Đạc Áp Lực & Lưu Lượng Thời Gian Thực</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Chi tiết 6 điểm nút quan trắc thủy lực tự động (SCADA / IoE)</span>
                </div>
                <button
                  className="btn-sm btn-primary"
                  onClick={() => handleExportCSV('Du_Lieu_Telemetry_6_Diem_Do.csv')}
                >
                  Xuất Dữ Liệu Excel
                </button>
              </div>

              <div className="data-table-wrapper">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Điểm Đo / Nút Mạng</th>
                      <th>Phân Khu</th>
                      <th>Lưu Lượng Tức Thời</th>
                      <th>Áp Lực Đo (bar)</th>
                      <th>Dải Chuẩn (Min - Max)</th>
                      <th>Chênh Lệch (Delta)</th>
                      <th>Trạng Thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { node: 'FM-01 / Trạm bơm P1', zone: 'Đầu nguồn cấp', flow: '145.8 m³/h', press: '4.2 bar', range: '3.8 - 4.5 bar', delta: '+0.1 bar', status: 'Tối ưu', tag: 'badge-success' },
                      { node: 'PRV-02 / Cổng vào DMA 1', zone: 'DMA 1 (Phía Nam)', flow: '48.2 m³/h', press: '3.1 bar', range: '2.8 - 3.4 bar', delta: '-0.2 bar', status: 'Ổn định', tag: 'badge-info' },
                      { node: 'PRV-03 / Trục chính DMA 2', zone: 'DMA 2 (Trung Tâm)', flow: '62.4 m³/h', press: '3.2 bar', range: '2.8 - 3.5 bar', delta: '+0.0 bar', status: 'Ổn định', tag: 'badge-info' },
                      { node: 'FM-04 / Điểm cao DMA 3', zone: 'DMA 3 (Ven Hồ)', flow: '35.2 m³/h', press: '3.4 bar', range: '2.5 - 3.2 bar', delta: '+0.4 bar', status: 'Cảnh báo Áp cao', tag: 'badge-warning' },
                      { node: 'SN-05 / Cụm biệt thự BT2', zone: 'DMA 2', flow: '18.4 m³/h', press: '2.4 bar', range: '2.8 - 3.4 bar', delta: '-0.5 bar', status: 'Sụt áp cục bộ', tag: 'badge-danger' },
                      { node: 'FM-06 / Tuyến xả cặn', zone: 'Bể ngầm', flow: '0.0 m³/h', press: '3.0 bar', range: '2.8 - 3.5 bar', delta: '0.0 bar', status: 'Đang khóa', tag: 'badge-info' },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: '700' }}>{row.node}</td>
                        <td>{row.zone}</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>{row.flow}</td>
                        <td style={{ fontWeight: '700', color: '#0284c7' }}>{row.press}</td>
                        <td style={{ color: '#64748b' }}>{row.range}</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>{row.delta}</td>
                        <td>
                          <span className={`metric-badge ${row.tag}`}>{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: LEAK DETECTION (PHÁT HIỆN RÒ RỈ) */}
          {activeTab === 'leaks' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span>Lưu Lượng Đêm Tối Thiểu (MNF)</span>
                    <TrendingDown size={18} color="#d97706" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">65.2</span>
                    <span className="metric-unit">m³/h</span>
                  </div>
                  <span className="metric-badge badge-warning">Đo lúc 02:00 - 04:00 sáng</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Tỷ Lệ Thất Thoát Ước Tính</span>
                    <AlertTriangle size={18} color="#ef4444" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value" style={{ color: '#ef4444' }}>12.5%</span>
                  </div>
                  <span className="metric-badge badge-danger">18.2 m³/h nước thất thoát rò rỉ</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Điểm Nghi Vấn Rò Rỉ Đã Xác Định</span>
                    <CheckCircle2 size={18} color="#10b981" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">2</span>
                    <span className="metric-unit">tuyến ống</span>
                  </div>
                  <span className="metric-badge badge-info">Cần dò tìm sóng âm</span>
                </div>
              </div>

              <div className="panel-card">
                <div className="panel-card-header">
                  <div className="panel-card-title">
                    <AlertTriangle size={17} color="#d97706" />
                    <span>Bảng Xếp Hạng Nguy Cơ Thất Thoát Theo Phân Vùng DMA</span>
                  </div>
                </div>
                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Phân Vùng DMA</th>
                        <th>Số Hộ Dân</th>
                        <th>Lưu Lượng Cấp Vực</th>
                        <th>Lưu Lượng Đêm (MNF)</th>
                        <th>Tỷ Lệ NRW</th>
                        <th>Mức Độ Ưu Tiên Xử Lý</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: '700' }}>DMA 2 (Trung Tâm)</td>
                        <td>450 Hộ</td>
                        <td>62.4 m³/h</td>
                        <td>28.5 m³/h</td>
                        <td style={{ fontWeight: '700', color: '#ef4444' }}>13.2%</td>
                        <td><span className="metric-badge badge-danger">Rất Cao (Khẩn)</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '700' }}>DMA 1 (Phía Nam)</td>
                        <td>320 Hộ</td>
                        <td>48.2 m³/h</td>
                        <td>21.0 m³/h</td>
                        <td style={{ fontWeight: '700', color: '#f59e0b' }}>11.8%</td>
                        <td><span className="metric-badge badge-warning">Trung Bình</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '700' }}>DMA 3 (Ven Hồ)</td>
                        <td>280 Hộ</td>
                        <td>35.2 m³/h</td>
                        <td>15.7 m³/h</td>
                        <td style={{ fontWeight: '700', color: '#10b981' }}>10.5%</td>
                        <td><span className="metric-badge badge-success">Thấp (Tốt)</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: WATER QUALITY (CHẤT LƯỢNG NƯỚC) */}
          {activeTab === 'quality' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span>Độ Đục Nước (Turbidity)</span>
                    <Droplets size={18} color="#0284c7" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">0.85</span>
                    <span className="metric-unit">NTU</span>
                  </div>
                  <span className="metric-badge badge-success">Đạt chuẩn QCVN 01-1:2018 (&lt; 2.0 NTU)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Hàm Lượng Clo Dư (Chlorine)</span>
                    <CheckCircle2 size={18} color="#10b981" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">0.42</span>
                    <span className="metric-unit">mg/L</span>
                  </div>
                  <span className="metric-badge badge-success">Đạt ngưỡng khử trùng (0.2 - 1.0 mg/L)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Độ Kiềm / Axit (pH)</span>
                    <Activity size={18} color="#0284c7" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">7.35</span>
                  </div>
                  <span className="metric-badge badge-info">Trung tính lý tưởng (6.5 - 8.5)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Tổng Chất Rắn Hòa Tan (TDS)</span>
                    <Gauge size={18} color="#64748b" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">128</span>
                    <span className="metric-unit">ppm</span>
                  </div>
                  <span className="metric-badge badge-success">Nước sạch an toàn</span>
                </div>
              </div>

              <div className="panel-card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>
                  Chứng Nhận Quan Trắc Tự Động Định Kỳ
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                  Hệ thống cảm biến đo đạc chất lượng nước đa chỉ tiêu được bố trí tại cửa xả trạm cấp nước tổng và 3 phân vùng DMA. Dữ liệu được đo đạc liên tục 15 phút/lần, tự động kích hoạt van xả cặn khi độ đục vượt quá 2.5 NTU.
                </p>
              </div>
            </div>
          )}

          {/* TAB 6: REPORTS & WATER BALANCE AUDIT */}
          {activeTab === 'reports' && (
            <div className="panel-card">
              <div className="panel-card-header">
                <div>
                  <div className="panel-card-title">
                    <FileText size={18} color="#0284c7" />
                    <span>Báo Cáo Cân Bằng Nước & Kiểm Toán Thất Thoát (IWA Standard)</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Chuẩn mực Hiệp hội Nước Quốc tế IWA</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-sm btn-secondary" onClick={handlePrint} title="In hoặc lưu PDF">
                    In Báo Cáo PDF
                  </button>
                  <button className="btn-sm btn-primary" onClick={() => handleExportCSV('Bao_Cao_Can_Bang_Nuoc_IWA.csv')} title="Tải file CSV">
                    Tải Dữ Liệu CSV
                  </button>
                </div>
              </div>

              <div className="data-table-wrapper">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Hạng Mục Cân Bằng Nước</th>
                      <th>Khối Lượng Tháng (m³)</th>
                      <th>Tỷ Trọng (%)</th>
                      <th>Doanh Thu / Giá Trị Thiệt Hại</th>
                      <th>Đánh Giá Kỹ Thuật</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '700' }}>1. Tổng Khối Lượng Cấp Vào (System Input Volume)</td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>105,400 m³</td>
                      <td>100.0%</td>
                      <td>Đầu vào nhà máy</td>
                      <td><span className="metric-badge badge-info">Chuẩn đo đạc</span></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '32px', color: '#047857' }}>1.1. Lượng Nước Tiêu Thụ Có Doanh Thu (Billed Authorized)</td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>92,225 m³</td>
                      <td>87.5%</td>
                      <td>Thu tiền cư dân</td>
                      <td><span className="metric-badge badge-success">Đạt chỉ tiêu</span></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '32px', color: '#b91c1c' }}>1.2. Nước Thất Thoát Không Sinh Thu (NRW)</td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>13,175 m³</td>
                      <td>12.5%</td>
                      <td>Ước tính thiệt hại: 105.4 tr VNĐ</td>
                      <td><span className="metric-badge badge-danger">Cần giảm về &lt; 10%</span></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '48px', color: '#64748b' }}>- Thất thoát kỹ thuật (Rò rỉ vật lý đường ống ngầm)</td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>9,800 m³</td>
                      <td>9.3%</td>
                      <td>Chảy ngầm trong đất</td>
                      <td>Tập trung sửa chữa DMA 2</td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '48px', color: '#64748b' }}>- Thất thoát thương mại (Sai số đồng hồ, dùng trái phép)</td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>3,375 m³</td>
                      <td>3.2%</td>
                      <td>Sai số đo đếm</td>
                      <td>Hiệu chuẩn đồng hồ định kỳ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
