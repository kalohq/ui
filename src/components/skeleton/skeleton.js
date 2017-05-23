import React from 'react';
import {Box} from '../layout';

import styles from './skeleton.css';

/** Multiplier for textual content "size" */
const TEXT_SIZE_MULTIPLIER = 10;

/** Multiplier for an avatar diameter */
const AVATAR_SIZE_MULTIPLIER = 20;

/** Height of text */
const TEXT_HEIGHT = 12;

/** Height of a button */
const BUTTON_HEIGHT = 36;

/** A box which can space it's children */
function SpacerBox({spacing = 15, vertical = false, childFlex, children, ...styleProps}) {
  const style = vertical
    ? {alignItems: 'center', marginTop: -spacing}
    : {flexDirection: 'row', alignItems: 'center', marginLeft: -spacing};

  return (
    <Box {...style} {...styleProps}>
      {React.Children.map(children, (child) => (
        <Box
          marginTop={vertical ? spacing : 0}
          marginLeft={!vertical ? spacing : 0}
          flex={childFlex}
        >{child}</Box>
      ))}
    </Box>
  );
}

/** Skeleton representation of any arbitrary rectangular or circular shape */
export function SkeletonShape({shape = 'rect', ...styleProps}) {
  return (
    <Box
      className={{
        [styles.circle]: shape === 'circ',
        [styles.shape]: true,
      }}
      {...styleProps}
    />
  );
}

/**
 * Skeleton representation of text content
 * TODO: Allow multiline (with appropriate line spacing)
 */
export function SkeletonText({size = 7}) {
  const width = size * TEXT_SIZE_MULTIPLIER;
  return (
    <SkeletonShape height={TEXT_HEIGHT} width={width} />
  );
}

/** Skeleton representation of a button */
export function SkeletonButton({size = 7, square}) {
  const width = square
    ? BUTTON_HEIGHT
    : size * TEXT_SIZE_MULTIPLIER;
  return (
    <SkeletonShape height={BUTTON_HEIGHT} width={width} />
  );
}

/** Skeleton representation of an avatar */
export function SkeletonAvatar({size = 4}) {
  const width = size * AVATAR_SIZE_MULTIPLIER;
  return (
    <SkeletonShape shape="circ" height={width} width={width} />
  );
}

/** Skeleton representation of an avatar */
export function SkeletonCard() {
  return (
    <Box
      className={{
        [styles.card]: true,
      }}
      paddingTop={75}
      paddingBottom={150}
    >
      <SpacerBox vertical={true}>
        <SkeletonAvatar />
        <SkeletonText />
        <SkeletonText size={14} />
      </SpacerBox>
    </Box>
  );
}

/** Skeleton representation of an avatar */
export function SkeletonListItem() {
  return (
    <Box
      className={{
        [styles.card]: true,
      }}
      padding={25}
    >
      <SpacerBox>
        <SkeletonText size={14} />
        <SkeletonText />
      </SpacerBox>
    </Box>
  );
}

/** Single row horizontal grid skeleton component */
export function SkeletonGrid({children}) {
  return (
    <SpacerBox childFlex={1}>
      {children}
    </SpacerBox>
  );
}

/** Vertical list layout skeleton component */
export function SkeletonList({children}) {
  return (
    <SpacerBox vertical={true} alignItems="stretch">
      {children}
    </SpacerBox>
  );
}

/** Skeleton page */
export function SkeletonPage({children, width = 1280, padding = 50}) {
  return (
    <Box minWidth={width}>
      <Box margin={[50, 'auto']} width={width - padding * 2}>
        {children}
      </Box>
    </Box>
  );
}

/** Skeleton page header */
export function SkeletonPageHeader({children}) {
  return (
    <Box>
      {children}
    </Box>
  );
}

/** Skeleton page header heading */
export function SkeletonPageHeaderHeading({width = 1280, children}) {
  return (
    <Box
      className={{
        [styles.header]: true,
      }}
    >
      <Box
        margin={[0, 'auto']}
        width={width}
        height={80}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        {children}
      </Box>
    </Box>
  );
}

/** Skeleton page header heading */
export function SkeletonPageHeaderToolbar({width = 1280, children}) {
  return (
    <Box
      className={{
        [styles.header]: true,
      }}
    >
      <Box margin={[0, 'auto']} width={width}>
        <SpacerBox height={46}>
          {children}
        </SpacerBox>
      </Box>
    </Box>
  );
}