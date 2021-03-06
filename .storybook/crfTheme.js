import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorSecondary: '#32B3FF',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'silver',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Trello Copy',
  // brandImage: "Logos/carved-rock-logo-yellow.png",
});
