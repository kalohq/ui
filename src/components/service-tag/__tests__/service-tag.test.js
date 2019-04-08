/* eslint-env jest */
import * as React from 'react';
import {mount} from '../../../utils/test/enzyme';

import ServiceTag from '../service-tag';

describe('ServiceTag', () => {
  const create = props => <ServiceTag {...props}>{props.children}</ServiceTag>;

  it('should render a service tag', () => {
    const element = create({
      children: 'Food Photography',
    });

    const result = mount(element);
    expect(result.exists()).toBe(true);
  });

  it('should display a remove button when a onRemove function is passed', () => {
    const element = create({
      children: 'Food Photography',
      onRemove: () => {},
    });

    const result = mount(element);
    expect(result.render().hasClass('ui-service-tag--removable')).toBe(true);
    expect(result.find('.ui-service-tag__remove').length).toBe(1);
  });
});
