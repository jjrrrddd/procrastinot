const introScreen = document.getElementById('introScreen');
const appShell = document.getElementById('appShell');
const loginForm = document.getElementById('loginForm');
const loginDisplayName = document.getElementById('loginDisplayName');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const displayNameField = document.getElementById('displayNameField');
const enterBtn = document.getElementById('enterBtn');
const authModeBtn = document.getElementById('authModeBtn');
const authMessage = document.getElementById('authMessage');
const localDemoNotice = document.getElementById('localDemoNotice');
const logoutBtn = document.getElementById('logoutBtn');
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const creditBtn = document.getElementById('creditBtn');
const creditsPanel = document.getElementById('creditsPanel');
const closeCreditsBtn = document.getElementById('closeCreditsBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const taskForm = document.getElementById('taskForm');
const startTaskBtn = document.getElementById('startTaskBtn');
const usernameDisplay = document.getElementById('usernameDisplay');
const navUsernameDisplay = document.getElementById('navUsernameDisplay');
const userInitials = document.getElementById('userInitials');
const navUserAvatar = document.getElementById('navUserAvatar');
const taskInput = document.getElementById('taskInput');
const taskFeedback = document.getElementById('taskFeedback');
const savedFocusNote = document.getElementById('savedFocusNote');
const savedFocusText = document.getElementById('savedFocusText');
const timeGreeting = document.getElementById('timeGreeting');
const todayDate = document.getElementById('todayDate');
const subjectSelect = document.getElementById('subjectSelect');
const favoriteSubjectStatus = document.getElementById('favoriteSubjectStatus');
const paceSelect = document.getElementById('paceSelect');
const customSubjectInput = document.getElementById('customSubjectInput');
const addCustomSubjectBtn = document.getElementById('addCustomSubjectBtn');
const taskListForm = document.getElementById('taskListForm');
const taskListInput = document.getElementById('taskListInput');
const taskDifficulty = document.getElementById('taskDifficulty');
const taskDueDate = document.getElementById('taskDueDate');
const taskListItems = document.getElementById('taskListItems');
const taskListMessage = document.getElementById('taskListMessage');
const taskDueReminder = document.getElementById('taskDueReminder');
const taskDueReminderText = document.getElementById('taskDueReminderText');
const taskDueReminderButton = document.getElementById('taskDueReminderButton');
const tinyStepsDialog = document.getElementById('tinyStepsDialog');
const tinyStepsTask = document.getElementById('tinyStepsTask');
const tinyStepsSubjectBridge = document.getElementById('tinyStepsSubjectBridge');
const tinyStepsSubjectBridgeTitle = document.getElementById('tinyStepsSubjectBridgeTitle');
const tinyStepsSubjectBridgeText = document.getElementById('tinyStepsSubjectBridgeText');
const tinyStepReasons = document.getElementById('tinyStepReasons');
const tinyStepEncouragement = document.getElementById('tinyStepEncouragement');
const tinyStepList = document.getElementById('tinyStepList');
const tinyStepStatus = document.getElementById('tinyStepStatus');
const closeTinyStepsBtn = document.getElementById('closeTinyStepsBtn');
const dismissTinyStepsBtn = document.getElementById('dismissTinyStepsBtn');
const startTinyTimerBtn = document.getElementById('startTinyTimerBtn');
const copyStudyNudgeBtn = document.getElementById('copyStudyNudgeBtn');
const studyNudgeStatus = document.getElementById('studyNudgeStatus');
const sideMenuLinks = document.querySelectorAll('.side-menu-link');
const appPageElements = document.querySelectorAll('[data-app-page]');
const focusTimerForm = document.getElementById('focusTimerForm');
const focusTimerDisplay = document.getElementById('focusTimerDisplay');
const focusTimerMessage = document.getElementById('focusTimerMessage');
const timerMinutes = document.getElementById('timerMinutes');
const timerStartBtn = document.getElementById('timerStartBtn');
const timerPauseBtn = document.getElementById('timerPauseBtn');
const timerResetBtn = document.getElementById('timerResetBtn');
const screenLimitMessage = document.getElementById('screenLimitMessage');
const dismissScreenLimitBtn = document.getElementById('dismissScreenLimitBtn');
const myFriendCode = document.getElementById('myFriendCode');
const copyFriendCodeBtn = document.getElementById('copyFriendCodeBtn');
const addBuddyForm = document.getElementById('addBuddyForm');
const buddyCodeInput = document.getElementById('buddyCodeInput');
const buddyCodePreview = document.getElementById('buddyCodePreview');
const buddyMessage = document.getElementById('buddyMessage');
const refreshBuddiesBtn = document.getElementById('refreshBuddiesBtn');
const incomingBuddyRequests = document.getElementById('incomingBuddyRequests');
const outgoingBuddyRequests = document.getElementById('outgoingBuddyRequests');
const myBuddyList = document.getElementById('myBuddyList');
const buddyContentPanel = document.getElementById('buddyContentPanel');
const buddyContentTitle = document.getElementById('buddyContentTitle');
const buddyContentBody = document.getElementById('buddyContentBody');
const createBuddyGroupForm = document.getElementById('createBuddyGroupForm');
const buddyGroupName = document.getElementById('buddyGroupName');
const groupBuddyMembers = document.getElementById('groupBuddyMembers');
const createBuddyGroupBtn = document.getElementById('createBuddyGroupBtn');
const buddyChatList = document.getElementById('buddyChatList');
const buddyChatPanel = document.getElementById('buddyChatPanel');
const buddyChatTitle = document.getElementById('buddyChatTitle');
const buddyChatProfileBtn = document.getElementById('buddyChatProfileBtn');
const buddyChatProfileDialog = document.getElementById('buddyChatProfileDialog');
const buddyChatProfileDialogTitle = document.getElementById('buddyChatProfileDialogTitle');
const buddyChatProfileBody = document.getElementById('buddyChatProfileBody');
const closeBuddyChatProfileBtn = document.getElementById('closeBuddyChatProfileBtn');
const closeBuddyChatProfileActionBtn = document.getElementById('closeBuddyChatProfileActionBtn');
const openBuddyGroupDialogBtn = document.getElementById('openBuddyGroupDialogBtn');
const createBuddyGroupDialog = document.getElementById('createBuddyGroupDialog');
const closeBuddyGroupDialogBtn = document.getElementById('closeBuddyGroupDialogBtn');
const buddyGroupBaseMember = document.getElementById('buddyGroupBaseMember');
const buddyGroupStatus = document.getElementById('buddyGroupStatus');
const buddyChatMessages = document.getElementById('buddyChatMessages');
const buddyChatForm = document.getElementById('buddyChatForm');
const buddyChatInput = document.getElementById('buddyChatInput');
const sendBuddyChatBtn = document.getElementById('sendBuddyChatBtn');
const buddyChatStatus = document.getElementById('buddyChatStatus');
const pointsBalance = document.getElementById('pointsBalance');
const levelNumber = document.getElementById('levelNumber');
const streakCount = document.getElementById('streakCount');
const streakUnit = document.getElementById('streakUnit');
const longestStreakCount = document.getElementById('longestStreakCount');
const longestStreakUnit = document.getElementById('longestStreakUnit');
const xpProgressText = document.getElementById('xpProgressText');
const totalXpText = document.getElementById('totalXpText');
const levelProgressTrack = document.getElementById('levelProgressTrack');
const levelProgressBar = document.getElementById('levelProgressBar');
const mascotFace = document.getElementById('mascotFace');
const mascotMessage = document.getElementById('mascotMessage');
const mascotEvolutionBadge = document.getElementById('mascotEvolutionBadge');
const mascotStageTitle = document.getElementById('mascotStageTitle');
const mascotStageText = document.getElementById('mascotStageText');
const taskGarden = document.getElementById('taskGarden');
const gardenFlowerCount = document.getElementById('gardenFlowerCount');
const gardenSummary = document.getElementById('gardenSummary');
const reminderQuote = document.getElementById('reminderQuote');
const reminderAuthor = document.getElementById('reminderAuthor');
const reminderAbout = document.getElementById('reminderAbout');
const quoteStatus = document.getElementById('quoteStatus');
const splashMark = document.querySelector('.splash-mark');
const splashLogo = document.querySelector('.splash-logo');
const creditMemberButtons = document.querySelectorAll('.credit-member-btn');
const creditDetail = document.getElementById('creditDetail');
const creditDetailTitle = document.getElementById('creditDetailTitle');
const creditDetailText = document.getElementById('creditDetailText');
const creditPhoto = document.getElementById('creditPhoto');
const settingsBtn = document.getElementById('settingsBtn');
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackPanel = document.getElementById('feedbackPanel');
const closeFeedbackBtn = document.getElementById('closeFeedbackBtn');
const backToMenuFromFeedbackBtn = document.getElementById('backToMenuFromFeedbackBtn');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackType = document.getElementById('feedbackType');
const feedbackMessage = document.getElementById('feedbackMessage');
const feedbackStatus = document.getElementById('feedbackStatus');
const feedbackSubmitBtn = document.getElementById('feedbackSubmitBtn');
const feedbackDoodleBtn = document.getElementById('feedbackDoodleBtn');
const feedbackDoodleStatus = document.getElementById('feedbackDoodleStatus');
const studyCompanion = document.getElementById('studyCompanion');
const studyCompanionMessage = document.getElementById('studyCompanionMessage');
const studyCompanionImage = document.querySelector('.study-companion-image');
const closeStudyCompanionBtn = document.getElementById('closeStudyCompanionBtn');
let feedbackDoodlePresses = 0;
let studyCompanionMessageIndex = 0;
const studyCompanionMessages = [
    'One small step is enough to begin.',
    'You do not have to finish it all right now. Try two focused minutes.',
    'A fresh start can be tiny: open the task and choose the first easy part.',
    'Rest is allowed, too. When you are ready, I will cheer you on.',
    'You have made it this far. Let us make the next step gentle.'
];
const studyCompanionSprites = [
    'monika%20sprites/Mon1.webp',
    'monika%20sprites/Mon2.webp',
    'monika%20sprites/Mon5.webp',
    'monika%20sprites/Mon10.webp',
    'monika%20sprites/Mon11.webp'
];
const settingsDefaultTimer = document.getElementById('settingsDefaultTimer');
const settingsScreenBreak = document.getElementById('settingsScreenBreak');
const profileAvatarInput = document.getElementById('profileAvatarInput');
const profileAvatarPreview = document.getElementById('profileAvatarPreview');
const profileAvatarFallback = document.getElementById('profileAvatarFallback');
const saveProfileAvatarBtn = document.getElementById('saveProfileAvatarBtn');
const removeProfileAvatarBtn = document.getElementById('removeProfileAvatarBtn');
const profileAvatarStatus = document.getElementById('profileAvatarStatus');
const settingsNotifyBtn = document.getElementById('settingsNotifyBtn');
const settingsNotifyStatus = document.getElementById('settingsNotifyStatus');
const settingsDeadlineReminders = document.getElementById('settingsDeadlineReminders');
const settingsChimeDuration = document.getElementById('settingsChimeDuration');
const settingsGoPreferencesBtn = document.getElementById('settingsGoPreferencesBtn');
const settingsResetBtn = document.getElementById('settingsResetBtn');
const settingsResetStatus = document.getElementById('settingsResetStatus');
const settingsSaveStatus = document.getElementById('settingsSaveStatus');
const screenBreakReminderValue = document.getElementById('screenBreakReminderValue');
const SETTINGS_DEFAULT_TIMER_KEY = 'procrastiNotDefaultTimer';
const SETTINGS_SCREEN_BREAK_KEY = 'procrastiNotScreenBreakMinutes';
const SETTINGS_DEADLINE_REMINDERS_KEY = 'procrastiNotDeadlineReminders';
const SETTINGS_CHIME_DURATION_KEY = 'procrastiNotFocusChimeDuration';
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const backToMenuFromSettingsBtn = document.getElementById('backToMenuFromSettingsBtn');
const CALENDAR_KEY = 'procrastiNotCalendarReminders';
const calendarGrid = document.getElementById('calendarGrid');
const calendarMonthLabel = document.getElementById('calendarMonthLabel');
const calendarPrevBtn = document.getElementById('calendarPrevBtn');
const calendarNextBtn = document.getElementById('calendarNextBtn');
const calendarReminderForm = document.getElementById('calendarReminderForm');
const calendarReminderDate = document.getElementById('calendarReminderDate');
const calendarReminderText = document.getElementById('calendarReminderText');
const calendarMessage = document.getElementById('calendarMessage');
const calendarReminderList = document.getElementById('calendarReminderList');
const calendarReminderTime = document.getElementById('calendarReminderTime');
let calendarViewDate = new Date();
let calendarSelectedDate = '';
let calendarReminders = {};
const COLOR_MAP = {
    red: '#9b3e31',
    amber: '#b9770e',
    green: '#5a8f3b',
    blue: '#3a6ea5'
};
let calendarAlarmTimers = {};

function showCreditPhoto(name, photo, altText = `${name}, team member`) {
    if (!photo) {
        creditPhoto.src = '';
        creditPhoto.alt = altText;
        creditPhoto.style.display = 'none';

        let placeholder = creditPhoto.parentElement.querySelector('.credit-placeholder');
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.className = 'credit-placeholder';
            creditPhoto.parentElement.appendChild(placeholder);
        }
        placeholder.textContent = name.charAt(0).toUpperCase();
        placeholder.style.display = 'grid';
        return;
    }

    creditPhoto.style.display = 'grid';
    creditPhoto.classList.toggle('is-lantis-photo', photo === 'Lantis Saddi.png');
    const placeholder = creditPhoto.parentElement.querySelector('.credit-placeholder');
    if (placeholder) {
        placeholder.style.display = 'none';
    }
    creditPhoto.src = `assets/${photo}`;
    creditPhoto.alt = altText;
}

let audioCtx = null;
function ensureAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}
async function playPlushieSquish() {
    try {
        ensureAudio();
        if (audioCtx.state === 'suspended') {
            await audioCtx.resume();
        }
        const now = audioCtx.currentTime;

        // Soft "boing" plucky attack
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(330, now + 0.06);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.14);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.18);

        // Subtle soft "pop" noise layer
        const noise = audioCtx.createBufferSource();
        const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.08, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
        }
        noise.buffer = buffer;
        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.05, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        noise.connect(noiseGain);
        noiseGain.connect(audioCtx.destination);
        noise.start(now);
        noise.stop(now + 0.08);
    } catch (error) {
        console.warn('Could not play the squish sound. Check browser audio permissions.', error);
    }
}

function playMonikaGlitch() {
    try {
        ensureAudio();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {});
        }

        const now = audioCtx.currentTime;
        const output = audioCtx.createGain();
        output.gain.setValueAtTime(0.55, now);
        output.connect(audioCtx.destination);

        const noise = audioCtx.createBufferSource();
        const noiseBuffer = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * 0.52), audioCtx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let index = 0; index < noiseData.length; index += 1) {
            noiseData[index] = (Math.random() * 2 - 1) * (1 - index / noiseData.length);
        }
        noise.buffer = noiseBuffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1900, now);
        filter.frequency.exponentialRampToValueAtTime(420, now + 0.48);
        filter.Q.value = 0.7;
        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.11, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(output);
        noise.start(now);
        noise.stop(now + 0.52);

        const subTone = audioCtx.createOscillator();
        const subGain = audioCtx.createGain();
        subTone.type = 'sawtooth';
        subTone.frequency.setValueAtTime(148, now);
        subTone.frequency.exponentialRampToValueAtTime(38, now + 0.58);
        subGain.gain.setValueAtTime(0.12, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.58);
        subTone.connect(subGain);
        subGain.connect(output);
        subTone.start(now);
        subTone.stop(now + 0.6);

        const digitalChirp = audioCtx.createOscillator();
        const chirpGain = audioCtx.createGain();
        digitalChirp.type = 'square';
        digitalChirp.frequency.setValueAtTime(980, now + 0.04);
        digitalChirp.frequency.exponentialRampToValueAtTime(170, now + 0.19);
        chirpGain.gain.setValueAtTime(0.035, now + 0.04);
        chirpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        digitalChirp.connect(chirpGain);
        chirpGain.connect(output);
        digitalChirp.start(now + 0.04);
        digitalChirp.stop(now + 0.21);
    } catch (error) {
        console.warn('Could not play the glitch sound.', error);
    }
}

if (creditMemberButtons.length && creditDetail && creditDetailTitle && creditDetailText && creditPhoto) {
    creditMemberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const photo = button.dataset.photo;
            const description = button.dataset.description;
            if (!name) {
                return;
            }

            creditMemberButtons.forEach((memberButton) => {
                memberButton.setAttribute('aria-pressed', String(memberButton === button));
            });

            creditDetailTitle.textContent = name;
            creditDetailText.textContent = description || `${name} is part of the Researcher team.`;
            showCreditPhoto(name, photo, button.dataset.photoAlt || `${name}, team member`);

            creditDetail.classList.remove('is-entering');
            void creditDetail.offsetWidth;
            creditDetail.classList.add('is-entering');
        });
    });

    if (creditPhoto) {
        creditPhoto.addEventListener('click', () => {
            creditPhoto.classList.add('credit-squish');
            playPlushieSquish();
            setTimeout(() => creditPhoto.classList.remove('credit-squish'), 220);
        });
    }
}

if (splashMark && splashLogo) {
    let activePointerId = null;

    function triggerLogoSquish() {
        splashLogo.classList.remove('is-squishing');
        void splashLogo.offsetWidth;
        splashLogo.classList.add('is-squishing');
        playPlushieSquish();
    }

    splashLogo.addEventListener('animationend', (event) => {
        if (event.animationName === 'juicy-squish') {
            splashLogo.classList.remove('is-squishing');
        }
    });

    splashLogo.addEventListener('pointerdown', (event) => {
        if (!event.isPrimary) {
            return;
        }

        event.preventDefault();
        activePointerId = event.pointerId;
        splashLogo.setPointerCapture(event.pointerId);
        triggerLogoSquish();
    });

    splashLogo.addEventListener('pointerup', (event) => {
        if (event.pointerId === activePointerId) {
            activePointerId = null;
        }
    });

    splashLogo.addEventListener('pointercancel', () => {
        activePointerId = null;
    });

    splashLogo.addEventListener('lostpointercapture', () => {
        activePointerId = null;
    });

    splashLogo.addEventListener('keydown', (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && !event.repeat) {
            event.preventDefault();
            triggerLogoSquish();
        }
    });
}

const DAILY_QUOTE_KEY = 'procrastiNotDailyQuote';
const isGitHubPagesDemo = window.PROCRASTINOT_GITHUB_PAGES === true;
const LOCAL_DEMO_PROFILE_KEY = 'procrastiNotGitHubPagesProfile';
const supabaseConfig = window.SUPABASE_CONFIG;
const supabaseClient = !isGitHubPagesDemo && window.supabase && supabaseConfig && supabaseConfig.url && supabaseConfig.anonKey
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
    : null;
