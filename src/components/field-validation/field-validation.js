/* @flow */
import React from 'react';
import Text from '../text';
import PureComponent from 'react-pure-render/component';

export type Validation = {
  message: string,
};

type TProps = {
  validation: Validation,
};

export default class FieldValidation extends PureComponent<TProps> {
  render() {
    const {validation} = this.props;

    return (
      <Text color="red" size="extra-small" weight="semi-bold" multiline={true}>
        {validation.message}
      </Text>
    );
  }
}
