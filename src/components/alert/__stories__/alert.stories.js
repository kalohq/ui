import React from 'react';
import {Box} from '../../layout';

import Alert, {AlertPopover} from '../';

/** An alert to display information */
export function InfoAlert() {
  return <Alert type="info">Information Alert</Alert>;
}

/** An alert to display information */
export function InfoAlertWithIcon() {
  return (
    <Alert type="info" showIcon={true}>
      Information Alert
    </Alert>
  );
}

/** An alert to display a warning */
export function WarningAlert() {
  return <Alert type="warning">Warning Alert</Alert>;
}

/** An alert to display a warning */
export function WarningAlertWithIcon() {
  return (
    <Alert type="warning" showIcon={true}>
      Warning Alert
    </Alert>
  );
}

/** An alert to display an error */
export function ErrorAlert() {
  return <Alert type="error">Error Alert</Alert>;
}

/** An alert to display an error */
export function ErrorAlertWithIcon() {
  return (
    <Alert type="error" showIcon={true}>
      Error Alert
    </Alert>
  );
}

/** An alert to display a confirmation */
export function ConfirmationAlert() {
  return <Alert type="confirmation">Confirmation Alert</Alert>;
}

/** An alert to display a confirmation */
export function ConfirmationAlertWithIcon() {
  return (
    <Alert type="confirmation" showIcon={true}>
      Confirmation Alert
    </Alert>
  );
}

/** Alerts will by default fit the horizontal space of their parent container */
export function BlockAlert() {
  return (
    <Box width={500}>
      <Alert type="info">Information Alert</Alert>
    </Box>
  );
}

/** A container to render alerts anchored (fixed) to top right of screen */
export function PopoverAlert() {
  return (
    <AlertPopover topOffset={32}>
      <Alert type="info">Information Alert</Alert>
    </AlertPopover>
  );
}

/** A container to render multiple alerts anchored (fixed) to top right of screen */
export function PopoverAlertMultiple() {
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

class WithIncrement extends React.Component {
  state = {count: 0};
  componentDidMount() {
    setInterval(() => this.setState(state => ({count: state.count + 1})), 1000);
  }
  render() {
    return this.props.children(this.state.count);
  }
}
