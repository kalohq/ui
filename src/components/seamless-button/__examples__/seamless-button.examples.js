import React from 'react';

import SeamlessButton from '../seamless-button';

export const examples = [
  {
    title: 'Seamless Button',
    render: () => <SeamlessButton size="medium" icon="more_vert" />,
    html: () => (
      <button className="ui-seamless-button ui-seamless-button--medium">
        <svg width="20" height="20" aria-hidden="true">
          <use xlinkHref="#more_vert" />
        </svg>
      </button>
    ),
  },
];
