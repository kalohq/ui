import React from 'react';

import Alert, {AlertPopover} from '../';

export const examples = [
  {
    title: 'Info Alert',
    description: 'An alert to display information',
    render: () => (
      <Alert type="info" title="Information Alert">
        You can now set your teams timezone in the Kalo Team Admin
      </Alert>
    ),
    html: () => (
      <div className="ui-alert ui-alert--info">
        <svg width={16} height={16} aria-hidden="true" fill="currentColor">
          <use xlinkHref="#info_outline" />
        </svg>
        <div className="ui-alert__content">
          <span className="ui-alert__title">Information Alert</span>
          <span className="ui-alert__message">
            You can now set your teams timezone in the Kalo Team Admin
          </span>
        </div>
      </div>
    ),
  },
  {
    title: 'Warning Alert',
    description: 'An alert to display a warning',
    render: () => (
      <Alert type="warning" showIcon={true} title="Warning Alert" />
    ),
    html: () => (
      <div className="ui-alert ui-alert--warning">
        <svg width={16} height={16} aria-hidden="true" fill="currentColor">
          <use xlinkHref="#error_outline" />
        </svg>
        <div className="ui-alert__content">
          <span className="ui-alert__title">Warning Alert</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Error Alert',
    description: 'An alert to display a error',
    render: () => <Alert type="error" showIcon={true} title="Error Alert" />,
    html: () => (
      <div className="ui-alert ui-alert--error">
        <svg width={16} height={16} aria-hidden="true" fill="currentColor">
          <use xlinkHref="#highlight_off" />
        </svg>
        <div className="ui-alert__content">
          <span className="ui-alert__title">Error Alert</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Confirmation Alert',
    description: 'An alert to display a confirmation',
    render: () => (
      <Alert type="confirmation" showIcon={true} title="Confirmation Alert" />
    ),
    html: () => (
      <div className="ui-alert ui-alert--confirmation">
        <svg width={16} height={16} aria-hidden="true" fill="currentColor">
          <use xlinkHref="#check_circle" />
        </svg>
        <div className="ui-alert__content">
          <span className="ui-alert__title">Confirmation Alert</span>
        </div>
      </div>
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
            {count < 5 && (
              <Alert type="info" showIcon={true} title="Information Alert">
                You can now set your teams timezone in the Kalo Team Admin
              </Alert>
            )}
            {count > 0 &&
            count < 6 && (
              <Alert type="warning" showIcon={true} title="Warning alert">
                Your trial of Reporting expires in 12 days
              </Alert>
            )}
            {count > 1 && (
              <Alert type="error" showIcon={true} title="Error Alert">
                There was an issue creating your project
              </Alert>
            )}
            {count > 2 && (
              <Alert
                type="confirmation"
                showIcon={true}
                title="Invoice Submitted"
              >
                Your invoice has been submitted to the Kalo team for approval
              </Alert>
            )}
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
