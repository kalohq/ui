/* @flow */
import React from 'react';

import JumboButton from '../';

export const examples = [
  {
    title: 'Jumbo Button',
    render: () => <JumboButton icon="file_xls">Add/invite</JumboButton>,
    html: () => (
      <button className="ui-jumbo-btn">
        <svg
          width="36"
          height="36"
          aria-hidden="true"
          className="ui-icon fill-navy800 ui-jumbo-btn__icon"
        >
          <use xlinkHref="#file_xls" />
        </svg>
        Add/invite
      </button>
    ),
  },
  {
    title: 'with a forced active state',
    render: () => (
      <JumboButton icon="file_xls" active={true}>
        Add/invite
      </JumboButton>
    ),
    html: () => (
      <button className="ui-jumbo-btn ui-jumbo-btn--active">
        <svg
          width="36"
          height="36"
          aria-hidden="true"
          className="ui-icon fill-navy800 ui-jumbo-btn__icon"
        >
          <use xlinkHref="#file_xls" />
        </svg>
        Add/invite
      </button>
    ),
  },
];
