import React from 'react';
import {Box} from '../../layout';

import Alert, {AlertPopover} from '../';

export const examples = [
  {
    title: 'Info Alert',
    description: 'An alert to display information',
    render: () => <Alert type="info">Information Alert</Alert>,
  },
  {
    title: 'Info Alert (with icon)',
    description: 'An alert to display information',
    render: () => (
      <Alert type="info" showIcon={true}>
        Information Alert
      </Alert>
    ),
  },
  {
    title: 'Warning Alert',
    description: 'An alert to display a warning',
    render: () => <Alert type="warning">Warning Alert</Alert>,
  },
  {
    title: 'Warning Alert (with icon)',
    description: 'An alert to display a warning',
    render: () => (
      <Alert type="warning" showIcon={true}>
        Warning Alert
      </Alert>
    ),
  },
  {
    title: 'Error Alert',
    description: 'An alert to display an error',
    render: () => <Alert type="error">Error Alert</Alert>,
  },
  {
    title: 'Error Alert (with icon)',
    description: 'An alert to display a error',
    render: () => (
      <Alert type="error" showIcon={true}>
        Error Alert
      </Alert>
    ),
  },
  {
    title: 'Confirmation Alert',
    description: 'An alert to display a confirmation',
    render: () => <Alert type="confirmation">Confirmation Alert</Alert>,
  },
  {
    title: 'Confirmation Alert (with icon)',
    description: 'An alert to display a confirmation',
    render: () => (
      <Alert type="confirmation" showIcon={true}>
        Confirmation Alert
      </Alert>
    ),
  },
  {
    title: 'Block Alert',
    description:
      'Alerts will by default fit the horizontal space of their parent container',
    render: () => (
      <Box width={500}>
        <Alert type="info">Information Alert</Alert>
      </Box>
    ),
  },
  {
    title: 'Popover Alert',
    description:
      'A container to render alerts anchored (fixed) to top right of screen',
    render: () => (
      <AlertPopover topOffset={32}>
        <Alert type="info">Information Alert</Alert>
      </AlertPopover>
    ),
  },
  {
    title: 'Popover Alert (multiple)',
    description:
      'A container to render multiple alerts anchored (fixed) to top right of screen',
    render: () => (
      <WithIncrement>
        {count => (
          <AlertPopover topOffset={32}>
            {count < 5 ? (
              <Alert type="info" showIcon={true}>
                Information Alert
              </Alert>
            ) : null}
            {count > 0 && count < 6 ? (
              <Alert type="warning" showIcon={true}>
                Warning Alert
              </Alert>
            ) : null}
            {count > 1 ? (
              <Alert type="error" showIcon={true}>
                Error Alert
              </Alert>
            ) : null}
            {count > 2 ? (
              <Alert type="confirmation" showIcon={true}>
                Confirmation Alert
              </Alert>
            ) : null}
          </AlertPopover>
        )}
      </WithIncrement>
    ),
  },
];

class WithIncrement extends React.Component {
  state = {count: 0};
  componentDidMount() {
    setInterval(() => this.setState(state => ({count: state.count + 1})), 1000);
  }
  render() {
    return this.props.children(this.state.count);
  }
}
