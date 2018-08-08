import React from 'react';

import Checkbox from '../checkbox';
import Text from '../../text';

class DemoCheckbox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <Checkbox
        {...this.props}
        onClick={this.toggleCheck}
        checked={this.state.checked}
      />
    );
  }
}

export const examples = [
  {
    title: 'Checkbox',
    description:
      'A standard checkbox. Pass a label using the prop to ensure that interaction happens on both the checkbox and the label',
    render: () => (
      <DemoCheckbox label="Onboarding freelancers" checked={false} />
    ),
  },
  {
    title: 'Disabled',
    description: 'A disabled checkbox. Can still displayed a checked state',
    render: () => (
      <DemoCheckbox
        label="Onboarding freelancers"
        size="medium"
        checked={true}
        disabled={true}
      />
    ),
  },
  {
    title: 'Sizing',
    description: 'Checkboxes can be in three sizes. Small, medium, and large',
    render: () => (
      <span>
        <DemoCheckbox label="Onboarding freelancers" size="small" />
        <DemoCheckbox label="Onboarding freelancers" size="medium" />
        <DemoCheckbox label="Freelancer invoices" size="large" />
      </span>
    ),
  },
  {
    title: 'Indeterminate',
    description: 'Checkboxes can be indeterminate checked',
    render: () => (
      <DemoCheckbox
        label="Freelancer invoices"
        size="large"
        indeterminate={true}
      />
    ),
  },
  {
    title: 'With a custom label',
    description: 'Checkboxes can also have custom labels',
    render: () => (
      <DemoCheckbox
        label={
          <Text marginLeft={8} size="extra-large" color="pink500">
            A custom label
          </Text>
        }
        size="medium"
      />
    ),
  },
];
