/* @flow */
import * as React from 'react';
import {List} from 'immutable';
import {size} from 'utils/type';

import {Box} from '../layout';
import FieldHint from '../field-hint';
import FieldLabel from '../field-label';
import FieldValidations from '../field-validations';

import type Validation from '../field-validation';
import type LabelProps from '../field-label';

export type TProps = {
  children?: React$Element<*>,
  /** A list of validations */
  validations?: List<Validation>,
  /** Any disabling permissions for this field */
  permissions?: Array<Error>,
  /** A label to be displayed above the input */
  label?: React.Node,
  /** A secondary label - This can be a function (for example, to toggle an option) */
  labelAction?: React.Node,
  /** Props to pass down to the label component */
  labelProps?: LabelProps,
  /** Sets the 'for' property to bind a label and input */
  htmlFor?: string,
  /** A string to provide additional information to the user */
  hint?: string,
  /** An optional icon to be displayed next to the hint */
  hintIcon?: React.Node | string,
  /** Displays an asterisk next to the label if the field is required */
  required?: boolean,
  /** Displays a padlock if the field is locked - mainly used for templates */
  locked?: boolean,
  /** An icon to display next to the label */
  icon?: React.Node | string,
  onClick?: Function,
  /** A classname to pass down */
  className?: string,
  /** Centers the field and children components */
  centered?: boolean,
  /** Toggles ability for component to override child props */
  controlChildren?: boolean,
  /** on blur handler to pass to input children */
  onBlur?: Function,
  /** Displays the field inline with the label and input floated */
  inline?: boolean,
  /** Set a width for the field label */
  labelWidth?: number,
};

/**
 * Basic form field container component
 */
export default function Field(props: TProps) {
  const {
    children,
    validations,
    permissions = [],
    label,
    labelProps = {},
    htmlFor,
    required = false,
    locked = false,
    centered = false,
    icon,
    hint,
    hintIcon,
    onClick,
    className,
    labelAction,
    inline = false,
    labelWidth,
    onBlur,
    controlChildren = true,
    ...otherProps
  } = props;

  const hintText = permissions.length > 0 ? permissions[0].message : hint;

  const disabled = permissions.length > 0;

  return (
    <Box
      className={className}
      onClick={onClick}
      position="relative"
      flexDirection="column"
      justifyContent={inline ? 'space-between' : 'inherit'}
      {...otherProps}
    >
      <Box
        flexDirection={inline ? 'row' : 'column'}
        justifyContent={labelWidth ? 'flex-start' : 'space-between'}
      >
        {label ? (
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent={centered ? 'center' : 'space-between'}
          >
            <FieldLabel
              htmlFor={htmlFor}
              required={required}
              locked={locked}
              icon={icon}
              labelProps={labelProps}
              marginBottom={inline ? 0 : 4}
              marginRight={inline ? 8 : 0}
              width={labelWidth}
            >
              {label}
            </FieldLabel>
            {labelAction}
          </Box>
        ) : null}
        {!controlChildren ? (
          children
        ) : (
          React.Children.map(children, child =>
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
          )
        )}
      </Box>

      {!!size(validations) ? (
        <FieldValidations centered={centered} validations={validations} />
      ) : hintText ? (
        <FieldHint hint={hintText} icon={hintIcon ? hintIcon : undefined} />
      ) : null}
    </Box>
  );
}
