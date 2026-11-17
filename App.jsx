import React, { useState, useEffect } from 'react';
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
  X,
  Play,
  Pause,
  RotateCcw,
  Compass,
  Eye,
  Box,
  Maximize2,
  Info
} from 'lucide-react';
import Network3DViewer from './Network3DViewer';

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

  // 3D Digital Twin (Qatium Reference) States
  const [gisViewMode, setGisViewMode] = useState('3d'); // '3d' | '2d'
  const [gisTheme, setGisTheme] = useState('dark'); // 'dark' | 'light'
  const [gisHeatmap, setGisHeatmap] = useState('pressure'); // 'pressure' | 'flow'
  const [gisAssetsLayer, setGisAssetsLayer] = useState({
    pipes: true,
    valves: true,
    tanks: true,
    sensors: true,
    contour: true
  });
  const [simTime, setSimTime] = useState(14); // 0 - 23 (14 = 14:00)
  const [simPlaying, setSimPlaying] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isolatedPipe, setIsolatedPipe] = useState(false);

  useEffect(() => {
    let timer;
    if (simPlaying) {
      timer = setInterval(() => {
        setSimTime(prev => (prev + 1) % 24);
      }, 1400);
    }
    return () => clearInterval(timer);
  }, [simPlaying]);

  // Dynamic SCADA simulation by hour
  const getSimTelemetry = (hour) => {
    if (hour >= 2 && hour <= 4) {
      return { label: '03:00 - Đêm (MNF Rò rỉ)', flow: 58.4, pressure: 3.72, status: 'Cảnh báo rò rỉ đêm', nrw: '16.2%' };
    } else if (hour >= 6 && hour <= 8) {
      return { label: '07:30 - Cao điểm sáng', flow: 168.2, pressure: 3.05, status: 'Phụ tải tăng cao', nrw: '11.8%' };
    } else if (hour >= 18 && hour <= 20) {
      return { label: '19:00 - Cao điểm tối', flow: 174.5, pressure: 2.92, status: 'Phụ tải sinh hoạt', nrw: '12.1%' };
    } else {
      return { label: `${hour < 10 ? '0' + hour : hour}:00 - Giờ bình thường`, flow: 145.8, pressure: 3.24, status: 'Vận hành ổn định', nrw: '12.5%' };
    }
  };

  const currentSim = getSimTelemetry(simTime);

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
            <div className="logo-title">Smart Water</div>
            <div className="logo-sub">IoT SCADA</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-label">Nghiệp Vụ</div>
          <button
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => { setActiveTab('overview'); setMobileMenuOpen(false); }}
          >
            <Activity size={18} />
            <span>1. Tổng quan</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'gis' ? 'active' : ''}`}
            onClick={() => { setActiveTab('gis'); setMobileMenuOpen(false); }}
          >
            <Layers size={18} />
            <span>2. Mạng GIS</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'telemetry' ? 'active' : ''}`}
            onClick={() => { setActiveTab('telemetry'); setMobileMenuOpen(false); }}
          >
            <Gauge size={18} />
            <span>3. Áp & Lưu lượng</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'leaks' ? 'active' : ''}`}
            onClick={() => { setActiveTab('leaks'); setMobileMenuOpen(false); }}
          >
            <AlertTriangle size={18} />
            <span>4. Thất thoát (NRW)</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'quality' ? 'active' : ''}`}
            onClick={() => { setActiveTab('quality'); setMobileMenuOpen(false); }}
          >
            <Droplets size={18} />
            <span>5. Chất lượng nước</span>
          </button>

          <div className="nav-label" style={{ marginTop: '16px' }}>Báo Cáo</div>
          <button
            className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => { setActiveTab('reports'); setMobileMenuOpen(false); }}
          >
            <Download size={18} />
            <span>6. Kiểm toán nước</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="system-status">
            <span className="status-dot"></span>
            <span>Trực tuyến: 48 node</span>
          </div>
          <RefreshCw size={14} color="#94a3b8" style={{ cursor: 'pointer' }} onClick={() => showToast("Đã đồng bộ lại 48 node")} />
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
                placeholder="Tìm trạm, DMA, cảm biến..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="header-actions">
            <button className="action-btn" onClick={() => handleExportCSV('Bao_Cao_Van_Hanh_Ngay.csv')} title="Xuất báo cáo CSV">
              <Download size={15} />
              <span>Xuất báo cáo</span>
            </button>
            <button
              className="action-btn"
              style={{ position: 'relative' }}
              onClick={() => showToast("Cảnh báo: 1 sự cố áp cao tại DMA 3")}
              aria-label="Thông báo sự cố"
              title="Xem thông báo"
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
            <div className="user-profile" title="Tài khoản kỹ sư">
              <div className="user-avatar">AD</div>
              <div className="user-info">
                <span className="user-name">Kỹ sư trực</span>
                <span className="user-role">Vận hành</span>
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
                  <h1 className="page-title">Giám sát Cấp nước</h1>
                  <p className="page-subtitle">Áp lực, lưu lượng 3 DMA và thất thoát thời gian thực</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span className="metric-badge badge-success">
                    <CheckCircle2 size={13} />
                    <span>Trạm bơm chính: 100%</span>
                  </span>
                </div>
              </div>

              {/* 4 KPI Cards */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span>Lưu lượng cấp</span>
                    <div className="metric-icon-wrap" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                      <Droplets size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">145.8</span>
                    <span className="metric-unit">m³/h</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-success">↑ 3.2% định mức giờ</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Áp lực trung bình</span>
                    <div className="metric-icon-wrap" style={{ background: '#ecfdf5', color: '#10b981' }}>
                      <Gauge size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">3.2</span>
                    <span className="metric-unit">bar</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-info">Tối ưu: 2.8 - 3.5 bar</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Thất thoát (NRW)</span>
                    <div className="metric-icon-wrap" style={{ background: '#fef3c7', color: '#d97706' }}>
                      <TrendingDown size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">12.5%</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-success">↓ 1.1% theo tuần</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Cảnh báo</span>
                    <div className="metric-icon-wrap" style={{ background: '#fee2e2', color: '#ef4444' }}>
                      <AlertTriangle size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value" style={{ color: '#ef4444' }}>
                      {alarms.filter(a => !a.handled).length}
                    </span>
                    <span className="metric-unit">sự cố</span>
                  </div>
                  <div>
                    <span className="metric-badge badge-danger">1 nghi vấn đêm</span>
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
                      <span>Sơ đồ phân vùng DMA</span>
                    </div>
                    <div className="panel-card-actions">
                      <div className="qatium-hud-pill-group" style={{ padding: '2px' }}>
                        <button
                          className={`qatium-hud-btn ${gisTheme === 'dark' ? 'active' : ''}`}
                          onClick={() => setGisTheme('dark')}
                          style={{ padding: '4px 8px', fontSize: '11.5px' }}
                          title="Chế độ Digital Twin (Tối)"
                        >
                          Tối
                        </button>
                        <button
                          className={`qatium-hud-btn ${gisTheme === 'light' ? 'active' : ''}`}
                          onClick={() => setGisTheme('light')}
                          style={{ padding: '4px 8px', fontSize: '11.5px' }}
                          title="Chế độ SCADA (Sáng)"
                        >
                          Sáng
                        </button>
                      </div>
                      <button className="btn-sm btn-secondary" onClick={() => setActiveTab('gis')}>
                        Mở GIS →
                      </button>
                    </div>
                  </div>

                  <div className={`map-canvas-container ${gisTheme === 'dark' ? 'dark-theme' : 'light-theme'}`} style={{ minHeight: '440px', height: '440px', position: 'relative' }}>
                    <Network3DViewer
                      theme={gisTheme}
                      heatmap={gisHeatmap}
                      assetsLayer={gisAssetsLayer}
                      isolatedPipe={isolatedPipe}
                      simTime={simTime}
                      currentSim={currentSim}
                      compact={true}
                      onSelectAsset={(asset) => {
                        if (asset.dma && (asset.dma.includes('DMA 1') || asset.dma === 'DMA 1')) {
                          setSelectedDma('DMA 1');
                        } else if (asset.dma && (asset.dma.includes('DMA 2') || asset.dma === 'DMA 2')) {
                          setSelectedDma('DMA 2');
                        } else if (asset.dma && (asset.dma.includes('DMA 3') || asset.dma === 'DMA 3')) {
                          setSelectedDma('DMA 3');
                        }
                      }}
                    />

                    <div className="map-overlay-badge" style={{ zIndex: 25, pointerEvents: 'auto' }}>
                      <div className="map-overlay-title">{dmaDetails[selectedDma].name}</div>
                      <div className="map-overlay-sub">
                        Lưu lượng: <b>{dmaDetails[selectedDma].flow}</b> · Áp: <b>{dmaDetails[selectedDma].pressure}</b> · NRW: <b>{dmaDetails[selectedDma].nrw}</b>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LINE CHART */}
                <div className="panel-card">
                  <div className="panel-card-header">
                    <div>
                      <div className="panel-card-title">
                        <Activity size={17} color="#0284c7" />
                        <span>Thủy lực 24h & Cảnh báo</span>
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
                        <span>Thực tế</span>
                      </div>
                      <div className="legend-line-item">
                        <div className="line-sample-baseline"></div>
                        <span>Baseline</span>
                      </div>
                      <div className="legend-line-item">
                        <div className="line-sample-alert"></div>
                        <span>Lệch chuẩn</span>
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
                      <span>MNF đêm: <b>65 m³/h</b> (Nguy cơ: {'>'} 70 m³/h)</span>
                      <span>Hệ số an toàn: <b>1.15</b></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alarm Log Table */}
              <div className="panel-card">
                <div className="panel-card-header">
                  <div className="panel-card-title">
                    <ShieldAlert size={17} color="#ef4444" />
                    <span>Nhật ký sự cố SCADA</span>
                  </div>
                  <div className="panel-card-actions">
                    <span className="metric-badge badge-warning">Chờ xử lý</span>
                  </div>
                </div>

                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Mức độ</th>
                        <th>Sự cố</th>
                        <th>Vị trí</th>
                        <th>Giờ</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
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
                                <CheckCircle2 size={14} /> Đã nhận
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
                              {item.handled ? 'Hoàn tác' : 'Điều động'}
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

          {/* TAB 2: 3D DIGITAL TWIN NETWORK (QATIUM REFERENCE) */}
          {activeTab === 'gis' && (
            <div className="panel-card" style={{ position: 'relative' }}>
              <div className="panel-card-header">
                <div>
                  <div className="panel-card-title">
                    <Box size={18} color="#0284c7" />
                    <span>Mạng 3D Digital Twin (GIS Thủy lực)</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    Không gian 3D địa hình, mô phỏng thủy lực thời gian thực và quản lý tài sản theo chuẩn Qatium
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    className={`btn-sm ${isolatedPipe ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => {
                      setIsolatedPipe(!isolatedPipe);
                      showToast(!isolatedPipe ? "Mô phỏng: Đã đóng van PRV-02! Khu vực DMA 2 đang chạy nguồn dự phòng." : "Đã mở lại van PRV-02, mạng lưới trở lại bình thường.");
                    }}
                    title="Mô phỏng đóng ngắt sự cố"
                  >
                    <Sliders size={13} />
                    <span>{isolatedPipe ? 'Mở van PRV-02' : 'Mô phỏng đóng van PRV-02'}</span>
                  </button>
                  <button
                    className="btn-sm btn-secondary"
                    onClick={() => handleExportCSV('Mo_Hinh_Mang_3D_GIS.csv')}
                  >
                    <Download size={13} />
                    <span>Xuất GIS</span>
                  </button>
                </div>
              </div>

              {/* 3D Canvas Stage */}
              <div className={`map-canvas-container ${gisTheme === 'dark' ? 'dark-theme' : 'light-theme'}`} style={{ minHeight: '620px' }}>
                
                {/* Floating HUD Controls */}
                <div className="qatium-hud-top" style={{ maxWidth: '620px' }}>
                  {/* Theme Mode Toggle */}
                  <div className="qatium-hud-pill-group">
                    <button
                      className={`qatium-hud-btn ${gisTheme === 'dark' ? 'active' : ''}`}
                      onClick={() => setGisTheme('dark')}
                    >
                      <span>Digital Twin (Tối)</span>
                    </button>
                    <button
                      className={`qatium-hud-btn ${gisTheme === 'light' ? 'active' : ''}`}
                      onClick={() => setGisTheme('light')}
                    >
                      <span>SCADA (Sáng)</span>
                    </button>
                  </div>

                  {/* Heatmap Mode Toggle */}
                  <div className="qatium-hud-pill-group">
                    <button
                      className={`qatium-hud-btn ${gisHeatmap === 'pressure' ? 'active' : ''}`}
                      onClick={() => setGisHeatmap('pressure')}
                    >
                      <Gauge size={13} />
                      <span>Áp lực (bar)</span>
                    </button>
                    <button
                      className={`qatium-hud-btn ${gisHeatmap === 'flow' ? 'active' : ''}`}
                      onClick={() => setGisHeatmap('flow')}
                    >
                      <Droplets size={13} />
                      <span>Lưu lượng (m³/h)</span>
                    </button>
                  </div>

                  {/* Layer Toggles */}
                  <div className="qatium-hud-pill-group">
                    <button
                      className={`qatium-hud-btn ${gisAssetsLayer.pipes ? 'active' : ''}`}
                      onClick={() => setGisAssetsLayer(p => ({ ...p, pipes: !p.pipes }))}
                    >
                      <span>Ống 3D</span>
                    </button>
                    <button
                      className={`qatium-hud-btn ${gisAssetsLayer.valves ? 'active' : ''}`}
                      onClick={() => setGisAssetsLayer(p => ({ ...p, valves: !p.valves }))}
                    >
                      <span>Van PRV</span>
                    </button>
                    <button
                      className={`qatium-hud-btn ${gisAssetsLayer.tanks ? 'active' : ''}`}
                      onClick={() => setGisAssetsLayer(p => ({ ...p, tanks: !p.tanks }))}
                    >
                      <span>Đài nước & Bơm</span>
                    </button>
                    <button
                      className={`qatium-hud-btn ${gisAssetsLayer.sensors ? 'active' : ''}`}
                      onClick={() => setGisAssetsLayer(p => ({ ...p, sensors: !p.sensors }))}
                    >
                      <span>Cảm biến</span>
                    </button>
                  </div>
                </div>

                {/* 3D WebGL Digital Twin (Three.js with OrbitControls) */}
                <Network3DViewer
                  theme={gisTheme}
                  heatmap={gisHeatmap}
                  assetsLayer={gisAssetsLayer}
                  isolatedPipe={isolatedPipe}
                  simTime={simTime}
                  currentSim={currentSim}
                  onSelectAsset={(asset) => setSelectedAsset(asset)}
                />

                {/* Qatium Asset Inspector Drawer (Right Flyout) */}
                {selectedAsset && (
                  <div className="qatium-inspector-drawer">
                    <div className="inspector-header">
                      <div className="inspector-title">
                        <Box size={16} color="#0284c7" />
                        <span>{selectedAsset.name}</span>
                      </div>
                      <button
                        className="inspector-close-btn"
                        onClick={() => setSelectedAsset(null)}
                        aria-label="Đóng thanh thông tin"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div className="inspector-body">
                      <div>
                        <span className="metric-badge badge-info" style={{ marginBottom: '6px' }}>
                          Mã ID: {selectedAsset.id}
                        </span>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>{selectedAsset.type}</div>
                      </div>

                      <div className="inspector-grid">
                        <div className="inspector-metric-box">
                          <span className="inspector-metric-label">Áp Lực SCADA</span>
                          <span className="inspector-metric-val">{selectedAsset.pressure || selectedAsset.inletPressure || 'N/A'}</span>
                        </div>
                        <div className="inspector-metric-box">
                          <span className="inspector-metric-label">Lưu Lượng Cấp</span>
                          <span className="inspector-metric-val">{selectedAsset.flow || 'N/A'}</span>
                        </div>
                        <div className="inspector-metric-box">
                          <span className="inspector-metric-label">Cao Độ Z</span>
                          <span className="inspector-metric-val">{selectedAsset.elevation || '+0.0m'}</span>
                        </div>
                        <div className="inspector-metric-box">
                          <span className="inspector-metric-label">Tổn Thất / Cột Áp</span>
                          <span className="inspector-metric-val">{selectedAsset.headloss || selectedAsset.head || selectedAsset.level || 'Tối ưu'}</span>
                        </div>
                      </div>

                      <div style={{ fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid var(--border-light)', paddingTop: '10px' }}>
                        <div><b>Trạng thái:</b> <span style={{ color: selectedAsset.status.includes('Cảnh báo') || selectedAsset.status.includes('ĐÓNG') ? '#dc2626' : '#16a34a' }}>{selectedAsset.status}</span></div>
                        {selectedAsset.material && <div><b>Vật liệu:</b> {selectedAsset.material}</div>}
                        {selectedAsset.diameter && <div><b>Đường kính danh định:</b> {selectedAsset.diameter}</div>}
                        {selectedAsset.households && <div><b>Quy mô phụ tải:</b> {selectedAsset.households}</div>}
                        {selectedAsset.power && <div><b>Công suất truyền động:</b> {selectedAsset.power}</div>}
                        <div><b>Khu vực phụ trách:</b> {selectedAsset.dma}</div>
                      </div>

                      <div className="inspector-actions">
                        {selectedAsset.id === 'PRV-02' && (
                          <button
                            className="btn-sm btn-primary"
                            onClick={() => {
                              setIsolatedPipe(!isolatedPipe);
                              showToast(!isolatedPipe ? "Đã đóng van PRV-02!" : "Đã mở lại van PRV-02!");
                            }}
                          >
                            <Sliders size={13} />
                            <span>{isolatedPipe ? 'Mở lại van PRV-02' : 'Mô phỏng đóng ngắt (Shutdown)'}</span>
                          </button>
                        )}
                        <button
                          className="btn-sm btn-secondary"
                          onClick={() => showToast(`Đang trích xuất đồ thị áp lực 24h cho ${selectedAsset.id}...`)}
                        >
                          <Activity size={13} />
                          <span>Đồ thị áp lực 24h</span>
                        </button>
                        <button
                          className="btn-sm btn-secondary"
                          onClick={() => showToast(`Đã tạo lệnh điều động kỹ sư kiểm tra ${selectedAsset.id}`)}
                        >
                          <CheckCircle2 size={13} />
                          <span>Tạo phiếu bảo trì</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Qatium 24-Hour Simulation Time Scrubber (Bottom Bar) */}
                <div className="qatium-timeline-bar">
                  <button
                    className="timeline-play-btn"
                    onClick={() => {
                      setSimPlaying(!simPlaying);
                      showToast(simPlaying ? "Đã tạm dừng mô phỏng 24h" : "Đang chạy mô phỏng biến thiên thủy lực 24h...");
                    }}
                    title={simPlaying ? 'Tạm dừng mô phỏng' : 'Chạy mô phỏng 24h'}
                  >
                    {simPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                  </button>

                  <div className="timeline-time-info">
                    <span className="timeline-clock">{currentSim.label}</span>
                    <span className="timeline-desc">
                      Q = <b>{currentSim.flow} m³/h</b> · P = <b>{currentSim.pressure} bar</b>
                    </span>
                  </div>

                  <div className="timeline-slider-wrap">
                    <input
                      type="range"
                      min="0"
                      max="23"
                      value={simTime}
                      onChange={(e) => setSimTime(parseInt(e.target.value, 10))}
                      className="timeline-slider"
                      title="Kéo để tua nhanh dòng thời gian mô phỏng"
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span className={`metric-badge ${
                      simTime >= 2 && simTime <= 4 ? 'badge-danger' :
                      (simTime >= 6 && simTime <= 8) || (simTime >= 18 && simTime <= 20) ? 'badge-warning' : 'badge-success'
                    }`}>
                      {currentSim.status}
                    </span>
                    <button
                      className="btn-sm btn-secondary"
                      onClick={() => setSimTime(14)}
                      title="Đặt lại giờ mặc định"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
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
                    <span>Dữ liệu Áp & Lưu lượng</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>6 điểm quan trắc tự động (SCADA)</span>
                </div>
                <button
                  className="btn-sm btn-primary"
                  onClick={() => handleExportCSV('Du_Lieu_Telemetry_6_Diem_Do.csv')}
                >
                  Xuất Excel
                </button>
              </div>

              <div className="data-table-wrapper">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Điểm đo</th>
                      <th>Khu vực</th>
                      <th>Lưu lượng</th>
                      <th>Áp lực (bar)</th>
                      <th>Dải chuẩn</th>
                      <th>Chênh lệch</th>
                      <th>Trạng thái</th>
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
                    <span>Lưu lượng đêm (MNF)</span>
                    <TrendingDown size={18} color="#d97706" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">65.2</span>
                    <span className="metric-unit">m³/h</span>
                  </div>
                  <span className="metric-badge badge-warning">Khung 02:00 - 04:00</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Tỷ lệ thất thoát</span>
                    <AlertTriangle size={18} color="#ef4444" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value" style={{ color: '#ef4444' }}>12.5%</span>
                  </div>
                  <span className="metric-badge badge-danger">~18.2 m³/h rò rỉ</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Nghi vấn rò rỉ</span>
                    <CheckCircle2 size={18} color="#10b981" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">2</span>
                    <span className="metric-unit">tuyến ống</span>
                  </div>
                  <span className="metric-badge badge-info">Cần dò sóng âm</span>
                </div>
              </div>

              <div className="panel-card">
                <div className="panel-card-header">
                  <div className="panel-card-title">
                    <AlertTriangle size={17} color="#d97706" />
                    <span>Xếp hạng thất thoát theo DMA</span>
                  </div>
                </div>
                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Vùng DMA</th>
                        <th>Hộ dân</th>
                        <th>Lưu lượng cấp</th>
                        <th>Lưu lượng đêm</th>
                        <th>Tỷ lệ NRW</th>
                        <th>Mức ưu tiên</th>
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
                    <span>Độ đục (Turbidity)</span>
                    <Droplets size={18} color="#0284c7" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">0.85</span>
                    <span className="metric-unit">NTU</span>
                  </div>
                  <span className="metric-badge badge-success">Chuẩn QCVN (&lt; 2.0 NTU)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Clo dư (Chlorine)</span>
                    <CheckCircle2 size={18} color="#10b981" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">0.42</span>
                    <span className="metric-unit">mg/L</span>
                  </div>
                  <span className="metric-badge badge-success">Ngưỡng chuẩn (0.2 - 1.0 mg/L)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Độ pH</span>
                    <Activity size={18} color="#0284c7" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">7.35</span>
                  </div>
                  <span className="metric-badge badge-info">Chuẩn (6.5 - 8.5)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Chất rắn tan (TDS)</span>
                    <Gauge size={18} color="#64748b" />
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">128</span>
                    <span className="metric-unit">ppm</span>
                  </div>
                  <span className="metric-badge badge-success">An toàn (&lt; 1000 ppm)</span>
                </div>
              </div>

              <div className="panel-card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>
                  Quan trắc chất lượng định kỳ
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                  Cảm biến đa chỉ tiêu tại trạm tổng và 3 DMA. Chu kỳ đo 15 phút/lần, tự xả cặn khi độ đục &gt; 2.5 NTU.
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
                    <span>Cân bằng nước & Kiểm toán IWA</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Tiêu chuẩn Quốc tế IWA</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn-sm btn-secondary" onClick={handlePrint} title="In hoặc lưu PDF">
                    In PDF
                  </button>
                  <button className="btn-sm btn-primary" onClick={() => handleExportCSV('Bao_Cao_Can_Bang_Nuoc_IWA.csv')} title="Tải file CSV">
                    Tải CSV
                  </button>
                </div>
              </div>

              <div className="data-table-wrapper">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Hạng mục</th>
                      <th>Khối lượng (m³)</th>
                      <th>Tỷ trọng (%)</th>
                      <th>Doanh thu / Thiệt hại</th>
                      <th>Đánh giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '700' }}>1. Tổng cấp mạng lưới (SIV)</td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>105,400 m³</td>
                      <td>100.0%</td>
                      <td>Đầu vào nhà máy</td>
                      <td><span className="metric-badge badge-info">Chuẩn đo đạc</span></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '32px', color: '#047857' }}>1.1. Tiêu thụ có doanh thu</td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>92,225 m³</td>
                      <td>87.5%</td>
                      <td>Thu tiền cư dân</td>
                      <td><span className="metric-badge badge-success">Đạt chỉ tiêu</span></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '32px', color: '#b91c1c' }}>1.2. Thất thoát không doanh thu (NRW)</td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>13,175 m³</td>
                      <td>12.5%</td>
                      <td>Thiệt hại: ~105.4 tr VNĐ</td>
                      <td><span className="metric-badge badge-danger">Cần giảm &lt; 10%</span></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '48px', color: '#64748b' }}>- Thất thoát vật lý (Rò rỉ ống ngầm)</td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>9,800 m³</td>
                      <td>9.3%</td>
                      <td>Chảy ngầm trong đất</td>
                      <td>Tập trung sửa chữa DMA 2</td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '48px', color: '#64748b' }}>- Thất thoát thương mại (Sai số, gian lận)</td>
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
