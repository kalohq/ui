/* @flow */
import Enum from 'utils/enum';

const COLORS = new Enum({
  WHITE: {
    value: 'white',
    hex: '#fff',
  },
  BLACK: {
    value: 'black',
    hex: '#000',
  },
  GREEN: {
    value: 'green',
    hex: '#3eb38a',
  },
  PINK: {
    value: 'pink',
    hex: '#EA5F6E',
  },
  RED: {
    value: 'red',
    hex: '#EA5F6E',
  },
  BLUE: {
    value: 'blue',
    hex: '#54C3DB',
  },
  ORANGE: {
    value: 'orange',
    hex: '#FDB81C',
  },
  PURPLE: {
    value: 'purple',
    hex: '#8A70BD',
  },
  SNOW: {
    value: 'snow',
    hex: '#f9fafc',
  },
  PLATINUM: {
    value: 'platinum',
    hex: '#eceff1',
  },
  SILVER: {
    value: 'silver',
    hex: '#b0bec5',
  },
  SLATE: {
    value: 'slate',
    hex: '#547b89',
  },
  CHARCOAL: {
    value: 'charcoal',
    hex: '#234957',
  },
  DARKGREY: {
    value: 'dark-grey',
    hex: '#234957',
  },
  LIGHTGREY: {
    value: 'light-grey',
    hex: '#b0bec5',
  },
  GREY: {
    value: 'grey',
    hex: '#547b89',
  },
  NONE: {
    value: 'none',
    hex: 'none',
  },
  CURRENTCOLOR: {
    value: 'currentColor',
    hex: 'currentColor',
  },
});

export default COLORS;