let currentUser = null;
let taskList = [];
let gameState = createGameState();
let timerRemainingSeconds = 25 * 60;
let timerEndTime = null;
let timerInterval = null;
let timerHasStarted = false;
let taskDeadlineReminderInterval = null;
let siteUsageSeconds = 0;
let nextBreakReminderAt = 5 * 60;
let siteUsageLastTick = null;
let siteUsageLastSavedAt = 0;
let siteUsageInterval = null;
let siteUsageDate = '';
let buddyDashboardRequest = 0;
let buddyCodeLookupRequest = 0;
let buddyCodePreviewed = '';
let buddyCodeLookupTimeout = null;
let buddyShares = new Map();
let buddyTaskShareIds = new Set();
let buddyGardenShareIds = new Set();
let buddyChats = [];
let activeBuddyChatId = '';
let buddyFriends = [];
let activeBuddyChatBuddyId = '';
let buddyGroupBaseBuddyId = '';
let buddyChatRefreshInterval = null;
let buddySnapshotSyncPromise = Promise.resolve();
let activeTinyStepsTaskId = null;
let selectedTaskBarrier = '';
let starterTimerPreviousMinutes = null;
let selectedProfileAvatar = null;
let selectedProfileAvatarPreviewUrl = null;
let isSignUpMode = true;
const TASK_LIST_KEY = 'procrastiNotTasks';
const SITE_USAGE_KEY = 'procrastiNotSiteUsage';
const PROFILE_AVATAR_BUCKET = 'profile-avatars';
const PROFILE_AVATAR_MAX_BYTES = 5 * 1024 * 1024;
const PROFILE_AVATAR_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
let SCREEN_LIMIT_SECONDS = 5 * 60;
const POINTS_BY_DIFFICULTY = { small: 5, medium: 10, large: 20 };
const SAVED_MASCOT_IDS = ['bunny', 'cat', 'fox', 'panda', 'bear'];
const TASK_BARRIERS = {
    tired: ['Tired', 'Try the five-minute version, then decide whether to continue.'],
    mistakes: ['Worried about mistakes', 'A rough first try is allowed. You can improve it later.'],
    big: ['It feels too big', 'Ignore the whole assignment for now. Just do step one.'],
    bored: ['It feels boring', 'Pair a short work session with a small reward afterward.'],
    distracted: ['Getting distracted', 'Silence your phone and put it somewhere out of reach.']
};
const MASCOT_STAGES = [
    { title: 'Seedling Bear', badge: '🌱' },
    { title: 'Sprout Bear', badge: '🍃' },
    { title: 'Bloom Bear', badge: '🌼' },
    { title: 'Star Bear', badge: '⭐' }
];
const OFFLINE_QUOTE = {
    quote: 'To strive, to seek, to find, and not to yield.',
    author: 'Alfred, Lord Tennyson'
};

function getTimeGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good morning';
    }

    if (hour < 18) {
        return 'Good afternoon';
    }

    return 'Good evening';
}

function showDailyQuote(quote, isOnline) {
    if (reminderQuote) {
        reminderQuote.textContent = `“${quote.quote}”`;
    }
    if (reminderAuthor) {
        reminderAuthor.textContent = quote.author;
    }
    if (reminderAbout) {
        reminderAbout.hidden = !isOnline;
    }
    if (quoteStatus) {
        quoteStatus.textContent = isOnline
            ? ''
            : 'Today’s quote could not load online. Showing an offline quote instead.';
    }
}

async function loadDailyQuote() {
    let cachedQuote = null;
    let cacheReadFailed = false;
    try {
        const cached = localStorage.getItem(DAILY_QUOTE_KEY);
        const parsed = cached ? JSON.parse(cached) : null;
        if (parsed?.source === 'quoteslate' && parsed.date === dateKey(new Date()) &&
            typeof parsed.quote === 'string' && parsed.quote.trim() &&
            typeof parsed.author === 'string' && parsed.author.trim()) {
            cachedQuote = { quote: parsed.quote.trim(), author: parsed.author.trim() };
        }
    } catch {
        cachedQuote = null;
        cacheReadFailed = true;
    }

    if (cachedQuote) {
        showDailyQuote(cachedQuote, true);
        return;
    }

    showDailyQuote(OFFLINE_QUOTE, false);

    try {
        const response = await fetch('https://quoteslate.vercel.app/api/quotes/random?tags=motivation', {
            headers: { Accept: 'application/json' }
        });
        if (!response.ok) {
            throw new Error(`Quote service returned HTTP ${response.status}.`);
        }

        const today = await response.json();
        if (!today || typeof today.quote !== 'string' || !today.quote.trim() ||
            typeof today.author !== 'string' || !today.author.trim() ||
            !Array.isArray(today.tags) || !today.tags.some((tag) =>
                typeof tag === 'string' && tag.toLowerCase() === 'motivation')) {
            throw new Error('Quote service returned an invalid daily quote.');
        }

        const quote = { quote: today.quote.trim(), author: today.author.trim() };
        showDailyQuote(quote, true);
        if (cacheReadFailed && quoteStatus) {
            quoteStatus.textContent = 'Could not read the saved quote; loaded a fresh quote online.';
        }
        try {
            localStorage.setItem(DAILY_QUOTE_KEY, JSON.stringify({
                source: 'quoteslate',
                date: dateKey(new Date()),
                ...quote
            }));
        } catch {
            if (quoteStatus) {
                quoteStatus.textContent = 'Today’s quote is live, but could not be saved for offline use.';
            }
        }
    } catch (error) {
        showDailyQuote(OFFLINE_QUOTE, false);
        if (quoteStatus && error instanceof Error) {
            quoteStatus.textContent = `Could not load today’s quote online (${error.message}). Showing an offline quote instead.`;
        }
    }
}

let currentFavoriteSubject = '';

function setFavoriteSubjectStatus(message, isError = false) {
    if (favoriteSubjectStatus) {
        favoriteSubjectStatus.textContent = message;
        favoriteSubjectStatus.classList.toggle('is-error', isError);
    }
}

function selectSubjectButton(selectedButton) {
    subjectSelect.querySelectorAll('.subject-btn').forEach((button) => {
        const isSelected = button === selectedButton;
        button.classList.toggle('is-selected', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });
}

function attachSubjectButton(button) {
    button.addEventListener('click', () => {
        void saveFavoriteSubject(button.dataset.subject);
    });
}

function getOrCreateSubjectButton(subject) {
    const existingButton = Array.from(subjectSelect.querySelectorAll('.subject-btn'))
        .find((button) => button.dataset.subject === subject);
    if (existingButton) {
        return existingButton;
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'subject-btn';
    button.dataset.subject = subject;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = subject;
    subjectSelect.append(button);
    attachSubjectButton(button);
    return button;
}

async function saveFavoriteSubject(subject) {
    if (!subject) {
        return false;
    }

    const previousSubject = currentFavoriteSubject;
    const selectedButton = getOrCreateSubjectButton(subject);
    selectSubjectButton(selectedButton);
    setFavoriteSubjectStatus(`Saving ${subject} as your favorite…`);

    if (!currentUser) {
        selectSubjectButton(previousSubject ? getOrCreateSubjectButton(previousSubject) : null);
        setFavoriteSubjectStatus('Sign in to save your favorite subject.', true);
        return false;
    }

    if (!await saveProfile({ favorite_subject: subject })) {
        selectSubjectButton(previousSubject ? getOrCreateSubjectButton(previousSubject) : null);
        setFavoriteSubjectStatus(
            taskFeedback?.textContent || 'Could not save your favorite subject. Please try again.',
            true
        );
        return false;
    }

    currentFavoriteSubject = subject;
    setFavoriteSubjectStatus(`${subject} is saved as your favorite subject.`);
    return true;
}

function syncDashboard(profile) {
    const firstName = profile.display_name || 'Student';

    if (usernameDisplay) {
        usernameDisplay.textContent = firstName;
    }

    if (navUsernameDisplay) {
        navUsernameDisplay.textContent = firstName;
    }

    if (userInitials) {
        userInitials.textContent = firstName.trim().charAt(0).toUpperCase() || 'S';
    }

    if (timeGreeting) {
        timeGreeting.textContent = getTimeGreeting();
    }

    if (todayDate) {
        todayDate.textContent = new Intl.DateTimeFormat(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        }).format(new Date());
    }

    if (subjectSelect) {
        subjectSelect.querySelectorAll('.subject-btn').forEach((btn) => {
            btn.classList.remove('is-selected');
            btn.setAttribute('aria-pressed', 'false');
        });
        currentFavoriteSubject = profile.favorite_subject || '';
        if (profile.favorite_subject) {
            const button = getOrCreateSubjectButton(profile.favorite_subject);
            selectSubjectButton(button);
            setFavoriteSubjectStatus(`Your favorite subject is ${profile.favorite_subject}.`);
        } else {
            setFavoriteSubjectStatus('Choose a subject to set your favorite.');
        }
    }

    if (paceSelect && profile.study_pace) {
        const btn = paceSelect.querySelector(`[data-pace="${profile.study_pace}"]`);
        if (btn) {
            btn.classList.add('is-selected');
            btn.setAttribute('aria-pressed', 'true');
        }
        applyStudyPace(profile.study_pace);
    }

    if (taskInput) {
        taskInput.value = profile.focus_task || '';
    }

    setSavedFocusNote(profile.focus_task || '');

    if (taskFeedback) {
        taskFeedback.textContent = profile.focus_task ? 'Your focus is saved to your account.' : '';
    }

}

function formatTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}

function setFocusTimerMessage(message, isError = false) {
    if (focusTimerMessage) {
        focusTimerMessage.textContent = message;
        focusTimerMessage.classList.toggle('is-error', isError);
    }
}

function renderFocusTimer() {
    if (focusTimerDisplay) {
        focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
    }
    if (timerPauseBtn) {
        timerPauseBtn.disabled = !timerHasStarted || !timerEndTime;
    }
    if (timerStartBtn) {
        timerStartBtn.textContent = timerEndTime ? 'Running' : timerHasStarted ? 'Resume' : 'Start';
        timerStartBtn.disabled = Boolean(timerEndTime);
    }
    if (timerMinutes) {
        timerMinutes.disabled = timerHasStarted;
    }
}

function notifyTimerDone() {
    const duration = getSavedChimeDuration();
    if (duration > 0) {
        try {
            ensureAudio();
            if (audioCtx.state === 'suspended') {
                void audioCtx.resume().catch((error) => {
                    setFocusTimerMessage(`Focus session complete. The gentle chime could not play: ${error.message}`);
                });
            }
            const now = audioCtx.currentTime;
            const chimeEndsAt = now + duration;
            const notes = [587.33, 739.99, 880];
            for (let cycleStart = 0; cycleStart < duration; cycleStart += 1.1) {
                notes.forEach((frequency, index) => {
                    const startOffset = cycleStart + index * 0.16;
                    if (startOffset >= duration) {
                        return;
                    }
                    const start = now + startOffset;
                    const end = Math.min(start + 0.5, chimeEndsAt);
                    const oscillator = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(frequency, start);
                    gain.gain.setValueAtTime(0.0001, start);
                    gain.gain.exponentialRampToValueAtTime(0.07, Math.min(start + 0.025, end));
                    gain.gain.exponentialRampToValueAtTime(0.0001, end);
                    oscillator.connect(gain);
                    gain.connect(audioCtx.destination);
                    oscillator.start(start);
                    oscillator.stop(end);
                });
            }
        } catch (error) {
            setFocusTimerMessage(`Focus session complete. The gentle chime could not play: ${error.message}`);
        }
    }
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            try {
                new Notification('Focus session complete', { body: 'Take a short screen break!' });
            } catch (error) {
                setFocusTimerMessage(`Focus session complete. Desktop alert unavailable: ${error.message}`);
            }
        }
    }
}

function tickFocusTimer() {
    if (!timerEndTime) {
        return;
    }
    timerRemainingSeconds = Math.max(0, Math.ceil((timerEndTime - Date.now()) / 1000));
    renderFocusTimer();
    if (timerRemainingSeconds === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerEndTime = null;
        timerHasStarted = false;
        if (starterTimerPreviousMinutes !== null && timerMinutes) {
            timerMinutes.value = starterTimerPreviousMinutes;
            timerRemainingSeconds = Number(starterTimerPreviousMinutes) * 60;
            starterTimerPreviousMinutes = null;
        }
        renderFocusTimer();
        setFocusTimerMessage('Focus session complete. Take a short screen break!');
        notifyTimerDone();
    }
}

function startFocusTimer(taskLabel = '') {
    if (timerEndTime) {
        return;
    }
    if (!timerHasStarted) {
        const minutes = Number(timerMinutes && timerMinutes.value);
        if (!Number.isInteger(minutes) || minutes < 1 || minutes > 120) {
            setFocusTimerMessage('Choose a timer between 1 and 120 minutes.', true);
            return;
        }
        timerRemainingSeconds = minutes * 60;
    }
    try {
        ensureAudio();
        if (audioCtx.state === 'suspended') {
            void audioCtx.resume().catch((error) => {
                setFocusTimerMessage(`Timer running. The completion chime may be unavailable: ${error.message}`);
            });
        }
    } catch (error) {
        setFocusTimerMessage(`Timer running. The completion chime may be unavailable: ${error.message}`);
    }
    timerHasStarted = true;
    timerEndTime = Date.now() + timerRemainingSeconds * 1000;
    setFocusTimerMessage(taskLabel
        ? `Five-minute starter running for “${taskLabel}”.`
        : 'Timer running. You can pause whenever you need.');
    clearInterval(timerInterval);
    timerInterval = setInterval(tickFocusTimer, 250);
    renderFocusTimer();
}

function pauseFocusTimer() {
    if (!timerEndTime) {
        return;
    }
    timerRemainingSeconds = Math.max(0, Math.ceil((timerEndTime - Date.now()) / 1000));
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
    renderFocusTimer();
    setFocusTimerMessage('Timer paused.');
}

function resetFocusTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
    timerHasStarted = false;
    if (starterTimerPreviousMinutes !== null && timerMinutes) {
        timerMinutes.value = starterTimerPreviousMinutes;
        starterTimerPreviousMinutes = null;
    }
    const minutes = Number(timerMinutes && timerMinutes.value);
    timerRemainingSeconds = Number.isInteger(minutes) && minutes >= 1 && minutes <= 120
        ? minutes * 60
        : 25 * 60;
    renderFocusTimer();
    setFocusTimerMessage('Timer reset. Ready when you are.');
}

function siteUsageStorageKey() {
    return `${SITE_USAGE_KEY}:${siteUsageDate}`;
}

function loadSiteUsage() {
    siteUsageDate = dateKey(new Date());
    SCREEN_LIMIT_SECONDS = getSavedScreenBreakMinutes() * 60;
    updateScreenBreakReminderValue();
    try {
        const raw = localStorage.getItem(siteUsageStorageKey());
        const saved = raw ? JSON.parse(raw) : null;
        siteUsageSeconds = saved && Number.isSafeInteger(saved.seconds) && saved.seconds >= 0
            ? saved.seconds
            : 0;
        nextBreakReminderAt = saved && Number.isSafeInteger(saved.nextReminderAt) && saved.nextReminderAt >= SCREEN_LIMIT_SECONDS
            ? saved.nextReminderAt
            : SCREEN_LIMIT_SECONDS;
    } catch (error) {
        siteUsageSeconds = 0;
        nextBreakReminderAt = SCREEN_LIMIT_SECONDS;
        if (screenLimitMessage) {
            screenLimitMessage.textContent = `Screen-time reminder could not load: ${error.message}`;
            screenLimitMessage.classList.add('is-error');
        }
    }
}

function saveSiteUsage() {
    try {
        localStorage.setItem(siteUsageStorageKey(), JSON.stringify({
            seconds: Math.floor(siteUsageSeconds),
            nextReminderAt: Math.floor(nextBreakReminderAt)
        }));
    } catch (error) {
        if (screenLimitMessage) {
            screenLimitMessage.textContent = `Screen-time reminder could not be saved: ${error.message}`;
            screenLimitMessage.classList.add('is-error');
        }
    }
}

function updateScreenLimitMessage() {
    if (!screenLimitMessage || siteUsageSeconds < nextBreakReminderAt) {
        return;
    }
    screenLimitMessage.textContent = `You’ve been on this site for ${Math.floor(siteUsageSeconds / 60)} minutes. Consider stepping away for a screen break.`;
    screenLimitMessage.classList.remove('is-error');
    if (dismissScreenLimitBtn) {
        dismissScreenLimitBtn.hidden = false;
    }
}

function tickSiteUsage() {
    const now = Date.now();
    const today = dateKey(new Date());
    if (today !== siteUsageDate) {
        siteUsageDate = today;
        siteUsageSeconds = 0;
        nextBreakReminderAt = SCREEN_LIMIT_SECONDS;
        if (dismissScreenLimitBtn) {
            dismissScreenLimitBtn.hidden = true;
        }
        if (screenLimitMessage) {
            screenLimitMessage.textContent = '';
        }
        saveSiteUsage();
    }
    if (!currentUser || document.visibilityState !== 'visible') {
        siteUsageLastTick = null;
        return;
    }
    if (siteUsageLastTick !== null) {
        siteUsageSeconds += Math.max(0, Math.min(2, (now - siteUsageLastTick) / 1000));
        updateScreenLimitMessage();
        if (now - siteUsageLastSavedAt >= 15000) {
            saveSiteUsage();
            siteUsageLastSavedAt = now;
        }
    }
    siteUsageLastTick = now;
}

function startSiteUsageTracking() {
    loadSiteUsage();
    siteUsageLastTick = null;
    if (siteUsageInterval) {
        clearInterval(siteUsageInterval);
    }
    updateScreenLimitMessage();
    siteUsageInterval = setInterval(tickSiteUsage, 1000);
}

function setBuddyMessage(message, isError = false) {
    if (buddyMessage) {
        buddyMessage.textContent = message;
        buddyMessage.classList.toggle('is-error', isError);
    }
}

function setProfileAvatarStatus(message, isError = false) {
    if (profileAvatarStatus) {
        profileAvatarStatus.textContent = message;
        profileAvatarStatus.classList.toggle('is-error', isError);
    }
}

function profileAvatarPath(userId) {
    return `${userId}/avatar`;
}

function setNavAvatar(url = '') {
    if (!navUserAvatar || !userInitials) {
        return;
    }
    navUserAvatar.hidden = !url;
    if (url) {
        navUserAvatar.src = url;
        userInitials.hidden = true;
    } else {
        navUserAvatar.removeAttribute('src');
        userInitials.hidden = false;
    }
}

if (navUserAvatar) {
    navUserAvatar.addEventListener('error', () => setNavAvatar());
}

function discardSelectedProfileAvatar() {
    selectedProfileAvatar = null;
    if (selectedProfileAvatarPreviewUrl) {
        URL.revokeObjectURL(selectedProfileAvatarPreviewUrl);
        selectedProfileAvatarPreviewUrl = null;
    }
    if (profileAvatarInput) {
        profileAvatarInput.value = '';
    }
    if (saveProfileAvatarBtn) {
        saveProfileAvatarBtn.disabled = true;
    }
}

