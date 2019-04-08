/* eslint-env jest */
import * as React from 'react';
import {mount} from 'utils/test/enzyme';

import Icon from '../icon.react';

describe('Icon', () => {
  const create = props => <Icon {...props}>{props.children}</Icon>;

  it('should render an icon', () => {
    const element = create({
      children: 'add',
    });

    const result = mount(element);
    expect(result.exists()).toBe(true);
  });

  it('should allow a color from the palette to be set', () => {
    const element = create({
      color: 'blue500',
    });

    const result = mount(element);
    expect(result.render().hasClass('fill-blue500')).toBe(true);
  });

  it('should allow the size to be changed', () => {
    const element = create({
      size: 24,
    });

    const result = mount(element);
    expect(result.render().hasClass('ui-icon--size-24')).toBe(true);
    expect(result.find('svg').prop('width')).toEqual(24);
    expect(result.find('svg').prop('height')).toEqual(24);
  });

  it('should set an interactive class if an onClick event is passed through', () => {
    const element = create({
      onClick: () => {},
    });

    const result = mount(element);
    expect(result.render().hasClass('ui-icon--interactive')).toBe(true);
  });
});
