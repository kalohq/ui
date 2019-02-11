import React from 'react';

import FeatureCalloutCard from '../';

export const examples = [
  {
    title: 'Feature Callout Card',
    render: () => (
      <FeatureCalloutCard title="Adding multiple freelancers?">
        You can now <a> import spreadsheets</a>
      </FeatureCalloutCard>
    ),
    html: () => (
      <div className="ui-feature-callout-card">
        <span className="ui-feature-callout-card__title">
          <svg
            width="14"
            height="14"
            aria-hidden="true"
            className="ui-feature-callout-card__icon"
          >
            <use xlinkHref="#megaphone" />
          </svg>
          Adding multiple freelancers?
        </span>
        <span className="ui-feature-callout-card__content">
          You can now <a> import spreadsheets</a>
        </span>
      </div>
    ),
  },
  {
    title: 'With a longer description',
    render: () => (
      <FeatureCalloutCard title="Adding multiple freelancers?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </FeatureCalloutCard>
    ),
  },
];
