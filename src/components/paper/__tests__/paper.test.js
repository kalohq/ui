/* @flow */
/* eslint-env mocha */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import Paper from 'components/paper';

describe('components/paper', () => {
  describe('Paper', () => {
    const create = testComponent(Paper, () => ({
      // insert your default props here ...
    }));

    it('should render OK', () => {
      const {element} = create({
        // insert test specific props here ...
        children: 'Child',
      });
      const result = shallow(element);
      expect(result).toExist('should render OK');
      expect(result.prop('children')).toBe('Child');
    });
  });
});
