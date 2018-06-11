import styled from 'react-emotion';

const horizontalPadding = '5vw';

export default styled.div`
  width: 100%;
  max-width: calc(780px + 2 * ${horizontalPadding});
  padding: 0 ${horizontalPadding};
  margin: 0 auto;
`;
