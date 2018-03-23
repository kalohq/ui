/* @flow */
/* eslint-env jest */
import React from 'react';
import {textMatch} from 'utils/test/enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import FieldLabel from '../field-label';
import Text from '../../text';
import Icon from '../../icon';
import theme from '../../theme';

describe('FieldLabel', () => {
  const defaultProps = {
    htmlFor: 'user-email',
    children: 'Your email',
  };
  const create = props => <FieldLabel {...defaultProps} {...props} />;

  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <FieldLabel {...defaultProps} />
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render with a required asterisk', () => {
    const element = create({
      required: true,
    });
    const result = shallow(element);
    const label = result.find(Text);
    expect(textMatch(label, 'Your email *')).toBe(true);
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
