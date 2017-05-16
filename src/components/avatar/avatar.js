/* @flow */
import React from 'react';
import cx from 'classnames';
import {Flex} from '../layout';
import Icon from '../icon';
import LoadingSpinner from '../loading-spinner';
import CustomIcon from '../custom-icon';
import {pickStyles} from 'utils/style';

import {
  AVATAR_SIZES,
  AVATAR_SIZE,
  AVATAR_COLORS,
  DEFAULT_SIZE
} from './constants';

import styles from './avatar.css';

type avatarProps = {
  children?: React$Node,
  uploaded?: boolean,
  confirmed?: boolean,
  record: string,
  src: string,
  size: AVATAR_SIZE,
}


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
    initials = ((initials.shift() || '') + (initials.pop() || ''));
    return initials;
  }
  return null;
}

export function AvatarImage(props: {src: ?string}) {
  const {
    src,
  } = props;

  return (
    <span style={{backgroundImage: `url(${String(src)})`}} className={styles.avatar} />
  );
}

export default function Avatar(props: avatarProps) {

  const {
    size = DEFAULT_SIZE,
    editable,
    uploading,
    record,
    subRecord,
    subRecordSrc,
    style,
    confirmed,
    src,
    uploaded,
    ...otherProps
  } = props;

  const avatarColor = getColor(record);

  return (
    <Flex
      component="figure"
      className={cx({
        [styles.root]: true,
        [styles[size]]: true,
        [styles.uploading]: uploading,
        [styles.uploaded]: uploaded,
        [styles.editable]: editable,
        [styles[avatarColor]]: true,
      })}
      justifyContent="center"
      alignItems="center"
      style={{...style}}
      data-initials={getInitials(record)}
      {...pickStyles(otherProps)}
    >
      {src ? (
        <AvatarImage src={src} />
      ) : null}

      {record ? (
        <span className={styles.hiddenName}>{record}</span>
      ) : null}

      {editable && !uploading ? (
        <div className={styles.addLogoButton}>
          <Icon size="20" className={styles.pencilIcon}>edit</Icon>
        </div>
       ) : null}

      {uploading ? (
        <Flex alignItems="center" justifyContent="center" className={styles.loading}>
          <LoadingSpinner size="small" />
        </Flex>
      ) : null}

      {uploaded && !uploading ? (
        <Flex alignItems="center" justifyContent="center" className={styles.loaded}>
          <Icon color="white" size="24">
            done
          </Icon>
        </Flex>
      ) : null}

      {confirmed ? (
        <div className={styles.confirmed} title="Profile confirmed">
          <CustomIcon
            size={size === 'small' || size === 'medium' ? 24 : 30}
            title="This freelancer has claimed their profile and lysted with your team"
          >
            lysted
          </CustomIcon>
        </div>
      ) : null}

      {subRecord ? (
        <Flex alignItems="center" justifyContent="center" className={styles.subRecord}>
          <Avatar
            size={(size === 'small' || size === 'medium') ? 'small' : 'medium'}
            record={subRecord}
            src={subRecordSrc}
            uploaded={uploaded}
          />
        </Flex>
      ) : null}
    </Flex>
  )
}
