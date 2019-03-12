/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './avatar.css';

const FALLBACK_COLORS = ['blue', 'orange', 'green', 'pink', 'navy'];

export const getFallbackColor = (resource: string) => {
  const hash = [...String(resource)].reduce(
    (sum, character) => sum + character.codePointAt(0),
    0
  );

  if (hash) {
    const id = hash % FALLBACK_COLORS.length;
    return FALLBACK_COLORS[id];
  }
  return FALLBACK_COLORS[1];
};

type TProps = {
  /** A URL to the avatar */
  src?: string,
  /** The avatar size */
  size?: 'small' | 'medium' | 'large',
  /** Two initials to be displayed as a fallback if no src is set */
  initials?: string,
  /** A consistent resource (an email or name) to be used as a hash to generate the fallback color */
  resourceHash?: string,
  /** Any classes to pass down */
  className?: string,
};

export default function Avatar(props: TProps) {
  const {
    src,
    size = 'medium',
    className,
    initials,
    resourceHash,
    ...otherProps
  } = props;

  const fallbackColor = getFallbackColor(
    String(resourceHash) || String(initials)
  );

  const _classNames = cx(
    {
      [styles['ui-avatar']]: true,
      [styles[`ui-avatar--${size}`]]: true,
      [styles[`ui-avatar--fallback-${fallbackColor}`]]: true,
    },
    className
  );

  return (
    <UIBase
      component="span"
      data-fallback-initials={String(initials).substr(0, 2)}
      role="img"
      className={_classNames}
      {...otherProps}
    >
      <span
        className={styles['ui-avatar__avatar']}
        role="img"
        style={src && {backgroundImage: `url(${src})`}}
      />
    </UIBase>
  );
}
