/* @flow */
/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from '../../theme';
import Input from '../../input';
import Fieldset, {FieldsetHeader} from '../fieldset';
import Field from '../../field';

const defaultProps = {
  inset: false,
};

describe('Input', () => {
  const create = props =>
    shallow(
      <Fieldset {...defaultProps} {...props}>
        <Field label="Your name" required={true}>
          <Input placeholder="Alex" />
        </Field>
      </Fieldset>
    );

  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Fieldset>
            <Field label="Your name" required={true}>
              <Input placeholder="Alex" />
            </Field>
          </Fieldset>
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render a FieldsetHeader if a legend is passed', () => {
    const element = create({
      legend: 'Your name',
    });
    expect(element.find(FieldsetHeader).length).toBe(1);
  });
});
