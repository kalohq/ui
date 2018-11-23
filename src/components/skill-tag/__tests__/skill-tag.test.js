/* eslint-env jest */
import * as React from 'react';
import {mount} from '../../../utils/test/enzyme';

import SkillTag from '../skill-tag';

describe('SkillTag', () => {
  const create = props => <SkillTag {...props}>{props.children}</SkillTag>;

  it('should render a skill tag', () => {
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
    expect(result.render().hasClass('ui-skill-tag--removable')).toBe(true);
    expect(result.find('.ui-skill-tag__remove').length).toBe(1);
  });
});
