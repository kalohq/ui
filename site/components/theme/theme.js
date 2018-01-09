/* @flow */

const tokens = {
  colors: {
    navy600: 'rgb(84, 103, 137)',
    pink600: 'rgb(224, 88, 103)',
    navy700: 'rgb(55, 69, 97)',
    pink700: 'rgb(195, 74, 87)',
    snow: 'rgb(249, 250, 252)',
    green: 'rgb(62, 179, 138)',
    orange300: 'rgb(255, 237, 180)',
    orange400: 'rgb(255, 206, 94)',
    orange500: 'rgb(253, 184, 28)',
    orange600: 'rgb(246, 175, 13)',
    white: 'rgb(255, 255, 255)',
    orange700: 'rgb(216, 145, 24)',
    platinum: 'rgb(238, 244, 250)',
    charcoal: 'rgb(55, 69, 97)',
    silver: 'rgb(176, 186, 195)',
    orange: 'rgb(253, 184, 28)',
    green300: 'rgb(216, 240, 232)',
    red: 'rgb(234, 95, 110)',
    green400: 'rgb(79, 210, 164)',
    green500: 'rgb(62, 179, 138)',
    grey200: 'rgb(249, 250, 252)',
    green600: 'rgb(56, 160, 124)',
    grey300: 'rgb(238, 244, 250)',
    green700: 'rgb(41, 134, 101)',
    grey400: 'rgb(208, 216, 223)',
    pink: 'rgb(234, 95, 110)',
    grey500: 'rgb(176, 186, 195)',
    navy: 'rgb(147, 166, 193)',
    purple300: 'rgb(232, 226, 242)',
    grey600: 'rgb(137, 146, 155)',
    grey700: 'rgb(112, 125, 138)',
    none: '',
    purple400: 'rgb(159, 129, 218)',
    slate: 'rgb(84, 103, 137)',
    blue300: 'rgb(193, 244, 255)',
    purple500: 'rgb(138, 112, 189)',
    blue: 'rgb(84, 195, 219)',
    blue400: 'rgb(101, 210, 234)',
    purple600: 'rgb(119, 95, 168)',
    inherit: 'inherit',
    blue500: 'rgb(84, 195, 219)',
    purple700: 'rgb(96, 78, 131)',
    blue600: 'rgb(77, 184, 207)',
    purple: 'rgb(138, 112, 189)',
    pink300: 'rgb(251, 223, 226)',
    currentColor: 'currentColor',
    blue700: 'rgb(43, 167, 194)',
    navy300: 'rgb(249, 250, 252)',
    navy400: 'rgb(198, 199, 216)',
    pink400: 'rgb(253, 179, 200)',
    navy500: 'rgb(147, 166, 193)',
    pink500: 'rgb(234, 95, 110)',
    black: 'rgb(0, 0, 0)',
  },
  typography: {
    fontSizeHeadingLarge: '32px',
    fontSizeHeadingMedium: '24px',
    fontSizeHeadingSmall: '16px',
    fontSizeHeadingXSmall: '12px',
    fontSizeTextLarge: '18px',
    fontSizeTextMedium: '16px',
    fontSizeTextSmall: '14px',
    fontSizeTextXSmall: '12px',
    fontWeightLight: '300',
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightSemibold: '600',
  },
  layout: {
    borderRadius: '4px',
    borderRadiusInput: '4px',
    borderRadiusButton: '4px',
  },
};

/**
 * ThemeProvider Kalo Theme
 * 
 * This is the core CSS-in-JS theme that is passed in to the
 * global ThemeProvider. It is mainly composed of our core
 * design tokens.
 */

const theme = {
  ...tokens,
};

export default theme;