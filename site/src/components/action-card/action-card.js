import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

const StyledActionCard = styled.div`
  display: block;
  background-color: ${props => props.theme.colors.grey200};
  border: 1px solid ${props => props.theme.colors.grey400};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 16px;

  &:hover {
    box-shadow: 0 3px 6px rgba(140, 140, 140, 0.08);
    border-color: ${props => props.theme.colors.grey400};
  }

  a {
    text-decoration: none !important;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy900};
    margin: 0;
    padding: 0;
    line-height: 1.2em;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.navy900};
    padding: 0;
    margin: 0;
  }
`;

const ActionCard = props => {
  const Component = props.externalLink ? 'a' : Link;
  return (
    <StyledActionCard component={props.externalLink ? Link : 'a'}>
      <Component
        to={props.externalLink ? null : props.link}
        href={props.externalLink ? props.link : null}
        download={props.download}
      >
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </Component>
    </StyledActionCard>
  );
};

export default ActionCard;
