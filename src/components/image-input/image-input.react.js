/* @flow */
import React, {PureComponent} from 'react';

import {UIBase} from '../layout';

import UIImageInput from './image-input';

import styles from './image-input.css';

type TProps = {
  children?: React.Node,
};

export default class ImageInput extends PureComponent {
  props: TProps;

  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.element) {
      this.instance = new UIImageInput({
        element: this.element,
        onChange: this.onChange,
      });
    }
  }

  onChange(event: SyntheticEvent<*>) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const {children, placeholder = 'Add image'} = this.props;

    return (
      <UIBase
        id="inputWrapper"
        className={styles['ui-image-input']}
        elRef={element => {
          this.element = element;
        }}
      >
        <input
          type="file"
          name="imageInput"
          id="imageInput"
          className="ui-input ui-input--medium ui-image-input__input"
          accept="image/*"
          tabIndex="0"
        />
        <div className={styles['ui-image-input__pseudo']}>{placeholder}</div>
        <div className={styles['ui-image-input__meta']}>
          {children}
          <button className={styles['ui-image-input__reset']} id="resetButton">
            Remove
          </button>
        </div>
      </UIBase>
    );
  }
}
