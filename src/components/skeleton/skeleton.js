import React from 'react';
import styled, {keyframes} from 'react-emotion';

import {Box} from '../layout';

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

const SkeletonSheen = keyframes`
  from {
    transform:translateX(-100%);
  }
	to {
    transform:translateX(100%);
  }
`;

/** Skeleton representation of any arbitrary rectangular or circular shape */
export const SkeletonShape = styled(Box)`
  border-radius: ${props => (props.shape === 'circle' ? '50%' : 0)};
  background-color: ${props => props.theme.colors.grey300};
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    top: 0;
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: ${SkeletonSheen} 1s infinite 2s;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    );
  }
`;

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
export const SkeletonPaper = styled(Box)`
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.grey300};
  border-radius: 3px;
  padding: 16px;
`;

/** Skeleton representation of an avatar */
export function SkeletonCard({children}) {
  return (
    <SkeletonPaper paddingTop={75} paddingBottom={150}>
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
    </SkeletonPaper>
  );
}

/** Skeleton representation of an avatar */
export function SkeletonListItem({children}) {
  return (
    <SkeletonPaper padding={25}>
      <SpacerBox>
        {children ? (
          children
        ) : (
          [<SkeletonText size={14} key={0} />, <SkeletonText key={1} />]
        )}
      </SpacerBox>
    </SkeletonPaper>
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
export const SkeletonPageHeader = styled(Box)`
  background-color: #fff;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
`;

/** Skeleton page header heading */
export const SkeletonPageHeaderHeading = styled(Box)`
  margin: 0 auto;
  width: ${props => (props.width ? props.width : 1180)}px;
  height: 80px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

/** Skeleton page header heading */
export const StyledSkeletonPageHeaderToolbar = styled(Box)`
  border-top: 1px solid var(--grey300);
`;

export function SkeletonPageHeaderToolbar({width = 1180, children}) {
  return (
    <StyledSkeletonPageHeaderToolbar>
      <Box margin={[0, 'auto']} width={width}>
        <SpacerBox height={46}>{children}</SpacerBox>
      </Box>
    </StyledSkeletonPageHeaderToolbar>
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
