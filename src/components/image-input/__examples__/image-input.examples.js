/* @flow */
import React from 'react';
// import ImageInput from '../image-input';

export const examples = [
  {
    title: 'Image Input',
    description: 'An input for the upload of images',
    render: () => {},
    html: () => (
      <div id="inputWrapper" className="image-input__input-wrapper">
        <input
          type="file"
          name="imageInput"
          id="imageInput"
          className="ui-input image-input__input"
          tabIndex="0"
        />
        <div className="image-input__pseudo">Add image</div>
        <div className="image-input__meta">
          <label htmlFor="imageTitle" className="image-input__label">
            Title
          </label>
          <input
            type="text"
            name="imageTitle"
            id="imageTitle"
            className="ui-input image-input__title"
            placeholder="e.g. Cover illustration"
          />
          <button className="image-input__reset" onClick="resetImageInput()">
            Remove
          </button>
        </div>
      </div>
    ),
  },
];
