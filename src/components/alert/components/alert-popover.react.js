import * as React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import {Box} from '../../layout';

const AlertPopover = props => {
  const {children, topOffset = 0, zIndex = 999} = props;
  return (
    <CSSTransitionGroup
      transitionName="t-slide-from-right"
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
      component={Box}
      position="fixed"
      right={32}
      top={topOffset + 16}
      maxWidth={400}
      alignItems="flex-end"
      zIndex={zIndex}
    >
      {React.Children.map(children, child =>
        child ? (
          <Box marginBottom={8}>
            {React.cloneElement(child, {justifyContent: 'left'})}
          </Box>
        ) : null
      )}
    </CSSTransitionGroup>
  );
};

AlertPopover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node).isRequired,
  ]),
  topOffset: PropTypes.number,
  zIndex: PropTypes.number,
};

export default AlertPopover;
