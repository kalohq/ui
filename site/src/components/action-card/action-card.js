import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

const StyledActionCard = styled(Link)`
  display: block;
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.grey300};
  border-radius: ${props => props.theme.layout.borderRadius};
  margin-bottom: 16px;
  padding: 16px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 3px 6px rgba(140, 140, 140, 0.08);
    border-color: ${props => props.theme.colors.grey400};
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy700};
    margin: 0;
    padding: 0;
    line-height: 1.2em;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.navy500};
    padding: 0;
    margin: 0;
  }
`;

const ActionCard = props => (
  <StyledActionCard to={props.link}>
    <h3>{props.title}</h3>
    <span>{props.description}</span>
  </StyledActionCard>
);

export default ActionCard;
