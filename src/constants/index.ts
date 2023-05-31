/* eslint-disable camelcase */

export const GPT_MODELS = [
  'gpt-3.5-turbo-0301',
  'gpt-3.5-turbo',
  'gpt-4',
  'gpt-4-0314',
  'gpt-4-32k',
  'gpt-4-32k-0314',
] as const;

export const OPENAI_MODELS = [...GPT_MODELS, 'text-davinci-003', 'text-davinci-002'] as const;

export type GPTModel = (typeof GPT_MODELS)[number];
export type OpenAIModel = (typeof OPENAI_MODELS)[number];

export const OPENAI_MODELS_TITLES: Record<OpenAIModel, string> = {
  'gpt-3.5-turbo-0301': 'claude-v1.3',
  'gpt-3.5-turbo': 'claude-v1 (recommended)',
  'text-davinci-003': 'claude-v1-instant',
  'text-davinci-002': 'claude-v1-instant',
  'gpt-4': 'claude-v1-100k (testing)',
  'gpt-4-0314': 'claude-v1.3-100k (testing)',
  'gpt-4-32k': 'claude-v1-instant-100k (testing)',
  'gpt-4-32k-0314': 'claude-v1-instant-100k (testing)',
} as const;

export const OPENAI_MODELS_DESCRIPTION: Record<OpenAIModel, string> = {
  'gpt-3.5-turbo-0301': 'GPT-3.5 Turbo 0301 (30.1B)',
  'gpt-3.5-turbo': 'GPT-3.5 Turbo (30.1B)',
  'text-davinci-003': 'Text Davinci (3.3B)',
  'text-davinci-002': 'Text Davinci (3.3B)',
  'gpt-4': 'GPT-4',
  'gpt-4-0314': 'GPT-4 0314',
  'gpt-4-32k': 'GPT-4 32K',
  'gpt-4-32k-0314': 'GPT-4 32K 0314',
} as const;

export const LANGUAGES = {
  auto: 'Auto',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
  en: 'English',
  yue: '粵語',
  wyw: '漢文',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  ar: 'العربية',
  af: 'Afrikaans',
  am: 'Amharic',
  az: 'Azerbaijani',
  be: 'Belarusian',
  bg: 'Bulgarian',
  bn: 'Bengali',
  bs: 'Bosnian',
  ca: 'Catalan',
  ceb: 'Cebuano',
  co: 'Corsican',
  cs: 'Czech',
  cy: 'Welsh',
  da: 'Danish',
  el: 'Greek',
  eo: 'Esperanto',
  et: 'Estonian',
  eu: 'Basque',
  fa: 'Persian',
  fi: 'Finnish',
  fj: 'Fijian',
  fy: 'Frisian',
  ga: 'Irish',
  gd: 'Scots Gaelic',
  gl: 'Galician',
  gu: 'Gujarati',
  ha: 'Hausa',
  haw: 'Hawaiian',
  he: 'Hebrew',
  hi: 'Hindi',
  hmn: 'Hmong',
  hr: 'Croatian',
  ht: 'Haitian Creole',
  hu: 'Hungarian',
  hy: 'Armenian',
  id: 'Indonesian',
  ig: 'Igbo',
  is: 'Icelandic',
  jw: 'Javanese',
  ka: 'Georgian',
  kk: 'Kazakh',
  km: 'Khmer',
  kn: 'Kannada',
  ku: 'Kurdish',
  ky: 'Kyrgyz',
  la: 'Latin',
  lb: 'Luxembourgish',
  lo: 'Lao',
  lt: 'Lithuanian',
  lv: 'Latvian',
  mg: 'Malagasy',
  mi: 'Maori',
  mk: 'Macedonian',
  ml: 'Malayalam',
  mn: 'Mongolian',
  mr: 'Marathi',
  ms: 'Malay',
  mt: 'Maltese',
  my: 'Burmese',
  ne: 'Nepali',
  no: 'Norwegian',
  ny: 'Chichewa',
  or: 'Odia',
  pa: 'Punjabi',
  ps: 'Pashto',
  ro: 'Romanian',
  rw: 'Kinyarwanda',
  si: 'Sinhala',
  sk: 'Slovak',
  sl: 'Slovenian',
  sm: 'Samoan',
  sn: 'Shona',
  so: 'Somali',
  sq: 'Albanian',
  sr: 'Serbian',
  'sr-Cyrl': 'Serbian Cyrillic',
  'sr-Latn': 'Serbian Latin',
  st: 'Sesotho',
  su: 'Sundanese',
  sv: 'Swedish',
  sw: 'Swahili',
  ta: 'Tamil',
  te: 'Telugu',
  tg: 'Tajik',
  th: 'Thai',
  tk: 'Turkmen',
  tl: 'Tagalog',
  tr: 'Turkish',
  tt: 'Tatar',
  ug: 'Uyghur',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zu: 'Zulu',
} as const;

export type Language = keyof typeof LANGUAGES;
