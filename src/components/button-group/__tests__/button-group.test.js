/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';

import ButtonGroup from 'components/button-group';
import Button from 'components/button';

expect.addSnapshotSerializer(serializer(sheet));

describe('ButtonGroup', () => {
  const defaultProps = {};
  const create = (props = {spacing: true}) =>
    renderer
      .create(
        // $FlowFixMe
        <ButtonGroup {...defaultProps} {...props}>
          <Button>Button One</Button>
          <Button>Button Two</Button>
        </ButtonGroup>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });
});
