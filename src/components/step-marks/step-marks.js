import React from 'react';
import PropTypes from 'prop-types';
import {range} from 'lodash';
import cx from 'classnames';
import {InlineFlex} from 'components/layout';
import {pickStyles} from 'utils/style';

import styles from './step-marks.css';


/**
 * Renders the first page in the onboarding wizard
 *
 */
const StepMarks = (props) => {

  const {
    activeStep,
    numberOfSteps,
    className,
    onClick,
    interactive,
  } = props;

  return (
    <InlineFlex
      className={cx({
        [styles.root]: true,
      }, className)}
      {...pickStyles(props)}
    >
      {range(numberOfSteps).map(index => (
        <span
          key={index}
          onClick={() => onClick(index)}
          className={cx({
            [styles.circle]: true,
            [styles.hollow]: activeStep !== (index + 1),
            [styles.filled]: activeStep === (index + 1),
            [styles.interactive]: interactive,
          })}
        />
      ))}
    </InlineFlex>
  );
};

StepMarks.propTypes = {
  activeStep: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.number.isRequired,
};

export default StepMarks;
