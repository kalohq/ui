/* @flow */
import React from 'react';
import {pickStyles} from 'utils/style';
import {isString} from 'lodash';

import {Inline} from 'components/layout';
import Text from 'components/text';
import Icon from 'components/icon';

import styles from './field-hint.css';

export function FieldHint(props: {hint: string, icon?: React$Node | string}) {
  const {hint, icon, ...otherProps} = props;

  return (
    <Inline className={styles.root} {...pickStyles(otherProps)}>
      <Text size="extra-small" color="grey" multiline={true}>
        {icon
          ? <Inline>
              {isString(icon)
                ? <Icon
                    size="12"
                    top={2}
                    marginRight={5}
                    position="relative"
                    verticalAlign="baseline"
                  >
                    {icon}
                  </Icon>
                : icon}
            </Inline>
          : null}
        {hint}
      </Text>
    </Inline>
  );
}

export default FieldHint;
