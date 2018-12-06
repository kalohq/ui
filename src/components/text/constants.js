/* @flow */
import Enum from '../../utils/enum';

export type TEXT_WEIGHT = 'light' | 'normal' | 'medium' | 'semi-bold';

export const TEXT_SIZE = new Enum({
  TINY: {
    value: 'tiny',
  },
  EXTRA_SMALL: {
    value: 'extra-small',
  },
  SMALL: {
    value: 'small',
  },
  MEDIUM: {
    value: 'medium',
  },
  LARGE: {
    value: 'large',
  },
  EXTRA_LARGE: {
    value: 'extra-large',
  },
});

export type TEXT_COLOR =
  /* PINK */
  | 'pink000'
  | 'pink100'
  | 'pink200'
  | 'pink300'
  | 'pink400'
  | 'pink500'
  | 'pink600'
  | 'pink700'
  | 'pink700'
  | 'pink800'
  | 'pink900'
  /* GREEN */
  | 'green000'
  | 'green100'
  | 'green200'
  | 'green300'
  | 'green400'
  | 'green500'
  | 'green600'
  | 'green700'
  | 'green800'
  | 'green900'
  /* BLUE */
  | 'blue000'
  | 'blue100'
  | 'blue200'
  | 'blue300'
  | 'blue400'
  | 'blue500'
  | 'blue600'
  | 'blue700'
  | 'blue800'
  | 'blue900'
  /* PURPLE */
  | 'purple000'
  | 'purple100'
  | 'purple200'
  | 'purple300'
  | 'purple400'
  | 'purple500'
  | 'purple600'
  | 'purple700'
  | 'purple800'
  | 'purple900'
  /* ORANGE */
  | 'orange000'
  | 'orange100'
  | 'orange200'
  | 'orange300'
  | 'orange400'
  | 'orange500'
  | 'orange600'
  | 'orange700'
  | 'orange800'
  | 'orange900'
  /* NAVY */
  | 'navy000'
  | 'navy100'
  | 'navy200'
  | 'navy300'
  | 'navy400'
  | 'navy500'
  | 'navy600'
  | 'navy700'
  | 'navy800'
  | 'navy900'
  /* GREY */
  | 'grey000'
  | 'grey100'
  | 'grey200'
  | 'grey300'
  | 'grey400'
  | 'grey500'
  | 'grey600'
  | 'grey700'
  | 'grey800'
  | 'grey900'
  /* MISC */
  | 'white'
  | 'black'
  | 'none'
  | 'currentColor'
  /* DEPRECATED */
  | 'navy'
  | 'green'
  | 'pink'
  | 'blue'
  | 'purple'
  | 'orange'
  | 'grey'
  | 'red'
  | 'snow' // deprecated
  | 'platinum' // deprecated
  | 'silver' // deprecated
  | 'slate' // deprecated
  | 'charcoal' // deprecated
  | 'dark-grey' // deprecated
  | 'light-grey'; // deprecated

export type TEXT_HOVER_COLOR = TEXT_COLOR;

export type TEXT_ALIGN = 'center' | 'left' | 'right' | 'initial' | 'unset';
