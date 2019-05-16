import React from 'react';

import {Tabs, Tab} from '../';

export const examples = [
  {
    title: 'Tab navigation',
    render: () => (
      <Tabs>
        <Tab>Profile</Tab>
        <Tab active={true}>Messages</Tab>
        <Tab>Notes &amp; Documents</Tab>
      </Tabs>
    ),
    html: () => (
      <nav className="ui-tabs">
        <ul className="ui-tabs__inner" role="menubar">
          <li>
            <a href="#" className="ui-tabs__tab" role="menuitem" tabIndex={0}>
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ui-tabs__tab ui-tabs__tab--active"
              role="menuitem"
              tabIndex={-1}
            >
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="ui-tabs__tab" role="menuitem" tabIndex={-1}>
              Notes &amp; Documents
            </a>
          </li>
        </ul>
      </nav>
    ),
  },
  {
    title: 'With a disabled tab',
    render: () => (
      <Tabs>
        <Tab active={true}>Profile</Tab>
        <Tab disabled={true}>Messages</Tab>
        <Tab>Notes &amp; Documents</Tab>
      </Tabs>
    ),
    html: () => (
      <nav className="ui-tabs">
        <ul className="ui-tabs__inner" role="menubar">
          <li>
            <a href="#" className="ui-tabs__tab" role="menuitem" tabIndex={0}>
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="ui-tabs__tab ui-tabs__tab--disabled"
              role="menuitem"
              tabIndex={-1}
            >
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="ui-tabs__tab" role="menuitem" tabIndex={-1}>
              Notes &amp; Documents
            </a>
          </li>
        </ul>
      </nav>
    ),
  },
];
