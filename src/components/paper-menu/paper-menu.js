/* @flow */
import * as React from 'react';
import cx from 'classnames';

import PureComponent from 'react-pure-render/component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import H3 from '../h3';
import Icon from '../icon';
import Paper from '../paper';

import styles from './paper-menu.css';

/**
 * Generic open/close popup paper styled menu
 */

type Props = {
  offset?: {
    x?: number,
    y?: number,
  },
  children?: React.Node,
  open?: boolean,
  origin?: string,
  root?: Object,
  paper?: Object,
  onRequestClose?: Function,
  heading?: string,
  optionsIcon?: React.Node,
  closeOnOutsideClick?: boolean,
};

export default class PaperMenu extends PureComponent {
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

  constructor(props: Props) {
    super();

    this.onWindowClick = this.onWindowClick.bind(this);

    if (props.open) {
      window.addEventListener('click', this.onWindowClick);
    }
  }

  componentWillReceiveProps(newProps: Props) {
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

  render() {
    const {
      open,
      children,
      origin,
      paper,
      root,
      heading,
      optionIcons,
    } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName="t-scale"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionAppearTimeout={300}
      >
        {open ? (
          <div
            {...root}
            onClick={event => event.stopPropagation()}
            style={{transformOrigin: origin}}
            className={cx({
              [styles.root]: true,
            })}
          >
            <Paper {...paper}>
              {heading && (
                <div className={styles.header}>
                  <H3>{heading}</H3>
                  <div className={styles.options}>
                    {optionIcons}
                    <div
                      className={styles.close}
                      onClick={this.props.onRequestClose}
                    >
                      <Icon size={18}>clear</Icon>
                    </div>
                  </div>
                </div>
              )}
              {children}
            </Paper>
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}
