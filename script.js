// --- 曜日定義 ---
const DAYS = [
  { key: 'mon', label: '月曜日', short: '月', color: 'text-slate-700', bg: 'bg-slate-50', dayIndex: 1 },
  { key: 'tue', label: '火曜日', short: '火', color: 'text-slate-700', bg: 'bg-slate-50', dayIndex: 2 },
  { key: 'wed', label: '水曜日', short: '水', color: 'text-slate-700', bg: 'bg-slate-50', dayIndex: 3 },
  { key: 'thu', label: '木曜日', short: '木', color: 'text-slate-700', bg: 'bg-slate-50', dayIndex: 4 },
  { key: 'fri', label: '金曜日', short: '金', color: 'text-slate-700', bg: 'bg-slate-50', dayIndex: 5 },
  { key: 'sat', label: '土曜日', short: '土', color: 'text-sky-600',   bg: 'bg-sky-50/50', dayIndex: 6 },
  { key: 'sun', label: '日曜日', short: '日', color: 'text-rose-600',  bg: 'bg-rose-50/50', dayIndex: 0 }
];

const COLOR_TAGS = {
  none:    { name: '無色 (プレーン・雑務)', bg: 'bg-white',     border: 'border-slate-300', text: 'text-slate-700', hex: '#ffffff', borderCss: '#cbd5e1', badge: 'bg-slate-100 text-slate-600 border border-slate-200' },
  blue:    { name: 'ブルー (仕事・開発)',   bg: 'bg-blue-50',    border: 'border-blue-500',  text: 'text-blue-900',  hex: '#3b82f6', borderCss: '#3b82f6', badge: 'bg-blue-100 text-blue-700' },
  emerald: { name: 'エメラルド (運動・トレ)', bg: 'bg-emerald-50', border: 'border-emerald-500', text: 'text-emerald-900', hex: '#10b981', borderCss: '#10b981', badge: 'bg-emerald-100 text-emerald-700' },
  amber:   { name: 'アンバー (食事・休憩)',   bg: 'bg-amber-50',   border: 'border-amber-500', text: 'text-amber-900', hex: '#f59e0b', borderCss: '#f59e0b', badge: 'bg-amber-100 text-amber-700' },
  purple:  { name: 'パープル (学習・読書)',   bg: 'bg-purple-50',  border: 'border-purple-500',text: 'text-purple-900', hex: '#8b5cf6', borderCss: '#8b5cf6', badge: 'bg-purple-100 text-purple-700' },
  rose:    { name: 'ローズ (重要・プライベート)', bg: 'bg-rose-50',border: 'border-rose-500',  text: 'text-rose-900',  hex: '#f43f5e', borderCss: '#f43f5e', badge: 'bg-rose-100 text-rose-700' },
  teal:    { name: 'ティール (移動・生活)',   bg: 'bg-teal-50',    border: 'border-teal-500',  text: 'text-teal-900',  hex: '#14b8a6', borderCss: '#14b8a6', badge: 'bg-teal-100 text-teal-700' },
  slate:   { name: 'スレート (睡眠・休息)',   bg: 'bg-slate-100',  border: 'border-slate-400', text: 'text-slate-800', hex: '#64748b', borderCss: '#64748b', badge: 'bg-slate-200 text-slate-700' }
};

// 追加タグ用。無色を含む20色。既存8色とは別に、名前を付けて COLOR_TAGS へ足す。
const COLOR_PRESETS = [
  { id: 'none',    hex: '#ffffff', borderCss: '#cbd5e1', bg: 'bg-white',      border: 'border-slate-300',  text: 'text-slate-700',  badge: 'bg-slate-100 text-slate-600 border border-slate-200' },
  { id: 'slate',   hex: '#64748b', borderCss: '#64748b', bg: 'bg-slate-100',   border: 'border-slate-400',  text: 'text-slate-800',  badge: 'bg-slate-200 text-slate-700' },
  { id: 'stone',   hex: '#78716c', borderCss: '#78716c', bg: 'bg-stone-100',   border: 'border-stone-400',  text: 'text-stone-800',  badge: 'bg-stone-200 text-stone-700' },
  { id: 'red',     hex: '#ef4444', borderCss: '#ef4444', bg: 'bg-red-50',      border: 'border-red-500',    text: 'text-red-900',    badge: 'bg-red-100 text-red-700' },
  { id: 'rose',    hex: '#f43f5e', borderCss: '#f43f5e', bg: 'bg-rose-50',     border: 'border-rose-500',   text: 'text-rose-900',   badge: 'bg-rose-100 text-rose-700' },
  { id: 'orange',  hex: '#f97316', borderCss: '#f97316', bg: 'bg-orange-50',   border: 'border-orange-500', text: 'text-orange-900', badge: 'bg-orange-100 text-orange-700' },
  { id: 'amber',   hex: '#f59e0b', borderCss: '#f59e0b', bg: 'bg-amber-50',    border: 'border-amber-500',  text: 'text-amber-900',  badge: 'bg-amber-100 text-amber-700' },
  { id: 'yellow',  hex: '#eab308', borderCss: '#eab308', bg: 'bg-yellow-50',   border: 'border-yellow-500', text: 'text-yellow-900', badge: 'bg-yellow-100 text-yellow-700' },
  { id: 'lime',    hex: '#84cc16', borderCss: '#84cc16', bg: 'bg-lime-50',     border: 'border-lime-500',   text: 'text-lime-900',   badge: 'bg-lime-100 text-lime-700' },
  { id: 'green',   hex: '#22c55e', borderCss: '#22c55e', bg: 'bg-green-50',    border: 'border-green-500',  text: 'text-green-900',  badge: 'bg-green-100 text-green-700' },
  { id: 'emerald', hex: '#10b981', borderCss: '#10b981', bg: 'bg-emerald-50',  border: 'border-emerald-500',text: 'text-emerald-900', badge: 'bg-emerald-100 text-emerald-700' },
  { id: 'teal',    hex: '#14b8a6', borderCss: '#14b8a6', bg: 'bg-teal-50',     border: 'border-teal-500',   text: 'text-teal-900',   badge: 'bg-teal-100 text-teal-700' },
  { id: 'cyan',    hex: '#06b6d4', borderCss: '#06b6d4', bg: 'bg-cyan-50',     border: 'border-cyan-500',   text: 'text-cyan-900',   badge: 'bg-cyan-100 text-cyan-700' },
  { id: 'sky',     hex: '#0ea5e9', borderCss: '#0ea5e9', bg: 'bg-sky-50',      border: 'border-sky-500',    text: 'text-sky-900',    badge: 'bg-sky-100 text-sky-700' },
  { id: 'blue',    hex: '#3b82f6', borderCss: '#3b82f6', bg: 'bg-blue-50',     border: 'border-blue-500',   text: 'text-blue-900',   badge: 'bg-blue-100 text-blue-700' },
  { id: 'indigo',  hex: '#6366f1', borderCss: '#6366f1', bg: 'bg-indigo-50',   border: 'border-indigo-500', text: 'text-indigo-900', badge: 'bg-indigo-100 text-indigo-700' },
  { id: 'violet',  hex: '#8b5cf6', borderCss: '#8b5cf6', bg: 'bg-violet-50',   border: 'border-violet-500', text: 'text-violet-900', badge: 'bg-violet-100 text-violet-700' },
  { id: 'purple',  hex: '#a855f7', borderCss: '#a855f7', bg: 'bg-purple-50',   border: 'border-purple-500', text: 'text-purple-900', badge: 'bg-purple-100 text-purple-700' },
  { id: 'fuchsia', hex: '#d946ef', borderCss: '#d946ef', bg: 'bg-fuchsia-50',  border: 'border-fuchsia-500',text: 'text-fuchsia-900', badge: 'bg-fuchsia-100 text-fuchsia-700' },
  { id: 'pink',    hex: '#ec4899', borderCss: '#ec4899', bg: 'bg-pink-50',     border: 'border-pink-500',   text: 'text-pink-900',   badge: 'bg-pink-100 text-pink-700' }
];

let customColorTags = [];
let pendingPresetId = 'blue';

// --- アプリケーション全体状態 ---
let currentScreen = 'screen2'; // 初期表示を「画面2: 実績」にしてすぐ確認できるように！
let isMobileSimulated = false;

// 画面1用状態
let currentView = 'week';
let mobileZoomDay = null;
let selectedDayForDayView = 'mon';
let presetApplyDay = null;
let patternMenuAnchor = null;
const DRAFT_DAY_KEY = 'draft';
let dayPresetDraft = [];
let editingPatternId = 'pat-1'; // パターン作成・編集工房で選択中のパターンID
const DEFAULT_GRID = { startHour: 6, endHour: 24, timeStep: 30 };
let gridSettings = {
  week: { ...DEFAULT_GRID },
  day: { ...DEFAULT_GRID }
};
let startHour = DEFAULT_GRID.startHour;
let endHour = DEFAULT_GRID.endHour;
let timeStep = DEFAULT_GRID.timeStep;

// 画面2（実績）用状態
let screen2View = 'week'; // 'week' (1週間実績) | 'day' (1日予実対比)
let screen3View = 'summary'; // 'summary' (集計) | 'notes' (メモ日記)
let actualDate = new Date(2026, 10, 6); // 2026年11月6日 (金)
let summaryRangeStart = new Date(2026, 10, 1);
let summaryRangeEnd = new Date(2026, 10, 30);
let screen2SplitPercent = 14;
let isResizingCol = false;
let resizeStartX = 0;
let resizeStartPercent = 50;
let draggedPlanId = null; // ドラッグ中の予定ID

// 画面2用: メモ・簡易日記データ
let dailyNotes = {
  '2026-11-02': '週初め。全体の優先順位を整理し、コア開発に着手。順調な滑り出し。',
  '2026-11-04': '夕方に水曜ジョギング5km。体調良好、集中力アップ。',
  '2026-11-06': '本日は新機能（画面2の予実トラッキング）のプロトタイプ作成に集中できた。午後はレビューもスムーズに進行。夜はしっかり休養をとる。'
};
let isDailyNoteCollapsed = false;
let weekNoteOpenDays = { '2026-11-06': true }; // 週間表示での各曜日アコーディオン開閉状態

// ドラッグ選択用状態
let isMouseDown = false;
let dragColKey = null; // 画面1なら 'mon' など、画面2なら 'plan' または 'actual'
let dragStartIndex = -1;
let dragCurrentIndex = -1;
let copiedSchedule = null;

// --- 画面1: 週間時間割マスターデータ ---
let weeklySchedules = [
  { id: '1', day: 'mon', start: '06:30', end: '07:25', title: '朝トレ・ストレッチ', color: 'emerald', memo: '自重トレ' },
  { id: '2', day: 'mon', start: '07:30', end: '08:20', title: '朝食・身支度', color: 'amber', memo: '' },
  { id: '3', day: 'mon', start: '08:35', end: '08:55', title: '通勤・移動', color: 'none', memo: '' },
  { id: '4', day: 'mon', start: '09:00', end: '12:00', title: '週初め全体定例＆コア業務', color: 'blue', memo: '' },
  { id: '5', day: 'mon', start: '12:00', end: '13:00', title: '昼休み・ランチ', color: 'amber', memo: '' },
  { id: '6', day: 'mon', start: '13:00', end: '17:30', title: '開発業務・レビュー', color: 'blue', memo: '' },
  { id: '7', day: 'mon', start: '18:30', end: '19:45', title: '夕食・団らん', color: 'amber', memo: '' },
  { id: '8', day: 'mon', start: '20:30', end: '22:00', title: '読書・スキルアップ', color: 'purple', memo: '' },

  { id: '9', day: 'tue', start: '09:00', end: '12:00', title: '集中実装タスク', color: 'blue', memo: '' },
  { id: '10', day: 'tue', start: '13:00', end: '16:00', title: 'チーム開発・MTG', color: 'blue', memo: '' },

  { id: '11', day: 'wed', start: '09:00', end: '12:00', title: '設計・仕様策定', color: 'blue', memo: '' },
  { id: '12', day: 'wed', start: '18:00', end: '19:00', title: '水曜ランニング', color: 'emerald', memo: '' },

  { id: '13', day: 'thu', start: '09:00', end: '12:00', title: 'クライアントMTG', color: 'blue', memo: '' },
  { id: '14', day: 'thu', start: '13:00', end: '15:30', title: '仕様書作成', color: 'blue', memo: '' },

  { id: '15', day: 'fri', start: '06:30', end: '07:30', title: '朝ジム・運動', color: 'emerald', memo: '筋トレ' },
  { id: '16', day: 'fri', start: '07:30', end: '08:30', title: '朝食・身支度', color: 'amber', memo: '' },
  { id: '17', day: 'fri', start: '09:00', end: '12:00', title: '新機能設計・実装', color: 'blue', memo: '画面2予実対比' },
  { id: '18', day: 'fri', start: '12:00', end: '13:00', title: '昼食＆休憩', color: 'amber', memo: '散歩' },
  { id: '19', day: 'fri', start: '13:00', end: '16:00', title: 'コードレビュー＆テスト', color: 'blue', memo: '' },
  { id: '20', day: 'fri', start: '16:30', end: '17:30', title: '週次振り返りMTG', color: 'purple', memo: '' },
  { id: '21', day: 'fri', start: '19:00', end: '21:00', title: '金曜リラックス・夕食', color: 'amber', memo: '' },

  { id: '22', day: 'sat', start: '08:00', end: '09:00', title: 'ゆっくり朝食', color: 'amber', memo: '' },
  { id: '23', day: 'sat', start: '10:00', end: '12:30', title: 'ジムトレーニング', color: 'emerald', memo: '筋トレ＋サウナ' },
  { id: '24', day: 'sun', start: '09:00', end: '10:30', title: '散歩＆カフェ', color: 'amber', memo: '' }
];

// --- 画面2: 日付別「実績（自由入力）」データ ---
let actualRecords = [
  // 2026-11-02 (月) の実績サンプル
  { id: 'act-mon-1', date: '2026-11-02', start: '06:30', end: '07:20', title: '朝トレ・自重運動', color: 'emerald', memo: '軽め' },
  { id: 'act-mon-2', date: '2026-11-02', start: '07:30', end: '08:20', title: '朝食・身支度', color: 'amber', memo: '' },
  { id: 'act-mon-3', date: '2026-11-02', start: '09:00', end: '12:00', title: '全体定例＆週初めタスク整理', color: 'blue', memo: '' },
  { id: 'act-mon-4', date: '2026-11-02', start: '12:00', end: '13:00', title: '昼食ランチ', color: 'amber', memo: '' },
  { id: 'act-mon-5', date: '2026-11-02', start: '13:00', end: '17:30', title: 'コア開発・設計レビュー', color: 'blue', memo: '' },
  { id: 'act-mon-6', date: '2026-11-02', start: '20:30', end: '22:00', title: '技術書読書・勉強', color: 'purple', memo: '' },

  // 2026-11-03 (火) の実績サンプル
  { id: 'act-tue-1', date: '2026-11-03', start: '09:00', end: '12:00', title: '集中実装タスク', color: 'blue', memo: 'API連携' },
  { id: 'act-tue-2', date: '2026-11-03', start: '13:00', end: '16:30', title: 'フロントエンド実装・MTG', color: 'blue', memo: '' },

  // 2026-11-04 (水) の実績サンプル
  { id: 'act-wed-1', date: '2026-11-04', start: '09:00', end: '12:00', title: '仕様策定・ドキュメント作成', color: 'blue', memo: '' },
  { id: 'act-wed-2', date: '2026-11-04', start: '13:00', end: '17:00', title: 'UIコンポーネント実装', color: 'blue', memo: '' },
  { id: 'act-wed-3', date: '2026-11-04', start: '18:00', end: '19:15', title: '水曜ジョギング', color: 'emerald', memo: '5kmラン' },

  // 2026-11-05 (木) の実績サンプル
  { id: 'act-thu-1', date: '2026-11-05', start: '09:00', end: '12:00', title: 'クライアントMTG＆デモ', color: 'blue', memo: '好評' },
  { id: 'act-thu-2', date: '2026-11-05', start: '13:00', end: '16:00', title: 'フィードバック対応・修正', color: 'blue', memo: '' },

  // 2026-11-06 (金) の実績サンプル
  { id: 'act-1', date: '2026-11-06', start: '06:35', end: '07:25', title: '朝ジム（5分遅れで開始）', color: 'emerald', memo: 'スクワット中心' },
  { id: 'act-2', date: '2026-11-06', start: '07:30', end: '08:30', title: '朝食（プロテイン＆軽食）', color: 'amber', memo: '予定通り' },
  { id: 'act-3', date: '2026-11-06', start: '09:10', end: '12:05', title: '新機能設計・実装（画面2）', color: 'blue', memo: '集中して進行' },
  { id: 'act-4', date: '2026-11-06', start: '12:05', end: '13:00', title: '昼食（外食ランチ）', color: 'amber', memo: '' },
  { id: 'act-5', date: '2026-11-06', start: '13:00', end: '15:30', title: 'レビュー＆動作検証', color: 'blue', memo: '30分前倒し完了' },
  { id: 'act-6', date: '2026-11-06', start: '15:30', end: '16:30', title: '追加仕様の調査（予定外タスク）', color: 'teal', memo: '急遽対応' },
  { id: 'act-7', date: '2026-11-06', start: '16:30', end: '17:30', title: '週次振り返りMTG', color: 'purple', memo: '完了' },

  // 2026-11-07 (土) の実績サンプル
  { id: 'act-sat-1', date: '2026-11-07', start: '08:30', end: '09:30', title: 'ゆっくり朝食', color: 'amber', memo: '' },
  { id: 'act-sat-2', date: '2026-11-07', start: '10:30', end: '13:00', title: 'ジムトレーニング＆サウナ', color: 'emerald', memo: 'リフレッシュ' },

  // 2026-11-08 (日) の実績サンプル
  { id: 'act-sun-1', date: '2026-11-08', start: '09:30', end: '11:00', title: '近所カフェで読書', color: 'purple', memo: '休日満喫' }
];

