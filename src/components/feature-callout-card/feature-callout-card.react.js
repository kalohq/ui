/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './feature-callout-card.module.css';

type TProps = {
  /** An icon to be displayed. Will default to the megaphone icon */
  icon?: string,
  /** Main title */
  title: string,
  children: string | React.Element<*>,
  className?: Object,
};

export default function FeatureCalloutCard(props: TProps) {
  const {icon = 'megaphone', children, title, className} = props;
  const _classNames = cx(
    {
      [styles['ui-feature-callout-card']]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames}>
      <span className={styles['ui-feature-callout-card__title']}>
        <Icon
          className={styles['ui-feature-callout-card__icon']}
          size={14}
          color="navy900"
        >
          {icon}
        </Icon>
        {title}
      </span>
      <span className={styles['ui-feature-callout-card__content']}>
        {children}
      </span>
    </UIBase>
  );
}
