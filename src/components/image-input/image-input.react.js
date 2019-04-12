import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {UIBase} from '../layout';
import Text from '../text';

import UIImageInput from './image-input';

import styles from './image-input.module.css';

export default class ImageInput extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    recommendation: PropTypes.string,
  };

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

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const {
      children,
      placeholder = 'Add image',
      recommendation = '',
    } = this.props;

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
        <div className="ui-image-input__recommendation">
          <Text>{recommendation}</Text>
        </div>
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