let savedPatterns = [
  {
    id: 'pat-1',
    kind: 'day',
    name: '🏢 平日・通常出社パターン',
    items: [
      { id: 'p1-1', start: '06:30', end: '07:15', title: '朝トレ・ストレッチ', color: 'emerald', memo: '自重トレ' },
      { id: 'p1-2', start: '07:15', end: '08:00', title: '朝食・身支度', color: 'amber', memo: '' },
      { id: 'p1-3', start: '08:00', end: '08:50', title: '通勤・移動', color: 'none', memo: '電車・Podcast' },
      { id: 'p1-4', start: '09:00', end: '12:00', title: 'コア業務・定例MTG', color: 'blue', memo: '' },
      { id: 'p1-5', start: '12:00', end: '13:00', title: '昼休み・ランチ', color: 'amber', memo: '' },
      { id: 'p1-6', start: '13:00', end: '17:30', title: '開発業務・レビュー', color: 'blue', memo: '' },
      { id: 'p1-7', start: '18:00', end: '18:50', title: '帰宅・移動', color: 'none', memo: '' }
    ]
  },
  {
    id: 'pat-2',
    kind: 'day',
    name: '💻 平日・テレワーク集中日',
    items: [
      { id: 'p2-1', start: '07:30', end: '08:30', title: '朝食・ニュース確認', color: 'amber', memo: '' },
      { id: 'p2-2', start: '09:00', end: '12:05', title: '集中実装タスク', color: 'blue', memo: '新機能' },
      { id: 'p2-3', start: '12:05', end: '13:00', title: '昼食＆近所散歩', color: 'amber', memo: '' },
      { id: 'p2-4', start: '13:00', end: '16:00', title: 'チーム開発・レビュー', color: 'blue', memo: '' },
      { id: 'p2-5', start: '18:00', end: '19:00', title: '夕方ジョギング', color: 'emerald', memo: '5km' }
    ]
  },
  {
    id: 'pat-3',
    kind: 'day',
    name: '🌿 休日・リフレッシュパターン',
    items: [
      { id: 'p3-1', start: '08:30', end: '09:30', title: 'ゆっくり朝食・読書', color: 'amber', memo: '' },
      { id: 'p3-2', start: '10:30', end: '13:00', title: 'ジムトレーニング＆サウナ', color: 'emerald', memo: '筋トレ' },
      { id: 'p3-3', start: '13:30', end: '15:00', title: 'カフェで軽食＆勉強', color: 'purple', memo: '' },
      { id: 'p3-4', start: '18:00', end: '20:30', title: '夕食＆映画鑑賞', color: 'amber', memo: 'リラックス' }
    ]
  }
];

savedPatterns.unshift({
  id: 'pat-week-sample',
  kind: 'week',
  name: '📅 基本の1週間',
  items: weeklySchedules.map(item => ({
    day: item.day,
    start: item.start,
    end: item.end,
    title: item.title,
    color: item.color,
    memo: item.memo || ''
  }))
});

// 初期化で戻すための初期データ。読み込みより前に控える。
const INITIAL_DATA = {
  weeklySchedules: JSON.parse(JSON.stringify(weeklySchedules)),
  actualRecords: JSON.parse(JSON.stringify(actualRecords)),
  savedPatterns: JSON.parse(JSON.stringify(savedPatterns)),
  dailyNotes: JSON.parse(JSON.stringify(dailyNotes)),
  startHour: 6,
  endHour: 24,
  timeStep: 30,
  gridSettings: {
    week: { startHour: 6, endHour: 24, timeStep: 30 },
    day: { startHour: 6, endHour: 24, timeStep: 30 }
  },
  screen2SplitPercent: 14,
  actualDate: '2026-11-06'
};

// --- 日付＆時間ユーティリティ ---
function formatDateYMD(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(d) {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return `${d.getFullYear()}年${String(d.getMonth() + 1).padStart(2, '0')}月${String(d.getDate()).padStart(2, '0')}日 (${days[d.getDay()]})`;
}

function getDayKeyFromDate(d) {
  const idx = d.getDay(); // 0=sun, 1=mon...
  const dayObj = DAYS.find(item => item.dayIndex === idx);
  return dayObj ? dayObj.key : 'mon';
}

// 対象日付を含む週（月曜日〜日曜日）の7日間を生成
function getWeekDates(centerDate) {
  const d = new Date(centerDate);
  const day = d.getDay(); // 0: Sun, 1: Mon, ... 6: Sat
  const diffToMon = day === 0 ? -6 : 1 - day;
  const monday = new Date(d);
  monday.setDate(d.getDate() + diffToMon);

  const week = [];
  for (let i = 0; i < 7; i++) {
    const curr = new Date(monday);
    curr.setDate(monday.getDate() + i);
    week.push({
      date: curr,
      dateStr: formatDateYMD(curr),
      dayKey: DAYS[i].key,
      dayObj: DAYS[i],
      short: DAYS[i].short,
      label: DAYS[i].label,
      monthDay: `${curr.getMonth() + 1}/${curr.getDate()}`
    });
  }
  return week;
}

function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function parseClockInput(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;
  const colon = raw.match(/^(\d{1,2}):(\d{2})$/);
  let hour = null;
  let minute = null;
  if (colon) {
    hour = Number(colon[1]);
    minute = Number(colon[2]);
  } else {
    const digits = raw.replace(/\D/g, '');
    if (digits.length === 3 || digits.length === 4) {
      hour = Number(digits.slice(0, digits.length - 2));
      minute = Number(digits.slice(-2));
    }
  }
  if (hour === null || minute === null) return null;
  if (hour === 24 && minute === 0) return '24:00';
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;
  return minutesToTime(hour * 60 + minute);
}

function normalizeMiniTimeField(input) {
  const parsed = parseClockInput(input.value);
  if (parsed) input.value = parsed;
}

function setMiniTimes(startTime, endTime) {
  const start = document.getElementById('miniStartInput');
  const end = document.getElementById('miniEndInput');
  if (start) start.value = startTime || '';
  if (end) end.value = endTime || '';
}

function minutesToTime(totalMin) {
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function getTimeSlots() {
  const slots = [];
  const startMin = startHour * 60;
  const endMin = endHour * 60;
  for (let m = startMin; m < endMin; m += timeStep) {
    slots.push(minutesToTime(m));
  }
  return slots;
}

// 編集内容はブラウザ内に残す。再読み込みでも消えない。
const STORAGE_KEY = 'smartschedule-v1';

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      weeklySchedules,
      dayPresetDraft,
      actualRecords,
      savedPatterns,
      dailyNotes,
      startHour: gridSettings.week.startHour,
      endHour: gridSettings.week.endHour,
      timeStep: gridSettings.week.timeStep,
      gridSettings,
      screen2SplitPercent,
      actualDate: formatDateYMD(actualDate),
      colorTags: customColorTags
    }));
  } catch (err) {
    // 容量不足やプライベートモードでは、メモリ上の編集だけ続ける
  }
}

function loadPersistedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.weeklySchedules)) weeklySchedules = data.weeklySchedules;
    if (Array.isArray(data.dayPresetDraft)) dayPresetDraft = normalizeDayPresetDraft(data.dayPresetDraft);
    if (Array.isArray(data.actualRecords)) actualRecords = data.actualRecords;
    if (Array.isArray(data.savedPatterns)) {
      savedPatterns = data.savedPatterns;
      normalizeSavedPatterns();
    }
    if (data.dailyNotes && typeof data.dailyNotes === 'object' && !Array.isArray(data.dailyNotes)) {
      dailyNotes = data.dailyNotes;
    }
    loadGridSettings(data);
    applyActiveGrid();
    if (typeof data.screen2SplitPercent === 'number' && Number.isFinite(data.screen2SplitPercent) && data.screen2SplitPercent !== 50) {
      screen2SplitPercent = Math.max(12, Math.min(80, Math.round(data.screen2SplitPercent)));
    }
    if (typeof data.actualDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data.actualDate)) {
      const [y, m, d] = data.actualDate.split('-').map(Number);
      const parsed = new Date(y, m - 1, d);
      if (!Number.isNaN(parsed.getTime())) actualDate = parsed;
    }
    if (Array.isArray(data.colorTags)) applyCustomColorTags(data.colorTags);
  } catch (err) {
    // 壊れた保存データは捨てて、初期サンプルのまま開く
  }
}

// --- メイン画面切り替え (画面1 vs 画面2) ---
function setNavButtonState(btn, active) {
  if (!btn) return;
  const dot = btn.querySelector('span');
  if (active) {
    btn.className = 'px-3 py-1.5 rounded-md font-semibold bg-white text-blue-700 shadow-2xs border border-slate-200 flex items-center space-x-1.5 transition whitespace-nowrap';
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-full bg-blue-600';
  } else {
    btn.className = 'px-3 py-1.5 rounded-md font-medium text-slate-600 hover:text-slate-900 transition flex items-center space-x-1.5 whitespace-nowrap';
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-full bg-transparent';
  }
}

function showOnlyToolbar(activeId) {
  ['toolbarScreen1', 'toolbarScreen2', 'toolbarScreen3', 'toolbarScreen4'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === activeId) {
      el.classList.remove('hidden');
      el.classList.add('flex');
    } else {
      el.classList.add('hidden');
      el.classList.remove('flex');
    }
  });
  const slot = document.getElementById(activeId + 'Fx');
  const fx = document.getElementById('fxCluster');
  const park = document.getElementById('fxPark');
  const notice = document.getElementById('fxRightNotice');
  const formula = document.getElementById('formulaBar');
  if (notice) notice.style.display = '';
  if (formula) formula.className = 'truncate';
  if (!fx) return;
  fx.style.display = '';
  if (slot) slot.appendChild(fx);
  else if (park) park.appendChild(fx);
}

function switchScreen(screen) {
  const allowed = ['screen1', 'screen2', 'screen3', 'screen4'];
  const next = allowed.includes(screen) ? screen : 'screen2';
  const enteringSummary = next === 'screen3' && currentScreen !== 'screen3';
  currentScreen = next;
  if (enteringSummary) {
    setSummaryMonth(actualDate);
  }

  setNavButtonState(document.getElementById('navScreen1Btn'), currentScreen === 'screen1');
  setNavButtonState(document.getElementById('navScreen2Btn'), currentScreen === 'screen2');
  setNavButtonState(document.getElementById('navScreen3Btn'), currentScreen === 'screen3');
  setNavButtonState(document.getElementById('navScreen4Btn'), currentScreen === 'screen4');

  const subtitle = document.getElementById('headerSubtitle');
  if (currentScreen === 'screen1') {
    showOnlyToolbar('toolbarScreen1');
    subtitle.textContent = '1 予定';
  } else if (currentScreen === 'screen3') {
    showOnlyToolbar('toolbarScreen3');
    subtitle.textContent = '3 集計';
  } else if (currentScreen === 'screen4') {
    showOnlyToolbar('toolbarScreen4');
    subtitle.textContent = '設定';
  } else {
    showOnlyToolbar('toolbarScreen2');
    subtitle.textContent = '2 実績';
  }
  const fxNotice = document.getElementById('fxRightNotice');
  if (fxNotice && subtitle) fxNotice.textContent = subtitle.textContent;

  render();
}

// --- 画面2: 日付ナビゲーション ---
function navigateActualDate(delta) {
  if (screen2View === 'week') {
    actualDate.setDate(actualDate.getDate() + delta * 7);
  } else {
    actualDate.setDate(actualDate.getDate() + delta);
  }
  render();
}

function goToActualToday() {
  actualDate = new Date(2026, 10, 6);
  render();
}

// 1週間表示から特定日付の1日予実対比へ直接ジャンプ
function goToDayComparison(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  actualDate = new Date(y, m - 1, d);
  switchScreen2View('day');
}

function applyScreen2ViewButtons() {
  const bDay = document.getElementById('screen2DayViewBtn');
  const bWeek = document.getElementById('screen2WeekViewBtn');
  if (!bDay || !bWeek) return;
  const active = 'px-3 py-1 text-xs font-semibold rounded text-white bg-blue-600 transition shadow-2xs';
  const idle = 'px-3 py-1 text-xs font-medium rounded text-slate-600 hover:text-slate-900 transition';
  bDay.className = screen2View === 'day' ? active : idle;
  bWeek.className = screen2View === 'week' ? active : idle;
}

function switchScreen2View(view) {
  screen2View = view;
  applyScreen2ViewButtons();
  render();
}

function applyScreen3ViewButtons() {
  const summaryBtn = document.getElementById('screen3SummaryBtn');
  const notesBtn = document.getElementById('screen3NotesBtn');
  if (!summaryBtn || !notesBtn) return;
  const active = 'px-3 py-1 text-xs font-semibold rounded text-white bg-blue-600 transition shadow-2xs';
  const idle = 'px-3 py-1 text-xs font-medium rounded text-slate-600 hover:text-slate-900 transition';
  summaryBtn.className = screen3View === 'summary' ? active : idle;
  notesBtn.className = screen3View === 'notes' ? active : idle;
}

function switchScreen3View(view) {
  screen3View = view === 'notes' ? 'notes' : 'summary';
  applyScreen3ViewButtons();
  render();
}

function openDayFromSummary(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  actualDate = new Date(year, month - 1, day);
  screen2View = 'day';
  applyScreen2ViewButtons();
  switchScreen('screen2');
}

// --- メインレンダリングルーティング ---
function render() {
  closePatternMenu();
  detachPresetMenu();
  detachTimeControls();
  applyActiveGrid();
  if (currentScreen === 'screen1') {
    renderScreen1();
    updateDailyNoteUI();
  } else if (currentScreen === 'screen3') {
    renderScreen3();
  } else if (currentScreen === 'screen4') {
    renderScreen4();
  } else {
    renderScreen2();
  }
  syncTimeControls();
  persistState();
}

function activeGridKind() {
  if (currentScreen === 'screen2') return screen2View === 'day' ? 'day' : 'week';
  if (currentScreen === 'screen1' && currentView === 'day') return 'day';
  return 'week';
}

