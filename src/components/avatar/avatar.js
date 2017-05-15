/* @flow */
import React from 'react';
import cx from 'classnames';
import {Flex} from '../layout';
import Icon from '../icon';
import LoadingSpinner from '../loading-spinner';
import {pickStyles} from 'utils/style';

import styles from './avatar.css';

type avatarProps = {
  children?: React$Node,
  uploaded?: boolean,
  subRecord?: string,
  subRecordSrc?: string,
  record: string,
  src: string,
  size: 'small' | 'medium' | 'large' | 'x-large' | 'jumbo',
}

const AVATAR_COLOURS = ['green', 'blue', 'purple', 'grey', 'yellow'];

function getColour(name) {
  if (name) {
    let sum = 0;
    for (let i = 0, l = name.length; i < l; i++) {
      sum += name.charCodeAt(i);
    }
    const id = sum % AVATAR_COLOURS.length;
    return AVATAR_COLOURS[id];
  }
  return AVATAR_COLOURS[1];
}

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
    size = 'medium',
    editable,
    uploading,
    subRecord = null,
    subRecordSrc = null,
    record,
    style,
    src,
    uploaded = false,
    ...otherProps
  } = props;

  const avatarColour = getColour(record);

  return (
    <Flex
      component="figure"
      className={cx({
        [styles.root]: true,
        [styles[size]]: true,
        [styles.uploading]: uploading,
        [styles.uploaded]: uploaded,
        [styles.editable]: editable,
        [styles[avatarColour]]: true,
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
