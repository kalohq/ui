import React from 'react';
import styled, {injectGlobal} from 'styled-components';

import GlobalNavigation from 'components/global-navigation';

injectGlobal`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  } 
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default function Page({children, ...props}) {
  return (
    <Container>
      <GlobalNavigation />
      {children}
    </Container>
  );
}