async function loadProfileAvatar(userId = currentUser && currentUser.id) {
    if (!supabaseClient || !userId || !profileAvatarPreview || !profileAvatarFallback) {
        return false;
    }
    discardSelectedProfileAvatar();
    profileAvatarPreview.hidden = true;
    profileAvatarPreview.removeAttribute('src');
    setNavAvatar();
    profileAvatarFallback.hidden = false;
    profileAvatarFallback.textContent = (
        usernameDisplay?.textContent || currentUser?.user_metadata?.display_name || currentUser?.email || '?'
    ).trim().charAt(0).toUpperCase() || '?';
    if (removeProfileAvatarBtn) {
        removeProfileAvatarBtn.disabled = true;
    }

    try {
        const { data, error } = await supabaseClient.storage
            .from(PROFILE_AVATAR_BUCKET)
            .createSignedUrl(profileAvatarPath(userId), 300);
        if (currentUser?.id !== userId) {
            return false;
        }
        if (error) {
            if (error.message && error.message.toLowerCase().includes('object not found')) {
                setProfileAvatarStatus('No profile picture uploaded yet.');
            } else {
                setProfileAvatarStatus(
                    `Could not load your profile picture: ${error.message}. Rerun buddy-system.sql to check the avatar storage setup.`,
                    true
                );
            }
            return false;
        }
        profileAvatarPreview.src = data.signedUrl;
        profileAvatarPreview.hidden = false;
        profileAvatarFallback.hidden = true;
        setNavAvatar(data.signedUrl);
        if (removeProfileAvatarBtn) {
            removeProfileAvatarBtn.disabled = false;
        }
        setProfileAvatarStatus('Your profile picture is saved.');
        return true;
    } catch (error) {
        setProfileAvatarStatus(`Could not load your profile picture: ${error.message}`, true);
        return false;
    }
}

async function loadBuddyAvatar(image, userId) {
    if (!supabaseClient || !userId) {
        return;
    }
    try {
        const { data, error } = await supabaseClient.storage
            .from(PROFILE_AVATAR_BUCKET)
            .createSignedUrl(profileAvatarPath(userId), 300);
        if (!error && data?.signedUrl && image.isConnected) {
            image.src = data.signedUrl;
            image.hidden = false;
            image.previousElementSibling.hidden = true;
        }
    } catch {
        image.hidden = true;
    }
}

function createBuddyAvatar(userId, displayName) {
    const avatar = document.createElement('span');
    avatar.className = 'buddy-avatar';

    const fallback = document.createElement('span');
    fallback.className = 'buddy-avatar-initials';
    fallback.textContent = displayName.trim().charAt(0).toUpperCase() || '?';
    fallback.setAttribute('aria-hidden', 'true');

    const image = document.createElement('img');
    image.className = 'buddy-avatar-image';
    image.alt = `${displayName}'s profile picture`;
    image.hidden = true;
    image.loading = 'lazy';
    image.referrerPolicy = 'no-referrer';
    image.addEventListener('error', () => {
        image.hidden = true;
        fallback.hidden = false;
    });
    avatar.append(fallback, image);
    void loadBuddyAvatar(image, userId);
    return avatar;
}

if (profileAvatarInput) {
    profileAvatarInput.addEventListener('change', () => {
        const file = profileAvatarInput.files && profileAvatarInput.files[0];
        if (!file) {
            return;
        }
        if (!PROFILE_AVATAR_TYPES.has(file.type) || file.size > PROFILE_AVATAR_MAX_BYTES) {
            discardSelectedProfileAvatar();
            setProfileAvatarStatus('Choose a JPG, PNG, or WebP image no larger than 5 MB.', true);
            void loadProfileAvatar();
            return;
        }
        if (selectedProfileAvatarPreviewUrl) {
            URL.revokeObjectURL(selectedProfileAvatarPreviewUrl);
        }
        selectedProfileAvatar = file;
        selectedProfileAvatarPreviewUrl = URL.createObjectURL(file);
        profileAvatarPreview.src = selectedProfileAvatarPreviewUrl;
        profileAvatarPreview.hidden = false;
        profileAvatarFallback.hidden = true;
        if (saveProfileAvatarBtn) {
            saveProfileAvatarBtn.disabled = false;
        }
        setProfileAvatarStatus('Preview ready. Upload your picture to share it with buddies.');
    });
}

if (saveProfileAvatarBtn) {
    saveProfileAvatarBtn.addEventListener('click', async () => {
        if (!currentUser || !selectedProfileAvatar || !supabaseClient) {
            setProfileAvatarStatus('Choose a picture and sign in before uploading.', true);
            return;
        }
        const userId = currentUser.id;
        saveProfileAvatarBtn.disabled = true;
        if (removeProfileAvatarBtn) {
            removeProfileAvatarBtn.disabled = true;
        }
        setProfileAvatarStatus('Uploading your profile picture…');
        try {
            const { error } = await supabaseClient.storage
                .from(PROFILE_AVATAR_BUCKET)
                .upload(profileAvatarPath(userId), selectedProfileAvatar, {
                    upsert: true,
                    contentType: selectedProfileAvatar.type,
                    cacheControl: '3600'
                });
            if (error) {
                throw error;
            }
            discardSelectedProfileAvatar();
            await loadProfileAvatar(userId);
            setProfileAvatarStatus('Picture saved. Buddy request participants and accepted buddies can see it.');
        } catch (error) {
            setProfileAvatarStatus(`Could not upload your picture: ${error.message}`, true);
            saveProfileAvatarBtn.disabled = false;
            if (removeProfileAvatarBtn) {
                removeProfileAvatarBtn.disabled = profileAvatarPreview.hidden;
            }
        }
    });
}

if (removeProfileAvatarBtn) {
    removeProfileAvatarBtn.addEventListener('click', async () => {
        if (!currentUser || !supabaseClient) {
            return;
        }
        const userId = currentUser.id;
        removeProfileAvatarBtn.disabled = true;
        if (saveProfileAvatarBtn) {
            saveProfileAvatarBtn.disabled = true;
        }
        setProfileAvatarStatus('Removing your profile picture…');
        try {
            const { error } = await supabaseClient.storage
                .from(PROFILE_AVATAR_BUCKET)
                .remove([profileAvatarPath(userId)]);
            if (error) {
                throw error;
            }
            if (currentUser?.id === userId) {
                profileAvatarPreview.hidden = true;
                profileAvatarPreview.removeAttribute('src');
                profileAvatarFallback.hidden = false;
                setProfileAvatarStatus('Your profile picture has been removed.');
            }
        } catch (error) {
            setProfileAvatarStatus(`Could not remove your picture: ${error.message}`, true);
            removeProfileAvatarBtn.disabled = false;
        }
    });
}

function resetProfileAvatarUi() {
    discardSelectedProfileAvatar();
    if (profileAvatarPreview) {
        profileAvatarPreview.hidden = true;
        profileAvatarPreview.removeAttribute('src');
    }
    setNavAvatar();
    if (profileAvatarFallback) {
        profileAvatarFallback.textContent = '?';
        profileAvatarFallback.hidden = false;
    }
    if (removeProfileAvatarBtn) {
        removeProfileAvatarBtn.disabled = true;
    }
    setProfileAvatarStatus('');
}

function explainBuddyError(error) {
    if (error && (error.code === 'PGRST202' || error.code === '42P01' || error.code === '42883')) {
        return 'The buddy feature needs setup. Run buddy-system.sql in your Supabase SQL Editor, then refresh this page.';
    }
    return error && error.message ? error.message : 'The buddy request failed. Please try again.';
}

function createBuddyListItem(text) {
    const item = document.createElement('li');
    item.className = 'buddy-empty';
    item.textContent = text;
    return item;
}

function updateBuddySharing(buddyId, field, value) {
    const userId = currentUser?.id;
    const previous = buddyShares.get(buddyId) || {
        share_profile: false,
        share_subject: false,
        share_tasks: false,
        share_garden: false
    };
    const next = { ...previous, [field]: value };
    const checkboxes = myBuddyList.querySelectorAll(`[data-buddy-id="${buddyId}"]`);
    checkboxes.forEach((checkbox) => { checkbox.disabled = true; });

    void (async () => {
        try {
            const { error } = await supabaseClient.rpc('set_study_buddy_sharing', {
                p_buddy_id: buddyId,
                p_share_profile: next.share_profile,
                p_share_subject: next.share_subject,
                p_share_tasks: next.share_tasks,
                p_share_garden: next.share_garden
            });
            if (error) {
                throw error;
            }
            if (currentUser?.id !== userId) {
                return;
            }
            next.share_tasks ? buddyTaskShareIds.add(buddyId) : buddyTaskShareIds.delete(buddyId);
            next.share_garden ? buddyGardenShareIds.add(buddyId) : buddyGardenShareIds.delete(buddyId);
            buddyShares.set(buddyId, next);
            if ((buddyTaskShareIds.size > 0 || buddyGardenShareIds.size > 0) &&
                !await syncBuddyTaskSnapshot()) {
                return;
            }
            setBuddyMessage('Sharing settings updated.');
        } catch (error) {
            if (value !== previous[field]) {
                buddyShares.set(buddyId, previous);
                if (previous.share_tasks) {
                    buddyTaskShareIds.add(buddyId);
                } else {
                    buddyTaskShareIds.delete(buddyId);
                }
                if (previous.share_garden) {
                    buddyGardenShareIds.add(buddyId);
                } else {
                    buddyGardenShareIds.delete(buddyId);
                }
            }
            const checkbox = myBuddyList.querySelector(`[data-buddy-id="${buddyId}"][data-share-field="${field}"]`);
            if (checkbox) {
                checkbox.checked = previous[field];
            }
            setBuddyMessage(explainBuddyError(error), true);
        } finally {
            checkboxes.forEach((checkbox) => { checkbox.disabled = false; });
        }
    })();
}

