/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {UIBase} from '../../layout';

import styles from './paper-toolbar.css';

type TProps = {
  children?: React.Node,
  className?: string | Object,
};

export function PaperToolbar(props: TProps) {
  const {children, className} = props;

  const _classNames = cx(
    {
      [styles['ui-paper-toolbar']]: true,
    },
    className
  );

  return <UIBase className={_classNames}>{children}</UIBase>;
}
