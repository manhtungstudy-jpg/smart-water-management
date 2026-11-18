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
  ChevronDown,
  ShieldAlert,
  Zap,
  Building,
  Building2,
  CheckSquare,
  Square,
  Flame,
  Tag,
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


// ==========================================
// DATASET FOR MINI SPARKLINES ACROSS 4 KPI CARDS
// ==========================================
const kpiSparkData = {
  '24h': {
    periodLabel: 'Hôm nay (24h)',
    flow: [68, 74, 62, 110, 172, 130, 142, 145.8, 138, 165, 152, 98],
    flowVal: '145.8',
    flowChange: '+3.2% định mức giờ',
    flowChangeType: 'badge-success',
    pressure: [3.45, 3.60, 3.55, 3.25, 2.95, 3.20, 3.18, 3.24, 3.22, 2.98, 3.12, 3.40],
    pressureVal: '3.24',
    pressureChange: 'Tối ưu: 2.8 - 3.5 bar',
    pressureChangeType: 'badge-info',
    nrw: [12.8, 13.5, 13.2, 12.6, 12.4, 12.5, 12.3, 12.5, 12.4, 12.6, 12.5, 12.3],
    nrwVal: '12.5%',
    nrwChange: '↓ 1.1% so với tuần trước',
    nrwChangeType: 'badge-success',
    alarms: [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    alarmsVal: '3',
    alarmsChange: '1 nghi vấn đêm',
    alarmsChangeType: 'badge-danger',
    labels: ['00h', '02h', '04h', '06h', '08h', '10h', '12h', '14h', '16h', '18h', '20h', '22h']
  },
  '7d': {
    periodLabel: '7 Ngày qua',
    flow: [142, 144, 149, 143, 146, 158, 155],
    flowVal: '148.2',
    flowChange: '+2.4% TB tuần',
    flowChangeType: 'badge-success',
    pressure: [3.26, 3.24, 3.18, 3.25, 3.22, 3.15, 3.20],
    pressureVal: '3.21',
    pressureChange: 'Dao động ±0.06 bar',
    pressureChangeType: 'badge-info',
    nrw: [13.6, 13.4, 13.1, 12.9, 12.7, 12.6, 12.5],
    nrwVal: '12.8%',
    nrwChange: '↓ 0.9% xu hướng giảm',
    nrwChangeType: 'badge-success',
    alarms: [2, 1, 3, 1, 2, 4, 3],
    alarmsVal: '16',
    alarmsChange: 'Giảm 4 sự cố so với tuần trước',
    alarmsChangeType: 'badge-info',
    labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
  },
  '30d': {
    periodLabel: '30 Ngày qua (Tháng)',
    flow: [138, 145, 148, 142],
    flowVal: '143.5',
    flowChange: 'Đạt 99.2% kế hoạch cấp',
    flowChangeType: 'badge-success',
    pressure: [3.28, 3.22, 3.20, 3.24],
    pressureVal: '3.23',
    pressureChange: '100% điểm đo đạt áp',
    pressureChangeType: 'badge-info',
    nrw: [14.2, 13.6, 13.0, 12.5],
    nrwVal: '13.3%',
    nrwChange: '↓ 1.7% nhờ tối ưu PRV',
    nrwChangeType: 'badge-success',
    alarms: [8, 11, 7, 5],
    alarmsVal: '31',
    alarmsChange: 'Đã xử lý dứt điểm 29/31',
    alarmsChangeType: 'badge-success',
    labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4']
  },
  '1y': {
    periodLabel: 'Năm 2026',
    flow: [128, 130, 135, 142, 158, 165, 162, 155, 148, 142, 138, 132],
    flowVal: '144.6',
    flowChange: '+5.8% so với năm 2025',
    flowChangeType: 'badge-success',
    pressure: [3.32, 3.30, 3.28, 3.25, 3.18, 3.15, 3.16, 3.20, 3.24, 3.26, 3.28, 3.30],
    pressureVal: '3.25',
    pressureChange: 'Hệ số an toàn: 1.15',
    pressureChangeType: 'badge-info',
    nrw: [15.8, 15.2, 14.8, 14.5, 14.0, 13.8, 13.5, 13.2, 13.0, 12.8, 12.6, 12.5],
    nrwVal: '13.8%',
    nrwChange: 'Mục tiêu: < 12.0%',
    nrwChangeType: 'badge-info',
    alarms: [32, 28, 35, 41, 38, 45, 42, 36, 30, 26, 22, 18],
    alarmsVal: '393',
    alarmsChange: 'Giảm 24% sự cố bục vỡ',
    alarmsChangeType: 'badge-success',
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
  }
};

const renderMiniSparkline = (data, color, type = 'area', isAlert = false) => {
  if (!data || data.length === 0) return null;
  const w = 120;
  const h = 38;
  const padding = 4;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = (max - min) || 1;

  if (type === 'bar') {
    const barW = Math.max(3, Math.floor((w - (data.length - 1) * 3) / data.length));
    return (
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        {data.map((val, i) => {
          const barH = Math.max(3, ((val - min) / range) * (h - padding * 2) + 4);
          const x = i * ((w - barW) / (data.length - 1 || 1));
          const y = h - padding - barH;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx="2"
              fill={val > 0 ? (isAlert ? '#ef4444' : color) : '#cbd5e1'}
              opacity={i === data.length - 1 ? 1 : 0.65}
            />
          );
        })}
      </svg>
    );
  }

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1 || 1)) * w;
    const y = h - padding - ((val - min) / range) * (h - padding * 2);
    return { x, y };
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  const areaD = `${pathD} L ${w} ${h} L 0 ${h} Z`;
  const lastP = points[points.length - 1];

  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.32" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      {type === 'area' && <path d={areaD} fill={`url(#grad-${color.replace('#', '')})`} />}
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastP.x} cy={lastP.y} r="3" fill={color} stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('gis');
  const [kpiPeriod, setKpiPeriod] = useState('24h'); // '24h' | '7d' | '30d' | '1y'
  const [telemetryZoneFilter, setTelemetryZoneFilter] = useState('all');
  const [telemetrySearch, setTelemetrySearch] = useState('');
  const [selectedDma, setSelectedDma] = useState('DMA 2');
  const [timeframe, setTimeframe] = useState('24h'); // '24h' | '7d' | '30d'
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [gisLayer, setGisLayer] = useState({ pipes: true, valves: true, sensors: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [showOutageSchedule, setShowOutageSchedule] = useState(false);
  const [activeBroadcastModal, setActiveBroadcastModal] = useState(null);
  const [broadcastSending, setBroadcastSending] = useState(false);
  const [outageNoticeSent, setOutageNoticeSent] = useState({});
  const [outageSchedules, setOutageSchedules] = useState([
    {
      id: 'OUT-2026-11-01',
      title: 'Bảo trì & Súc xả Định kỳ Tuyến D600 Lê Văn Lương',
      time: '00:00 - 05:00 (Đêm Mai)',
      date: '19/11/2026',
      dma: 'DMA THNC-02 & THNC-03',
      valveId: 'V-LVL-03',
      valveName: 'Van Cổng Cấp 2 V-LVL-03',
      reason: 'Súc xả bùn cặn tuyến D600 & thay thế đồng hồ điện từ AMR DN300',
      affectedBuildings: [
        'Mandarin Garden (Tháp A, B, C, D)',
        'Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy',
        'Cụm Căn Hộ N04 (A, B, C) & N05 (34T1, 34T2)',
        'Dãy Shophouse Hoàng Ngân - Lê Văn Lương',
        'Tổ Hợp Diamond Flower Tower (36T)'
      ],
      households: '8.450 hộ dân & 32 đơn vị thương mại',
      tankSupport: 'Xe téc 12m³ túc trực tại cổng Mandarin Garden & 34T HDT',
      status: 'Đã lên lịch (Chờ phát tin)'
    },
    {
      id: 'OUT-2026-11-02',
      title: 'Đấu nối Mạng lưới Cấp nước KĐT Nam Trung Yên',
      time: '23:30 - 04:30 (Thứ Bảy)',
      date: '21/11/2026',
      dma: 'DMA Nam Trung Yên',
      valveId: 'V-NTY-02',
      valveName: 'Van Phân Đoạn V-NTY-02',
      reason: 'Đấu nối hoàn thiện tuyến ống D300 HDPE dự án phát triển đô thị mới',
      affectedBuildings: [
        'Chung Cư Nam Trung Yên B10A & B10B (30T)',
        'Chung Cư Nam Trung Yên B11A & B11B (32T)',
        'Tổ Hợp Căn Hộ A10 & A14 Nam Trung Yên',
        'Tòa Tháp Tài Chính PVI Tower (26T)',
        'Khu Shophouse Phố Mạc Thái Tổ & Hạ Yên'
      ],
      households: '6.280 hộ dân & 18 khối cơ quan',
      tankSupport: 'Trạm cấp nước dã chiến tại Công viên Nam Trung Yên',
      status: 'Đã lên lịch (Chờ phát tin)'
    },
    {
      id: 'OUT-2026-11-03',
      title: 'Kiểm định Van Giảm Áp PRV & Nguồn Nước Sông Đà',
      time: '01:00 - 05:00 (Chủ Nhật)',
      date: '22/11/2026',
      dma: "DMA Cụm D'Capitale - Mễ Trì",
      valveId: 'V-DCP-05',
      valveName: 'Van Khống Chế V-DCP-05',
      reason: 'Bảo dưỡng trạm van giảm áp PRV-GATE-WEST & cân chỉnh áp lực',
      affectedBuildings: [
        "Tổ Hợp Vinhomes D'Capitale (Tháp C1, C2, C3, C4, C5, C6)",
        'Đại Siêu Thị Big C Thăng Long (GO!)',
        'Tòa Tháp CEO Tower & Handico Tower (33T)',
        'Khu Biệt Thự Liền Kề Mễ Trì Hạ'
      ],
      households: '9.820 hộ dân & TTTM Vincom Mega Mall',
      tankSupport: 'Cấp nước từ Bể chứa điều hòa Mễ Trì (12.000 m³)',
      status: 'Đã lên lịch (Chờ phát tin)'
    }
  ]);

  const [alarms, setAlarms] = useState([
    { id: 1, type: 'Áp lực cao bất thường', location: 'Trạm bơm Phân khu 3 (DMA 3)', time: '14:22', status: 'High Pressure', severity: 'danger', handled: false },
    { id: 2, type: 'Nghi vấn rò rỉ đêm (MNF)', location: 'Tuyến ống chính Zone A (DMA 1)', time: '13:50', status: 'Leak Suspected', severity: 'warning', handled: false },
    { id: 3, type: 'Sụt áp cục bộ', location: 'Khu biệt thự BT2 - Cụm B (DMA 2)', time: '12:15', status: 'Low Pressure', severity: 'warning', handled: true },
    { id: 4, type: 'Độ đục vượt chuẩn nhẹ (NTU)', location: 'Cửa xả Bể chứa ngầm Splendora', time: '10:04', status: 'Water Quality', severity: 'info', handled: false }
  ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // 3D Digital Twin (Qatium Reference) States
  const [gisViewMode, setGisViewMode] = useState('3d'); // '3d' | '2d' | 'xray'
  const [activeDropdown, setActiveDropdown] = useState(null); // 'mode' | 'pipes' | 'devices' | 'buildings' | null

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.qatium-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);
  const [gisTheme, setGisTheme] = useState('dark'); // 'dark' | 'light'
  const [gisHeatmap, setGisHeatmap] = useState('pressure'); // 'pressure' | 'flow'
  const [gisAssetsLayer, setGisAssetsLayer] = useState({
    pipes: true,
    pipesPrimary: true,
    pipesSecondary: true,
    pipesService: true,
    valves: true,
    sensors: true,
    hydrants: true,
    tanks: true,
    buildings: true,
    streetLabels: true,
    contour: true
  });
  const [simTime, setSimTime] = useState(14); // 0 - 23 (14 = 14:00)
  const [simPlaying, setSimPlaying] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isolatedPipe, setIsolatedPipe] = useState(false);

  const [closedValves, setClosedValves] = useState({
    'VALVE-01': false,
    'VALVE-02': false,
    'VALVE-03': false,
    'VALVE-04': false,
    'VALVE-05': false,
    'VALVE-06': false,
    'VALVE-07': false,
    'VALVE-08': false,
    'VALVE-09': false,
    'VALVE-10': false,
    'VALVE-11': false,
    'VALVE-12': false,
  });

  const valveInfoMap = {
    'VALVE-01': { name: 'VALVE-01', location: 'Nút Hoàng Đạo Thúy - NMN Sông Đà', type: 'D500 Tuyến cấp 1', note: 'Phân đoạn trục chính truyền dẫn' },
    'VALVE-02': { name: 'VALVE-02', location: 'Trần Duy Hưng - Big C Thăng Long', type: 'D400 Tuyến cấp 1/2', note: 'Điều tiết phân vùng siêu thị & KĐT Đông Nam' },
    'VALVE-03': { name: 'VALVE-03', location: 'Nút Nguyễn Thị Định - Lê Văn Lương', type: 'D300 Mạch vòng cấp 2', note: 'Phân phối phân khu Trung Hòa' },
    'VALVE-04': { name: 'VALVE-04', location: 'Khu Chung cư 34T & Diamond Flower', type: 'D250 Cấp 2/3', note: 'Cô lập áp lực cao tầng tổ hợp 34T' },
    'VALVE-05': { name: 'VALVE-05', location: 'Cụm Shophouse Phố Hoàng Ngân', type: 'D200 Mạch nhánh cấp 3', note: 'Đấu nối dịch vụ khu phố ẩm thực' },
    'VALVE-06': { name: 'VALVE-06', location: 'Khu Biệt thự BT Cụm B & Nhà hát', type: 'D150 Nhánh cấp 3', note: 'Điều áp nhánh biệt thự vườn' },
    'VALVE-07': { name: 'VALVE-07', location: 'Trung tâm Hội nghị Quốc gia (NCC)', type: 'D350 Tuyến cấp 2', note: 'Đảm bảo an ninh cấp nước trọng điểm ngoại giao' },
    'VALVE-08': { name: 'VALVE-08', location: 'Nút KĐT Trung Hòa - Nhân Chính', type: 'D300 Phân đoạn', note: 'Cô lập mô phỏng cắt nước vùng trung tâm' },
    'VALVE-09': { name: 'VALVE-09', location: 'THPT Chuyên Hà Nội - Amsterdam', type: 'D200 Nhánh cấp 3', note: 'Cấp nước khu giảng đường & bể bơi ngầm' },
    'VALVE-10': { name: 'VALVE-10', location: 'KĐT Nam Trung Yên - Yên Hòa', type: 'D300 Mạch vòng cấp 2', note: 'Tuyến cấp nước chung cư cao tầng Nam Trung Yên' },
    'VALVE-11': { name: 'VALVE-11', location: 'Bệnh viện Thu Cúc & BV Quân Đội', type: 'D250 Tuyến ưu tiên cấp 2', note: 'Van khẩn cấp đảm bảo y tế không gián đoạn' },
    'VALVE-12': { name: 'VALVE-12', location: 'Imperia Garden & Golden West', type: 'D300 Tuyến cấp 2', note: 'Phân phối cụm chung cư 35T Lê Văn Thiêm' },
  };

  const handleToggleValve = (valveName) => {
    setClosedValves(prev => {
      const next = { ...prev, [valveName]: !prev[valveName] };
      const isNowClosed = next[valveName];
      setToastMessage(isNowClosed ? `⚠️ Đã ĐÓNG ${valveName}: Cô lập dòng nước tại phân đoạn này.` : `💧 Đã MỞ ${valveName}: Khôi phục dòng chảy thủy lực.`);
      setTimeout(() => setToastMessage(null), 3000);
      return next;
    });
  };

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
        <main className={`content-container ${activeTab === 'gis' ? 'gis-tab-active' : ''}`}>
          {/* Fixed height full-bleed for GIS tab */}
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

              {/* 4 KPI Cards With Timeframe Filter & Mini Sparklines */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Activity size={15} color="#0284c7" />
                  <span>Chỉ số vận hành & Xu hướng thời gian:</span>
                </div>
                <div style={{ display: 'flex', background: '#f1f5f9', padding: '3px', borderRadius: '8px', gap: '3px', border: '1px solid #e2e8f0' }}>
                  {[
                    { id: '24h', label: 'Hôm nay (24h)' },
                    { id: '7d', label: '7 Ngày' },
                    { id: '30d', label: '30 Ngày' },
                    { id: '1y', label: 'Năm' }
                  ].map(p => (
                    <button
                      key={p.id}
                      onClick={() => setKpiPeriod(p.id)}
                      style={{
                        padding: '4px 10px',
                        fontSize: '11.5px',
                        fontWeight: kpiPeriod === p.id ? 700 : 500,
                        border: 'none',
                        borderRadius: '6px',
                        background: kpiPeriod === p.id ? '#ffffff' : 'transparent',
                        color: kpiPeriod === p.id ? '#0284c7' : '#64748b',
                        boxShadow: kpiPeriod === p.id ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="metrics-grid">
                {/* CARD 1: LƯU LƯỢNG CẤP */}
                <div className="metric-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="metric-header">
                    <span>Lưu lượng cấp</span>
                    <div className="metric-icon-wrap" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                      <Droplets size={18} />
                    </div>
                  </div>
                  <div className="metric-body" style={{ alignItems: 'baseline' }}>
                    <span className="metric-value">{kpiSparkData[kpiPeriod].flowVal}</span>
                    <span className="metric-unit">m³/h</span>
                  </div>
                  <div style={{ margin: '4px 0 2px 0', height: '38px', width: '100%' }}>
                    {renderMiniSparkline(kpiSparkData[kpiPeriod].flow, '#0284c7', 'area')}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={`metric-badge ${kpiSparkData[kpiPeriod].flowChangeType}`}>
                      {kpiSparkData[kpiPeriod].flowChange}
                    </span>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{kpiSparkData[kpiPeriod].periodLabel}</span>
                  </div>
                </div>

                {/* CARD 2: ÁP LỰC TRUNG BÌNH */}
                <div className="metric-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="metric-header">
                    <span>Áp lực trung bình</span>
                    <div className="metric-icon-wrap" style={{ background: '#ecfdf5', color: '#10b981' }}>
                      <Gauge size={18} />
                    </div>
                  </div>
                  <div className="metric-body" style={{ alignItems: 'baseline' }}>
                    <span className="metric-value">{kpiSparkData[kpiPeriod].pressureVal}</span>
                    <span className="metric-unit">bar</span>
                  </div>
                  <div style={{ margin: '4px 0 2px 0', height: '38px', width: '100%' }}>
                    {renderMiniSparkline(kpiSparkData[kpiPeriod].pressure, '#10b981', 'area')}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={`metric-badge ${kpiSparkData[kpiPeriod].pressureChangeType}`}>
                      {kpiSparkData[kpiPeriod].pressureChange}
                    </span>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{kpiSparkData[kpiPeriod].periodLabel}</span>
                  </div>
                </div>

                {/* CARD 3: THẤT THOÁT (NRW) */}
                <div className="metric-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="metric-header">
                    <span>Thất thoát (NRW)</span>
                    <div className="metric-icon-wrap" style={{ background: '#fef3c7', color: '#d97706' }}>
                      <TrendingDown size={18} />
                    </div>
                  </div>
                  <div className="metric-body" style={{ alignItems: 'baseline' }}>
                    <span className="metric-value">{kpiSparkData[kpiPeriod].nrwVal}</span>
                  </div>
                  <div style={{ margin: '4px 0 2px 0', height: '38px', width: '100%' }}>
                    {renderMiniSparkline(kpiSparkData[kpiPeriod].nrw, '#d97706', 'area')}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={`metric-badge ${kpiSparkData[kpiPeriod].nrwChangeType}`}>
                      {kpiSparkData[kpiPeriod].nrwChange}
                    </span>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{kpiSparkData[kpiPeriod].periodLabel}</span>
                  </div>
                </div>

                {/* CARD 4: CẢNH BÁO SỰ CỐ */}
                <div className="metric-card" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="metric-header">
                    <span>Cảnh báo</span>
                    <div className="metric-icon-wrap" style={{ background: '#fee2e2', color: '#ef4444' }}>
                      <AlertTriangle size={18} />
                    </div>
                  </div>
                  <div className="metric-body" style={{ alignItems: 'baseline' }}>
                    <span className="metric-value" style={{ color: '#ef4444' }}>
                      {kpiSparkData[kpiPeriod].alarmsVal}
                    </span>
                    <span className="metric-unit">sự cố</span>
                  </div>
                  <div style={{ margin: '4px 0 2px 0', height: '38px', width: '100%' }}>
                    {renderMiniSparkline(kpiSparkData[kpiPeriod].alarms, '#ef4444', 'bar', true)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={`metric-badge ${kpiSparkData[kpiPeriod].alarmsChangeType}`}>
                      {kpiSparkData[kpiPeriod].alarmsChange}
                    </span>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{kpiSparkData[kpiPeriod].periodLabel}</span>
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
            <div className="panel-card gis-full-screen-card" style={{ position: 'relative' }}>
              {/* 3D Canvas Stage */}
              <div className="map-canvas-container dark-theme" style={{ width: '100%', height: '100%', position: 'relative' }}>
                
                {/* Floating Modern Clean HUD Dropdowns (Top Left) */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  zIndex: 35,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  alignItems: 'center',
                  pointerEvents: 'auto'
                }}>
                  {/* 1. DROPDOWN: CHẾ ĐỘ */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'mode' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'mode' ? null : 'mode')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Chế độ hiển thị không gian 3D, 2D GIS hoặc X-Ray trong suốt"
                      >
                        <Compass size={13} color="#38bdf8" />
                        <span>Chế độ: {gisViewMode === '3d' ? '3D' : gisViewMode === '2d' ? '2D' : 'X-Ray'}</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'mode' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'mode' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '240px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Góc Nhìn & Không Gian
                        </div>
                        {[
                          { id: '3d', label: '3D (Digital Twin)', desc: 'Không gian 3D lập phương đô thị thực tế' },
                          { id: '2d', label: '2D (Mặt phẳng GIS)', desc: 'Góc nhìn trực diện từ trên xuống (Top-down)' },
                          { id: 'xray', label: 'X-Ray (Trong suốt công trình)', desc: 'Làm trong suốt công trình để nhìn rõ toàn bộ mạng ống ngầm' }
                        ].map(m => (
                          <div
                            key={m.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '8px 10px',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              background: gisViewMode === m.id ? 'rgba(2, 132, 199, 0.2)' : 'transparent',
                              color: gisViewMode === m.id ? '#38bdf8' : '#cbd5e1',
                              transition: 'all 0.15s ease'
                            }}
                            onClick={() => { setGisViewMode(m.id); setActiveDropdown(null); }}
                          >
                            <span style={{ fontSize: '14px' }}>{gisViewMode === m.id ? '●' : '○'}</span>
                            <div>
                              <div style={{ fontSize: '12.5px', fontWeight: 600 }}>{m.label}</div>
                              <div style={{ fontSize: '10.5px', color: '#94a3b8' }}>{m.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2. DROPDOWN: ĐƯỜNG ỐNG */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'pipes' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'pipes' ? null : 'pipes')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Bật/tắt hiển thị các cấp mạng lưới đường ống nước"
                      >
                        <Droplets size={13} color="#0284c7" />
                        <span>Đường ống ({[gisAssetsLayer.pipesPrimary, gisAssetsLayer.pipesSecondary, gisAssetsLayer.pipesService].filter(Boolean).length}/3)</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'pipes' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'pipes' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '270px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Mạng Lưới Đường Ống
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.pipesPrimary ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesPrimary: !p.pipesPrimary })); }}
                        >
                          {gisAssetsLayer.pipesPrimary ? <CheckSquare size={15} color="#0284c7" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0284c7' }}>Cấp 1 (D500 - D800)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Tuyến truyền dẫn chính từ NMN Sông Đà</div>
                          </div>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.pipesSecondary ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesSecondary: !p.pipesSecondary })); }}
                        >
                          {gisAssetsLayer.pipesSecondary ? <CheckSquare size={15} color="#f97316" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#f97316' }}>Cấp 2 (D200 - D300)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Mạch vòng phân phối liên phường</div>
                          </div>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.pipesService ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, pipesService: !p.pipesService })); }}
                        >
                          {gisAssetsLayer.pipesService ? <CheckSquare size={15} color="#eab308" /> : <Square size={15} color="#64748b" />}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#eab308' }}>Cấp 3 (Đấu Nối Tòa Nhà)</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Nhánh dịch vụ dẫn vào chân công trình</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. DROPDOWN: THIẾT BỊ */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'devices' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'devices' ? null : 'devices')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Bật/tắt các loại thiết bị mạng lưới & quan trắc"
                      >
                        <Sliders size={13} color="#38bdf8" />
                        <span>Thiết bị ({[gisAssetsLayer.valves, gisAssetsLayer.sensors, gisAssetsLayer.hydrants, gisAssetsLayer.tanks].filter(Boolean).length}/4)</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'devices' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'devices' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '230px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Thiết bị & Quan trắc SCADA
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.valves ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, valves: !p.valves })); }}
                        >
                          {gisAssetsLayer.valves ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Van PRV & Chốt cách ly</span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.sensors ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, sensors: !p.sensors })); }}
                        >
                          {gisAssetsLayer.sensors ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Cảm biến áp & lưu lượng</span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.hydrants ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, hydrants: !p.hydrants })); }}
                        >
                          {gisAssetsLayer.hydrants ? <CheckSquare size={15} color="#ef4444" /> : <Square size={15} color="#64748b" />}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Flame size={13} color="#ef4444" />
                            <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Trụ PCCC (38 trụ)</span>
                          </div>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.tanks ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, tanks: !p.tanks })); }}
                        >
                          {gisAssetsLayer.tanks ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Đài nước & Trạm Bơm</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 4. DROPDOWN: CÔNG TRÌNH */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'buildings' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'buildings' ? null : 'buildings')}
                        style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
                        title="Bật/tắt hiển thị khối nhà 3D và nhãn tên đường"
                      >
                        <Building2 size={13} color="#38bdf8" />
                        <span>Công trình ({[gisAssetsLayer.buildings, gisAssetsLayer.streetLabels].filter(Boolean).length}/2)</span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'buildings' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'buildings' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '220px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '6px',
                        zIndex: 100
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }}>
                          Địa hình & Kiến trúc
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.buildings ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, buildings: !p.buildings })); }}
                        >
                          {gisAssetsLayer.buildings ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Khối Nhà 3D</span>
                        </div>
                        <div
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', color: gisAssetsLayer.streetLabels ? '#ffffff' : '#94a3b8' }}
                          onClick={(e) => { e.stopPropagation(); setGisAssetsLayer(p => ({ ...p, streetLabels: !p.streetLabels })); }}
                        >
                          {gisAssetsLayer.streetLabels ? <CheckSquare size={15} color="#38bdf8" /> : <Square size={15} color="#64748b" />}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Tag size={13} color="#38bdf8" />
                            <span style={{ fontSize: '12.5px', fontWeight: 600 }}>Tên đường (Maps)</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 5. DROPDOWN: CHỐT VAN PHÂN ĐOẠN TOÀN MẠNG LƯỚI */}
                  <div className="qatium-dropdown-container" style={{ position: 'relative' }}>
                    <div className="qatium-hud-pill-group">
                      <button
                        className={`qatium-hud-btn ${activeDropdown === 'valves' ? 'active' : ''}`}
                        onClick={() => setActiveDropdown(activeDropdown === 'valves' ? null : 'valves')}
                        style={{
                          whiteSpace: 'nowrap',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '7px',
                          fontWeight: 700,
                          fontSize: '12px',
                          color: Object.values(closedValves).some(Boolean) ? '#fca5a5' : '#86efac'
                        }}
                        title="Bảng điều khiển & giám sát toàn bộ các chốt van phân đoạn mạng lưới"
                      >
                        <span style={{ fontSize: '13px', lineHeight: 1 }}>
                          {Object.values(closedValves).some(Boolean) ? '🔴' : '🟢'}
                        </span>
                        <span>
                          Chốt Van {Object.values(closedValves).filter(Boolean).length > 0 
                            ? `(${Object.values(closedValves).filter(Boolean).length} ĐÃ ĐÓNG ⚠️)` 
                            : `(Tất cả ${Object.keys(closedValves).length} MỞ)`}
                        </span>
                        <ChevronDown size={12} style={{ transform: activeDropdown === 'valves' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </button>
                    </div>

                    {activeDropdown === 'valves' && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: 0,
                        minWidth: '350px',
                        background: 'rgba(11, 20, 38, 0.98)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '8px',
                        boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)',
                        padding: '8px',
                        zIndex: 100,
                        maxHeight: '440px',
                        overflowY: 'auto'
                      }}>
                        <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span>Điều Khiển Chốt Van Cô Lập</span>
                          <span style={{ color: '#94a3b8', fontSize: '10.5px' }}>{Object.keys(closedValves).length} vị trí</span>
                        </div>

                        {Object.entries(valveInfoMap).map(([vId, info]) => {
                          const isClosed = closedValves[vId];
                          return (
                            <div
                              key={vId}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '8px',
                                padding: '8px 10px',
                                borderRadius: '6px',
                                background: isClosed ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                                border: isClosed ? '1px solid rgba(239, 68, 68, 0.45)' : '1px solid rgba(255, 255, 255, 0.06)',
                                marginBottom: '5px',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                              }}
                              onClick={() => handleToggleValve(vId)}
                              title={`Click để ${isClosed ? 'MỞ lại' : 'ĐÓNG'} ${vId}`}
                            >
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <span style={{ fontSize: '13px' }}>{isClosed ? '🔒' : '🔓'}</span>
                                  <span style={{ fontSize: '12px', fontWeight: 700, color: isClosed ? '#f87171' : '#f8fafc' }}>{vId}</span>
                                  <span style={{ fontSize: '11px', color: '#cbd5e1' }}>{info.name.split('(')[1]?.replace(')', '') || info.name}</span>
                                </div>
                                <div style={{ fontSize: '10.5px', color: isClosed ? '#fca5a5' : '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {isClosed ? `⚠️ CẮT NƯỚC: ${info.affected}` : info.zone}
                                </div>
                              </div>
                              <span style={{
                                padding: '3px 8px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                fontWeight: 700,
                                background: isClosed ? '#ef4444' : '#10b981',
                                color: '#ffffff',
                                flexShrink: 0
                              }}>
                                {isClosed ? 'ĐÃ ĐÓNG' : 'MỞ'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* 6. XUẤT DỮ LIỆU GIS */}
                  <div className="qatium-hud-pill-group">
                    <button
                      className="qatium-hud-btn"
                      onClick={() => handleExportCSV('Mo_Hinh_Mang_3D_GIS.csv')}
                      title="Xuất cơ sở dữ liệu GIS thủy lực"
                      style={{ padding: '6px 12px' }}
                    >
                      <Download size={13} color="#38bdf8" />
                      <span>Xuất GIS</span>
                    </button>
                  </div>

                  {/* 7. NÚT CHỨC NĂNG: LỊCH CẮT NƯỚC & THÔNG BÁO TÒA NHÀ BỊ ẢNH HƯỞNG */}
                  <div className="qatium-hud-pill-group">
                    <button
                      className={`qatium-hud-btn ${showOutageSchedule ? 'active' : ''}`}
                      onClick={() => setShowOutageSchedule(!showOutageSchedule)}
                      title="Xem lịch cắt nước định kỳ/khẩn cấp & phát thông báo tới các tòa nhà bị ảnh hưởng"
                      style={{
                        padding: '6px 14px',
                        background: showOutageSchedule ? 'rgba(239, 68, 68, 0.28)' : 'rgba(11, 20, 38, 0.92)',
                        borderColor: showOutageSchedule ? '#ef4444' : 'rgba(56, 189, 248, 0.35)',
                        color: showOutageSchedule ? '#fca5a5' : '#38bdf8',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Calendar size={13} color={showOutageSchedule ? '#ef4444' : '#38bdf8'} />
                      <span>Lịch Cắt Nước & Thông Báo</span>
                      <span style={{
                        background: '#ef4444',
                        color: '#ffffff',
                        fontSize: '10px',
                        fontWeight: 800,
                        padding: '1px 6px',
                        borderRadius: '10px',
                        marginLeft: '3px'
                      }}>
                        {outageSchedules.length}
                      </span>
                    </button>
                  </div>
                </div>

                {/* 3D WebGL Digital Twin (Three.js with OrbitControls) */}
                <Network3DViewer
                  theme={gisTheme}
                  heatmap={gisHeatmap}
                  viewMode={gisViewMode}
                  assetsLayer={gisAssetsLayer}
                  isolatedPipe={isolatedPipe}
                  closedValves={closedValves}
                  onToggleValve={handleToggleValve}
                  simTime={simTime}
                  currentSim={currentSim}
                  onSelectAsset={(asset) => setSelectedAsset(asset)}
                />

                {/* MODAL: BẢNG ĐIỀU HÀNH LỊCH CẮT NƯỚC & PHÁT THÔNG BÁO ĐÔ THỊ */}
                {showOutageSchedule && (
                  <div style={{
                    position: 'absolute',
                    top: '64px',
                    right: '18px',
                    width: '460px',
                    maxHeight: 'calc(100vh - 160px)',
                    background: 'rgba(11, 20, 38, 0.96)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    borderRadius: '12px',
                    boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(239, 68, 68, 0.25)',
                    zIndex: 60,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.25s ease'
                  }}>
                    {/* Header */}
                    <div style={{
                      padding: '14px 18px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      borderBottom: '1px solid rgba(239, 68, 68, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={18} color="#ef4444" />
                        <div>
                          <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#f8fafc' }}>
                            Lịch Cắt Nước & Điều Phối Đô Thị
                          </div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                            Thông báo BQL Tòa Nhà & Cư Dân (TCVN 33:2006)
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowOutageSchedule(false)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#94a3b8',
                          cursor: 'pointer',
                          padding: '4px',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Schedule List */}
                    <div style={{ padding: '14px 16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {outageSchedules.map((sc, idx) => {
                        const isNotified = outageNoticeSent[sc.id];
                        const isSimulating = closedValves[sc.valveId];

                        return (
                          <div key={sc.id} style={{
                            background: isSimulating ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                            border: `1px solid ${isSimulating ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                            borderRadius: '8px',
                            padding: '12px 14px'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
                              <div style={{ fontWeight: 700, fontSize: '13px', color: '#f8fafc' }}>
                                #{idx + 1}. {sc.title}
                              </div>
                              <span style={{
                                fontSize: '10.5px',
                                fontWeight: 700,
                                padding: '2px 8px',
                                borderRadius: '6px',
                                background: isSimulating ? '#ef4444' : 'rgba(56, 189, 248, 0.15)',
                                color: isSimulating ? '#ffffff' : '#38bdf8',
                                whiteSpace: 'nowrap'
                              }}>
                                {isSimulating ? '⚠️ ĐANG MÔ PHỎNG' : sc.date}
                              </span>
                            </div>

                            <div style={{ fontSize: '11.5px', color: '#cbd5e1', marginBottom: '6px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                              <div>⏰ <strong>Thời gian:</strong> <span style={{ color: '#fef08a' }}>{sc.time}</span></div>
                              <div>📍 <strong>Phân vùng:</strong> {sc.dma} (Chốt khóa: <span style={{ color: '#38bdf8' }}>{sc.valveName}</span>)</div>
                              <div>🔧 <strong>Nhiệm vụ:</strong> {sc.reason}</div>
                            </div>

                            {/* Danh sách tòa nhà bị ảnh hưởng */}
                            <div style={{
                              background: 'rgba(0, 0, 0, 0.35)',
                              borderRadius: '6px',
                              padding: '8px 10px',
                              marginTop: '8px',
                              marginBottom: '10px'
                            }}>
                              <div style={{ fontSize: '11px', fontWeight: 700, color: '#fca5a5', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <AlertTriangle size={12} color="#ef4444" />
                                <span>Tòa nhà bị mất nước ({sc.affectedBuildings.length} tòa · {sc.households}):</span>
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                {sc.affectedBuildings.map((bName, bIdx) => (
                                  <div key={bIdx} style={{ fontSize: '11px', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <span style={{ color: '#ef4444', fontSize: '10px' }}>●</span>
                                    <span>{bName}</span>
                                  </div>
                                ))}
                              </div>
                              <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: '6px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '4px' }}>
                                🚛 <strong>Hỗ trợ cấp nước:</strong> {sc.tankSupport}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button
                                onClick={() => handleToggleValve(sc.valveId)}
                                style={{
                                  flex: 1,
                                  padding: '7px 10px',
                                  fontSize: '11.5px',
                                  fontWeight: 700,
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  border: 'none',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '6px',
                                  background: isSimulating ? '#ef4444' : '#0284c7',
                                  color: '#ffffff',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                {isSimulating ? (
                                  <>
                                    <span>Mở Lại Van</span>
                                  </>
                                ) : (
                                  <>
                                    <Eye size={13} />
                                    <span>Mô Phỏng Cắt Nước 3D</span>
                                  </>
                                )}
                              </button>

                              <button
                                onClick={() => {
                                  setActiveBroadcastModal(sc);
                                }}
                                style={{
                                  padding: '7px 12px',
                                  fontSize: '11.5px',
                                  fontWeight: 700,
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  border: '1px solid rgba(56, 189, 248, 0.4)',
                                  background: isNotified ? 'rgba(16, 185, 129, 0.2)' : 'rgba(2, 132, 199, 0.15)',
                                  color: isNotified ? '#86efac' : '#38bdf8',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '5px'
                                }}
                                title="Phát tin thông báo khẩn cấp tới BQL và cư dân"
                              >
                                <CheckCircle2 size={13} color={isNotified ? '#10b981' : '#38bdf8'} />
                                <span>{isNotified ? 'Đã Phát Tin' : 'Phát Thông Báo'}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                
                {/* MODAL PHÁT THÔNG BÁO ĐA KÊNH CHUYÊN NGHIỆP (THAY THẾ ALERT TRÌNH DUYỆT) */}
                {activeBroadcastModal && (
                  <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(3, 7, 18, 0.75)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.98)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      borderRadius: '16px',
                      maxWidth: '620px',
                      width: '100%',
                      boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(2, 132, 199, 0.25)',
                      overflow: 'hidden',
                      animation: 'fadeIn 0.2s ease-out'
                    }}>
                      {/* Modal Header */}
                      <div style={{
                        padding: '18px 24px',
                        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            background: 'rgba(56, 189, 248, 0.15)',
                            border: '1px solid rgba(56, 189, 248, 0.35)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#38bdf8'
                          }}>
                            <Bell size={22} />
                          </div>
                          <div>
                            <div style={{ fontSize: '15px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                              TRUNG TÂM ĐIỀU HÀNH SCADA · PHÁT THÔNG BÁO CẮT NƯỚC
                            </div>
                            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                              Hệ thống gửi cảnh báo khẩn cấp & điều phối dịch vụ khách hàng (TCVN 33:2006)
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => { setActiveBroadcastModal(null); setBroadcastSending(false); }}
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            color: '#cbd5e1',
                            borderRadius: '8px',
                            padding: '6px',
                            cursor: 'pointer'
                          }}
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* Modal Body */}
                      <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Event Overview Card */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '10px',
                          padding: '14px 16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}>
                          <div style={{ fontSize: '14px', fontWeight: 700, color: '#38bdf8' }}>
                            {activeBroadcastModal.title}
                          </div>
                          <div style={{ fontSize: '12px', color: '#cbd5e1', display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '4px' }}>
                            <span>⏰ <strong>Thời gian:</strong> <span style={{ color: '#fef08a' }}>{activeBroadcastModal.time}</span> ({activeBroadcastModal.date})</span>
                            <span>📍 <strong>DMA:</strong> {activeBroadcastModal.dma}</span>
                            <span>🔒 <strong>Chốt van:</strong> {activeBroadcastModal.valveName}</span>
                          </div>
                        </div>

                        {/* Broadcast Channels Multi-badge */}
                        <div>
                          <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                            Các Kênh Truyền Thông Kích Hoạt
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>📱 SMS Brandname:</span> <code style={{ background: '#0284c7', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>VIWACO_ALERT</code>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                Đích gửi: {activeBroadcastModal.households}
                              </div>
                            </div>

                            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>💬 Zalo ZNS & App Cư Dân</span>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                Thông báo đẩy tự động kèm bản đồ cấp nước
                              </div>
                            </div>

                            <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>🏢 Văn Bản Điện Tử Tới BQL</span>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                Gửi tới {activeBroadcastModal.affectedBuildings.length} Ban quản trị chung cư
                              </div>
                            </div>

                            <div style={{ background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '8px', padding: '10px 12px' }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>🚛 Xe Téc Cấp Nước Sạch</span>
                              </div>
                              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
                                {activeBroadcastModal.tankSupport}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Message Preview (SMS Mockup Card) */}
                        <div style={{
                          background: 'rgba(0, 0, 0, 0.45)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '10px',
                          padding: '12px 16px'
                        }}>
                          <div style={{ fontSize: '11px', fontWeight: 700, color: '#fef08a', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span>Mẫu Tin Nhắn Gửi Đến Thuê Bao Cư Dân:</span>
                          </div>
                          <div style={{ fontSize: '12px', color: '#e2e8f0', lineHeight: 1.55, fontFamily: 'sans-serif' }}>
                            "[VIWACO THÔNG BÁO] Kính gửi Quý cư dân khu vực {activeBroadcastModal.dma}: Công ty tạm ngừng cấp nước từ {activeBroadcastModal.time} ngày {activeBroadcastModal.date} để {activeBroadcastModal.reason}. Đề nghị Quý cư dân tích trữ nước sinh hoạt. Xe bồn cấp nước sạch miễn phí túc trực tại: {activeBroadcastModal.tankSupport}. Hotline hỗ trợ SCADA 24/7: 1900 6886. Trân trọng!"
                          </div>
                        </div>

                        {/* Status / Progress Display */}
                        {outageNoticeSent[activeBroadcastModal.id] && (
                          <div style={{
                            background: 'rgba(16, 185, 129, 0.15)',
                            border: '1px solid #10b981',
                            borderRadius: '8px',
                            padding: '10px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#86efac',
                            fontSize: '12.5px',
                            fontWeight: 600
                          }}>
                            <CheckCircle2 size={18} color="#10b981" />
                            <span>ĐÃ PHÁT TIN THÀNH CÔNG: Toàn bộ {activeBroadcastModal.affectedBuildings.length} BQL tòa nhà và cư dân đã nhận thông báo qua SMS / Zalo ZNS!</span>
                          </div>
                        )}
                      </div>

                      {/* Modal Footer */}
                      <div style={{
                        padding: '14px 24px',
                        background: 'rgba(0, 0, 0, 0.25)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '10px'
                      }}>
                        <button
                          onClick={() => { setActiveBroadcastModal(null); setBroadcastSending(false); }}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#cbd5e1',
                            fontSize: '12.5px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Đóng
                        </button>

                        <button
                          onClick={() => {
                            setBroadcastSending(true);
                            setTimeout(() => {
                              setOutageNoticeSent(p => ({ ...p, [activeBroadcastModal.id]: true }));
                              setBroadcastSending(false);
                            }, 400);
                          }}
                          disabled={broadcastSending || outageNoticeSent[activeBroadcastModal.id]}
                          style={{
                            padding: '8px 20px',
                            borderRadius: '8px',
                            border: 'none',
                            background: outageNoticeSent[activeBroadcastModal.id] 
                              ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)' 
                              : 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
                            color: '#ffffff',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)'
                          }}
                        >
                          {broadcastSending ? (
                            <span>Đang phát tin qua hệ thống...</span>
                          ) : outageNoticeSent[activeBroadcastModal.id] ? (
                            <>
                              <CheckCircle2 size={16} />
                              <span>Đã Hoàn Thành Phát Tin</span>
                            </>
                          ) : (
                            <>
                              <Bell size={16} />
                              <span>Kích Hoạt Phát Thông Báo Ngay</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}


                {/* Qatium Asset Inspector Drawer (Right Flyout) */}
                {selectedAsset && (
                  <div className="qatium-inspector-drawer">
                    <div className="inspector-header">
                      <div className="inspector-title">
                        <Box size={16} color="#0284c7" />
                        <span>{selectedAsset.name}</span>
                      </div>
                      <button
                        className="inspector-close"
                        onClick={() => setSelectedAsset(null)}
                        aria-label="Đóng bảng tra cứu"
                      >
                        <X size={15} />
                      </button>
                    </div>

                    <div className="inspector-body">
                      <div className="inspector-section">
                        <div className="inspector-section-title">THÔNG SỐ THỦY LỰC REAL-TIME</div>
                        <div className="inspector-grid">
                          <div className="inspector-item">
                            <span className="inspector-label">Trạng thái</span>
                            <span className="inspector-val highlight-val">{selectedAsset.data?.status || 'Bình thường'}</span>
                          </div>
                          <div className="inspector-item">
                            <span className="inspector-label">Áp lực P</span>
                            <span className="inspector-val">{selectedAsset.data?.intakePressure || selectedAsset.data?.pressure || currentSim.pressure + ' bar'}</span>
                          </div>
                          <div className="inspector-item">
                            <span className="inspector-label">Lưu lượng Q</span>
                            <span className="inspector-val">{selectedAsset.data?.demandFlow || selectedAsset.data?.flow || '45.0 m³/h'}</span>
                          </div>
                          <div className="inspector-item">
                            <span className="inspector-label">DMA Quản lý</span>
                            <span className="inspector-val">{selectedAsset.data?.dma || 'DMA THNC-02'}</span>
                          </div>
                        </div>
                      </div>

                      {selectedAsset.type === 'SmartValve' && (
                        <div className="inspector-section" style={{ background: 'rgba(2, 132, 199, 0.08)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                          <div className="inspector-section-title" style={{ color: '#38bdf8' }}>ĐIỀU KHIỂN CHỐT KHÓA NƯỚC</div>
                          <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5', margin: '4px 0 10px' }}>
                            {selectedAsset.data?.zoneDescription}
                          </p>
                          <button
                            className={`btn-sm ${selectedAsset.data?.isClosed ? 'btn-primary' : 'btn-danger'}`}
                            onClick={() => handleToggleValve(selectedAsset.id)}
                            style={{ width: '100%', justifyContent: 'center', padding: '9px 12px', fontWeight: 'bold' }}
                          >
                            {selectedAsset.data?.isClosed ? '🔓 MỞ LẠI CHỐT KHÓA NƯỚC' : '🔒 ĐÓNG CHỐT VAN (CÔ LẬP SỰ CỐ)'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 24-HOUR SCADA HYDRAULIC OPERATION INTERACTIVE CHART */}
                <div className="qatium-timeline-bar" style={{
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(11, 20, 38, 0.95)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(56, 189, 248, 0.28)',
                  borderRadius: '10px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.65)'
                }}>
                  {/* Play/Pause Button */}
                  <button
                    className="timeline-play-btn"
                    onClick={() => {
                      setSimPlaying(!simPlaying);
                      showToast(simPlaying ? "Đã tạm dừng mô phỏng 24h" : "Đang chạy mô phỏng biến thiên thủy lực 24h...");
                    }}
                    title={simPlaying ? 'Tạm dừng mô phỏng' : 'Chạy mô phỏng biến thiên 24h'}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: simPlaying ? '#0284c7' : '#0369a1',
                      border: 'none',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                      boxShadow: '0 0 12px rgba(2, 132, 199, 0.45)'
                    }}
                  >
                    {simPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                  </button>

                  {/* Telemetry Metrics Badge */}
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: '180px', flexShrink: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Activity size={13} color="#38bdf8" />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.02em' }}>{currentSim.label}</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px', display: 'flex', gap: '8px' }}>
                      <span>Q = <b style={{ color: '#38bdf8' }}>{currentSim.flow} m³/h</b></span>
                      <span>·</span>
                      <span>P = <b style={{ color: '#f59e0b' }}>{currentSim.pressure} bar</b></span>
                    </div>
                  </div>

                  {/* Interactive 24-Hour Operation Chart (SVG Sparkline & Scrubber) */}
                  <div style={{ flex: 1, position: 'relative', height: '46px', display: 'flex', alignItems: 'center' }}>
                    <svg
                      viewBox="0 0 460 44"
                      style={{ width: '100%', height: '100%', overflow: 'visible', cursor: 'pointer' }}
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const pct = Math.max(0, Math.min(1, clickX / rect.width));
                        const targetHour = Math.round(pct * 23);
                        setSimTime(targetHour);
                      }}
                    >
                      <defs>
                        <linearGradient id="flowGrad24" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill for Flow Demand */}
                      <path
                        d="M 10 38 L 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34 L 450 38 Z"
                        fill="url(#flowGrad24)"
                      />

                      {/* Line for Flow Q (Cyan Blue) */}
                      <path
                        d="M 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34"
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="2.2"
                      />

                      {/* Dashed Line for Pressure P (Amber/Orange) */}
                      <path
                        d="M 10 16 Q 50 12 70 11 T 130 26 T 190 22 T 270 23 T 350 32 T 410 21 T 450 14"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.6"
                        strokeDasharray="3 3"
                        opacity="0.85"
                      />

                      {/* 24 Hourly Interactive Vertical Tick Bars */}
                      {Array.from({ length: 24 }).map((_, h) => {
                        const x = 10 + (h / 23) * 440;
                        const isCurrent = h === simTime;
                        return (
                          <g key={h}>
                            <line
                              x1={x}
                              y1={8}
                              x2={x}
                              y2={38}
                              stroke={isCurrent ? '#38bdf8' : 'rgba(255,255,255,0.08)'}
                              strokeWidth={isCurrent ? 2 : 1}
                            />
                            {h % 3 === 0 && (
                              <text
                                x={x}
                                y={43}
                                textAnchor="middle"
                                fontSize="8.5"
                                fill={isCurrent ? '#38bdf8' : '#64748b'}
                                fontWeight={isCurrent ? 'bold' : 'normal'}
                              >
                                {h}h
                              </text>
                            )}
                          </g>
                        );
                      })}

                                            {/* Active Hour Glowing Cursor Pin */}
                      {(() => {
                        const curX = 10 + (simTime / 23) * 440;
                        return (
                          <g>
                            <line x1={curX} y1={2} x2={curX} y2={38} stroke="#38bdf8" strokeWidth="2.5" />
                            <circle cx={curX} cy={6} r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                          </g>
                        );
                      })()}
                    </svg>
                  </div>

                  {/* Status & Reset */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span className={`metric-badge ${
                      simTime >= 2 && simTime <= 4 ? 'badge-danger' :
                      (simTime >= 6 && simTime <= 8) || (simTime >= 18 && simTime <= 20) ? 'badge-warning' : 'badge-success'
                    }`} style={{ fontSize: '11px', padding: '4px 8px' }}>
                      {currentSim.status}
                    </span>
                    <button
                      className="btn-sm btn-secondary"
                      onClick={() => setSimTime(14)}
                      title="Đặt lại giờ mặc định (14:00)"
                      style={{ padding: '6px' }}
                    >
                      <RotateCcw size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: TELEMETRY (ÁP LỰC & LƯU LƯỢNG - SCADA MẠNG GIS CẢI TIẾN) */}
          {activeTab === 'telemetry' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* GIS SCADA Network Overview Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#ffffff',
                borderRadius: '14px',
                padding: '22px 24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '18px'
              }}>
                <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tổng Lưu Lượng Cấp Vào
                  </div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#38bdf8', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    4,040.0 <span style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>m³/h</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#10b981', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={12} />
                    <span>Nguồn Sông Đà & 4 Cửa Ngõ chính</span>
                  </div>
                </div>

                <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Áp Lực Trung Bình Mạng
                  </div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#10b981', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    3.28 <span style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>bar</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94a3b8', marginTop: '4px' }}>
                    Dải chuẩn vận hành: 2.80 - 3.50 bar
                  </div>
                </div>

                <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Trạm SCADA Trực Tuyến
                  </div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#fbbf24', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    14 / 14 <span style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>Điểm đo</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#38bdf8', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Radio size={12} />
                    <span>IoT 4G/NB-IoT Telemetry 100%</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Độ Ổn Định Thủy Lực
                  </div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#4ade80', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    98.6%
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94a3b8', marginTop: '4px' }}>
                    1 điểm cận ngưỡng thấp (Triều Khúc)
                  </div>
                </div>
              </div>

              {/* Main Panel Card */}
              <div className="panel-card">
                <div className="panel-card-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div className="panel-card-title">
                      <Gauge size={19} color="#0284c7" />
                      <span>Dữ liệu Áp Lực & Lưu Lượng SCADA (14 Trạm Mạng GIS)</span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      Chuẩn hóa theo Mạng lưới GIS Số Hóa: Tuyến truyền dẫn Sông Đà, Trung Hòa - Nhân Chính, Cầu Giấy, Nam Trung Yên
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {/* Search Input */}
                    <div style={{ position: 'relative' }}>
                      <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                      <input
                        type="text"
                        placeholder="Tìm trạm, tuyến, DMA..."
                        value={telemetrySearch}
                        onChange={(e) => setTelemetrySearch(e.target.value)}
                        style={{
                          padding: '6px 12px 6px 30px',
                          fontSize: '12px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          outline: 'none',
                          width: '180px'
                        }}
                      />
                    </div>

                    <button
                      className="btn-sm btn-primary"
                      onClick={() => handleExportCSV('Du_Lieu_Telemetry_SCADA_GIS_14_Diem.csv')}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Download size={14} />
                      <span>Xuất Excel</span>
                    </button>
                  </div>
                </div>

                {/* DMA Zone Filter Pills */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                  {[
                    { id: 'all', label: 'Tất cả (14)' },
                    { id: 'gateway', label: 'Cửa Ngõ Nguồn & PRV (5)' },
                    { id: 'thnc', label: 'Cụm THNC 01, 02, 03 (5)' },
                    { id: 'nty', label: 'Nam Trung Yên & PVI (2)' },
                    { id: 'cg', label: 'Cầu Giấy & Triều Khúc (2)' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setTelemetryZoneFilter(tab.id)}
                      style={{
                        padding: '5px 12px',
                        fontSize: '12px',
                        fontWeight: telemetryZoneFilter === tab.id ? 700 : 500,
                        borderRadius: '20px',
                        border: '1px solid',
                        borderColor: telemetryZoneFilter === tab.id ? '#0284c7' : '#e2e8f0',
                        background: telemetryZoneFilter === tab.id ? '#f0f9ff' : '#ffffff',
                        color: telemetryZoneFilter === tab.id ? '#0284c7' : '#475569',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Table Data */}
                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Mã Trạm / Thiết Bị</th>
                        <th>Vị Trí Mạng GIS</th>
                        <th>Phân Vùng DMA</th>
                        <th>Cỡ Ống</th>
                        <th>Lưu Lượng (m³/h)</th>
                        <th>Áp Lực (bar)</th>
                        <th>Dải Chuẩn</th>
                        <th>Chênh Lệch</th>
                        <th>Pin / 4G</th>
                        <th>Trạng Thái Vận Hành</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 'FM-INLET-SD', name: 'Đồng Hồ Tổng Nguồn Sông Đà', location: 'Cửa ngõ Đại lộ Thăng Long (Km4)', dma: 'Vùng Nguồn Tây', group: 'gateway', dn: 'DN800', flow: '1,450.0', press: '5.20', range: '4.8 - 5.5 bar', delta: '+0.10', batt: '100%', status: 'Rất tốt (Đầu nguồn)', tag: 'badge-success' },
                        { id: 'PRV-GATE-WEST', name: 'Trạm Van Giảm Áp PRV Cửa Ngõ Tây', location: 'ĐL Thăng Long - Vành Đai 3', dma: 'Trạm Giảm Áp', group: 'gateway', dn: 'DN600', flow: '1,450.0', press: '3.35', range: '3.2 - 3.5 bar', delta: '+0.05', batt: '99%', status: 'Điều áp tối ưu', tag: 'badge-success' },
                        { id: 'FM-INLET-VD3-N', name: 'Đồng Hồ Cửa Ngõ Bắc Vành Đai 3', location: 'Tuyến dẫn Phạm Hùng - Keangnam', dma: 'DMA Cửa Ngõ Bắc', group: 'gateway', dn: 'DN500', flow: '980.0', press: '4.10', range: '3.8 - 4.3 bar', delta: '+0.00', batt: '98%', status: 'Ổn định', tag: 'badge-info' },
                        { id: 'FM-INLET-NT', name: 'Đồng Hồ Cửa Ngõ Đông Nam', location: 'Tuyến dẫn Nguyễn Trãi - Thanh Xuân', dma: 'DMA Thượng Đình', group: 'gateway', dn: 'DN500', flow: '890.0', press: '3.90', range: '3.6 - 4.2 bar', delta: '+0.00', batt: '97%', status: 'Ổn định', tag: 'badge-info' },
                        { id: 'FM-INLET-LVL', name: 'Đồng Hồ Cửa Ngõ Phía Đông', location: 'Tuyến dẫn Lê Văn Lương - Láng Hạ', dma: 'DMA Láng Hạ', group: 'gateway', dn: 'DN400', flow: '720.0', press: '3.80', range: '3.5 - 4.0 bar', delta: '-0.10', batt: '95%', status: 'Ổn định', tag: 'badge-info' },
                        { id: 'PT-HDT-01', name: 'Cảm Biến Áp Lực Ngã Tư Hoàng Đạo Thúy', location: 'Trục Trung Tâm Cụm 34T & Mandarin', dma: 'DMA THNC-02', group: 'thnc', dn: 'DN300', flow: '128.5', press: '3.24', range: '2.8 - 3.5 bar', delta: '+0.04', batt: '98%', status: 'Tối ưu', tag: 'badge-success' },
                        { id: 'PT-TDH-03', name: 'Cảm Biến Áp Lực Trần Duy Hưng', location: "Trục chính D'Capitale & Charmvit", dma: 'DMA THNC-01', group: 'thnc', dn: 'DN300', flow: '145.8', press: '3.42', range: '2.8 - 3.5 bar', delta: '+0.12', batt: '99%', status: 'Ổn định', tag: 'badge-info' },
                        { id: 'PT-LVL-04', name: 'Cảm Biến Áp Lực Lê Văn Lương', location: 'Trục Diamond Flower & Star City', dma: 'DMA THNC-03', group: 'thnc', dn: 'DN300', flow: '162.0', press: '3.38', range: '2.8 - 3.5 bar', delta: '+0.08', batt: '96%', status: 'Ổn định', tag: 'badge-info' },
                        { id: 'FM-SUB-01', name: "Đồng Hồ Phân Vùng D&apos;Capitale - Big C", location: "Nhánh cấp D'Capitale C1-C6", dma: 'DMA THNC-01', group: 'thnc', dn: 'DN200', flow: '145.8', press: '3.40', range: '2.8 - 3.5 bar', delta: '+0.10', batt: '98%', status: 'AMR Online', tag: 'badge-info' },
                        { id: 'FM-SUB-02', name: 'Đồng Hồ Phân Vùng Mandarin Garden & N04', location: 'Nhánh cấp Cụm Hoàng Đạo Thúy', dma: 'DMA THNC-02', group: 'thnc', dn: 'DN200', flow: '128.5', press: '3.22', range: '2.8 - 3.5 bar', delta: '+0.02', batt: '97%', status: 'AMR Online', tag: 'badge-info' },
                        { id: 'PT-NORTH-05', name: 'Cảm Biến Áp Tuyến Nam Trung Yên', location: 'Tòa Tháp PVI & Cụm B10A/B11B', dma: 'DMA Nam Trung Yên', group: 'nty', dn: 'DN250', flow: '95.0', press: '2.85', range: '2.6 - 3.2 bar', delta: '-0.15', batt: '93%', status: 'Ổn định', tag: 'badge-info' },
                        { id: 'FM-INLET-VD3-N2', name: 'Đồng Hồ Cụm Căn Hộ Nam Trung Yên', location: 'Phố Mạc Thái Tổ - Hạ Yên', dma: 'DMA Nam Trung Yên', group: 'nty', dn: 'DN200', flow: '84.2', press: '2.90', range: '2.6 - 3.2 bar', delta: '-0.10', batt: '94%', status: 'Ổn định', tag: 'badge-info' },
                        { id: 'PT-CG-09', name: 'Cảm Biến Áp Khu Công Nghệ Duy Tân', location: 'Cụm FPT Tower & Viettel Cầu Giấy', dma: 'DMA Cầu Giấy', group: 'cg', dn: 'DN250', flow: '110.0', press: '3.15', range: '2.8 - 3.4 bar', delta: '+0.05', batt: '96%', status: 'Tối ưu', tag: 'badge-success' },
                        { id: 'PT-SOUTH-08', name: 'Cảm Biến Điểm Bất Lợi Triều Khúc', location: 'Nút điểm cao cuối mạng Triều Khúc', dma: 'DMA Thanh Xuân Nam', group: 'cg', dn: 'DN200', flow: '72.0', press: '2.75', range: '2.8 - 3.4 bar', delta: '-0.25', batt: '92%', status: 'Cận ngưỡng thấp', tag: 'badge-warning' },
                      ]
                        .filter(row => {
                          if (telemetryZoneFilter !== 'all' && row.group !== telemetryZoneFilter) return false;
                          if (telemetrySearch.trim()) {
                            const q = telemetrySearch.toLowerCase();
                            return row.name.toLowerCase().includes(q) || row.id.toLowerCase().includes(q) || row.location.toLowerCase().includes(q) || row.dma.toLowerCase().includes(q);
                          }
                          return true;
                        })
                        .map((row, idx) => (
                          <tr key={idx}>
                            <td>
                              <div style={{ fontWeight: '700', color: '#0f172a' }}>{row.id}</div>
                              <div style={{ fontSize: '12px', color: '#64748b' }}>{row.name}</div>
                            </td>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                                <MapPin size={13} color="#0284c7" />
                                <span>{row.location}</span>
                              </div>
                            </td>
                            <td>
                              <span style={{ fontWeight: 600, color: '#334155' }}>{row.dma}</span>
                            </td>
                            <td style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>{row.dn}</td>
                            <td style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#0284c7' }}>{row.flow}</td>
                            <td style={{ fontWeight: '800', color: parseFloat(row.press) < 2.8 ? '#d97706' : '#10b981', fontFamily: 'var(--font-mono)' }}>
                              {row.press}
                            </td>
                            <td style={{ color: '#64748b', fontSize: '12px' }}>{row.range}</td>
                            <td style={{ fontFamily: 'var(--font-mono)', color: row.delta.startsWith('-') ? '#ef4444' : '#10b981' }}>{row.delta}</td>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#16a34a' }}>
                                <Radio size={12} />
                                <span>{row.batt}</span>
                              </div>
                            </td>
                            <td>
                              <span className={`metric-badge ${row.tag}`}>{row.status}</span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    * Toàn bộ 14 trạm đều tích hợp chuẩn truyền tin thời gian thực với Mạng GIS Digital Twin Hà Nội.
                  </div>
                  <button
                    className="btn-sm btn-secondary"
                    onClick={() => setActiveTab('gis')}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Layers size={14} color="#0284c7" />
                    <span>Xem Định Vị Trạm Trên Mạng GIS 3D →</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LEAK DETECTION (PHÁT HIỆN RÒ RỈ & QUẢN LÝ THẤT THOÁT NRW) */}
          {activeTab === 'leaks' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* 4 Top Indicator Cards */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span>Lưu lượng đêm tối thiểu (MNF)</span>
                    <div className="metric-icon-wrap" style={{ background: '#fef3c7', color: '#d97706' }}>
                      <TrendingDown size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">185.4</span>
                    <span className="metric-unit">m³/h</span>
                  </div>
                  <span className="metric-badge badge-warning">Khung 02:00 - 04:00 (+20.4 m³ lệch chuẩn)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Tỷ lệ thất thoát kỹ thuật (NRW)</span>
                    <div className="metric-icon-wrap" style={{ background: '#fee2e2', color: '#ef4444' }}>
                      <AlertTriangle size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value" style={{ color: '#ef4444' }}>12.5%</span>
                  </div>
                  <span className="metric-badge badge-danger">~505 m³/ngày tổn thất rò rỉ</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Nghi vấn rò rỉ âm thanh (Acoustic)</span>
                    <div className="metric-icon-wrap" style={{ background: '#fee2e2', color: '#ef4444' }}>
                      <ShieldAlert size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value" style={{ color: '#d97706' }}>3</span>
                    <span className="metric-unit">điểm khoanh vùng</span>
                  </div>
                  <span className="metric-badge badge-warning">Tuyến D300 HL & D200 LVL</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Tiết kiệm khi kiểm soát NRW</span>
                    <div className="metric-icon-wrap" style={{ background: '#ecfdf5', color: '#10b981' }}>
                      <CheckCircle2 size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value" style={{ color: '#10b981' }}>420</span>
                    <span className="metric-unit">tr.đ/tháng</span>
                  </div>
                  <span className="metric-badge badge-success">Mục tiêu giảm từ 12.5% xuống 10%</span>
                </div>
              </div>

              {/* DMA Loss Breakdown Table */}
              <div className="panel-card">
                <div className="panel-card-header">
                  <div>
                    <div className="panel-card-title">
                      <Layers size={18} color="#0284c7" />
                      <span>Cân Bằng Nước & Tỷ Lệ Thất Thoát Theo 5 Phân Vùng DMA (Mạng GIS)</span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      Đối chiếu lưu lượng cấp vào vs lưu lượng tiêu thụ thương mại AMR theo thời gian thực
                    </span>
                  </div>
                  <button
                    className="btn-sm btn-primary"
                    onClick={() => handleExportCSV('Bao_Cao_That_Thoat_NRW_5_DMA.csv')}
                  >
                    Xuất Báo Cáo
                  </button>
                </div>

                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Phân Vùng DMA</th>
                        <th>Khu Vực GIS Trọng Điểm</th>
                        <th>Quy Mô Cư Dân</th>
                        <th>Lưu Lượng Cấp (m³/h)</th>
                        <th>Tiêu Thụ AMR (m³/h)</th>
                        <th>MNF Đêm (m³/h)</th>
                        <th>Tỷ Lệ NRW</th>
                        <th>Mức Ưu Tiên Khắc Phục</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div style={{ fontWeight: '700', color: '#0f172a' }}>DMA THNC-02</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Cụm Hoàng Đạo Thúy - Mandarin</div>
                        </td>
                        <td>Mandarin Garden, 34T, Cụm N04 & N05, Chuyên Amsterdam</td>
                        <td>8,450 Hộ & VP</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>720.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>625.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)', color: '#d97706', fontWeight: 600 }}>38.5 m³/h</td>
                        <td style={{ fontWeight: '800', color: '#ef4444', fontSize: '14px' }}>13.2%</td>
                        <td><span className="metric-badge badge-danger">Ưu Tiên Cao (Khoanh van)</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div style={{ fontWeight: '700', color: '#0f172a' }}>DMA THNC-03</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Cụm Lê Văn Lương - Nhân Chính</div>
                        </td>
                        <td>Diamond Flower Tower, Star City, HUD Tower, Hoàng Ngân</td>
                        <td>6,100 Hộ</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>580.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>495.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)', color: '#ef4444', fontWeight: 600 }}>42.0 m³/h</td>
                        <td style={{ fontWeight: '800', color: '#ef4444', fontSize: '14px' }}>14.6%</td>
                        <td><span className="metric-badge badge-danger">Báo Động Đỏ (Ống thép cũ)</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div style={{ fontWeight: '700', color: '#0f172a' }}>DMA THNC-01</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Cụm Trần Duy Hưng - D&apos;Capitale</div>
                        </td>
                        <td>Tổ hợp Vinhomes D&apos;Capitale (C1-C6), Big C Thăng Long, Charmvit</td>
                        <td>9,820 Hộ & TTTM</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>850.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>755.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)', color: '#10b981', fontWeight: 600 }}>35.2 m³/h</td>
                        <td style={{ fontWeight: '800', color: '#f59e0b', fontSize: '14px' }}>11.2%</td>
                        <td><span className="metric-badge badge-warning">Trung Bình (Đã lắp PRV)</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div style={{ fontWeight: '700', color: '#0f172a' }}>DMA Nam Trung Yên</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>KĐT Nam Trung Yên & PVI Tower</div>
                        </td>
                        <td>Chung cư B10A, B11B, A10, A14 & Tòa Tháp PVI (26T)</td>
                        <td>6,280 Hộ</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>610.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>545.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)', color: '#10b981', fontWeight: 600 }}>28.4 m³/h</td>
                        <td style={{ fontWeight: '800', color: '#10b981', fontSize: '14px' }}>10.6%</td>
                        <td><span className="metric-badge badge-success">Mức Tốt (Mạng HDPE)</span></td>
                      </tr>
                      <tr>
                        <td>
                          <div style={{ fontWeight: '700', color: '#0f172a' }}>DMA Cầu Giấy</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Khu Công Nghệ Duy Tân</div>
                        </td>
                        <td>FPT Tower, FPT Duy Tân, Viettel Cầu Giấy, CMC Creative Space</td>
                        <td>4,500 Cơ quan/VP</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>480.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>440.0 m³/h</td>
                        <td style={{ fontFamily: 'var(--font-mono)', color: '#10b981', fontWeight: 600 }}>18.0 m³/h</td>
                        <td style={{ fontWeight: '800', color: '#10b981', fontSize: '14px' }}>8.3%</td>
                        <td><span className="metric-badge badge-success">Rất Tốt (AMR 100%)</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Acoustic & AI Leak Incidents Log */}
              <div className="panel-card">
                <div className="panel-card-header">
                  <div>
                    <div className="panel-card-title">
                      <ShieldAlert size={18} color="#ef4444" />
                      <span>Nhật Ký Cảnh Báo Âm Thanh Rò Rỉ Định Vị GIS (AI Acoustic Leak Logs)</span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      Dữ liệu phân tích cảm biến thủy âm bề mặt kết hợp thuật toán AI nhận diện xung áp lực đêm
                    </span>
                  </div>
                </div>

                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Mã Sự Cố</th>
                        <th>Vị Trí Tuyến Ống GIS</th>
                        <th>Loại Tuyến & Đường Kính</th>
                        <th>Tần Số & Cường Độ Âm</th>
                        <th>Độ Tin Cậy AI</th>
                        <th>Lưu Lượng Rò Ước Tính</th>
                        <th>Trạng Thái & Hành Động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: '700', color: '#ef4444' }}>LK-2026-11-01</td>
                        <td>
                          <div style={{ fontWeight: 600 }}>Ngõ 18 Hoàng Đạo Thúy (Đối diện 34T)</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Tọa độ GIS: [0, 0, 0] - DMA THNC-02</div>
                        </td>
                        <td>Ống gang dẻo DI DN300</td>
                        <td>
                          <span style={{ fontFamily: 'var(--font-mono)', color: '#d97706' }}>850 Hz / 48 dB</span>
                        </td>
                        <td>
                          <span style={{ fontWeight: '700', color: '#ef4444' }}>94%</span>
                        </td>
                        <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>~14.5 m³/h</td>
                        <td>
                          <button
                            className="btn-sm btn-primary"
                            onClick={() => { setActiveTab('gis'); showToast('Đang chuyển đến vị trí van cô lập ngõ 18 Hoàng Đạo Thúy trên GIS...'); }}
                            style={{ padding: '4px 8px', fontSize: '11px' }}
                          >
                            Định vị trên GIS
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '700', color: '#ef4444' }}>LK-2026-11-02</td>
                        <td>
                          <div style={{ fontWeight: 600 }}>Ngã tư Lê Văn Lương - Hoàng Ngân</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Tọa độ GIS: [0, 0, 180] - DMA THNC-03</div>
                        </td>
                        <td>Ống thép hàn D200 (lắp đặt 2008)</td>
                        <td>
                          <span style={{ fontFamily: 'var(--font-mono)', color: '#ef4444' }}>920 Hz / 52 dB</span>
                        </td>
                        <td>
                          <span style={{ fontWeight: '700', color: '#ef4444' }}>88%</span>
                        </td>
                        <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>~18.2 m³/h</td>
                        <td>
                          <button
                            className="btn-sm btn-primary"
                            onClick={() => { setActiveTab('gis'); showToast('Đang chuyển đến vị trí tuyến D200 Lê Văn Lương trên GIS...'); }}
                            style={{ padding: '4px 8px', fontSize: '11px' }}
                          >
                            Định vị trên GIS
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '700', color: '#f59e0b' }}>LK-2026-11-03</td>
                        <td>
                          <div style={{ fontWeight: 600 }}>Hố van điều áp PRV Nam Trung Yên (gần B10A)</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Tọa độ GIS: [-440, 0, -950]</div>
                        </td>
                        <td>Hố van bypass DN200</td>
                        <td>
                          <span style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>620 Hz / 38 dB</span>
                        </td>
                        <td>
                          <span style={{ fontWeight: '700', color: '#f59e0b' }}>76%</span>
                        </td>
                        <td style={{ fontFamily: 'var(--font-mono)' }}>~6.8 m³/h</td>
                        <td>
                          <span className="metric-badge badge-warning">Theo dõi MNF đêm</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: WATER QUALITY (CHẤT LƯỢNG NƯỚC - TIÊU CHUẨN QCVN 01-1:2018/BYT) */}
          {activeTab === 'quality' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* 4 Primary Health Criteria Cards */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <span>Độ đục (Turbidity)</span>
                    <div className="metric-icon-wrap" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                      <Droplets size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">0.82</span>
                    <span className="metric-unit">NTU</span>
                  </div>
                  <span className="metric-badge badge-success">Chuẩn QCVN (&lt; 2.0 NTU) - Rất trong</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Clo dư tự do (Residual Cl₂)</span>
                    <div className="metric-icon-wrap" style={{ background: '#ecfdf5', color: '#10b981' }}>
                      <CheckCircle2 size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">0.42</span>
                    <span className="metric-unit">mg/L</span>
                  </div>
                  <span className="metric-badge badge-success">Ngưỡng chuẩn (0.2 - 1.0 mg/L)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Độ kiềm & Axit (pH)</span>
                    <div className="metric-icon-wrap" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                      <Activity size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">7.35</span>
                  </div>
                  <span className="metric-badge badge-info">Trung tính tối ưu (6.5 - 8.5)</span>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Chất rắn hòa tan (TDS)</span>
                    <div className="metric-icon-wrap" style={{ background: '#f8fafc', color: '#475569' }}>
                      <Gauge size={18} />
                    </div>
                  </div>
                  <div className="metric-body">
                    <span className="metric-value">128</span>
                    <span className="metric-unit">ppm</span>
                  </div>
                  <span className="metric-badge badge-success">Khoáng chất an toàn (&lt; 1000 ppm)</span>
                </div>
              </div>

              {/* 2 Secondary Bio-safety Indicators */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                <div className="panel-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Chỉ Số Vi Sinh (E.Coli / Coliform)</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#047857' }}>0 CFU / 100ml</div>
                    <div style={{ fontSize: '11px', color: '#10b981' }}>Âm tính tuyệt đối - Đạt chuẩn Bộ Y Tế</div>
                  </div>
                </div>

                <div className="panel-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                    <Activity size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Độ Dẫn Điện Nước (Conductivity EC)</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#1e40af' }}>245 µS/cm</div>
                    <div style={{ fontSize: '11px', color: '#2563eb' }}>Độ tinh khiết khoáng tự nhiên</div>
                  </div>
                </div>
              </div>

              {/* Online Water Quality Monitoring Stations on GIS */}
              <div className="panel-card">
                <div className="panel-card-header">
                  <div>
                    <div className="panel-card-title">
                      <Droplets size={18} color="#0284c7" />
                      <span>Trạm Quan Trắc Chất Lượng Nước Trực Tuyến (Online WQ Stations)</span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      Giám sát tự động 15 phút/lần tại các nút giao truyền tải trọng yếu trên Mạng GIS
                    </span>
                  </div>
                  <button
                    className="btn-sm btn-primary"
                    onClick={() => handleExportCSV('Bao_Cao_Chat_Luong_Nuoc_WQ_GIS.csv')}
                  >
                    Xuất Báo Cáo
                  </button>
                </div>

                <div className="data-table-wrapper">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Mã Trạm Quan Trắc</th>
                        <th>Vị Trí Mạng Lưới GIS</th>
                        <th>Độ Đục (NTU)</th>
                        <th>Clo Dư (mg/L)</th>
                        <th>Độ pH</th>
                        <th>TDS (ppm)</th>
                        <th>Nhiệt Độ (°C)</th>
                        <th>Tần Suất Đo</th>
                        <th>Đánh Giá QCVN</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 'WQ-SD-01', name: 'Trạm Tiếp Nhận Nguồn Sông Đà', loc: 'Đại lộ Thăng Long (Km4)', turb: '0.45', cl: '0.78', ph: '7.42', tds: '115', temp: '24.2', freq: '5 phút/lần', status: 'Rất tốt (Đầu nguồn)', tag: 'badge-success' },
                        { id: 'WQ-MT-02', name: 'Bể Điều Hòa Mễ Trì (12.000 m³)', loc: 'Cụm Keangnam Landmark 72', turb: '0.58', cl: '0.58', ph: '7.38', tds: '122', temp: '24.5', freq: '10 phút/lần', status: 'Tối ưu', tag: 'badge-success' },
                        { id: 'WQ-THNC-03', name: 'Nút Mandarin Garden & 34T', loc: 'Trục Hoàng Đạo Thúy - THNC', turb: '0.75', cl: '0.45', ph: '7.34', tds: '128', temp: '24.8', freq: '15 phút/lần', status: 'Đạt chuẩn', tag: 'badge-success' },
                        { id: 'WQ-NTY-04', name: 'Cụm Cư Dân Nam Trung Yên', loc: 'Chung cư B10A & PVI Tower', turb: '0.85', cl: '0.38', ph: '7.30', tds: '132', temp: '24.9', freq: '15 phút/lần', status: 'Đạt chuẩn', tag: 'badge-success' },
                        { id: 'WQ-CG-05', name: 'Khu Công Nghệ Duy Tân', loc: 'FPT Tower & Viettel Cầu Giấy', turb: '0.68', cl: '0.40', ph: '7.32', tds: '125', temp: '24.6', freq: '15 phút/lần', status: 'Đạt chuẩn', tag: 'badge-success' },
                        { id: 'WQ-TK-06', name: 'Điểm Đo Cuối Mạng Triều Khúc', loc: 'Nút bất lợi Triều Khúc - Thanh Xuân', turb: '1.15', cl: '0.24', ph: '7.18', tds: '145', temp: '25.1', freq: '15 phút/lần', status: 'Cận ngưỡng Clo (0.24)', tag: 'badge-warning' },
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td>
                            <div style={{ fontWeight: '700', color: '#0f172a' }}>{row.id}</div>
                            <div style={{ fontSize: '12px', color: '#64748b' }}>{row.name}</div>
                          </td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                              <MapPin size={13} color="#0284c7" />
                              <span>{row.loc}</span>
                            </div>
                          </td>
                          <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#0284c7' }}>{row.turb}</td>
                          <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: parseFloat(row.cl) < 0.25 ? '#d97706' : '#10b981' }}>{row.cl}</td>
                          <td style={{ fontFamily: 'var(--font-mono)' }}>{row.ph}</td>
                          <td style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>{row.tds}</td>
                          <td style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>{row.temp}°C</td>
                          <td style={{ fontSize: '12px', color: '#64748b' }}>{row.freq}</td>
                          <td>
                            <span className={`metric-badge ${row.tag}`}>{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chlorine Residual Curve & Flushing Protocol */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
                <div className="panel-card" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={17} color="#0284c7" />
                    <span>Đường Suy Giảm Nồng Độ Clo Dư Theo Chiều Dài Mạng Lưới</span>
                  </h3>
                  <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.6', marginBottom: '14px' }}>
                    Giám sát nồng độ Clo dư tự do từ Trạm tiếp nhận Sông Đà (0 km: 0.78 mg/L) truyền qua 8.5 km đường ống đến điểm cuối Triều Khúc (0.24 mg/L) nhằm duy trì khả năng khử khuẩn và ngăn ngừa rủi ro tái nhiễm sinh học.
                  </p>
                  
                  {/* Visual Chlorine Gradient Bar */}
                  <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', marginBottom: '6px', fontWeight: 600 }}>
                      <span style={{ color: '#047857' }}>Đầu Nguồn (0.78 mg/L)</span>
                      <span style={{ color: '#0284c7' }}>Trung Tâm THNC (0.45 mg/L)</span>
                      <span style={{ color: '#d97706' }}>Cuối Mạng Triều Khúc (0.24 mg/L)</span>
                    </div>
                    <div style={{ height: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #10b981 0%, #38bdf8 55%, #f59e0b 100%)', width: '100%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginTop: '6px' }}>
                      <span>Km 0.0 (Sông Đà)</span>
                      <span>Km 4.2 (34T HDT)</span>
                      <span>Km 8.5 (Triều Khúc)</span>
                    </div>
                  </div>
                </div>

                <div className="panel-card" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <RefreshCw size={17} color="#10b981" />
                    <span>Hệ Thống Súc Xả Tự Động (Auto-Flushing Units)</span>
                  </h3>
                  <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.6', marginBottom: '14px' }}>
                    Tự động kích hoạt van xả cặn khi cảm biến phát hiện độ đục vượt ngưỡng &gt; 1.8 NTU hoặc khi nồng độ Clo dư tại điểm cụt giảm xuống &lt; 0.20 mg/L sau 48h lưu chuyển chậm.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span className="metric-badge badge-success">
                      <CheckCircle2 size={13} />
                      <span>3 Trạm súc xả tự động sẵn sàng</span>
                    </span>
                    <span className="metric-badge badge-info">
                      <span>Lần xả gần nhất: 03:15 sáng qua</span>
                    </span>
                  </div>
                </div>
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
