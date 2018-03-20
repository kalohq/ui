/* @flow */
import React from 'react';
import {List} from 'immutable';
import styled from 'react-emotion';
import PureComponent from 'react-pure-render/component';

import FieldValidation from '../field-validation';
import type Validation from '../field-validation';

export type Validations = List<Validation>;

const StyledFieldValidation = styled.div`
  text-align: ${props => (props.centered ? 'center' : 'left')};

  > * {
    margin-top: 5px;
  }
`;

type TProps = {
  /** A list of validations to be displayed to the user */
  validations?: Validations,
  /** Visually centeres the validations */
  centered?: boolean,
};

export default class FieldValidations extends PureComponent<TProps> {
  render() {
    const {validations, centered} = this.props;

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
}
