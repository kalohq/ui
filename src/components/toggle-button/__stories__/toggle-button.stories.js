import React from 'react';

import ToggleButton from '../toggle-button';

class ToggleButtonDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: true,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  render() {
    const {theme = 'default', label} = this.props;
    return (
      <ToggleButton
        onChange={this.onToggle}
        theme={theme}
        label={label}
        value={this.state.toggled}
      />
    );
  }
}

export const examples = [
  {
    title: 'ToggleButton',
    description: 'A standard ToggleButton',
    render: () => <ToggleButtonDemo />,
  },
  {
    title: 'With orange theme',
    description: 'A ToggleButton with an orange theme',
    render: () => <ToggleButtonDemo theme="orange" />,
  },
  {
    title: 'With green theme',
    description: 'A ToggleButton with an green theme',
    render: () => <ToggleButtonDemo theme="green" />,
  },
  {
    title: 'With orange-to-green theme',
    description: 'This theme toggles between orange to green.',
    render: () => <ToggleButtonDemo theme="orangeToGreen" />,
  },
  {
    title: 'With label',
    description: 'A label can be passed through to display next to the button',
    render: () => <ToggleButtonDemo label="User status" />,
  },
];