function renderBuddyDashboard(data) {
    if (myFriendCode) {
        myFriendCode.textContent = data.friend_code;
    }
    if (copyFriendCodeBtn) {
        copyFriendCodeBtn.disabled = false;
    }

    incomingBuddyRequests.replaceChildren();
    const incoming = Array.isArray(data.incoming) ? data.incoming : [];
    if (incoming.length === 0) {
        incomingBuddyRequests.append(createBuddyListItem('No new requests.'));
    }
    incoming.forEach((request) => {
        const item = document.createElement('li');
        item.className = 'buddy-request-item';
        const person = document.createElement('div');
        person.className = 'buddy-request-person';
        person.append(createBuddyAvatar(request.user_id, request.display_name));
        const name = document.createElement('span');
        name.className = 'buddy-request-name';
        name.textContent = request.display_name;
        person.append(name);
        const actions = document.createElement('div');
        actions.className = 'buddy-actions';
        [['Accept', true], ['Decline', false]].forEach(([label, accept]) => {
            const button = document.createElement('button');
            button.className = accept ? 'buddy-action-btn is-primary' : 'buddy-action-btn';
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', async () => {
                button.disabled = true;
                try {
                    const { error } = await supabaseClient.rpc('respond_to_study_buddy_request', {
                        p_request_id: request.request_id,
                        p_accept: accept
                    });
                    if (error) {
                        setBuddyMessage(explainBuddyError(error), true);
                        button.disabled = false;
                        return;
                    }
                    await loadBuddyDashboard();
                } catch (error) {
                    setBuddyMessage(explainBuddyError(error), true);
                    button.disabled = false;
                }
            });
            actions.append(button);
        });
        item.append(person, actions);
        incomingBuddyRequests.append(item);
    });

    outgoingBuddyRequests.replaceChildren();
    const outgoing = Array.isArray(data.outgoing) ? data.outgoing : [];
    if (outgoing.length === 0) {
        outgoingBuddyRequests.append(createBuddyListItem('No sent requests.'));
    }
    outgoing.forEach((request) => {
        const item = document.createElement('li');
        item.className = 'buddy-request-item';
        const name = document.createElement('span');
        name.textContent = request.display_name;
        const actions = document.createElement('div');
        actions.className = 'buddy-actions';
        const pending = document.createElement('span');
        pending.className = 'buddy-pending';
        pending.textContent = 'Pending';
        const cancelButton = document.createElement('button');
        cancelButton.className = 'buddy-action-btn';
        cancelButton.type = 'button';
        cancelButton.textContent = 'Cancel';
        cancelButton.setAttribute('aria-label', `Cancel request to ${request.display_name}`);
        cancelButton.addEventListener('click', async () => {
            cancelButton.disabled = true;
            try {
                const { error } = await supabaseClient.rpc('cancel_study_buddy_request', {
                    p_request_id: request.request_id
                });
                if (error) {
                    setBuddyMessage(explainBuddyError(error), true);
                    cancelButton.disabled = false;
                    return;
                }
                await loadBuddyDashboard();
            } catch (error) {
                setBuddyMessage(explainBuddyError(error), true);
                cancelButton.disabled = false;
            }
        });
        actions.append(pending, cancelButton);
        item.append(name, actions);
        outgoingBuddyRequests.append(item);
    });

    myBuddyList.replaceChildren();
    const friends = Array.isArray(data.friends) ? data.friends : [];
    buddyFriends = friends;
    if (friends.length === 0) {
        myBuddyList.append(createBuddyListItem('Your accepted buddies will show here.'));
    }
    friends.forEach((friend) => {
        const item = document.createElement('li');
        item.className = 'buddy-friend-item';
        const info = document.createElement('div');
        info.className = 'buddy-friend-info';
        info.append(createBuddyAvatar(friend.user_id, friend.display_name));
        const details = document.createElement('div');
        details.className = 'buddy-friend-copy';
        const name = document.createElement('strong');
        name.textContent = friend.display_name;
        const stats = document.createElement('span');
        stats.textContent = friend.profile_shared === true
            ? `${friend.points} points · Level ${friend.current_level} · ${friend.current_streak} day streak`
            : 'Progress is private until they choose to share it.';
        details.append(name, stats);
        name.dataset.buddyName = friend.user_id;
        info.append(details);
        const actions = document.createElement('div');
        actions.className = 'buddy-actions buddy-friend-actions';
        [
            ['Profile', () => viewBuddyContent(friend, 'profile')],
            ['Tasks + garden', () => viewBuddyContent(friend, 'tasks')],
            ['Chat', () => openBuddyDirectChat(friend)]
        ].forEach(([label, handler]) => {
            const button = document.createElement('button');
            button.className = 'buddy-action-btn';
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', handler);
            actions.append(button);
        });
        const shareSettings = buddyShares.get(friend.user_id) || {
            share_profile: false,
            share_subject: false,
            share_tasks: false,
            share_garden: false
        };
        const shareControls = document.createElement('fieldset');
        shareControls.className = 'buddy-share-controls';
        const shareLegend = document.createElement('legend');
        shareLegend.textContent = `What I share with ${friend.display_name}`;
        shareControls.append(shareLegend);
        [
            ['share_profile', 'Profile & progress'],
            ['share_subject', 'Favorite subject'],
            ['share_tasks', 'Full task list'],
            ['share_garden', 'Garden']
        ].forEach(([field, label]) => {
            const shareLabel = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = shareSettings[field] === true;
            checkbox.dataset.buddyId = friend.user_id;
            checkbox.dataset.shareField = field;
            checkbox.addEventListener('change', () => {
                updateBuddySharing(friend.user_id, field, checkbox.checked);
            });
            shareLabel.append(checkbox, document.createTextNode(label));
            shareControls.append(shareLabel);
        });
        const removeButton = document.createElement('button');
        removeButton.className = 'buddy-action-btn';
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove ${friend.display_name} as a buddy`);
        removeButton.addEventListener('click', async () => {
            if (!window.confirm(`Remove ${friend.display_name} from your study buddies?`)) {
                return;
            }
            removeButton.disabled = true;
            try {
                const { error } = await supabaseClient.rpc('remove_study_buddy', {
                    p_buddy_id: friend.user_id
                });
                if (error) {
                    setBuddyMessage(explainBuddyError(error), true);
                    removeButton.disabled = false;
                    return;
                }
                setBuddyMessage(`${friend.display_name} was removed from your study buddies.`);
                await loadBuddyDashboard();
            } catch (error) {
                setBuddyMessage(explainBuddyError(error), true);
                removeButton.disabled = false;
            }
        });
        const footer = document.createElement('div');
        footer.className = 'buddy-friend-footer';
        footer.append(shareControls, removeButton);
        item.append(info, actions, footer);
        myBuddyList.append(item);

    });
}

function createBuddyContentNotice(text) {
    const notice = document.createElement('p');
    notice.className = 'buddy-feature-hint';
    notice.textContent = text;
    return notice;
}

function openBuddyGroupDialog() {
    const buddy = buddyFriends.find((friend) => friend.user_id === activeBuddyChatBuddyId);
    if (!buddy || !createBuddyGroupDialog || !groupBuddyMembers) {
        return;
    }
    buddyGroupBaseBuddyId = buddy.user_id;
    buddyGroupBaseMember.textContent = `${buddy.display_name} will be included automatically. Choose other buddies to invite.`;
    groupBuddyMembers.replaceChildren();
    buddyFriends
        .filter((friend) => friend.user_id !== buddyGroupBaseBuddyId)
        .forEach((friend) => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = friend.user_id;
            checkbox.addEventListener('change', updateBuddyGroupDialogState);
            label.append(checkbox, document.createTextNode(friend.display_name));
            groupBuddyMembers.append(label);
        });
    createBuddyGroupBtn.disabled = true;
    buddyGroupStatus.textContent = buddyFriends.length > 1
        ? 'Choose at least one buddy to add.'
        : 'Add another accepted buddy before starting a group.';
    if (buddyChatProfileDialog?.open) {
        buddyChatProfileDialog.close();
    }
    createBuddyGroupDialog.showModal();
}

function updateBuddyGroupDialogState() {
    const checkboxes = [...groupBuddyMembers.querySelectorAll('input')];
    const selected = checkboxes.filter((checkbox) => checkbox.checked);
    const totalMembers = selected.length + 1;
    checkboxes.forEach((checkbox) => {
        checkbox.disabled = !checkbox.checked && totalMembers >= 8;
    });
    createBuddyGroupBtn.disabled = selected.length === 0 || totalMembers > 8;
    buddyGroupStatus.textContent = selected.length === 0
        ? 'Choose at least one buddy to add.'
        : `${totalMembers} buddies selected.`;
}

async function openBuddyChatProfile() {
    const chat = buddyChats.find((item) => item.id === activeBuddyChatId);
    if (!chat || !buddyChatProfileDialog || !buddyChatProfileBody) {
        return;
    }
    if (chat.chat_type === 'direct' && !buddyFriends.some((friend) => friend.user_id === activeBuddyChatBuddyId)) {
        return;
    }
    buddyChatProfileBody.replaceChildren();
    if (!buddyChatProfileDialog.open) {
        buddyChatProfileDialog.showModal();
    }
    if (chat.chat_type === 'direct') {
        const friend = buddyFriends.find((item) => item.user_id === activeBuddyChatBuddyId);
        if (!friend) {
            return;
        }
        buddyChatProfileDialogTitle.textContent = friend.display_name;
        const loading = createBuddyContentNotice('Loading shared profile…');
        buddyChatProfileBody.append(loading);
        openBuddyGroupDialogBtn.hidden = false;
        try {
            const { data, error } = await supabaseClient.rpc('get_study_buddy_content', {
                p_buddy_id: friend.user_id
            });
            if (error) {
                throw error;
            }
            if (!buddyChatProfileDialog.open || activeBuddyChatId !== chat.id) {
                return;
            }
            if (!data.profile_shared || !data.profile) {
                if (data.favorite_subject) {
                    const subject = document.createElement('p');
                    subject.className = 'buddy-feature-hint';
                    subject.textContent = `Favorite subject: ${data.favorite_subject}`;
                    buddyChatProfileBody.replaceChildren(
                        createBuddyContentNotice('Profile progress is private.'),
                        subject
                    );
                } else {
                    buddyChatProfileBody.replaceChildren(createBuddyContentNotice(
                        'This buddy has not shared profile progress or their favorite subject.'
                    ));
                }
            } else {
                const profile = data.profile;
                const info = document.createElement('p');
                info.className = 'buddy-feature-hint';
                info.textContent = `${profile.points} points · Level ${profile.current_level} · ${profile.current_streak} day streak · ${profile.study_pace || 'Study pace not set'}`;
                const details = [info];
                if (data.favorite_subject) {
                    const subject = document.createElement('p');
                    subject.className = 'buddy-feature-hint';
                    subject.textContent = `Favorite subject: ${data.favorite_subject}`;
                    details.push(subject);
                }
                buddyChatProfileBody.replaceChildren(...details);
            }
        } catch (error) {
            buddyChatProfileBody.replaceChildren(createBuddyContentNotice(explainBuddyError(error)));
        }
    } else {
        buddyChatProfileDialogTitle.textContent = chat.name || 'Group chat';
        openBuddyGroupDialogBtn.hidden = true;
        const members = document.createElement('ul');
        members.className = 'buddy-shared-tasks';
        (chat.members || []).forEach((member) => {
            const item = document.createElement('li');
            item.textContent = member.user_id === currentUser?.id
                ? `${member.display_name} (you)`
                : member.display_name;
            members.append(item);
        });
        buddyChatProfileBody.append(members);
    }
}

async function viewBuddyContent(friend, section) {
    if (!buddyContentPanel || !buddyContentTitle || !buddyContentBody) {
        return;
    }
    buddyContentPanel.hidden = false;
    buddyContentTitle.textContent = `${friend.display_name}'s study space`;
    buddyContentBody.replaceChildren(createBuddyContentNotice('Loading shared details…'));
    const userId = currentUser?.id;
    try {
        const { data, error } = await supabaseClient.rpc('get_study_buddy_content', {
            p_buddy_id: friend.user_id
        });
        if (error) {
            throw error;
        }
        if (currentUser?.id !== userId) {
            return;
        }
        if (section === 'profile') {
            if (!data.profile_shared || !data.profile) {
                if (data.favorite_subject) {
                    const subject = document.createElement('p');
                    subject.className = 'buddy-feature-hint';
                    subject.textContent = `Favorite subject: ${data.favorite_subject}`;
                    buddyContentBody.replaceChildren(
                        createBuddyContentNotice('Profile progress is private.'),
                        subject
                    );
                } else {
                    buddyContentBody.replaceChildren(createBuddyContentNotice(
                        'They have not shared their profile, progress, or favorite subject. Their display name stays visible.'
                    ));
                }
                return;
            }
            const profile = data.profile;
            const details = document.createElement('p');
            details.className = 'buddy-feature-hint';
            details.textContent = `${profile.points} points · Level ${profile.current_level} · ${profile.current_streak} day streak · ${profile.study_pace || 'Study pace not set'}`;
            const sharedDetails = [details];
            if (data.favorite_subject) {
                const subject = document.createElement('p');
                subject.className = 'buddy-feature-hint';
                subject.textContent = `Favorite subject: ${data.favorite_subject}`;
                sharedDetails.push(subject);
            }
            buddyContentBody.replaceChildren(...sharedDetails);
            return;
        }

        const sections = [];
        if (data.tasks_shared) {
            const taskSection = document.createElement('section');
            const heading = document.createElement('h4');
            heading.textContent = 'Shared task list';
            taskSection.append(heading);
            const tasks = Array.isArray(data.tasks) ? data.tasks : [];
            if (!tasks.length) {
                taskSection.append(createBuddyContentNotice('No tasks have been synced yet.'));
            } else {
                const list = document.createElement('ul');
                list.className = 'buddy-shared-tasks';
                tasks.forEach((task) => {
                    const item = document.createElement('li');
                    const due = task.dueDate ? ` · due ${task.dueDate}` : '';
                    item.textContent = `${task.completed ? '✓' : '○'} ${task.title}${due}`;
                    list.append(item);
                });
                taskSection.append(list);
            }
            sections.push(taskSection);
        } else {
            sections.push(createBuddyContentNotice('They have not shared their task list.'));
        }
        if (data.garden_shared) {
            const garden = data.garden || { blooms: 0, growing: 0, wilted: 0 };
            const gardenSection = document.createElement('section');
            const heading = document.createElement('h4');
            heading.textContent = 'Study garden';
            const summary = document.createElement('p');
            summary.className = 'buddy-feature-hint';
            summary.textContent = `${garden.blooms || 0} blooms · ${garden.growing || 0} growing · ${garden.wilted || 0} wilted`;
            const plots = document.createElement('div');
            plots.className = 'buddy-shared-garden';
            const flowers = ['🌸', '🌼', '🌷', '🌻', '✿'];
            const total = Math.max(20, Math.min(40, (garden.blooms || 0) + (garden.growing || 0) + (garden.wilted || 0)));
            for (let index = 0; index < total; index += 1) {
                const plot = document.createElement('span');
                plot.className = 'task-garden-plot';
                if (index < garden.blooms) {
                    plot.classList.add('is-blooming');
                    plot.textContent = flowers[index % flowers.length];
                } else if (index < garden.blooms + garden.growing) {
                    plot.classList.add('is-growing');
                    plot.textContent = '🌱';
                } else if (index < garden.blooms + garden.growing + garden.wilted) {
                    plot.classList.add('is-wilted');
                    plot.textContent = '🥀';
                } else {
                    plot.classList.add('is-empty');
                    plot.textContent = '·';
                }
                plots.append(plot);
            }
            gardenSection.append(heading, summary, plots);
            sections.push(gardenSection);
        } else {
            sections.push(createBuddyContentNotice('They have not shared their garden.'));
        }
        buddyContentBody.replaceChildren(...sections);
    } catch (error) {
        buddyContentBody.replaceChildren(createBuddyContentNotice(explainBuddyError(error)));
    }
}

function setBuddyChatStatus(message, isError = false) {
    if (buddyChatStatus) {
        buddyChatStatus.textContent = message;
        buddyChatStatus.classList.toggle('is-error', isError);
    }
}

function renderBuddyChats(chats) {
    buddyChats = Array.isArray(chats) ? chats : [];
    buddyChatList.replaceChildren();
    if (buddyChats.length === 0) {
        buddyChatList.append(createBuddyListItem('No chats yet. Open a buddy chat to get started.'));
    }
    buddyChats.forEach((chat) => {
        const item = document.createElement('li');
        const button = document.createElement('button');
        button.className = 'buddy-chat-select';
        button.type = 'button';
        button.setAttribute('aria-pressed', String(chat.id === activeBuddyChatId));
        const otherMembers = (chat.members || [])
            .filter((member) => member.user_id !== currentUser?.id)
            .map((member) => member.display_name);
        button.textContent = chat.chat_type === 'direct'
            ? (otherMembers[0] || 'Direct chat')
            : `${chat.name} · ${otherMembers.join(', ')}`;
        button.addEventListener('click', () => selectBuddyChat(chat.id));
        item.append(button);
        buddyChatList.append(item);
    });
    if (activeBuddyChatId && !buddyChats.some((chat) => chat.id === activeBuddyChatId)) {
        activeBuddyChatId = '';
        activeBuddyChatBuddyId = '';
        buddyChatPanel.hidden = true;
        if (buddyChatProfileDialog?.open) {
            buddyChatProfileDialog.close();
        }
        if (createBuddyGroupDialog?.open) {
            createBuddyGroupDialog.close();
        }
        if (buddyChatRefreshInterval) {
            clearInterval(buddyChatRefreshInterval);
            buddyChatRefreshInterval = null;
        }
    }
}

async function loadBuddyChats() {
    const userId = currentUser?.id;
    const { data, error } = await supabaseClient.rpc('get_study_buddy_chats');
    if (error) {
        throw error;
    }
    if (currentUser?.id !== userId) {
        return [];
    }
    renderBuddyChats(data);
    return buddyChats;
}

async function refreshBuddyChatMessages(chatId = activeBuddyChatId) {
    if (!chatId) {
        return;
    }
    try {
        const { data, error } = await supabaseClient.rpc('get_study_buddy_chat_messages', {
            p_chat_id: chatId
        });
        if (error) {
            throw error;
        }
        if (activeBuddyChatId !== chatId) {
            return;
        }
        buddyChatMessages.replaceChildren();
        (Array.isArray(data) ? data : []).forEach((message) => {
            const item = document.createElement('li');
            const author = document.createElement('strong');
            author.textContent = message.sender_id === currentUser?.id ? 'You' : message.sender_name;
            const body = document.createElement('p');
            body.textContent = message.body;
            const time = document.createElement('time');
            time.dateTime = message.created_at;
            time.textContent = new Date(message.created_at).toLocaleString();
            item.append(author, body, time);
            buddyChatMessages.append(item);
        });
        setBuddyChatStatus('');
    } catch (error) {
        setBuddyChatStatus(explainBuddyError(error), true);
    }
}

async function selectBuddyChat(chatId) {
    activeBuddyChatId = chatId;
    const chat = buddyChats.find((item) => item.id === chatId);
    if (!chat) {
        return;
    }
    buddyChatPanel.hidden = false;
    const otherBuddy = (chat.members || []).find((member) => member.user_id !== currentUser?.id);
    activeBuddyChatBuddyId = chat.chat_type === 'direct' ? otherBuddy?.user_id || '' : '';
    buddyChatTitle.textContent = chat.chat_type === 'direct'
        ? otherBuddy?.display_name || 'Direct chat'
        : chat.name;
    buddyChatProfileBtn.querySelector('span').textContent = chat.chat_type === 'direct'
        ? 'Profile & options'
        : 'Group members';
    renderBuddyChats(buddyChats);
    if (buddyChatRefreshInterval) {
        clearInterval(buddyChatRefreshInterval);
    }
    await refreshBuddyChatMessages(chatId);
    buddyChatRefreshInterval = setInterval(() => {
        void refreshBuddyChatMessages(chatId);
    }, 8000);
}

async function openBuddyDirectChat(friend) {
    const userId = currentUser?.id;
    try {
        const { data: chatId, error } = await supabaseClient.rpc('open_study_buddy_direct_chat', {
            p_buddy_id: friend.user_id
        });
        if (error) {
            throw error;
        }
        if (currentUser?.id !== userId) {
            return;
        }
        await loadBuddyChats();
        if (currentUser?.id !== userId) {
            return;
        }
        await selectBuddyChat(chatId);
    } catch (error) {
        setBuddyChatStatus(explainBuddyError(error), true);
    }
}

function syncBuddyTaskSnapshot() {
    if (!currentUser || !supabaseClient ||
        (buddyTaskShareIds.size === 0 && buddyGardenShareIds.size === 0)) {
        return Promise.resolve(false);
    }
    const userId = currentUser.id;
    const tasks = buddyTaskShareIds.size > 0 ? taskList.map((task) => ({
        title: task.title,
        completed: task.completed,
        dueDate: task.dueDate || '',
        difficulty: task.difficulty
    })) : [];
    const garden = {
        blooms: taskList.filter((task) => task.completed).length,
        growing: taskList.filter((task) => !task.completed && (!task.dueDate || daysUntilTaskDue(task.dueDate) >= 0)).length,
        wilted: taskList.filter((task) => !task.completed && task.dueDate && daysUntilTaskDue(task.dueDate) < 0).length
    };
    const request = buddySnapshotSyncPromise.then(async () => {
        if (currentUser?.id !== userId) {
            return false;
        }
        try {
            const { error } = await supabaseClient.rpc('sync_study_buddy_task_snapshot', {
                p_tasks: tasks,
                p_garden: garden
            });
            if (error) {
                throw error;
            }
            return true;
        } catch (error) {
            setBuddyMessage(`Could not sync shared tasks: ${explainBuddyError(error)}`, true);
            return false;
        }
    });
    buddySnapshotSyncPromise = request.then(() => undefined, () => undefined);
    return request;
}

async function syncBuddyProgress() {
    if (!currentUser || !supabaseClient) {
        return false;
    }
    const progress = getStreakSummary(gameState.streakDates);
    try {
        const { error } = await supabaseClient.rpc('sync_study_buddy_progress', {
            p_points: gameState.points,
            p_current_level: Math.floor(gameState.xp / 100) + 1,
            p_current_streak: progress.current
        });
        if (error) {
            setBuddyMessage(explainBuddyError(error), true);
            return false;
        }
        return true;
    } catch (error) {
        setBuddyMessage(explainBuddyError(error), true);
        return false;
    }
}

async function loadBuddyDashboard() {
    if (!currentUser || !supabaseClient) {
        return false;
    }
    const userId = currentUser.id;
    const requestId = ++buddyDashboardRequest;
    setBuddyMessage('Loading study buddies…');
    try {
        if (!await syncBuddyProgress()) {
            return false;
        }
        const { data, error } = await supabaseClient.rpc('get_study_buddy_dashboard');
        if (error) {
            setBuddyMessage(explainBuddyError(error), true);
            if (myFriendCode) {
                myFriendCode.textContent = 'Unavailable';
            }
            if (copyFriendCodeBtn) {
                copyFriendCodeBtn.disabled = true;
            }
            return false;
        }
        if (requestId !== buddyDashboardRequest) {
            return;
        }
        const [{ data: sharingRows, error: sharingError }, { data: chats, error: chatsError }] = await Promise.all([
            supabaseClient.rpc('get_study_buddy_shares'),
            supabaseClient.rpc('get_study_buddy_chats')
        ]);
        if (sharingError) {
            throw sharingError;
        }
        if (chatsError) {
            throw chatsError;
        }
        if (requestId !== buddyDashboardRequest || currentUser?.id !== userId) {
            return false;
        }
        buddyShares = new Map((Array.isArray(sharingRows) ? sharingRows : []).map((sharing) => [
            sharing.buddy_id,
            {
                share_profile: sharing.share_profile === true,
                share_subject: sharing.share_subject === true,
                share_tasks: sharing.share_tasks === true,
                share_garden: sharing.share_garden === true
            }
        ]));
        buddyTaskShareIds = new Set(
            [...buddyShares.entries()]
                .filter(([, sharing]) => sharing.share_tasks)
                .map(([buddyId]) => buddyId)
        );
        buddyGardenShareIds = new Set(
            [...buddyShares.entries()]
                .filter(([, sharing]) => sharing.share_garden)
                .map(([buddyId]) => buddyId)
        );
        renderBuddyDashboard(data);
        renderBuddyChats(chats);
        if (buddyTaskShareIds.size > 0 || buddyGardenShareIds.size > 0) {
            void syncBuddyTaskSnapshot();
        }
        setBuddyMessage('Your display name and progress are visible to buddies. Extra profile details, tasks, and your garden are controlled per buddy.');
        return true;
    } catch (error) {
        setBuddyMessage(explainBuddyError(error), true);
        return false;
    }
}

function taskListStorageKey(userId) {
    return `${TASK_LIST_KEY}:${userId}`;
}

function taskDeadlineReminderStorageKey(userId) {
    return `procrastiNotDeadlineReminderDate:${userId}`;
}

function createGameState() {
    return {
        points: 0,
        xp: 0,
        streakDates: [],
        unlockedMascots: ['bunny'],
        activeMascot: 'bunny'
    };
}

function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function isValidDateKey(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return false;
    }
    const date = new Date(`${value}T12:00:00`);
    return !Number.isNaN(date.getTime()) && dateKey(date) === value;
}

function daysUntilTaskDue(value) {
    if (!isValidDateKey(value)) {
        return null;
    }
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const dueDate = new Date(`${value}T12:00:00`);
    return Math.round((dueDate - today) / 86400000);
}

function taskDueLabel(task) {
    if (!task.dueDate || !isValidDateKey(task.dueDate)) {
        return null;
    }
    const daysLeft = daysUntilTaskDue(task.dueDate);
    if (daysLeft < 0) {
        return { text: `Overdue by ${Math.abs(daysLeft)} day${daysLeft === -1 ? '' : 's'}`, state: 'overdue' };
    }
    if (daysLeft === 0) {
        return { text: 'Due today', state: 'today' };
    }
    if (daysLeft === 1) {
        return { text: 'Due tomorrow', state: 'soon' };
    }
    return {
        text: `Due ${new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' }).format(new Date(`${task.dueDate}T12:00:00`))}`,
        state: 'upcoming'
    };
}

function recommendedTinySteps(title) {
    const task = title.toLocaleLowerCase();
    if (/essay|write|report|reflection|paper|journal/.test(task)) {
        return ['Open a blank page and write the title', 'List three main points', 'Write one rough sentence for each point', 'Add the details you already know', 'Read it once and make one improvement'];
    }
    if (/math|solve|equation|problem|physics|chem/.test(task)) {
        return ['Copy the first problem', 'Write down a formula or idea you know', 'Try the easiest part first', 'Work through the next part', 'Check one answer'];
    }
    if (/research|project|present|slides|group/.test(task)) {
        return ['Write what the assignment asks for', 'Find two useful ideas or sources', 'Make a short outline', 'Complete the first small section', 'Review what you have so far'];
    }
    return ['Gather what you need', 'Read the instructions once', 'Choose the easiest part', 'Work on it for five minutes', 'Review what you finished'];
}

function getFavoriteSubjectBridge(taskTitle) {
    const task = taskTitle.toLocaleLowerCase();
    const favorite = currentFavoriteSubject.trim();
    const subject = favorite.toLocaleLowerCase();
    if (!favorite || /mathematics|math/.test(subject) ||
        !/\b(math|mathematics|algebra|geometry|equation|equations|calculus|arithmetic)\b/.test(task)) {
        return null;
    }

    let connection = `Use something you enjoy about ${favorite} as a familiar starting point: what do you already know, what is the unknown, and what is one small move that could get you closer? Keep the math steps accurate; this is just another way into the task.`;
    if (/\bscience\b/.test(subject)) {
        connection = 'Treat the problem like a small experiment: list what you know, identify the unknown, make one change at a time, then check the result in the original equation.';
    } else if (/\benglish\b/.test(subject)) {
        connection = 'Treat the equation like a sentence with a blank: the known numbers are clues, and your goal is to find the value that makes both sides equal.';
    } else if (/araling panlipunan|history|social studies/.test(subject)) {
        connection = 'Treat it like investigating a question: separate known facts from the unknown, use one clue or operation at a time, then check your conclusion against the original equation.';
    }

    return { subject: favorite, connection };
}

function renderTaskDueReminder() {
    if (!taskDueReminder || !taskDueReminderText || !taskDueReminderButton) {
        return;
    }
    const urgentTask = taskList
        .filter((task) => !task.completed && task.dueDate &&
            daysUntilTaskDue(task.dueDate) >= 0 && daysUntilTaskDue(task.dueDate) <= 1)
        .sort((first, second) => daysUntilTaskDue(first.dueDate) - daysUntilTaskDue(second.dueDate))[0];
    if (!urgentTask) {
        taskDueReminder.hidden = true;
        return;
    }
    const due = taskDueLabel(urgentTask);
    taskDueReminderText.textContent = `${urgentTask.title} is ${due.text.toLocaleLowerCase()}. It is okay to start with one small step.`;
    taskDueReminderButton.dataset.taskId = urgentTask.id;
    taskDueReminder.hidden = false;
}

