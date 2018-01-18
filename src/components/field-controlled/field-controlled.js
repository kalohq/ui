/* @flow */
import * as React from 'react';

import CoreField from '../field';

/**
 * Basic form field ontainer component
 */
type TProps = {
  children?: React.Node,
  /** on blur handler to pass to input children */
  onBlur?: Function,
  /** Any disabling permissions for this field */
  permissions?: Array<Error>,
  /** A helpful hint to display under the input */
  hint?: string,
};

export default function Field(props: TProps) {
  const {children, onBlur, permissions = [], hint, ...otherProps} = props;

  const disabled = permissions.length > 0;

  return (
    <CoreField hint={disabled ? permissions[0].message : hint} {...otherProps}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onBlur,
          disabled:
            child.props.disabled === undefined
              ? disabled
              : child.props.disabled,
          editable:
            child.props.editable === undefined
              ? !disabled
              : child.props.editable,
          readonly:
            child.props.readonly === undefined
              ? disabled
              : child.props.readonly,
        })
      )}
    </CoreField>
  );
}
