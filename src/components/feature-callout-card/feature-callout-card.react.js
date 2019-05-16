import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './feature-callout-card.css';

const FeatureCalloutCard = props => {
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
};

FeatureCalloutCard.propTypes = {
  /** An icon to be displayed. Will default to the megaphone icon */
  icon: PropTypes.string,
  /** Main title */
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.object,
};

export default FeatureCalloutCard;
