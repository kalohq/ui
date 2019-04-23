import React from 'react';

import SeamlessButton from '../';

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
  {
    title: 'Seamless Button with forced active state',
    description:
      'This can be useful when used with a contextual menu and the menu is open',
    render: () => (
      <SeamlessButton size="medium" icon="more_vert" active={true} />
    ),
    html: () => (
      <button className="ui-seamless-button ui-seamless-button--medium ui-seamless-button--active">
        <svg width="20" height="20" aria-hidden="true">
          <use xlinkHref="#more_vert" />
        </svg>
      </button>
    ),
  },
];
