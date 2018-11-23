import React from 'react';

import SkillTag from '../';

export const examples = [
  {
    title: 'Skill Tag',
    render: () => <SkillTag>Food Photography</SkillTag>,
    html: () => (
      <span className="ui-skill-tag">
        <span className="ui-skill-tag__inner">Food Photography</span>
      </span>
    ),
  },
  {
    title: 'Removable skill tag',
    render: () => <SkillTag onRemove={() => {}}>Removable skill tag</SkillTag>,
    html: () => (
      <span className="ui-skill-tag ui-skill-tag--removable">
        <span className="ui-skill-tag__inner">Removable skill tag</span>
        <button className="ui-skill-tag__remove">
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
      <SkillTag>This is a long skill tag that will be truncated</SkillTag>
    ),
    html: () => (
      <span className="ui-skill-tag">
        <span className="ui-skill-tag__inner">
          This is a long skill tag that will be truncated
        </span>
      </span>
    ),
  },
];
