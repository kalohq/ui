/* eslint-env jest */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import Form from '../';

describe('Form', () => {
  const create = testComponent(Form, () => ({
    actions: [],
  }));

  test('should render OK', () => {
    const {element} = create();
    const result = shallow(element);
    expect(result.exists()).toEqual(true);
  });
});
