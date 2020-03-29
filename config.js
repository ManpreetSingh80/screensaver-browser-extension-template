export const config = {
  name: 'Just Monika Screen Saver',
  description: '',
  store_link: '#',
  store_support: '#',
  socials: {
    facebook: '#',
    twitter: '#',
    website: 'https://kronosdevstudio.com'
  },
  similar_extensions: {
    'Just Yuri Screen Saver': '#',
    'Just Sayori Screen Saver': '#'
  }
};

export const displayControls = [
  {
    header: 'ALL_DISPALYS',
    subheader: 'ALL_DISPLAYS_DESC',
    type: 'toggle',
    name: 'allDisplays',
    defaultValue: false
  },
  {
    header: 'CHROME_FULLSCREEN',
    subheader: 'CHROME_FULLSCREEN_DESC',
    type: 'toggle',
    name: 'fullScreen',
    defaultValue: true
  },
  {
    header: 'MEDIA_PLAYING',
    subheader: 'MEDIA_PLAYING_DESC',
    type: 'toggle',
    name: 'mediaPlay',
    defaultValue: true
  },
  {
    header: 'BROWSER_MINIMIZED',
    subheader: 'BROWSER_MINIMIZED_DESC',
    type: 'toggle',
    name: 'browserMin',
    defaultValue: true
  },
];


export const slideshowControls = [
  {
    header: 'WAIT_TIME',
    subheader: '',
    type: 'slider',
    name: 'waitTime',
    defaultValue: 5
  },
  {
    header: 'EYES_ANIMATION',
    subheader: '',
    type: 'select',
    name: 'animation',
    options: {'1': 1},
    defaultValue: '1'
  },
  {
    header: 'SHOW_DIALOGUES',
    subheader: '',
    type: 'toggle',
    name: 'dialogues',
    defaultValue: true
  },
  {
    header: 'YOUR_NAME',
    subheader: '',
    type: 'input',
    name: 'name',
    defaultValue: 'MC-kun',
    required: {name: 'dialogues', value: true}
  },
  {
    header: 'SOUND',
    subheader: '',
    type: 'toggle',
    name: 'sounds',
    defaultValue: false
  },
  {
    header: 'RUN_CHROME_BACKGROUND_TITLE',
    subheader: 'RUN_CHROME_BACKGROUND_DESC',
    type: 'toggle',
    name: 'chromeBack',
    defaultValue: false
  },
  {
    header: 'SHOW_TIME',
    subheader: '',
    type: 'select',
    name: 'showTime',
    options: {'1': 'HOUR_12', '2': 'HOUR_24'},
    defaultValue: '1'
  },
  {
    header: 'LARGE_TIME_LABEL',
    subheader: '',
    type: 'toggle',
    name: 'largeTime',
    defaultValue: false
  },
];

export const locales = {
  'en_US': 'English',
  'fr_FR': 'French'
}

export const defaultLocale = 'en_US';