function checkTaskDeadlineNotification() {
    if (!currentUser || !getSavedDeadlineReminderSetting() ||
        !('Notification' in window) || Notification.permission !== 'granted') {
        return;
    }

    const today = dateKey(new Date());
    try {
        const reminderKey = taskDeadlineReminderStorageKey(currentUser.id);
        if (localStorage.getItem(reminderKey) === today) {
            return;
        }

        const dueTomorrow = taskList.filter((task) =>
            !task.completed && task.dueDate && daysUntilTaskDue(task.dueDate) === 1
        );
        if (dueTomorrow.length === 0) {
            return;
        }

        const message = dueTomorrow.length === 1
            ? `${dueTomorrow[0].title} is due tomorrow. If it feels helpful, you could start with one small step today.`
            : `${dueTomorrow.length} tasks are due tomorrow. One small step on any of them is a good start.`;
        const notification = new Notification('A gentle deadline heads-up', {
            body: message,
            tag: `procrastinot-deadline-${currentUser.id}-${today}`,
            renotify: false
        });
        const firstTaskId = dueTomorrow[0].id;
        notification.onclick = () => {
            window.focus();
            const task = taskList.find((item) => item.id === firstTaskId && !item.completed);
            if (task) {
                openTinySteps(task.id);
            }
            notification.close();
        };
        localStorage.setItem(reminderKey, today);
    } catch (error) {
        if (settingsNotifyStatus) {
            settingsNotifyStatus.textContent = `Could not show a deadline reminder: ${error.message}`;
            settingsNotifyStatus.classList.add('is-error');
        }
    }
}

function startTaskDeadlineReminderChecks() {
    if (taskDeadlineReminderInterval) {
        clearInterval(taskDeadlineReminderInterval);
    }
    checkTaskDeadlineNotification();
    taskDeadlineReminderInterval = setInterval(checkTaskDeadlineNotification, 15 * 60 * 1000);
}

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        checkTaskDeadlineNotification();
    }
});

function renderTaskGarden() {
    if (!taskGarden) {
        return;
    }
    const blooms = taskList.filter((task) => task.completed).length;
    const growing = taskList.filter((task) => !task.completed && (!task.dueDate || daysUntilTaskDue(task.dueDate) >= 0)).length;
    const wilted = taskList.filter((task) => !task.completed && task.dueDate && daysUntilTaskDue(task.dueDate) < 0).length;
    const plots = Math.max(20, taskList.length);
    const flowers = ['🌸', '🌼', '🌷', '🌻', '✿'];

    taskGarden.replaceChildren();
    for (let index = 0; index < plots; index += 1) {
        const task = taskList[index];
        const plot = document.createElement('span');
        plot.className = 'task-garden-plot';
        if (task) {
            if (task.completed) {
                plot.classList.add('is-blooming');
                plot.textContent = flowers[index % flowers.length];
                plot.setAttribute('aria-label', `Bloom from ${task.title}`);
            } else if (task.dueDate && daysUntilTaskDue(task.dueDate) < 0) {
                plot.classList.add('is-wilted');
                plot.textContent = '🥀';
                plot.setAttribute('aria-label', `Wilted seed for ${task.title}`);
            } else {
                plot.classList.add('is-growing');
                plot.textContent = '🌱';
                plot.setAttribute('aria-label', `Growing seed for ${task.title}`);
            }
        } else {
            plot.classList.add('is-empty');
            plot.textContent = '·';
            plot.setAttribute('aria-hidden', 'true');
        }
        taskGarden.append(plot);
    }

    taskGarden.setAttribute('aria-label', `Study garden with ${blooms} blooms, ${growing} growing seeds, and ${wilted} wilted seeds`);
    if (gardenFlowerCount) {
        gardenFlowerCount.textContent = `${blooms} bloom${blooms === 1 ? '' : 's'}`;
    }
    if (gardenSummary) {
        gardenSummary.textContent = `${growing} seed${growing === 1 ? '' : 's'} growing${wilted ? ` · ${wilted} wilted; they can still bloom when you finish` : ''}.`;
    }
}

function renderMascotEvolution() {
    const level = Math.floor(gameState.xp / 100) + 1;
    const stageIndex = Math.min(MASCOT_STAGES.length - 1, level - 1);
    const stage = MASCOT_STAGES[stageIndex];
    if (mascotFace) {
        mascotFace.dataset.stage = String(stageIndex + 1);
    }
    if (mascotEvolutionBadge) {
        mascotEvolutionBadge.textContent = stage.badge;
    }
    if (mascotStageTitle) {
        mascotStageTitle.textContent = stage.title;
    }
    if (mascotStageText) {
        mascotStageText.textContent = stageIndex === MASCOT_STAGES.length - 1
            ? 'Your bear has reached its star stage. Keep growing your garden together.'
            : `Earn ${((stageIndex + 1) * 100) - gameState.xp} more XP to help your bear grow.`;
    }
}

function streakLengthEndingAt(startDate, streakDates) {
    let count = 0;
    const date = new Date(`${startDate}T12:00:00`);
    const dates = new Set(streakDates);

    while (dates.has(dateKey(date))) {
        count += 1;
        date.setDate(date.getDate() - 1);
    }
    return count;
}

function getStreakSummary(streakDates) {
    if (streakDates.length === 0) {
        return { current: 0, longest: 0 };
    }

    const today = new Date();
    const todayKey = dateKey(today);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = dateKey(yesterday);
    const activeStart = streakDates.includes(todayKey)
        ? todayKey
        : streakDates.includes(yesterdayKey) ? yesterdayKey : null;
    const current = activeStart ? streakLengthEndingAt(activeStart, streakDates) : 0;
    const sortedDates = [...new Set(streakDates)].sort();
    let longest = 0;
    let run = 0;
    let previousDate = null;

    sortedDates.forEach((value) => {
        const date = new Date(`${value}T12:00:00`);
        const distance = previousDate ? Math.round((date - previousDate) / 86400000) : null;
        run = distance === 1 ? run + 1 : 1;
        longest = Math.max(longest, run);
        previousDate = date;
    });

    return { current, longest };
}

function setMascotMessage(message, isError = false) {
    if (mascotMessage) {
        mascotMessage.textContent = message;
        mascotMessage.classList.toggle('is-error', isError);
    }
}

function setTaskListMessage(message, isError = false) {
    if (taskListMessage) {
        taskListMessage.textContent = message;
        taskListMessage.classList.toggle('is-error', isError);
    }
}

function renderTinySteps() {
    const task = taskList.find((item) => item.id === activeTinyStepsTaskId);
    if (!task || !tinyStepsTask || !tinyStepReasons || !tinyStepList) {
        return;
    }
    tinyStepsTask.textContent = `“${task.title}” in small pieces. Just focus on the next step.`;
    const subjectBridge = getFavoriteSubjectBridge(task.title);
    if (tinyStepsSubjectBridge && tinyStepsSubjectBridgeTitle && tinyStepsSubjectBridgeText) {
        tinyStepsSubjectBridge.hidden = !subjectBridge;
        if (subjectBridge) {
            tinyStepsSubjectBridgeTitle.textContent = `A ${subjectBridge.subject} connection`;
            tinyStepsSubjectBridgeText.textContent = subjectBridge.connection;
        }
    }
    tinyStepReasons.replaceChildren();
    Object.entries(TASK_BARRIERS).forEach(([key, [label]]) => {
        const button = document.createElement('button');
        button.className = 'tiny-step-reason';
        button.type = 'button';
        button.textContent = label;
        button.setAttribute('aria-pressed', String(task.barrier === key));
        button.classList.toggle('is-selected', task.barrier === key);
        button.addEventListener('click', () => {
            const previousBarrier = task.barrier;
            task.barrier = key;
            if (!saveTaskList()) {
                task.barrier = previousBarrier;
                return;
            }
            renderTinySteps();
        });
        tinyStepReasons.append(button);
    });

    const selectedBarrier = TASK_BARRIERS[task.barrier];
    if (tinyStepEncouragement) {
        tinyStepEncouragement.textContent = selectedBarrier ? selectedBarrier[1] : '';
        tinyStepEncouragement.hidden = !selectedBarrier;
    }
    tinyStepList.replaceChildren();
    task.steps.forEach((step, index) => {
        const item = document.createElement('li');
        item.className = 'tiny-step-item';
        item.classList.toggle('is-complete', step.completed);
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = step.completed;
        checkbox.setAttribute('aria-label', `Mark step ${index + 1} complete`);
        checkbox.addEventListener('change', () => {
            const previousValue = step.completed;
            step.completed = checkbox.checked;
            if (saveTaskList()) {
                renderTinySteps();
            } else {
                step.completed = previousValue;
                checkbox.checked = previousValue;
            }
        });
        const number = document.createElement('span');
        number.className = 'tiny-step-number';
        number.textContent = String(index + 1);
        const text = document.createElement('span');
        text.textContent = step.text;
        label.append(checkbox, number, text);
        item.append(label);
        tinyStepList.append(item);
    });
    if (tinyStepStatus) {
        const completed = task.steps.filter((step) => step.completed).length;
        tinyStepStatus.textContent = `${completed} of ${task.steps.length} small steps complete.`;
        tinyStepStatus.classList.remove('is-error');
    }
}

function openTinySteps(taskId) {
    const task = taskList.find((item) => item.id === taskId);
    if (!task || !tinyStepsDialog) {
        return;
    }
    if (!Array.isArray(task.steps) || task.steps.length === 0) {
        task.steps = recommendedTinySteps(task.title).map((text) => ({ text, completed: false }));
    }
    activeTinyStepsTaskId = task.id;
    renderTinySteps();
    if (!tinyStepsDialog.open) {
        tinyStepsDialog.showModal();
    }
}

function closeTinySteps() {
    if (tinyStepsDialog && tinyStepsDialog.open) {
        tinyStepsDialog.close();
    }
    activeTinyStepsTaskId = null;
}

function startFiveMinuteStarter() {
    const task = taskList.find((item) => item.id === activeTinyStepsTaskId);
    if (!task || !timerMinutes) {
        return;
    }
    if (timerEndTime) {
        if (tinyStepStatus) {
            tinyStepStatus.textContent = 'Pause or reset your current timer before starting a five-minute session.';
            tinyStepStatus.classList.add('is-error');
        }
        return;
    }

    starterTimerPreviousMinutes = timerMinutes.value || String(getSavedDefaultTimer());
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
    timerHasStarted = false;
    timerMinutes.value = '5';
    timerRemainingSeconds = 5 * 60;
    renderFocusTimer();
    startFocusTimer(task.title);
    window.location.hash = 'focusTools';
    closeTinySteps();
}

if (closeTinyStepsBtn) {
    closeTinyStepsBtn.addEventListener('click', closeTinySteps);
}

if (dismissTinyStepsBtn) {
    dismissTinyStepsBtn.addEventListener('click', closeTinySteps);
}

if (tinyStepsDialog) {
    tinyStepsDialog.addEventListener('close', () => {
        activeTinyStepsTaskId = null;
    });
}

if (startTinyTimerBtn) {
    startTinyTimerBtn.addEventListener('click', startFiveMinuteStarter);
}

function saveTaskList() {
    if (!currentUser) {
        setTaskListMessage('Sign in to save your task list.', true);
        return false;
    }

    try {
        localStorage.setItem(taskListStorageKey(currentUser.id), JSON.stringify({
            tasks: taskList,
            gameState
        }));
        checkTaskDeadlineNotification();
        if (buddyTaskShareIds.size > 0 || buddyGardenShareIds.size > 0) {
            void syncBuddyTaskSnapshot();
        }
        setTaskListMessage('');
        return true;
    } catch (error) {
        setTaskListMessage(`Could not save your task list: ${error.message}`, true);
        return false;
    }
}

