/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import SkeletonShape from './skeleton-shape';
import {TEXT_SIZE_MULTIPLIER, BUTTON_HEIGHT} from '../skeleton';

/**
 * Button Skeleton
 */

type TProps = {
  size?: number,
  square?: boolean,
};

function SkeletonButton(props: TProps) {
  const {size = 7, square, ...otherProps} = props;
  const width = square ? BUTTON_HEIGHT : size * TEXT_SIZE_MULTIPLIER;
  return <SkeletonShape height={BUTTON_HEIGHT} width={width} {...otherProps} />;
}

export default pure(SkeletonButton);
