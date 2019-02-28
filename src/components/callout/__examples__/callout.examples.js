import React from 'react';

import Callout from '../';

export const examples = [
  {
    title: 'Feature Callout Card',
    render: () => (
      <Callout variant="blue">
        You're viewing a sample freelancer profile
      </Callout>
    ),
    html: () => (
      <div className="ui-callout ui-callout--variant-blue">
        <span>You're viewing a sample freelancer profile</span>
      </div>
    ),
  },
];
