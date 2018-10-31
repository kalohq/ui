import React from 'react';
import styled, {css} from 'react-emotion';

import {UIBase, Flex, Box, Paper, Text} from '../../../../src/components';

export const Lozenge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  padding: 0 8px;
  height: 24px;
`;

export const NewLozenge = styled(Lozenge)`
  border: 1px solid ${props => props.theme.colors.grey300};
  background-color: ${props => props.theme.colors.grey200};
  color: ${props => props.theme.colors.grey600};
`;

export const AvailableLozenge = styled(Lozenge)`
  background-color: ${props => props.theme.colors.green300};
  color: ${props => props.theme.colors.green600};
`;

const StyledEntity = styled.div`
  display: flex;
  align-items: center;
`;

export const Entity = ({name, secondary, avatarSrc}) => (
  <StyledEntity>
    <Avatar size={36} src={avatarSrc} />
    <Box marginLeft={8}>
      <span className="heading--500">{name}</span>
      <span className="text--helper">{secondary}</span>
    </Box>
  </StyledEntity>
);

export const TabNavigation = styled(UIBase)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
`;

export const TabNavigationTab = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.navy700};
  padding: 16px 12px;
  border-bottom: 3px solid transparent;

  ${props =>
    props.isSelected &&
    css`
      border-bottom-color: ${props.theme.colors.purple500};
    `};
`;

export const Tag = styled(UIBase)`
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.theme.colors.grey300};
  padding: 4px 16px;
  font-size: 12px;
  color: ${props => props.theme.colors.navy600};
  justify-content: center;
`;

export const SkillTag = styled(UIBase)`
  display: inline-flex;
  border: 1px solid ${props => props.theme.colors.grey400};
  color: ${props => props.theme.colors.navy600};
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 30px;
  font-size: 12px;
`;

export const TagGroup = ({children, limit, showOverflow}) => {
  const limitedChildren = limit ? children.slice(0, limit) : children;
  return (
    <Flex flexWrap="wrap" alignItems="center">
      {React.Children.map(
        limitedChildren.slice(0, limit),
        child =>
          child &&
          React.cloneElement(child, {
            marginRight: 8,
            marginBottom: 4,
            marginTop: 4,
          })
      )}
      {showOverflow &&
      children.length > limit && (
        <Text size="extra-small" color="navy600">
          +{children.length - limit}
        </Text>
      )}
    </Flex>
  );
};

export const Avatar = styled(UIBase)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.theme.colors.purple400};
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;
`;

export const Hr = styled(UIBase)`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.grey400};
`;

const GlobalSideNavigation = styled.div`
  flex-basis: 64px;
  height: 100vh;
  background-color: ${props => props.theme.colors.navy700};
  position: sticky;
  top: 0;
`;

const PageSideNavigation = styled.div`
  height: 100vh;
  flex-basis: 240px;
  background-color: ${props => props.theme.colors.grey200};
  position: sticky;
  top: 0;
`;

const Main = styled.main`
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const PageLayout = ({children, withPageNavigation = true}) => (
  <Flex>
    <GlobalSideNavigation />
    {withPageNavigation && <PageSideNavigation />}
    <Main>{children}</Main>
  </Flex>
);

export const Card = styled(Paper)`
  cursor: pointer;

  &:hover {
    border: 1px solid ${props => props.theme.colors.grey400};
  }
`;
