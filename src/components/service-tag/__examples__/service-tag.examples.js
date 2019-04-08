import React from 'react';

import ServiceTag from '../';

export const examples = [
  {
    title: 'Service Tag',
    render: () => <ServiceTag>Food Photography</ServiceTag>,
    html: () => (
      <span className="ui-service-tag">
        <span className="ui-service-tag__inner">Food Photography</span>
      </span>
    ),
  },
  {
    title: 'Removable service tag',
    render: () => (
      <ServiceTag onRemove={() => {}}>Removable service tag</ServiceTag>
    ),
    html: () => (
      <span className="ui-service-tag ui-service-tag--removable">
        <span className="ui-service-tag__inner">Removable service tag</span>
        <button className="ui-service-tag__remove">
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="#clear" />
          </svg>
        </button>
      </span>
    ),
  },
  {
    title: 'Truncation',
    render: () => (
      <ServiceTag>This is a long service tag that will be truncated</ServiceTag>
    ),
    html: () => (
      <span className="ui-service-tag">
        <span className="ui-service-tag__inner">
          This is a long service tag that will be truncated
        </span>
      </span>
    ),
  },
];
