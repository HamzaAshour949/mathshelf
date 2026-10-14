// Two languages. Lesson names, game names and video titles are never translated.
export const STRINGS = {
  en: {
    skip: 'Skip to content',
    'nav.years': 'Choose a year',
    'lang.label': 'عربي',
    'lang.aria': 'View this site in Arabic',
    'theme.toLight': 'Switch to the light theme',
    'theme.toDark': 'Switch to the dark theme',

    'home.title': 'Games and videos that make maths click.',
    'home.sub': 'A growing shelf of games, videos and more for Years 7 to 10.',
    'home.pick': 'Choose your year',
    'home.soon': 'Coming soon',
    'home.legend': 'Who is behind each resource',
    'home.legendPicked': 'Videos, games and other material that Mr. Hamza found, checked or made for you.',

    'by.picked': "Mr. Hamza's pick",

    'tab.videos': 'Videos',
    'tab.games': 'Games',
    'tab.aria': 'Resource types',

    'videos.jump': 'Jump to a lesson',
    'videos.units': 'Jump to a unit',
    'video.play': 'Play',
    'video.watchYT': 'Watch on YouTube',
    'video.on': '{channel} on YouTube',
    'video.close': 'Close',

    'games.play': 'Play now',
    'games.pythagorean.desc':
      'Drag the small squares from the two short sides into the big square on the hypotenuse, and see that they fill it exactly.',
    'games.jelly.desc':
      'Drag one jelly term onto another. Terms of the same kind squish together and the numbers add; different kinds bounce apart. Then try the pairs and find out which can be collected.',

    'empty.title': 'Nothing here yet',
    'empty.videos': 'Videos for Year {y} will appear here.',
    'empty.games': 'Games for Year {y} will appear here.',

    'game.back': 'Year {y} · Games',
    'game.loading': 'Loading the game…',
    'game.error': 'The game could not load. Check your connection and try again.',
    'game.retry': 'Try again',
    'full.enter': 'Full screen',
    'full.exit': 'Exit full screen',
    'game.newTab': 'Open on its own page',

    'nf.title': 'We could not find that page',
    'nf.back': 'Back to the home page',

    'footer.credit': '© 2026 Hamza Ashour',
    'footer.note': 'Videos belong to their creators and play from YouTube.',
  },
  ar: {
    skip: 'انتقل إلى المحتوى',
    'nav.years': 'اختر الصف',
    'lang.label': 'English',
    'lang.aria': 'عرض الموقع بالإنجليزية',
    'theme.toLight': 'التبديل إلى المظهر الفاتح',
    'theme.toDark': 'التبديل إلى المظهر الداكن',

    'home.title': 'ألعاب وفيديوهات تجعل الرياضيات أسهل.',
    'home.sub': 'رفّ يكبر يومًا بعد يوم، فيه ألعاب وفيديوهات ومصادر أخرى لطلاب Year 7 إلى Year 10.',
    'home.pick': 'اختر صفّك',
    'home.soon': 'قريبًا',
    'home.legend': 'من وراء كل مصدر؟',
    'home.legendPicked': 'فيديوهات وألعاب ومواد أخرى بحث عنها المستر حمزة وراجعها واختارها لك، أو صمّمها بنفسه.',

    'by.picked': 'من اختيار المستر حمزة',

    'tab.videos': 'الفيديوهات',
    'tab.games': 'الألعاب',
    'tab.aria': 'أنواع المصادر',

    'videos.jump': 'انتقل إلى درس',
    'videos.units': 'انتقل إلى وحدة',
    'video.play': 'تشغيل',
    'video.watchYT': 'المشاهدة على YouTube',
    'video.on': '{channel} على YouTube',
    'video.close': 'إغلاق',

    'games.play': 'العب الآن',
    'games.pythagorean.desc':
      'اسحب المربعات الصغيرة من الضلعين القائمين إلى المربع الكبير على الوتر، وشاهد أنها تملؤه تمامًا.',
    'games.jelly.desc':
      'اسحب حدًّا فوق حدٍّ آخر. إذا كانا من النوع نفسه يلتحمان كالجيلي وتُجمع قيمتاهما، وإذا اختلف نوعاهما يرتدّان. ثم جرّب الأزواج واكتشف أيّها يمكن جمعه.',

    'empty.title': 'لا يوجد شيء هنا بعد',
    'empty.videos': 'ستظهر هنا فيديوهات Year {y}.',
    'empty.games': 'ستظهر هنا ألعاب Year {y}.',

    'game.back': 'Year {y} · الألعاب',
    'game.loading': 'جارٍ تحميل اللعبة…',
    'game.error': 'تعذّر تحميل اللعبة. تحقّق من اتصالك بالإنترنت وحاول مرة أخرى.',
    'game.retry': 'حاول مرة أخرى',
    'full.enter': 'ملء الشاشة',
    'full.exit': 'إنهاء ملء الشاشة',
    'game.newTab': 'فتح في صفحة مستقلة',

    'nf.title': 'لم نعثر على هذه الصفحة',
    'nf.back': 'العودة إلى الصفحة الرئيسية',

    'footer.credit': '© 2026 حمزة عاشور',
    'footer.note': 'الفيديوهات ملك لأصحابها، وتُشغَّل من YouTube.',
  },
};

const NOUNS = {
  video: { one: 'video', many: 'videos' },
  game: { one: 'game', many: 'games' },
  lesson: { one: 'lesson', many: 'lessons' },
};

// Arabic number–noun agreement: 1, 2, 3–10 (plural), 11+ (singular accusative).
const AR = {
  video: { zero: 'لا توجد فيديوهات', one: 'فيديو واحد', two: 'فيديوان', few: 'فيديوهات', many: 'فيديو' },
  game: { zero: 'لا توجد ألعاب', one: 'لعبة واحدة', two: 'لعبتان', few: 'ألعاب', many: 'لعبة' },
  lesson: { zero: 'لا توجد دروس', one: 'درس واحد', two: 'درسان', few: 'دروس', many: 'درسًا' },
};

export function count(lang, kind, n) {
  if (lang === 'ar') {
    const w = AR[kind];
    if (n === 0) return w.zero;
    if (n === 1) return w.one;
    if (n === 2) return w.two;
    return n <= 10 ? `${n} ${w.few}` : `${n} ${w.many}`;
  }
  const w = NOUNS[kind];
  return `${n} ${n === 1 ? w.one : w.many}`;
}

export function format(str, vars) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));
}
