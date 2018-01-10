import React from 'react';
import styled, {injectGlobal} from 'react-emotion';

import {ThemeProvider} from 'emotion-theming';

import GlobalNavigation from '../../components/global-navigation';
import theme from '../../components/theme';

const Container = styled('div')`
  width: 100%;
  min-height: 100vh;
`;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 300;
    font-style: normal;
    src: url('./static/fonts/fakt-soft-pro/FaktSoftPro-Blond.woff') format('woff'),
      url('./static/fonts/fakt-soft-pro/FaktSoftPro-Blond.woff2') format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 400;
    font-style: normal;
    src: url('./static/fonts/fakt-soft-pro/FaktSoftPro-Normal.woff') format('woff'),
      url('./static/fonts/fakt-soft-pro/FaktSoftPro-Normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 500;
    font-style: normal;
    src: url('./static/fonts/fakt-soft-pro/FaktSoftPro-Medium.woff') format('woff'),
      url('./static/fonts/fakt-soft-pro/FaktSoftPro-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 600;
    font-style: normal;
    src: url('./static/fonts/fakt-soft-pro/FaktSoftPro-SemiBold.woff') format('woff'),
      url('./static/fonts/fakt-soft-pro/FaktSoftPro-SemiBold.woff2') format('woff2');
  }

  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  } 
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: 'WebFaktSoftPro', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
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
