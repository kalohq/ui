import styled from 'react-emotion';

export const H1 = styled('h1')`
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.theme.colors.navy700};
  margin: 8px 0 16px;
  padding: 0;
`;

export const H2 = styled('h2')`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.navy700};
`;
