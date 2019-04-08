/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from '../../theme';
import Input from '../../input';
import FieldRow, {DEFAULT_SPACING} from '../field-row.react';
import Field from '../../field';

describe('Input', () => {
  const create = props =>
    shallow(
      <FieldRow {...props}>
        <Field label="Project name">
          <Input placeholder="My first project" />
        </Field>
        <Field label="Task name">
          <Input placeholder="My first task" />
        </Field>
      </FieldRow>
    );

  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <FieldRow>
            <Field label="Project name">
              <Input placeholder="My first project" />
            </Field>
            <Field label="Task name">
              <Input placeholder="My first task" />
            </Field>
          </FieldRow>
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should add default spacing to child components', () => {
    const element = create({
      legend: 'Your name',
    });
    expect(
      element
        .find(Field)
        .at(1)
        .props().paddingLeft
    ).toBe(DEFAULT_SPACING);
  });
});
