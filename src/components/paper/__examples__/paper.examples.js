import React from 'react';

import Paper from '../paper';

export const examples = [
  {
    title: 'Paper',
    description:
      'A wrapper component in charge of implementing the box-shadow around cards and the focus/blur animations.',
    render: () => <Paper padding={48}>this is some demo content</Paper>,
  },
  {
    title: 'with elevation',
    description: 'Paper can be visually elevated with a dropshadow.',
    render: () => (
      <span>
        <Paper elevation={1} padding={48}>
          elevation 1
        </Paper>
        <Paper elevation={2} padding={48}>
          elevation 2
        </Paper>
        <Paper elevation={3} padding={48}>
          elevation 3
        </Paper>
        <Paper elevation={4} padding={48}>
          elevation 4
        </Paper>
      </span>
    ),
  },
  {
    title: 'With no border-radius',
    render: () => (
      <Paper padding={48} rounded={false}>
        this is some demo content
      </Paper>
    ),
  },
];
