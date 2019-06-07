import React, {PureComponent} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import CSSTransitionGroup from 'react-addons-css-transition-group';

import H3 from '../h3';
import Icon from '../icon';
import Sticky from '../sticky';
import {UIBase} from '../layout';

import styles from './paper-menu.module.css';

/**
 * Generic open/close popup paper styled menu
 */
export default class PaperMenu extends PureComponent {
  static propTypes = {
    offset: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    children: PropTypes.node,
    open: PropTypes.bool,
    origin: PropTypes.string,
    root: PropTypes.object,
    paper: PropTypes.object,
    onRequestClose: PropTypes.func,
    heading: PropTypes.string,
    optionsIcon: PropTypes.node,
    closeOnOutsideClick: PropTypes.bool,
    sticky: PropTypes.object,
    zIndex: PropTypes.number,
    anchor: PropTypes.string,
    optionIcons: PropTypes.object,
  };

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

  constructor(props) {
    super();

    this.onWindowClick = this.onWindowClick.bind(this);

    if (props.open) {
      window.addEventListener('click', this.onWindowClick);
    }
  }

  componentWillReceiveProps(newProps) {
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

  onWindowClick(event) {
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
