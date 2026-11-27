// おとみち — SoundQuest の画像（個人利用のため、本家のロゴ・キャラクターを表示する）
// 画像ファイルはリポジトリに入れず、soundquest.jp から読み込む。
// 一度表示したものは sw.js が端末に保存するので、オフラインでも出る。
const SQ_FILES = 'https://soundquest.jp/files/';
const SQA = {
  logo: SQ_FILES + 'uploads/2023/07/sq-logo-mobile-2023-125.svg',
  logoWhite: SQ_FILES + 'uploads/2023/07/sq-logo-mobile-white-2023-125.svg',
  hero: SQ_FILES + 'uploads/2021/08/soundquest-wp-scaled.jpg',
  dj: SQ_FILES + 'svg/welcome-dj-1000.svg',
  q: SQ_FILES + 'themes/imgs/sq-glyph-Q.svg',          // 黒い帯の上の「Q」
  qDark: SQ_FILES + 'themes/imgs/sq-glyph-Q-dark.svg', // 白い地の上の「Q」
  knob: {
    intro: SQ_FILES + 'svg/chapter-knob-int.svg',
    prep: SQ_FILES + 'svg/chapter-knob-pre.svg',
    melody: SQ_FILES + 'svg/chapter-knob-mel.svg',
    chord: SQ_FILES + 'svg/chapter-knob-cho.svg',
    rhythm: SQ_FILES + 'svg/chapter-knob-rhy.svg'
  },
  // 章のキャラクター（章の名前 → 画像）。章のない編は編のキャラクター
  avatar: {
    'intro': SQ_FILES + 'svg/categoryavatars/avatar_intro.svg',
    'prep': SQ_FILES + 'svg/categoryavatars/avatar_null.svg',
    'I章:構造の分解': SQ_FILES + 'svg/categoryavatars/avatar_melody-mv1.svg',
    'III章:音階の探究': SQ_FILES + 'svg/categoryavatars/avatar_melody-mv3.svg',
    'I章:基本の体系': SQ_FILES + 'svg/categoryavatars/avatar_chord-mv1.svg',
    'II章:拡張と借用': SQ_FILES + 'svg/categoryavatars/avatar_chord-mv2.svg',
    'I章:リズムの基本': SQ_FILES + 'svg/categoryavatars/avatar_rhythm-mv1.svg'
  }
};
