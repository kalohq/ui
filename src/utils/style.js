import {isNumber, isString, pickBy, omitBy} from 'lodash';

/**
 * Lookup to determine what props we include in style
 *
 * For now this is limited purely to style rules dealing with
 * layout and sizing (cur. box & text layout).
 */
const STYLE_WHITELIST = {
  alignItems: true,
  alignContent: true,
  alignSelf: true,
  borderWidth: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  display: true,
  cursor: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  justifyContent: true,
  order: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  position: true,
  top: true,
  right: true,
  bottom: true,
  left: true,
  width: true,
  height: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,
  float: true,
  zIndex: true,
  overflow: true,
  overflowX: true,
  overflowY: true,
  tableLayout: true,
  verticalAlign: true,
  textAlign: true,
  textAlignLast: true,
  textIndent: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  wordBreak: true,
  wordSpacing: true,
  wordWrap: true,
  lineHeight: true,
  boxSizing: true,
};

/*
 * Flexbox stlyle overrides for Safari 8
 * Safari 8 detection is performed in advance
 */
const VENDOR_STYLERS =
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

const REGEX = /^(padding|margin)(Top|Right|Bottom|Left)?$/;

const SPACING_MAP = {
  'extra-small': 2,
  small: 4,
  medium: 8,
  large: 16,
  'extra-large': 24,
};

const arr = n => (Array.isArray(n) ? n : [n]);

/** Parse a specific style */
export function parseStyle(name, value) {
  if (REGEX.test(name)) {
    return arr(value)
      .map(v => {
        if (isNumber(v)) {
          return `${v}px`;
        } else if (isString(v) && SPACING_MAP[v]) {
          return `${SPACING_MAP[v]}px`;
        }
        return v;
      })
      .join(' ');
  }

  return value;
}

/** Pull out styles from props */
export function parseStyleProps(rawProps) {
  const props = {};
  const style = rawProps.style || {};

  for (const key in rawProps) {
    if ({}.hasOwnProperty.call(rawProps, key)) {
      if (STYLE_WHITELIST[key]) {
        const parsedStyleValue = parseStyle(key, rawProps[key]);
        if (!!VENDOR_STYLERS[key]) {
          const pair = VENDOR_STYLERS[key](key, parsedStyleValue);
          style[pair.key] = pair.value;
        } else {
          style[key] = parsedStyleValue;
        }
      } else if (key !== 'style') {
        props[key] = rawProps[key];
      }
    }
  }

  return {props, style};
}

/** Filter keys on an object to those from our STYLE_WHITELIST */
export function pickStyles(obj) {
  return pickBy(obj, (v, key) => STYLE_WHITELIST[key]);
}

export function omitStyles(obj) {
  return omitBy(obj, (v, key) => STYLE_WHITELIST[key]);
}
