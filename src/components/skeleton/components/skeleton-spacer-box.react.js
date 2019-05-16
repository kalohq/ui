import * as React from 'react';
import PropTypes from 'prop-types';

import {Box} from '../../layout';

const SpacerBox = props => {
  const {
    spacing = 25,
    vertical,
    center = true,
    childFlex,
    children,
    ...otherProps
  } = props;

  return (
    <Box
      alignItems={center ? 'center' : 'stretch'}
      marginTop={vertical ? -spacing : null}
      flexDirection={vertical ? 'column' : 'row'}
      marginLeft={vertical ? null : -spacing}
      {...otherProps}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          marginTop: vertical ? spacing : 0,
          marginLeft: !vertical ? spacing : 0,
          flex: childFlex,
        })
      )}
    </Box>
  );
};

SpacerBox.propTypes = {
  spacing: PropTypes.number,
  vertical: PropTypes.bool,
  center: PropTypes.bool,
  childFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default SpacerBox;
