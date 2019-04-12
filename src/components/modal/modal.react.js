import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {HotKeys} from 'react-hotkeys';

import Heading from '../heading';
import SeamlessButton from '../seamless-button';

import styles from './modal.module.css';

export default class Modal extends PureComponent {
  static propTypes = {
    /** The main body of the modal */
    children: PropTypes.node.isRequired,
    /** The main heading of the modal */
    title: PropTypes.string.isRequired,
    /** A function to call when closing the modal - If not set, the modal will not be dismissable */
    onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    /** A set of actions to be displayed in the modal footer */
    actions: PropTypes.node,
    /** Is the modal open or not */
    open: PropTypes.bool,
    /** Allows content to scroll underneath the header */
    hasFixedHeader: PropTypes.bool,
    /** Allows content to scroll underneath the footer */
    hasFixedFooter: PropTypes.bool,
  };

  constructor() {
    super();
    this.__handlers__ = {
      esc: this.onEscHotkey.bind(this),
    };
    this.onEscHotkey = this.onEscHotkey.bind(this);
  }

  onEscHotkey() {
    if (this.props.onClose) this.props.onClose();
  }

  preventBackgroundScrolling(type) {
    if (document.body) {
      if (type === 'add') {
        document.body.style.cssText =
          'overflow: hidden; position: fixed; width: 100%; height: 100%';
      } else {
        document.body.style.cssText = '';
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open === true && !this.props.open && this.modalElement) {
      this.modalElement.focus();
      this.preventBackgroundScrolling('add');
    } else {
      this.preventBackgroundScrolling('remove');
    }
  }

  componentWillUnmount() {
    this.preventBackgroundScrolling('remove');
  }

  render() {
    const {
      title,
      open,
      actions,
      children,
      hasFixedFooter,
      hasFixedHeader,
      onClose,
    } = this.props;

    return (
      <HotKeys handlers={this.__handlers__}>
        <div
          className={cx({
            [styles['ui-modal']]: true,
            [styles['ui-modal--open']]: !!open,
          })}
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <div
            className={styles['ui-modal__modal']}
            ref={modal => {
              this.modalElement = modal;
            }}
          >
            <header
              className={cx({
                [styles['ui-modal__modal__header']]: true,
                [styles['ui-modal__modal__header--fixed']]: !!hasFixedHeader,
              })}
            >
              <Heading size="large" id="dialog-title">
                {title}
              </Heading>
              {onClose && (
                <SeamlessButton
                  size="medium"
                  icon="close"
                  onClick={this.props.onClose}
                />
              )}
            </header>

            <main
              className={styles['ui-modal__modal__main']}
              aria-describedby="dialog-description"
            >
              {children}
            </main>

            {actions && (
              <footer
                className={cx({
                  [styles['ui-modal__modal__footer']]: true,
                  [styles['ui-modal__modal__footer--fixed']]: !!hasFixedFooter,
                })}
              >
                {actions}
              </footer>
            )}
          </div>
        </div>
      </HotKeys>
    );
  }
}
