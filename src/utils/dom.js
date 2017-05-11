/**
 * Gets the current scroll position of the document element
 * http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
 * @returns {{top: number, left: number}}
 */
export function getDocumentScroll() {
  const doc = document.documentElement;
  const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  return {top, left};
}

/**
 * Calculate the fully absolute (to body top/left) position of an element
 * @param el
 * @returns {{top: number, left: number}}
 */
export function getFixedOffset(el) {
  const rect = !!el ? el.getBoundingClientRect() : {top: 0, left: 0};
  const scroll = getDocumentScroll();
  return {
    top: rect.top + scroll.top,
    left: rect.left + scroll.left,
  };
}

/**
 * Remove a given element from the DOM
 * @param {Element} el
 */
export function removeNode(el) {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

export function outerHeight(el) {
  const style = window.getComputedStyle(el);
  return (
    (el.offsetHeight || 0) +
    parseInt(style.marginTop || 0, 10) +
    parseInt(style.marginBottom || 0, 10)
  );
}

export function outerWidth(el) {
  const style = window.getComputedStyle(el);
  return (
    (el.offsetWidth || 0) +
    parseInt(style.marginLeft || 0, 10) +
    parseInt(style.marginRight || 0, 10)
  );
}

/**
 * Return the selection range from an element as start & end row/column vectors
 * NOTE: Rows and columns are 1-indexed
 *
 * @param el
 * @returns {[[startRow, startColumn], [endRow, endColumn], [startIndex, endIndex]}
 */
export function getSelectionRange(el) {
  const value = el.value;

  // Calculate selction start position
  const rowstoStart = value.substr(0, el.selectionStart).split('\n');
  const startRow = rowstoStart.length;
  const startColumn = rowstoStart[rowstoStart.length - 1].length + 1;

  // Calculate selection end position
  const rowsToEnd = value.substr(0, el.selectionEnd).split('\n');
  const endRow = rowsToEnd.length;
  const endColumn = rowsToEnd[rowsToEnd.length - 1].length + 1;

  // Return as vector range array
  return [
    [startRow, startColumn],
    [endRow, endColumn],
    [el.selectionStart, el.selectionEnd],
  ];
}

/**
 * Shift columns of given selection range by delta
 */
export function shiftSelectionColumns(selectionRange, delta) {
  return [
    [selectionRange[0][0], selectionRange[0][1] + delta],
    [selectionRange[1][0], selectionRange[1][1] + delta],
    [selectionRange[2][0] + delta, selectionRange[2][1] + delta],
  ];
}

/**
 * Takes a selection range array (as seen above in getSelectionRange)
 * and sets it on an input or textarea element
 */
export function setSelectionRange(el, selectionRange) {
  el.setSelectionRange(selectionRange[2][0], selectionRange[2][1]);
}

/**
 * Get the browsers scrollbar width
 * http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
 */
export function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}

export function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className = `${el.className} ${className}`; // eslint-disable-line no-param-reassign
  }
}

export function getParentBoundingClientRect(elem) {
  const htmlElem = elem instanceof HTMLElement ? elem : elem.parentElement; // eslint-disable-line no-undef
  return htmlElem.offsetParent.getBoundingClientRect();
}

export function createEvent(name, data = {}) {
  try {
    return new window.CustomEvent(name, {detail: data});
  } catch (e) {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent(name, true, true, data);
    return event;
  }
}
