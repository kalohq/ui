import React from 'react';
import styled, {css} from 'react-emotion';

import {
  UIBase,
  Flex,
  Box,
  Paper,
  Heading,
  Avatar,
  Lozenge,
} from '../../../../src/components';

export const NewLozenge = props => (
  <Lozenge variant="grey" {...props}>
    New
  </Lozenge>
);

export const AvailabilityLozenge = ({type, ...otherProps}) => {
  const TYPE_MAP = {
    AVAILABLE: {
      label: 'Available',
      variant: 'green',
    },
    INVITATION_SENT: {
      label: 'Invitation sent',
      variant: 'orange',
    },
  };

  return (
    <Lozenge variant={TYPE_MAP[type].variant} {...otherProps}>
      {TYPE_MAP[type].label}
    </Lozenge>
  );
};

const StyledEntity = styled.div`
  display: flex;
  align-items: center;
`;

export const Entity = ({name, secondary, avatarSrc}) => (
  <StyledEntity>
    <Avatar size="medium" src={avatarSrc} />
    <Box marginLeft={8}>
      <Heading size="medium">{name}</Heading>
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
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  ${props =>
    props.isSelected &&
    css`
      border-bottom-color: ${props.theme.colors.purple500};
    `};
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

export const Card = styled(Paper)`cursor: pointer;`;
