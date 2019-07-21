import { darken, lighten } from 'polished';

const black = '#000000';

export const appGrayColors = {
  black: '#000000',
  black90: lighten(0.1, black),
  black80: lighten(0.2, black),
  black70: lighten(0.3, black),
  black60: lighten(0.4, black),
  black50: lighten(0.5, black),
  black40: lighten(0.6, black),
  black30: lighten(0.7, black),
  black20: lighten(0.8, black),
  black10: lighten(0.9, black),
  white: lighten(1, black),
};

// https://mycolor.space/?hex=%2332B3FF&sub=1

const primary = '#32B3FF';
const secondary = '#37EFB9';
const accent = '#F9F871';

export const appColors = {
  primary: primary,
  darkPrimary: darken(0.2, primary),
  lightPrimary: lighten(0.2, primary),
  secondary: secondary,
  darkSecondary: darken(0.2, secondary),
  lightSecondary: lighten(0.2, secondary),
  accent: accent,
  darkAccent: darken(0.2, accent),
  lightAccent: lighten(0.2, accent),
  primaryText: appGrayColors.black90,
  secondaryText: appGrayColors.black50,
};

export const appSemiTransparentColors = {
  veil: 'rgba(255, 193, 7, .3)',
};
