export type Phase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

export interface PhaseInfo {
  name: string;
  emoji: string;
  color: string;
  colorDim: string;
  colorBg: string;
  days: string;
  tagline: string;
  whatsHappening: string;
  sheMayFeel: string[];
  doThis: string[];
  avoidThis: string[];
  insight: string;
  proTip: string; // Pro-only
  intimacyNote: string; // Pro-only
}

export const PHASES: Record<Phase, PhaseInfo> = {
  menstrual: {
    name: 'Menstrual',
    emoji: '🌑',
    color: '#f87171',
    colorDim: '#ef4444',
    colorBg: 'rgba(239,68,68,0.12)',
    days: 'Days 1–5',
    tagline: 'Rest & Restore',
    whatsHappening: 'Her body is shedding the uterine lining. Hormones are at their lowest. This is her most physically demanding phase.',
    sheMayFeel: [
      'Cramping and lower back pain',
      'Fatigue and low energy',
      'Bloating',
      'Mood swings or low mood',
      'Food cravings (sweet or salty)',
      'Headaches',
    ],
    doThis: [
      'Be extra patient — she\'s dealing with real physical discomfort',
      'Offer comfort food or her favorite snacks without being asked',
      'Keep things low-key — couch time > big plans',
      'A heating pad or hot water bottle goes a long way',
      'Check in with a simple "how are you feeling?" — mean it',
      'Handle more of the household load without making it a thing',
    ],
    avoidThis: [
      'Starting arguments or bringing up serious issues',
      'Pressuring her to go out or socialize',
      'Saying "it\'s just your period" or dismissing her pain',
      'Making her feel bad for canceling plans',
      'Being emotionally unavailable',
    ],
    insight: 'This is her most vulnerable phase. She needs comfort, not excitement. Low-key quality time is worth more than anything expensive right now.',
    proTip: 'Track which days are worst for her specifically — most women have 1–2 peak pain days. Knowing Day 2 is her hardest lets you plan accordingly.',
    intimacyNote: 'Desire is generally lower but varies widely. Follow her lead. Some women feel relief from intimacy during this phase — never assume, always ask.',
  },

  follicular: {
    name: 'Follicular',
    emoji: '🌱',
    color: '#fbbf24',
    colorDim: '#f59e0b',
    colorBg: 'rgba(251,191,36,0.12)',
    days: 'Days 6–13',
    tagline: 'Rising Energy',
    whatsHappening: 'Estrogen is climbing. Her body is preparing for ovulation. Energy, mood, and optimism all trend upward through this phase.',
    sheMayFeel: [
      'Increasing energy and motivation',
      'More positive and upbeat',
      'Creative and adventurous',
      'Social and chatty',
      'Open to new ideas and plans',
      'Physically stronger (great time for workouts)',
    ],
    doThis: [
      'Plan dates — she\'s in the mood for new experiences',
      'Bring up future plans, trips, goals — she\'s receptive',
      'Suggest trying something new together',
      'Match her energy — this is a good stretch for you both',
      'Have important conversations you\'ve been putting off',
      'Encourage her projects and ideas',
    ],
    avoidThis: [
      'Being boring or checked out — she wants engagement',
      'Wasting the window by not making any plans',
      'Shutting down her ideas or enthusiasm',
    ],
    insight: 'This is the best time to have serious talks — about money, the relationship, future plans. She\'s optimistic and solution-oriented right now. Use it.',
    proTip: 'Book something for late in this phase or around ovulation. She\'ll be at peak confidence and will enjoy it most.',
    intimacyNote: 'Interest is building. She\'s feeling more attractive and connected. Good time for flirting and building tension.',
  },

  ovulation: {
    name: 'Ovulation',
    emoji: '✨',
    color: '#34d399',
    colorDim: '#10b981',
    colorBg: 'rgba(52,211,153,0.12)',
    days: 'Days 14–16',
    tagline: 'Peak Power',
    whatsHappening: 'The egg is released. Estrogen and testosterone peak. She is at her most confident, social, and energetic — this window lasts only a few days.',
    sheMayFeel: [
      'Most attractive and confident',
      'High energy and vitality',
      'Highly social and magnetic',
      'Clear-headed and decisive',
      'Heightened senses',
      'Highest libido of the month',
    ],
    doThis: [
      'Compliment her genuinely — she\'s radiating right now and she knows it',
      'Plan something special: a nice dinner, a fun outing',
      'Be present and attentive — she notices everything',
      'Be romantic and intentional',
      'Say yes to her invitations and energy',
      'Make her feel seen',
    ],
    avoidThis: [
      'Being absent, distracted, or on your phone',
      'Missing this window with zero effort',
      'Being critical or dismissive — she\'s at peak sensitivity to rejection too',
      'Picking fights — the contrast from her peak mood will feel worse',
    ],
    insight: 'This is a 3-day window. She looks and feels her best. She\'s also most attuned to your level of engagement. Show up.',
    proTip: 'Whatever effort you put in here pays double dividends. This is the phase where shared memories get made.',
    intimacyNote: 'Peak libido. She\'s confident and wants to feel desired. Be intentional and present — this is the highest-return window of the month.',
  },

  luteal: {
    name: 'Luteal',
    emoji: '🌘',
    color: '#a78bfa',
    colorDim: '#8b5cf6',
    colorBg: 'rgba(167,139,250,0.12)',
    days: 'Days 17–28',
    tagline: 'Tread Carefully',
    whatsHappening: 'Progesterone rises then drops sharply if no pregnancy. PMS symptoms emerge in the second half (roughly Days 22–28). This is the longest and most variable phase.',
    sheMayFeel: [
      'Irritability or short fuse (especially late phase)',
      'Anxiety or heightened worry',
      'Bloating and water retention',
      'Food cravings — especially chocolate, carbs, salt',
      'Fatigue and lower motivation',
      'Emotional sensitivity — things feel bigger',
      'Breast tenderness',
    ],
    doThis: [
      'Be extra patient — emotions are real even if the trigger seems small',
      'Stock her favorite comfort foods without being asked',
      'Don\'t take moods personally — it\'s hormonal, not about you',
      'Offer comfort and presence over solutions',
      'Validate her feelings: "that sounds really frustrating"',
      'Keep the environment calm and low-stress',
      'Check if she needs anything proactively',
    ],
    avoidThis: [
      'Saying "you\'re being emotional" or "calm down"',
      'Starting arguments or bringing up grievances',
      'Making major financial or relationship decisions',
      'Being critical of her appearance or behavior',
      'Adding to her stress',
      'Disappearing emotionally when she needs support',
    ],
    insight: 'Split this phase mentally: Days 17–21 are manageable (mild PMS at worst). Days 22–28 are the red zone — heightened sensitivity, real discomfort, lower tolerance for everything. Adjust accordingly.',
    proTip: 'If a fight starts in Days 24–28 about something small, it\'s almost certainly not about that thing. Offer to revisit it in a few days when she feels better. She\'ll appreciate the patience.',
    intimacyNote: 'Desire drops noticeably, especially in late luteal. Physical comfort (holding, warmth) matters more than sex. Don\'t push — offer instead.',
  },
};

