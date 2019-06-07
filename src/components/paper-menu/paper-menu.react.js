/* @flow */
import React, {PureComponent} from 'react';
import cx from 'classnames';

import CSSTransitionGroup from 'react-addons-css-transition-group';

import H3 from '../h3';
import Icon from '../icon';
import Sticky from '../sticky';
import {UIBase} from '../layout';

import styles from './paper-menu.module.css';

/**
 * Generic open/close popup paper styled menu
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
  paper?: Object,
  onRequestClose?: Function,
  heading?: string,
  optionsIcon?: React$Node,
  closeOnOutsideClick?: boolean,
  sticky?: Object,
  zIndex?: number,
  anchor?: string,
  optionIcons?: Object,
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
    paper: {
      rounded: true,
      elevation: 2,
      hoverElevation: 2,
    },
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
      paper,
      root,
      heading,
      anchor,
      offset,
      zIndex,
      sticky,
      optionIcons,
      className,
    } = this.props;

    return (
      <Sticky anchor={anchor} offset={offset} zIndex={zIndex} {...sticky}>
        <CSSTransitionGroup
          transitionName="t-slide"
          transitionEnterTimeout={220}
          transitionLeaveTimeout={220}
          transitionAppearTimeout={220}
        >
          {open && (
            <UIBase
              className={cx(
                {
                  [styles['ui-paper-menu']]: true,
                },
                className
              )}
              {...root}
              style={{transformOrigin: origin}}
              onClick={event => event.stopPropagation()}
            >
              <UIBase className={styles['ui-paper-menu__paper']} {...paper}>
                {heading && (
                  <UIBase className={styles['ui-paper-menu__header']}>
                    <H3>{heading}</H3>
                    <UIBase className={styles['ui-paper-menu__option']}>
                      {optionIcons}
                      <UIBase
                        className={styles['ui-paper-menu__option__button']}
                        component="button"
                        onClick={this.props.onRequestClose}
                      >
                        <Icon size={18}>clear</Icon>
                      </UIBase>
                    </UIBase>
                  </UIBase>
                )}
                {children}
              </UIBase>
            </UIBase>
          )}
        </CSSTransitionGroup>
      </Sticky>
    );
  }
}
