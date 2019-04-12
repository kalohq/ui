/* @flow */
import React from 'react';
import {isString} from 'lodash';
import {pickStyles} from '../../utils/style';

import Icon from '../icon';
import {Inline, UIBase} from '../layout';

import coreStyles from './field-label.module.css';

export type TProps = {
  htmlFor?: string,
  children?: React$Node,
  required?: boolean,
  locked?: boolean,
  icon?: React$Node | string,
  title?: string,
  width?: number,
};

export default function FieldLabel(props: TProps) {
  const {
    htmlFor,
    children,
    icon,
    required = false,
    locked = false,
    title,
    width,
    ...otherProps
  } = props;
  return (
    <UIBase
      component="label"
      className={coreStyles['ui-field-label']}
      htmlFor={htmlFor}
      title={title}
      width={width ? width : null}
      marginBottom={width ? null : 4}
      {...pickStyles(otherProps)}
    >
      {children}
      {required && ' *'}
      {locked && (
        <UIBase component="span" paddingLeft={5} top={-2} position="relative">
          <Icon size={12}>lock</Icon>
        </UIBase>
      )}
      {icon ? (
        <Inline paddingLeft={5} marginTop={-1} verticalAlign="text-bottom">
          {isString(icon) ? (
            <Icon size={12} verticalAlign="middle">
              {String(icon)}
            </Icon>
          ) : (
            icon
          )}
        </Inline>
      ) : null}
    </UIBase>
  );
}
