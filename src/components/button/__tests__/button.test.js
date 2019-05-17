/* @flow */
/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import {shallow, mount} from 'enzyme';

import Button from '../button.react';

import reactStyles from '../button.react.css';

describe('Button', () => {
  const defaultProps = {
    variant: 'tertiary',
    size: 'medium',
  };

  const create = props => (
    <Button {...defaultProps} {...props}>
      A Button
    </Button>
  );

  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <Button variant="tertiary" size="medium">
          A tertiary button
        </Button>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render with a success message', () => {
    const element = create({
      message: 'Hello from the success message',
    });

    const result = shallow(element);
    expect(
      result
        .dive()
        .find({className: reactStyles['ui-btn__react-success-message']}).length
    ).toBe(1);
  });

  test('should display with a loadingSpinner', () => {
    const element = create({
      loading: true,
    });

    const result = mount(element);

    expect(result.find('.ui-btn--loading').hostNodes().length).toBe(1);
  });

  test('should call a given onClick event on click', () => {
    const onButtonClick = sinon.spy();

    const element = create({
      onClick: onButtonClick,
    });

    const result = shallow(element);

    result.simulate('click', {
      preventDefault: () => {},
    });

    expect(onButtonClick.calledOnce).toBe(true);
  });

  test('should not allow onClick events to be set if disabled', () => {
    const onButtonClick = sinon.spy();

    const element = create({
      onClick: onButtonClick,
      disabled: true,
    });

    const result = shallow(element);

    result.dive().simulate('click', {
      preventDefault: () => {},
    });

    expect(onButtonClick.notCalled).toBe(true);
  });
});
