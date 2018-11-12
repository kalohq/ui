/* @flow */
import React, {PureComponent} from 'react';
import cx from 'classnames';
import {HotKeys} from 'react-hotkeys';

import Heading from '../heading';
import SeamlessButton from '../seamless-button';

import styles from './modal.css';

type TProps = {
  /** The main body of the modal */
  children: React$Node,
  /** The main heading of the modal */
  title: string,
  /** A function to call when closing the modal - If not set, the modal will not be dismissable */
  onClose?: Function,
  /** A set of actions to be displayed in the modal footer */
  actions?: React$Node,
  /** Is the modal open or not */
  open?: boolean,
};

export default class Modal extends PureComponent<TProps> {
  __handlers__: Object;
  onEscHotkey: Function;
  modalElement: React$Node;

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

  componentWillReceiveProps(nextProps: TProps) {
    if (nextProps.open === true && !this.props.open && this.modalElement) {
      // $FlowFixMe
      this.modalElement.focus();
    }
  }

  render() {
    const {title, open, actions, children} = this.props;

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
            <header className={styles['ui-modal__modal__header']}>
              <Heading size="large" id="dialog-title">
                {title}
              </Heading>
              <SeamlessButton
                size="medium"
                icon="close"
                onClick={this.props.onClose}
              />
            </header>

            <main
              className={styles['ui-modal__modal__main']}
              aria-describedby="dialog-description"
            >
              {children}
            </main>

            <footer className={styles['ui-modal__modal__footer']}>
              {actions}
            </footer>
          </div>
        </div>
      </HotKeys>
    );
  }
}
