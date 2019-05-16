import * as React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {pickStyles} from '../../utils/style';

import {UIBase} from '../layout';
import FieldLabel from '../field-label';
import Text from '../text';

import styles from './fieldset.css';

export const FieldsetHeader = props => {
  const {legend, description, meta} = props;

  return (
    <UIBase marginTop={20}>
      {legend && (
        <FieldLabel>
          {legend}
          {meta && (
            <Text
              size="extra-small"
              color="grey500"
              marginLeft={10}
              weight="normal"
              resetTransform={true}
              display="inline"
            >
              {meta}
            </Text>
          )}
        </FieldLabel>
      )}
      {description && (
        <Text color="navy600" multiline={true}>
          {description}
        </Text>
      )}
    </UIBase>
  );
};

FieldsetHeader.propTypes = {
  legend: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.string,
};

const Fieldset = props => {
  const {
    children,
    inset = false,
    legend,
    description,
    onClick,
    legendMeta,
    name,
    className,
    bordered = true,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-fieldset']]: true,
      [styles['ui-fieldset--no-border']]: !bordered,
      [styles['ui-fieldset--inset']]: inset,
      [styles['ui-fieldset--interactive']]: !!onClick,
    },
    className
  );

  return (
    <UIBase
      className={_classNames}
      component="fieldset"
      onClick={onClick}
      padding={[20, 50, 40, 50]} // top -20 accounts forr vertical spacing
      name={name}
      {...pickStyles(otherProps)}
    >
      {legend && (
        <FieldsetHeader
          meta={legendMeta}
          legend={legend}
          description={description}
        />
      )}
      {children}
    </UIBase>
  );
};

Fieldset.propTypes = {
  /** Fieldset children to display within the fieldset content area */
  children: PropTypes.node,
  /** Show fieldset as slightly inset into the form? Good for separation between fiedsets. */
  inset: PropTypes.bool,
  /** A heading for your legend */
  legend: PropTypes.string,
  /** Provide further description to the user about this section (fieldset) */
  description: PropTypes.string,
  /** Meta text to render next to fieldset legend text */
  legendMeta: PropTypes.string,
  /** onClick passthrough */
  onClick: PropTypes.func,
  /** Will be set on the root element */
  name: PropTypes.string,
  /** Class name to style your fieldset */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
  ]),
  /** Adds a bottom border */
  bordered: PropTypes.bool,
};

export default Fieldset;
