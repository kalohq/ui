/* @flow */
import React from 'react';
import {Box} from '../../layout';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

type TProps = {
  children: React$Element<*>,
  topOffset?: number,
};

export default function AlertPopover(props: TProps) {
  const {children, topOffset = 0} = props;

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
    >
      {React.Children.map(
        children,
        child =>
          child ? (
            <Box marginBottom={8}>
              {React.cloneElement(child, {justifyContent: 'left'})}
            </Box>
          ) : null
      )}
    </CSSTransitionGroup>
  );
}
