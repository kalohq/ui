import ReactDOM from 'react-dom';

/**
 * Focus a ref’d react input when it is mounted
 * @param ref
 */
export function focusOnMount(ref) {
  const el = ReactDOM.findDOMNode(ref);

  if (el) {
    // Give focus and put the cursor at the end of
    // the value.
    el.focus();
    el.value = el.value;
  }
}

/**
 * Select the text of a ref’d react input when it is mounted
 * @param ref
 */
export function selectOnMount(ref) {
  if (ref && ref.select) {
    ref.select();
  }
}
