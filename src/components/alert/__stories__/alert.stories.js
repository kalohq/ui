import React from 'react';
import {storiesOf} from '@storybook/react';
import {Box} from '../../layout';

import Alert, {AlertPopover} from '../';

storiesOf('Alert', module)
  .addWithInfo('Info Alert', 'An alert to display information', () => {
    return <Alert type="info">Information Alert</Alert>;
  })
  .addWithInfo(
    'Info Alert (with icon)',
    'An alert to display information',
    () => {
      return (
        <Alert type="info" showIcon={true}>
          Information Alert
        </Alert>
      );
    }
  )
  .addWithInfo('Warning Alert', 'An alert to display a warning', () => {
    return <Alert type="warning">Warning Alert</Alert>;
  })
  .addWithInfo(
    'Warning Alert (with icon)',
    'An alert to display a warning',
    () => {
      return (
        <Alert type="warning" showIcon={true}>
          Warning Alert
        </Alert>
      );
    }
  )
  .addWithInfo('Error Alert', 'An alert to display an error', () => {
    return <Alert type="error">Error Alert</Alert>;
  })
  .addWithInfo(
    'Error Alert (with icon)',
    'An alert to display an error',
    () => {
      return (
        <Alert type="error" showIcon={true}>
          Error Alert
        </Alert>
      );
    }
  )
  .addWithInfo(
    'Confirmation Alert',
    'An alert to display a confirmation',
    () => {
      return <Alert type="confirmation">Confirmation Alert</Alert>;
    }
  )
  .addWithInfo(
    'Confirmation Alert (with icon)',
    'An alert to display a confirmation',
    () => {
      return (
        <Alert type="confirmation" showIcon={true}>
          Confirmation Alert
        </Alert>
      );
    }
  )
  .addWithInfo(
    'Block Alert',
    'Alerts will by default fit the horizontal space of their parent container',
    () => {
      return (
        <Box width={500}>
          <Alert type="info">Information Alert</Alert>
        </Box>
      );
    }
  )
  .addWithInfo(
    'Popover Alert',
    'A container to render alerts anchored (fixed) to top right of screen',
    () => {
      return (
        <AlertPopover topOffset={32}>
          <Alert type="info">Information Alert</Alert>
        </AlertPopover>
      );
    }
  )
  .addWithInfo(
    'Popover Alert (multiple)',
    'A container to render multiple alerts anchored (fixed) to top right of screen',
    () => {
      return (
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
      );
    }
  );

class WithIncrement extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
  }
  componentDidMount() {
    setInterval(() => this.setState(state => ({count: state.count + 1})), 1000);
  }
  render() {
    return this.props.children(this.state.count);
  }
}
