/* @flow */
import React from 'react';
import {isString} from 'lodash';
import {pickStyles} from '../../utils/style';

import Text from '../text';
import Icon from '../icon';
import {Inline} from '../layout';

export type Props = {
  htmlFor?: string,
  children?: React$Node,
  required?: boolean,
  locked?: boolean,
  icon?: React$Node | string,
  title?: string,
  width?: number,
};

export default function FieldLabel(props: Props) {
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
    <Text
      component="label"
      weight="semi-bold"
      size="small"
      htmlFor={htmlFor}
      title={title}
      multiline={true}
      width={width ? width : null}
      marginBottom={width ? null : 4}
      {...pickStyles(otherProps)}
    >
      {children}
      {required ? (
        <Inline paddingLeft={5} marginTop={-1}>
          *
        </Inline>
      ) : null}
      {locked ? (
        <Inline paddingLeft={5} marginTop={-1}>
          <Icon size={12}>lock</Icon>
        </Inline>
      ) : null}
      {icon ? (
        <Inline paddingLeft={5} marginTop={-1} verticalAlign="text-bottom">
          {isString(icon) ? (
            <Icon size={12} verticalAlign="middle">
              {icon}
            </Icon>
          ) : (
            icon
          )}
        </Inline>
      ) : null}
    </Text>
  );
}
