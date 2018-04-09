/* @flow */
import * as React from 'react';

import SkeletonShape from './skeleton-shape';
import {TEXT_HEIGHT} from '../skeleton';

/**
 * Text Skeleton
 * TODO: Allow multiline (with appropriate line spacing)
 */

type TProps = {
  width?: string | number,
  heading?: boolean,
};

export default function SkeletonText(props: TProps) {
  const {heading, width = '50%', ...otherProps} = props;
  const height = heading ? TEXT_HEIGHT * 2 : TEXT_HEIGHT;
  return <SkeletonShape height={height} width={width} {...otherProps} />;
}
