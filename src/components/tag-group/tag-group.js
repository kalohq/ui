/* @flow */
import * as React from 'react';

import {UIBase} from '../layout';

type TProps = {
  children: Iterable<React.Element<*>>,
};

export default function TagGroup(props: TProps) {
  const {children, ...otherProps} = props;

  return (
    <UIBase {...otherProps}>
      {React.Children.map(
        children,
        child =>
          child && // $FlowFixMe
          React.cloneElement(child, {
            marginLeft: 8,
          })
      )}
    </UIBase>
  );
}