function renderTaskList() {
    if (!taskListItems) {
        return;
    }

    renderTaskDueReminder();
    taskListItems.replaceChildren();
    if (taskList.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'task-list-empty';
        emptyItem.textContent = 'No tasks yet. Add one above to get started.';
        taskListItems.append(emptyItem);
        return;
    }

    const sortedTasks = [...taskList].sort((first, second) => {
        if (first.completed !== second.completed) {
            return Number(first.completed) - Number(second.completed);
        }
        if (!first.dueDate) return 1;
        if (!second.dueDate) return -1;
        return first.dueDate.localeCompare(second.dueDate);
    });

    sortedTasks.forEach((task) => {
        const item = document.createElement('li');
        item.className = 'task-list-item';
        const main = document.createElement('div');
        main.className = 'task-list-item-main';

        const label = document.createElement('label');
        label.className = 'task-list-label';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.setAttribute('aria-label', `Mark "${task.title}" ${task.completed ? 'incomplete' : 'complete'}`);
        checkbox.addEventListener('change', () => {
            const previousCompleted = task.completed;
            const previousAwarded = task.awarded;
            const previousCompletedAt = task.completedAt;
            const previousGameState = JSON.stringify(gameState);
            task.completed = checkbox.checked;
            if (checkbox.checked && !task.awarded) {
                const basePoints = POINTS_BY_DIFFICULTY[task.difficulty];
                const earlyBonus = daysUntilTaskDue(task.dueDate) > 0 ? 5 : 0;
                const points = basePoints + earlyBonus;
                task.awarded = true;
                task.completedAt = new Date().toISOString();
                gameState.points += points;
                gameState.xp += points;
                const today = dateKey(new Date());
                if (!gameState.streakDates.includes(today)) {
                    gameState.streakDates.push(today);
                }
            }

            if (saveTaskList()) {
                if (checkbox.checked && !previousAwarded) {
                    const earlyBonus = daysUntilTaskDue(task.dueDate) > 0 ? 5 : 0;
                    const points = POINTS_BY_DIFFICULTY[task.difficulty] + earlyBonus;
                    setTaskListMessage(earlyBonus
                        ? `Task complete early! +${points} points and XP, including a 5-point bonus.`
                        : `Task complete! +${points} points and XP.`);
                    void syncBuddyProgress();
                } else if (!checkbox.checked) {
                    setTaskListMessage('Task marked incomplete. Any points already earned are yours to keep.');
                } else {
                    setTaskListMessage('Task complete again. Rewards for this task were already earned.');
                }
                renderTaskList();
                renderGameProgress();
                if (!checkbox.checked && previousAwarded) {
                    void syncBuddyProgress();
                }
            } else {
                task.completed = previousCompleted;
                task.awarded = previousAwarded;
                task.completedAt = previousCompletedAt;
                gameState = JSON.parse(previousGameState);
                checkbox.checked = previousCompleted;
            }
        });

        const title = document.createElement('span');
        title.className = task.completed ? 'is-complete' : '';
        title.textContent = task.title;
        label.append(checkbox, title);

        const taskInfo = document.createElement('span');
        taskInfo.className = 'task-list-info';
        const difficulty = document.createElement('span');
        difficulty.className = `task-difficulty is-${task.difficulty}`;
        difficulty.textContent = `${task.difficulty} · ${POINTS_BY_DIFFICULTY[task.difficulty]} pts`;
        taskInfo.append(difficulty);
        const due = taskDueLabel(task);
        if (due) {
            const dueBadge = document.createElement('span');
            dueBadge.className = `task-due-badge is-${due.state}`;
            if (task.completed) {
                dueBadge.classList.add('is-complete');
                dueBadge.textContent = 'Completed';
            } else {
                dueBadge.textContent = due.text;
            }
            taskInfo.append(dueBadge);
        }
        if (task.awarded) {
            const earned = document.createElement('span');
            earned.className = 'task-earned';
            earned.textContent = 'Earned';
            taskInfo.append(earned);
        }

        const actions = document.createElement('div');
        actions.className = 'task-list-actions';
        const guideButton = document.createElement('button');
        guideButton.className = 'tiny-step-btn';
        guideButton.type = 'button';
        guideButton.textContent = 'Tiny first step';
        guideButton.addEventListener('click', () => openTinySteps(task.id));

        const removeButton = document.createElement('button');
        removeButton.className = 'task-list-remove';
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove task: ${task.title}`);
        removeButton.addEventListener('click', () => {
            const taskIndex = taskList.findIndex((itemTask) => itemTask.id === task.id);
            if (taskIndex < 0) {
                return;
            }
            const [removedTask] = taskList.splice(taskIndex, 1);
            if (saveTaskList()) {
                renderTaskList();
                renderTaskGarden();
            } else {
                taskList.splice(taskIndex, 0, removedTask);
                renderTaskList();
            }
        });

        actions.append(guideButton, removeButton);
        main.append(label, taskInfo, actions);
        item.append(main);
        taskListItems.append(item);
    });
}

function renderGameProgress() {
    const level = Math.floor(gameState.xp / 100) + 1;
    const progress = gameState.xp % 100;
    const streak = getStreakSummary(gameState.streakDates);

    if (pointsBalance) pointsBalance.textContent = String(gameState.points);
    if (levelNumber) levelNumber.textContent = String(level);
    if (streakCount) streakCount.textContent = String(streak.current);
    if (streakUnit) streakUnit.textContent = streak.current === 1 ? 'day' : 'days';
    if (longestStreakCount) longestStreakCount.textContent = String(streak.longest);
    if (longestStreakUnit) longestStreakUnit.textContent = streak.longest === 1 ? 'day' : 'days';
    if (xpProgressText) xpProgressText.textContent = `${progress} / 100 XP to level ${level + 1}`;
    if (totalXpText) totalXpText.textContent = `${gameState.xp} XP total`;
    if (levelProgressBar) levelProgressBar.style.width = `${progress}%`;
    if (levelProgressTrack) levelProgressTrack.setAttribute('aria-valuenow', String(progress));
    renderTaskGarden();
    renderMascotEvolution();
}

function loadTaskList(userId) {
    let loaded = true;
    try {
        const storedData = localStorage.getItem(taskListStorageKey(userId));
        const parsedData = storedData ? JSON.parse(storedData) : null;
        const savedTasks = Array.isArray(parsedData) ? parsedData : parsedData?.tasks || [];
        const savedGameState = Array.isArray(parsedData) ? createGameState() : parsedData?.gameState || createGameState();
        if (!Array.isArray(savedTasks) || savedTasks.some((task) =>
            !task || typeof task.id !== 'string' || typeof task.title !== 'string' ||
            typeof task.completed !== 'boolean' ||
            (task.difficulty !== undefined && !Object.hasOwn(POINTS_BY_DIFFICULTY, task.difficulty)) ||
            (task.dueDate !== undefined && task.dueDate !== '' && !isValidDateKey(task.dueDate))
        )) {
            throw new Error('Saved task list data is invalid.');
        }
        if (!Array.isArray(savedGameState.streakDates)) {
            throw new Error('Saved streak data is invalid.');
        }
        const hasValidStreakDates = savedGameState.streakDates.every((value) =>
            typeof value === 'string' &&
            /^\d{4}-\d{2}-\d{2}$/.test(value) &&
            dateKey(new Date(`${value}T12:00:00`)) === value
        );
        if (!Number.isSafeInteger(savedGameState.points) || savedGameState.points < 0 ||
            !Number.isSafeInteger(savedGameState.xp) || savedGameState.xp < 0 ||
            !hasValidStreakDates ||
            !Array.isArray(savedGameState.unlockedMascots) ||
            !savedGameState.unlockedMascots.includes('bunny') ||
            !SAVED_MASCOT_IDS.includes(savedGameState.activeMascot) ||
            !savedGameState.unlockedMascots.includes(savedGameState.activeMascot) ||
            savedGameState.unlockedMascots.some((id) => !SAVED_MASCOT_IDS.includes(id))) {
            throw new Error('Saved progress data is invalid.');
        }
        taskList = savedTasks.map((task) => ({
            ...task,
            difficulty: task.difficulty || 'medium',
            dueDate: typeof task.dueDate === 'string' && isValidDateKey(task.dueDate) ? task.dueDate : '',
            awarded: task.awarded === true,
            completedAt: typeof task.completedAt === 'string' ? task.completedAt : null,
            steps: Array.isArray(task.steps) && task.steps.every((step) =>
                step && typeof step.text === 'string' && typeof step.completed === 'boolean'
            ) ? task.steps : null,
            barrier: typeof task.barrier === 'string' && Object.hasOwn(TASK_BARRIERS, task.barrier) ? task.barrier : ''
        }));
        gameState = savedGameState;
        setTaskListMessage('');
        setMascotMessage('');
    } catch (error) {
        loaded = false;
        taskList = [];
        gameState = createGameState();
        setTaskListMessage(`Could not load your task list: ${error.message}`, true);
        setMascotMessage(`Could not load your progress: ${error.message}`, true);
    }
    renderTaskList();
    renderGameProgress();
    return loaded;
}

function setAuthMessage(message, isError = false) {
    if (authMessage) {
        authMessage.textContent = message;
        authMessage.classList.toggle('is-error', isError);
    }
}

function setSavedFocusNote(task) {
    if (!savedFocusNote || !savedFocusText) {
        return;
    }

    const hasFocus = Boolean(task.trim());
    const wasHidden = savedFocusNote.hidden;
    const focusChanged = savedFocusText.textContent !== task;
    savedFocusNote.classList.remove('is-appearing', 'is-replacing');
    savedFocusText.textContent = task;
    savedFocusNote.hidden = !hasFocus;

    if (hasFocus && (wasHidden || focusChanged)) {
        void savedFocusNote.offsetWidth;
        savedFocusNote.classList.add(wasHidden ? 'is-appearing' : 'is-replacing');
    }
}

function setAuthMode(isSignUp) {
    isSignUpMode = isSignUp;
    displayNameField.hidden = !isSignUp;
    loginDisplayName.required = isSignUp;
    loginPassword.autocomplete = isSignUp ? 'new-password' : 'current-password';
    enterBtn.innerHTML = isSignUp
        ? 'Create account <span aria-hidden="true">→</span>'
        : 'Sign in <span aria-hidden="true">→</span>';
    authModeBtn.textContent = isSignUp
        ? 'Already have an account? Sign in'
        : 'New here? Create an account';
    setAuthMessage(isSignUp
        ? 'Create an account to save your focus and study preferences.'
        : 'Sign in to continue to your saved work.');
}

async function loadAccount(user) {
    if (taskDeadlineReminderInterval) {
        clearInterval(taskDeadlineReminderInterval);
        taskDeadlineReminderInterval = null;
    }
    currentUser = user;
    resetProfileAvatarUi();
    try {
        const { data: profile, error } = await supabaseClient
            .from('student_profiles')
            .select('display_name, focus_task, favorite_subject, study_pace')
            .eq('user_id', user.id)
            .maybeSingle();

        if (error) {
            currentUser = null;
            resetProfileAvatarUi();
            setAuthMessage(`Could not load your saved work: ${error.message}`, true);
            return;
        }

        const accountProfile = profile || {
            display_name: (user.user_metadata && user.user_metadata.display_name) || user.email.split('@')[0],
            focus_task: '',
            favorite_subject: 'Science',
            study_pace: 'My own pace'
        };

        if (!profile) {
            const { error: saveError } = await supabaseClient
                .from('student_profiles')
                .insert({ user_id: user.id, ...accountProfile });

            if (saveError) {
                currentUser = null;
                resetProfileAvatarUi();
                setAuthMessage(`Could not create your saved-work profile: ${saveError.message}`, true);
                return;
            }
        }

        syncDashboard(accountProfile);
        void loadProfileAvatar(user.id);
        const taskListLoaded = loadTaskList(user.id);
        startTaskDeadlineReminderChecks();
        startSiteUsageTracking();
        loadCalendarReminders();
        renderCalendar();
        renderReminderList();
        rescheduleAllAlarms();
        if (taskListLoaded) {
            void loadBuddyDashboard();
        }
        setAuthMessage('');
        if (appShell) {
            appShell.inert = false;
            appShell.setAttribute('aria-hidden', 'false');
        }
        if (introScreen) {
            introScreen.classList.add('hidden');
        }
    } catch (error) {
        currentUser = null;
        resetProfileAvatarUi();
        setAuthMessage(`Could not load your saved work: ${error.message}`, true);
    }
}

if (authModeBtn) {
    authModeBtn.addEventListener('click', () => setAuthMode(!isSignUpMode));
}

if (supabaseClient && loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        enterBtn.disabled = true;
        setAuthMessage(isSignUpMode ? 'Creating your account…' : 'Signing you in…');

        try {
            const result = isSignUpMode
                ? await supabaseClient.auth.signUp({
                    email: loginEmail.value.trim(),
                    password: loginPassword.value,
                    options: { data: { display_name: loginDisplayName.value.trim() } }
                })
                : await supabaseClient.auth.signInWithPassword({
                    email: loginEmail.value.trim(),
                    password: loginPassword.value
                });

            if (result.error) {
                setAuthMessage(result.error.message, true);
                return;
            }

            if (isSignUpMode && !result.data.session) {
                setAuthMessage('Account created. Check your email to confirm your address, then sign in.');
            }
        } catch (error) {
            setAuthMessage(`Account request failed: ${error.message}`, true);
        } finally {
            enterBtn.disabled = false;
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        if (!supabaseClient) {
            return;
        }
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            setAuthMessage(`Could not sign out: ${error.message}`, true);
            if (taskFeedback) {
                taskFeedback.textContent = `Could not sign out: ${error.message}`;
                taskFeedback.classList.add('is-error');
            }
        }
    });
}

function toggleMenu(forceOpen) {
    if (!sideMenu || !menuBtn) {
        return;
    }

    const openingMenu = typeof forceOpen === 'boolean' ? forceOpen : !sideMenu.classList.contains('open');
    sideMenu.classList.toggle('open', openingMenu);
    sideMenu.setAttribute('aria-hidden', String(!openingMenu));
    menuBtn.setAttribute('aria-expanded', String(openingMenu));
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => toggleMenu());
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => toggleMenu(false));
}

sideMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        updateAppPage();
        toggleMenu(false);
    });
});

function updateAppPage() {
    let targetId = window.location.hash.slice(1) || 'home';
    if (isGitHubPagesDemo && targetId === 'studyBuddies') {
        targetId = 'home';
        window.history.replaceState(null, '', '#home');
    }
    const targetElement = document.getElementById(targetId);
    const activePage = targetId === 'home' ? 'home' : targetElement?.dataset.appPage || 'home';

    appPageElements.forEach((page) => {
        page.hidden = page.dataset.appPage !== activePage;
    });

    const activeLink = Array.from(sideMenuLinks).find((link) => link.hash === `#${targetId}`)
        || Array.from(sideMenuLinks).find((link) => link.hash === '#home');
    sideMenuLinks.forEach((link) => {
        link.classList.toggle('active', link === activeLink);
    });
}

window.addEventListener('hashchange', updateAppPage);
window.addEventListener('popstate', updateAppPage);
updateAppPage();

function toggleCreditsPanel(forceOpen) {
    if (!creditsPanel) {
        return;
    }

    const openingPanel = typeof forceOpen === 'boolean' ? forceOpen : !creditsPanel.classList.contains('open');
    creditsPanel.classList.toggle('open', openingPanel);
    creditsPanel.setAttribute('aria-hidden', String(!openingPanel));

    if (openingPanel) {
        toggleMenu(false);
    }
}

if (creditBtn) {
    creditBtn.addEventListener('click', () => toggleCreditsPanel());
}

if (closeCreditsBtn) {
    closeCreditsBtn.addEventListener('click', () => toggleCreditsPanel(false));
}

if (backToMenuBtn) {
    backToMenuBtn.addEventListener('click', () => {
        toggleCreditsPanel(false);
        toggleMenu(true);
    });
}

function toggleSettingsPanel(forceOpen) {
    if (!settingsPanel) {
        return;
    }

    const openingPanel = typeof forceOpen === 'boolean' ? forceOpen : !settingsPanel.classList.contains('open');
    settingsPanel.classList.toggle('open', openingPanel);
    settingsPanel.setAttribute('aria-hidden', String(!openingPanel));

    if (openingPanel) {
        toggleMenu(false);
        toggleCreditsPanel(false);
        readSettingsIntoControls();
    }
}

if (settingsBtn) {
    settingsBtn.addEventListener('click', () => toggleSettingsPanel());
}

if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', () => toggleSettingsPanel(false));
}

if (backToMenuFromSettingsBtn) {
    backToMenuFromSettingsBtn.addEventListener('click', () => {
        toggleSettingsPanel(false);
        toggleMenu(true);
    });
}

if (settingsGoPreferencesBtn) {
    settingsGoPreferencesBtn.addEventListener('click', () => {
        toggleSettingsPanel(false);
        window.location.hash = 'preferences';
        updateAppPage();
    });
}

function getSavedDefaultTimer() {
    try {
        const saved = Number(localStorage.getItem(SETTINGS_DEFAULT_TIMER_KEY));
        return Number.isInteger(saved) && saved >= 1 && saved <= 120 ? saved : 25;
    } catch (error) {
        setSettingsStatus(`Could not load the default session length: ${error.message}`, true);
        return 25;
    }
}

function getSavedScreenBreakMinutes() {
    try {
        const saved = Number(localStorage.getItem(SETTINGS_SCREEN_BREAK_KEY));
        return Number.isInteger(saved) && saved >= 1 && saved <= 120 ? saved : 5;
    } catch (error) {
        setSettingsStatus(`Could not load the screen-break reminder: ${error.message}`, true);
        return 5;
    }
}

function getSavedDeadlineReminderSetting() {
    try {
        return localStorage.getItem(SETTINGS_DEADLINE_REMINDERS_KEY) === 'true';
    } catch (error) {
        setSettingsStatus(`Could not read deadline reminder settings: ${error.message}`, true);
        return false;
    }
}

function getSavedChimeDuration() {
    try {
        const rawSaved = localStorage.getItem(SETTINGS_CHIME_DURATION_KEY);
        if (rawSaved === null) {
            return 5;
        }
        const saved = Number(rawSaved);
        return [0, 3, 5, 10].includes(saved) ? saved : 5;
    } catch (error) {
        setSettingsStatus(`Could not load the focus chime setting: ${error.message}`, true);
        return 5;
    }
}

function setSettingsStatus(message, isError = false) {
    if (settingsSaveStatus) {
        settingsSaveStatus.textContent = message;
        settingsSaveStatus.classList.toggle('is-error', isError);
    }
}

function updateScreenBreakReminderValue() {
    if (screenBreakReminderValue) {
        const minutes = SCREEN_LIMIT_SECONDS / 60;
        screenBreakReminderValue.textContent = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }
}

function readSettingsIntoControls() {
    setSettingsStatus('');
    if (settingsDefaultTimer) {
        settingsDefaultTimer.value = String(getSavedDefaultTimer());
    }
    if (settingsScreenBreak) {
        const screenBreak = getSavedScreenBreakMinutes();
        settingsScreenBreak.value = String(screenBreak);
        SCREEN_LIMIT_SECONDS = screenBreak * 60;
        updateScreenBreakReminderValue();
    }
    if (settingsDeadlineReminders) {
        settingsDeadlineReminders.checked = getSavedDeadlineReminderSetting();
    }
    if (settingsChimeDuration) {
        settingsChimeDuration.value = String(getSavedChimeDuration());
    }
    updateNotifyStatus();
}

SCREEN_LIMIT_SECONDS = getSavedScreenBreakMinutes() * 60;
updateScreenBreakReminderValue();

function saveDefaultTimerSetting() {
    const defaultTimer = Number(settingsDefaultTimer && settingsDefaultTimer.value);
    if (!Number.isInteger(defaultTimer) || defaultTimer < 1 || defaultTimer > 120) {
        setSettingsStatus('Enter a whole number from 1 to 120 minutes for the default session length.', true);
        return;
    }

    try {
        localStorage.setItem(SETTINGS_DEFAULT_TIMER_KEY, String(defaultTimer));
    } catch (error) {
        setSettingsStatus(`Could not save the default session length: ${error.message}`, true);
        return;
    }

    if (timerMinutes && !timerHasStarted) {
        timerMinutes.value = String(defaultTimer);
        timerRemainingSeconds = defaultTimer * 60;
        if (focusTimerDisplay) {
            focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
        }
    }
    setSettingsStatus('Settings saved automatically.');
}

function saveScreenBreakSetting() {
    const screenBreak = Number(settingsScreenBreak && settingsScreenBreak.value);
    if (!Number.isInteger(screenBreak) || screenBreak < 1 || screenBreak > 120) {
        setSettingsStatus('Enter a whole number from 1 to 120 minutes for the screen-break reminder.', true);
        return;
    }

    try {
        localStorage.setItem(SETTINGS_SCREEN_BREAK_KEY, String(screenBreak));
    } catch (error) {
        setSettingsStatus(`Could not save the screen-break reminder: ${error.message}`, true);
        return;
    }

    SCREEN_LIMIT_SECONDS = screenBreak * 60;
    nextBreakReminderAt = Math.floor(siteUsageSeconds) + SCREEN_LIMIT_SECONDS;
    updateScreenBreakReminderValue();
    if (siteUsageSeconds < nextBreakReminderAt) {
        if (dismissScreenLimitBtn) {
            dismissScreenLimitBtn.hidden = true;
        }
        if (screenLimitMessage) {
            screenLimitMessage.textContent = '';
            screenLimitMessage.classList.remove('is-error');
        }
    } else {
        updateScreenLimitMessage();
    }
    saveSiteUsage();
    setSettingsStatus('Settings saved automatically.');
}

if (settingsDefaultTimer) {
    settingsDefaultTimer.addEventListener('change', saveDefaultTimerSetting);
}

if (settingsScreenBreak) {
    settingsScreenBreak.addEventListener('change', saveScreenBreakSetting);
}

function saveDeadlineReminderSetting() {
    try {
        localStorage.setItem(SETTINGS_DEADLINE_REMINDERS_KEY, String(settingsDeadlineReminders.checked));
        updateNotifyStatus();
        checkTaskDeadlineNotification();
    } catch (error) {
        settingsNotifyStatus.textContent = `Could not save deadline reminder settings: ${error.message}`;
        settingsNotifyStatus.classList.add('is-error');
    }
}

function saveChimeDurationSetting() {
    const duration = Number(settingsChimeDuration && settingsChimeDuration.value);
    if (![0, 3, 5, 10].includes(duration)) {
        setSettingsStatus('Choose Silent, 3, 5, or 10 seconds for the focus chime.', true);
        return;
    }
    try {
        localStorage.setItem(SETTINGS_CHIME_DURATION_KEY, String(duration));
        setSettingsStatus('Focus chime setting saved.');
    } catch (error) {
        setSettingsStatus(`Could not save the focus chime setting: ${error.message}`, true);
    }
}

if (settingsChimeDuration) {
    settingsChimeDuration.addEventListener('change', saveChimeDurationSetting);
}

if (settingsDeadlineReminders) {
    settingsDeadlineReminders.addEventListener('change', saveDeadlineReminderSetting);
}

function updateNotifyStatus() {
    if (!settingsNotifyStatus) {
        return;
    }
    if (!('Notification' in window)) {
        settingsNotifyStatus.textContent = 'Notifications are not supported in this browser.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.disabled = true;
        }
        if (settingsDeadlineReminders) {
            settingsDeadlineReminders.disabled = true;
        }
        return;
    }
    if (settingsDeadlineReminders) {
        settingsDeadlineReminders.disabled = false;
    }
    if (Notification.permission === 'granted') {
        settingsNotifyStatus.textContent = getSavedDeadlineReminderSetting()
            ? 'Desktop alerts are enabled. You will get one gentle reminder the day before a task is due, while the app is open.'
            : 'Desktop alerts are enabled. Turn on gentle task reminders below if you would like them.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.textContent = 'Notifications enabled';
            settingsNotifyBtn.disabled = true;
        }
    } else if (Notification.permission === 'denied') {
        settingsNotifyStatus.textContent = 'Browser notifications are blocked. Allow them in browser settings to receive desktop reminders.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.textContent = 'Notifications blocked';
            settingsNotifyBtn.disabled = true;
        }
    } else {
        settingsNotifyStatus.textContent = 'Enable desktop alerts above and turn on task reminders below to receive deadline reminders.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.textContent = 'Enable notifications';
            settingsNotifyBtn.disabled = false;
        }
    }
}

if (settingsNotifyBtn) {
    settingsNotifyBtn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            updateNotifyStatus();
            if (permission === 'granted') {
                checkTaskDeadlineNotification();
            }
        } catch (error) {
            if (settingsNotifyStatus) {
                settingsNotifyStatus.textContent = `Could not update notification settings: ${error.message}`;
                settingsNotifyStatus.classList.add('is-error');
            }
        }
    });
}

if (settingsResetBtn) {
    settingsResetBtn.addEventListener('click', () => {
        const resetMessage = isGitHubPagesDemo
            ? 'Reset all demo data? This clears tasks, game progress, preferences, site usage, and settings stored in this browser.'
            : 'Reset all local data for this account? This clears tasks, game progress, site usage, and settings stored in this browser. Your account and profile stay intact.';
        if (!window.confirm(resetMessage)) {
            return;
        }
        const keysToRemove = [
            TASK_LIST_KEY,
            SITE_USAGE_KEY,
            SETTINGS_DEFAULT_TIMER_KEY,
            SETTINGS_SCREEN_BREAK_KEY,
            SETTINGS_DEADLINE_REMINDERS_KEY,
            SETTINGS_CHIME_DURATION_KEY,
            DAILY_QUOTE_KEY
        ];
        if (isGitHubPagesDemo) {
            keysToRemove.push(LOCAL_DEMO_PROFILE_KEY);
        }
        if (currentUser) {
            keysToRemove.push(taskListStorageKey(currentUser.id));
            keysToRemove.push(siteUsageStorageKey());
            keysToRemove.push(taskDeadlineReminderStorageKey(currentUser.id));
        }
        try {
            keysToRemove.forEach((key) => {
                if (typeof key === 'string' && key) {
                    localStorage.removeItem(key);
                }
            });
            if (isGitHubPagesDemo) {
                syncDashboard({
                    display_name: 'Student',
                    focus_task: '',
                    favorite_subject: 'Science',
                    study_pace: 'My own pace'
                });
            }
            taskList = [];
            gameState = createGameState();
            if (currentUser) {
                void syncBuddyProgress();
                void syncBuddyTaskSnapshot();
            }
            setSettingsStatus('');
            const defaultTimer = getSavedDefaultTimer();
            if (timerMinutes) {
                timerMinutes.value = String(defaultTimer);
            }
            resetFocusTimer();
            SCREEN_LIMIT_SECONDS = getSavedScreenBreakMinutes() * 60;
            siteUsageSeconds = 0;
            nextBreakReminderAt = SCREEN_LIMIT_SECONDS;
            updateScreenBreakReminderValue();
            renderTaskList();
            renderGameProgress();
            renderFocusTimer();
            updateScreenLimitMessage();
            readSettingsIntoControls();
            if (settingsResetStatus) {
                settingsResetStatus.textContent = 'Local data reset. Your saved preferences are restored.';
                settingsResetStatus.classList.remove('is-error');
            }
            setSettingsStatus('Settings reset to their defaults.');
        } catch (error) {
            if (settingsResetStatus) {
                settingsResetStatus.textContent = `Could not reset local data: ${error.message}`;
                settingsResetStatus.classList.add('is-error');
            }
        }
    });
}

