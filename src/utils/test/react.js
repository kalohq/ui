import * as React from 'react';

/** Provide a uniform way of easily creating component fixtures for testing */
export const testComponent = (Component, defaultProps = () => ({})) => {
  return (otherProps, hoc) => {
    // our final props for the component merged from default
    // and per-test
    const props = {
      ...defaultProps(),
      ...otherProps,
    };

    // our final enhanced component
    const FinalComponent = hoc ? hoc(Component) : Component;

    // our element to render given props and component
    const element = React.createElement(FinalComponent, props);

    // shallow render our component, diving until we reach the
    // original component. useful for testing hocs!
    const render = doRender => {
      return doRender(element);
    };

    return {
      props, // final props obj used for testing
      element, // react Element ready for rendering
      render, // render and provide wrapper around target component
    };
  };
};

/** An target to search for when mounting MockComponent */
export const TargetComponent = () => null;

/** A simple mock component which will provide access to all props passed */
export const MockComponent = props => <TargetComponent {...props} />;