// Calculate which phase a given cycle day falls in
// cycleLength: default 28
export function getPhaseForDay(cycleDay: number, cycleLength: number = 28): Phase {
  // Normalize cycle day (1-based)
  const day = ((cycleDay - 1) % cycleLength) + 1;

  // Luteal phase length is fairly constant (~12-14 days)
  // We adjust follicular based on cycle length
  const lutealLength = 14;
  const ovulationDay = cycleLength - lutealLength; // day of ovulation
  const menstrualLength = 5;
  const follicularStart = menstrualLength + 1;
  const ovulationStart = ovulationDay - 1; // 1-2 days before ovulation peak
  const ovulationEnd = ovulationDay + 1;
  const lutealStart = ovulationEnd + 1;

  if (day <= menstrualLength) return 'menstrual';
  if (day < ovulationStart) return 'follicular';
  if (day <= ovulationEnd) return 'ovulation';
  return 'luteal';
}

// Get current cycle day from last period start date
export function getCurrentCycleDay(lastPeriodDate: string): number {
  const last = new Date(lastPeriodDate);
  const now = new Date();
  const diffMs = now.getTime() - last.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return (diffDays % 28) + 1; // default 28-day cycle wrap
}

// Get cycle day for a specific date
export function getCycleDayForDate(lastPeriodDate: string, targetDate: Date, cycleLength: number = 28): number {
  const last = new Date(lastPeriodDate);
  const diffMs = targetDate.getTime() - last.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return -1; // before tracking started
  return (diffDays % cycleLength) + 1;
}
