/* @flow */
/* eslint-env mocha */

import {shallow} from 'enzyme';
import expect from 'expect';

import StepMarks from 'components/step-marks';

import {testComponent} from 'utils/test/react';

describe('components/step-marks', () => {
  describe('StepMarks', () => {
    const create = testComponent(StepMarks, () => ({
      activeStep: 1,
      numberOfSteps: 3,
    }));

    it('should render children & the components name', () => {
      const {element} = create({});
      const result = shallow(element);
      expect(result).toExist('should render OK');
    });

    it('should render 3 step marks when numberOfSteps equals 3', () => {
      const {element} = create({});
      const result = shallow(element);

      expect(result.find('span').length).toBe(3);
    });
  });
});
