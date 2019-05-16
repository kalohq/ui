/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import ButtonGroup from 'components/button-group';
import Button from 'components/button';

describe('ButtonGroup', () => {
  const defaultProps = {};
  const create = (props = {spacing: true}) =>
    renderer
      .create(
        <ButtonGroup {...defaultProps} {...props}>
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });
});
