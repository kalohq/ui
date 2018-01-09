import styled from 'react-emotion';

const MarkdownContent = styled.article`
  p {
    font-size: 16px;
    line-height: 1.6em;
    color: #546789;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy700};
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy700};
  }
`;

export default MarkdownContent;
