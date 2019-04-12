/* eslint-env jest */
import * as React from 'react';

import {shallow, mount} from 'enzyme';

import Avatar from 'components/avatar';
import AvatarGroup from '../avatar-group.react';

import styles from '../avatar-group.module.css';

describe('AvatarGroup', () => {
  test('should render 4 avatars', () => {
    const element = (
      <AvatarGroup>
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
      </AvatarGroup>
    );

    const result = shallow(element);
    expect(result.find(Avatar).length).toBe(4);
  });

  test('should display a chip if more than 5 child avatars are passed in', () => {
    const element = (
      <AvatarGroup>
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
        <Avatar size="medium" initials="TP" />
      </AvatarGroup>
    );

    const result = mount(element);
    expect(result.find(Avatar).length).toBe(5);

    const chip = result.find(`.${styles['ui-avatar-group__chip']}`);
    expect(chip.length).toBe(1);
    expect(chip.text()).toBe('2');
  });
});
