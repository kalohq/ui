/* @flow */
import * as React from 'react';
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
function SpacerBox(props: {
  spacing?: number,
  vertical?: boolean,
  center?: boolean,
  childFlex?: string,
  children?: React.Node | string,
}) {
  const {
    spacing = 25,
    vertical,
    center = true,
    childFlex,
    children,
    ...otherProps
  } = props;

  const alignItems = center ? 'center' : 'stretch';
  const style = vertical
    ? {alignItems, marginTop: -spacing}
    : {flexDirection: 'row', alignItems, marginLeft: -spacing};

  return (
    <Box {...style} {...otherProps}>
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
export function SkeletonText(props: {size?: number, heading?: boolean}) {
  const {size = 7, heading, ...otherProps} = props;
  const width = size * TEXT_SIZE_MULTIPLIER;
  const height = heading ? TEXT_HEIGHT * 2 : TEXT_HEIGHT;
  return <SkeletonShape height={height} width={width} {...otherProps} />;
}

/** Skeleton representation of a button */
export function SkeletonButton(props: {size?: number, square?: boolean}) {
  const {size = 7, square, ...otherProps} = props;
  const width = square ? BUTTON_HEIGHT : size * TEXT_SIZE_MULTIPLIER;
  return <SkeletonShape height={BUTTON_HEIGHT} width={width} {...otherProps} />;
}

/** Skeleton representation of an avatar */
export function SkeletonAvatar(props: {size?: number}) {
  const {size = 4, ...otherProps} = props;
  const width = size * AVATAR_SIZE_MULTIPLIER;
  return (
    <SkeletonShape
      shape="circle"
      height={width}
      width={width}
      {...otherProps}
    />
  );
}

/** Skeleton representation of paper container */
export const StyledSkeletonPaper = styled(Box)`
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.grey300};
  border-radius: 3px;
`;

export function SkeletonPaper(props: {children: React.Node}) {
  const {children, ...otherProps} = props;
  return (
    <StyledSkeletonPaper padding={16} {...otherProps}>
      {children}
    </StyledSkeletonPaper>
  );
}

/** Skeleton representation of an avatar */
export function SkeletonCard(props: {children: React.Node}) {
  const {children, ...otherProps} = props;
  return (
    <SkeletonPaper paddingTop={75} paddingBottom={150} {...otherProps}>
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
export function SkeletonListItem(props: {children: React.Node}) {
  const {children, ...otherProps} = props;
  return (
    <SkeletonPaper padding={25} {...otherProps}>
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
export function SkeletonGrid(props: {children: React.Node, center: string}) {
  const {children, center, ...otherProps} = props;
  return (
    <SpacerBox childFlex={1} center={center} {...otherProps}>
      {children}
    </SpacerBox>
  );
}

/** Vertical list layout skeleton component */
export function SkeletonList(props: {children: React.Node, center: string}) {
  const {children, center, ...otherProps} = props;
  return (
    <SpacerBox
      vertical={true}
      spacing={10}
      alignItems="stretch"
      center={center}
      {...otherProps}
    >
      {children}
    </SpacerBox>
  );
}

/** Skeleton page */
export function SkeletonPage(props: {width?: number, children: React.Node}) {
  const {width = 1180, children, ...otherProps} = props;
  return (
    <Box>
      <Box margin={[50, 'auto']} width={width} {...otherProps}>
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
  border-top: 1px solid ${props => props.theme.colors.grey300};
`;

export function SkeletonPageHeaderToolbar(props: {
  width?: number,
  children: React.Node,
}) {
  const {width = 1180, children} = props;
  return (
    <StyledSkeletonPageHeaderToolbar>
      <Box margin={[0, 'auto']} width={width}>
        <SpacerBox height={46}>{children}</SpacerBox>
      </Box>
    </StyledSkeletonPageHeaderToolbar>
  );
}

/** Skeleton page header heading */
export function SkeletonPageHeaderTabs(props: {
  width?: number,
  children: React.Node,
}) {
  const {width = 1180, children, ...otherProps} = props;
  return (
    <Box margin={[0, 'auto']} width={width} {...otherProps}>
      <SpacerBox height={46}>{children}</SpacerBox>
    </Box>
  );
}

/** Generic content */
export function SkeletonContent(props: {children: React.Node}) {
  const {children, ...otherProps} = props;
  return (
    <Box padding={16} {...otherProps}>
      {children}
    </Box>
  );
}
