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
    html: () => (
      <div className="ui-radio ui-radio--small">
        <input type="radio" id="4" />
        <label htmlFor="4" />
      </div>
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
  {
    title: 'With hint',
    render: () => (
      <span>
        <DemoRadio
          label="Enable email notifications"
          hint="This will override any previous settings"
          checked={false}
          size="medium"
          marginBottom={8}
        />
        <DemoRadio label="Turn off notifications" checked={true} size="small" />
      </span>
    ),
    html: () => (
      <span>
        <div className="ui-radio ui-radio--medium">
          <input type="radio" id="4" />
          <label htmlFor="4">
            <div className="ui-radio__label-group">
              <span className="ui-radio__label">
                Enable email notifications
              </span>
              <span className="ui-radio__hint">
                This will override any previous settings
              </span>
            </div>
          </label>
        </div>
        <div className="ui-radio ui-radio--medium">
          <input type="radio" id="5" />
          <label htmlFor="5">
            <div className="ui-radio__label-group">
              <span className="ui-radio__label">
                Disable email notifications
              </span>
            </div>
          </label>
        </div>
      </span>
    ),
  },
];
