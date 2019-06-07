import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {size} from '../../utils/type';

import {Box, UIBase} from '../layout';
import FieldHint from '../field-hint';
import FieldLabel from '../field-label';
import FieldValidations from '../field-validations';

import coreStyles from './field.module.css';

/**
 * Basic form field container component
 */
const Field = props => {
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
    useLegacyLayout = true,
    ...otherProps
  } = props;

  const hintText = permissions.length > 0 ? permissions[0].message : hint;

  const disabled = permissions.length > 0;

  const _classNames = cx(
    {
      [coreStyles['ui-field']]: true,
      [coreStyles['ui-field--inline']]: Boolean(inline),
      [coreStyles['ui-field--legacy']]: Boolean(useLegacyLayout),
    },
    className
  );

  return (
    <UIBase className={_classNames} onClick={onClick} {...otherProps}>
      {label && (
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
      )}
      {!controlChildren
        ? children
        : React.Children.map(children, child =>
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

      {!!size(validations) ? (
        <FieldValidations centered={centered} validations={validations} />
      ) : hintText ? (
        <FieldHint hint={hintText} icon={hintIcon ? hintIcon : undefined} />
      ) : null}
    </UIBase>
  );
};

Field.propTypes = {
  children: PropTypes.node,
  /** A list of validations */
  validations: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Any disabling permissions for this field */
  permissions: PropTypes.array,
  /** A label to be displayed above the input */
  label: PropTypes.node,
  /** A secondary label - This can be a function (for example, to toggle an option) */
  labelAction: PropTypes.node,
  /** Props to pass down to the label component */
  labelProps: PropTypes.shape({}),
  /** Sets the 'for' property to bind a label and input */
  htmlFor: PropTypes.string,
  /** A string to provide additional information to the user */
  hint: PropTypes.string,
  /** An optional icon to be displayed next to the hint */
  hintIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Displays an asterisk next to the label if the field is required */
  required: PropTypes.bool,
  /** Displays a padlock if the field is locked - mainly used for templates */
  locked: PropTypes.bool,
  /** An icon to display next to the label */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
  /** A classname to pass down */
  className: PropTypes.string,
  /** Centers the field and children components */
  centered: PropTypes.bool,
  /** Toggles ability for component to override child props */
  controlChildren: PropTypes.bool,
  /** on blur handler to pass to input children */
  onBlur: PropTypes.func,
  /** Displays the field inline with the label and input floated */
  inline: PropTypes.bool,
  /** Set a width for the field label */
  labelWidth: PropTypes.number,
  useLegacyLayout: PropTypes.bool,
};

export default Field;
