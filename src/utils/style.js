import {isNumber, isString, pickBy, omitBy} from 'lodash';
import STYLE_WHITELIST from './style/style-whitelist';
import PROP_WHITELIST_REGEX from './style/prop-whitelist';
import {returnArray} from './array';

import tokens from '../design-tokens/tokens.js';

const SPACING_REGEX = /^(padding|margin)(Top|Right|Bottom|Left)?$/;

const SPACING_MAP = {
  none: tokens.spacingNone,
  'extra-small': tokens.spacingExtraSmall,
  small: tokens.spacingSmall,
  medium: tokens.spacingMedium,
  large: tokens.spacingLarge,
  'extra-large': tokens.spacingExtraLarge,
};

/**
 * Removes props that haven’t been whitelisted, to ensure
 * that non-valid props don’t pollute the DOM
 */
export function cleanProps(originalProps) {
  const cleanedProps = Object.keys(originalProps)
    .filter(key => PROP_WHITELIST_REGEX.test(key))
    .reduce((obj, key) => {
      const obj2 = {...obj};
      obj2[key] = originalProps[key];
      return obj2;
    }, {});

  return cleanedProps;
}

/**
 * Flexbox style overrides for Safari 8
 * Safari 8 detection is performed in advance
 */
const VENDOR_STYLERS =
  typeof window !== 'undefined' &&
  window.navigator.userAgent.indexOf('Safari/') !== -1 &&
  window.navigator.userAgent.indexOf('Version/8') !== -1
    ? {
        display: (key, value) => ({
          key,
          value: (value.indexOf('flex') > -1 ? '-webkit-' : '') + value,
        }),
        alignContent: (key, value) => ({key: 'WebkitAlignContent', value}),
        alignItems: (key, value) => ({key: 'WebkitAlignItems', value}),
        alignSelf: (key, value) => ({key: 'WebkitAlignSelf', value}),
        justifyContent: (key, value) => ({key: 'WebkitJustifyContent', value}),
        order: (key, value) => ({key: 'WebkitOrder', value}),
        flexDirection: (key, value) => ({key: 'WebkitFlexDirection', value}),
        flexWrap: (key, value) => ({key: 'WebkitFlexWrap', value}),
        flexFlow: (key, value) => ({key: 'WebkitFlexFlow', value}),
        flex: (key, value) => ({key: 'WebkitFlex', value}),
        flexBasis: (key, value) => ({key: 'WebkitFlexBasis', value}),
        flexShrink: (key, value) => ({key: 'WebkitFlexShrink', value}),
        flexGrow: (key, value) => ({key: 'WebkitFlexGrow', value}),
      }
    : {};

/** Parse a specific style */
export function parseStyle(name, value) {
  if (value && SPACING_REGEX.test(name)) {
    return returnArray(value)
      .map(v => {
        if (isNumber(v)) {
          return `${String(v)}px`;
        } else if (isString(v) && SPACING_MAP[v]) {
          return SPACING_MAP[v];
        }
        return v;
      })
      .join(' ');
  }

  return value;
}

/** Pull out styles from props */
export function parseStyleProps(originalProps) {
  const props = {};
  const style = originalProps.style || {};

  for (const key in originalProps) {
    if ({}.hasOwnProperty.call(originalProps, key)) {
      if (STYLE_WHITELIST[key]) {
        const parsedStyleValue = parseStyle(key, originalProps[key]);
        if (!!VENDOR_STYLERS[key]) {
          const pair = VENDOR_STYLERS[key](key, parsedStyleValue);
          style[pair.key] = pair.value;
        } else {
          style[key] = parsedStyleValue;
        }
      } else if (key !== 'style') {
        props[key] = originalProps[key];
      }
    }
  }

  return {props, style};
}

export function stylePropTransform(originalProps) {
  const props = {};

  Object.keys(originalProps).map(prop => {
    if (STYLE_WHITELIST[prop]) {
      props[prop] = parseStyle(prop, originalProps[prop]);
      return props[prop];
    }
    return false;
  });

  return props;
}

/** Filter keys on an object to those from our STYLE_WHITELIST */
export const pickStyles = obj => pickBy(obj, (v, key) => STYLE_WHITELIST[key]);

export const omitStyles = obj => omitBy(obj, (v, key) => STYLE_WHITELIST[key]);

/**
 * Transforms margin and padding props in to real pixel values,
 * to transform our custom scale values ('small', 'medium' etc.)
 */
export function spacing(originalProps) {
  const props = {};
  Object.keys(originalProps)
    .filter(prop => SPACING_REGEX.test(prop))
    .map(prop => {
      props[prop] = returnArray(originalProps[prop])
        .map(val =>
          isNumber(val)
            ? `${String(val)}px`
            : isString(val) && SPACING_MAP[val]
            ? SPACING_MAP[val]
            : val
        )
        .join(' ');

      return props[prop];
    });

  return props;
}
