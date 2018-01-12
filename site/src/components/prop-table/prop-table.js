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
    padding: 2px 8px;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.navy600};

    pre {
      font-weight: 400;
    }
  }

  tr th:nth-of-type(1) {
    width: 120px;
  }

  tr th:nth-of-type(2) {
    width: 120px;
  }

  tr td:first-of-type {
    text-align: right;
    color: ${props => props.theme.colors.pink500};
  }

  tr td:nth-of-type(2) {
    color: ${props => props.theme.colors.navy500};
  }
`;

export default function PropTable({data}) {
  return (
    <StyledTable>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      {data.map(prop => (
        <tr key={prop.name}>
          <td>
            <pre>{prop.name}</pre>
          </td>
          {prop.flowType ? (
            <td>{prop.flowType.name}</td>
          ) : (
            <td>{prop.type.name}</td>
          )}
          <td>{prop.docblock}</td>
        </tr>
      ))}
    </StyledTable>
  );
}
