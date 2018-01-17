/* @flow */
import React from 'react';
import {List} from 'immutable';
import styled from 'react-emotion';

import FieldValidation from '../field-validation';
import type {Validation} from '../field-validation';

export type Validations = List<Validation>;

const StyledFieldValidation = styled.div`
  text-align: ${props => (props.centered ? 'center' : 'left')};

  > * {
    margin-top: 5px;
  }
`;

type TProps = {
  validations?: List<Validation>,
  centered?: boolean,
};

export default function FieldValidations(props: TProps) {
  const {validations, centered} = props;

  return (
    <StyledFieldValidation centered={centered}>
      {validations ? (
        validations.map(validation => (
          <FieldValidation validation={validation} key={validation.message} />
        ))
      ) : null}
    </StyledFieldValidation>
  );
}
