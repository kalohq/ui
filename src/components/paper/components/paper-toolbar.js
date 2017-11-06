/* @flow */
import * as React from 'react';

import {Box} from '../../layout';

import styles from './paper-toolbar.css';

/**
 * @summary A basic toolbar container to display at the top of paper
 */

export function PaperToolbar(props) {
  const {children} = props;

  return (
    <Box className={styles.root} padding={[0, 25]}>
      {children}
    </Box>
  );
}
