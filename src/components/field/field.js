/* @flow */
import * as React from 'react';
import {pickStyles} from '../../utils/style';

import {Box} from '../layout';
import FieldHint from '../field-hint';
import FieldLabel from '../field-label';
import FieldValidations from '../field-validations';

import type {Validations} from '../field-validations';
import type {Props as LabelProps} from '../field-label';

export type TProps = {
  children?: React.Node,
  /** A list of validations */
  validations?: Validations,
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
};

/**
 * Basic form field container component
 */
export default function Field(props: TProps) {
  const {
    children,
    validations,
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
    ...otherProps
  } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      position="relative"
      flexDirection="column"
      justifyContent="inherit"
      {...pickStyles(otherProps)}
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
          >
            {label}
          </FieldLabel>
          {labelAction}
        </Box>
      ) : null}
      {children}
      {!!validations ? (
        <FieldValidations centered={centered} validations={validations} />
      ) : hint ? (
        <FieldHint hint={hint} icon={hintIcon ? hintIcon : undefined} />
      ) : null}
    </Box>
  );
}
