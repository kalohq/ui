/* @flow */
import React from 'react';

import Radio from '../radio';

class DemoRadio extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.toggleRadio = this.toggleRadio.bind(this);
  }

  toggleRadio() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <Radio
        {...this.props}
        onClick={this.toggleRadio}
        checked={this.state.checked}
      />
    );
  }
}

export const examples = [
  {
    title: 'Radio',
    description: 'A standard radio button',
    render: () => (
      <span>
        <DemoRadio label="Turn off notifications" checked={true} />
        <br />
        <DemoRadio label="Enable email notifications" checked={false} />
      </span>
    ),
  },
  {
    title: 'Disabled',
    description: 'A disabled radio button',
    render: () => (
      <span>
        <DemoRadio
          label="Turn off notifications"
          checked={true}
          disabled={true}
        />
        <DemoRadio
          label="Enable email notifications"
          checked={false}
          disabled={true}
        />
      </span>
    ),
  },
  {
    title: 'Sizing',
    description: 'Radio buttons can some in two sizes: small, and medium.',
    render: () => (
      <span>
        <DemoRadio label="Turn off notifications" checked={true} size="small" />
        <DemoRadio
          label="Enable email notifications"
          checked={false}
          size="medium"
        />
      </span>
    ),
  },
];
