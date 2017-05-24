import {
  forEach,
  isPlainObject,
  merge,
  mapValues,
  isArray,
} from 'lodash';

/** Ensure consistent value format */
function toProps(value) {
  return isPlainObject(value) ? value : {value};
}

/**
 * Basic Enum constructor to provide some consistency to how we
 * define enums with associated properties
 */
export default class Enum {

  properties = {};
  values = [];

  constructor(spec) {
    forEach(spec, (value, keyOrIndex) => {
      const properties = toProps(value);
      if (this.properties[properties.value]) {
        throw new Error(`Duplicate values (${JSON.stringify(value)}) found in enum spec. `);
      }
      const key = isArray(spec) ? value : keyOrIndex;
      this[key] = properties.value;
      this.values.push(properties.value);
      this.properties[properties.value] = {...properties};
    });

  }

  *[Symbol.iterator]() {
    yield* this.values;
  }

  /** https://github.com/Alexoner/react-redux-universal-hot-example/commit/8f357cccdaffbbcb51e46e6df5235dfd214db4e1 */
  __EMPTY_METHOD_WHICH_FIXES_BABEL_V8_BUG__() {}

  /**
   * Create an enum with values from difference source
   * - Useful for creating property objects from external schemas
   */
  static withValues(values, spec) {
    return new Enum(merge({}, mapValues(values, toProps), spec));
  }

}
