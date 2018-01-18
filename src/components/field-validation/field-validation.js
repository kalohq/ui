/* @flow */
import React from 'react';
import Text from '../text';

export type Validation = {
  message: string,
};

type TProps = {
  validation: Validation,
};

export default function FieldValidation(props: TProps) {
  const {validation} = props;

  return (
    <Text color="red" size="extra-small" weight="semi-bold" multiline={true}>
      {validation.message}
    </Text>
  );
}
