/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import SkeletonShape from './skeleton-shape';
import {TEXT_SIZE_MULTIPLIER, TEXT_HEIGHT} from '../skeleton';

/**
 * Text Skeleton
 * TODO: Allow multiline (with appropriate line spacing)
 */

type TProps = {
  size?: number,
  heading?: boolean,
};

function SkeletonText(props: TProps) {
  const {size = 7, heading, ...otherProps} = props;
  const width = size * TEXT_SIZE_MULTIPLIER;
  const height = heading ? TEXT_HEIGHT * 2 : TEXT_HEIGHT;
  return <SkeletonShape height={height} width={width} {...otherProps} />;
}

export default pure(SkeletonText);
