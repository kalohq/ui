import React from 'react';
import ReactDOM from 'react-dom';
import {omit} from 'lodash';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {getFixedOffset} from 'utils/dom';

import styles from './sticky.css';

function anchorTop({x, y, offset}, child) {
  return {
    x: x + offset.x,
    y: y - child.height + offset.y,
  };
}

function anchorRight({x, y, width, offset}) {
  return {
    x: x + width + offset.x,
    y: y + offset.y,
  };
}

function anchorBottom({x, y, height, offset}) {
  return {
    x: x + offset.x,
    y: y + height + offset.y,
  };
}

function anchorBottomCenter({x, y, height, width, offset}, child) {
  return {
    x: x + offset.x + width / 2 - child.width / 2,
    y: y + height + offset.y,
  };
}

function anchorLeft({x, y, offset}, child) {
  return {
    x: x - child.width + offset.x,
    y: y + offset.y,
  };
}

function anchorNone({x, y, offset}) {
  return {
    x: x + offset.x,
    y: y + offset.y,
  };
}

/** map of prop friendly names to anchor functions */
const anchors = {
  top: anchorTop,
  right: anchorRight,
  bottom: anchorBottom,
  'bottom center': anchorBottomCenter,
  left: anchorLeft,
  none: anchorNone,
};

/**
 * Determine if a specific axis should be fixed or not
 * @param {object|boolean|undefined} fixed See Sticky component `fixed` prop
 * @param {string} axis x/y
 * @returns {boolean}
 */
function isFixed(fixed, axis) {
  if (fixed === true) {
    return true;
  }

  if (!fixed) {
    return false;
  }

  return !!fixed[axis];
}

/**
 * The Sticky component positions its children absolutely against
 * the border of the parent element. You can configure which
 * border (top, left, bottom, right) to stick to as well as a
 * margin.
 *
 * @class  {component} Sticky
 * @exports Sticky
 * @extends {React.Component}
 */
export default class Sticky extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    anchor: PropTypes.oneOf([
      'top',
      'left',
      'bottom',
      'bottom center',
      'right',
      'none',
    ]),
    transition: PropTypes.string,
    width: PropTypes.number,
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    safeZone: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    zIndex: PropTypes.number,
    fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    static: PropTypes.bool,
    noPointerEvents: PropTypes.bool,
  };

  static defaultProps = {
    anchor: 'right',
    width: null,
    offset: {x: 0, y: 0},
    safeZone: {x: 30, y: 30},
    transition: '',
    zIndex: 0,
    fixed: {x: false, y: true},
    static: false,
    noPointerEvents: false,
  };

  constructor() {
    super();

    this.updatePosition = this.updatePosition.bind(this);
  }

  /**
    When the component has mounted and we have a reference to our root element
    We can create a new 'wormhole' element to mount into.
   */
  componentDidMount() {
    this.el = document.createElement('div');
    this.el.style.position = 'absolute';
    this.el.style.transition = this.props.transition
      ? this.props.transition
      : '';
    document.body.appendChild(this.el);
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this.el,
      () => this.updatePosition()
    );
    window.addEventListener('resize', this.updatePosition);
    window.addEventListener('lys:z-scroll', this.updatePosition);
  }

  /**
    When the component updates we need to also re-render into our wormhole
    as well as update its absolute position.
   */
  componentDidUpdate() {
    // only update if we aren’t forcing this sticky to be static
    if (!this.props.static) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        this.renderChildren(),
        this.el,
        () => this.updatePosition()
      );
    }
  }

  componentWillUnmount() {
    // TODO - keep an eye on this react issue
    // https://github.com/facebook/react/issues/2410
    if (!this.el) return;

    ReactDOM.unmountComponentAtNode(this.el);
    document.body.removeChild(this.el);
    window.removeEventListener('resize', this.updatePosition);
    window.removeEventListener('lys:z-scroll', this.updatePosition);
  }

  /*
    We update the position of our 'wormhole' mount based around the current
    fixed offset position of the parent and the current dimensions of our
    child.
   */
  updatePosition() {
    const {
      anchor,
      offset,
      width,
      safeZone,
      zIndex,
      fixed,
      noPointerEvents,
    } = this.props;
    const {root} = this.refs;
    const parent = ReactDOM.findDOMNode(root).parentNode;
    if (!parent) return;
    const position = getFixedOffset(parent);
    const child = this.el.children[0];

    const anchoredPosition = anchors[anchor](
      {
        x: position.left,
        y: position.top,
        height: parent.clientHeight,
        width: parent.clientWidth,
        offset,
      },
      {
        height: child.clientHeight,
        width: child.clientWidth,
      }
    );

    // Fit into window
    const windowTop = window.scrollY + safeZone.y;
    const windowRight = window.scrollX + window.innerWidth - safeZone.x;
    const windowBottom = window.scrollY + window.innerHeight - safeZone.y;
    const windowLeft = window.scrollX + safeZone.x;
    const childRight = anchoredPosition.x + child.clientWidth;
    const childbottom = anchoredPosition.y + child.clientHeight;

    // TODO: All these anchor/offset/contain calculations could be nicely abstracted into some math/layout utils
    if (!isFixed(fixed, 'x') && childRight > windowRight) {
      anchoredPosition.x -= childRight - windowRight;
    }

    if (!isFixed(fixed, 'y') && childbottom > windowBottom) {
      anchoredPosition.y -= childbottom - windowBottom;
    }

    // top left is favoured (ie. we don’t adjust size of sticky just ensure top left is in view)
    if (!isFixed(fixed, 'x')) {
      anchoredPosition.x = Math.max(windowLeft, anchoredPosition.x);
    }
    if (!isFixed(fixed, 'y')) {
      anchoredPosition.y = Math.max(windowTop, anchoredPosition.y);
    }

    this.el.style.zIndex = zIndex;
    this.el.style.left = `${anchoredPosition.x}px`;
    this.el.style.top = `${anchoredPosition.y}px`;
    if (width) {
      this.el.style.width = `${parent.clientWidth / 100 * width}px`;
    }
    if (noPointerEvents) {
      this.el.style.pointerEvents = 'none';
    }
  }

  renderChildren() {
    const {
      children,
      offset: _IGNORED,
      anchor: __IGNORED,
      zIndex: ___IGNORED,
      safeZone: ____IGNORED,
      transition: _____IGNORED,
      fixed: _______IGNORED,
      static: ________IGNORED,
      noPointerEvents,
      ...otherProps
    } = this.props;

    return (
      <div
        className={cx({[styles.transparent]: noPointerEvents})}
        {...omit(otherProps, ['offset'])}
      >
        {children}
      </div>
    );
  }

  render() {
    return <div className={cx({[styles.root]: true})} ref="root" />;
  }
}
