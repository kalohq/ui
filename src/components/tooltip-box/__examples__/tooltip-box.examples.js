import React from 'react';

import TooltipBox from '..';

export const examples = [
  {
    title: 'TooltipBox',
    render: () => (
      <TooltipBox text="Hello! I am a tooltip">Hover me :)</TooltipBox>
    ),
    html: () => (
      <div className="tooltip-container">
        Hover me :)
        <div className="tooltip-bubble">Hello! I am a tooltip</div>
      </div>
    ),
  },
  {
    title: 'TooltipBox - show right',
    render: () => (
      <TooltipBox text="Hello! I am a tooltip" show="right">
        Hover me :)
      </TooltipBox>
    ),
    html: () => (
      <div className="tooltip-container">
        Hover me :)
        <div className="tooltip-bubble tooltip-bubble--right">
          Hello! I am a tooltip
        </div>
      </div>
    ),
  },
];
