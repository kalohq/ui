/* @flow */
import React, {PureComponent} from 'react';
import cx from 'classnames';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Sticky from '../sticky';

import styles from './drop-menu.module.css';

/**
 * Generic open/close popup menu
 */

type TProps = {
  offset?: {
    x?: number,
    y?: number,
  },
  children?: React$Node,
  open?: boolean,
  origin?: string,
  root?: Object,
  onRequestClose?: Function,
  heading?: string,
  closeOnOutsideClick?: boolean,
  sticky?: Object,
  zIndex?: number,
  anchor?: string,
  className?: string | Object,
};

export default class PaperMenu extends PureComponent<TProps> {
  onWindowClick: Function;

  static defaultProps = {
    children: '',
    origin: 'top left',
    open: false,
    anchor: 'bottom',
    zIndex: 100,
    closeOnOutsideClick: true,
  };

  constructor(props: TProps) {
    super();

    this.onWindowClick = this.onWindowClick.bind(this);

    if (props.open) {
      window.addEventListener('click', this.onWindowClick);
    }
  }

  componentWillReceiveProps(newProps: TProps) {
    // We only bind a window click event handler while the menu is open.
    // We also wait for the animation to finish. This means that multiple
    // paper menu’s will not stay open at the same time.
    if (newProps.open && !this.props.open) {
      setTimeout(
        () => window.addEventListener('click', this.onWindowClick),
        300
      );
    }
    if (!newProps.open && this.props.open) {
      window.removeEventListener('click', this.onWindowClick);
    }
  }

  onWindowClick(event: SyntheticEvent<*>) {
    if (
      this.props.open &&
      this.props.closeOnOutsideClick &&
      this.props.onRequestClose
    ) {
      this.props.onRequestClose(event);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  render() {
    const {
      open,
      children,
      origin,
      root,
      anchor,
      offset,
      zIndex,
      sticky,
      className,
    } = this.props;

    const _classNames = cx(
      {
        [styles['ui-drop-menu']]: true,
      },
      className
    );

    return (
      <Sticky anchor={anchor} offset={offset} zIndex={zIndex} {...sticky}>
        <CSSTransitionGroup
          transitionName="t-slide"
          transitionEnterTimeout={220}
          transitionLeaveTimeout={220}
          transitionAppearTimeout={220}
        >
          {open && (
            <div
              {...root}
              className={_classNames}
              style={{transformOrigin: origin}}
              onClick={event => event.stopPropagation()}
            >
              {children}
            </div>
          )}
        </CSSTransitionGroup>
      </Sticky>
    );
  }
}
