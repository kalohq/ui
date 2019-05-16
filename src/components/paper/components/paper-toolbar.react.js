import * as React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import {UIBase} from '../../layout';

import styles from './paper-toolbar.css';

const PaperToolbar = props => {
  const {children, className} = props;

  const _classNames = cx(
    {
      [styles['ui-paper-toolbar']]: true,
    },
    className
  );

  return <UIBase className={_classNames}>{children}</UIBase>;
};

PaperToolbar.propTypes = {
  children: PropTypes.node,
};