if (focusTimerForm) {
    focusTimerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        startFocusTimer();
    });
}

if (timerPauseBtn) {
    timerPauseBtn.addEventListener('click', pauseFocusTimer);
}

if (timerResetBtn) {
    timerResetBtn.addEventListener('click', resetFocusTimer);
}

if (timerMinutes) {
    timerMinutes.addEventListener('input', () => {
        if (!timerHasStarted) {
            resetFocusTimer();
        }
    });
}

if (dismissScreenLimitBtn) {
    dismissScreenLimitBtn.addEventListener('click', () => {
        nextBreakReminderAt = Math.floor(siteUsageSeconds) + SCREEN_LIMIT_SECONDS;
        dismissScreenLimitBtn.hidden = true;
        if (screenLimitMessage) {
            screenLimitMessage.textContent = 'Reminder dismissed. Take a break whenever you need one.';
        }
        saveSiteUsage();
    });
}

document.addEventListener('visibilitychange', () => {
    siteUsageLastTick = null;
    if (currentUser) {
        saveSiteUsage();
    }
});

function toggleFeedbackPanel(forceOpen) {
    if (!feedbackPanel) {
        return;
    }

    const openingPanel = typeof forceOpen === 'boolean' ? forceOpen : !feedbackPanel.classList.contains('open');
    feedbackPanel.classList.toggle('open', openingPanel);
    feedbackPanel.setAttribute('aria-hidden', String(!openingPanel));
    feedbackDoodlePresses = 0;
    if (studyCompanion) {
        studyCompanion.hidden = true;
        studyCompanion.classList.remove('is-glitching');
    }
    if (closeStudyCompanionBtn) {
        closeStudyCompanionBtn.disabled = false;
    }

    if (openingPanel) {
        toggleMenu(false);
        toggleCreditsPanel(false);
        toggleSettingsPanel(false);
        if (feedbackStatus) {
            feedbackStatus.textContent = '';
            feedbackStatus.classList.remove('is-error');
        }
        if (feedbackMessage) {
            feedbackMessage.value = '';
        }
        if (feedbackType) {
            feedbackType.value = 'bug';
        }
        if (feedbackMessage) {
            feedbackMessage.focus();
        }
    }
}

if (feedbackBtn) {
    feedbackBtn.addEventListener('click', () => toggleFeedbackPanel());
}

if (closeFeedbackBtn) {
    closeFeedbackBtn.addEventListener('click', () => toggleFeedbackPanel(false));
}

if (backToMenuFromFeedbackBtn) {
    backToMenuFromFeedbackBtn.addEventListener('click', () => {
        toggleFeedbackPanel(false);
        toggleMenu(true);
    });
}

if (feedbackDoodleBtn && feedbackDoodleStatus && studyCompanion && studyCompanionMessage && studyCompanionImage) {
    feedbackDoodleBtn.addEventListener('click', () => {
        feedbackDoodlePresses += 1;
        if (feedbackDoodlePresses >= 3) {
            feedbackDoodlePresses = 0;
            studyCompanion.hidden = false;
            studyCompanionMessageIndex = 0;
            studyCompanionMessage.textContent = studyCompanionMessages[studyCompanionMessageIndex];
            studyCompanionImage.src = studyCompanionSprites[studyCompanionMessageIndex];
            feedbackDoodleStatus.textContent = 'A study companion appeared.';
            return;
        }

        const remainingPresses = 3 - feedbackDoodlePresses;
        feedbackDoodleStatus.textContent = `${remainingPresses} more ${remainingPresses === 1 ? 'tap' : 'taps'} for a surprise.`;
    });
}

if (studyCompanionMessage && studyCompanionImage) {
    studyCompanionMessage.addEventListener('click', () => {
        studyCompanionMessageIndex = (studyCompanionMessageIndex + 1) % studyCompanionMessages.length;
        studyCompanionMessage.textContent = studyCompanionMessages[studyCompanionMessageIndex];
        studyCompanionImage.src = studyCompanionSprites[studyCompanionMessageIndex];
    });
}

if (closeStudyCompanionBtn && studyCompanion && studyCompanionImage) {
    closeStudyCompanionBtn.addEventListener('click', () => {
        if (studyCompanion.classList.contains('is-glitching')) {
            return;
        }

        feedbackDoodlePresses = 0;
        playMonikaGlitch();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            studyCompanion.hidden = true;
            return;
        }

        closeStudyCompanionBtn.disabled = true;
        studyCompanion.classList.add('is-glitching');
        studyCompanionImage.addEventListener('animationend', () => {
            studyCompanion.classList.remove('is-glitching');
            studyCompanion.hidden = true;
            closeStudyCompanionBtn.disabled = false;
        }, { once: true });
    });
}

if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!feedbackType || !feedbackMessage || !feedbackSubmitBtn) {
            return;
        }

        const message = feedbackMessage.value.trim();
        if (!message) {
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Enter a message before sending.';
                feedbackStatus.classList.add('is-error');
            }
            return;
        }

        if (!supabaseClient || !currentUser) {
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Sign in with a configured Supabase account before sending feedback.';
                feedbackStatus.classList.add('is-error');
            }
            return;
        }

        if (feedbackStatus) {
            feedbackStatus.textContent = 'Submitting your feedback…';
            feedbackStatus.classList.remove('is-error');
        }
        feedbackSubmitBtn.disabled = true;

        try {
            const { error } = await supabaseClient
                .from('app_feedback')
                .insert({
                    user_id: currentUser.id,
                    feedback_type: feedbackType.value,
                    message
                });

            if (error) {
                console.error('Could not submit feedback to Supabase.', error);
                if (feedbackStatus) {
                    feedbackStatus.textContent = `Could not submit feedback: ${error.message}`;
                    feedbackStatus.classList.add('is-error');
                }
                return;
            }

            feedbackMessage.value = '';
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Thanks—your feedback was submitted. The team can review it in Supabase.';
                feedbackStatus.classList.remove('is-error');
            }
        } catch (error) {
            console.error('Could not submit feedback to Supabase.', error);
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Could not submit feedback because of a network error. Please try again.';
                feedbackStatus.classList.add('is-error');
            }
        } finally {
            feedbackSubmitBtn.disabled = false;
        }
    });
}

function calendarStorageKey() {
    return currentUser ? `${CALENDAR_KEY}:${currentUser.id}` : CALENDAR_KEY;
}

function loadCalendarReminders() {
    try {
        const raw = localStorage.getItem(calendarStorageKey());
        const parsed = raw ? JSON.parse(raw) : null;
        calendarReminders = parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        calendarReminders = {};
    }
    if (!calendarReminders || typeof calendarReminders !== 'object' || Array.isArray(calendarReminders)) {
        calendarReminders = {};
    }
}

function saveCalendarReminders() {
    try {
        localStorage.setItem(calendarStorageKey(), JSON.stringify(calendarReminders));
        return true;
    } catch (error) {
        if (calendarMessage) {
            calendarMessage.textContent = `Could not save calendar: ${error.message}`;
            calendarMessage.classList.add('is-error');
        }
        return false;
    }
}

function setCalendarMessage(message, isError = false) {
    if (!calendarMessage) {
        return;
    }
    calendarMessage.textContent = message;
    calendarMessage.classList.toggle('is-error', isError);
}

function formatCalendarDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function isSameDate(a, b) {
    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();
}

function renderCalendar() {
    if (!calendarGrid) {
        return;
    }

    const year = calendarViewDate.getFullYear();
    const month = calendarViewDate.getMonth();
    if (calendarMonthLabel) {
        calendarMonthLabel.textContent = calendarViewDate.toLocaleDateString(undefined, {
            month: 'long', year: 'numeric'
        });
    }

    const firstDay = new Date(year, month, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    calendarGrid.replaceChildren();
    for (let i = 0; i < startOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day is-other-month';
        calendarGrid.append(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cellDate = new Date(year, month, day);
        const dateKey = formatCalendarDate(cellDate);
        const reminders = calendarReminders[dateKey] || [];
        const hasReminder = Array.isArray(reminders) && reminders.length > 0;

        const dayButton = document.createElement('button');
        dayButton.type = 'button';
        dayButton.className = 'calendar-day';
        if (isSameDate(cellDate, today)) {
            dayButton.classList.add('is-today');
        }
        if (calendarSelectedDate === dateKey) {
            dayButton.classList.add('is-selected');
        }
        if (hasReminder) {
            dayButton.classList.add('has-reminder');
        }

        const number = document.createElement('span');
        number.className = 'calendar-day-number';
        number.textContent = String(day);
        dayButton.append(number);

        if (hasReminder) {
            const last = reminders[reminders.length - 1];
            const text = typeof last === 'string' ? last : (last && last.text) || '';
            const color = typeof last === 'string' ? 'red' : (last && last.color) || 'red';
            const dot = document.createElement('span');
            dot.className = 'calendar-day-dot';
            dot.style.setProperty('--reminder-color', COLOR_MAP[color] || COLOR_MAP.red);
            dayButton.append(dot);
            if (text) {
                const preview = document.createElement('span');
                preview.className = 'calendar-day-reminder';
                preview.textContent = text;
                dayButton.append(preview);
            }
        }

        dayButton.addEventListener('click', () => {
            calendarSelectedDate = dateKey;
            if (calendarReminderDate) {
                calendarReminderDate.value = dateKey;
            }
            if (calendarReminderText) {
                calendarReminderText.value = '';
                calendarReminderText.focus();
            }
            renderCalendar();
            renderReminderList();
        });

        calendarGrid.append(dayButton);
    }
}

function renderReminderList() {
    if (!calendarReminderList) {
        return;
    }

    calendarReminderList.replaceChildren();
    const entries = Object.entries(calendarReminders)
        .filter(([, list]) => Array.isArray(list) && list.length > 0)
        .sort(([a], [b]) => a.localeCompare(b));

    if (entries.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'calendar-empty';
        empty.textContent = 'No reminders yet. Tap a date to add one.';
        calendarReminderList.append(empty);
        return;
    }

    entries.forEach(([dateKey, list]) => {
        (list || []).forEach((entry, index) => {
            const item = typeof entry === 'string' ? { text: entry } : entry;
            const text = (item && item.text) || '';
            const color = (item && item.color) || 'red';
            const time = (item && item.time) || '';

            const li = document.createElement('li');
            li.className = 'calendar-reminder-item';
            li.style.setProperty('--reminder-color', COLOR_MAP[color] || COLOR_MAP.red);

            const dateSpan = document.createElement('span');
            dateSpan.className = 'calendar-reminder-date';
            dateSpan.textContent = time ? `${dateKey} ${time}` : dateKey;

            const textSpan = document.createElement('span');
            textSpan.className = 'calendar-reminder-text';
            textSpan.textContent = text;

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'calendar-reminder-remove';
            removeBtn.textContent = 'Remove';
            removeBtn.setAttribute('aria-label', `Remove reminder "${text}" on ${dateKey}`);
            removeBtn.addEventListener('click', () => {
                const remaining = (calendarReminders[dateKey] || []).filter((_, i) => i !== index);
                if (time) {
                    clearAlarmsForDate(dateKey);
                }
                if (remaining.length === 0) {
                    delete calendarReminders[dateKey];
                } else {
                    calendarReminders[dateKey] = remaining;
                }
                if (saveCalendarReminders()) {
                    renderCalendar();
                    renderReminderList();
                }
            });

            li.append(dateSpan, textSpan, removeBtn);
            calendarReminderList.append(li);
        });
    });
}

if (calendarPrevBtn) {
    calendarPrevBtn.addEventListener('click', () => {
        calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1);
        renderCalendar();
    });
}

if (calendarNextBtn) {
    calendarNextBtn.addEventListener('click', () => {
        calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1);
        renderCalendar();
    });
}

function scheduleAlarm(dateKey, timeValue, text) {
    if (!timeValue || !/^\d{2}:\d{2}$/.test(timeValue)) {
        return;
    }
    const [hours, minutes] = timeValue.split(':').map(Number);
    const alarmDate = new Date(`${dateKey}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`);
    const now = new Date();
    const delayMs = alarmDate.getTime() - now.getTime();
    if (delayMs <= 0) {
        setCalendarMessage('That alarm time has already passed. Pick a future time.', true);
        return;
    }
    const alarmKey = `${dateKey}::${timeValue}`;
    if (calendarAlarmTimers[alarmKey]) {
        clearTimeout(calendarAlarmTimers[alarmKey]);
    }
    calendarAlarmTimers[alarmKey] = setTimeout(() => {
        fireAlarm(dateKey, timeValue, text);
    }, delayMs);
}

function fireAlarm(dateKey, timeValue, text) {
    const message = `Reminder: ${text} (${dateKey} at ${timeValue})`;
    if ('Notification' in window && Notification.permission === 'granted') {
        try {
            new Notification('Calendar reminder', { body: message });
        } catch {}
    }
    if (calendarMessage) {
        calendarMessage.textContent = message;
        calendarMessage.classList.remove('is-error');
    }
    if (calendarReminderText) {
        calendarReminderText.focus();
    }
    delete calendarAlarmTimers[`${dateKey}::${timeValue}`];
}

function rescheduleAllAlarms() {
    Object.keys(calendarAlarmTimers).forEach((key) => {
        clearTimeout(calendarAlarmTimers[key]);
    });
    calendarAlarmTimers = {};
    Object.entries(calendarReminders).forEach(([dateKey, list]) => {
        (list || []).forEach((entry) => {
            const item = typeof entry === 'string' ? { text: entry } : entry;
            if (item.time) {
                scheduleAlarm(dateKey, item.time, item.text);
            }
        });
    });
}

function clearAlarmsForDate(dateKey) {
    Object.keys(calendarAlarmTimers).forEach((key) => {
        if (key.startsWith(`${dateKey}::`)) {
            clearTimeout(calendarAlarmTimers[key]);
            delete calendarAlarmTimers[key];
        }
    });
}

if (calendarReminderForm) {
    const colorButtons = Array.from(calendarReminderForm.querySelectorAll('.calendar-color-btn'));
    let selectedColor = 'red';

    colorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selectedColor = button.dataset.color;
            colorButtons.forEach((btn) => {
                btn.setAttribute('aria-pressed', String(btn === button));
            });
        });
    });

    calendarReminderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!calendarReminderDate || !calendarReminderText) {
            return;
        }
        const dateKey = calendarReminderDate.value.trim();
        const text = calendarReminderText.value.trim();
        if (!dateKey || !/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
            setCalendarMessage('Tap a valid calendar date first.', true);
            return;
        }
        if (!text) {
            setCalendarMessage('Enter a reminder before saving.', true);
            return;
        }
        const timeValue = calendarReminderTime ? calendarReminderTime.value.trim() : '';
        if (timeValue && !/^\d{2}:\d{2}$/.test(timeValue)) {
            setCalendarMessage('Alarm time must be in HH:MM format.', true);
            return;
        }
        if (!Array.isArray(calendarReminders[dateKey])) {
            calendarReminders[dateKey] = [];
        }
        const entry = { text, color: selectedColor };
        if (timeValue) {
            entry.time = timeValue;
        }
        calendarReminders[dateKey].push(entry);
        if (saveCalendarReminders()) {
            calendarReminderText.value = '';
            if (calendarReminderTime) {
                calendarReminderTime.value = '';
            }
            calendarSelectedDate = dateKey;
            if (timeValue) {
                scheduleAlarm(dateKey, timeValue, text);
            }
            renderCalendar();
            renderReminderList();
            setCalendarMessage(`Reminder saved for ${dateKey}${timeValue ? ` at ${timeValue}` : ''}.`);
        }
    });
}

if (calendarGrid) {
    loadCalendarReminders();
    renderCalendar();
    renderReminderList();
    rescheduleAllAlarms();
}

if (addBuddyForm && buddyCodeInput) {
    const submitButton = addBuddyForm.querySelector('button[type="submit"]');

    buddyCodeInput.addEventListener('input', () => {
        const code = buddyCodeInput.value.trim().toUpperCase();
        const requestId = ++buddyCodeLookupRequest;
        buddyCodePreviewed = '';
        submitButton.disabled = true;
        buddyCodePreview.classList.remove('is-error');
        buddyCodePreview.textContent = '';
        if (buddyCodeLookupTimeout) {
            clearTimeout(buddyCodeLookupTimeout);
        }
        if (!code) {
            return;
        }
        if (!/^[A-F0-9]{16}$/.test(code)) {
            buddyCodePreview.textContent = code.length >= 16
                ? 'Friend codes must be 16 characters using A–F and 0–9.'
                : 'Enter all 16 characters to check the code.';
            if (code.length >= 16) {
                buddyCodePreview.classList.add('is-error');
            }
            return;
        }

        buddyCodePreview.textContent = 'Checking whose code this is…';
        buddyCodeLookupTimeout = setTimeout(async () => {
            try {
                const { data: name, error } = await supabaseClient.rpc('lookup_study_buddy_by_code', {
                    p_friend_code: code
                });
                if (requestId !== buddyCodeLookupRequest || code !== buddyCodeInput.value.trim().toUpperCase()) {
                    return;
                }
                if (error) {
                    buddyCodePreview.textContent = explainBuddyError(error);
                    buddyCodePreview.classList.add('is-error');
                    return;
                }
                if (typeof name !== 'string' || !name.trim()) {
                    buddyCodePreview.textContent = 'Could not identify this friend code. Refresh and try again.';
                    buddyCodePreview.classList.add('is-error');
                    return;
                }
                buddyCodePreviewed = code;
                buddyCodePreview.textContent = `This code belongs to ${name}. Send a request to connect.`;
                submitButton.disabled = false;
            } catch (error) {
                if (requestId === buddyCodeLookupRequest) {
                    buddyCodePreview.textContent = explainBuddyError(error);
                    buddyCodePreview.classList.add('is-error');
                }
            }
        }, 350);
    });

    addBuddyForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const code = buddyCodeInput.value.trim().toUpperCase();
        if (buddyCodePreviewed !== code) {
            setBuddyMessage('Check the friend code to confirm whose account it belongs to before sending a request.', true);
            return;
        }
        submitButton.disabled = true;
        setBuddyMessage('Sending buddy request…');
        try {
            const { data: name, error } = await supabaseClient.rpc('send_study_buddy_request', {
                p_friend_code: code
            });
            if (error) {
                setBuddyMessage(explainBuddyError(error), true);
                return;
            }
            buddyCodeInput.value = '';
            buddyCodePreviewed = '';
            buddyCodePreview.textContent = '';
            if (await loadBuddyDashboard()) {
                setBuddyMessage(`Buddy request sent to ${name}. It will appear in sent requests until accepted.`);
            }
        } catch (error) {
            setBuddyMessage(explainBuddyError(error), true);
        } finally {
            submitButton.disabled = buddyCodePreviewed !== buddyCodeInput.value.trim().toUpperCase();
        }
    });
}