function normalizeDayPresetDraft(list) {
  if (!Array.isArray(list)) return [];
  return list.filter(item => item && item.start && item.end).map(item => ({
    id: item.id || ('draft-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)),
    start: item.start,
    end: item.end,
    title: item.title || '',
    color: item.color || 'none',
    memo: item.memo || ''
  }));
}

function makeDraftBlock(fields) {
  return {
    id: 'draft-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    start: fields.start,
    end: fields.end,
    title: fields.title || '',
    color: fields.color || 'none',
    memo: fields.memo || ''
  };
}

function applyActiveGrid() {
  const grid = gridSettings[activeGridKind()] || gridSettings.week;
  startHour = grid.startHour;
  endHour = grid.endHour;
  timeStep = grid.timeStep;
}

function clampGrid(raw, fallback) {
  const grid = {
    startHour: fallback.startHour,
    endHour: fallback.endHour,
    timeStep: fallback.timeStep
  };
  if (raw && Number.isInteger(raw.startHour) && raw.startHour >= 0 && raw.startHour <= 23) {
    grid.startHour = raw.startHour;
  }
  if (raw && Number.isInteger(raw.endHour) && raw.endHour >= 1 && raw.endHour <= 24 && raw.endHour > grid.startHour) {
    grid.endHour = raw.endHour;
  }
  if (raw && [15, 20, 30, 60].includes(raw.timeStep)) grid.timeStep = raw.timeStep;
  if (grid.endHour <= grid.startHour) {
    grid.startHour = fallback.startHour;
    grid.endHour = fallback.endHour;
  }
  return grid;
}

function loadGridSettings(data) {
  const legacy = clampGrid(data, DEFAULT_GRID);
  const stored = data && data.gridSettings;
  gridSettings.week = clampGrid(stored && stored.week, legacy);
  gridSettings.day = clampGrid(stored && stored.day, legacy);
}

function syncTimeControls() {
  const label = document.getElementById('timeGridLabel');
  if (label) label.textContent = activeGridKind() === 'day' ? '単日' : '週間';
  const startSelect = document.getElementById('startHourSelect');
  if (startSelect) initTimeRangeControls();
  const stepValue = String(timeStep);
  const stepSelect = document.getElementById('timeStepSelect');
  if (stepSelect) stepSelect.value = stepValue;
  const screen2StepSelect = document.getElementById('screen2TimeStepSelect');
  if (screen2StepSelect) screen2StepSelect.value = stepValue;
}

// ==========================================
// 画面3: 月間集計（型は曜日マスターをその月へ当てる。実績は日付ログ）
// ==========================================
function blockMinutes(block) {
  return Math.max(0, timeToMinutes(block.end) - timeToMinutes(block.start));
}

function colorKeyOf(block) {
  return COLOR_TAGS[block.color] ? block.color : 'none';
}

function formatHourValue(totalMin) {
  return `${(Math.abs(totalMin) / 60).toFixed(1)}h`;
}

function formatHourDiff(diffMin) {
  if (diffMin === 0) return '±0.0h';
  const sign = diffMin > 0 ? '+' : '-';
  return `${sign}${formatHourValue(diffMin)}`;
}

function diffTextClass(diffMin) {
  if (diffMin > 0) return 'text-emerald-700';
  if (diffMin < 0) return 'text-amber-700';
  return 'text-slate-500';
}

function titleKeyOf(block) {
  const title = (block.title || '').trim();
  return title || '（名称なし）';
}

function addTitleMinutes(rows, block, field) {
  const title = titleKeyOf(block);
  if (!rows[title]) rows[title] = { title, planMin: 0, actualMin: 0, colorMinutes: {} };
  const minutes = blockMinutes(block);
  rows[title][field] += minutes;
  const color = colorKeyOf(block);
  rows[title].colorMinutes[color] = (rows[title].colorMinutes[color] || 0) + minutes;
}

function pickTitleColor(colorMinutes) {
  let best = null;
  let bestMin = 0;
  Object.keys(colorMinutes).forEach(key => {
    if (key === 'none') return;
    if (colorMinutes[key] > bestMin) {
      best = key;
      bestMin = colorMinutes[key];
    }
  });
  return best;
}

function parseISODate(value) {
  const [y, m, d] = value.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function monthBounds(date) {
  return {
    start: new Date(date.getFullYear(), date.getMonth(), 1),
    end: new Date(date.getFullYear(), date.getMonth() + 1, 0)
  };
}

function setSummaryMonth(date) {
  const bounds = monthBounds(date);
  summaryRangeStart = bounds.start;
  summaryRangeEnd = bounds.end;
}

function formatRangeLabel(start, end) {
  const sameYear = start.getFullYear() === end.getFullYear();
  const left = `${start.getFullYear()}年${start.getMonth() + 1}月${start.getDate()}日`;
  const right = sameYear
    ? `${end.getMonth() + 1}月${end.getDate()}日`
    : `${end.getFullYear()}年${end.getMonth() + 1}月${end.getDate()}日`;
  return `${left}〜${right}`;
}

function factsForDate(date) {
  const dateStr = formatDateYMD(date);
  const dayKey = getDayKeyFromDate(date);
  const plans = weeklySchedules.filter(item => item.day === dayKey);
  const actuals = actualRecords.filter(item => item.date === dateStr);
  const colors = [];
  actuals.forEach(block => {
    const key = colorKeyOf(block);
    if (!colors.includes(key)) colors.push(key);
  });
  return {
    date,
    dateStr,
    day: date.getDate(),
    dayKey,
    dayObj: DAYS.find(item => item.key === dayKey),
    dayPlan: plans.reduce((sum, block) => sum + blockMinutes(block), 0),
    dayActual: actuals.reduce((sum, block) => sum + blockMinutes(block), 0),
    colors,
    plans,
    actuals
  };
}

function buildRangeSummary(start, end) {
  const byTitle = {};
  const days = [];
  let planMin = 0;
  let actualMin = 0;
  const cursor = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const last = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  while (cursor <= last) {
    const facts = factsForDate(new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate()));
    planMin += facts.dayPlan;
    actualMin += facts.dayActual;
    facts.plans.forEach(block => addTitleMinutes(byTitle, block, 'planMin'));
    facts.actuals.forEach(block => addTitleMinutes(byTitle, block, 'actualMin'));
    days.push(facts);
    cursor.setDate(cursor.getDate() + 1);
  }
  const titles = Object.values(byTitle).sort((a, b) => {
    const weight = (b.planMin + b.actualMin) - (a.planMin + a.actualMin);
    if (weight !== 0) return weight;
    return a.title.localeCompare(b.title, 'ja');
  });
  return { start, end, days, planMin, actualMin, titles };
}

function navigateSummaryMonth(delta) {
  const base = new Date(summaryRangeStart.getFullYear(), summaryRangeStart.getMonth() + delta, 1);
  setSummaryMonth(base);
  render();
}

function goToSummaryThisMonth() {
  setSummaryMonth(new Date());
  render();
}

function changeSummaryRange() {
  const startInput = document.getElementById('summaryRangeStart');
  const endInput = document.getElementById('summaryRangeEnd');
  if (!startInput.value || !endInput.value) return;
  let start = parseISODate(startInput.value);
  let end = parseISODate(endInput.value);
  if (end < start) {
    if (document.activeElement === startInput) end = new Date(start);
    else start = new Date(end);
  }
  summaryRangeStart = start;
  summaryRangeEnd = end;
  render();
}

function renderMonthMeters(summary) {
  const scale = Math.max(1, ...summary.titles.map(item => Math.max(item.planMin, item.actualMin)));
  const rows = summary.titles.filter(item => item.planMin > 0 || item.actualMin > 0).map(item => {
    const colorKey = pickTitleColor(item.colorMinutes);
    const tag = colorKey ? COLOR_TAGS[colorKey] : null;
    const fill = tag ? tag.hex : '#94a3b8';
    const planWidth = (item.planMin / scale) * 100;
    const actualWidth = (item.actualMin / scale) * 100;
    const diff = item.actualMin - item.planMin;
    const dot = tag ? `<span class="month-color-dot" style="background:${fill}"></span>` : '';
    return `
      <div class="border border-slate-200 rounded-md px-3 py-2.5 bg-white">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800">
            ${dot}
            ${escapeHtml(item.title)}
          </span>
          <span class="font-mono text-[11px] text-slate-600">
            型 ${formatHourValue(item.planMin)}
            <span class="mx-1 text-slate-300">/</span>
            実績 ${formatHourValue(item.actualMin)}
            <span class="mx-1 text-slate-300">/</span>
            <span class="font-semibold ${diffTextClass(diff)}">${formatHourDiff(diff)}</span>
          </span>
        </div>
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="w-8 shrink-0 text-[10px] text-blue-700">型</span>
            <div class="meter-track flex-1"><div class="meter-fill is-plan" style="width:${planWidth}%; background:${fill}"></div></div>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-8 shrink-0 text-[10px] text-emerald-700">実績</span>
            <div class="meter-track flex-1"><div class="meter-fill" style="width:${actualWidth}%; background:${fill}"></div></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (!rows) {
    return '<p class="text-xs text-slate-400 py-6 text-center">この期間に集計できる時間はありません</p>';
  }
  return `<div class="space-y-2">${rows}</div>`;
}

function scheduleSignature(items) {
  return items.map(item => [
    item.start || '',
    item.end || '',
    (item.title || '').trim(),
    item.color || 'none',
    item.memo || ''
  ].join('\u001f')).sort().join('\u001e');
}

function weekdayBlocks(dayKey) {
  return weeklySchedules.filter(item => item.day === dayKey);
}

function matchingWeekPattern() {
  return savedPatterns.find(pattern => {
    if (patternKind(pattern) !== 'week') return false;
    return DAYS.every(day => {
      const presetItems = pattern.items.filter(item => item.day === day.key);
      return scheduleSignature(presetItems) === scheduleSignature(weekdayBlocks(day.key));
    });
  }) || null;
}

function renderSummaryPatternLine() {
  const week = matchingWeekPattern();
  const text = week ? `型: ${escapeHtml(week.name)}` : '型: 週間パターンなし';
  const tone = week ? 'text-blue-900' : 'text-slate-500';
  return `<p class="text-center text-base md:text-lg font-bold ${tone} px-2">${text}</p>`;
}

function summaryRangeDays() {
  const days = [];
  const cursor = new Date(summaryRangeStart.getFullYear(), summaryRangeStart.getMonth(), summaryRangeStart.getDate());
  const last = new Date(summaryRangeEnd.getFullYear(), summaryRangeEnd.getMonth(), summaryRangeEnd.getDate());
  while (cursor <= last) {
    const date = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
    const dayObj = DAYS.find(item => item.dayIndex === date.getDay());
    days.push({
      date,
      dateStr: formatDateYMD(date),
      label: `${date.getMonth() + 1}/${date.getDate()} (${dayObj ? dayObj.short : ''})`,
      note: (dailyNotes[formatDateYMD(date)] || '').trim()
    });
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function renderSummaryRangeHeader() {
  const rangeLabel = formatRangeLabel(summaryRangeStart, summaryRangeEnd);
  return `
    <section class="border-b border-slate-300 bg-white px-4 py-5 md:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center gap-2 mb-3">
          <button type="button" onclick="navigateSummaryMonth(-1)" class="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50" title="前の月">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <h2 class="flex-1 text-center text-xl md:text-2xl font-bold text-slate-900 tracking-tight">${rangeLabel}</h2>
          <button type="button" onclick="navigateSummaryMonth(1)" class="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50" title="次の月">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div class="grid grid-cols-[1fr_auto_1fr] items-end gap-2 md:gap-4 rounded-xl border-2 border-blue-300 bg-blue-50 px-3 py-3 md:px-5 md:py-4">
          <label class="block min-w-0">
            <span class="block text-[11px] font-bold text-blue-700 mb-1">開始</span>
            <input id="summaryRangeStart" type="date" value="${formatDateYMD(summaryRangeStart)}" onchange="changeSummaryRange()" class="w-full border border-blue-200 rounded-lg px-2 py-2 text-base md:text-lg font-semibold text-slate-900 bg-white">
          </label>
          <span class="pb-2 text-2xl font-bold text-blue-400">〜</span>
          <label class="block min-w-0">
            <span class="block text-[11px] font-bold text-blue-700 mb-1">終了</span>
            <input id="summaryRangeEnd" type="date" value="${formatDateYMD(summaryRangeEnd)}" onchange="changeSummaryRange()" class="w-full border border-blue-200 rounded-lg px-2 py-2 text-base md:text-lg font-semibold text-slate-900 bg-white">
          </label>
        </div>
        <div class="grid grid-cols-[1fr_auto_1fr] items-center mt-3 gap-2">
          <span></span>
          ${screen3View === 'summary' ? renderSummaryPatternLine() : '<p class="text-center text-base md:text-lg font-bold text-slate-700 px-2">メモ日記</p>'}
          <div class="flex justify-end">
            <button type="button" onclick="goToSummaryThisMonth()" class="px-3 py-1 text-xs font-semibold border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700">今月</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSummaryNotesList(days) {
  return days.filter(day => day.note).map(day => {
    const text = escapeHtml(day.note.replace(/\s+/g, ' '));
    return `
      <div class="diary-row">
        <button type="button" class="diary-date" onclick="openDayFromSummary('${day.dateStr}')" title="${day.label}の日入力を開く">${day.label}</button>
        <span class="diary-text" title="${escapeHtml(day.note)}">${text}</span>
      </div>
    `;
  }).join('');
}

function renderScreen3() {
  applyScreen3ViewButtons();
  const noteSection = document.getElementById('dailyNoteSection');
  if (noteSection) noteSection.classList.add('hidden');

  if (screen3View === 'notes') {
    const days = summaryRangeDays();
    const noted = days.filter(day => day.note).length;
    document.getElementById('footerStatusText').textContent = 'メモ日記';
    document.getElementById('footerStat1').innerHTML = `記入: <strong class="text-slate-700">${noted}日</strong>`;
    document.getElementById('footerStat2').innerHTML = `期間: <strong class="text-slate-700">${days.length}日</strong>`;
    document.getElementById('footerRightInfo').textContent = '日付を開くと日入力へ移ります';
    document.getElementById('gridContainer').innerHTML = `
      <div class="flex flex-col">
        ${renderSummaryRangeHeader()}
        <section class="p-3 md:p-5 bg-slate-50/60">
          <div class="diary-sheet">
            <p class="diary-hint">※未記入の日は非表示</p>
            ${renderSummaryNotesList(days)}
          </div>
        </section>
      </div>
    `;
    return;
  }

  const summary = buildRangeSummary(summaryRangeStart, summaryRangeEnd);
  const diff = summary.actualMin - summary.planMin;
  const loggedDays = summary.days.filter(day => day.dayActual > 0).length;

  document.getElementById('footerStatusText').textContent = '集計中';
  document.getElementById('footerStat1').innerHTML = `型: <strong class="text-blue-700 font-mono">${formatHourValue(summary.planMin)}</strong>`;
  document.getElementById('footerStat2').innerHTML = `実績: <strong class="text-emerald-700 font-mono">${formatHourValue(summary.actualMin)}</strong> ｜ 差分: <span class="font-bold font-mono ${diffTextClass(diff)}">${formatHourDiff(diff)}</span>`;
  document.getElementById('footerRightInfo').textContent = `実績のある日 ${loggedDays} / ${summary.days.length}日`;

  document.getElementById('gridContainer').innerHTML = `
    <div class="flex flex-col">
      ${renderSummaryRangeHeader()}
      <section class="p-3 md:p-4 bg-slate-50/60">
        <div class="flex flex-wrap items-end justify-between gap-2 mb-3">
          <h2 class="text-xs font-bold text-slate-700">項目ごとの予実</h2>
          <p class="font-mono text-[11px] text-slate-600">
            型 ${formatHourValue(summary.planMin)}
            <span class="mx-1 text-slate-300">/</span>
            実績 ${formatHourValue(summary.actualMin)}
            <span class="mx-1 text-slate-300">/</span>
            <span class="font-semibold ${diffTextClass(diff)}">${formatHourDiff(diff)}</span>
          </p>
        </div>
        ${renderMonthMeters(summary)}
      </section>
    </div>
  `;
}

// ==========================================
// 画面2: 実績（予実対比）のレンダリング
// ==========================================
function renderScreen2() {
  const isMobile = isMobileSimulated || window.innerWidth < 768;
  const dateStr = formatDateYMD(actualDate);
  const dayKey = getDayKeyFromDate(actualDate);

  if (screen2View === 'day') {
    document.getElementById('actualDateLabel').textContent = formatDisplayDate(actualDate);
  } else {
    const week = getWeekDates(actualDate);
    const startStr = `${week[0].date.getFullYear()}年${week[0].date.getMonth() + 1}月${week[0].date.getDate()}日 (${week[0].short})`;
    const endStr = `${week[6].date.getMonth() + 1}月${week[6].date.getDate()}日 (${week[6].short})`;
    document.getElementById('actualDateLabel').textContent = `${startStr} 〜 ${endStr}`;
  }

  if (screen2View === 'day') {
    renderScreen2DayComparison(dateStr, dayKey, isMobile);
  } else {
    renderScreen2WeekSummary(dateStr, isMobile);
  }
  const formula = document.getElementById('formulaBar');
  const fx = document.getElementById('fxCluster');
  const notice = document.getElementById('fxRightNotice');
  if (screen2View === 'day') {
    const dayObj = DAYS.find(item => item.key === dayKey);
    if (fx) fx.style.display = '';
    if (notice) notice.style.display = 'none';
    if (formula) {
      formula.className = '';
      formula.innerHTML = `<span class="font-semibold text-slate-700">［１予定の${dayObj.label}より自動反映］</span><span class="ml-2 font-semibold text-slate-700">［💡予定から実績列へドラッグして実績化］</span>`;
    }
  } else if (fx) {
    fx.style.display = 'none';
  }

  updateScreen2Summary(dateStr, dayKey);
  updateDailyNoteUI(dateStr);
}

// 画面2: 1日予実対比（左に時間、中央に予定、右に実績）
function renderScreen2DayComparison(dateStr, dayKey, isMobile) {
  const container = document.getElementById('gridContainer');
  const timeSlots = getTimeSlots();
  const plannedEvents = weeklySchedules.filter(s => s.day === dayKey);
  const actualEvents = actualRecords.filter(a => a.date === dateStr);

  let html = `
    <table id="screen2Table" class="w-full border-collapse border-spacing-0 table-fixed text-xs">
      <colgroup>
        <col style="width: 58px;">
        <col id="colPlan" style="width: ${screen2SplitPercent}%;">
        <col id="colActual" style="width: ${100 - screen2SplitPercent}%;">
      </colgroup>
      <thead>
        <tr class="bg-slate-100 text-slate-700 border-b border-slate-300 font-bold sticky top-0 z-20 shadow-2xs select-none">
          <th class="w-14 px-1 py-2 text-center border-r border-slate-300 bg-slate-100 font-mono text-slate-500">時間</th>
          <th class="relative px-2 py-2 text-left border-r border-yellow-300" style="background:#fef08a;color:#713f12;">
            <span>【予定】</span>
            <!-- 左右列幅変更用スプリッターハンドル -->
            <div class="absolute right-0 top-0 bottom-0 w-3 cursor-col-resize hover:bg-blue-400/50 active:bg-blue-600 transition-colors z-30 flex items-center justify-center group"
                 onmousedown="startColResize(event)"
                 ondblclick="resetColResize(event)"
                 title="左右にドラッグして列幅を変更（ダブルクリックで予定列を狭く戻す）">
              <div class="w-0.5 h-full bg-slate-300 group-hover:bg-blue-500"></div>
            </div>
          </th>
          <th class="px-3 py-2 text-left border-r border-orange-300" style="background:#fed7aa;color:#9a3412;">
            <span>【実績】</span>
            <button type="button" onclick="clearDayActuals('${dateStr}')" class="text-3xs text-rose-600 hover:text-rose-800 font-normal underline ml-2" title="この日の実績をすべて削除">削除</button>
          </th>
        </tr>
      </thead>
      <tbody>
  `;

  timeSlots.forEach((time, index) => {
    const isHourStart = time.endsWith(':00');
    const rowBg = isHourStart ? 'bg-white' : 'bg-slate-50/40';
    const borderStyle = isHourStart ? 'border-b border-slate-300' : 'border-b border-dashed border-slate-200';

    html += `
      <tr class="${rowBg} ${borderStyle} group">
        <td class="px-1 py-1 text-center font-mono text-slate-500 border-r border-slate-300 select-none ${isHourStart ? 'font-semibold text-slate-700' : 'text-slate-400'}">
          ${time}
        </td>

        <!-- 予定列（画面1から反映・ドラッグして実績列へ持参可能） -->
        <td class="relative p-0 border-r border-slate-300 h-9 transition-colors bg-blue-50/10">
          ${renderPlannedSlotInScreen2(plannedEvents, time, dateStr)}
        </td>

        <!-- 実績列（ドロップ受付 ＆ ドラッグ入力可能） -->
        <td class="relative p-0 border-r border-slate-300 h-9 transition-colors excel-grid-cell hover:bg-emerald-50/30"
            data-col="actual"
            data-index="${index}"
            data-time="${time}"
            onmousedown="handleMouseDownScreen2(event, 'actual', ${index})"
            onmouseenter="handleMouseEnterScreen2('actual', ${index})"
            onmouseup="handleMouseUpScreen2(event, 'actual', ${index})"
            ondragover="handlePlanDragOver(event)"
            ondragenter="handlePlanDragEnter(event, this)"
            ondragleave="handlePlanDragLeave(event, this)"
            ondrop="handlePlanDrop(event, '${time}')">
          ${renderActualSlotInScreen2(actualEvents, time, dateStr)}
        </td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

// 画面2内の「予定」描画（ドラッグして実績へ持っていけるカード）
function renderPlannedSlotInScreen2(dayEvents, slotTime, dateStr) {
  const slotMin = timeToMinutes(slotTime);
  const nextSlotMin = slotMin + timeStep;

  const startingEvents = dayEvents.filter(s => {
    const sMin = timeToMinutes(s.start);
    return sMin >= slotMin && sMin < nextSlotMin;
  });

  if (startingEvents.length === 0) return '';

  return startingEvents.map(event => {
    const tag = COLOR_TAGS[event.color] || COLOR_TAGS.none;
    const sMin = timeToMinutes(event.start);
    const eMin = timeToMinutes(event.end);
    const offsetMin = sMin - slotMin;
    const topOffsetPx = Math.round((offsetMin / timeStep) * 36) + 2;
    const durationMin = Math.max(5, eMin - sMin);
    const heightPx = Math.max(20, Math.round((durationMin / timeStep) * 36) - 4);

    const isNone = event.color === 'none';
    const cardStyle = isNone
      ? 'bg-slate-50 border border-slate-300 text-slate-700'
      : `border-l-4 ${tag.border} ${tag.bg} border-t border-r border-b border-slate-200/90`;

    return `
      <div class="schedule-item absolute inset-x-1 rounded px-2 py-0.5 z-10 ${cardStyle} overflow-hidden shadow-2xs opacity-95 cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-blue-400 transition"
           style="top: ${topOffsetPx}px; height: ${heightPx}px;"
           draggable="true"
           ondragstart="handlePlanDragStart(event, '${event.id}')"
           ondragend="handlePlanDragEnd(event)"
           title="予定: ${event.title} (${event.start}〜${event.end}) ｜ 右の実績列へドラッグして実績化">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-1 truncate">
            <span class="text-3xs text-slate-400 select-none">⋮⋮</span>
            <span class="font-semibold text-slate-800 truncate text-xs leading-tight">${event.title}</span>
          </div>
          <span class="text-3xs px-1.5 py-0.2 rounded ${tag.badge} font-mono shrink-0 ml-1 select-none">${event.start}-${event.end}</span>
        </div>
      </div>
    `;
  }).join('');
}

// 画面2内の「実績」描画（クリックで微調整・削除）
function renderActualSlotInScreen2(actualEvents, slotTime, dateStr) {
  const slotMin = timeToMinutes(slotTime);
  const nextSlotMin = slotMin + timeStep;

  const startingEvents = actualEvents.filter(s => {
    const sMin = timeToMinutes(s.start);
    return sMin >= slotMin && sMin < nextSlotMin;
  });

  if (startingEvents.length === 0) return '';

  return startingEvents.map(event => {
    const tag = COLOR_TAGS[event.color] || COLOR_TAGS.none;
    const sMin = timeToMinutes(event.start);
    const eMin = timeToMinutes(event.end);
    const offsetMin = sMin - slotMin;
    const topOffsetPx = Math.round((offsetMin / timeStep) * 36) + 2;
    const durationMin = Math.max(5, eMin - sMin);
    const heightPx = Math.max(20, Math.round((durationMin / timeStep) * 36) - 4);

    const isNone = event.color === 'none';
    const cardStyle = isNone
      ? 'bg-white border-2 border-slate-400 text-slate-800'
      : `border-l-4 ${tag.border} ${tag.bg} border-t border-r border-b border-slate-300`;

    return `
      <div class="schedule-item absolute inset-x-1 rounded px-2 py-0.5 z-10 ${cardStyle} cursor-pointer overflow-hidden shadow-xs ring-1 ring-emerald-500/20"
           style="top: ${topOffsetPx}px; height: ${heightPx}px;"
           onclick="event.stopPropagation(); openEditActualWindow(event, '${event.id}')"
           title="実績: ${event.title} (${event.start}〜${event.end})">
        <div class="flex items-center justify-between">
          <span class="font-bold text-slate-900 truncate text-xs leading-tight">${event.title}</span>
          <span class="text-3xs px-1.5 py-0.2 rounded bg-emerald-600 text-white font-medium shrink-0 ml-1 font-mono">${event.start}-${event.end}</span>
        </div>
        ${heightPx > 36 && event.memo ? `<p class="text-3xs text-slate-600 truncate mt-0.5 font-medium">💬 ${event.memo}</p>` : ''}
      </div>
    `;
  }).join('');
}

// ==========================================
// 画面2: 1週間実績タイムライン（月〜日 7列マトリクス）
// ==========================================
function renderScreen2WeekSummary(dateStr, isMobile) {
  const container = document.getElementById('gridContainer');
  const timeSlots = getTimeSlots();
  const week = getWeekDates(actualDate);
  const selectedDateYMD = formatDateYMD(actualDate);

  // スマホ表示時
  if (isMobile) {
    renderScreen2WeekMobile(container, week, selectedDateYMD);
    return;
  }

  // PC表示時: 7列マトリクス表
  let html = `
    <table class="w-full border-collapse border-spacing-0 table-fixed text-xs">
      <thead>
        <tr class="bg-slate-100 text-slate-700 border-b border-slate-300 font-bold sticky top-0 z-20 shadow-2xs select-none">
          <th class="w-14 px-1 py-2 text-center border-r border-slate-300 bg-slate-100 font-mono text-slate-500">時間</th>
  `;

  week.forEach(day => {
    const isSelected = day.dateStr === selectedDateYMD;
    const colBg = isSelected ? 'bg-blue-100/70 border-b-2 border-blue-600' : 'bg-slate-50';
    html += `
      <th class="px-2 py-2 text-center border-r border-orange-300 ${colBg}" style="background:#fed7aa;">
        <button type="button" onclick="goToDayComparison('${day.dateStr}')"
                class="inline-flex items-center gap-1 font-bold text-blue-700 underline"
                title="${day.label} ${day.monthDay} を開く">
          <span>${day.short}［${day.monthDay}］</span>
          ${isSelected ? '<span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>' : ''}
        </button>
      </th>
    `;
  });

  html += `
        </tr>
      </thead>
      <tbody>
  `;

  timeSlots.forEach((time, index) => {
    const isHourStart = time.endsWith(':00');
    const rowBg = isHourStart ? 'bg-white' : 'bg-slate-50/40';
    const borderStyle = isHourStart ? 'border-b border-slate-300' : 'border-b border-dashed border-slate-200';

    html += `
      <tr class="${rowBg} ${borderStyle} group">
        <td class="px-1 py-1 text-center font-mono text-slate-500 border-r border-slate-300 select-none ${isHourStart ? 'font-semibold text-slate-700' : 'text-slate-400'}">
          ${time}
        </td>
    `;

    week.forEach(day => {
      const dayActuals = actualRecords.filter(a => a.date === day.dateStr);
      const isSelected = day.dateStr === selectedDateYMD;
      const cellHighlight = isSelected ? 'bg-blue-50/15' : '';

      html += `
        <td class="relative p-0 border-r border-slate-300 h-9 transition-colors excel-grid-cell hover:bg-emerald-50/30 ${cellHighlight}"
            data-col="actual-week"
            data-date="${day.dateStr}"
            data-index="${index}"
            data-time="${time}"
            onmousedown="handleMouseDownScreen2Week(event, '${day.dateStr}', ${index})"
            onmouseenter="handleMouseEnterScreen2Week('${day.dateStr}', ${index})"
            onmouseup="handleMouseUpScreen2Week(event, '${day.dateStr}', ${index})">
          ${renderActualSlotInScreen2(dayActuals, time, day.dateStr)}
        </td>
      `;
    });

    html += `</tr>`;
  });

  html += `
      </tbody>

      <!-- 時間割の各曜日列の真下に枠がつく日記・メモ欄 -->
      <tfoot>
        <tr class="bg-slate-100 border-t-2 border-slate-300">
          <!-- 時間列の真下: タイトル ＆ 全開閉ボタン -->
          <td class="p-1.5 text-center border-r border-slate-300 bg-slate-200/90 align-top select-none">
            <div class="flex flex-col items-center justify-between h-full min-h-[70px]">
              <span class="text-3xs font-bold text-slate-700 flex items-center space-x-0.5">
                <span>📝</span>
                <span>日記/メモ</span>
              </span>
              <button type="button"
                      onclick="toggleAllWeekNoteBoxes()"
                      class="text-4xs px-1.5 py-0.5 rounded border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 font-semibold shadow-2xs mt-2 transition"
                      title="全曜日のメモ枠を一括で開く/閉じる">
                全開閉
              </button>
            </div>
          </td>
  `;

  week.forEach(day => {
    const isOpen = !!weekNoteOpenDays[day.dateStr];
    const noteText = dailyNotes[day.dateStr] || '';
    const isSelected = day.dateStr === selectedDateYMD;
    const cellBg = isSelected ? 'bg-blue-50/70' : 'bg-slate-50/70';

    html += `
      <td class="p-1.5 border-r border-slate-300 align-top ${cellBg} transition">
        <!-- 曜日名 ＆ 開閉トグルボタン -->
        <div class="flex items-center justify-between px-1.5 py-0.5 mb-1 bg-white rounded border border-slate-200 shadow-2xs">
          <span class="text-4xs font-bold ${day.dayObj.color}">${day.short} (${day.monthDay})</span>
          <button type="button"
                  onclick="toggleWeekDayNoteBox('${day.dateStr}')"
                  class="text-4xs px-1.5 py-0.2 rounded ${isOpen ? 'bg-slate-200 text-slate-700 font-bold' : 'bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium'} transition">
            ${isOpen ? '閉じる ▲' : (noteText ? '編集 ▼' : '書く ＋')}
          </button>
        </div>

        <!-- メモ枠（展開時） -->
        ${isOpen ? `
          <div class="space-y-1">
            <textarea oninput="handleWeeklyDayNoteInput('${day.dateStr}', this.value)"
                      rows="4"
                      placeholder="${day.short}曜日の日記・振り返り..."
                      class="w-full border border-slate-300 rounded p-1.5 text-2xs text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs leading-relaxed resize-y font-sans">${escapeHtml(noteText)}</textarea>
            <div class="flex justify-between items-center text-4xs text-slate-400">
              <span id="noteSavedStatus-${day.dateStr}">自動保存</span>
            </div>
          </div>
        ` : (noteText ? `
          <!-- 畳んだ状態（入力済み） -->
          <div onclick="toggleWeekDayNoteBox('${day.dateStr}')"
               class="text-4xs text-slate-700 p-1.5 bg-white rounded border border-slate-200 cursor-pointer hover:bg-blue-50 line-clamp-3 leading-snug font-sans shadow-2xs"
               title="${escapeHtml(noteText)} (クリックして編集)">
            💬 ${escapeHtml(noteText)}
          </div>
        ` : `
          <!-- 畳んだ状態（空） -->
          <div onclick="toggleWeekDayNoteBox('${day.dateStr}')"
               class="text-4xs text-slate-400 py-3 text-center bg-white/70 rounded border border-dashed border-slate-300 cursor-pointer hover:bg-slate-100 hover:text-slate-600 transition">
            ＋ 日記を書く
          </div>
        `)}
      </td>
    `;
  });

  html += `
        </tr>
      </tfoot>
    </table>
  `;

  container.innerHTML = html;
}

// スマホ用: 1週間実績（鳥観ミニマップ）
function renderScreen2WeekMobile(container, week, selectedDateYMD) {
  let html = `
    <div class="p-3 bg-white space-y-3">
      <div class="text-xs font-bold text-slate-700 flex items-center justify-between">
        <span>📱 週間実績（鳥観ミニマップ）</span>
        <span class="text-3xs text-blue-600 font-medium">曜日タップで予定実績へ</span>
      </div>
      <div class="grid grid-cols-7 gap-1 border border-slate-300 rounded-lg p-2 bg-slate-50">
  `;

  week.forEach(day => {
    const dayActuals = actualRecords.filter(a => a.date === day.dateStr);
    let dayTotalMin = 0;
    dayActuals.forEach(a => dayTotalMin += (timeToMinutes(a.end) - timeToMinutes(a.start)));
    const dayHours = (dayTotalMin / 60).toFixed(1);
    const isSelected = day.dateStr === selectedDateYMD;

    html += `
      <div onclick="goToDayComparison('${day.dateStr}')"
           class="bg-white rounded border ${isSelected ? 'border-blue-500 ring-2 ring-blue-300' : 'border-slate-200'} p-1 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition min-h-[160px]">
        <span class="text-xs font-bold ${day.dayObj.color}">${day.short}</span>
        <span class="text-4xs text-slate-400 font-mono">${day.monthDay}</span>
        <span class="text-3xs font-semibold text-emerald-700 font-mono mt-1">${dayHours}h</span>
        <div class="w-full flex-1 mt-1.5 space-y-1 overflow-hidden flex flex-col justify-start">
    `;

    dayActuals.forEach(act => {
      const tag = COLOR_TAGS[act.color] || COLOR_TAGS.none;
      html += `
        <div class="w-full h-3 rounded-2xs text-4xs truncate px-0.5 text-white flex items-center justify-center font-bold"
             style="background-color: ${tag.hex}; color: ${act.color === 'none' || tag.hex === '#ffffff' ? '#333' : '#fff'};"
             title="${act.title} (${act.start}-${act.end})">
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;
  container.innerHTML = html;
}

// 画面2 週間表示でのドラッグ登録
let dragWeekDate = null;

function handleMouseDownScreen2Week(e, dateStr, index) {
  if (e.target.closest('.schedule-item')) return;
  isMouseDown = true;
  dragWeekDate = dateStr;
  dragStartIndex = index;
  dragCurrentIndex = index;
  highlightDragRangeScreen2Week();
}

function handleMouseEnterScreen2Week(dateStr, index) {
  if (!isMouseDown) return;
  if (dateStr !== dragWeekDate) return;
  dragCurrentIndex = index;
  highlightDragRangeScreen2Week();
}

function handleMouseUpScreen2Week(e, dateStr, index) {
  if (!isMouseDown) return;
  isMouseDown = false;

  const minIdx = Math.min(dragStartIndex, dragCurrentIndex);
  const maxIdx = Math.max(dragStartIndex, dragCurrentIndex);
  const timeSlots = getTimeSlots();

  const startTime = timeSlots[minIdx];
  const endMin = timeToMinutes(timeSlots[maxIdx]) + timeStep;
  const endTime = minutesToTime(endMin);

  const targetCell = e.currentTarget || e.target.closest('.excel-grid-cell');
  const rect = targetCell.getBoundingClientRect();

  const [y, m, d] = dateStr.split('-').map(Number);
  actualDate = new Date(y, m - 1, d);
  openAddActualWindow(rect, startTime, endTime);

  clearDragHighlight();
}

function highlightDragRangeScreen2Week() {
  clearDragHighlight();
  if (!isMouseDown || !dragWeekDate) return;
  const minIdx = Math.min(dragStartIndex, dragCurrentIndex);
  const maxIdx = Math.max(dragStartIndex, dragCurrentIndex);

  const cells = document.querySelectorAll(`.excel-grid-cell[data-date="${dragWeekDate}"]`);
  cells.forEach(cell => {
    const idx = parseInt(cell.dataset.index, 10);
    if (idx >= minIdx && idx <= maxIdx) {
      cell.classList.add('excel-cell-dragging');
    }
  });
}

// 画面2のドラッグ＆ドロップ
function handleMouseDownScreen2(e, colKey, index) {
  if (e.target.closest('.schedule-item')) return;
  isMouseDown = true;
  dragColKey = colKey;
  dragStartIndex = index;
  dragCurrentIndex = index;
  highlightDragRangeScreen2();
}

function handleMouseEnterScreen2(colKey, index) {
  if (!isMouseDown) return;
  if (colKey !== dragColKey) return;
  dragCurrentIndex = index;
  highlightDragRangeScreen2();
}

function handleMouseUpScreen2(e, colKey, index) {
  if (!isMouseDown) return;
  isMouseDown = false;

  const minIdx = Math.min(dragStartIndex, dragCurrentIndex);
  const maxIdx = Math.max(dragStartIndex, dragCurrentIndex);
  const timeSlots = getTimeSlots();

  const startTime = timeSlots[minIdx];
  const endMin = timeToMinutes(timeSlots[maxIdx]) + timeStep;
  const endTime = minutesToTime(endMin);

  const targetCell = e.currentTarget || e.target.closest('.excel-grid-cell');
  const rect = targetCell.getBoundingClientRect();
  openAddActualWindow(rect, startTime, endTime);

  clearDragHighlight();
}

function highlightDragRangeScreen2() {
  clearDragHighlight();
  if (!isMouseDown) return;
  const minIdx = Math.min(dragStartIndex, dragCurrentIndex);
  const maxIdx = Math.max(dragStartIndex, dragCurrentIndex);

  const cells = document.querySelectorAll(`.excel-grid-cell[data-col="${dragColKey}"]`);
  cells.forEach(cell => {
    const idx = parseInt(cell.dataset.index, 10);
    if (idx >= minIdx && idx <= maxIdx) {
      cell.classList.add('excel-cell-dragging');
    }
  });
}

// 実績追加ウィンドウ
function openAddActualWindow(rect, startTime, endTime) {
  const mini = document.getElementById('miniWindow');
  document.getElementById('miniForm').reset();

  document.getElementById('miniWindowTitle').textContent = '実績を記録';
  document.getElementById('miniScheduleId').value = '';
  document.getElementById('miniTargetCol').value = 'actual';
  document.getElementById('miniDayLabel').textContent = `${formatDisplayDate(actualDate)} [実績]`;

  selectColor('blue');
  document.getElementById('miniDeleteBtn').classList.add('hidden');
  document.getElementById('miniCopyBtn').classList.add('hidden');
  setMiniTimes(startTime, endTime);

  positionMiniWindow(rect);
  setTimeout(() => document.getElementById('miniTitle').focus(), 50);
}

function openEditActualWindow(e, id) {
  const event = actualRecords.find(a => a.id === id);
  if (!event) return;

  setMiniTimes(event.start, event.end);

  const rect = e.currentTarget.getBoundingClientRect();
  document.getElementById('miniWindowTitle').textContent = '実績の変更';
  document.getElementById('miniScheduleId').value = event.id;
  document.getElementById('miniTargetCol').value = 'actual';
  document.getElementById('miniDayLabel').textContent = `${formatDisplayDate(actualDate)} [実績]`;

  document.getElementById('miniTitle').value = event.title;
  document.getElementById('miniMemo').value = event.memo || '';

  selectColor(event.color || 'none');

  document.getElementById('miniDeleteBtn').classList.remove('hidden');
  document.getElementById('miniCopyBtn').classList.add('hidden');

  positionMiniWindow(rect);
}

// 画面2フッターサマリー更新（予定時間 vs 実績時間 または 週間実績合計）
function updateScreen2Summary(dateStr, dayKey) {
  if (screen2View === 'day') {
    const plannedList = weeklySchedules.filter(s => s.day === dayKey);
    const actualList = actualRecords.filter(a => a.date === dateStr);

    let planMin = 0;
    plannedList.forEach(p => planMin += (timeToMinutes(p.end) - timeToMinutes(p.start)));
    let actMin = 0;
    actualList.forEach(a => actMin += (timeToMinutes(a.end) - timeToMinutes(a.start)));

    const planHours = (planMin / 60).toFixed(1);
    const actHours = (actMin / 60).toFixed(1);
    const diffMin = actMin - planMin;
    const diffSign = diffMin > 0 ? `+${(diffMin/60).toFixed(1)}h` : diffMin < 0 ? `-${(Math.abs(diffMin)/60).toFixed(1)}h` : '±0h';

    document.getElementById('footerStatusText').textContent = '予実トラッキング中';
    document.getElementById('footerStat1').innerHTML = `予定: <strong class="text-blue-700 font-mono">${planHours}h</strong> (${plannedList.length}件)`;
    document.getElementById('footerStat2').innerHTML = `実績: <strong class="text-emerald-700 font-mono">${actHours}h</strong> (${actualList.length}件) ｜ 差分: <span class="font-bold ${diffMin >= 0 ? 'text-slate-700' : 'text-amber-600'}">${diffSign}</span>`;
  } else {
    const week = getWeekDates(actualDate);
    const weekDates = week.map(w => w.dateStr);
    const weekActuals = actualRecords.filter(a => weekDates.includes(a.date));

    let totalMin = 0;
    weekActuals.forEach(a => totalMin += (timeToMinutes(a.end) - timeToMinutes(a.start)));
    const totalHours = (totalMin / 60).toFixed(1);

    document.getElementById('footerStatusText').textContent = '1週間実績表示中';
    document.getElementById('footerStat1').innerHTML = `週の実績合計: <strong class="text-emerald-700 font-mono">${totalHours}h</strong> (${weekActuals.length}件)`;
    document.getElementById('footerStat2').innerHTML = `📅 曜日をクリックすると各日の1日予実対比へ切り替わります`;
  }
}

// ==========================================
// 画面2: 予定ブロックのドラッグ＆ドロップ（実績化）
// ==========================================
function handlePlanDragStart(e, planId) {
  draggedPlanId = planId;
  e.dataTransfer.setData('text/plain', planId);
  e.dataTransfer.effectAllowed = 'copy';
}

function handlePlanDragEnd(e) {
  draggedPlanId = null;
  document.querySelectorAll('.excel-grid-cell').forEach(cell => {
    cell.classList.remove('bg-emerald-100', 'ring-2', 'ring-emerald-400');
  });
}

function handlePlanDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
}

function handlePlanDragEnter(e, cell) {
  e.preventDefault();
  cell.classList.add('bg-emerald-100', 'ring-2', 'ring-emerald-400');
}

function handlePlanDragLeave(e, cell) {
  cell.classList.remove('bg-emerald-100', 'ring-2', 'ring-emerald-400');
}

function handlePlanDrop(e, dropTime) {
  e.preventDefault();
  e.currentTarget.classList.remove('bg-emerald-100', 'ring-2', 'ring-emerald-400');

  const planId = draggedPlanId || e.dataTransfer.getData('text/plain');
  if (!planId) return;

  const plan = weeklySchedules.find(p => p.id === planId);
  if (!plan) return;

  // 予定の所要時間（分）を計算
  const pStartMin = timeToMinutes(plan.start);
  const pEndMin = timeToMinutes(plan.end);
  const durationMin = Math.max(5, pEndMin - pStartMin);

  // ドロップされた時刻を開始時刻にして終了時刻を算出
  const dStartMin = timeToMinutes(dropTime);
  let dEndMin = dStartMin + durationMin;
  if (dEndMin > 24 * 60) dEndMin = 24 * 60;

  const newStart = minutesToTime(dStartMin);
  const newEnd = minutesToTime(dEndMin);
  const dateStr = formatDateYMD(actualDate);

  // 実績レコードに追加
  actualRecords.push({
    id: 'act-' + Date.now().toString(),
    date: dateStr,
    start: newStart,
    end: newEnd,
    title: plan.title,
    color: plan.color,
    memo: plan.memo || ''
  });

  draggedPlanId = null;
  render();
}

// ==========================================
// 画面2: 予定・実績列の境界線リサイズ（スプリッター）
// ==========================================
function startColResize(e) {
  e.preventDefault();
  isResizingCol = true;
  resizeStartX = e.clientX;
  resizeStartPercent = screen2SplitPercent;

  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';

  window.addEventListener('mousemove', handleColResizeMove);
  window.addEventListener('mouseup', handleColResizeUp);
}

function handleColResizeMove(e) {
  if (!isResizingCol) return;
  const table = document.getElementById('screen2Table');
  if (!table) return;

  const rect = table.getBoundingClientRect();
  const availableWidth = rect.width - 58; // 時間列の幅を除く
  if (availableWidth <= 0) return;

  const mouseOffsetInTable = e.clientX - rect.left - 58;
  let newPercent = (mouseOffsetInTable / availableWidth) * 100;

  newPercent = Math.max(12, Math.min(80, newPercent));
  screen2SplitPercent = Math.round(newPercent);

  const colPlan = document.getElementById('colPlan');
  const colActual = document.getElementById('colActual');
  if (colPlan && colActual) {
    colPlan.style.width = `${screen2SplitPercent}%`;
    colActual.style.width = `${100 - screen2SplitPercent}%`;
  }
}

function handleColResizeUp() {
  if (!isResizingCol) return;
  isResizingCol = false;
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
  window.removeEventListener('mousemove', handleColResizeMove);
  window.removeEventListener('mouseup', handleColResizeUp);
  persistState();
}

function resetColResize(e) {
  e.stopPropagation();
  screen2SplitPercent = 14;
  const colPlan = document.getElementById('colPlan');
  const colActual = document.getElementById('colActual');
  if (colPlan && colActual) {
    colPlan.style.width = '14%';
    colActual.style.width = '86%';
  }
  persistState();
}

// ==========================================
// 画面2: 1日のメモ・簡易日記
// ==========================================
function handleDailyNoteInput(val) {
  const dateStr = formatDateYMD(actualDate);
  dailyNotes[dateStr] = val;

  persistState();
  const statusEl = document.getElementById('dailyNoteStatus');
  if (statusEl) {
    statusEl.textContent = '保存中...';
    clearTimeout(window._dailyNoteSaveTimer);
    window._dailyNoteSaveTimer = setTimeout(() => {
      statusEl.textContent = '自動保存済み';
    }, 400);
  }
}

function updateDailyNoteUI(dateStr) {
  const section = document.getElementById('dailyNoteSection');
  if (!section) return;

  // 1日表示時のみテーブル下の単日メモ欄を表示（1週間表示時は時間割の各列真下に枠がつくため非表示）
  if (currentScreen === 'screen2' && screen2View === 'day') {
    section.classList.remove('hidden');
    const badge = document.getElementById('dailyNoteDateBadge');
    if (badge) badge.textContent = formatDisplayDate(actualDate);

    const textarea = document.getElementById('dailyNoteTextarea');
    if (textarea) {
      const currentYMD = dateStr || formatDateYMD(actualDate);
      textarea.value = dailyNotes[currentYMD] || '';
    }
  } else {
    section.classList.add('hidden');
  }
}

// 1週間表示時の各曜日メモ入力
function handleWeeklyDayNoteInput(dateStr, val) {
  dailyNotes[dateStr] = val;
  const statusEl = document.getElementById(`noteSavedStatus-${dateStr}`);
  persistState();
  if (statusEl) {
    statusEl.textContent = '保存中...';
    clearTimeout(window._weeklyNoteSaveTimer);
    window._weeklyNoteSaveTimer = setTimeout(() => {
      statusEl.textContent = '自動保存済み';
    }, 350);
  }
}

// 1週間表示: 各曜日のメモ枠の開閉トグル
function toggleWeekDayNoteBox(dateStr) {
  weekNoteOpenDays[dateStr] = !weekNoteOpenDays[dateStr];
  render();
}

// 1週間表示: 全曜日のメモ枠を一括で開く／閉じる
function toggleAllWeekNoteBoxes() {
  const week = getWeekDates(actualDate);
  const allOpen = week.every(day => !!weekNoteOpenDays[day.dateStr]);
  week.forEach(day => {
    weekNoteOpenDays[day.dateStr] = !allOpen;
  });
  render();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function toggleDailyNoteCollapse() {
  isDailyNoteCollapsed = !isDailyNoteCollapsed;
  const body = document.getElementById('dailyNoteBody');
  const txt = document.getElementById('dailyNoteToggleText');
  if (isDailyNoteCollapsed) {
    body.classList.add('hidden');
    txt.textContent = '開く';
  } else {
    body.classList.remove('hidden');
    txt.textContent = '折りたたむ';
  }
}

function toggleDeviceSimulation() {
  isMobileSimulated = !isMobileSimulated;
  const container = document.getElementById('appContainer');
  const simText = document.getElementById('simText');
  const simIcon = document.getElementById('simIcon');
  if (isMobileSimulated) {
    if (container) container.style.maxWidth = '420px';
    if (simText) simText.textContent = 'PC表示に戻す';
    if (simIcon) simIcon.textContent = '💻';
  } else {
    if (container) container.style.maxWidth = '';
    mobileZoomDay = null;
    if (simText) simText.textContent = 'スマホ表示で確認';
    if (simIcon) simIcon.textContent = '📱';
  }
  render();
}

function enterMobileZoom(dayKey) {
  mobileZoomDay = dayKey;
  selectedDayForDayView = dayKey;
  render();
}

function exitMobileZoom() {
  mobileZoomDay = null;
  render();
}

// ==========================================
// 画面1のレンダリング（既存コード）
// ==========================================
function renderScreen1() {
  const isMobile = isMobileSimulated || window.innerWidth < 768;
  const mobileBackWrap = document.getElementById('mobileBackWrap');
  const desktopTabs = document.getElementById('desktopViewTabs');

  const zoomingWeek = isMobile && currentView !== 'day' && mobileZoomDay;
  if (zoomingWeek) {
    mobileBackWrap.classList.remove('hidden');
    mobileBackWrap.classList.add('flex');
    desktopTabs.classList.add('hidden');
    const dayObj = DAYS.find(d => d.key === mobileZoomDay);
    document.getElementById('mobileCurrentDayLabel').textContent = `${dayObj.label}を編集中`;
  } else {
    mobileBackWrap.classList.add('hidden');
    mobileBackWrap.classList.remove('flex');
    desktopTabs.classList.remove('hidden');
  }

  if (currentView === 'day') {
    renderDesktopDayView();
  } else if (isMobile) {
    if (mobileZoomDay) {
      renderMobileZoomDayView(mobileZoomDay);
    } else {
      renderMobileOverview();
    }
  } else {
    renderDesktopWeekView();
  }

  updateSummary();
  mountTimeControls();
  mountPresetMenu();
  updateSavePresetButton();
  renderPatternDropdownList();
}

function detachPresetMenu() {
  const wrap = document.getElementById('patternDropdownWrap');
  const park = document.getElementById('patternMenuPark');
  if (wrap && park && wrap.parentElement !== park) park.appendChild(wrap);
}

function mountPresetMenu() {
  const slot = document.getElementById('presetMenuSlot');
  const wrap = document.getElementById('patternDropdownWrap');
  if (slot && wrap) slot.appendChild(wrap);
}

function detachTimeControls() {
  const controls = document.getElementById('timeGridControls');
  const park = document.getElementById('timeGridPark');
  if (controls && park && controls.parentElement !== park) park.appendChild(controls);
}

function mountTimeControls() {
  const slot = document.getElementById('timeGridSlot');
  const controls = document.getElementById('timeGridControls');
  if (slot && controls) slot.appendChild(controls);
}

function positionPatternMenu() {
  const menu = document.getElementById('patternDropdown');
  const anchor = patternMenuAnchor || document.querySelector('#patternDropdownWrap button');
  if (!menu || !anchor) return;
  const rect = anchor.getBoundingClientRect();
  const width = 320;
  menu.style.position = 'fixed';
  menu.style.top = `${rect.bottom + 4}px`;
  menu.style.left = `${Math.max(8, Math.min(rect.left, window.innerWidth - width - 8))}px`;
  menu.style.right = 'auto';
  menu.style.zIndex = '80';
}

// ミニウィンドウ保存処理（画面1・画面2共通対応）
function saveFromMiniWindow(e) {
  e.preventDefault();
  const id = document.getElementById('miniScheduleId').value;
  const title = document.getElementById('miniTitle').value.trim();
  const start = parseClockInput(document.getElementById('miniStartInput').value);
  const end = parseClockInput(document.getElementById('miniEndInput').value);
  if (!start || !end) {
    alert('時刻は 9:30 または 0930 のように入力してください。');
    return;
  }
  const color = document.getElementById('miniColorInput').value;
  const memo = document.getElementById('miniMemo').value.trim();
  const targetCol = document.getElementById('miniTargetCol').value;

  if (timeToMinutes(end) <= timeToMinutes(start)) {
    alert('終了時間は開始時間より後に設定してください。');
    return;
  }

  if (currentScreen === 'screen2' || targetCol === 'actual') {
    // 画面2（実績データ）の更新
    const dateStr = formatDateYMD(actualDate);
    if (id) {
      const target = actualRecords.find(a => a.id === id);
      if (target) {
        target.title = title; target.start = start; target.end = end;
        target.color = color; target.memo = memo;
      }
    } else {
      actualRecords.push({
        id: 'act-' + Date.now().toString(),
        date: dateStr,
        start, end, title, color, memo
      });
    }
  } else {
    // 画面1（週間マスター）の更新
    const day = document.getElementById('miniDayKey').value;
    if (day === DRAFT_DAY_KEY) {
      if (id) {
        const target = dayPresetDraft.find(s => s.id === id);
        if (target) {
          target.title = title; target.start = start; target.end = end;
          target.color = color; target.memo = memo;
        }
      } else {
        dayPresetDraft.push(makeDraftBlock({ start, end, title, color, memo }));
      }
    } else if (id) {
      const target = weeklySchedules.find(s => s.id === id);
      if (target) {
        target.title = title; target.start = start; target.end = end;
        target.color = color; target.memo = memo;
      }
    } else {
      weeklySchedules.push({
        id: Date.now().toString(),
        day, start, end, title, color, memo
      });
    }
  }

  closeMiniWindow();
  render();
}

function clearDayActuals(dateStr) {
  if (!actualRecords.some(item => item.date === dateStr)) return;
  const [year, month, day] = dateStr.split('-').map(Number);
  const label = formatDisplayDate(new Date(year, month - 1, day));
  if (!confirm(`${label}の実績をすべて消します。`)) return;
  actualRecords = actualRecords.filter(item => item.date !== dateStr);
  render();
}

function deleteFromMiniWindow() {
  const id = document.getElementById('miniScheduleId').value;
  if (!id) return;

  if (currentScreen === 'screen2') {
    actualRecords = actualRecords.filter(a => a.id !== id);
  } else if (dayPresetDraft.some(item => item.id === id)) {
    dayPresetDraft = dayPresetDraft.filter(item => item.id !== id);
  } else {
    weeklySchedules = weeklySchedules.filter(s => s.id !== id);
  }
  closeMiniWindow();
  render();
}

// 画面1用サマリー更新
function updateSummary() {
  if (currentScreen !== 'screen1') return;
  if (currentView === 'day') {
    let totalMinutes = 0;
    dayPresetDraft.forEach(s => totalMinutes += (timeToMinutes(s.end) - timeToMinutes(s.start)));
    const hours = (totalMinutes / 60).toFixed(1);
    document.getElementById('footerStatusText').textContent = '単日プリセット';
    document.getElementById('footerStat1').innerHTML = `登録: <strong class="text-slate-700">${dayPresetDraft.length}件</strong>`;
    document.getElementById('footerStat2').innerHTML = `合計: <strong class="text-slate-700">${hours}h</strong>`;
    return;
  }
  let totalMinutes = 0;
  weeklySchedules.forEach(s => totalMinutes += (timeToMinutes(s.end) - timeToMinutes(s.start)));
  const hours = (totalMinutes / 60).toFixed(1);
  document.getElementById('footerStatusText').textContent = 'マスター準備完了';
  document.getElementById('footerStat1').innerHTML = `登録: <strong class="text-slate-700">${weeklySchedules.length}件</strong>`;
  document.getElementById('footerStat2').innerHTML = `週間合計: <strong class="text-slate-700">${hours}h</strong>`;
}

// --- 既存の画面1用描画関数群 ---
function renderMobileOverview() {
  const container = document.getElementById('gridContainer');
  const timeSlots = getTimeSlots();

  let html = `
    <div class="bg-blue-50/70 border-b border-blue-200 px-3 py-1.5 flex items-center gap-2 flex-wrap text-2xs text-blue-900">
      <div id="timeGridSlot"></div>
      ${newBlankButtonHtml()}
      ${savePresetButtonHtml()}
      <div id="presetMenuSlot"></div>
      <span class="font-bold">📱 週間全体マップ</span>
      <span class="text-3xs text-blue-600">※ 曜日をタップして拡大・編集</span>
    </div>
    <table class="w-full border-collapse border-spacing-0 table-fixed text-3xs">
      <thead>
        <tr class="bg-slate-100 text-slate-700 border-b border-slate-300 font-bold sticky top-0 z-20 shadow-2xs">
          <th class="w-9 px-0.5 py-2 text-center border-r border-slate-300 font-mono text-slate-500">時</th>
  `;

  DAYS.forEach(day => {
    html += `
      <th class="p-1 text-center border-r border-slate-300 ${day.bg} cursor-pointer hover:bg-blue-100 transition"
          onclick="enterMobileZoom('${day.key}')" title="${day.label}を編集">
        <div class="${day.color} flex flex-col items-center">
          <span class="font-bold text-2xs">${day.short}</span>
          <span class="text-4xs text-blue-600 bg-white/80 px-1 rounded shadow-2xs mt-0.5">編集</span>
        </div>
      </th>
    `;
  });

  html += `</tr></thead><tbody>`;

  timeSlots.forEach((time) => {
    const isHourStart = time.endsWith(':00');
    const rowBg = isHourStart ? 'bg-white' : 'bg-slate-50/40';
    const borderStyle = isHourStart ? 'border-b border-slate-300' : 'border-b border-dashed border-slate-200';
    const hourOnly = time.split(':')[0];

    html += `
      <tr class="${rowBg} ${borderStyle}">
        <td class="px-0.5 py-1 text-center font-mono text-slate-500 border-r border-slate-300 select-none ${isHourStart ? 'font-bold text-slate-700' : 'text-slate-300'}">
          ${isHourStart ? hourOnly : ''}
        </td>
    `;

    DAYS.forEach(day => {
      const dayEvents = weeklySchedules.filter(s => s.day === day.key);
      html += `
        <td class="relative p-0 border-r border-slate-300 h-7 cursor-pointer hover:bg-sky-50 transition"
            onclick="enterMobileZoom('${day.key}')">
          ${renderMiniBarForSlot(dayEvents, time)}
        </td>
      `;
    });

    html += `</tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
  document.getElementById('formulaBar').innerHTML = `
    <span class="text-blue-600 font-semibold">[スマホ全体表示]</span> 曜日（列）をタップすると、その曜日が全画面で拡大され、指で編集できます
  `;
}

function renderMiniBarForSlot(dayEvents, slotTime) {
  const slotMin = timeToMinutes(slotTime);
  const nextSlotMin = slotMin + timeStep;
  const startingEvents = dayEvents.filter(s => {
    const sMin = timeToMinutes(s.start);
    return sMin >= slotMin && sMin < nextSlotMin;
  });
  if (startingEvents.length === 0) return '';

  return startingEvents.map(event => {
    const tag = COLOR_TAGS[event.color] || COLOR_TAGS.none;
    const sMin = timeToMinutes(event.start);
    const eMin = timeToMinutes(event.end);
    const durationMin = Math.max(5, eMin - sMin);
    const heightPx = Math.max(14, Math.round((durationMin / timeStep) * 28) - 2);
    const isNone = event.color === 'none';
    const bgClass = isNone ? 'bg-slate-200 border border-slate-300' : tag.badge;

    return `
      <div class="absolute inset-x-0.5 top-0.5 rounded-sm ${bgClass} shadow-2xs z-10 flex items-center justify-center overflow-hidden"
           style="height: ${heightPx}px;" title="${event.title}">
        <span class="text-4xs truncate font-bold text-slate-800 scale-90">${event.title}</span>
      </div>
    `;
  }).join('');
}

function renderMobileZoomDayView(dayKey) {
  const container = document.getElementById('gridContainer');
  const timeSlots = getTimeSlots();
  const currentDayObj = DAYS.find(d => d.key === dayKey) || DAYS[0];
  const dayEvents = weeklySchedules.filter(s => s.day === currentDayObj.key);

  let html = `
    <div class="bg-slate-50 border-b border-slate-200 p-2 flex items-center justify-start">
      <div class="flex items-center gap-1 shrink-0">
        <div id="timeGridSlot"></div>
        ${newBlankButtonHtml()}
        ${savePresetButtonHtml()}
        <div id="presetMenuSlot"></div>
        <button onclick="applyPatternToDay('${currentDayObj.key}', event)" class="px-2 py-1 bg-white border border-slate-300 rounded text-3xs font-semibold text-blue-700 shrink-0">
          プリセット流込
        </button>
      </div>
    </div>

    <table class="w-full border-collapse border-spacing-0 table-fixed text-xs">
      <thead>
        <tr class="bg-slate-100 text-slate-700 border-b border-slate-300 font-semibold sticky top-0 z-20 shadow-2xs">
          <th class="w-16 px-1 py-2 text-center border-r border-slate-300 bg-slate-100 font-mono">時間</th>
          <th class="px-3 py-2 text-left border-r border-slate-300 bg-slate-50">
            <span class="font-bold text-slate-800">時間割</span>
            <span class="text-3xs text-slate-400 ml-1">（ドラッグで予定作成）</span>
          </th>
        </tr>
      </thead>
      <tbody>
  `;

  timeSlots.forEach((time, index) => {
    const isHourStart = time.endsWith(':00');
    const rowBg = isHourStart ? 'bg-white' : 'bg-slate-50/40';
    const borderStyle = isHourStart ? 'border-b border-slate-300' : 'border-b border-dashed border-slate-200';

    html += `
      <tr class="${rowBg} ${borderStyle} group">
        <td class="px-1 py-1 text-center font-mono text-slate-500 border-r border-slate-300 select-none ${isHourStart ? 'font-semibold text-slate-700' : 'text-slate-400'}">
          ${time}
        </td>
        <td class="relative p-0 border-r border-slate-300 h-9 transition-colors excel-grid-cell"
            data-day="${currentDayObj.key}"
            data-index="${index}"
            data-time="${time}"
            onmousedown="handleMouseDown(event, '${currentDayObj.key}', ${index})"
            onmouseenter="handleMouseEnter('${currentDayObj.key}', ${index})"
            onmouseup="handleMouseUp(event, '${currentDayObj.key}', ${index})">
          ${renderScheduleForSlot(dayEvents, time, currentDayObj.key)}
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
  document.getElementById('formulaBar').innerHTML = `
    <span class="text-blue-600 font-semibold">[${currentDayObj.label} 拡大編集]</span> 空き枠をドラッグして予定を追加、既存予定をタップして編集
  `;
}

function renderDesktopWeekView() {
  const container = document.getElementById('gridContainer');
  const timeSlots = getTimeSlots();

  let html = `
    <div class="flex justify-start items-center gap-2 px-3 py-2 border-b border-slate-200 bg-white">
      <div id="timeGridSlot"></div>
      ${newBlankButtonHtml()}
      ${savePresetButtonHtml()}
      <div id="presetMenuSlot"></div>
    </div>
    <table class="w-full border-collapse border-spacing-0 table-fixed text-xs">
      <thead>
        <tr class="bg-slate-100 text-slate-700 border-b border-slate-300 font-semibold sticky top-0 z-20 shadow-2xs">
          <th class="w-16 px-1 py-2 text-center border-r border-slate-300 bg-slate-100 font-mono">時間</th>
  `;

  DAYS.forEach(day => {
    html += `
      <th class="px-2 py-2 text-center border-r border-yellow-300" style="background:#fef08a;">
        <div class="${day.color} flex items-center justify-center space-x-1">
          <span class="font-bold text-xs">${day.label}</span>
          <button type="button" onclick="applyPatternToDay('${day.key}', event)" class="text-3xs text-slate-400 hover:text-blue-600 font-normal underline ml-1" title="この曜日に1日プリセットを読み込む">
            読込
          </button>
          <button type="button" onclick="clearWeekdaySchedule('${day.key}', event)" class="text-3xs text-rose-500 hover:text-rose-700 font-normal underline" title="${day.label}の予定をすべて削除">
            削除
          </button>
        </div>
      </th>
    `;
  });

  html += `</tr></thead><tbody>`;

  timeSlots.forEach((time, index) => {
    const isHourStart = time.endsWith(':00');
    const rowBg = isHourStart ? 'bg-white' : 'bg-slate-50/40';
    const borderStyle = isHourStart ? 'border-b border-slate-300' : 'border-b border-dashed border-slate-200';

    html += `
      <tr class="${rowBg} ${borderStyle} group">
        <td class="px-1 py-1 text-center font-mono text-slate-500 border-r border-slate-300 select-none ${isHourStart ? 'font-semibold text-slate-700' : 'text-slate-400'}">
          ${time}
        </td>
    `;

    DAYS.forEach(day => {
      const dayEvents = weeklySchedules.filter(s => s.day === day.key);
      html += `
        <td class="relative p-0 border-r border-slate-300 h-9 transition-colors excel-grid-cell"
            data-day="${day.key}"
            data-index="${index}"
            data-time="${time}"
            onmousedown="handleMouseDown(event, '${day.key}', ${index})"
            onmouseenter="handleMouseEnter('${day.key}', ${index})"
            onmouseup="handleMouseUp(event, '${day.key}', ${index})"
            ondragover="handleWeekBlockDragOver(event)"
            ondrop="handleWeekBlockDrop(event, '${day.key}')">
          ${renderScheduleForSlot(dayEvents, time, day.key, true)}
        </td>
      `;
    });

    html += `</tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
  document.getElementById('formulaBar').textContent = '空き枠はドラッグで予定を作成';
}

function renderDesktopDayView() {
  const container = document.getElementById('gridContainer');
  const timeSlots = getTimeSlots();
  const dayEvents = dayPresetDraft;

  let html = `
    <div class="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-start gap-2">
      <div id="timeGridSlot"></div>
      ${newBlankButtonHtml()}
      ${savePresetButtonHtml()}
      <div id="presetMenuSlot"></div>
    </div>

    <table class="w-full border-collapse border-spacing-0 table-fixed text-xs">
      <thead>
        <tr class="bg-slate-100 text-slate-700 border-b border-slate-300 font-semibold sticky top-0 z-20 shadow-2xs">
          <th class="w-20 px-2 py-2 text-center border-r border-slate-300 bg-slate-100 font-mono">時間</th>
          <th class="px-4 py-2 text-left border-r border-slate-300 bg-slate-50">
            <span>単日プリセット</span>
          </th>
        </tr>
      </thead>
      <tbody>
  `;

  timeSlots.forEach((time, index) => {
    const isHourStart = time.endsWith(':00');
    const rowBg = isHourStart ? 'bg-white' : 'bg-slate-50/40';
    const borderStyle = isHourStart ? 'border-b border-slate-300' : 'border-b border-dashed border-slate-200';

    html += `
      <tr class="${rowBg} ${borderStyle} group">
        <td class="px-2 py-1 text-center font-mono text-slate-500 border-r border-slate-300 select-none ${isHourStart ? 'font-semibold text-slate-700' : 'text-slate-400'}">
          ${time}
        </td>
        <td class="relative p-0 border-r border-slate-300 h-9 transition-colors excel-grid-cell"
            data-day="${DRAFT_DAY_KEY}"
            data-index="${index}"
            data-time="${time}"
            onmousedown="handleMouseDown(event, '${DRAFT_DAY_KEY}', ${index})"
            onmouseenter="handleMouseEnter('${DRAFT_DAY_KEY}', ${index})"
            onmouseup="handleMouseUp(event, '${DRAFT_DAY_KEY}', ${index})">
          ${renderScheduleForSlot(dayEvents, time, DRAFT_DAY_KEY)}
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
  document.getElementById('formulaBar').textContent = '空き枠はドラッグで予定を作成';
}

function switchView(view) {
  currentView = view === 'day' ? 'day' : 'week';
  if (currentView === 'day') mobileZoomDay = null;
  const weekBtn = document.getElementById('viewWeekBtn');
  const dayBtn = document.getElementById('viewDayBtn');
  const active = 'px-3 py-1 text-xs font-semibold rounded text-white bg-blue-600 transition shadow-2xs';
  const idle = 'px-3 py-1 text-xs font-medium rounded text-slate-600 hover:text-slate-900 transition';
  if (currentView === 'day') {
    if (weekBtn) weekBtn.className = idle;
    if (dayBtn) dayBtn.className = active;
  } else {
    if (weekBtn) weekBtn.className = active;
    if (dayBtn) dayBtn.className = idle;
  }
  updateSavePresetButton();
  render();
}

function renderScheduleForSlot(dayEvents, slotTime, dayKey, movable) {
  const slotMin = timeToMinutes(slotTime);
  const nextSlotMin = slotMin + timeStep;
  const startingEvents = dayEvents.filter(s => {
    const sMin = timeToMinutes(s.start);
    return sMin >= slotMin && sMin < nextSlotMin;
  });
  if (startingEvents.length === 0) return '';

  return startingEvents.map(event => {
    const tag = COLOR_TAGS[event.color] || COLOR_TAGS.none;
    const sMin = timeToMinutes(event.start);
    const eMin = timeToMinutes(event.end);
    const offsetMin = sMin - slotMin;
    const topOffsetPx = Math.round((offsetMin / timeStep) * 36) + 2;
    const durationMin = Math.max(5, eMin - sMin);
    const heightPx = Math.max(20, Math.round((durationMin / timeStep) * 36) - 4);
    const isNone = event.color === 'none';
    const cardStyle = isNone
      ? 'bg-white border border-slate-300 text-slate-800'
      : `border-l-4 ${tag.border} ${tag.bg} border-t border-r border-b border-slate-200/90`;

    const dragAttrs = movable
      ? `draggable="true" ondragstart="handleWeekBlockDragStart(event, '${event.id}')" ondragend="handleWeekBlockDragEnd(event)"`
      : '';
    const openAttrs = movable
      ? `onclick="handleWeekBlockClick(event, '${event.id}')"`
      : `onclick="event.stopPropagation(); openEditMiniWindow(event, '${event.id}')"`;
    const cursor = movable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer';

    return `
      <div class="schedule-item absolute inset-x-1 rounded px-2 py-0.5 z-10 ${cardStyle} ${cursor} overflow-hidden shadow-2xs"
           style="top: ${topOffsetPx}px; height: ${heightPx}px;"
           ${dragAttrs}
           ${openAttrs}
           title="${event.title} (${event.start}〜${event.end})">
        <div class="flex items-center justify-between">
          <span class="font-bold text-slate-900 truncate text-xs leading-tight">${event.title}</span>
          <span class="text-3xs px-1.5 py-0.2 rounded ${tag.badge} font-medium shrink-0 ml-1 font-mono">${event.start}-${event.end}</span>
        </div>
        ${heightPx > 36 && event.memo ? `<p class="text-3xs text-slate-500 truncate mt-0.5">${event.memo}</p>` : ''}
      </div>
    `;
  }).join('');
}

let weekBlockDragId = null;
let suppressWeekBlockClick = false;

function handleWeekBlockDragStart(e, id) {
  weekBlockDragId = id;
  suppressWeekBlockClick = false;
  e.dataTransfer.setData('text/plain', id);
  e.dataTransfer.effectAllowed = 'copy';
  e.stopPropagation();
}

function handleWeekBlockDragEnd() {
  suppressWeekBlockClick = true;
  weekBlockDragId = null;
  clearDragHighlight();
}

function handleWeekBlockClick(e, id) {
  e.stopPropagation();
  if (suppressWeekBlockClick) {
    suppressWeekBlockClick = false;
    return;
  }
  openEditMiniWindow(e, id);
}

function handleWeekBlockDragOver(e) {
  if (!weekBlockDragId) return;
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
  const cell = e.currentTarget;
  if (!cell) return;
  clearDragHighlight();
  cell.classList.add('excel-cell-dragging');
}

function handleWeekBlockDrop(e, dayKey) {
  e.preventDefault();
  e.stopPropagation();
  const id = (e.dataTransfer && e.dataTransfer.getData('text/plain')) || weekBlockDragId;
  const item = weeklySchedules.find(schedule => schedule.id === id);
  clearDragHighlight();
  weekBlockDragId = null;
  if (!item || item.day === dayKey) return;
  weeklySchedules.push(cloneScheduleFromPreset(item, dayKey));
  render();
}

function handleMouseDown(e, dayKey, index) {
  if (e.target.closest('.schedule-item')) return;
  isMouseDown = true;
  dragStartDay = dayKey;
  dragStartIndex = index;
  dragCurrentIndex = index;
  highlightDragRange();
}

function handleMouseEnter(dayKey, index) {
  if (!isMouseDown) return;
  if (dayKey !== dragStartDay) return;
  dragCurrentIndex = index;
  highlightDragRange();
}

function handleMouseUp(e, dayKey, index) {
  if (!isMouseDown) return;
  isMouseDown = false;

  const minIdx = Math.min(dragStartIndex, dragCurrentIndex);
  const maxIdx = Math.max(dragStartIndex, dragCurrentIndex);
  const timeSlots = getTimeSlots();

  const startTime = timeSlots[minIdx];
  const endMin = timeToMinutes(timeSlots[maxIdx]) + timeStep;
  const endTime = minutesToTime(endMin);

  if (minIdx === maxIdx && copiedSchedule) {
    const dayObj = DAYS.find(d => d.key === dayKey);
    const place = dayObj ? `${dayObj.label} ${startTime}` : startTime;
    if (confirm(`コピー中の「${copiedSchedule.title}」を ${place} に貼り付けますか？`)) {
      pasteCopiedSchedule(dayKey, startTime);
      clearDragHighlight();
      return;
    }
  }

  const targetCell = e.currentTarget || e.target.closest('.excel-grid-cell');
  const rect = targetCell.getBoundingClientRect();
  openAddMiniWindow(rect, dayKey, startTime, endTime);

  clearDragHighlight();
}

function highlightDragRange() {
  clearDragHighlight();
  if (!isMouseDown) return;
  const minIdx = Math.min(dragStartIndex, dragCurrentIndex);
  const maxIdx = Math.max(dragStartIndex, dragCurrentIndex);

  const cells = document.querySelectorAll(`.excel-grid-cell[data-day="${dragStartDay}"]`);
  cells.forEach(cell => {
    const idx = parseInt(cell.dataset.index, 10);
    if (idx >= minIdx && idx <= maxIdx) {
      cell.classList.add('excel-cell-dragging');
    }
  });
}

function clearDragHighlight() {
  document.querySelectorAll('.excel-cell-dragging').forEach(el => {
    el.classList.remove('excel-cell-dragging');
  });
}

window.addEventListener('mouseup', () => {
  if (isMouseDown) {
    isMouseDown = false;
    clearDragHighlight();
  }
});

function positionMiniWindow(rect) {
  closeColorTagCreator();
  const mini = document.getElementById('miniWindow');
  mini.classList.remove('hidden');

  const popoverWidth = 304;
  const popoverHeight = 310;
  let top = rect.bottom + 6;
  let left = rect.left + (rect.width / 2) - (popoverWidth / 2);

  if (left + popoverWidth > window.innerWidth - 16) {
    left = window.innerWidth - popoverWidth - 16;
  }
  if (left < 16) left = 16;

  if (top + popoverHeight > window.innerHeight - 16) {
    top = rect.top - popoverHeight - 6;
  }

  mini.style.top = `${Math.max(10, top)}px`;
  mini.style.left = `${Math.max(10, left)}px`;
}

function openAddMiniWindow(rect, dayKey, startTime, endTime) {
  const mini = document.getElementById('miniWindow');
  document.getElementById('miniForm').reset();

  document.getElementById('miniWindowTitle').textContent = '予定を追加';
  document.getElementById('miniScheduleId').value = '';
  document.getElementById('miniTargetCol').value = 'plan';
  document.getElementById('miniDayKey').value = dayKey;

  const dayObj = DAYS.find(d => d.key === dayKey);
  document.getElementById('miniDayLabel').textContent = dayObj ? `${dayObj.label} [マスター]` : '単日プリセット';

  selectColor('blue');
  document.getElementById('miniDeleteBtn').classList.add('hidden');
  document.getElementById('miniCopyBtn').classList.add('hidden');
  setMiniTimes(startTime, endTime);

  positionMiniWindow(rect);
  setTimeout(() => document.getElementById('miniTitle').focus(), 50);
}

function openEditMiniWindow(e, id) {
  const draft = dayPresetDraft.find(s => s.id === id);
  const event = draft || weeklySchedules.find(s => s.id === id);
  if (!event) return;

  setMiniTimes(event.start, event.end);

  const rect = e.currentTarget.getBoundingClientRect();
  document.getElementById('miniWindowTitle').textContent = '予定の変更';
  document.getElementById('miniScheduleId').value = event.id;
  document.getElementById('miniTargetCol').value = 'plan';
  document.getElementById('miniDayKey').value = draft ? DRAFT_DAY_KEY : event.day;

  const dayObj = draft ? null : DAYS.find(d => d.key === event.day);
  document.getElementById('miniDayLabel').textContent = dayObj ? `${dayObj.label} [マスター]` : '単日プリセット';

  document.getElementById('miniTitle').value = event.title;
  document.getElementById('miniMemo').value = event.memo || '';

  selectColor(event.color || 'none');

  document.getElementById('miniDeleteBtn').classList.remove('hidden');
  document.getElementById('miniCopyBtn').classList.remove('hidden');

  positionMiniWindow(rect);
}

function closeMiniWindow() {
  closeColorTagCreator();
  document.getElementById('miniWindow').classList.add('hidden');
}

function copyCurrentEvent() {
  const id = document.getElementById('miniScheduleId').value;
  const event = dayPresetDraft.find(s => s.id === id) || weeklySchedules.find(s => s.id === id);
  if (!event) return;

  copiedSchedule = { ...event };
  document.getElementById('clipboardTitle').textContent = `${event.title} (${event.start}-${event.end})`;
  document.getElementById('clipboardNotice').classList.remove('hidden');
  document.getElementById('clipboardNotice').classList.add('flex');

  document.getElementById('formulaBar').innerHTML = `
    <span class="text-amber-600 font-semibold">📋 コピー中:</span> 「${event.title}」を保持。別のセルをクリックして配置できます。
  `;
  closeMiniWindow();
}

function clearClipboard() {
  copiedSchedule = null;
  document.getElementById('clipboardNotice').classList.add('hidden');
  document.getElementById('clipboardNotice').classList.remove('flex');
}

function pasteCopiedSchedule(targetDay, targetStart) {
  if (!copiedSchedule) return;
  const durationMin = timeToMinutes(copiedSchedule.end) - timeToMinutes(copiedSchedule.start);
  const endMin = timeToMinutes(targetStart) + durationMin;
  const fields = {
    start: targetStart,
    end: minutesToTime(endMin),
    title: copiedSchedule.title,
    color: copiedSchedule.color,
    memo: copiedSchedule.memo
  };

  if (targetDay === DRAFT_DAY_KEY) {
    dayPresetDraft.push(makeDraftBlock(fields));
  } else {
    weeklySchedules.push({
      id: Date.now().toString(),
      day: targetDay,
      ...fields
    });
  }
  render();
}

function patternKind(pattern) {
  if (!pattern) return 'day';
  if (pattern.kind === 'week' || pattern.kind === 'day') return pattern.kind;
  const items = Array.isArray(pattern.items) ? pattern.items : [];
  return items.some(item => item && item.day) ? 'week' : 'day';
}

function normalizeSavedPatterns() {
  if (!Array.isArray(savedPatterns)) {
    savedPatterns = [];
    return;
  }
  savedPatterns = savedPatterns.filter(pattern => pattern && typeof pattern.name === 'string' && Array.isArray(pattern.items)).map(pattern => ({
    id: pattern.id || ('pat-' + Date.now() + Math.random().toString(36).slice(2, 6)),
    name: pattern.name,
    kind: patternKind(pattern),
    items: pattern.items.filter(item => item && item.start && item.end).map(item => ({
      day: item.day,
      start: item.start,
      end: item.end,
      title: item.title || '',
      color: item.color || 'none',
      memo: item.memo || ''
    }))
  }));
}

function activePresetSaveTarget() {
  if (currentView === 'day') return { kind: 'day', dayKey: null };
  const mobile = isMobileSimulated || window.innerWidth < 768;
  if (mobile && mobileZoomDay) return { kind: 'day', dayKey: mobileZoomDay };
  return { kind: 'week', dayKey: null };
}

function newBlankButtonHtml() {
  return `<button type="button" onclick="startBlankSchedule()" class="px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded border border-slate-300 text-xs whitespace-nowrap shadow-2xs">新規</button>`;
}

function startBlankSchedule() {
  if (currentView === 'day') {
    if (dayPresetDraft.length === 0) return;
    if (!confirm('今の単日プリセットの内容を消して、空にします。')) return;
    dayPresetDraft = [];
  } else {
    const target = activePresetSaveTarget();
    if (target.kind === 'week') {
      if (weeklySchedules.length === 0) return;
      if (!confirm('今の1週間の予定を消して、空の時間割にします。')) return;
      weeklySchedules = [];
    } else {
      const day = DAYS.find(item => item.key === target.dayKey);
      if (!weeklySchedules.some(item => item.day === target.dayKey)) return;
      if (!confirm(`${day ? day.label : 'この曜日'}の予定を消して、空にします。`)) return;
      weeklySchedules = weeklySchedules.filter(item => item.day !== target.dayKey);
    }
  }
  render();
}

function savePresetButtonHtml() {
  return `<button type="button" id="saveViewPresetBtn" onclick="saveCurrentViewAsPattern()" class="px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded border border-slate-300 text-xs whitespace-nowrap shadow-2xs">保存</button>`;
}

function updateSavePresetButton() {
  const btn = document.getElementById('saveViewPresetBtn');
  if (btn) btn.textContent = '保存';
}

function cloneScheduleFromPreset(item, dayKey) {
  return {
    id: 'sch-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    day: dayKey,
    start: item.start,
    end: item.end,
    title: item.title,
    color: item.color || 'none',
    memo: item.memo || ''
  };
}

function togglePatternMenu() {
  const menu = document.getElementById('patternDropdown');
  const willOpen = menu.classList.contains('hidden');
  if (willOpen) {
    presetApplyDay = null;
    patternMenuAnchor = null;
    openPatternMenu();
  } else {
    closePatternMenu();
  }
}

function openPatternMenu() {
  const menu = document.getElementById('patternDropdown');
  if (!menu) return;
  renderPatternDropdownList();
  document.body.appendChild(menu);
  positionPatternMenu();
  menu.classList.remove('hidden');
}

function renderPatternPicker(title) {
  const list = savedPatterns.filter(pattern => patternKind(pattern) === 'day');
  const rows = list.map(pattern => `
    <button type="button" onclick="applyPresetFromMenu('${pattern.id}')" class="block w-full text-left px-3 py-2 text-xs font-medium text-slate-800 hover:bg-blue-50">
      ${escapeHtml(pattern.name)}
    </button>
  `).join('') || `<div class="px-3 py-2 text-2xs text-slate-400">まだありません</div>`;
  return `<div class="px-3 pt-2 pb-1 text-2xs font-bold text-slate-500">${title}</div>${rows}`;
}

function renderPatternGroup(kind, title) {
  const list = savedPatterns.filter(pattern => patternKind(pattern) === kind);
  const rows = list.map(pattern => `
    <div class="flex items-center gap-1 px-2 py-1 hover:bg-slate-50">
      <input type="text" value="${escapeHtml(pattern.name)}" onchange="updatePatternName('${pattern.id}', this.value)"
             class="flex-1 min-w-0 text-xs font-medium text-slate-800 border border-transparent hover:border-slate-300 focus:border-blue-500 rounded px-1.5 py-1 focus:outline-none bg-transparent">
      <button type="button" onclick="applyPresetFromMenu('${pattern.id}')" class="shrink-0 px-1.5 py-0.5 text-blue-700 hover:bg-blue-50 rounded text-2xs font-semibold">読込</button>
      <button type="button" onclick="deletePattern('${pattern.id}')" class="shrink-0 px-1.5 py-0.5 text-rose-600 hover:bg-rose-50 rounded text-2xs font-semibold">削除</button>
    </div>
  `).join('') || `<div class="px-3 py-2 text-2xs text-slate-400">まだありません</div>`;
  return `<div class="px-3 pt-2 pb-1 text-2xs font-bold text-slate-500">${title}</div>${rows}`;
}

function presetMenuKind() {
  if (presetApplyDay || mobileZoomDay || currentView === 'day') return 'day';
  return 'week';
}

function renderPatternDropdownList() {
  const container = document.getElementById('patternListContainer');
  if (!container) return;
  if (presetApplyDay) {
    const day = DAYS.find(item => item.key === presetApplyDay);
    container.innerHTML = renderPatternPicker(day ? `${day.label}に読み込む` : '1日を読み込む');
    return;
  }
  if (presetMenuKind() === 'week') {
    container.innerHTML = renderPatternGroup('week', '週間');
    return;
  }
  const day = currentView !== 'day' && mobileZoomDay ? DAYS.find(item => item.key === mobileZoomDay) : null;
  const dayTitle = day ? `1日（読み込み先: ${day.label}）` : '単日プリセット';
  container.innerHTML = renderPatternGroup('day', dayTitle);
}

function closePatternMenu() {
  const menu = document.getElementById('patternDropdown');
  const wrap = document.getElementById('patternDropdownWrap');
  if (menu) {
    menu.classList.add('hidden');
    if (wrap && menu.parentElement !== wrap) wrap.appendChild(menu);
  }
  presetApplyDay = null;
  patternMenuAnchor = null;
}

function applyWeekPreset(pattern) {
  if (!confirm(`今の1週間を「${pattern.name}」で置き換えます。よろしいですか？`)) return false;
  const next = [];
  DAYS.forEach(day => {
    pattern.items.filter(item => item.day === day.key).forEach(item => {
      next.push(cloneScheduleFromPreset(item, day.key));
    });
  });
  weeklySchedules = next;
  render();
  return true;
}

function applyDayPreset(pattern, dayKey) {
  const day = DAYS.find(item => item.key === dayKey);
  if (!day) return false;
  if (!confirm(`${day.label}の予定を「${pattern.name}」で置き換えます。よろしいですか？`)) return false;
  weeklySchedules = weeklySchedules.filter(item => item.day !== dayKey);
  pattern.items.forEach(item => {
    weeklySchedules.push(cloneScheduleFromPreset(item, dayKey));
  });
  render();
  return true;
}

function loadDayPresetIntoDraft(pattern) {
  if (dayPresetDraft.length > 0 && !confirm(`今の単日プリセットを「${pattern.name}」で置き換えます。`)) return false;
  dayPresetDraft = normalizeDayPresetDraft(pattern.items.map(item => ({ ...item, id: undefined })));
  render();
  return true;
}

function applyPresetFromMenu(patternId) {
  const pattern = savedPatterns.find(item => item.id === patternId);
  if (!pattern) return;
  if (patternKind(pattern) === 'week') {
    if (!applyWeekPreset(pattern)) return;
  } else if (currentView === 'day' && !presetApplyDay) {
    if (!loadDayPresetIntoDraft(pattern)) return;
  } else {
    const target = activePresetSaveTarget();
    const dayKey = presetApplyDay || (target.kind === 'day' ? target.dayKey : null);
    if (!dayKey) {
      alert('1日プリセットは、週間タイムテーブルの各曜日の「読込」から読み込めます。');
      return;
    }
    if (!applyDayPreset(pattern, dayKey)) return;
  }
  closePatternMenu();
}

function applyPatternToDay(dayKey, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  presetApplyDay = dayKey;
  patternMenuAnchor = event && event.currentTarget ? event.currentTarget : null;
  openPatternMenu();
}

function clearWeekdaySchedule(dayKey, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  const day = DAYS.find(item => item.key === dayKey);
  if (!day) return;
  if (!weeklySchedules.some(item => item.day === dayKey)) return;
  if (!confirm(`${day.label}の予定をすべて消します。`)) return;
  weeklySchedules = weeklySchedules.filter(item => item.day !== dayKey);
  render();
}

function saveCurrentViewAsPattern() {
  const target = activePresetSaveTarget();
  if (target.kind === 'week') {
    if (weeklySchedules.length === 0) {
      alert('1週間に予定がありません。予定を配置してから保存してください。');
      return;
    }
    const patternName = prompt('この1週間のプリセット名を入力してください:', '1週間プリセット');
    if (!patternName || !patternName.trim()) return;
    savedPatterns.push({
      id: 'pat-' + Date.now(),
      kind: 'week',
      name: patternName.trim(),
      items: weeklySchedules.map(item => ({
        day: item.day,
        start: item.start,
        end: item.end,
        title: item.title,
        color: item.color,
        memo: item.memo || ''
      }))
    });
    alert(`「${patternName.trim()}」を1週間プリセットとして保存しました。`);
  } else if (currentView === 'day') {
    if (dayPresetDraft.length === 0) {
      alert('単日プリセットに予定がありません。予定を配置してから保存してください。');
      return;
    }
    const patternName = prompt('単日プリセット名を入力してください:', '1日プリセット');
    if (!patternName || !patternName.trim()) return;
    savedPatterns.push({
      id: 'pat-' + Date.now(),
      kind: 'day',
      name: patternName.trim(),
      items: dayPresetDraft.map(item => ({
        start: item.start,
        end: item.end,
        title: item.title,
        color: item.color,
        memo: item.memo || ''
      }))
    });
    alert(`「${patternName.trim()}」を1日プリセットとして保存しました。`);
  } else {
    const day = DAYS.find(item => item.key === target.dayKey);
    const source = weeklySchedules.filter(item => item.day === target.dayKey);
    if (source.length === 0) {
      alert(`${day.label}に予定がありません。予定を配置してから保存してください。`);
      return;
    }
    const patternName = prompt(`${day.label}のプリセット名を入力してください:`, `${day.label}の1日`);
    if (!patternName || !patternName.trim()) return;
    savedPatterns.push({
      id: 'pat-' + Date.now(),
      kind: 'day',
      name: patternName.trim(),
      items: source.map(item => ({
        start: item.start,
        end: item.end,
        title: item.title,
        color: item.color,
        memo: item.memo || ''
      }))
    });
    alert(`「${patternName.trim()}」を1日プリセットとして保存しました。`);
  }
  persistState();
  renderPatternDropdownList();
}

function openPatternManagerModal() {
  document.getElementById('patternDropdown').classList.add('hidden');
  renderPatternManagerList();
  document.getElementById('patternManagerModal').classList.remove('hidden');
}

function closePatternManagerModal() {
  document.getElementById('patternManagerModal').classList.add('hidden');
  renderPatternDropdownList();
}

function renderPatternManagerList() {
  const list = document.getElementById('patternManagerList');
  if (!list) return;
  if (savedPatterns.length === 0) {
    list.innerHTML = `<p class="text-xs text-slate-400 text-center py-6">登録済みのプリセットはありません</p>`;
    return;
  }

  list.innerHTML = savedPatterns.map(pattern => {
    const kindLabel = patternKind(pattern) === 'week' ? '週間' : '1日';
    return `
      <div class="border border-slate-200 rounded-lg p-3 bg-white shadow-2xs flex items-center gap-2">
        <span class="shrink-0 px-1.5 py-0.5 rounded bg-slate-100 text-2xs font-bold text-slate-600">${kindLabel}</span>
        <input type="text" value="${escapeHtml(pattern.name)}" onchange="updatePatternName('${pattern.id}', this.value)"
               class="text-xs font-bold text-slate-800 border border-transparent hover:border-slate-300 focus:border-blue-500 rounded px-1.5 py-0.5 w-full focus:outline-none"
               title="クリックして名前を変更">
        <button type="button" onclick="deletePattern('${pattern.id}')" class="px-2 py-0.5 text-rose-600 hover:bg-rose-50 rounded text-2xs font-semibold shrink-0">削除</button>
      </div>
    `;
  }).join('');
}

function updatePatternName(patternId, newName) {
  const pattern = savedPatterns.find(item => item.id === patternId);
  if (pattern && newName.trim()) {
    pattern.name = newName.trim();
    renderPatternDropdownList();
    persistState();
  }
}

function deletePattern(patternId) {
  if (!confirm('このプリセットを削除しますか？')) return;
  savedPatterns = savedPatterns.filter(item => item.id !== patternId);
  renderPatternDropdownList();
  renderPatternManagerList();
  persistState();
}

window.addEventListener('click', (e) => {
  const pWrap = document.getElementById('patternDropdownWrap');
  const menu = document.getElementById('patternDropdown');
  const inside = (pWrap && pWrap.contains(e.target)) || (menu && menu.contains(e.target));
  if (!inside) closePatternMenu();
});

window.addEventListener('resize', () => {
  render();
});

function initTimeRangeControls() {
  const sSelect = document.getElementById('startHourSelect');
  const eSelect = document.getElementById('endHourSelect');
  sSelect.innerHTML = '';
  eSelect.innerHTML = '';

  for (let h = 0; h <= 23; h++) {
    const timeStr = `${String(h).padStart(2, '0')}:00`;
    const opt = document.createElement('option');
    opt.value = h; opt.textContent = timeStr;
    if (h === startHour) opt.selected = true;
    sSelect.appendChild(opt);
  }

  for (let h = 1; h <= 24; h++) {
    const timeStr = `${String(h).padStart(2, '0')}:00`;
    const opt = document.createElement('option');
    opt.value = h; opt.textContent = timeStr;
    if (h === endHour) opt.selected = true;
    eSelect.appendChild(opt);
  }
}

function changeTimeRange() {
  const s = parseInt(document.getElementById('startHourSelect').value, 10);
  const e = parseInt(document.getElementById('endHourSelect').value, 10);
  if (e <= s) {
    alert('終了時間は開始時間より後に設定してください。');
    syncTimeControls();
    return;
  }
  const grid = gridSettings[activeGridKind()];
  grid.startHour = s;
  grid.endHour = e;
  render();
}

function changeTimeStep(step) {
  const value = parseInt(step, 10);
  if (![15, 20, 30, 60].includes(value)) return;
  gridSettings[activeGridKind()].timeStep = value;
  render();
}

function initColorPalette() {
  const container = document.getElementById('miniColorPalette');
  if (!container) return;
  container.innerHTML = '';
  Object.keys(COLOR_TAGS).forEach(key => {
    const tag = COLOR_TAGS[key];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'w-5 h-5 rounded-full border-2 transition transform hover:scale-110 flex items-center justify-center shrink-0 border-slate-300';
    btn.style.backgroundColor = tag.hex;
    btn.title = tag.name;
    btn.dataset.color = key;

    if (key === 'none' || tag.hex === '#ffffff') {
      btn.innerHTML = `<span class="text-3xs text-slate-400 font-bold leading-none">無</span>`;
    }

    btn.onclick = () => selectColor(key);
    container.appendChild(btn);
  });
}

function selectColor(colorKey) {
  document.getElementById('miniColorInput').value = colorKey;
  const tag = COLOR_TAGS[colorKey] || COLOR_TAGS.none;
  const indicator = document.getElementById('miniColorIndicator');
  indicator.style.backgroundColor = tag.hex;
  indicator.style.borderColor = tag.borderCss;

  const buttons = document.querySelectorAll('#miniColorPalette button');
  buttons.forEach(btn => {
    if (btn.dataset.color === colorKey) {
      btn.classList.add('border-slate-800', 'scale-110', 'shadow-xs');
      btn.classList.remove('border-slate-300');
    } else {
      btn.classList.remove('border-slate-800', 'scale-110', 'shadow-xs');
      btn.classList.add('border-slate-300');
    }
  });
}

function presetById(id) {
  return COLOR_PRESETS.find(preset => preset.id === id) || COLOR_PRESETS[0];
}

function applyCustomColorTags(list) {
  Object.keys(COLOR_TAGS).forEach(key => {
    if (COLOR_TAGS[key].custom) delete COLOR_TAGS[key];
  });
  customColorTags = [];
  list.forEach(entry => {
    if (!entry || typeof entry.key !== 'string' || typeof entry.name !== 'string') return;
    if (COLOR_TAGS[entry.key] && !COLOR_TAGS[entry.key].custom) return;
    const name = entry.name.trim();
    if (!name) return;
    const preset = presetById(entry.presetId);
    const stored = { key: entry.key, name, presetId: preset.id };
    customColorTags.push(stored);
    COLOR_TAGS[stored.key] = {
      name: stored.name,
      hex: preset.hex,
      borderCss: preset.borderCss,
      bg: preset.bg,
      border: preset.border,
      text: preset.text,
      badge: preset.badge,
      custom: true,
      presetId: preset.id
    };
  });
}

function initColorPresets() {
  const container = document.getElementById('colorPresetPalette');
  if (!container || container.childElementCount) return;
  COLOR_PRESETS.forEach(preset => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'preset-swatch w-5 h-5 rounded-full border border-slate-300';
    btn.style.backgroundColor = preset.hex;
    btn.title = preset.id === 'none' ? '無色' : preset.id;
    btn.dataset.preset = preset.id;
    if (preset.id === 'none') {
      btn.innerHTML = `<span class="text-3xs text-slate-400 font-bold leading-none">無</span>`;
    }
    btn.onclick = () => selectPreset(preset.id);
    container.appendChild(btn);
  });
}

function selectPreset(presetId) {
  pendingPresetId = presetById(presetId).id;
  document.querySelectorAll('#colorPresetPalette .preset-swatch').forEach(btn => {
    btn.classList.toggle('is-selected', btn.dataset.preset === pendingPresetId);
  });
}

function openColorTagCreator() {
  initColorPresets();
  const panel = document.getElementById('colorTagCreator');
  panel.classList.remove('hidden');
  const input = document.getElementById('colorTagNameInput');
  input.value = '';
  selectPreset(pendingPresetId || 'blue');
  input.focus();
}

function closeColorTagCreator() {
  const panel = document.getElementById('colorTagCreator');
  if (panel) panel.classList.add('hidden');
}

function saveNewColorTag() {
  const name = document.getElementById('colorTagNameInput').value.trim();
  if (!name) {
    alert('タグ名を入力してください。');
    return;
  }
  const preset = presetById(pendingPresetId);
  const key = `tag-${Date.now()}`;
  applyCustomColorTags(customColorTags.concat([{ key, name, presetId: preset.id }]));
  initColorPalette();
  selectColor(key);
  closeColorTagCreator();
  persistState();
}

function collectExportData() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    weeklySchedules,
    dayPresetDraft,
    actualRecords,
    savedPatterns,
    dailyNotes,
    colorTags: customColorTags,
    startHour: gridSettings.week.startHour,
    endHour: gridSettings.week.endHour,
    timeStep: gridSettings.week.timeStep,
    gridSettings,
    screen2SplitPercent,
    actualDate: formatDateYMD(actualDate)
  };
}

function exportAppData() {
  const blob = new Blob([JSON.stringify(collectExportData(), null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `smartschedule-${formatDateYMD(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  const status = document.getElementById('backupStatus');
  if (status) status.textContent = 'JSONファイルを書き出しました。';
}

function applyLoadedData(data) {
  if (!data || typeof data !== 'object') return false;
  if (!Array.isArray(data.weeklySchedules) || !Array.isArray(data.actualRecords) || !Array.isArray(data.savedPatterns)) {
    return false;
  }
  weeklySchedules = data.weeklySchedules;
  dayPresetDraft = Array.isArray(data.dayPresetDraft) ? normalizeDayPresetDraft(data.dayPresetDraft) : [];
  actualRecords = data.actualRecords;
  savedPatterns = data.savedPatterns;
  normalizeSavedPatterns();
  if (data.dailyNotes && typeof data.dailyNotes === 'object' && !Array.isArray(data.dailyNotes)) {
    dailyNotes = data.dailyNotes;
  } else {
    dailyNotes = {};
  }
  loadGridSettings(data);
  applyActiveGrid();
  if (typeof data.screen2SplitPercent === 'number' && Number.isFinite(data.screen2SplitPercent) && data.screen2SplitPercent !== 50) {
    screen2SplitPercent = Math.max(12, Math.min(80, Math.round(data.screen2SplitPercent)));
  }
  if (typeof data.actualDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data.actualDate)) {
    const [y, m, d] = data.actualDate.split('-').map(Number);
    const parsed = new Date(y, m - 1, d);
    if (!Number.isNaN(parsed.getTime())) actualDate = parsed;
  }
  applyCustomColorTags(Array.isArray(data.colorTags) ? data.colorTags : []);
  return true;
}

function importAppDataFile(input) {
  const file = input.files && input.files[0];
  input.value = '';
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(String(reader.result));
      if (!applyLoadedData(data)) {
        alert('このファイルは読み込めません。');
        return;
      }
      initTimeRangeControls();
      const stepSelect = document.getElementById('timeStepSelect');
      if (stepSelect) stepSelect.value = String(timeStep);
      initColorPalette();
      render();
      const status = document.getElementById('backupStatus');
      if (status) status.textContent = 'データを読み込み、画面を更新しました。';
    } catch (err) {
      alert('このファイルは読み込めません。');
    }
  };
  reader.readAsText(file);
}

function resetAppData() {
  if (!confirm('保存データを消し、最初のサンプルに戻します。よろしいですか？')) return;
  weeklySchedules = JSON.parse(JSON.stringify(INITIAL_DATA.weeklySchedules));
  dayPresetDraft = [];
  actualRecords = JSON.parse(JSON.stringify(INITIAL_DATA.actualRecords));
  savedPatterns = JSON.parse(JSON.stringify(INITIAL_DATA.savedPatterns));
  dailyNotes = JSON.parse(JSON.stringify(INITIAL_DATA.dailyNotes));
  gridSettings = {
    week: { ...INITIAL_DATA.gridSettings.week },
    day: { ...INITIAL_DATA.gridSettings.day }
  };
  applyActiveGrid();
  screen2SplitPercent = INITIAL_DATA.screen2SplitPercent;
  const [y, m, d] = INITIAL_DATA.actualDate.split('-').map(Number);
  actualDate = new Date(y, m - 1, d);
  summaryRangeStart = new Date(y, m - 1, 1);
  summaryRangeEnd = new Date(y, m, 0);
  applyCustomColorTags([]);
  try { localStorage.removeItem(STORAGE_KEY); } catch (err) { /* 続行 */ }
  initTimeRangeControls();
  const stepSelect = document.getElementById('timeStepSelect');
  if (stepSelect) stepSelect.value = String(timeStep);
  initColorPalette();
  render();
  const status = document.getElementById('backupStatus');
  if (status) status.textContent = 'データを初期化しました。';
}

function renderScreen4() {
  const container = document.getElementById('gridContainer');
  const note = document.getElementById('dailyNoteSection');
  if (note) note.classList.add('hidden');
  document.getElementById('footerStatusText').textContent = '設定';
  document.getElementById('footerStat1').innerHTML = `予定: <strong class="text-slate-700">${weeklySchedules.length}件</strong>`;
  document.getElementById('footerStat2').innerHTML = `実績: <strong class="text-slate-700">${actualRecords.length}件</strong>`;
  document.getElementById('footerRightInfo').textContent = `カラータグ ${Object.keys(COLOR_TAGS).length}色`;

  container.innerHTML = `
    <div class="p-4 md:p-6 max-w-xl mx-auto space-y-3">
      <section class="border border-slate-200 rounded-lg bg-white p-4 space-y-2">
        <h2 class="text-sm font-bold text-slate-800">エクスポート</h2>
        <p class="text-xs text-slate-500">いまの全データを .json ファイルとしてダウンロードします。</p>
        <button type="button" onclick="exportAppData()" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded">JSONを書き出す</button>
      </section>
      <section class="border border-slate-200 rounded-lg bg-white p-4 space-y-2">
        <h2 class="text-sm font-bold text-slate-800">インポート</h2>
        <p class="text-xs text-slate-500">書き出した .json を読み込み、画面を更新します。</p>
        <button type="button" onclick="document.getElementById('importFileInput').click()" class="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 text-xs font-semibold rounded">JSONを読み込む</button>
      </section>
      <section class="border border-rose-200 rounded-lg bg-rose-50/40 p-4 space-y-2">
        <h2 class="text-sm font-bold text-rose-800">データ初期化</h2>
        <p class="text-xs text-rose-700">確認のあと、ブラウザ内の保存とメモリ上のデータを最初のサンプルに戻します。</p>
        <button type="button" onclick="resetAppData()" class="px-3 py-1.5 border border-rose-300 text-rose-700 hover:bg-rose-100 text-xs font-semibold rounded">データを初期化する</button>
      </section>
      <p id="backupStatus" class="text-xs text-slate-500 min-h-[1rem]"></p>
    </div>
  `;
}

window.addEventListener('DOMContentLoaded', () => {
  loadPersistedState();
  initTimeRangeControls();
  const stepSelect = document.getElementById('timeStepSelect');
  if (stepSelect) stepSelect.value = String(timeStep);
  initColorPalette();
  initColorPresets();
  switchScreen('screen2');
});
