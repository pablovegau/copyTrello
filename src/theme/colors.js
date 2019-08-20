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

// https://mycolor.space/?hex=%23845EC2&sub=1

const primary = '#845ec2';
const secondary = '#009efa';
const tertiary = '#00d2fc';
const quaternary = '#4ffbdf';

export const appColors = {
  primary: primary,
  darkPrimary: darken(0.2, primary),
  lightPrimary: lighten(0.2, primary),
  secondary: secondary,
  darkSecondary: darken(0.2, secondary),
  lightSecondary: lighten(0.2, secondary),
  tertiary: tertiary,
  darkTertiary: darken(0.2, tertiary),
  lightTertiary: lighten(0.2, tertiary),
  quaternary: quaternary,
  darkQuaternary: darken(0.2, quaternary),
  lightQuaternary: lighten(0.2, quaternary),
  primaryText: appGrayColors.black90,
  secondaryText: appGrayColors.black50,
};
