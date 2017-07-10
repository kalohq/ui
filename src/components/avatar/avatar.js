/* @flow */
import React from 'react';
import cx from 'classnames';
import {Flex} from '../layout';
import Icon from '../icon';
import CustomIcon from '../custom-icon';
import {pickStyles} from 'utils/style';

import type {AVATAR_SIZE} from './constants';
import {AVATAR_COLORS, DEFAULT_SIZE} from './constants';

import styles from './avatar.css';

type avatarProps = {
  confirmed?: boolean,
  record: string,
  src: string,
  style?: Object,
  size?: AVATAR_SIZE,
  editable?: boolean,
  subRecord?: string,
  subSrc?: string,
  badge?: string,
  badgeTitle?: string,
};

/** Returns an avatar color based on the record input */
function getColor(name) {
  if (name) {
    let sum = 0;
    for (let i = 0, l = name.length; i < l; i++) {
      sum += name.charCodeAt(i);
    }
    const id = sum % AVATAR_COLORS.size;
    return AVATAR_COLORS.get(String(id));
  }
  return AVATAR_COLORS.get(String(1));
}

/** Returns two initials based on a name
  * - Pulls the first character from the first and last words
  */
function getInitials(name) {
  if (name) {
    let initials = name.match(/\b\w/g) || [];
    initials = (initials.shift() || '') + (initials.pop() || '');
    return initials;
  }
  return null;
}

export function AvatarImage(props: {src: ?string}) {
  const {src} = props;

  return (
    <span
      style={{backgroundImage: `url(${String(src)})`}}
      className={styles.avatar}
    />
  );
}

export function AvatarBadge(props: {
  icon: ?string,
  title: ?string,
  size?: 24,
  className?: string,
}) {
  const {icon, size, title, className} = props;

  const Component = icon === 'listed' ? CustomIcon : Icon;

  return (
    <div className={cx({[styles.badge]: true}, className)}>
      <Component size={size} title={title} color="dark-grey">
        {icon}
      </Component>
    </div>
  );
}

export default function Avatar(props: avatarProps) {
  const {
    size = DEFAULT_SIZE.value,
    editable,
    record,
    subRecord,
    subSrc,
    style,
    src,
    badge,
    badgeTitle,
    confirmed,
    ...otherProps
  } = props;

  const avatarColor = getColor(record);

  return (
    <Flex
      component="figure"
      className={cx({
        [styles.root]: true,
        [styles[size]]: true,
        [styles.editable]: editable,
        [styles[avatarColor]]: true,
      })}
      justifyContent="center"
      alignItems="center"
      style={{...style}}
      data-initials={getInitials(record)}
      {...pickStyles(otherProps)}
    >
      {src ? <AvatarImage src={src} /> : null}

      {editable
        ? <AvatarBadge
            title="Edit avatar"
            icon="edit"
            size={size === 'small' || size === 'medium' ? 24 : 30}
            className={styles.addLogoButton}
          />
        : null}

      {badge || confirmed
        ? <AvatarBadge
            title={
              confirmed
                ? 'This freelancer has claimed their profile and listed with your team'
                : badgeTitle
            }
            icon={confirmed ? 'listed' : badge}
            size={size === 'small' || size === 'medium' ? 24 : 30}
            className={styles.listed}
          />
        : null}

      {subRecord
        ? <Flex
            alignItems="center"
            justifyContent="center"
            className={styles.badge}
          >
            <Avatar
              size={size === 'small' || size === 'medium' ? 'small' : 'medium'}
              record={subRecord}
              src={subSrc ? subSrc : ''}
            />
          </Flex>
        : null}
    </Flex>
  );
}
