import React from 'react';
import styled, {injectGlobal} from 'react-emotion';

import {ThemeProvider} from 'emotion-theming';

import GlobalNavigation from '../../components/global-navigation';
import theme from '../../components/theme';

const Container = styled('div')`
  width: 100%;
  min-height: 100vh;
`;

injectGlobal`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  } 
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: 'Fakt Soft Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }
`;

export default function Page({children}) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalNavigation />
        {children}
      </Container>
    </ThemeProvider>
  );
}
