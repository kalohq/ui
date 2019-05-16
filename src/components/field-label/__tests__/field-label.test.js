/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import FieldLabel from '../field-label.react';
import Icon from '../../icon';

describe('FieldLabel', () => {
  const defaultProps = {
    htmlFor: 'user-email',
    children: 'Your email',
  };
  const create = props => <FieldLabel {...defaultProps} {...props} />;

  test('should render shallow component ok', () => {
    const element = renderer.create(<FieldLabel {...defaultProps} />).toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render with a required asterisk', () => {
    const element = create({
      required: true,
    });
    const result = shallow(element);
    const label = result.render().text();
    expect(label).toBe('Your email *');
  });

  test('should render with a locked icon', () => {
    const element = create({
      locked: true,
    });
    const result = shallow(element);
    expect(result.find(Icon).length).toBe(1);
  });

  test('should render with a custom icon', () => {
    const element = create({
      icon: 'archive',
    });
    const result = shallow(element);
    expect(result.find(Icon).length).toBe(1);
  });
});