if (refreshBuddiesBtn) {
    refreshBuddiesBtn.addEventListener('click', () => loadBuddyDashboard());
}

if (buddyChatProfileBtn) {
    buddyChatProfileBtn.addEventListener('click', () => {
        void openBuddyChatProfile();
    });
}

if (openBuddyGroupDialogBtn) {
    openBuddyGroupDialogBtn.addEventListener('click', openBuddyGroupDialog);
}

if (closeBuddyChatProfileBtn) {
    closeBuddyChatProfileBtn.addEventListener('click', () => buddyChatProfileDialog.close());
}

if (closeBuddyChatProfileActionBtn) {
    closeBuddyChatProfileActionBtn.addEventListener('click', () => buddyChatProfileDialog.close());
}

if (closeBuddyGroupDialogBtn) {
    closeBuddyGroupDialogBtn.addEventListener('click', () => createBuddyGroupDialog.close());
}

if (createBuddyGroupForm && buddyGroupName && groupBuddyMembers) {
    createBuddyGroupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const userId = currentUser?.id;
        if (!userId || !buddyGroupBaseBuddyId) {
            setBuddyChatStatus('Sign in to create a group chat.', true);
            return;
        }
        const selectedBuddyIds = [
            buddyGroupBaseBuddyId,
            ...[...groupBuddyMembers.querySelectorAll('input:checked')]
                .map((checkbox) => checkbox.value)
        ];
        if (selectedBuddyIds.length < 2 || selectedBuddyIds.length > 8) {
            buddyGroupStatus.textContent = 'Choose between one and seven other accepted buddies.';
            buddyGroupStatus.classList.add('is-error');
            return;
        }
        createBuddyGroupBtn.disabled = true;
        buddyGroupStatus.textContent = 'Creating group chat…';
        buddyGroupStatus.classList.remove('is-error');
        try {
            const { data: chatId, error } = await supabaseClient.rpc('create_study_buddy_group', {
                p_name: buddyGroupName.value.trim(),
                p_buddy_ids: selectedBuddyIds
            });
            if (error) {
                throw error;
            }
            if (currentUser?.id !== userId) {
                return;
            }
            buddyGroupName.value = '';
            groupBuddyMembers.querySelectorAll('input').forEach((checkbox) => {
                checkbox.checked = false;
            });
            createBuddyGroupDialog.close();
            await loadBuddyChats();
            if (currentUser?.id !== userId) {
                return;
            }
            await selectBuddyChat(chatId);
            setBuddyChatStatus('Group chat created.');
        } catch (error) {
            buddyGroupStatus.textContent = explainBuddyError(error);
            buddyGroupStatus.classList.add('is-error');
        } finally {
            updateBuddyGroupDialogState();
        }
    });
}

if (buddyChatForm && buddyChatInput) {
    buddyChatForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const userId = currentUser?.id;
        const chatId = activeBuddyChatId;
        const message = buddyChatInput.value.trim();
        if (!userId || !chatId || !message) {
            return;
        }
        sendBuddyChatBtn.disabled = true;
        try {
            const { error } = await supabaseClient.rpc('send_study_buddy_chat_message', {
                p_chat_id: chatId,
                p_body: message
            });
            if (error) {
                throw error;
            }
            if (currentUser?.id !== userId) {
                return;
            }
            buddyChatInput.value = '';
            await refreshBuddyChatMessages(chatId);
        } catch (error) {
            setBuddyChatStatus(explainBuddyError(error), true);
        } finally {
            sendBuddyChatBtn.disabled = false;
        }
    });
}

if (copyFriendCodeBtn) {
    copyFriendCodeBtn.addEventListener('click', async () => {
        const code = myFriendCode && myFriendCode.textContent;
        if (!code || code === 'Loading…' || code === 'Unavailable') {
            return;
        }
        try {
            await navigator.clipboard.writeText(code);
            setBuddyMessage('Friend code copied. Share it only with people you want to connect with.');
        } catch (error) {
            setBuddyMessage(`Could not copy the friend code: ${error.message}`, true);
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return;
    }

    if (settingsPanel && settingsPanel.classList.contains('open')) {
        toggleSettingsPanel(false);
        return;
    }

    if (feedbackPanel && feedbackPanel.classList.contains('open')) {
        toggleFeedbackPanel(false);
        return;
    }

    if (creditsPanel && creditsPanel.classList.contains('open')) {
        toggleCreditsPanel(false);
        return;
    }

    if (sideMenu && sideMenu.classList.contains('open')) {
        toggleMenu(false);
    }
});

async function saveProfile(changes) {
    if (!currentUser) {
        return false;
    }

    if (isGitHubPagesDemo) {
        try {
            const rawProfile = localStorage.getItem(LOCAL_DEMO_PROFILE_KEY);
            const savedProfile = rawProfile ? JSON.parse(rawProfile) : {};
            if (!savedProfile || typeof savedProfile !== 'object' || Array.isArray(savedProfile)) {
                throw new Error('Saved demo profile data is invalid.');
            }
            const profile = {
                display_name: typeof savedProfile.display_name === 'string' ? savedProfile.display_name : 'Student',
                focus_task: typeof savedProfile.focus_task === 'string' ? savedProfile.focus_task : '',
                favorite_subject: typeof savedProfile.favorite_subject === 'string' ? savedProfile.favorite_subject : 'Science',
                study_pace: typeof savedProfile.study_pace === 'string' ? savedProfile.study_pace : 'My own pace',
                ...changes
            };
            localStorage.setItem(LOCAL_DEMO_PROFILE_KEY, JSON.stringify(profile));
            if (taskFeedback) {
                taskFeedback.textContent = 'Your changes are saved in this browser only.';
                taskFeedback.classList.remove('is-error');
            }
            return true;
        } catch (error) {
            if (taskFeedback) {
                taskFeedback.textContent = `Could not save your changes in this browser: ${error.message}`;
                taskFeedback.classList.add('is-error');
            }
            return false;
        }
    }

    if (taskFeedback) {
        taskFeedback.textContent = 'Saving to your account…';
        taskFeedback.classList.remove('is-error');
    }

    try {
        const displayName = usernameDisplay?.textContent.trim()
            || currentUser.user_metadata?.display_name
            || currentUser.email?.split('@')[0]
            || 'Student';
        const { data, error } = await supabaseClient
            .from('student_profiles')
            .upsert({
                user_id: currentUser.id,
                display_name: displayName,
                ...changes
            }, { onConflict: 'user_id' })
            .select('user_id')
            .single();
        if (error) {
            throw error;
        }
        if (!data) {
            throw new Error('The saved profile was not returned by the database.');
        }
    } catch (requestError) {
        if (taskFeedback) {
            taskFeedback.textContent = `Could not save your changes: ${requestError.message}`;
            taskFeedback.classList.add('is-error');
        }
        return false;
    }

    if (taskFeedback) {
        taskFeedback.textContent = 'Your changes are saved to your account.';
        taskFeedback.classList.remove('is-error');
    }
    return true;
}

async function copyStudyNudge() {
    const message = 'Hey! Want to study together for five minutes? No pressure, we can just get started.';
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(message);
        } else {
            const temporaryInput = document.createElement('textarea');
            temporaryInput.value = message;
            temporaryInput.setAttribute('readonly', '');
            temporaryInput.style.position = 'fixed';
            temporaryInput.style.opacity = '0';
            document.body.append(temporaryInput);
            temporaryInput.select();
            const copied = document.execCommand('copy');
            temporaryInput.remove();
            if (!copied) {
                throw new Error('Clipboard access is unavailable in this browser.');
            }
        }
        if (studyNudgeStatus) {
            studyNudgeStatus.textContent = 'Copied. Share it in a private message when you are ready.';
            studyNudgeStatus.classList.remove('is-error');
        }
    } catch (error) {
        if (studyNudgeStatus) {
            studyNudgeStatus.textContent = `Could not copy the message: ${error.message}`;
            studyNudgeStatus.classList.add('is-error');
        }
    }
}

if (copyStudyNudgeBtn) {
    copyStudyNudgeBtn.addEventListener('click', copyStudyNudge);
}

if (taskDueReminderButton) {
    taskDueReminderButton.addEventListener('click', () => {
        openTinySteps(taskDueReminderButton.dataset.taskId);
    });
}

if (taskDueDate && !taskDueDate.value) {
    const defaultDueDate = new Date();
    defaultDueDate.setDate(defaultDueDate.getDate() + 2);
    taskDueDate.value = dateKey(defaultDueDate);
}

if (taskForm && taskInput) {
    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const task = taskInput.value.trim();

        if (!currentUser || !task) {
            if (taskFeedback) {
                taskFeedback.textContent = currentUser
                    ? 'Add a task first, then save your focus.'
                    : 'Sign in to save your focus.';
            }
            return;
        }

        if (startTaskBtn) {
            startTaskBtn.disabled = true;
            startTaskBtn.setAttribute('aria-busy', 'true');
        }
        try {
            if (await saveProfile({ focus_task: task })) {
                setSavedFocusNote(task);
            }
        } finally {
            if (startTaskBtn) {
                startTaskBtn.disabled = false;
                startTaskBtn.removeAttribute('aria-busy');
            }
        }
    });
}

if (taskListForm && taskListInput) {
    taskListForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = taskListInput.value.trim();
        const dueDate = taskDueDate && taskDueDate.value;
        if (!title) {
            setTaskListMessage('Enter a task before adding it.', true);
            return;
        }
        if (!dueDate || !isValidDateKey(dueDate)) {
            setTaskListMessage('Choose a valid due date for this task.', true);
            return;
        }
        if (!currentUser) {
            setTaskListMessage('Sign in to save your task list.', true);
            return;
        }

        taskList.push({
            id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            title,
            dueDate,
            difficulty: taskDifficulty && Object.hasOwn(POINTS_BY_DIFFICULTY, taskDifficulty.value)
                ? taskDifficulty.value
                : 'medium',
            completed: false,
            steps: null,
            barrier: ''
        });
        if (saveTaskList()) {
            taskListInput.value = '';
            renderTaskList();
            renderTaskGarden();
            taskListInput.focus();
        } else {
            taskList.pop();
        }
    });
}

function applyStudyPace(pace) {
    const defaults = { 'Quick sessions': 15, 'Deep focus': 45, 'My own pace': 25 };
    const minutes = defaults[pace] || 25;
    if (timerMinutes && !timerHasStarted) {
        timerMinutes.value = minutes;
        timerRemainingSeconds = minutes * 60;
        if (focusTimerDisplay) focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
    }
    document.body.dataset.pace = (pace || 'My own pace').toLowerCase().replace(/\s+/g, '-');
}

if (subjectSelect) {
    const subjectBtns = subjectSelect.querySelectorAll('.subject-btn');
    subjectBtns.forEach(btn => {
        attachSubjectButton(btn);
    });
}

if (addCustomSubjectBtn && customSubjectInput) {
    customSubjectInput.addEventListener('input', () => {
        addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
    });

    customSubjectInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            await saveCustomSubject();
        }
    });

    addCustomSubjectBtn.addEventListener('click', async () => {
        await saveCustomSubject();
    });

    async function saveCustomSubject() {
        const subject = customSubjectInput.value.trim();
        if (!subject) {
            setFavoriteSubjectStatus('Enter a subject first.');
            customSubjectInput.focus();
            return;
        }

        const existingSubject = Array.from(subjectSelect.querySelectorAll('.subject-btn'))
            .find((button) => button.dataset.subject.toLocaleLowerCase() === subject.toLocaleLowerCase());
        const selectedSubject = existingSubject?.dataset.subject || subject;
        addCustomSubjectBtn.disabled = true;
        addCustomSubjectBtn.textContent = 'Saving…';

        try {
            if (!await saveFavoriteSubject(selectedSubject)) {
                addCustomSubjectBtn.textContent = 'Add';
                addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
                return;
            }
            addCustomSubjectBtn.textContent = 'Added';
            setTimeout(() => {
                addCustomSubjectBtn.textContent = 'Add';
                addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
            }, 1500);
        } catch (error) {
            addCustomSubjectBtn.textContent = 'Add';
            addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
            setFavoriteSubjectStatus(`Could not add subject: ${error.message}`, true);
        }
    }
}

if (paceSelect) {
    const paceBtns = paceSelect.querySelectorAll('.pace-btn');
    paceBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            paceBtns.forEach(b => {
                b.classList.remove('is-selected');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('is-selected');
            btn.setAttribute('aria-pressed', 'true');
            if (currentUser) {
                await saveProfile({ study_pace: btn.dataset.pace });
            }
            applyStudyPace(btn.dataset.pace);
        });
    });
}

if (timeGreeting) {
    timeGreeting.textContent = getTimeGreeting();
}
void loadDailyQuote();
const selectedPaceBtn = paceSelect ? paceSelect.querySelector('.pace-btn.is-selected') : null;
applyStudyPace(selectedPaceBtn ? selectedPaceBtn.dataset.pace : 'My own pace');

if (timerMinutes && !timerHasStarted) {
    const savedTimer = getSavedDefaultTimer();
    timerMinutes.value = String(savedTimer);
    timerRemainingSeconds = savedTimer * 60;
    if (focusTimerDisplay) {
        focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
    }
}

setAuthMode(true);

if (isGitHubPagesDemo) {
    let profile = {
        display_name: 'Student',
        focus_task: '',
        favorite_subject: 'Science',
        study_pace: 'My own pace'
    };
    try {
        const savedProfile = localStorage.getItem(LOCAL_DEMO_PROFILE_KEY);
        if (savedProfile) {
            const parsedProfile = JSON.parse(savedProfile);
            if (!parsedProfile || typeof parsedProfile !== 'object' || Array.isArray(parsedProfile)) {
                throw new Error('Saved demo profile data is invalid.');
            }
            profile = {
                ...profile,
                display_name: typeof parsedProfile.display_name === 'string' ? parsedProfile.display_name : profile.display_name,
                focus_task: typeof parsedProfile.focus_task === 'string' ? parsedProfile.focus_task : profile.focus_task,
                favorite_subject: typeof parsedProfile.favorite_subject === 'string' ? parsedProfile.favorite_subject : profile.favorite_subject,
                study_pace: ['My own pace', 'Quick sessions', 'Deep focus'].includes(parsedProfile.study_pace)
                    ? parsedProfile.study_pace
                    : profile.study_pace
            };
        }
    } catch (error) {
        console.error('Could not load the local demo profile.', error);
        if (taskFeedback) {
            taskFeedback.textContent = `Could not load your local preferences: ${error.message}`;
            taskFeedback.classList.add('is-error');
        }
    }

    currentUser = {
        id: 'github-pages-demo',
        email: '',
        user_metadata: { display_name: profile.display_name }
    };
    document.body.dataset.localDemo = 'true';
    if (localDemoNotice) {
        localDemoNotice.hidden = false;
    }
    if (loginForm) {
        loginForm.hidden = true;
    }
    if (authModeBtn) {
        authModeBtn.hidden = true;
    }
    if (logoutBtn) {
        logoutBtn.hidden = true;
    }
    syncDashboard(profile);
    loadTaskList(currentUser.id);
    loadCalendarReminders();
    startTaskDeadlineReminderChecks();
    startSiteUsageTracking();
    renderCalendar();
    renderReminderList();
    rescheduleAllAlarms();
    if (appShell) {
        appShell.inert = false;
        appShell.setAttribute('aria-hidden', 'false');
    }
    if (introScreen) {
        introScreen.classList.add('hidden');
    }
} else if (!supabaseClient) {
    enterBtn.disabled = true;
    setAuthMessage(
        supabaseConfig && supabaseConfig.url && supabaseConfig.anonKey
            ? 'Could not load the Supabase client. Check your internet connection and refresh.'
            : 'Account sign-in is not configured yet. Add your Supabase project URL and public anon key in supabase-config.js.',
        true
    );
}

if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange((event, session) => {
        queueMicrotask(() => {
            if (session && session.user) {
                if (!currentUser || currentUser.id !== session.user.id) {
                    loadAccount(session.user);
                }
                return;
            }

            if (event === 'SIGNED_OUT') {
                saveSiteUsage();
                currentUser = null;
                if (taskDeadlineReminderInterval) {
                    clearInterval(taskDeadlineReminderInterval);
                    taskDeadlineReminderInterval = null;
                }
                buddyDashboardRequest += 1;
                buddyShares.clear();
                buddyTaskShareIds.clear();
                buddyGardenShareIds.clear();
                buddyChats = [];
                buddyFriends = [];
                activeBuddyChatId = '';
                activeBuddyChatBuddyId = '';
                buddyGroupBaseBuddyId = '';
                if (buddyChatRefreshInterval) {
                    clearInterval(buddyChatRefreshInterval);
                    buddyChatRefreshInterval = null;
                }
                if (buddyChatPanel) {
                    buddyChatPanel.hidden = true;
                }
                if (buddyChatProfileDialog?.open) {
                    buddyChatProfileDialog.close();
                }
                if (createBuddyGroupDialog?.open) {
                    createBuddyGroupDialog.close();
                }
                if (buddyChatMessages) {
                    buddyChatMessages.replaceChildren();
                }
                if (buddyChatList) {
                    buddyChatList.replaceChildren();
                }
                if (buddyContentPanel) {
                    buddyContentPanel.hidden = true;
                }
                if (buddyContentBody) {
                    buddyContentBody.replaceChildren();
                }
                resetProfileAvatarUi();
                calendarReminders = {};
                calendarSelectedDate = '';
                calendarViewDate = new Date();
                if (calendarReminderDate) {
                    calendarReminderDate.value = '';
                }
                if (calendarReminderText) {
                    calendarReminderText.value = '';
                }
                renderCalendar();
                renderReminderList();
                if (siteUsageInterval) {
                    clearInterval(siteUsageInterval);
                    siteUsageInterval = null;
                }
                resetFocusTimer();
                if (appShell) {
                    appShell.inert = true;
                    appShell.setAttribute('aria-hidden', 'true');
                }
                if (introScreen) {
                    introScreen.classList.remove('hidden');
                }
                if (loginEmail) {
                    loginEmail.focus();
                }
            }
        });
    });

    supabaseClient.auth.getSession().then(({ data, error }) => {
        if (error) {
            setAuthMessage(`Could not restore your sign-in: ${error.message}`, true);
            return;
        }

        if (data.session && data.session.user && (!currentUser || currentUser.id !== data.session.user.id)) {
            loadAccount(data.session.user);
        }
    });
}
