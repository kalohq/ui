/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import {Grid, Row, Column} from 'components/grid';

expect.addSnapshotSerializer(serializer(sheet));

describe('components/grid', () => {
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Grid {...props}>
            <Row>
              <Column columns={2} />
              <Column columns={10} />
            </Row>
          </Grid>
        </ThemeProvider>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });
});
