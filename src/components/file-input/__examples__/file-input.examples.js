import React from 'react';

import UIFileInput from '../file-input';
import '../file-input.css';

export const examples = [
  {
    title: 'File Input',
    render: () => <span>Not Implemented</span>,
    html: () => (
      <label className="ui-file-input" ref={el => new UIFileInput(el)}>
        <span className="ui-file-input__label">
          Click to upload (doc or pdf, max 10MB)
        </span>
        <input type="file" multiple={true} accept=".png" />
        <ul className="ui-file-input__preview" />
      </label>
    ),
  },
];
