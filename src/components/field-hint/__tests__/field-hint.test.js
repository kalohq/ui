/* @flow */
/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import FieldHint from '../field-hint';
import Icon from '../../icon';

describe('FieldHint', () => {
  const create = props => <FieldHint {...props} />;

  test('should render shallow component ok', () => {
    const element = renderer.create(<FieldHint />).toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render with a custom icon', () => {
    const element = create({
      icon: 'archive',
    });

    const result = shallow(element);
    expect(result.find(Icon).length).toBe(1);
  });
});
