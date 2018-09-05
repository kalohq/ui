/* @flow */
import React from 'react';
import {pickStyles} from '../../utils/style';
import {isString} from 'lodash';

import Icon from '../icon';
import {UIBase} from '../layout';

import coreStyles from './field-hint.core.css';

type TProps = {
  hint?: string,
  icon?: React$Node | string,
};

export default function FieldHint(props: TProps) {
  const {hint, icon, ...otherProps} = props;

  return (
    <UIBase
      component="span"
      className={coreStyles['ui-field-hint']}
      {...pickStyles(otherProps)}
    >
      {isString(icon) ? (
        <Icon
          size={12}
          top={-2}
          marginRight={5}
          position="relative"
          verticalAlign="baseline"
        >
          {String(icon)}
        </Icon>
      ) : (
        icon
      )}
      {hint}
    </UIBase>
  );
}
