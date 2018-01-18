/* @flow */
import React from 'react';
import {pickStyles} from '../../utils/style';
import {isString} from 'lodash';

import Text from '../text';
import Icon from '../icon';
import {Inline} from '../layout';

type TProps = {
  hint?: string,
  icon?: React$Node | string,
};

export default function FieldHint(props: TProps) {
  const {hint, icon, ...otherProps} = props;

  return (
    <Inline {...pickStyles(otherProps)}>
      <Text size="extra-small" color="navy600" multiline={true}>
        {icon ? (
          <Inline>
            {isString(icon) ? (
              <Icon
                size={12}
                top={2}
                marginRight={5}
                position="relative"
                verticalAlign="baseline"
              >
                {icon}
              </Icon>
            ) : (
              icon
            )}
          </Inline>
        ) : null}
        {hint}
      </Text>
    </Inline>
  );
}
