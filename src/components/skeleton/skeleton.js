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
function SpacerBox({
  spacing = 25,
  vertical = false,
  center = true,
  childFlex,
  children,
  ...styleProps
}) {
  const alignItems = center ? 'center' : 'stretch';
  const style = vertical
    ? {alignItems, marginTop: -spacing}
    : {flexDirection: 'row', alignItems, marginLeft: -spacing};

  return (
    <Box {...style} {...styleProps}>
      {React.Children.map(children, child => (
        <Box
          marginTop={vertical ? spacing : 0}
          marginLeft={!vertical ? spacing : 0}
          flex={childFlex}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
}

/** Skeleton representation of any arbitrary rectangular or circular shape */
export function SkeletonShape({shape = 'rect', ...styleProps}) {
  return (
    <Box
      className={{
        [styles.circle]: shape === 'circle',
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
export function SkeletonText({size = 7, heading = false}) {
  const width = size * TEXT_SIZE_MULTIPLIER;
  const height = heading ? TEXT_HEIGHT * 2 : TEXT_HEIGHT;
  return <SkeletonShape height={height} width={width} />;
}

/** Skeleton representation of a button */
export function SkeletonButton({size = 7, square}) {
  const width = square ? BUTTON_HEIGHT : size * TEXT_SIZE_MULTIPLIER;
  return <SkeletonShape height={BUTTON_HEIGHT} width={width} />;
}

/** Skeleton representation of an avatar */
export function SkeletonAvatar({size = 4}) {
  const width = size * AVATAR_SIZE_MULTIPLIER;
  return <SkeletonShape shape="circle" height={width} width={width} />;
}

/** Skeleton representation of paper container */
export function SkeletonPaper({children, style}) {
  return (
    <Box className={styles.paper} padding={15} css={style}>
      {children}
    </Box>
  );
}

/** Skeleton representation of an avatar */
export function SkeletonCard({children}) {
  return (
    <Box
      className={{
        [styles.paper]: true,
      }}
      paddingTop={75}
      paddingBottom={150}
    >
      <SpacerBox vertical={true}>
        {children ? (
          children
        ) : (
          [
            <SkeletonAvatar key="avatar" />,
            <SkeletonText key="text" />,
            <SkeletonText key="text-2" size={14} />,
          ]
        )}
      </SpacerBox>
    </Box>
  );
}

/** Skeleton representation of an avatar */
export function SkeletonListItem({children}) {
  return (
    <Box
      className={{
        [styles.paper]: true,
      }}
      padding={25}
    >
      <SpacerBox>
        {children ? (
          children
        ) : (
          [<SkeletonText size={14} key={0} />, <SkeletonText key={1} />]
        )}
      </SpacerBox>
    </Box>
  );
}

/** Single row horizontal grid skeleton component */
export function SkeletonGrid({children, center}) {
  return (
    <SpacerBox childFlex={1} center={center}>
      {children}
    </SpacerBox>
  );
}

/** Vertical list layout skeleton component */
export function SkeletonList({children, center}) {
  return (
    <SpacerBox
      vertical={true}
      spacing={10}
      alignItems="stretch"
      center={center}
    >
      {children}
    </SpacerBox>
  );
}

/** Skeleton page */
export function SkeletonPage({children, width = 1180}) {
  return (
    <Box>
      <Box margin={[50, 'auto']} width={width}>
        {children}
      </Box>
    </Box>
  );
}

/** Skeleton page header */
export function SkeletonPageHeader({children}) {
  return (
    <Box
      className={{
        [styles.header]: true,
      }}
    >
      {children}
    </Box>
  );
}

/** Skeleton page header heading */
export function SkeletonPageHeaderHeading({width = 1180, children}) {
  return (
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
  );
}

/** Skeleton page header heading */
export function SkeletonPageHeaderToolbar({width = 1180, children}) {
  return (
    <Box
      className={{
        [styles.toolbar]: true,
      }}
    >
      <Box margin={[0, 'auto']} width={width}>
        <SpacerBox height={46}>{children}</SpacerBox>
      </Box>
    </Box>
  );
}

/** Skeleton page header heading */
export function SkeletonPageHeaderTabs({width = 1180, children}) {
  return (
    <Box margin={[0, 'auto']} width={width}>
      <SpacerBox height={46}>{children}</SpacerBox>
    </Box>
  );
}

/** Generic content */
export function SkeletonContent({children}) {
  return <Box padding={15}>{children}</Box>;
}
