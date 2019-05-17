/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import {shallow, mount} from 'enzyme';

import Heading from '../heading.react';

describe('Heading', () => {
  const create = props => <Heading {...props}>A Heading Component</Heading>;

  it('should match snapshot', () => {
    const element = renderer
      .create(<Heading size="medium">A medium sized header</Heading>)
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  it('should allow alignment to be set', () => {
    const element = create({
      align: 'right',
    });

    const result = shallow(element);
    expect(result.hasClass('heading--align-right')).toBe(true);
  });

  it('should allow a color from the palette to be set', () => {
    const element = create({
      color: 'blue500',
    });

    const result = shallow(element);
    expect(result.hasClass('color-blue500')).toBe(true);
  });

  it('should allow the DOM element to be changed', () => {
    const element = create({
      component: 'H1',
    });

    const result = mount(element);
    expect(result.html()).toContain('<h1');
  });
});
