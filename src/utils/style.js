import {isArray, isNumber, pickBy, omitBy} from 'lodash';

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

const MAPPED_SPACING_PROPS = {
  margin: 'm',
  marginTop: 'mt',
  marginRight: 'mr',
  marginBottom: 'mb',
  marginLeft: 'ml',
  padding: 'p',
  paddingTop: 'pt',
  paddingRight: 'pr',
  paddingBottom: 'pb',
  paddingLeft: 'pl',
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

/*
  * Lookup to determine which styles can be given a vector of values
  * Eg. Pass {padding: [0, 5, 5, 0]}
  */

const VECTOR_STYLES = {
  padding: true,
  margin: true,
};

/** Parse a specific style */
function parseStyle(name, value) {
  if (VECTOR_STYLES[name] && isArray(value)) {
    return value.map(v => (v ? (isNumber(v) ? `${v}px` : v) : 0)).join(' ');
  }

  return value;
}

/** Pull out styles from props */
export function parseStyleProps(rawProps, shouldAddVendors = true) {
  const props = {};
  const style = {};

  for (const key in rawProps) {
    if ({}.hasOwnProperty.call(rawProps, key)) {
      if (STYLE_WHITELIST[key]) {
        const parsedStyleValue = parseStyle(key, rawProps[key]);
        if (shouldAddVendors && !!VENDOR_STYLERS[key]) {
          const pair = VENDOR_STYLERS[key](key, parsedStyleValue);
          style[pair.key] = pair.value;
        } else {
          style[key] = parsedStyleValue;
        }
      } else {
        props[key] = rawProps[key];
      }
    }
  }

  return {props, style};
}

/**
 * @summary
 * Pull out styles from props, as well as map our
 * custom spacing prop names to ones that our layout
 * library expects:
 * 
 * @example: marginLeft => ml
 */
export function parseStyleAndSpacingProps(rawProps) {
  const spacingProps = {};
  const otherProps = {};

  for (const key in rawProps) {
    if ({}.hasOwnProperty.call(rawProps, key)) {
      if (MAPPED_SPACING_PROPS[key]) {
        spacingProps[MAPPED_SPACING_PROPS[key]] = parseStyle(
          key,
          rawProps[key]
        );
      } else {
        otherProps[key] = rawProps[key];
      }
    }
  }

  const {props, style} = parseStyleProps(otherProps, false);

  return {props, spacingProps, style};
}

/** Filter keys on an object to those from our STYLE_WHITELIST */
export function pickStyles(obj) {
  return pickBy(obj, (v, key) => STYLE_WHITELIST[key]);
}

export function omitStyles(obj) {
  return omitBy(obj, (v, key) => STYLE_WHITELIST[key]);
}
