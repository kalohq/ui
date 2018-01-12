import React from 'react';
import styled from 'react-emotion';

const StyledTable = styled.table`
  width: 100%;
  position: relative;
  border-radius: ${props => props.theme.layout.borderRadius};
  border: ${props => props.theme.colors.navy700};

  th {
    background-color: ${props => props.theme.colors.grey300};
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy700};
  }

  td {
    border-bottom: 1px solid ${props => props.theme.colors.navy300};
    padding: 4px 8px;
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.navy600};
  }
`;

export default function PropTable({data}) {
  console.log(data);
  return (
    <StyledTable>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
      </tr>
      {data.map(prop => (
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.type}</td>
          <td>{prop.required ? 'required' : false}</td>
        </tr>
      ))}
    </StyledTable>
  );
}
