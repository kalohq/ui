/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {pickStyles} from '../../utils/style';

import {UIBase} from '../layout';
import FieldLabel from '../field-label';
import Text from '../text';

import styles from './fieldset.module.css';

export function FieldsetHeader(props: {
  legend: string,
  description?: string,
  meta?: string,
}) {
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
}

type TProps = {
  /** Fieldset children to display within the fieldset content area */
  children?: React.Node,
  /** Show fieldset as slightly inset into the form? Good for separation between fiedsets. */
  inset?: boolean,
  /** A heading for your legend */
  legend?: string,
  /** Provide further description to the user about this section (fieldset) */
  description?: string,
  /** Meta text to render next to fieldset legend text */
  legendMeta?: string,
  /** onClick passthrough */
  onClick?: Function,
  /** Will be set on the root element */
  name?: string,
  /** Class name to style your fieldset */
  className?: string | Object,
  /** Adds a bottom border */
  bordered?: boolean,
};

export default function Fieldset(props: TProps) {
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
}
