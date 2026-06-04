import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  DollarSign, 
  Send, 
  Plus, 
  Check, 
  Search, 
  Users, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  MessageCircle, 
  AlertCircle,
  FileText,
  Download,
  CheckCircle,
  Info,
  Lock,
  Mail,
  UserPlus,
  Play,
  ChevronLeft,
  ChevronRight,
  Filter,
  Calendar,
  BookOpenCheck,
  FileSpreadsheet,
  UploadCloud,
  CheckSquare,
  BellRing,
  Moon,
  Sun,
  Trophy,
  RefreshCw,
  Sparkles,
  Copy,
  Clock,
  ArrowUpCircle,
  History,
  Printer,
  KeyRound,
  Eye,
  EyeOff,
  Award,
  Edit,
  Trash2,
  Volume2,
  VolumeX,
  FileDown,
  BookMarked,
  Sparkle
} from 'lucide-react';

const presetAvatars = [
  { id: 'av1', emoji: '🦊', color: 'bg-orange-100 text-orange-600', name: 'Rubah Pintar' },
  { id: 'av2', emoji: '🐨', color: 'bg-slate-100 text-slate-600', name: 'Koala Rajin' },
  { id: 'av3', emoji: '🦁', color: 'bg-amber-100 text-amber-600', name: 'Singa Bijak' },
  { id: 'av4', emoji: '🦉', color: 'bg-indigo-100 text-indigo-600', name: 'Burung Hantu Cerdas' },
  { id: 'av5', emoji: '🦄', color: 'bg-pink-100 text-pink-600', name: 'Unicorn Kreatif' }
];

const motivationalQuotes = [
  "Pendidikan adalah senjata paling mematikan di dunia, karena dengan itu Anda bisa mengubah dunia. - Nelson Mandela",
  "Belajar hari ini, memimpin hari esok! Tetap semangat meraih mimpi.",
  "Setiap perjuangan belajar hari ini adalah investasi masa depan yang gilang-gemilang.",
  "Jangan takut salah. Kesalahan adalah bukti bahwa kamu sedang mencoba dan belajar.",
  "Fokuslah pada perjalanan belajarmu, bukan hanya pada hasil akhirnya. Kamu hebat!",
  "Satu langkah kecil setiap hari akan membawamu ke puncak kesuksesan yang tinggi."
];

const initialUsers = [
  { id: 'u1', name: 'Super Admin Sekolah', email: 'admin@edusmart.com', password: 'admin123', role: 'admin', phone: '081122334455', class: '-', nis: '-', xp: 0, level: 1, avatar: 'av3', badge: 'Super Admin' },
  { id: 'u_guru1', name: 'Rudi Hermawan, S.Pd', email: 'guru@edusmart.com', password: 'guru123', role: 'teacher', phone: '081223344556', class: '-', classAdvisor: '10', nis: '-', xp: 0, level: 1, avatar: 'av4', badge: 'Wali Kelas 10' },
  { id: 'u_guru2', name: 'Dewi Lestari, M.Pd', email: 'dewi@edusmart.com', password: 'guru123', role: 'teacher', phone: '081334455667', class: '-', classAdvisor: undefined, nis: '-', xp: 0, level: 1, avatar: 'av5', badge: 'Guru Non-Wali' },
  { id: 'u2', name: 'Ahmad Fauzi', email: 'ahmad@edusmart.com', password: 'siswa123', role: 'student', phone: '081234567890', class: '10', nis: '10293', academicHistory: [
    { class: '9', year: 'Tahun Ajaran 2024/2025', gpa: '82.5', scores: [{ subject: 'Matematika', score: 80, type: 'UAS', semester: 'Genap 2025' }] }
  ], xp: 450, level: 3, avatar: 'av1', badge: 'Ksatria Cerdas', completedQuizzes: [] },
  { id: 'u3', name: 'Budi Santoso', email: 'budi@edusmart.com', password: 'siswa123', role: 'student', phone: '082345678901', class: '10', nis: '10294', academicHistory: [], xp: 85, level: 1, avatar: 'av2', badge: 'Prajurit Belajar', completedQuizzes: ['qz2'] },
  { id: 'u4', name: 'Citra Kirana', email: 'citra@edusmart.com', password: 'siswa123', role: 'student', phone: '083456789012', class: '11', nis: '10295', academicHistory: [], xp: 620, level: 4, avatar: 'av5', badge: 'Cendekiawan Ulung', completedQuizzes: [] },
  { id: 'u5', name: 'Dina Lestari', email: 'dina@edusmart.com', password: 'siswa123', role: 'student', phone: '084567890123', class: '11', nis: '10296', academicHistory: [], xp: 120, level: 2, avatar: 'av3', badge: 'Novice Spark', completedQuizzes: [] },
  { id: 'u6', name: 'Eko Prasetyo', email: 'eko@edusmart.com', password: 'siswa123', role: 'student', phone: '085678901234', class: '12', nis: '10297', academicHistory: [], xp: 1250, level: 5, avatar: 'av4', badge: 'Mahaguru Pintar', completedQuizzes: [] }
];

const initialGrades = [
  { id: 'g1', studentId: 'u2', studentName: 'Ahmad Fauzi', subject: 'Matematika', score: 85, type: 'UAS', semester: 'Ganjil 2026' },
  { id: 'g2', studentId: 'u2', studentName: 'Ahmad Fauzi', subject: 'Fisika', score: 78, type: 'UAS', semester: 'Ganjil 2026' },
  { id: 'g3', studentId: 'u2', studentName: 'Ahmad Fauzi', subject: 'Bahasa Indonesia', score: 90, type: 'UTS', semester: 'Ganjil 2026' },
  { id: 'g4', studentId: 'u3', studentName: 'Budi Santoso', subject: 'Matematika', score: 70, type: 'UAS', semester: 'Ganjil 2026' },
  { id: 'g5', studentId: 'u3', studentName: 'Budi Santoso', subject: 'Fisika', score: 82, type: 'UAS', semester: 'Ganjil 2026' },
  { id: 'g6', studentId: 'u4', studentName: 'Citra Kirana', subject: 'Sosiologi', score: 88, type: 'UAS', semester: 'Ganjil 2026' },
  { id: 'g7', studentId: 'u4', studentName: 'Citra Kirana', subject: 'Sejarah', score: 92, type: 'UTS', semester: 'Ganjil 2026' },
  { id: 'g8', studentId: 'u5', studentName: 'Dina Lestari', subject: 'Sosiologi', score: 75, type: 'UAS', semester: 'Ganjil 2026' },
  { id: 'g9', studentId: 'u6', studentName: 'Eko Prasetyo', subject: 'Kimia', score: 80, type: 'UAS', semester: 'Ganjil 2026' }
];

const initialMaterials = [
  { 
    id: 'm1', 
    title: 'Aljabar Linear & Persamaan Kuadrat', 
    subject: 'Matematika', 
    gradeClass: '10', 
    type: 'PDF', 
    author: 'Pak Rudi', 
    date: '2026-05-15',
    summary: 'Mempelajari dasar matriks, sistem persamaan linear dua variabel (SPLDV), serta metode penyelesaian persamaan kuadrat secara terperinci.',
    briefContent: [
      'Sistem Persamaan Linear Dua Variabel memiliki bentuk umum ax + by = c.',
      'Metode penyelesaian meliputi: Eliminasi, Substitusi, dan Grafik.',
      'Persamaan Kuadrat ax² + bx + c = 0 dapat diselesaikan dengan memfaktorkan, melengkapkan kuadrat sempurna, atau rumus ABC.'
    ],
    pagesCount: 8,
    fileDataUrl: null 
  },
  { 
    id: 'm2', 
    title: 'Hukum Newton dan Penerapan Sehari-hari', 
    subject: 'Fisika', 
    gradeClass: '10', 
    type: 'PDF', 
    author: 'Pak Rudi', 
    date: '2026-05-18',
    summary: 'Membedah Hukum I, II, dan III Newton tentang gerak benda beserta contoh riil gaya gesek, gaya berat, dan gaya normal pada bidang miring.',
    briefContent: [
      'Hukum I Newton (Inersia): Keadaan diam atau bergerak lurus beraturan jika resultan gaya nol.',
      'Hukum II Newton: Percepatan sebuah benda sebanding dengan gaya total (F = m.a).',
      'Hukum III Newton: Setiap aksi, ada reaksi yang sama besar dan berlawanan arah.'
    ],
    pagesCount: 12,
    fileDataUrl: null
  },
  { 
    id: 'm3', 
    title: 'Struktur Sosial & Masyarakat Multikultural', 
    subject: 'Sosiologi', 
    gradeClass: '11', 
    type: 'Video', 
    author: 'Ibu Dewi', 
    date: '2026-05-20',
    youtubeUrl: 'https://www.youtube.com/embed/FGs_Z-8f_qY',
    summary: 'Materi video sosiologi mengenai dinamika interaksi, pelapisan sosial (stratifikasi), dan pengelompokan secara horizontal (diferensiasi).',
    briefContent: [
      'Diferensiasi Sosial: Pembedaan secara horizontal berdasarkan ras, suku, agama, dan profesi.',
      'Stratifikasi Sosial: Pembedaan secara vertikal (kelas atas, menengah, bawah) berdasarkan kekuasaan atau kekayaan.'
    ]
  }
];

const initialSpp = [
  { id: 's1', studentId: 'u2', studentName: 'Ahmad Fauzi', month: 'Mei 2026', amount: 350000, status: 'Lunas', payDate: '2026-05-05', class: '10' },
  { id: 's2', studentId: 'u2', studentName: 'Ahmad Fauzi', month: 'Juni 2026', amount: 350000, status: 'Belum Lunas', payDate: null, class: '10' },
  { id: 's3', studentId: 'u3', studentName: 'Budi Santoso', month: 'Mei 2026', amount: 350000, status: 'Belum Lunas', payDate: null, class: '10' },
  { id: 's4', studentId: 'u3', studentName: 'Budi Santoso', month: 'Juni 2026', amount: 350000, status: 'Belum Lunas', payDate: null, class: '10' },
  { id: 's5', studentId: 'u4', studentName: 'Citra Kirana', month: 'Mei 2026', amount: 350000, status: 'Lunas', payDate: '2026-05-08', class: '11' },
  { id: 's6', studentId: 'u4', studentName: 'Citra Kirana', month: 'Juni 2026', amount: 350000, status: 'Belum Lunas', payDate: null, class: '11' },
  { id: 's7', studentId: 'u5', studentName: 'Dina Lestari', month: 'Mei 2026', amount: 350000, status: 'Belum Lunas', payDate: null, class: '11' },
  { id: 's8', studentId: 'u6', studentName: 'Eko Prasetyo', month: 'Mei 2026', amount: 350000, status: 'Lunas', payDate: '2026-05-02', class: '12' }
];

const initialHomeworks = [
  { id: 'h1', title: 'Tugas SPLDV & Grafik Aljabar', subject: 'Matematika', gradeClass: '10', description: 'Kerjakan latihan soal bab SPLDV nomor 1 s.d 10 di kertas/buku tugas, foto atau buat PDF, lalu kumpulkan berkas pengerjaan Anda di sini.', dueDate: '2026-06-10', submissions: [] },
  { id: 'h2', title: 'Analisa Hukum Newton di Bidang Miring', subject: 'Fisika', gradeClass: '10', description: 'Tuliskan persamaan gerak balok pada bidang miring kasar. Berikan contoh pengerjaan soal lengkap dalam bentuk dokumen atau foto.', dueDate: '2026-06-15', submissions: [] }
];

const initialEvents = [
  { id: 'e1', title: 'Penilaian Akhir Semester (PAS) Genap', date: '2026-06-08', description: 'Ujian utama semester genap tahun ajaran 2025/2026 serentak.', type: 'Akademik' },
  { id: 'e2', title: 'Pameran Karya Seni & Kreasi Wali Murid', date: '2026-06-19', description: 'Kegiatan pameran kreasi anak dan bazar yang mengundang komite wali murid.', type: 'Non-Akademik' },
  { id: 'e3', title: 'Rapat Pleno Pembagian Rapor Akademik', date: '2026-06-26', description: 'Pertemuan pimpinan komite dan Guru dalam pembagian rapor fisik.', type: 'Wali Murid' }
];

const initialQuizzes = [
  {
    id: 'qz1',
    title: 'Kuis Cepat Fisika & Alam',
    subject: 'Fisika',
    questions: [
      { q: "Apa satuan internasional untuk gaya?", a: ["Newton", "Joule", "Pascal", "Watt"], correct: 0, exp: "Satuan gaya adalah Newton (N), dinamai dari Sir Isaac Newton." },
      { q: "Hukum yang menyatakan F = m x a adalah hukum...", a: ["Hukum I Newton", "Hukum II Newton", "Hukum III Newton", "Hukum Pascal"], correct: 1, exp: "Hukum II Newton menjelaskan hubungan gaya, massa, dan percepatan." },
      { q: "Benda yang jatuh bebas mengalami percepatan karena gaya...", a: ["Gesek", "Sentrifugal", "Gravitasi", "Magnet"], correct: 2, exp: "Gravitasi bumi menarik semua objek ke pusat massa bumi." }
    ]
  },
  {
    id: 'qz2',
    title: 'Tantangan Logika Matematika',
    subject: 'Matematika',
    questions: [
      { q: "Jika 3x + 5 = 20, berapakah nilai x?", a: ["3", "4", "5", "6"], correct: 2, exp: "3x = 15 -> x = 5." },
      { q: "Berapa jumlah sudut dalam sebuah segitiga?", a: ["90 derajat", "180 derajat", "270 derajat", "360 derajat"], correct: 1, exp: "Semua jenis segitiga selalu memiliki jumlah sudut total sebesar 180 derajat." }
    ]
  }
];

const playSynthesizedSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'correct') {
      // Pleasant ascending major triad
      const playTone = (freq, delay, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
      };
      playTone(523.25, 0, 0.15); // C5
      playTone(659.25, 0.1, 0.15); // E5
      playTone(783.99, 0.2, 0.3); // G5
    } else if (type === 'incorrect') {
      // Low descending sad buzz
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(130, ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } else if (type === 'success') {
      // Fanfare chord
      const chords = [523.25, 659.25, 783.99, 1046.50];
      chords.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);
        gain.gain.setValueAtTime(0.06, ctx.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.05 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.05);
        osc.stop(ctx.currentTime + idx * 0.05 + 0.5);
      });
    }
  } catch (e) {
    console.warn("Audio Context blocked or not supported on this device/browser.", e);
  }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentUser, setCurrentUser] = useState(null); 
  const [authMode, setAuthMode] = useState('login'); 
  
  // Auth fields
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authPhone, setAuthPhone] = useState('');
  const [authClass, setAuthClass] = useState('10');
  const [authNis, setAuthNis] = useState('');
  const [authRole, setAuthRole] = useState('student');
  const [authClassAdvisor, setAuthClassAdvisor] = useState('10');
  const [showPassword, setShowPassword] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  // Core navigation
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Database tables
  const [users, setUsers] = useState(initialUsers);
  const [grades, setGrades] = useState(initialGrades);
  const [materials, setMaterials] = useState(initialMaterials);
  const [sppList, setSppList] = useState(initialSpp);
  const [homeworkList, setHomeworkList] = useState(initialHomeworks);
  const [eventList, setEventList] = useState(initialEvents);
  const [quizzes, setQuizzes] = useState(initialQuizzes);

  // Dynamic Subjects State
  const [subjects, setSubjects] = useState(['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Sosiologi', 'Bahasa Indonesia', 'Sejarah']);
  const [newSubjectInput, setNewSubjectInput] = useState('');

  // Filters
  const [classFilter, setClassFilter] = useState('all'); 
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [audienceRoleFilter, setAudienceRoleFilter] = useState('all'); 
  const [sppPaymentFilter, setSppPaymentFilter] = useState('all');
  const [studentScopeFilter, setStudentScopeFilter] = useState('all'); // 'all' vs 'wali' for teachers

  // Modal Control States
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);
  const [isSppModalOpen, setIsSppModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [isHomeworkModalOpen, setIsHomeworkModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedStudentSpp, setSelectedStudentSpp] = useState(null);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [viewingStudentDetail, setViewingStudentDetail] = useState(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [forgotEmailInput, setForgotEmailInput] = useState('');
  
  // Admin Control Modals
  const [adminEditingUser, setAdminEditingUser] = useState(null);
  const [adminNewPassword, setAdminNewPassword] = useState('');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isQuizCreatorOpen, setIsQuizCreatorOpen] = useState(false);
  const [isClassMgmtOpen, setIsClassMgmtOpen] = useState(false); // New Year / Advisor Assign Modals

  // Profile Edit fields
  const [profileName, setProfileName] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [profileAvatar, setProfileAvatar] = useState('');
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);

  // Homework submission
  const [selectedHomeworkForSubmit, setSelectedHomeworkForSubmit] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [uploadedFileType, setUploadedFileType] = useState('');
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  
  // Viewer and evaluation
  const [selectedSubmissionViewer, setSelectedSubmissionViewer] = useState(null);
  const [reviewScore, setReviewScore] = useState('');
  const [reviewingStudentId, setReviewingStudentId] = useState('');
  const [activeSubmissionPreview, setActiveSubmissionPreview] = useState(null);

  // Material Creation uploads
  const [materialUploadFile, setMaterialUploadFile] = useState(null);
  const [materialUploadName, setMaterialUploadName] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  // PDF simulator configs
  const [pdfPage, setPdfPage] = useState(1);

  // Form input fields
  const [newGrade, setNewGrade] = useState({ studentId: '', subject: 'Matematika', score: '', type: 'UTS', semester: 'Ganjil 2026' });
  const [newMaterial, setNewMaterial] = useState({ title: '', subject: 'Matematika', gradeClass: '10', type: 'PDF', youtubeUrl: '', summary: '', contentPoints: '' });
  const [newSpp, setNewSpp] = useState({ studentId: '', month: 'Juni 2026', amount: 350000 });
  const [newHomework, setNewHomework] = useState({ title: '', subject: 'Matematika', gradeClass: '10', description: '', dueDate: '2026-06-10' });
  const [newEvent, setNewEvent] = useState({ title: '', date: '2026-06-10', description: '', type: 'Akademik' });

  // Quiz Creator Form state
  const [quizFormTitle, setQuizFormTitle] = useState('');
  const [quizFormSubject, setQuizFormSubject] = useState('Matematika');
  const [quizFormQuestions, setQuizFormQuestions] = useState([]);
  const [currentFormQ, setCurrentFormQ] = useState('');
  const [currentFormOpts, setCurrentFormOpts] = useState(['', '', '', '']);
  const [currentFormCorrect, setCurrentFormCorrect] = useState(0);
  const [currentFormExp, setCurrentFormExp] = useState('');

  // Active Quiz Playing State
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]); 
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizTimer, setQuizTimer] = useState(15);
  const [quizTimerActive, setQuizTimerActive] = useState(false);

  const [selectedBankVA, setSelectedBankVA] = useState('BCA');
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);

  // AI Chat states
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiChatHistory, setAiChatHistory] = useState([
    { role: 'model', text: 'Halo! Saya EduAI Guide, asisten kognitif sekolah Anda. Bagaimana saya bisa membantu proses belajar atau manajemen akademik Anda hari ini?' }
  ]);
  const [aiInputText, setAiInputText] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Toast Alerts
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Motivational quote variable
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);

  useEffect(() => {
    // Pick a random quote when dashboard loads
    const rand = Math.floor(Math.random() * motivationalQuotes.length);
    setCurrentQuote(motivationalQuotes[rand]);
  }, [activeTab]);

  const triggerSound = (type) => {
    if (soundEnabled) {
      playSynthesizedSound(type);
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    if (type === 'success') triggerSound('success');
    else triggerSound('incorrect');
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleCopyVA = (text) => {
    triggerSound('click');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => showToast("Nomor Virtual Account disalin!"))
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; 
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        showToast("Nomor Virtual Account disalin!");
      } else {
        showToast("Salin otomatis gagal. Silakan salin manual.", "error");
      }
    } catch (err) {
      showToast("Salin manual: " + text, "error");
    }
  };

  const downloadMaterialPdf = (material) => {
    triggerSound('click');
    const printWindow = window.open('', '_blank');
    const contentList = material.briefContent 
      ? material.briefContent.map((point) => `<li style="margin-bottom: 12px; line-height: 1.6;">${point}</li>`).join('') 
      : '<li>Materi siap dipelajari.</li>';

    printWindow.document.write(`
      <html>
        <head>
          <title>E-Book PDF - ${material.title}</title>
          <style>
            @page { size: A4; margin: 25mm 20mm; }
            body { 
              font-family: 'Helvetica Neue', Arial, sans-serif; 
              color: #1e293b; 
              line-height: 1.6; 
              padding: 0; 
              margin: 0;
            }
            .header {
              background-color: #4f46e5;
              color: white;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .header h1 {
              font-size: 20px;
              margin: 0 0 4px 0;
              letter-spacing: 0.5px;
            }
            .header p {
              font-size: 11px;
              margin: 0;
              opacity: 0.9;
            }
            .metadata-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              padding: 15px;
              border-radius: 8px;
              font-size: 12px;
              margin-bottom: 30px;
            }
            .metadata-grid div span {
              font-weight: bold;
              color: #4f46e5;
            }
            .content {
              text-align: justify;
              font-size: 14px;
            }
            .content h2 {
              font-size: 16px;
              color: #1e1b4b;
              border-left: 4px solid #4f46e5;
              padding-left: 10px;
              margin-top: 30px;
              margin-bottom: 15px;
            }
            .footer {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
              font-size: 10px;
              color: #94a3b8;
              text-align: center;
            }
            @media print {
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>EDUSMART ACADEMIC CLOUD LIBRARY</h1>
              <p>Sistem Informasi & Manajemen Belajar Pintar Terintegrasi</p>
            </div>
            <div style="font-size: 28px;">📖</div>
          </div>
          
          <div class="metadata-grid">
            <div><span>Mata Pelajaran:</span> ${material.subject}</div>
            <div><span>Jenjang Kelas:</span> Kelas ${material.gradeClass}</div>
            <div><span>Diterbitkan Oleh:</span> ${material.author}</div>
            <div><span>Tanggal Publikasi:</span> ${material.date}</div>
          </div>

          <div class="content">
            <h2>Ringkasan Materi</h2>
            <p>${material.summary}</p>
            
            <h2>Poin Pembelajaran Utama</h2>
            <ol style="padding-left: 20px;">
              ${contentList}
            </ol>
          </div>

          <div class="footer">
            Dokumen Cloud Resmi - EduSmart Hub @2026
          </div>

          <div style="text-align: center; margin-top: 40px;" class="no-print">
            <button onclick="window.print()" style="padding: 12px 24px; background-color: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px;">Cetak / Ekspor PDF</button>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const downloadReportCardPdf = (student) => {
    triggerSound('click');
    const printWindow = window.open('', '_blank');
    const KKM_VALUE = 75;
    
    let reportRows = student.scores.map(s => {
      const statusText = s.score >= KKM_VALUE ? 'LULUS' : 'REMEDIAL';
      const statusColor = s.score >= KKM_VALUE ? '#16a34a' : '#dc2626';
      return `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 12px 10px; font-weight: bold;">${s.subject}</td>
          <td style="padding: 12px 10px; font-family: monospace;">${s.type}</td>
          <td style="padding: 12px 10px; text-align: center; font-weight: bold; font-size: 14px;">${s.score}</td>
          <td style="padding: 12px 10px; text-align: center; font-weight: bold; color: #64748b;">${KKM_VALUE}</td>
          <td style="padding: 12px 10px; text-align: center; color: ${statusColor}; font-weight: bold; font-size: 12px;">${statusText}</td>
        </tr>
      `;
    }).join('');

    const parsedAverage = parseFloat(student.average) || 0;
    const generalVerdict = parsedAverage >= KKM_VALUE 
      ? '<span style="color: #16a34a; font-weight: bold;">SANGAT BAIK (LULUS KKM UTAMA)</span>' 
      : '<span style="color: #dc2626; font-weight: bold;">MEMBUTUHKAN BIMBINGAN / REMEDIAL</span>';

    printWindow.document.write(`
      <html>
        <head>
          <title>Rapor Hasil Studi - ${student.name}</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #334155; padding: 40px; }
            .letterhead { 
              border-bottom: 3px solid #4f46e5; 
              padding-bottom: 15px; 
              margin-bottom: 30px; 
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .letterhead h1 { font-size: 22px; color: #1e1b4b; margin: 0 0 5px 0; }
            .letterhead p { font-size: 11px; color: #64748b; margin: 0; }
            .brand-badge { background-color: #4f46e5; color: white; padding: 10px 15px; border-radius: 8px; font-weight: bold; font-size: 14px; }
            .info-table { width: 100%; font-size: 13px; margin-bottom: 30px; border-collapse: collapse; }
            .info-table td { padding: 6px; }
            .info-table td.label { font-weight: bold; color: #4f46e5; width: 140px; }
            .report-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 40px; }
            .report-table th { background-color: #4f46e5; color: white; padding: 12px 10px; text-align: left; }
            .summary-card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 13px; margin-bottom: 50px; }
            .signature-block { display: flex; justify-content: space-between; margin-top: 50px; font-size: 13px; text-align: center; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="letterhead">
            <div>
              <h1>EDUSMART HUB ACADEMIC REPORT</h1>
              <p>Laporan Hasil Penilaian Studi Terpadu Wali Murid & Siswa</p>
            </div>
            <div class="brand-badge">EDUSMART PORTAL</div>
          </div>

          <table class="info-table">
            <tr>
              <td class="label">Nama Siswa:</td>
              <td>${student.name}</td>
              <td class="label">Nomor Induk Siswa:</td>
              <td>${student.nis}</td>
            </tr>
            <tr>
              <td class="label">Tingkat Kelas:</td>
              <td>Kelas ${student.class}</td>
              <td class="label">Semester / Ajaran:</td>
              <td>Semester Genap 2026/2027</td>
            </tr>
          </table>

          <table class="report-table">
            <thead>
              <tr>
                <th>Mata Pelajaran</th>
                <th>Tipe Evaluasi</th>
                <th style="text-align: center;">Nilai Angka</th>
                <th style="text-align: center;">KKM Acuan</th>
                <th style="text-align: center;">Status Ketuntasan</th>
              </tr>
            </thead>
            <tbody>
              ${reportRows || '<tr><td colspan="5" style="text-align: center; padding: 20px; color: #94a3b8;">Belum ada rekaman nilai aktif.</td></tr>'}
            </tbody>
          </table>

          <div class="summary-card">
            <h3 style="margin-top: 0; color: #1e1b4b;">Evaluasi & Umpan Balik Akademis</h3>
            <p>Rata-rata Nilai Rapor Akhir: <strong style="font-size: 16px; color: #4f46e5;">${student.average}</strong></p>
            <p>Kesimpulan Kelulusan Tingkat: ${generalVerdict}</p>
            <p style="font-style: italic; color: #64748b; margin-top: 15px;">"Umpan balik ini diproses secara otomatis oleh sistem pencatatan hasil studi. Tingkatkan kompetensi dan jaga kedisiplinan belajar."</p>
          </div>

          <div class="signature-block">
            <div>
              <p>Orang Tua / Wali Murid</p>
              <br/><br/><br/>
              <p>_______________________</p>
            </div>
            <div>
              <p>Wali Kelas Pembina</p>
              <br/><br/><br/>
              <p><strong>Rudi Hermawan, S.Pd</strong></p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 40px;" class="no-print">
            <button onclick="window.print()" style="padding: 12px 24px; background-color: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px;">Cetak Rapor Siswa / Ekspor PDF</button>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const downloadOverallGradesPdf = () => {
    triggerSound('click');
    const printWindow = window.open('', '_blank');
    
    let tableRows = getFilteredStudentsForRole().map((student) => `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">${student.name}</td>
        <td style="padding: 10px; text-align: center;">Kelas ${student.class}</td>
        <td style="padding: 10px; font-family: monospace; text-align: center;">${student.nis}</td>
        <td style="padding: 10px; text-align: center;">${student.count} Penilaian</td>
        <td style="padding: 10px; text-align: center; font-weight: bold; color: #4f46e5;">${student.average}</td>
      </tr>
    `).join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>Laporan Hasil Studi Keseluruhan Siswa</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 30px; color: #1e293b; }
            .header { border-bottom: 2px solid #4f46e5; padding-bottom: 15px; margin-bottom: 25px; }
            .header h1 { font-size: 20px; color: #1e1b4b; margin: 0; }
            .header p { font-size: 11px; color: #64748b; margin: 5px 0 0 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
            th { background-color: #4f46e5; color: white; padding: 12px 10px; text-align: left; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>EDUSMART LAPORAN REKAPITULASI NILAI AKADEMIK</h1>
            <p>Daftar Penilaian Kumulatif Hasil Belajar Seluruh Siswa Terdaftar</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nama Siswa</th>
                <th style="text-align: center;">Kelas</th>
                <th style="text-align: center;">NIS</th>
                <th style="text-align: center;">Jumlah Penilaian</th>
                <th style="text-align: center;">Rata-rata Nilai</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
          <div style="text-align: center; margin-top: 30px;" class="no-print">
            <button onclick="window.print()" style="padding: 10px 20px; background-color: #4f46e5; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Cetak Laporan</button>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const exportToCsv = (type) => {
    triggerSound('click');
    let csvContent = "data:text/csv;charset=utf-8,";
    
    if (type === 'grades') {
      csvContent += "Nama Siswa,Kelas,NIS,Jumlah Penilaian,Rata-rata Rapor\n";
      getFilteredStudentsForRole().forEach((s) => {
        csvContent += `"${s.name}","Kelas ${s.class}","${s.nis}","${s.count}","${s.average}"\n`;
      });
    } else if (type === 'spp') {
      csvContent += "Siswa,Kelas,Bulan Tagihan,Jumlah,Status,Tanggal Pembayaran\n";
      filteredSpp.forEach((s) => {
        csvContent += `"${s.studentName}","Kelas ${s.class}","${s.month}","${s.amount}","${s.status}","${s.payDate || '-'}"\n`;
      });
    } else if (type === 'audience') {
      csvContent += "Nama,Email,Password,Peran,Kelas,NIS,HP\n";
      filteredAudience.forEach((u) => {
        csvContent += `"${u.name}","${u.email}","${u.password}","${u.role}","${u.class}","${u.nis}","${u.phone}"\n`;
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Laporan_${type}_EduSmart.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Berkas CSV Berhasil Diekspor!");
  };

  const handleFileChange = (e, target) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (target === 'homework') {
        setUploadedFile(reader.result); 
        setUploadedFileName(file.name);
        setUploadedFileType(file.type);
        setUploadedFileUrl(URL.createObjectURL(file)); 
        showToast(`Berkas ${file.name} berhasil dimuat!`);
      } else if (target === 'material') {
        setMaterialUploadFile(reader.result);
        setMaterialUploadName(file.name);
        showToast(`E-Book ${file.name} siap diunggah.`);
      } else if (target === 'profile') {
        setProfilePhotoFile(reader.result);
        showToast('Foto profil kustom berhasil dimuat.');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    triggerSound('click');
    setLoginErrorMsg('');

    if (!authEmail || !authPassword) {
      setLoginErrorMsg('Harap isi email dan kata sandi!');
      triggerSound('incorrect');
      return;
    }

    const emailMatch = users.find(u => u.email.toLowerCase() === authEmail.toLowerCase());
    if (!emailMatch) {
      setLoginErrorMsg('Email tidak terdaftar dalam sistem.');
      triggerSound('incorrect');
      return;
    }

    if (emailMatch.password !== authPassword) {
      setLoginErrorMsg('Sandi Anda salah! Silakan coba lagi.');
      triggerSound('incorrect');
      return;
    }

    setCurrentUser(emailMatch);
    setNewGrade(prev => ({ ...prev, studentId: users.find(u => u.role === 'student')?.id || '' }));
    setNewSpp(prev => ({ ...prev, studentId: users.find(u => u.role === 'student')?.id || '' }));
    showToast(`Selamat datang kembali, ${emailMatch.name}!`);
    setAuthEmail('');
    setAuthPassword('');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    triggerSound('click');
    setLoginErrorMsg('');

    if (!authName || !authEmail || !authPassword || !authPhone) {
      setLoginErrorMsg('Harap lengkapi seluruh kolom registrasi!');
      triggerSound('incorrect');
      return;
    }

    if (users.some(u => u.email.toLowerCase() === authEmail.toLowerCase())) {
      setLoginErrorMsg('Email ini sudah terdaftar!');
      triggerSound('incorrect');
      return;
    }

    const newId = 'u' + (users.length + 1);
    const registeredUser = {
      id: newId,
      name: authName,
      email: authEmail,
      password: authPassword,
      role: authRole,
      phone: authPhone,
      class: authRole === 'student' ? authClass : '-',
      classAdvisor: authRole === 'teacher' ? (authClassAdvisor === 'none' ? undefined : authClassAdvisor) : undefined,
      nis: authRole === 'student' ? (authNis || 'Belum Diisi') : '-',
      academicHistory: [],
      xp: 0,
      level: 1,
      avatar: 'av1',
      badge: authRole === 'student' ? 'Prajurit Belajar' : authRole === 'teacher' ? (authClassAdvisor === 'none' ? 'Guru Pengampu' : `Wali Kelas ${authClassAdvisor}`) : 'Staf Sekolah',
      completedQuizzes: []
    };

    setUsers([...users, registeredUser]);
    setCurrentUser(registeredUser);
    showToast(`Registrasi Berhasil! Selamat datang ${authName}`);
    
    setAuthName('');
    setAuthEmail('');
    setAuthPassword('');
    setAuthPhone('');
    setAuthNis('');
    setAuthClass('10');
  };

  const handleLogout = () => {
    triggerSound('click');
    setCurrentUser(null);
    setIsLogoutConfirmOpen(false);
    setActiveTab('dashboard');
    showToast('Sesi Anda telah berakhir.');
  };

  const triggerForgotPasswordWA = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!forgotEmailInput.trim()) {
      showToast('Harap masukkan email Anda!', 'error');
      return;
    }
    const adminUser = users.find(u => u.role === 'admin');
    const adminPhone = adminUser ? adminUser.phone : '6281122334455';
    let cleaned = adminPhone.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '62' + cleaned.substring(1);
    }

    const waText = `Halo Admin EduSmart Hub,\n\nSaya meminta pengaturan ulang kata sandi untuk akun terdaftar dengan email: *${forgotEmailInput}*. Mohon bantuannya untuk memulihkan akun saya.\n\nTerima kasih.`;
    const waUrl = `https://api.whatsapp.com/send?phone=${cleaned}&text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    setIsForgotPasswordOpen(false);
    setForgotEmailInput('');
    showToast('Laporan lupa sandi dialihkan ke WhatsApp Admin!');
  };

  const handleAddNewSubject = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!newSubjectInput.trim()) return;
    if (subjects.includes(newSubjectInput.trim())) {
      showToast('Mata pelajaran ini sudah terdaftar!', 'error');
      return;
    }
    setSubjects([...subjects, newSubjectInput.trim()]);
    setNewSubjectInput('');
    showToast('Mata pelajaran berhasil ditambahkan!');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!profileEmail.trim()) {
      showToast('Email tidak boleh kosong!', 'error');
      return;
    }

    const isEmailUsed = users.some(u => u.email.toLowerCase() === profileEmail.toLowerCase() && u.id !== currentUser.id);
    if (isEmailUsed) {
      showToast('Email tersebut sudah digunakan akun lain!', 'error');
      return;
    }

    const updatedUsers = users.map(u => {
      if (u.id === currentUser.id) {
        return {
          ...u,
          name: profileName || u.name,
          phone: profilePhone || u.phone,
          email: profileEmail || u.email,
          avatar: profileAvatar || u.avatar,
          customPhoto: profilePhotoFile || u.customPhoto
        };
      }
      return u;
    });

    setUsers(updatedUsers);
    setCurrentUser({
      ...currentUser,
      name: profileName || currentUser.name,
      phone: profilePhone || currentUser.phone,
      email: profileEmail || currentUser.email,
      avatar: profileAvatar || currentUser.avatar,
      customPhoto: profilePhotoFile || currentUser.customPhoto
    });
    setIsProfileModalOpen(false);
    showToast('Sinkronisasi Profil berhasil diperbarui!');
  };

  const handleAdminResetPassword = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!adminNewPassword.trim()) {
      showToast('Masukkan password baru!', 'error');
      return;
    }
    const updatedUsers = users.map(u => {
      if (u.id === adminEditingUser.id) {
        return { ...u, password: adminNewPassword };
      }
      return u;
    });
    setUsers(updatedUsers);
    setAdminEditingUser(null);
    setAdminNewPassword('');
    showToast('Kata sandi berhasil diubah!');
  };

  const handleClassAssignmentUpdate = (userId, classAdvisorVal) => {
    triggerSound('click');
    const updated = users.map(u => {
      if (u.id === userId) {
        const advVal = classAdvisorVal === 'none' ? undefined : classAdvisorVal;
        const bge = advVal ? `Wali Kelas ${advVal}` : 'Guru Pengampu';
        return { ...u, classAdvisor: advVal, badge: bge };
      }
      return u;
    });
    setUsers(updated);
    showToast("Pembagian Kelas Wali berhasil diperbarui untuk tahun ajaran baru!");
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  const handleAddGrade = (e) => {
    e.preventDefault();
    triggerSound('click');
    const targetStudentId = newGrade.studentId || (users.find(u => u.role === 'student')?.id);
    if (!targetStudentId) {
      showToast('Target siswa tidak valid!', 'error');
      return;
    }
    if (!newGrade.score || isNaN(newGrade.score)) {
      showToast('Masukkan nilai angka yang valid!', 'error');
      return;
    }

    const student = users.find(s => s.id === targetStudentId);
    const gradeData = {
      id: 'g' + (grades.length + 1),
      studentId: targetStudentId,
      studentName: student ? student.name : 'Unknown',
      subject: newGrade.subject,
      score: parseInt(newGrade.score),
      type: newGrade.type,
      semester: newGrade.semester
    };

    setGrades([gradeData, ...grades]);
    setIsGradeModalOpen(false);
    setNewGrade({ studentId: targetStudentId, subject: 'Matematika', score: '', type: 'UTS', semester: 'Ganjil 2026' });
    showToast(`Berhasil menyimpan nilai ${student ? student.name : 'Siswa'}!`);
  };

  const handleDeleteGrade = (gradeId) => {
    triggerSound('click');
    setGrades(grades.filter(g => g.id !== gradeId));
    showToast("Nilai berhasil dihapus.");
  };

  const handleAddMaterial = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!newMaterial.title || !newMaterial.summary) {
      showToast('Judul dan ringkasan tidak boleh kosong!', 'error');
      return;
    }

    const materialData = {
      id: 'm' + (materials.length + 1),
      title: newMaterial.title,
      subject: newMaterial.subject,
      gradeClass: newMaterial.gradeClass,
      type: newMaterial.type,
      youtubeUrl: newMaterial.type === 'Video' ? getYouTubeEmbedUrl(newMaterial.youtubeUrl) : undefined,
      author: currentUser ? currentUser.name : 'Staf Pengajar',
      date: new Date().toISOString().split('T')[0],
      summary: newMaterial.summary,
      briefContent: newMaterial.contentPoints ? newMaterial.contentPoints.split('\n') : ['Materi siap dipelajari.'],
      pagesCount: newMaterial.type === 'PDF' ? 8 : undefined,
      fileDataUrl: newMaterial.type === 'PDF' ? materialUploadFile : null
    };

    setMaterials([materialData, ...materials]);
    setIsMaterialModalOpen(false);
    setNewMaterial({ title: '', subject: 'Matematika', gradeClass: '10', type: 'PDF', youtubeUrl: '', summary: '', contentPoints: '' });
    setMaterialUploadFile(null);
    setMaterialUploadName('');
    showToast('Materi Pembelajaran berhasil diterbitkan!');
  };

  const handleDeleteMaterial = (materialId) => {
    triggerSound('click');
    setMaterials(materials.filter(m => m.id !== materialId));
    showToast("Materi belajar berhasil dihapus.");
  };

  const handleAddSppBill = (e) => {
    e.preventDefault();
    triggerSound('click');
    const targetStudentId = newSpp.studentId || (users.find(u => u.role === 'student')?.id);
    if (!targetStudentId) {
      showToast('Pilih siswa tujuan!', 'error');
      return;
    }

    const student = users.find(s => s.id === targetStudentId);
    const sppData = {
      id: 's' + (sppList.length + 1),
      studentId: targetStudentId,
      studentName: student ? student.name : 'Unknown',
      month: newSpp.month,
      amount: parseInt(newSpp.amount),
      status: 'Belum Lunas',
      payDate: null,
      class: student ? student.class : '10'
    };

    setSppList([sppData, ...sppList]);
    setIsSppModalOpen(false);
    showToast(`Tagihan SPP baru diterbitkan!`);
  };

  const handleDeleteSppBill = (sppId) => {
    triggerSound('click');
    setSppList(sppList.filter(s => s.id !== sppId));
    showToast("Tagihan SPP telah dihapus.");
  };

  const handleAddHomework = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!newHomework.title || !newHomework.description) {
      showToast('Lengkapi data instuksi PR!', 'error');
      return;
    }

    const homeworkData = {
      id: 'h' + (homeworkList.length + 1),
      title: newHomework.title,
      subject: newHomework.subject,
      gradeClass: newHomework.gradeClass,
      description: newHomework.description,
      dueDate: newHomework.dueDate,
      submissions: []
    };

    setHomeworkList([homeworkData, ...homeworkList]);
    setIsHomeworkModalOpen(false);
    setNewHomework({ title: '', subject: 'Matematika', gradeClass: '10', description: '', dueDate: '2026-06-10' });
    showToast('Tugas PR berhasil didelegasikan!');
  };

  const handleDeleteHomework = (hwId) => {
    triggerSound('click');
    setHomeworkList(homeworkList.filter(h => h.id !== hwId));
    showToast("Tugas PR berhasil dihapus.");
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!newEvent.title || !newEvent.description) {
      showToast('Lengkapi nama dan jadwal kegiatan!', 'error');
      return;
    }

    const eventData = {
      id: 'e' + (eventList.length + 1),
      title: newEvent.title,
      date: newEvent.date,
      description: newEvent.description,
      type: newEvent.type
    };

    setEventList([...eventList, eventData]);
    setIsEventModalOpen(false);
    setNewEvent({ title: '', date: '2026-06-10', description: '', type: 'Akademik' });
    showToast('Agenda kegiatan berhasil ditambahkan!');
  };

  const handleDeleteEvent = (eventId) => {
    triggerSound('click');
    setEventList(eventList.filter(e => e.id !== eventId));
    showToast("Kegiatan sekolah dihapus.");
  };

  const handlePromoteStudents = () => {
    triggerSound('click');
    let promotedCount = 0;
    const updatedUsers = users.map(user => {
      if (user.role === 'student') {
        const studentScores = grades.filter(g => g.studentId === user.id);
        const totalScore = studentScores.reduce((sum, current) => sum + current.score, 0);
        const avg = studentScores.length > 0 ? (totalScore / studentScores.length) : 0;
        
        if (studentScores.length > 0 && avg >= 70) {
          let nextClass = 'Alumni';
          if (user.class === '10') nextClass = '11';
          else if (user.class === '11') nextClass = '12';
          
          const currentArchive = {
            class: user.class,
            year: 'Tahun Ajaran 2025/2026',
            gpa: avg.toFixed(1),
            scores: studentScores
          };
          
          promotedCount++;
          return {
            ...user,
            class: nextClass,
            academicHistory: [...(user.academicHistory || []), currentArchive]
          };
        }
      }
      return user;
    });

    // Clear active grades for students who were promoted
    const remainingGrades = grades.filter(g => {
      const student = users.find(u => u.id === g.studentId);
      return !student || student.role !== 'student';
    });

    setUsers(updatedUsers);
    setGrades(remainingGrades);
    setIsPromoModalOpen(false);
    showToast(`Proses selesai! ${promotedCount} siswa berprestasi naik kelas. Nilai lama telah diarsipkan.`, 'success');
  };

  const handleVerifyVAPayment = () => {
    triggerSound('click');
    setIsVerifyingPayment(true);
    setTimeout(() => {
      setIsVerifyingPayment(false);
      const updatedSppList = sppList.map(item => {
        if (item.id === selectedStudentSpp.id) {
          return { ...item, status: 'Lunas', payDate: new Date().toISOString().split('T')[0] };
        }
        return item;
      });
      setSppList(updatedSppList);
      setIsPaymentModalOpen(false);
      showToast(`Verifikasi Berhasil! Status SPP bulan ${selectedStudentSpp.month} berubah menjadi Lunas.`, 'success');
    }, 1800);
  };

  const handleHomeworkSubmission = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!uploadedFile) {
      showToast('Silakan pilih berkas jawaban Anda!', 'error');
      return;
    }

    const submissionTime = new Date().toLocaleString('id-ID', { hour12: false });
    const updatedHomeworkList = homeworkList.map(h => {
      if (h.id === selectedHomeworkForSubmit.id) {
        const existIdx = h.submissions.findIndex(s => s.studentId === currentUser?.id);
        const newSub = {
          studentId: currentUser?.id,
          studentName: currentUser?.name,
          fileName: uploadedFileName,
          fileType: uploadedFileType,
          fileDataUrl: uploadedFile, 
          fileBlobUrl: uploadedFileUrl,
          submittedAt: submissionTime,
          status: 'Belum Dinilai',
          score: '-'
        };

        if (existIdx >= 0) {
          const updatedSubmissions = [...h.submissions];
          updatedSubmissions[existIdx] = newSub;
          return { ...h, submissions: updatedSubmissions };
        } else {
          return { ...h, submissions: [...h.submissions, newSub] };
        }
      }
      return h;
    });

    setHomeworkList(updatedHomeworkList);
    setSelectedHomeworkForSubmit(null);
    setUploadedFile(null);
    setUploadedFileName('');
    setUploadedFileType('');
    setUploadedFileUrl('');
    showToast('Tugas PR berhasil dikirim!');
  };

  const handleRemoveSubmission = (homeworkId) => {
    triggerSound('click');
    const updated = homeworkList.map(h => {
      if (h.id === homeworkId) {
        return {
          ...h,
          submissions: h.submissions.filter(sub => sub.studentId !== currentUser.id)
        };
      }
      return h;
    });
    setHomeworkList(updated);
    showToast("Pengiriman tugas dibatalkan. Silakan unggah kembali berkas yang benar.");
  };

  const handleGradeHomework = (homeworkId, studentId) => {
    triggerSound('click');
    if (!reviewScore || isNaN(reviewScore)) {
      showToast('Masukkan nilai angka tugas yang valid!', 'error');
      return;
    }

    const updatedHomeworkList = homeworkList.map(h => {
      if (h.id === homeworkId) {
        const updatedSubmissions = h.submissions.map(sub => {
          if (sub.studentId === studentId) {
            return { ...sub, score: parseInt(reviewScore), status: 'Sudah Dinilai' };
          }
          return sub;
        });
        return { ...h, submissions: updatedSubmissions };
      }
      return h;
    });

    const targetHw = homeworkList.find(h => h.id === homeworkId);
    const student = users.find(u => u.id === studentId);
    if (targetHw && student) {
      const newGradeRecord = {
        id: 'g' + (grades.length + 1),
        studentId: studentId,
        studentName: student.name,
        subject: targetHw.subject,
        score: parseInt(reviewScore),
        type: 'Tugas',
        semester: 'Genap 2026'
      };
      setGrades([newGradeRecord, ...grades]);
    }

    setHomeworkList(updatedHomeworkList);
    setReviewScore('');
    setReviewingStudentId('');
    setSelectedSubmissionViewer(null);
    showToast('Nilai tugas berhasil diarsipkan ke lembar Rapor!');
  };

  const getGoogleCalendarLink = (event) => {
    const formattedDate = event.date.replace(/-/g, '');
    const title = encodeURIComponent(event.title);
    const desc = encodeURIComponent(event.description);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formattedDate}/${formattedDate}&details=${desc}&sf=true&output=xml`;
  };

  const sendWhatsAppReminder = (spp) => {
    triggerSound('click');
    const student = users.find(s => s.id === spp.studentId);
    if (!student) return;

    let cleaned = student.phone.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '62' + cleaned.substring(1);
    }

    const waText = `Yth. Orang Tua / Wali Murid dari *${student.name}* (NIS: ${student.nis}),\n\nKami menginformasikan bahwa tagihan SPP untuk periode *${spp.month}* sebesar *Rp ${spp.amount.toLocaleString('id-ID')}* masih berstatus BELUM LUNAS. Mohon segera melakukan penyelesaian transaksi melalui Virtual Account yang tertera di portal EduSmart.\n\nTerima kasih.\n— Tata Usaha Sekolah`;
    const waUrl = `https://api.whatsapp.com/send?phone=${cleaned}&text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    showToast(`WhatsApp dialirkan ke orang tua murid ${student.name}!`);
  };

  const handleAddNewQuestionToForm = () => {
    triggerSound('click');
    if (!currentFormQ.trim()) {
      showToast('Harap tulis pertanyaan terlebih dahulu!', 'error');
      return;
    }
    const question = {
      q: currentFormQ,
      a: [...currentFormOpts],
      correct: parseInt(currentFormCorrect),
      exp: currentFormExp || 'Pembahasan materi.'
    };
    setQuizFormQuestions([...quizFormQuestions, question]);
    setCurrentFormQ('');
    setCurrentFormOpts(['', '', '', '']);
    setCurrentFormExp('');
    showToast('Soal berhasil ditambahkan ke draft.');
  };

  const handleSaveQuiz = (e) => {
    e.preventDefault();
    triggerSound('click');
    if (!quizFormTitle.trim()) {
      showToast('Judul kuis tidak boleh kosong!', 'error');
      return;
    }
    if (quizFormQuestions.length === 0) {
      showToast('Tambahkan minimal 1 pertanyaan!', 'error');
      return;
    }

    const newQuizObj = {
      id: 'qz' + (quizzes.length + 1),
      title: quizFormTitle,
      subject: quizFormSubject,
      questions: quizFormQuestions
    };

    setQuizzes([...quizzes, newQuizObj]);
    setQuizFormTitle('');
    setQuizFormQuestions([]);
    setIsQuizCreatorOpen(false);
    showToast('Paket Kuis baru berhasil diterbitkan!');
  };

  const handleDeleteQuiz = (quizId) => {
    triggerSound('click');
    setQuizzes(quizzes.filter(q => q.id !== quizId));
    showToast("Paket kuis berhasil dihapus.");
  };

  const handleStartQuiz = (quiz) => {
    triggerSound('click');
    if (currentUser?.completedQuizzes?.includes(quiz.id)) {
      showToast('Anda sudah merampungkan kuis ini sebelumnya!', 'error');
      return;
    }
    setActiveQuiz(quiz);
    setCurrentQuestionIdx(0);
    setQuizScore(0);
    setQuizFinished(false);
    setQuizAnswers([]);
    setSelectedQuizOption(null);
    setQuizTimer(15);
    setQuizTimerActive(true);
  };

  const handleSelectQuizOption = (optIdx) => {
    setQuizTimerActive(false);
    setSelectedQuizOption(optIdx);
    
    const currentQ = activeQuiz.questions[currentQuestionIdx];
    const isCorrect = optIdx === currentQ.correct;
    
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      triggerSound('correct');
    } else {
      triggerSound('incorrect');
    }
    
    setQuizAnswers([...quizAnswers, { qIndex: currentQuestionIdx, selected: optIdx, correct: currentQ.correct, isCorrect }]);
  };

  const handleNextQuizQuestion = () => {
    triggerSound('click');
    setSelectedQuizOption(null);
    if (currentQuestionIdx + 1 < activeQuiz.questions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
      setPdfPage(1);
      setQuizTimer(15);
      setQuizTimerActive(true);
    } else {
      setQuizFinished(true);
      const earnedXp = quizScore * 50; 
      
      const updatedUsers = users.map(user => {
        if (user.id === currentUser.id) {
          const totalXp = user.xp + earnedXp;
          let newLvl = user.level;
          
          if (totalXp >= 1000) newLvl = 5;
          else if (totalXp >= 500) newLvl = 4;
          else if (totalXp >= 250) newLvl = 3;
          else if (totalXp >= 100) newLvl = 2;

          let newBadge = user.badge;
          if (newLvl === 5) newBadge = 'Mahaguru Pintar';
          else if (newLvl === 4) newBadge = 'Cendekiawan Ulung';
          else if (newLvl === 3) newBadge = 'Ksatria Cerdas';
          else if (newLvl === 2) newBadge = 'Prajurit Belajar';

          const currentCompleted = user.completedQuizzes || [];
          const updatedCompleted = currentCompleted.includes(activeQuiz.id) 
            ? currentCompleted 
            : [...currentCompleted, activeQuiz.id];

          return { 
            ...user, 
            xp: totalXp, 
            level: newLvl, 
            badge: newBadge, 
            completedQuizzes: updatedCompleted 
          };
        }
        return user;
      });
      
      setUsers(updatedUsers);
      const foundMe = updatedUsers.find(u => u.id === currentUser.id);
      if (foundMe) {
        setCurrentUser(foundMe);
        if (foundMe.level > currentUser.level) {
          showToast(`🎉 Naik Level ke Level ${foundMe.level}! Gelar Baru: ${foundMe.badge}`, 'success');
        }
      }
      showToast(`Kuis Selesai! Anda memperoleh +${earnedXp} XP!`, 'success');
    }
  };

  const handleOpenProfileModal = () => {
    triggerSound('click');
    setProfileName(currentUser.name);
    setProfilePhone(currentUser.phone);
    setProfileEmail(currentUser.email);
    setProfileAvatar(currentUser.avatar);
    setProfilePhotoFile(currentUser.customPhoto || null);
    setIsProfileModalOpen(true);
  };

  const handleSendAiMessage = async () => {
    triggerSound('click');
    if (!aiInputText.trim()) return;
    
    const userMsg = { role: 'user', text: aiInputText };
    setAiChatHistory(prev => [...prev, userMsg]);
    const promptToSend = aiInputText;
    setAiInputText('');
    setIsAiLoading(true);

    try {
      const studentContext = currentUser?.role === 'student' 
        ? `Siswa saat ini: ${currentUser.name}, Kelas: ${currentUser.class}. Nilai Rapor: ${JSON.stringify(grades.filter(g => g.studentId === currentUser.id))}`
        : `Pengguna saat ini: ${currentUser.name} (GURU/ADMIN).`;

      const apiKey = ""; 
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const payload = {
        contents: [
          {
            role: 'user',
            parts: [{ text: `Konteks EduSmart Hub: ${studentContext}. Jawab secara ramah, informatif, dan ringkas dalam Bahasa Indonesia mengenai pertanyaan ini: ${promptToSend}` }]
          }
        ]
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text || "Koneksi asisten AI sedang sibuk. Silakan coba sesaat lagi!";
      
      setAiChatHistory(prev => [...prev, { role: 'model', text: generatedText }]);
    } catch (error) {
      setTimeout(() => {
        setAiChatHistory(prev => [...prev, { 
          role: 'model', 
          text: `Halo ${currentUser.name}! Analisis portofolio belajarmu menunjukkan perkembangan kognitif yang sangat bagus. Fokuskan pemahamanmu pada mata pelajaran eksakta dan luangkan waktu 15 menit setiap hari untuk kuis arena!` 
        }]);
      }, 1000);
    } finally {
      setIsAiLoading(false);
    }
  };

  const studentProfilesWithGrades = users
    .filter(u => u.role === 'student')
    .map(student => {
      const studentScores = grades.filter(g => g.studentId === student.id);
      const totalScore = studentScores.reduce((sum, current) => sum + current.score, 0);
      const averageScore = studentScores.length > 0 ? (totalScore / studentScores.length).toFixed(1) : '-';
      return {
        ...student,
        scores: studentScores,
        average: averageScore,
        count: studentScores.length
      };
    });

  const getFilteredStudentsForRole = () => {
    if (!currentUser) return [];
    let list = studentProfilesWithGrades;

    if (currentUser.role === 'teacher') {
      if (studentScopeFilter === 'wali' && currentUser.classAdvisor) {
        list = list.filter(s => s.class === currentUser.classAdvisor);
      }
    }
    return list;
  };

  const filteredMaterials = materials.filter(m => {
    const matchClass = classFilter === 'all' ? true : m.gradeClass === classFilter;
    const matchSubject = subjectFilter === 'all' ? true : m.subject.toLowerCase() === subjectFilter.toLowerCase();
    return matchClass && matchSubject;
  });

  const filteredAudience = users.filter(u => {
    if (audienceRoleFilter === 'all') return true;
    if (audienceRoleFilter === 'admin') return u.role === 'admin';
    if (audienceRoleFilter === 'student') return u.role === 'student';
    return true;
  });

  const filteredSpp = sppList.filter(s => {
    if (!currentUser) return false;
    let matchUser = true;

    // Filter Wali Kelas vs Regular Teacher vs Admin
    if (currentUser.role === 'teacher') {
      if (currentUser.classAdvisor) {
        matchUser = s.class === currentUser.classAdvisor;
      } else {
        // Teacher without homeroom assignment cannot view SPP
        return false;
      }
    } else if (currentUser.role === 'student') {
      matchUser = s.studentId === currentUser.id;
    }

    const matchStatus = sppPaymentFilter === 'all' ? true : s.status === sppPaymentFilter;
    return matchUser && matchStatus;
  });

  const filteredHomeworks = homeworkList.filter(h => {
    if (!currentUser) return false;
    if (currentUser.role === 'student' && h.gradeClass !== currentUser.class) return false;
    const matchSubject = subjectFilter === 'all' ? true : h.subject.toLowerCase() === subjectFilter.toLowerCase();
    return matchSubject;
  });

  const studentActiveHomeworkReminders = homeworkList.filter(h => {
    if (currentUser && currentUser.role === 'student') {
      const isCorrectClass = h.gradeClass === currentUser.class;
      const isAlreadySubmitted = h.submissions.some(sub => sub.studentId === currentUser.id);
      return isCorrectClass && !isAlreadySubmitted;
    }
    return false;
  });

  const getLvlProgress = (user) => {
    if (!user || user.role !== 'student') return 0;
    const currentXp = user.xp;
    let base = 0;
    let next = 100;
    if (user.level === 2) { base = 100; next = 250; }
    else if (user.level === 3) { base = 250; next = 500; }
    else if (user.level === 4) { base = 500; next = 1000; }
    else if (user.level === 5) { return 100; }

    const pct = ((currentXp - base) / (next - base)) * 100;
    return Math.min(Math.max(pct, 0), 100).toFixed(0);
  };

  const getNextLevelXp = (lvl) => {
    if (lvl === 1) return 100;
    if (lvl === 2) return 250;
    if (lvl === 3) return 500;
    if (lvl === 4) return 1000;
    return 'Max';
  };

  if (!currentUser) {
    return (
      <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-gradient-to-tr from-indigo-950 via-slate-900 to-indigo-900'} flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans transition-all`}>
        
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <div className="inline-block p-4 bg-indigo-600 rounded-3xl text-white font-bold text-4xl shadow-2xl mb-4 animate-bounce">
            🎓
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">EduSmart Hub</h2>
          <p className="mt-2 text-sm text-indigo-200">
            Sistem Informasi & Manajemen Belajar Wali Murid, Siswa, Guru & Admin
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-10 shadow-2xl rounded-3xl border border-slate-100 dark:border-slate-800 relative overflow-hidden text-slate-800 dark:text-slate-100">
            
            <div className="flex border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
              <button 
                onClick={() => { triggerSound('click'); setAuthMode('login'); setLoginErrorMsg(''); }}
                className={`flex-1 pb-3 text-center text-sm font-bold transition ${authMode === 'login' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 dark:text-slate-500'}`}
              >
                Masuk Portal
              </button>
              <button 
                onClick={() => { triggerSound('click'); setAuthMode('signup'); setLoginErrorMsg(''); }}
                className={`flex-1 pb-3 text-center text-sm font-bold transition ${authMode === 'signup' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 dark:text-slate-500'}`}
              >
                Registrasi Akun
              </button>
            </div>

            {loginErrorMsg && (
              <div className="mb-4 p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-850 rounded-xl flex items-center gap-2 text-xs text-rose-650 dark:text-rose-400 font-semibold animate-shake">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{loginErrorMsg}</span>
              </div>
            )}

            {authMode === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Terdaftar</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input 
                      type="email" 
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="contoh: guru@edusmart.com" 
                      className="w-full text-sm pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Kata Sandi</label>
                    <button 
                      type="button" 
                      onClick={() => { triggerSound('click'); setIsForgotPasswordOpen(true); }}
                      className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                    >
                      Lupa Kata Sandi?
                    </button>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <Lock className="h-4 w-4" />
                    </span>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="••••••••" 
                      className="w-full text-sm pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100"
                    />
                    <button
                      type="button"
                      onClick={() => { triggerSound('click'); setShowPassword(!showPassword); }}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-955/20 rounded-xl p-3 border border-amber-100 dark:border-amber-900/30 flex gap-2 items-start text-xs text-amber-800 dark:text-amber-200">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Akun Demo Instan:</p>
                    <p>• Admin: <strong className="font-mono">admin@edusmart.com</strong> (Sandi: <strong className="font-mono">admin123</strong>)</p>
                    <p>• Guru Wali 10: <strong className="font-mono">guru@edusmart.com</strong> (Sandi: <strong className="font-mono">guru123</strong>)</p>
                    <p>• Siswa/Wali: <strong className="font-mono">ahmad@edusmart.com</strong> (Sandi: <strong className="font-mono">siswa123</strong>)</p>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition shadow-lg text-sm"
                >
                  Masuk Sekarang
                </button>
              </form>
            )}

            {authMode === 'signup' && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-2">
                  <button
                    type="button"
                    onClick={() => { triggerSound('click'); setAuthRole('student'); }}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition ${authRole === 'student' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-sm' : 'text-slate-500'}`}
                  >
                    Siswa / Wali Murid
                  </button>
                  <button
                    type="button"
                    onClick={() => { triggerSound('click'); setAuthRole('teacher'); }}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition ${authRole === 'teacher' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-sm' : 'text-slate-500'}`}
                  >
                    Guru Pengampu
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {authRole === 'student' ? 'Nama Lengkap Siswa / Wali' : 'Nama Lengkap Guru'}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <User className="h-4 w-4" />
                    </span>
                    <input 
                      type="text" 
                      required
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      placeholder={authRole === 'student' ? "Contoh: Ahmad Fauzi / Wali" : "Contoh: Rudi Hermawan, S.Pd"} 
                      className="w-full text-sm pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-855 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none dark:text-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Alamat Email</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input 
                      type="email" 
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="contoh: user@edusmart.com" 
                      className="w-full text-sm pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-855 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Kata Sandi</label>
                    <input 
                      type="password" 
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="••••••••" 
                      className="w-full text-sm px-4 py-2.5 bg-slate-50 dark:bg-slate-855 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      {authRole === 'teacher' ? 'No. HP Guru' : 'No. HP Wali / Siswa'}
                    </label>
                    <input 
                      type="text" 
                      required
                      value={authPhone}
                      onChange={(e) => setAuthPhone(e.target.value)}
                      placeholder="0812xxxx" 
                      className="w-full text-sm px-4 py-2.5 bg-slate-50 dark:bg-slate-855 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none dark:text-slate-100"
                    />
                  </div>
                </div>

                {authRole === 'student' && (
                  <div className="grid grid-cols-2 gap-3 border-t border-dashed border-slate-100 dark:border-slate-850 pt-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Pilih Kelas</label>
                      <select 
                        value={authClass}
                        onChange={(e) => setAuthClass(e.target.value)}
                        className="w-full text-sm px-3 py-2.5 bg-slate-50 dark:bg-slate-855 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none dark:text-slate-100"
                      >
                        <option value="10">Kelas 10</option>
                        <option value="11">Kelas 11</option>
                        <option value="12">Kelas 12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">NIS Siswa</label>
                      <input 
                        type="text" 
                        required
                        value={authNis}
                        onChange={(e) => setAuthNis(e.target.value)}
                        placeholder="Contoh: 10299" 
                        className="w-full text-sm px-4 py-2.5 bg-slate-50 dark:bg-slate-855 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none dark:text-slate-100"
                      />
                    </div>
                  </div>
                )}

                {authRole === 'teacher' && (
                  <div className="border-t border-dashed border-slate-100 dark:border-slate-850 pt-3">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Tanggung Jawab Wali Kelas</label>
                    <select 
                      value={authClassAdvisor}
                      onChange={(e) => setAuthClassAdvisor(e.target.value)}
                      className="w-full text-sm px-3 py-2.5 bg-slate-50 dark:bg-slate-855 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none dark:text-slate-100"
                    >
                      <option value="none">Bukan Wali Kelas (Guru Non-Wali)</option>
                      <option value="10">Wali Kelas 10</option>
                      <option value="11">Wali Kelas 11</option>
                      <option value="12">Wali Kelas 12</option>
                    </select>
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full mt-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition shadow-lg text-sm"
                >
                  Registrasi & Masuk Portal
                </button>
              </form>
            )}

          </div>
        </div>

        {/* Lupa password modal */}
        {isForgotPasswordOpen && (
          <div 
            onClick={() => setIsForgotPasswordOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 relative"
            >
              <button onClick={() => setIsForgotPasswordOpen(false)} className="absolute right-4 top-4 text-slate-400">
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-base font-extrabold text-indigo-900">Pemulihan Kata Sandi</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Masukkan email terdaftar Anda. Sistem akan menghasilkan draf permohonan reset sandi untuk dikirimkan langsung ke WhatsApp Administrator Sekolah.</p>
              
              <form onSubmit={triggerForgotPasswordWA} className="space-y-3">
                <input 
                  type="email" 
                  required
                  value={forgotEmailInput}
                  onChange={(e) => setForgotEmailInput(e.target.value)}
                  placeholder="Masukkan email Anda..."
                  className="w-full text-xs p-3 bg-slate-100 rounded-xl border focus:outline-none"
                />
                <button 
                  type="submit"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="h-4 w-4" /> Hubungi Admin via WA
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'} flex flex-col font-sans transition-colors duration-300 relative`}>
      
      {/* APP TOP BAR HEADER */}
      <header className="bg-indigo-900 dark:bg-slate-900 text-white sticky top-0 z-45 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => { triggerSound('click'); setSidebarOpen(!sidebarOpen); }}
              className="p-2 rounded-md hover:bg-indigo-800 dark:hover:bg-slate-800 md:hidden transition"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-650 rounded-lg text-white font-bold text-xl shadow-inner">
                🎓
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight">EduSmart Hub</h1>
                <p className="text-[10px] text-indigo-200">Portal Sekolah Pintar Terintegrasi</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => { triggerSound('click'); setSoundEnabled(!soundEnabled); }}
              className="p-2 bg-indigo-950 dark:bg-slate-800 text-indigo-200 rounded-xl transition hover:text-white"
              title={soundEnabled ? "Matikan Suara" : "Aktifkan Suara"}
            >
              {soundEnabled ? <Volume2 className="h-4 w-4 text-emerald-400" /> : <VolumeX className="h-4 w-4" />}
            </button>

            <button 
              onClick={() => { triggerSound('click'); setDarkMode(!darkMode); }}
              className="p-2 bg-indigo-950 dark:bg-slate-800 text-indigo-200 dark:text-amber-400 hover:text-white rounded-xl transition"
              title="Ganti Tema Visual"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* EduAI Launcher */}
            <button
              onClick={() => { triggerSound('click'); setIsAiModalOpen(true); }}
              className="p-2 sm:p-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg border border-indigo-400/30"
            >
              <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
              <span className="text-xs font-bold hidden sm:inline">Asisten AI</span>
            </button>

            {/* Profile trigger */}
            <button 
              onClick={handleOpenProfileModal}
              className="flex items-center gap-1 px-2 py-1 bg-indigo-955 dark:bg-slate-800 hover:bg-indigo-800 dark:hover:bg-slate-700 rounded-xl transition border border-indigo-700/50"
            >
              <div className="h-7 w-7 rounded-full overflow-hidden flex items-center justify-center bg-indigo-600 text-sm">
                {currentUser.customPhoto ? (
                  <img src={currentUser.customPhoto} alt="Me" className="h-full w-full object-cover" />
                ) : (
                  <span>{presetAvatars.find(a => a.id === currentUser.avatar)?.emoji || '👤'}</span>
                )}
              </div>
              <span className="text-xs font-bold hidden md:inline ml-1">{currentUser.name.split(' ')[0]}</span>
            </button>

            <span className={`hidden sm:inline-block px-3 py-1 text-xs font-extrabold rounded-full ${
              currentUser.role === 'admin' 
                ? 'bg-amber-500 text-amber-950' 
                : currentUser.role === 'teacher' 
                  ? 'bg-emerald-500 text-emerald-950' 
                  : 'bg-indigo-650 text-indigo-50'
            }`}>
              {currentUser.role === 'admin' 
                ? 'ADMIN PORTAL' 
                : currentUser.role === 'teacher' 
                  ? `GURU / PENDIDIK` 
                  : `SISWA & WALI`}
            </span>

            <button 
              onClick={() => { triggerSound('click'); setIsLogoutConfirmOpen(true); }}
              title="Log Out"
              className="p-2 bg-indigo-950 dark:bg-slate-800 hover:bg-rose-700 text-indigo-200 hover:text-white rounded-xl transition"
            >
              <LogOut className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </header>

      {/* BODY MAIN AND SIDEBARS */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-6 relative">
        
        {sidebarOpen && (
          <div 
            onClick={() => { triggerSound('click'); setSidebarOpen(false); }}
            className="fixed inset-0 bg-slate-900/40 z-40 md:hidden"
          />
        )}

        {/* SIDEBAR NAVIGATION PANEL */}
        <aside className={`
          fixed inset-y-0 left-0 bg-white dark:bg-slate-900 w-64 border-r border-slate-200 dark:border-slate-800 p-6 z-50 flex flex-col justify-between transition-transform transform duration-300 
          md:relative md:translate-x-0 md:bg-transparent md:border-none md:p-0 md:w-60 md:mr-6
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="space-y-6">
            <div className="flex items-center justify-between md:hidden pb-4 border-b dark:border-slate-850">
              <span className="font-bold text-indigo-900 dark:text-white">Menu Navigasi</span>
              <button onClick={() => { triggerSound('click'); setSidebarOpen(false); }} className="p-1 rounded bg-slate-100 dark:bg-slate-800">
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-850 p-4 space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 px-3 mb-2 tracking-wider">Navigasi Utama</p>
              
              <button 
                onClick={() => { triggerSound('click'); setActiveTab('dashboard'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'dashboard' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </button>

              <button 
                onClick={() => { triggerSound('click'); setActiveTab('nilai'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'nilai' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
              >
                <GraduationCap className="h-5 w-5" />
                Daftar Nilai & Rapor
              </button>

              <button 
                onClick={() => { triggerSound('click'); setActiveTab('materi'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'materi' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
              >
                <BookOpen className="h-5 w-5" />
                Materi & E-Book
              </button>

              <button 
                onClick={() => { triggerSound('click'); setActiveTab('homework'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'homework' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
              >
                <CheckSquare className="h-5 w-5" />
                Tugas / PR
              </button>

              {/* Only for Students */}
              {currentUser.role === 'student' && (
                <button 
                  onClick={() => { triggerSound('click'); setActiveTab('quiz'); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'quiz' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
                >
                  <Trophy className="h-5 w-5 text-amber-500" />
                  Kuis Arena Game
                </button>
              )}

              {/* SPP: restricted to Homeroom Teachers (Wali Kelas) or Admin, and Students */}
              {(currentUser.role === 'admin' || currentUser.role === 'student' || (currentUser.role === 'teacher' && currentUser.classAdvisor)) && (
                <button 
                  onClick={() => { triggerSound('click'); setActiveTab('spp'); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'spp' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
                >
                  <DollarSign className="h-5 w-5" />
                  Tagihan SPP Bank
                </button>
              )}

              <button 
                onClick={() => { triggerSound('click'); setActiveTab('events'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'events' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
              >
                <Calendar className="h-5 w-5" />
                Jadwal Kegiatan
              </button>

              {/* Database Audience (Admin only) */}
              {currentUser.role === 'admin' && (
                <>
                  <button 
                    onClick={() => { triggerSound('click'); setActiveTab('audience'); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === 'audience' ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-855'}`}
                  >
                    <Users className="h-5 w-5" />
                    Database Audience
                  </button>

                  <button 
                    onClick={() => { triggerSound('click'); setIsPromoModalOpen(true); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-955 rounded-xl text-sm font-semibold transition"
                  >
                    <ArrowUpCircle className="h-5 w-5 text-emerald-500 animate-pulse" />
                    Portal Naik Kelas
                  </button>

                  <button 
                    onClick={() => { triggerSound('click'); setIsClassMgmtOpen(true); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-955 rounded-xl text-sm font-semibold transition"
                  >
                    <BookMarked className="h-5 w-5 text-violet-500" />
                    Manajemen Kelas / Wali
                  </button>
                </>
              )}
            </div>
          </div>
        </aside>

        {/* MAIN PAGE BODY CONTAINER */}
        <main className="flex-1 min-w-0 bg-transparent px-2 sm:px-4 py-4 sm:p-0">

          {/* Dynamic Toast Feedback Overlay */}
          {toast.show && (
            <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg border text-sm transition-all animate-bounce ${
              toast.type === 'success' ? 'bg-emerald-50 dark:bg-emerald-955 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-100' : 'bg-rose-50 dark:bg-rose-955 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-100'
            }`}>
              {toast.type === 'success' ? <Check className="h-5 w-5 text-emerald-500" /> : <AlertCircle className="h-5 w-5 text-rose-500" />}
              <span>{toast.message}</span>
            </div>
          )}

          {/* ==================== TAB 1: DASHBOARD ==================== */}
          {}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Motivation / Interactive Greetings Box */}
                <div className="lg:col-span-2 bg-gradient-to-r from-indigo-700 via-indigo-850 to-indigo-950 dark:from-slate-850 dark:to-slate-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg border border-white/10 flex flex-col justify-between">
                  <div className="relative z-10">
                    <span className="px-3 py-1 bg-indigo-650/50 dark:bg-indigo-800 text-indigo-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                      Tahun Ajaran Baru 2026/2027
                    </span>
                    <h2 className="text-2xl font-bold flex items-center gap-2">Halo, {currentUser.name}! <Sparkles className="h-5 w-5 text-amber-300 animate-pulse" /></h2>
                    <p className="text-indigo-100 text-xs mt-2 leading-relaxed max-w-lg font-serif">
                      {currentUser.role === 'student' ? `"${currentQuote}"` : 'Selamat datang di panel pendidik sekolah pintar EduSmart. Pantau kemajuan akademik siswa secara utuh.'}
                    </p>
                  </div>
                </div>

                {/* Student Gamification / Stat widgets */}
                {currentUser.role === 'student' && (
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-850 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Level Prestasi</h4>
                          <p className="text-base font-extrabold text-slate-800 dark:text-slate-100">Level {currentUser.level || 1}</p>
                        </div>
                      </div>
                      <span className="text-2xl">{presetAvatars.find(a => a.id === currentUser.avatar)?.emoji || '👤'}</span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>XP Progress</span>
                        <span>{currentUser.xp} / {getNextLevelXp(currentUser.level)} XP</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-violet-600 h-full transition-all duration-500" 
                          style={{ width: `${getLvlProgress(currentUser)}%` }}
                        ></div>
                      </div>
                    </div>

                    <button 
                      onClick={() => { triggerSound('click'); setActiveTab('quiz'); }}
                      className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <Trophy className="h-4 w-4 text-amber-500" /> Masuk Kuis Arena
                    </button>
                  </div>
                )}

                {/* Admin/Teacher Control Dashboard overview stats */}
                {currentUser.role !== 'student' && (
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-850 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ringkasan Sistem Sekolah</h4>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl">
                          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {users.filter(u => u.role === 'student').length}
                          </span>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase">Siswa & Wali</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl">
                          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {users.filter(u => u.role === 'teacher').length}
                          </span>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase">Pendidik</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl">
                          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {materials.length}
                          </span>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase">Materi Belajar</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl">
                          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {homeworkList.length}
                          </span>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase">Tugas PR Aktif</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* REMINDERS PANEL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentUser.role === 'student' && (
                  <div className="bg-rose-50 dark:bg-rose-955/20 border border-rose-150 dark:border-rose-900/30 rounded-2xl p-4 flex gap-3 items-start">
                    <div className="p-2.5 bg-rose-500 text-white rounded-xl">
                      <BellRing className="h-5 w-5 animate-bounce" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-rose-900 dark:text-rose-200 uppercase tracking-wider">Tugas Rumah (PR) Menanti</h4>
                      <p className="text-xs text-rose-800 dark:text-rose-300 font-semibold mt-1">
                        {studentActiveHomeworkReminders.length > 0 
                          ? `Terdapat ${studentActiveHomeworkReminders.length} Tugas PR aktif menanti respons pengerjaan Anda.`
                          : 'Bagus! Seluruh tugas pekerjaan rumah Anda telah lunas terkirim.'}
                      </p>
                      {studentActiveHomeworkReminders.length > 0 && (
                        <button 
                          onClick={() => { triggerSound('click'); setActiveTab('homework'); }}
                          className="text-[10px] font-bold text-rose-600 dark:text-rose-400 underline hover:no-underline mt-2 inline-block"
                        >
                          Selesaikan & Kumpulkan Tugas Sekarang →
                        </button>
                      )}
                    </div>
                  </div>
                )}

                <div className="bg-amber-50 dark:bg-amber-955/20 border border-amber-150 dark:border-amber-900/30 rounded-2xl p-4 flex gap-3 items-start col-span-2 md:col-span-1">
                  <div className="p-2.5 bg-amber-500 text-white rounded-xl">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-amber-900 dark:text-amber-200 uppercase tracking-wider">Agenda Kegiatan Terdekat</h4>
                    {eventList.length > 0 ? (
                      <div className="mt-1">
                        <p className="text-xs text-amber-850 dark:text-amber-300 font-semibold">{eventList[0].title}</p>
                        <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5">Tanggal: {eventList[0].date}</p>
                        <div className="flex gap-2">
                          <a 
                            href={getGoogleCalendarLink(eventList[0])}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold underline mt-1 inline-block"
                          >
                            + Tambah Google Calendar
                          </a>
                          {currentUser.role !== 'student' && (
                            <button
                              onClick={() => {
                                triggerSound('click');
                                showToast(`Reminder agenda WhatsApp dikirim ke seluruh wali murid!`);
                              }}
                              className="text-[10px] text-emerald-600 font-bold hover:underline mt-1 inline-block"
                            >
                              Kirim WA Pengingat
                            </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-amber-800 mt-1">Belum ada agenda besar dalam kurun waktu dekat.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Homeroom Advisor specific alerts */}
              {currentUser.role === 'teacher' && currentUser.classAdvisor && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border p-6 space-y-4">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-850 dark:text-slate-100">Tagihan SPP Siswa Kelas {currentUser.classAdvisor}</h3>
                    <p className="text-xs text-slate-400">Kirim reminder tagihan SPP ke orang tua murid binaan Anda yang belum melunasi.</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b text-xs text-slate-400 font-semibold uppercase">
                          <th className="py-2.5">Siswa</th>
                          <th className="py-2.5">Bulan</th>
                          <th className="py-2.5">Nominal</th>
                          <th className="py-2.5 text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        {sppList
                          .filter(s => s.class === currentUser.classAdvisor && s.status === 'Belum Lunas')
                          .map(spp => (
                            <tr key={spp.id} className="border-b hover:bg-slate-50/50">
                              <td className="py-2.5 font-bold">{spp.studentName}</td>
                              <td className="py-2.5 text-slate-500">{spp.month}</td>
                              <td className="py-2.5 font-semibold text-rose-500">Rp {spp.amount.toLocaleString('id-ID')}</td>
                              <td className="py-2.5 text-right">
                                <button 
                                  onClick={() => sendWhatsAppReminder(spp)}
                                  className="px-2.5 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg font-bold text-[10px] flex items-center gap-1 ml-auto"
                                >
                                  <MessageCircle className="h-3.5 w-3.5" /> WA Orang Tua
                                </button>
                              </td>
                            </tr>
                          ))}
                        {sppList.filter(s => s.class === currentUser.classAdvisor && s.status === 'Belum Lunas').length === 0 && (
                          <tr>
                            <td colSpan="4" className="text-center py-4 text-emerald-500 font-bold">Semua siswa di Kelas {currentUser.classAdvisor} telah lunas SPP! 🎉</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ==================== TAB 2: DAFTAR NILAI & RAPOR ==================== */}
          {}
          {activeTab === 'nilai' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-850 p-4 sm:p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Daftar Nilai & Rapor</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Unduh kop rapor individual siswa, atau simpan kompilasi rekapitulasi nilai seluruh siswa.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {currentUser.role !== 'student' && (
                    <>
                      <button 
                        onClick={downloadOverallGradesPdf}
                        className="flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold text-xs px-3 py-2 rounded-xl border border-indigo-200"
                      >
                        <Printer className="h-4 w-4" /> Cetak PDF Seluruh Siswa
                      </button>

                      <button 
                        onClick={() => exportToCsv('grades')}
                        className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-semibold text-xs px-3 py-2 rounded-xl border border-emerald-200"
                      >
                        <FileSpreadsheet className="h-4 w-4" /> Ekspor CSV/Excel
                      </button>

                      {/* Filter Guru Wali vs Guru Non-Wali */}
                      {currentUser.role === 'teacher' && currentUser.classAdvisor && (
                        <select 
                          value={studentScopeFilter}
                          onChange={(e) => setStudentScopeFilter(e.target.value)}
                          className="bg-white dark:bg-slate-800 text-xs px-3 py-2 rounded-xl border"
                        >
                          <option value="all">Semua Murid Sekolah</option>
                          <option value="wali">Hanya Murid Kelas {currentUser.classAdvisor} (Wali Kelas)</option>
                        </select>
                      )}

                      {currentUser.role === 'admin' && (
                        <button 
                          onClick={() => { triggerSound('click'); setIsGradeModalOpen(true); }}
                          className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2 rounded-xl transition shadow"
                        >
                          <Plus className="h-4 w-4" /> Input Nilai Baru
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>

              {currentUser.role !== 'student' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800 text-xs text-slate-400 uppercase font-semibold">
                        <th className="py-3.5 px-2">Nama Siswa</th>
                        <th className="py-3.5 px-2">Kelas</th>
                        <th className="py-3.5 px-2">NIS</th>
                        <th className="py-3.5 px-2">Jumlah Penilaian</th>
                        <th className="py-3.5 px-2">Rata-rata Rapor</th>
                        <th className="py-3.5 px-2 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      {getFilteredStudentsForRole().map((profile) => (
                        <tr key={profile.id} className="border-b border-slate-50 dark:border-slate-855 hover:bg-slate-50/50">
                          <td className="py-3.5 px-2 font-bold text-slate-800 dark:text-slate-200">
                            👤 {profile.name}
                          </td>
                          <td className="py-3.5 px-2 text-slate-600 dark:text-slate-400">Kelas {profile.class}</td>
                          <td className="py-3.5 px-2 text-slate-500 font-mono">{profile.nis}</td>
                          <td className="py-3.5 px-2">
                            <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md">
                              {profile.count} Penilaian
                            </span>
                          </td>
                          <td className="py-3.5 px-2 font-extrabold">
                            {profile.average !== '-' ? (
                              <span className={parseFloat(profile.average) >= 75 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}>
                                {profile.average}
                              </span>
                            ) : (
                              <span className="text-slate-400">-</span>
                            )}
                          </td>
                          <td className="py-3.5 px-2 text-right">
                            <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => downloadReportCardPdf(profile)}
                                className="px-2.5 py-1 bg-rose-50 dark:bg-rose-955 hover:bg-rose-100 text-rose-600 rounded-lg font-bold text-[10px] flex items-center gap-1"
                              >
                                <Printer className="h-3 w-3" /> Unduh PDF
                              </button>
                              <button 
                                onClick={() => { triggerSound('click'); setViewingStudentDetail(profile); }}
                                className="px-3 py-1 bg-indigo-50 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-lg font-bold text-[10px]"
                              >
                                Buka Rapor
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                /* Student Personal Grade and History View */
                <div className="space-y-6">
                  {currentUser.academicHistory && currentUser.academicHistory.length > 0 && (
                    <div className="p-4 bg-slate-50 dark:bg-slate-855 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <History className="h-4 w-4 text-indigo-600" /> Riwayat Arsip Kenaikan Kelas Sebelumnya
                      </h4>
                      <div className="space-y-2">
                        {currentUser.academicHistory.map((hist, i) => (
                          <div key={i} className="text-xs p-3 bg-white dark:bg-slate-900 border rounded-xl flex justify-between items-center shadow-sm">
                            <div>
                              <p className="font-bold text-slate-800 dark:text-slate-200">Arsip Rapor Kelas {hist.class}</p>
                              <p className="text-[10px] text-slate-500">{hist.year}</p>
                            </div>
                            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 font-bold rounded-lg">
                              GPA: {hist.gpa}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 dark:border-slate-800 text-xs text-slate-400 uppercase font-semibold">
                          <th className="py-3.5 px-2">Mata Pelajaran</th>
                          <th className="py-3.5 px-2">Ujian / Tugas</th>
                          <th className="py-3.5 px-2">Semester</th>
                          <th className="py-3.5 px-2">Nilai</th>
                          <th className="py-3.5 px-2">Target KKM</th>
                          <th className="py-3.5 px-2">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        {grades
                          .filter(g => g.studentId === currentUser.id)
                          .map((g) => (
                            <tr key={g.id} className="border-b border-slate-50 dark:border-slate-855 hover:bg-slate-50/50">
                              <td className="py-3.5 px-2 font-bold text-slate-800 dark:text-slate-200">{g.subject}</td>
                              <td className="py-3.5 px-2">
                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded font-mono text-[10px]">
                                  {g.type}
                                </span>
                              </td>
                              <td className="py-3.5 px-2 text-slate-500">{g.semester}</td>
                              <td className="py-3.5 px-2 font-bold text-slate-850 dark:text-slate-200">{g.score}</td>
                              <td className="py-3.5 px-2 font-bold text-slate-500">75</td>
                              <td className="py-3.5 px-2">
                                <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                                  g.score >= 75 ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600'
                                }`}>
                                  {g.score >= 75 ? 'Lulus KKM' : 'Kurang'}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==================== TAB 3: MATERI & E-BOOK ==================== */}
          {}
          {activeTab === 'materi' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Bahan Belajar & Real E-Book Cloud</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Pusat baca, unduh modul berformat PDF resmi, dan saksikan pemutaran video pembelajaran.</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Filter className="h-3.5 w-3.5 text-slate-400" />
                    <span>Kelas:</span>
                    <select 
                      value={classFilter}
                      onChange={(e) => setClassFilter(e.target.value)}
                      className="bg-transparent focus:outline-none cursor-pointer text-indigo-600 dark:text-indigo-400 font-bold text-xs"
                    >
                      <option value="all">Semua Kelas</option>
                      <option value="10">Kelas 10</option>
                      <option value="11">Kelas 11</option>
                      <option value="12">Kelas 12</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Filter className="h-3.5 w-3.5 text-slate-400" />
                    <span>Mapel:</span>
                    <select 
                      value={subjectFilter}
                      onChange={(e) => setSubjectFilter(e.target.value)}
                      className="bg-transparent focus:outline-none cursor-pointer text-indigo-600 dark:text-indigo-400 font-bold text-xs"
                    >
                      <option value="all">Semua Mapel</option>
                      {subjects.map((sub, i) => (
                        <option key={i} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  {currentUser.role !== 'student' && (
                    <button 
                      onClick={() => { triggerSound('click'); setIsMaterialModalOpen(true); }}
                      className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2 rounded-xl transition"
                    >
                      <Plus className="h-4 w-4" /> Publikasi Modul Baru
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMaterials.map((m) => (
                  <div 
                    key={m.id} 
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-850 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-indigo-150 dark:hover:border-slate-700 transition duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] rounded-lg">
                          Kelas {m.gradeClass}
                        </span>
                        <span className={`px-2.5 py-1 rounded-lg font-semibold text-[10px] ${
                          m.type === 'PDF' ? 'bg-rose-50 dark:bg-rose-955 text-rose-600' : 'bg-amber-50 dark:bg-amber-955 text-amber-600'
                        }`}>
                          {m.type === 'PDF' ? '📄 E-Book / PDF' : '🎥 Video Pembelajaran'}
                        </span>
                      </div>

                      <div onClick={() => { triggerSound('click'); setSelectedMaterial(m); }} className="cursor-pointer">
                        <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug">{m.title}</h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">{m.summary}</p>
                        <p className="text-[10px] text-slate-450 mt-3">Mata Pelajaran: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{m.subject}</span></p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-6 flex items-center justify-between text-[10px] text-slate-500">
                      <div>
                        <p>Oleh: <span className="font-semibold">{m.author}</span></p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {currentUser.role !== 'student' && (
                          <button 
                            onClick={() => handleDeleteMaterial(m.id)}
                            className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                            title="Hapus Materi"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                        <button 
                          onClick={() => downloadMaterialPdf(m)}
                          className="p-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-indigo-100 hover:text-indigo-600 transition"
                          title="Simpan sebagai PDF"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => { triggerSound('click'); setSelectedMaterial(m); }}
                          className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                        >
                          Buka Pembahasan →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 4: TUGAS / PR ==================== */}
          {}
          {activeTab === 'homework' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-850 p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Portal Koreksi Tugas PR Sekolah</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Pengumpulan berkas digital secara langsung oleh siswa dan sistem evaluasi nilai instan oleh Wali Kelas.
                  </p>
                </div>
                {currentUser.role !== 'student' && (
                  <button 
                    onClick={() => { triggerSound('click'); setIsHomeworkModalOpen(true); }}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2 rounded-xl transition shadow"
                  >
                    <Plus className="h-4.5 w-4.5" /> Publikasi PR Baru
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {filteredHomeworks.map(hw => {
                  const studentSubmission = hw.submissions.find(s => s.studentId === currentUser.id);
                  
                  return (
                    <div key={hw.id} className="p-5 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 hover:border-indigo-150 transition space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b dark:border-slate-800 pb-3">
                        <div>
                          <span className="px-2.5 py-0.5 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-md">
                            {hw.subject} • Kelas {hw.gradeClass}
                          </span>
                          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base mt-1.5">{hw.title}</h3>
                        </div>
                        <div className="text-left sm:text-right text-xs">
                          <p className="text-slate-500 dark:text-slate-400 font-semibold">Tenggat Waktu:</p>
                          <p className="text-rose-600 font-bold dark:text-rose-400">{hw.dueDate}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{hw.description}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                        {currentUser.role === 'student' && (
                          <div className="text-xs">
                            {studentSubmission ? (
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-955 text-emerald-600 dark:text-emerald-400 font-bold rounded-lg flex items-center gap-1">
                                  <Check className="h-3.5 w-3.5" /> Sudah Mengumpulkan
                                </span>
                                <span className="text-[10px] text-slate-450 truncate max-w-xs">Berkas: <code className="bg-slate-100 dark:bg-slate-850 px-1 py-0.5 rounded font-semibold">{studentSubmission.fileName}</code></span>
                                <button 
                                  onClick={() => handleRemoveSubmission(hw.id)}
                                  className="text-rose-600 hover:underline text-[10px] font-bold ml-2"
                                >
                                  Hapus & Upload Ulang
                                </button>
                                <span className="px-2 py-1 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-extrabold rounded-lg ml-2">
                                  Nilai Tugas: {studentSubmission.score}
                                </span>
                              </div>
                            ) : (
                              <span className="px-2.5 py-1 bg-rose-50 dark:bg-rose-955 text-rose-600 dark:text-rose-400 font-bold rounded-lg">
                                Belum Mengumpulkan Berkas
                              </span>
                            )}
                          </div>
                        )}

                        {currentUser.role !== 'student' && (
                          <div className="text-xs flex gap-4">
                            <div>
                              <span className="font-semibold text-slate-500">Jumlah Mengumpulkan: </span>
                              <span className="px-2 py-0.5 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-extrabold rounded-md">
                                {hw.submissions.length} Siswa
                              </span>
                            </div>
                            <button 
                              onClick={() => handleDeleteHomework(hw.id)}
                              className="text-rose-500 hover:text-rose-700 flex items-center gap-1"
                            >
                              <Trash2 className="h-4 w-4" /> Hapus PR
                            </button>
                          </div>
                        )}

                        <div>
                          {currentUser.role === 'student' ? (
                            !studentSubmission && (
                              <button 
                                onClick={() => { triggerSound('click'); setSelectedHomeworkForSubmit(hw); }}
                                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
                              >
                                <UploadCloud className="h-4 w-4" /> Kumpulkan Jawaban
                              </button>
                            )
                          ) : (
                            hw.submissions.length > 0 && (
                              <button 
                                onClick={() => {
                                  triggerSound('click');
                                  setSelectedSubmissionViewer(hw);
                                  setActiveSubmissionPreview(hw.submissions[0]);
                                }}
                                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
                              >
                                <Users className="h-4 w-4" /> Periksa Jawaban ({hw.submissions.length})
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ==================== TAB 5: KUIS ARENA GAME (Siswa Saja) ==================== */}
          {}
          {activeTab === 'quiz' && currentUser.role === 'student' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-855 p-4 sm:p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b dark:border-slate-850 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-amber-500" /> Kuis Arena Game
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Asah pemikiran akademis, raih XP lencana, dan bersainglah secara sportif.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 space-y-6">
                  {!activeQuiz ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quizzes.map(qz => {
                        const isDone = currentUser.completedQuizzes?.includes(qz.id);
                        return (
                          <div key={qz.id} className="p-5 border dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 space-y-4 flex flex-col justify-between hover:border-indigo-150 transition">
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-955 text-indigo-700 dark:text-indigo-400 rounded-full font-bold uppercase">{qz.subject}</span>
                                <span className="text-slate-400">{qz.questions.length} Soal</span>
                              </div>
                              <h3 className="font-bold text-sm text-slate-850 dark:text-slate-100">{qz.title}</h3>
                              <p className="text-[11px] text-slate-500">Setiap jawaban benar menghasilkan +50 XP!</p>
                            </div>

                            {isDone ? (
                              <div className="w-full py-2 bg-emerald-50 dark:bg-emerald-955/20 text-emerald-600 rounded-xl text-xs font-bold text-center border border-dashed border-emerald-200">
                                ✓ Kuis Selesai (+XP Diklaim)
                              </div>
                            ) : (
                              <button 
                                onClick={() => handleStartQuiz(qz)}
                                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow"
                              >
                                <Play className="h-4 w-4" /> Mulai Arena Kuis
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="max-w-xl mx-auto border dark:border-slate-800 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 space-y-6 shadow-md">
                      
                      {!quizFinished ? (
                        <>
                          <div className="flex items-center justify-between border-b dark:border-slate-800 pb-3">
                            <div>
                              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">{activeQuiz.title}</p>
                              <p className="text-xs text-slate-450 font-semibold">Soal {currentQuestionIdx + 1} dari {activeQuiz.questions.length}</p>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 dark:bg-rose-955 text-rose-600 font-bold rounded-lg text-xs font-mono">
                              <Clock className="h-4 w-4 animate-spin" /> {quizTimer}s
                            </div>
                          </div>

                          <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 leading-snug">
                            {activeQuiz.questions[currentQuestionIdx].q}
                          </p>

                          <div className="space-y-3">
                            {activeQuiz.questions[currentQuestionIdx].a.map((option, idx) => {
                              const isSelected = selectedQuizOption === idx;
                              const isCorrectOpt = idx === activeQuiz.questions[currentQuestionIdx].correct;
                              
                              let optStyle = "border-slate-200 hover:border-indigo-500 bg-white dark:bg-slate-900";
                              if (selectedQuizOption !== null) {
                                if (isCorrectOpt) {
                                  optStyle = "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300";
                                } else if (isSelected) {
                                  optStyle = "border-rose-500 bg-rose-50/80 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300";
                                } else {
                                  optStyle = "opacity-60 border-slate-100";
                                }
                              }

                              return (
                                <button
                                  key={idx}
                                  disabled={selectedQuizOption !== null}
                                  onClick={() => handleSelectQuizOption(idx)}
                                  className={`w-full p-3.5 border rounded-xl text-left text-xs sm:text-sm font-semibold transition-all ${optStyle}`}
                                >
                                  <span className="mr-2 font-mono text-slate-400 uppercase">{String.fromCharCode(65 + idx)}.</span>
                                  {option}
                                </button>
                              );
                            })}
                          </div>

                          {selectedQuizOption !== null && (
                            <div className="p-4 bg-indigo-50/50 dark:bg-slate-800 border rounded-xl space-y-3 animate-fade-in text-xs">
                              <p className="font-bold text-indigo-900 dark:text-indigo-200">
                                {selectedQuizOption === activeQuiz.questions[currentQuestionIdx].correct ? '🎉 Hebat, jawaban benar!' : '❌ Jawaban kurang tepat.'}
                              </p>
                              <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
                                <strong>Pembahasan:</strong> {activeQuiz.questions[currentQuestionIdx].exp}
                              </p>
                              <button 
                                onClick={handleNextQuizQuestion}
                                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition"
                              >
                                Lanjut
                              </button>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-center space-y-6 py-6">
                          <div className="inline-block p-4 bg-amber-100 text-amber-600 rounded-full text-4xl animate-bounce shadow">
                            🏆
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Tantangan Kuis Selesai!</h3>
                            <p className="text-xs text-slate-500 mt-1">Evaluasi hasil bermain kuis {activeQuiz.title}</p>
                          </div>

                          <div className="p-4 bg-indigo-50/30 dark:bg-slate-800 border border-indigo-100 dark:border-slate-800 rounded-2xl grid grid-cols-2 gap-4 max-w-sm mx-auto">
                            <div className="text-center">
                              <span className="text-2xl font-extrabold text-indigo-600">{quizScore} / {activeQuiz.questions.length}</span>
                              <p className="text-[10px] text-slate-450 uppercase font-semibold">Benar</p>
                            </div>
                            <div className="text-center border-l dark:border-slate-700">
                              <span className="text-2xl font-extrabold text-emerald-500">+{quizScore * 50} XP</span>
                              <p className="text-[10px] text-slate-450 uppercase font-semibold">XP Diperoleh</p>
                            </div>
                          </div>

                          <button 
                            onClick={() => { triggerSound('click'); setActiveQuiz(null); }}
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow"
                          >
                            Tutup Arena Kuis
                          </button>
                        </div>
                      )}

                    </div>
                  )}
                </div>

                {/* Leaderboard Panel */}
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-900 border dark:border-slate-850 p-5 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b dark:border-slate-850 pb-3">
                      <Trophy className="h-5 w-5 text-amber-500" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Leaderboard Sekolah (XP)</h3>
                    </div>
                    
                    <div className="space-y-2.5 max-h-96 overflow-y-auto">
                      {users
                        .filter(u => u.role === 'student')
                        .sort((a, b) => b.xp - a.xp)
                        .map((user, idx) => {
                          const preset = presetAvatars.find(av => av.id === user.avatar);
                          return (
                            <div key={user.id} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-855 border dark:border-slate-800">
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-xs text-slate-400 w-4">{idx + 1}.</span>
                                <div className="text-lg">{preset?.emoji || '👤'}</div>
                                <div>
                                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{user.name}</p>
                                  <p className="text-[9px] text-slate-455">Lv {user.level} - {user.badge}</p>
                                </div>
                              </div>
                              <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">{user.xp} XP</span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ==================== TAB 6: TAGIHAN SPP & VERIFICATION ==================== */}
          {}
          {activeTab === 'spp' && (
            <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-855 p-4 sm:p-6 space-y-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Manajemen Administrasi Keuangan SPP</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Siswa/Wali dapat melakukan simulasi pembayaran instan menggunakan nomor Virtual Account Bank.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Filter className="h-3.5 w-3.5 text-slate-400" />
                    <span>Status SPP:</span>
                    <select 
                      value={sppPaymentFilter}
                      onChange={(e) => setSppPaymentFilter(e.target.value)}
                      className="bg-transparent focus:outline-none cursor-pointer pr-1 text-indigo-600 dark:text-indigo-400 font-bold text-xs"
                    >
                      <option value="all">Semua Status</option>
                      <option value="Lunas">Lunas</option>
                      <option value="Belum Lunas">Belum Lunas</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => exportToCsv('spp')}
                    className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-955 text-emerald-600 dark:text-emerald-400 font-semibold text-xs px-3 py-2 rounded-xl border border-emerald-200"
                  >
                    <FileSpreadsheet className="h-4 w-4" /> Ekspor SPP (CSV)
                  </button>

                  {currentUser.role === 'admin' && (
                    <button 
                      onClick={() => { triggerSound('click'); setIsSppModalOpen(true); }}
                      className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2 rounded-xl transition"
                    >
                      <Plus className="h-4.5 w-4.5" /> Terbitkan SPP Baru
                    </button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-xs text-slate-400 uppercase font-semibold">
                      <th className="py-3.5 px-2">Nama Siswa / Akun</th>
                      <th className="py-3.5 px-2">Kelas</th>
                      <th className="py-3.5 px-2">Bulan Tagihan</th>
                      <th className="py-3.5 px-2">Jumlah</th>
                      <th className="py-3.5 px-2">Status</th>
                      <th className="py-3.5 px-2">Tanggal Bayar</th>
                      <th className="py-3.5 px-2 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {filteredSpp.map((spp) => (
                      <tr key={spp.id} className="border-b border-slate-50 dark:border-slate-855 hover:bg-slate-50/50">
                        <td className="py-3.5 px-2 font-semibold text-slate-800 dark:text-slate-200">{spp.studentName}</td>
                        <td className="py-3.5 px-2 text-slate-500 font-bold">Kelas {spp.class}</td>
                        <td className="py-3.5 px-2 text-slate-600 dark:text-slate-400">{spp.month}</td>
                        <td className="py-3.5 px-2 font-bold text-slate-800 dark:text-slate-200">Rp {spp.amount.toLocaleString('id-ID')}</td>
                        <td className="py-3.5 px-2">
                          <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${
                            spp.status === 'Lunas' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600' : 'bg-rose-50 dark:bg-rose-955 text-rose-600'
                          }`}>
                            {spp.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-2 text-slate-500 dark:text-slate-400">{spp.payDate || '-'}</td>
                        <td className="py-3.5 px-2 text-right">
                          <div className="flex gap-2 justify-end">
                            {currentUser.role !== 'student' && (
                              <button 
                                onClick={() => handleDeleteSppBill(spp.id)}
                                className="text-rose-500 hover:text-rose-700"
                                title="Hapus Tagihan SPP"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}

                            {currentUser.role !== 'student' ? (
                              <div className="flex justify-end items-center gap-2">
                                {spp.status === 'Belum Lunas' ? (
                                  <button 
                                    onClick={() => sendWhatsAppReminder(spp)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 rounded-lg font-bold transition text-[10px]"
                                  >
                                    <MessageCircle className="h-3.5 w-3.5" /> WA Orang Tua
                                  </button>
                                ) : (
                                  <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                                    <Check className="h-4 w-4" /> Terverifikasi
                                  </span>
                                )}
                              </div>
                            ) : (
                              spp.status === 'Belum Lunas' && (
                                <button 
                                  onClick={() => {
                                    triggerSound('click');
                                    setSelectedStudentSpp(spp);
                                    setIsPaymentModalOpen(true);
                                  }}
                                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition text-[11px]"
                                >
                                  Bayar Sekarang
                                </button>
                              )
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ==================== TAB 7: JADWAL KEGIATAN & CALENDAR ==================== */}
          {}
          {activeTab === 'events' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-855 p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Kalender Kegiatan & Agenda Sekolah</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Jadwal kegiatan akademik. Anda dapat mengimpor langsung jadwal ke Google Calendar pribadi.</p>
                </div>
                {currentUser.role === 'admin' && (
                  <button 
                    onClick={() => { triggerSound('click'); setIsEventModalOpen(true); }}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2 rounded-xl transition shadow"
                  >
                    <Plus className="h-4.5 w-4.5" /> Tambah Agenda Baru
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventList.map(ev => (
                  <div key={ev.id} className="p-5 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl flex items-start gap-4 justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-xl flex flex-col items-center justify-center shrink-0 w-16 text-center">
                        <Calendar className="h-5 w-5 mb-1" />
                        <span className="text-[9px] font-bold uppercase">{ev.type}</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">{ev.date}</p>
                        <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{ev.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-455 leading-relaxed">{ev.description}</p>
                        
                        <div className="flex gap-2">
                          <a 
                            href={getGoogleCalendarLink(ev)}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-block mt-2"
                          >
                            + Impor Google Calendar
                          </a>

                          {currentUser.role !== 'student' && (
                            <button 
                              onClick={() => handleDeleteEvent(ev.id)}
                              className="text-rose-500 hover:text-rose-700 text-[11px] font-bold mt-2"
                            >
                              Hapus Agenda
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 8: DATABASE AUDIENCE (ADMIN ONLY) ==================== */}
          {}
          {activeTab === 'audience' && currentUser.role === 'admin' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-855 p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Database Audience Terdaftar</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Pengawasan administrator atas kredensial masuk pengguna dan status kustomisasi profil.</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Filter className="h-3.5 w-3.5 text-slate-400" />
                    <span>Filter:</span>
                    <select 
                      value={audienceRoleFilter}
                      onChange={(e) => setAudienceRoleFilter(e.target.value)}
                      className="bg-transparent focus:outline-none cursor-pointer pr-1 text-indigo-600 dark:text-indigo-400 font-bold text-xs"
                    >
                      <option value="all">Semua Akun</option>
                      <option value="admin">Admin Utama</option>
                      <option value="student">Siswa & Wali</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => exportToCsv('audience')}
                    className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-955 text-emerald-600 dark:text-emerald-400 font-semibold text-xs px-3 py-2 rounded-xl border border-emerald-200"
                  >
                    <FileSpreadsheet className="h-4 w-4" /> Ekspor Database (CSV)
                  </button>

                  <button 
                    onClick={() => { triggerSound('click'); setIsQuizCreatorOpen(true); }}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2 rounded-xl transition"
                  >
                    <Plus className="h-4 w-4" /> Buat Kuis Baru
                  </button>
                </div>
              </div>

              {/* Dynamic Subject Adding Portal */}
              <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border">
                <form onSubmit={handleAddNewSubject} className="flex gap-2">
                  <input 
                    type="text" 
                    value={newSubjectInput}
                    onChange={(e) => setNewSubjectInput(e.target.value)}
                    placeholder="Tambah Mata Pelajaran Baru..."
                    className="flex-1 text-xs px-3 py-2 border rounded-xl"
                  />
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow">Tambah Mapel</button>
                </form>
                <div className="flex flex-wrap gap-2 mt-3">
                  {subjects.map((sub, i) => (
                    <span key={i} className="px-2 py-1 bg-white dark:bg-slate-800 text-[10px] font-bold rounded-md border text-slate-600 dark:text-slate-300">{sub}</span>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-xs text-slate-400 uppercase font-semibold">
                      <th className="py-3 px-2">Nama Pengguna</th>
                      <th className="py-3 px-2">Email</th>
                      <th className="py-3 px-2">Password</th>
                      <th className="py-3 px-2">Peran Akun</th>
                      <th className="py-3 px-2">Siswa Kelas</th>
                      <th className="py-3 px-2">NIS</th>
                      <th className="py-3 px-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {filteredAudience.map((user) => (
                      <tr key={user.id} className="border-b border-slate-50 dark:border-slate-855 hover:bg-slate-50/50">
                        <td className="py-3.5 px-2 font-bold text-slate-800 dark:text-slate-200">👤 {user.name}</td>
                        <td className="py-3.5 px-2 text-slate-600 dark:text-slate-400 font-mono text-[11px]">{user.email}</td>
                        <td className="py-3.5 px-2 font-mono text-indigo-650 font-semibold dark:text-indigo-400 text-[11px]">
                          {user.password}
                        </td>
                        <td className="py-3.5 px-2">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                            user.role === 'admin' ? 'bg-amber-100 text-amber-800' : 'bg-indigo-100 text-indigo-800'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3.5 px-2 text-slate-500 font-semibold">{user.class !== '-' ? `Kelas ${user.class}` : '-'}</td>
                        <td className="py-3.5 px-2 text-slate-500 font-mono">{user.nis}</td>
                        <td className="py-3.5 px-2">
                          <button 
                            onClick={() => {
                              setAdminEditingUser(user);
                              setAdminNewPassword(user.password);
                            }}
                            className="px-2.5 py-1 bg-rose-50 dark:bg-rose-955 text-rose-650 dark:text-rose-450 hover:bg-rose-100 rounded-lg font-bold text-[10px] flex items-center gap-1"
                          >
                            <KeyRound className="h-3 w-3" /> Reset Sandi
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      <footer className="bg-slate-100 dark:bg-slate-955 border-t border-slate-200 dark:border-slate-900 py-6 mt-12 text-xs text-slate-500 dark:text-slate-400 text-center">
        <p>© 2026 EduSmart Hub Cloud. Solusi Manajemen Sekolah Pintar Terintegrasi.</p>
      </footer>

      {/* ============================= MODALS SECTION ============================ */}
      
      {/* 1. CLASS ASSIGNMENTS MANAGEMENT (Admin only) */}
      {isClassMgmtOpen && (
        <div 
          onClick={() => setIsClassMgmtOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-850 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsClassMgmtOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-base font-extrabold mb-4 flex items-center gap-2 text-indigo-900 dark:text-indigo-400">
              <BookMarked className="h-5 w-5" /> Manajemen Kelas & Wali Guru (Tahun Ajaran Baru)
            </h3>
            <p className="text-xs text-slate-500 mb-4">Ubah alokasi guru yang membina wali kelas ketika berganti tahun ajaran atau semester baru.</p>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {users.filter(u => u.role === 'teacher').map(teacher => (
                <div key={teacher.id} className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold">{teacher.name}</p>
                    <p className="text-[10px] text-slate-450">{teacher.email} • {teacher.badge}</p>
                  </div>
                  <select 
                    value={teacher.classAdvisor || 'none'}
                    onChange={(e) => handleClassAssignmentUpdate(teacher.id, e.target.value)}
                    className="text-xs p-1.5 border rounded-lg bg-white dark:bg-slate-800 text-indigo-600 font-bold"
                  >
                    <option value="none">Bukan Wali Kelas</option>
                    <option value="10">Wali Kelas 10</option>
                    <option value="11">Wali Kelas 11</option>
                    <option value="12">Wali Kelas 12</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. MODAL USER PROFILE */}
      {isProfileModalOpen && (
        <div 
          onClick={() => setIsProfileModalOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsProfileModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            
            <div className="flex items-center gap-2 border-b dark:border-slate-850 pb-3 mb-4">
              <User className="h-5 w-5 text-indigo-600" />
              <h3 className="font-extrabold text-base">Edit Profil Saya</h3>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs font-semibold">
              <div className="flex items-center justify-center flex-col gap-2">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-indigo-600 flex items-center justify-center text-3xl bg-indigo-50">
                  {profilePhotoFile ? (
                    <img src={profilePhotoFile} alt="Profile Custom" className="h-full w-full object-cover" />
                  ) : (
                    <span>{presetAvatars.find(a => a.id === profileAvatar)?.emoji || '👤'}</span>
                  )}
                </div>
              </div>

              {/* Preset Avatars Row */}
              <div className="space-y-1">
                <label className="block text-[10px] text-slate-450 uppercase">Preset Avatar</label>
                <div className="flex justify-between gap-1 bg-slate-50 dark:bg-slate-855 p-2 rounded-xl">
                  {presetAvatars.map(av => (
                    <button
                      key={av.id}
                      type="button"
                      onClick={() => {
                        setProfileAvatar(av.id);
                        setProfilePhotoFile(null);
                      }}
                      className={`text-2xl p-1.5 rounded-lg border transition ${
                        profileAvatar === av.id && !profilePhotoFile ? 'border-indigo-600 bg-white' : 'border-transparent'
                      }`}
                    >
                      {av.emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Profile Photo File Upload */}
              <div className="space-y-1">
                <label className="block text-[10px] text-slate-455 uppercase">Unggah Foto Profil Kustom</label>
                <div className="border border-dashed p-3 rounded-xl text-center relative hover:bg-slate-50 cursor-pointer">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'profile')}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <p className="text-[10px] text-indigo-600">Sematkan file gambar kustom Anda</p>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="block text-[10px] uppercase text-slate-400">Nama Lengkap</label>
                  <input 
                    type="text" 
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-slate-400">Alamat Email (Sinkronisasi Database)</label>
                  <input 
                    type="email" 
                    value={profileEmail}
                    onChange={(e) => setProfileEmail(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-slate-400">No. HP Aktif</label>
                  <input 
                    type="text" 
                    value={profilePhone}
                    onChange={(e) => setProfilePhone(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
                <button type="button" onClick={() => setIsProfileModalOpen(false)} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-xl">Batal</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. MODAL VIEW-MATERI (PDF / YouTube Viewer) */}
      {selectedMaterial && (
        <div 
          onClick={() => setSelectedMaterial(null)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative border dark:border-slate-800"
          >
            <div className="bg-indigo-900 dark:bg-slate-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-indigo-700 dark:bg-slate-700 rounded text-[10px] font-bold uppercase tracking-wider">
                  {selectedMaterial.type} Reader
                </span>
                <h3 className="text-sm sm:text-base font-bold truncate max-w-lg">{selectedMaterial.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => downloadMaterialPdf(selectedMaterial)}
                  className="p-1.5 bg-indigo-950 dark:bg-slate-850 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition"
                  title="Unduh E-Book PDF"
                >
                  <Download className="h-4 w-4" /> <span className="hidden sm:inline">Simpan PDF</span>
                </button>
                <button 
                  onClick={() => setSelectedMaterial(null)}
                  className="p-1.5 bg-indigo-950 dark:bg-slate-800 hover:bg-rose-700 text-indigo-200 hover:text-white rounded-lg transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1 bg-slate-50 dark:bg-slate-955">
              {selectedMaterial.type === 'PDF' && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col max-w-2xl mx-auto text-slate-800">
                  <div className="bg-slate-100 dark:bg-slate-855 border-b border-slate-200 dark:border-slate-800 p-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-350">
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={() => setPdfPage(prev => Math.max(1, prev - 1))}
                        disabled={pdfPage === 1}
                        className="p-1 bg-white dark:bg-slate-800 hover:bg-slate-50 border rounded disabled:opacity-50 transition"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="font-semibold">Halaman {pdfPage} / 10</span>
                      <button 
                        onClick={() => setPdfPage(prev => Math.min(10, prev + 1))}
                        disabled={pdfPage === 10}
                        className="p-1 bg-white dark:bg-slate-800 hover:bg-slate-50 border rounded disabled:opacity-50 transition"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 min-h-[400px] bg-slate-200 dark:bg-slate-950 flex items-center justify-center overflow-auto text-slate-800">
                    {selectedMaterial.fileDataUrl ? (
                      <iframe 
                        src={selectedMaterial.fileDataUrl}
                        title="PDF Viewer"
                        className="w-full h-[450px] border rounded"
                      />
                    ) : (
                      <div className="bg-white dark:bg-slate-900 p-8 shadow-lg max-w-full rounded text-justify text-slate-800">
                        <h4 className="text-sm font-bold text-center border-b pb-2 mb-2 text-indigo-900">
                          {selectedMaterial.subject} - LEMBAR MODUL {pdfPage}
                        </h4>
                        <div className="space-y-3 text-xs leading-relaxed font-serif">
                          <p className="indent-6 font-semibold">Teori Pengetahuan Modul Akademik {selectedMaterial.title}</p>
                          <p>Materi pada lembar ke-{pdfPage} membahas konsep penting mata pelajaran {selectedMaterial.subject}. Pemahaman atas teori pokok ini akan membekali Anda dalam pengisian penugasan selanjutnya.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedMaterial.type === 'Video' && (
                <div className="max-w-2xl mx-auto space-y-4">
                  {selectedMaterial.youtubeUrl ? (
                    <div className="bg-slate-955 rounded-2xl overflow-hidden aspect-video border shadow-xl">
                      <iframe 
                        className="w-full h-full"
                        src={selectedMaterial.youtubeUrl}
                        title={selectedMaterial.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="p-12 text-center bg-slate-900 text-white rounded-2xl font-mono text-xs">
                      [ Tidak ada tautan video YouTube ]
                    </div>
                  )}
                </div>
              )}

              <div className="bg-white dark:bg-slate-900 rounded-2xl border p-6 space-y-4 shadow-sm max-w-2xl mx-auto text-slate-800 dark:text-slate-100">
                <div>
                  <h4 className="font-bold text-sm flex items-center gap-1.5 text-indigo-900 dark:text-indigo-400">
                    💡 Rangkuman Teori Pembelajaran
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{selectedMaterial.summary}</p>
                </div>

                <div className="border-t pt-4">
                  <h5 className="text-xs font-bold text-slate-700 dark:text-slate-350 mb-2">Poin Inti Kurikulum:</h5>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside">
                    {selectedMaterial.briefContent && selectedMaterial.briefContent.map((point, index) => (
                      <li key={index} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL RAPOR DETAIL SISWA */}
      {viewingStudentDetail && (
        <div 
          onClick={() => setViewingStudentDetail(null)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-2xl p-6 relative max-h-[85vh] overflow-y-auto border dark:border-slate-800"
          >
            <button onClick={() => setViewingStudentDetail(null)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1">
              <X className="h-5 w-5" />
            </button>
            
            <div className="border-b dark:border-slate-800 pb-4 mb-4">
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded font-bold text-[10px] uppercase">Rapor Hasil Belajar</span>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mt-1">Siswa: {viewingStudentDetail.name}</h3>
              <p className="text-xs text-slate-500 mt-1">Kelas: {viewingStudentDetail.class} | NIS: {viewingStudentDetail.nis} | HP Wali: {viewingStudentDetail.phone}</p>
            </div>

            <h4 className="text-xs font-bold text-slate-455 uppercase tracking-wider mb-2">Transkrip Nilai Semester Aktif:</h4>
            <div className="space-y-2">
              {viewingStudentDetail.scores.map((item) => (
                <div key={item.id} className="p-3 bg-slate-50 dark:bg-slate-855 border dark:border-slate-800 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.subject}</span>
                    <p className="text-[10px] text-slate-455">{item.type} • Semester: {item.semester}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 mr-2">{item.score}</span>
                    <button 
                      onClick={() => handleDeleteGrade(item.id)}
                      className="text-rose-500 hover:bg-rose-50 p-1 rounded"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL VIRTUAL ACCOUNT PAYMENT FOR SPP */}
      {isPaymentModalOpen && selectedStudentSpp && (
        <div 
          onClick={() => setIsPaymentModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsPaymentModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold mb-4">Gerbang Virtual Account Bank</h3>

            <div className="space-y-4 text-xs font-semibold">
              <div className="p-4 bg-indigo-50 dark:bg-slate-850 rounded-2xl border dark:border-indigo-950 space-y-2">
                <p className="text-slate-600 dark:text-slate-400">Pembayar: <strong>{selectedStudentSpp.studentName}</strong></p>
                <p className="text-slate-600 dark:text-slate-400">Bulan Tagihan: <strong>{selectedStudentSpp.month}</strong></p>
                <p className="text-sm font-bold text-indigo-900 dark:text-indigo-400 border-t dark:border-slate-800 pt-2">Total: Rp {selectedStudentSpp.amount.toLocaleString('id-ID')}</p>
              </div>

              {/* Bank Selector */}
              <div className="space-y-2">
                <label className="block text-slate-500">Pilih Bank Pembayaran:</label>
                <div className="grid grid-cols-4 gap-2">
                  {['BCA', 'Mandiri', 'BRI', 'BNI'].map(bank => (
                    <button
                      key={bank}
                      type="button"
                      onClick={() => setSelectedBankVA(bank)}
                      className={`py-2 text-xs font-bold border rounded-xl transition-all ${
                        selectedBankVA === bank ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-600' : 'border-slate-200'
                      }`}
                    >
                      {bank}
                    </button>
                  ))}
                </div>
              </div>

              {/* Copyable VA Number */}
              <div className="p-3 bg-slate-100 dark:bg-slate-855 rounded-xl border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">No. Virtual Account {selectedBankVA}</span>
                  <p className="font-mono text-sm font-bold tracking-widest text-slate-800 dark:text-slate-200">
                    {selectedBankVA === 'BCA' ? '88012' : selectedBankVA === 'Mandiri' ? '11608' : selectedBankVA === 'BRI' ? '12833' : '98234'}102938847
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const currentVA = `${selectedBankVA === 'BCA' ? '88012' : selectedBankVA === 'Mandiri' ? '11608' : selectedBankVA === 'BRI' ? '12833' : '98234'}102938847`;
                    handleCopyVA(currentVA);
                  }}
                  className="p-2 bg-white dark:bg-slate-800 border rounded-lg hover:bg-slate-50 text-slate-600 dark:text-slate-200 flex items-center gap-1 shadow"
                >
                  <Copy className="h-4 w-4" /> <span className="text-[10px] font-bold">Salin</span>
                </button>
              </div>

              <div className="pt-2 border-t dark:border-slate-850">
                <button
                  type="button"
                  onClick={handleVerifyVAPayment}
                  disabled={isVerifyingPayment}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow"
                >
                  {isVerifyingPayment ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" /> Menguji Pembayaran...
                    </>
                  ) : (
                    <>Simulasi Cek Pembayaran Bank</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL UNGGAH TUGAS PR */}
      {selectedHomeworkForSubmit && (
        <div 
          onClick={() => setSelectedHomeworkForSubmit(null)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setSelectedHomeworkForSubmit(null)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold mb-2">Kumpulkan Jawaban Tugas PR</h3>
            <p className="text-xs text-indigo-650 font-bold mb-4">{selectedHomeworkForSubmit.title}</p>
            
            <form onSubmit={handleHomeworkSubmission} className="space-y-4">
              <div className="border-2 border-dashed border-indigo-250 hover:border-indigo-500 rounded-2xl p-6 text-center cursor-pointer transition relative bg-indigo-55/10">
                <input 
                  type="file" 
                  accept=".pdf,image/*,text/plain"
                  onChange={(e) => handleFileChange(e, 'homework')}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <UploadCloud className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-350">Klik untuk melampirkan berkas jawaban</p>
                <p className="text-[10px] text-slate-450 mt-1">Format: Gambar, Dokumen PDF, atau Berkas Teks (.txt)</p>
              </div>

              {uploadedFileName && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 rounded-xl flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300 animate-pulse">
                  <span className="font-semibold truncate max-w-[200px]">{uploadedFileName}</span>
                  <button type="button" onClick={() => setUploadedFile(null)} className="text-rose-600 font-bold">Hapus</button>
                </div>
              )}

              <button type="submit" className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-lg">Kirim Tugas Sekarang</button>
            </form>
          </div>
        </div>
      )}

      {/* 7. MODAL PENERIMAAN PR & PREVIEW (TEACHER EVALUATION) */}
      {selectedSubmissionViewer && (
        <div 
          onClick={() => setSelectedSubmissionViewer(null)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl p-6 relative max-h-[90vh] overflow-y-auto border dark:border-slate-800"
          >
            <button onClick={() => setSelectedSubmissionViewer(null)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold">Panel Penilaian Tugas Siswa</h3>
            <p className="text-xs text-slate-500 mb-4">{selectedSubmissionViewer.title}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Submission List Panel */}
              <div className="md:col-span-1 space-y-3 border-r pr-4 dark:border-slate-850 text-slate-850 dark:text-slate-100">
                <p className="text-xs uppercase font-bold text-slate-450">Berkas Masuk:</p>
                {selectedSubmissionViewer.submissions.map(sub => (
                  <div 
                    key={sub.studentId} 
                    onClick={() => setActiveSubmissionPreview(sub)}
                    className={`p-3 border rounded-xl cursor-pointer transition ${
                      activeSubmissionPreview?.studentId === sub.studentId ? 'border-indigo-600 bg-indigo-50/50 dark:bg-slate-800' : 'bg-slate-55 dark:bg-slate-855'
                    }`}
                  >
                    <p className="text-xs font-bold">{sub.studentName}</p>
                    <p className="text-[10px] text-indigo-600 font-semibold truncate mt-1">File: {sub.fileName}</p>
                  </div>
                ))}
              </div>

              {/* Previewer and Grading Area */}
              <div className="md:col-span-2 space-y-4">
                {activeSubmissionPreview ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-855 p-3 rounded-xl">
                      <div>
                        <p className="text-xs font-bold">Siswa: {activeSubmissionPreview.studentName}</p>
                        <p className="text-[10px] text-slate-500">Berkas: {activeSubmissionPreview.fileName}</p>
                      </div>
                      <a
                        href={activeSubmissionPreview.fileDataUrl}
                        download={activeSubmissionPreview.fileName}
                        className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                      >
                        <Download className="h-3.5 w-3.5" /> Unduh Jawaban
                      </a>
                    </div>

                    {/* Document Previewer */}
                    <div className="border border-slate-300 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-950 h-80 flex items-center justify-center">
                      {activeSubmissionPreview.fileType?.startsWith('image/') ? (
                        <img 
                          src={activeSubmissionPreview.fileDataUrl} 
                          alt="Student Upload" 
                          className="max-h-full max-w-full object-contain" 
                        />
                      ) : activeSubmissionPreview.fileType === 'text/plain' ? (
                        <div className="p-4 bg-white dark:bg-slate-900 w-full h-full overflow-y-auto text-xs font-mono text-slate-800 dark:text-slate-100">
                          {atob(activeSubmissionPreview.fileDataUrl.split(',')[1])}
                        </div>
                      ) : (
                        <iframe 
                          src={activeSubmissionPreview.fileBlobUrl || activeSubmissionPreview.fileDataUrl} 
                          title="Real PR Preview" 
                          className="w-full h-full"
                        />
                      )}
                    </div>

                    {/* Grading Input */}
                    <div className="flex gap-2 items-center">
                      <input 
                        type="number" 
                        value={reviewScore}
                        onChange={(e) => setReviewScore(e.target.value)}
                        placeholder="Nilai (0-100)"
                        className="px-3 py-1.5 border dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg text-xs w-32"
                      />
                      <button
                        onClick={() => handleGradeHomework(selectedSubmissionViewer.id, activeSubmissionPreview.studentId)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition"
                      >
                        Simpan & Tulis Nilai
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="p-12 text-center text-slate-400 text-xs font-medium bg-slate-50 dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                    Pilih nama siswa di panel kiri untuk membuka lembar dokumen jawaban tugas mereka.
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 8. MODAL AI KONSULTASI / CHATBOT ARENA */}
      {isAiModalOpen && (
        <div 
          onClick={() => setIsAiModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl p-6 relative max-h-[85vh] overflow-hidden flex flex-col border dark:border-slate-800"
          >
            <button onClick={() => setIsAiModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            
            <div className="border-b dark:border-slate-800 pb-3 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-600 animate-pulse" />
              <div>
                <h3 className="font-extrabold text-base">EduAI Study Companion</h3>
                <p className="text-[10px] text-slate-500">Konseling kurikulum pintar sekolah terpadu bertenaga AI</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 p-2 text-xs">
              {aiChatHistory.map((chat, idx) => (
                <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-md ${
                    chat.role === 'user' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-855 text-slate-800 dark:text-slate-250'
                  }`}>
                    {chat.text}
                  </div>
                </div>
              ))}
              {isAiLoading && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-850 text-slate-500 flex items-center gap-1.5 animate-pulse">
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" /> Menganalisis...
                  </div>
                </div>
              )}
            </div>

            <div className="border-t dark:border-slate-800 pt-3 flex gap-2">
              <input 
                type="text" 
                value={aiInputText}
                onChange={(e) => setAiInputText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSendAiMessage(); }}
                placeholder="Diskusikan analisis rapor, kurikulum, atau konsep pelajaran..." 
                className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-850 border dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-100 focus:outline-none"
              />
              <button 
                onClick={handleSendAiMessage}
                className="px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow"
              >
                <Send className="h-4 w-4" /> Kirim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. PORTAL KENAIKAN KELAS GURU/ADMIN */}
      {isPromoModalOpen && (
        <div 
          onClick={() => setIsPromoModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsPromoModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            
            <div className="text-center space-y-4">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-955/20 text-emerald-600 rounded-full inline-block">
                <ArrowUpCircle className="h-10 w-10 animate-bounce" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Portal Kenaikan Kelas & Kelulusan</h3>
                <p className="text-xs text-slate-500 mt-1">Siswa kelas 10 naik tingkat ke 11, kelas 11 naik ke 12, dan kelas 12 dideklarasikan lulus ke jajaran Alumni.</p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-855 rounded-xl border text-left text-xs space-y-2">
                <p className="font-bold">Ketentuan & Syarat:</p>
                <p className="text-slate-600 dark:text-slate-400">• Rata-rata nilai total rapor siswa melampaui KKM (Skala KKM: 70.0)</p>
                <p className="text-rose-500 font-bold border-t dark:border-slate-800 pt-2 text-[10px]">⚠️ CATATAN: Seluruh rekapitulasi nilai aktif tahun ini akan otomatis dibersihkan dan diarsipkan secara rapi pada rekam akademis masing-masing siswa.</p>
              </div>

              <div className="flex gap-2 text-xs font-semibold">
                <button onClick={() => setIsPromoModalOpen(false)} className="flex-1 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl">Batal</button>
                <button onClick={handlePromoteStudents} className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow">Eksekusi Kenaikan Kelas</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. MODAL UNGGAH MATERI BARU */}
      {isMaterialModalOpen && (
        <div 
          onClick={() => setIsMaterialModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsMaterialModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold">Publikasi Modul Baru</h3>
            
            <form onSubmit={handleAddMaterial} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Judul Materi Pembelajaran</label>
                <input 
                  type="text" 
                  value={newMaterial.title}
                  onChange={(e) => setNewMaterial({ ...newMaterial, title: e.target.value })}
                  placeholder="Contoh: Turunan Fungsi Trigonometri" 
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border dark:border-slate-700 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Mata Pelajaran</label>
                  <select 
                    value={newMaterial.subject}
                    onChange={(e) => setNewMaterial({ ...newMaterial, subject: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-855 border dark:border-slate-700 rounded-xl"
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Target Kelas</label>
                  <select 
                    value={newMaterial.gradeClass}
                    onChange={(e) => setNewMaterial({ ...newMaterial, gradeClass: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-855 border dark:border-slate-700 rounded-xl"
                  >
                    <option value="10">Kelas 10</option>
                    <option value="11">Kelas 11</option>
                    <option value="12">Kelas 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Format Modul</label>
                <select 
                  value={newMaterial.type}
                  onChange={(e) => setNewMaterial({ ...newMaterial, type: e.target.value })}
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-855 border dark:border-slate-700 rounded-xl"
                >
                  <option value="PDF">E-Book (Unggah Berkas PDF)</option>
                  <option value="Video">Video (Link YouTube)</option>
                </select>
              </div>

              {newMaterial.type === 'PDF' ? (
                <div>
                  <label className="block text-xs font-semibold mb-1">Pilih Berkas E-Book:</label>
                  <div className="border border-dashed p-4 rounded-xl text-center relative hover:bg-slate-50 cursor-pointer">
                    <input 
                      type="file" 
                      accept=".pdf,image/*,text/*"
                      onChange={(e) => handleFileChange(e, 'material')}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <p className="text-xs font-bold text-indigo-650">Klik untuk menyematkan dokumen PDF</p>
                    {materialUploadName && <p className="text-[10px] text-emerald-500 mt-1">Berkas termuat: {materialUploadName}</p>}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold mb-1">Tautan Link YouTube:</label>
                  <input 
                    type="text" 
                    value={newMaterial.youtubeUrl}
                    onChange={(e) => setNewMaterial({ ...newMaterial, youtubeUrl: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..." 
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border dark:border-slate-750 rounded-xl"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold mb-1">Ringkasan Deskripsi</label>
                <textarea 
                  value={newMaterial.summary}
                  onChange={(e) => setNewMaterial({ ...newMaterial, summary: e.target.value })}
                  placeholder="Isikan satu paragraf intisari pembahasan..." 
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border h-16 rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
                <button type="button" onClick={() => setIsMaterialModalOpen(false)} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-xl">Batal</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-lg">Terbitkan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 11. MODAL VERIFIKASI LOGOUT */}
      {isLogoutConfirmOpen && (
        <div 
          onClick={() => setIsLogoutConfirmOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-sm p-6 text-center space-y-4 border dark:border-slate-800"
          >
            <div className="inline-block p-3 bg-rose-50 dark:bg-rose-950/20 text-rose-600 rounded-full">
              <AlertCircle className="h-8 w-8 animate-bounce" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Apakah Anda yakin ingin keluar?</h3>
              <p className="text-xs text-slate-500 mt-1">Sesi navigasi Anda pada EduSmart Hub akan diakhiri demi menjaga keamanan data.</p>
            </div>
            <div className="pt-2 flex gap-3 text-xs font-bold">
              <button onClick={() => setIsLogoutConfirmOpen(false)} className="flex-1 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-xl">Batal</button>
              <button onClick={handleLogout} className="flex-1 py-2 bg-rose-600 text-white rounded-xl shadow">Ya, Keluar Portal</button>
            </div>
          </div>
        </div>
      )}

      {/* 12. MODAL INPUT NILAI BARU */}
      {isGradeModalOpen && (
        <div 
          onClick={() => setIsGradeModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsGradeModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold mb-4">Input Lembar Nilai Akademik</h3>
            
            <form onSubmit={handleAddGrade} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Pilih Siswa</label>
                <select 
                  value={newGrade.studentId}
                  onChange={(e) => setNewGrade({ ...newGrade, studentId: e.target.value })}
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-855 border dark:border-slate-700 rounded-xl"
                >
                  <option value="">-- Pilih Siswa --</option>
                  {users.filter(u => u.role === 'student').map(s => (
                    <option key={s.id} value={s.id}>{s.name} (Kelas {s.class})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Mata Pelajaran</label>
                  <select 
                    value={newGrade.subject}
                    onChange={(e) => setNewGrade({ ...newGrade, subject: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-855 border dark:border-slate-700 rounded-xl"
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Kategori Ujian</label>
                  <select 
                    value={newGrade.type}
                    onChange={(e) => setNewGrade({ ...newGrade, type: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-855 border dark:border-slate-700 rounded-xl"
                  >
                    <option value="UTS">UTS</option>
                    <option value="UAS">UAS</option>
                    <option value="Tugas">Tugas Harian</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Nilai Angka (0-100)</label>
                <input 
                  type="number" 
                  value={newGrade.score}
                  onChange={(e) => setNewGrade({ ...newGrade, score: e.target.value })}
                  placeholder="Contoh: 85" 
                  min="0" max="100"
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Semester / Kurikulum</label>
                <input 
                  type="text" 
                  value={newGrade.semester}
                  onChange={(e) => setNewGrade({ ...newGrade, semester: e.target.value })}
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
                <button type="button" onClick={() => setIsGradeModalOpen(false)} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-xl">Batal</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 13. MODAL TAMBAH TAGIHAN SPP */}
      {isSppModalOpen && (
        <div 
          onClick={() => setIsSppModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-850 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsSppModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold mb-4">Mulai Tagihan SPP Bulanan</h3>
            
            <form onSubmit={handleAddSppBill} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Pilih Siswa</label>
                <select 
                  value={newSpp.studentId}
                  onChange={(e) => setNewSpp({ ...newSpp, studentId: e.target.value })}
                  className="w-full text-xs p-2.5 bg-slate-55 border"
                >
                  <option value="">-- Pilih Siswa --</option>
                  {users.filter(u => u.role === 'student').map(s => (
                    <option key={s.id} value={s.id}>{s.name} (Kelas {s.class})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Periode Bulan</label>
                  <input 
                    type="text" 
                    value={newSpp.month}
                    onChange={(e) => setNewSpp({ ...newSpp, month: e.target.value })}
                    placeholder="Contoh: Juni 2026" 
                    className="w-full text-xs p-2.5 bg-slate-50 border text-slate-850"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Nominal Biaya (Rp)</label>
                  <input 
                    type="number" 
                    value={newSpp.amount}
                    onChange={(e) => setNewSpp({ ...newSpp, amount: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 border text-slate-850"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
                <button type="button" onClick={() => setIsSppModalOpen(false)} className="px-4 py-2 bg-slate-100 rounded-xl">Batal</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl">Terbitkan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 14. MODAL PUBLIKASI TUGAS PR BARU */}
      {isHomeworkModalOpen && (
        <div 
          onClick={() => setIsHomeworkModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsHomeworkModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold mb-4">Delegasi Tugas PR</h3>
            
            <form onSubmit={handleAddHomework} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Nama Deskripsi Tugas</label>
                <input 
                  type="text" 
                  value={newHomework.title}
                  onChange={(e) => setNewHomework({ ...newHomework, title: e.target.value })}
                  placeholder="Contoh: Pemecahan Persamaan Termodinamika" 
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border dark:border-slate-700 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Mata Pelajaran</label>
                  <select 
                    value={newHomework.subject}
                    onChange={(e) => setNewHomework({ ...newHomework, subject: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-55 dark:bg-slate-855 border dark:border-slate-700 rounded-xl"
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Target Siswa Kelas</label>
                  <select 
                    value={newHomework.gradeClass}
                    onChange={(e) => setNewHomework({ ...newHomework, gradeClass: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-55 dark:bg-slate-855 border rounded-xl"
                  >
                    <option value="10">Kelas 10</option>
                    <option value="11">Kelas 11</option>
                    <option value="12">Kelas 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Tenggat Pengumpulan (Due Date)</label>
                <input 
                  type="date" 
                  value={newHomework.dueDate}
                  onChange={(e) => setNewHomework({ ...newHomework, dueDate: e.target.value })}
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl text-slate-850"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Instruksi Pengerjaan Lengkap</label>
                <textarea 
                  value={newHomework.description}
                  onChange={(e) => setNewHomework({ ...newHomework, description: e.target.value })}
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border h-20 rounded-xl text-slate-850"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
                <button type="button" onClick={() => setIsHomeworkModalOpen(false)} className="px-4 py-2 bg-slate-100 rounded-xl">Batal</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-lg">Publikasikan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 15. MODAL TAMBAH AGENDA EVENT SEKOLAH */}
      {isEventModalOpen && (
        <div 
          onClick={() => setIsEventModalOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setIsEventModalOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold mb-4">Buat Agenda Baru</h3>
            
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Nama Agenda Kegiatan</label>
                <input 
                  type="text" 
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="Contoh: Rapat Komite Akhir Semester" 
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Kategori</label>
                  <select 
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl text-slate-850"
                  >
                    <option value="Akademik">Akademik</option>
                    <option value="Non-Akademik">Non-Akademik</option>
                    <option value="Wali Murid">Wali Murid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">Tanggal Kegiatan</label>
                  <input 
                    type="date" 
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl text-slate-850"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Deskripsi & Catatan Pendukung</label>
                <textarea 
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border h-20 rounded-xl text-slate-850"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
                <button type="button" onClick={() => setIsEventModalOpen(false)} className="px-4 py-2 bg-slate-100 rounded-xl">Batal</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold shadow-lg">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 16. MODAL PASSWORD RESET BY ADMIN */}
      {adminEditingUser && (
        <div 
          onClick={() => setAdminEditingUser(null)}
          className="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-800 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-sm p-6 relative border dark:border-slate-800"
          >
            <button onClick={() => setAdminEditingUser(null)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-base font-extrabold mb-2 text-rose-600">Ganti Kata Sandi Akun</h3>
            <p className="text-xs text-slate-500 mb-4">Pengguna: <strong>{adminEditingUser.name}</strong></p>

            <form onSubmit={handleAdminResetPassword} className="space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-[10px] text-slate-455 uppercase mb-1">Kata Sandi Baru</label>
                <input 
                  type="text"
                  required
                  value={adminNewPassword}
                  onChange={(e) => setAdminNewPassword(e.target.value)}
                  placeholder="Isikan sandi baru..."
                  className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-850 border rounded-xl text-slate-850"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
                <button type="button" onClick={() => setAdminEditingUser(null)} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-xl">Batal</button>
                <button type="submit" className="px-4 py-2 bg-rose-600 text-white rounded-xl shadow-lg">Ubah Kredensial</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 17. QUIZ CREATOR MODAL PANEL */}
      {isQuizCreatorOpen && (
        <div 
          onClick={() => setIsQuizCreatorOpen(false)}
          className="fixed inset-0 bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-4 z-50 text-slate-850 dark:text-slate-100"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl p-6 relative max-h-[85vh] overflow-y-auto border dark:border-slate-800"
          >
            <button onClick={() => setIsQuizCreatorOpen(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold mb-2">Buat Paket Kuis Baru</h3>
            <p className="text-xs text-slate-400 mb-4">Mulai rancang kuis belajar kustom untuk memacu kompetensi bermain siswa.</p>

            <form onSubmit={handleSaveQuiz} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Judul Paket Kuis</label>
                  <input 
                    type="text"
                    required
                    value={quizFormTitle}
                    onChange={(e) => setQuizFormTitle(e.target.value)}
                    placeholder="Contoh: Kuis Matematika Matriks"
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Mata Pelajaran</label>
                  <select 
                    value={quizFormSubject}
                    onChange={(e) => setQuizFormSubject(e.target.value)}
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                  >
                    {subjects.map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Draft Questions list */}
              {quizFormQuestions.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border space-y-2">
                  <p className="font-bold text-[10px] uppercase text-indigo-600">Daftar Pertanyaan Draft ({quizFormQuestions.length}):</p>
                  <ol className="list-decimal pl-4 space-y-1">
                    {quizFormQuestions.map((q, idx) => (
                      <li key={idx} className="font-semibold text-slate-700 dark:text-slate-300">{q.q}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Question Draft Form Builder */}
              <div className="p-4 border border-dashed rounded-2xl bg-indigo-50/20 space-y-3">
                <p className="font-bold text-xs text-indigo-900 dark:text-indigo-300">Tambahkan Pertanyaan Baru ke Draft:</p>
                <div>
                  <label className="block font-semibold mb-1">Pertanyaan / Soal:</label>
                  <input 
                    type="text" 
                    value={currentFormQ}
                    onChange={(e) => setCurrentFormQ(e.target.value)}
                    placeholder="Tuliskan isi soal pertanyaan di sini..."
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {currentFormOpts.map((opt, idx) => (
                    <div key={idx}>
                      <label className="block font-semibold text-[10px] text-slate-400">Pilihan {String.fromCharCode(65 + idx)}</label>
                      <input 
                        type="text" 
                        value={opt}
                        onChange={(e) => {
                          const updated = [...currentFormOpts];
                          updated[idx] = e.target.value;
                          setCurrentFormOpts(updated);
                        }}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block font-semibold mb-1">Indeks Jawaban Benar (0-3):</label>
                    <select 
                      value={currentFormCorrect}
                      onChange={(e) => setCurrentFormCorrect(e.target.value)}
                      className="w-full p-2 border rounded-lg text-slate-850"
                    >
                      <option value="0">Pilihan A</option>
                      <option value="1">Pilihan B</option>
                      <option value="2">Pilihan C</option>
                      <option value="3">Pilihan D</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Penjelasan / Pembahasan Teori:</label>
                    <input 
                      type="text" 
                      value={currentFormExp}
                      onChange={(e) => setCurrentFormExp(e.target.value)}
                      placeholder="Pembahasan ringkas untuk siswa..."
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddNewQuestionToForm}
                  className="w-full py-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl font-bold transition flex items-center justify-center gap-1.5 text-xs"
                >
                  + Tambahkan Soal ke Draft Paket
                </button>
              </div>

              <div className="flex gap-2 pt-2 text-xs font-bold">
                <button type="button" onClick={() => setIsQuizCreatorOpen(false)} className="flex-1 py-2.5 bg-slate-100 text-slate-650 rounded-xl">Batal</button>
                <button type="submit" className="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl shadow-lg">Simpan & Publikasikan Paket Kuis</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}