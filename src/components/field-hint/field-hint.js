/* @flow */
import React from 'react';
import {pickStyles} from 'utils/style';
import {isString} from 'lodash';

import {Inline} from '../layout';
import Text from '../text';
import Icon from '../icon';

import styles from './field-hint.css';

type fieldHintProps = {
  hint: string,
  icon: React$Element<*> | string,
};
export function FieldHint(props: fieldHintProps) {
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
