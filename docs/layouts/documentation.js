import React from 'react';
import styled from 'styled-components';

import Page from 'layouts/page';
import Aside from 'components/aside';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Main = styled.main`
  padding: 80px 60px;
  max-width: 920px;
`;

export default function Documentation({children, data}) {
  return (
    <Page>
      <Container>
        <Aside data={data} />
        <Main>{children}</Main>
      </Container>
    </Page>
  );
}
