/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import {Grid, Row, Column} from 'components/grid';

describe('components/grid', () => {
  const create = (props = {}) =>
    renderer
      .create(
        <Grid {...props}>
          <Row>
            <Column columns={2} />
            <Column columns={10} />
          </Row>
        </Grid>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });
});
