/* @flow */
import React from 'react';

import Field from '../../field';
import Input from '../../input';
import imageInput from '../image-input';
import ImageInput from '../image-input.react';

export const examples = [
  {
    title: 'Image Input',
    description: 'An input for the upload of images',
    render: () => (
      <ImageInput placeholder="Upload image">
        <Field label="Title">
          <Input id="imageTitle" placeholder="e.g. Cover Illustration" />
        </Field>
      </ImageInput>
    ),
    html: () => {
      return (
        <div
          id="inputWrapper"
          className="ui-image-input"
          ref={el => {
            const instance = new imageInput({
              element: el,
              inputLabel: 'Custom label',
              inputPlaceholder: 'Custom Placeholder',
            });

            return instance;
          }}
        >
          <input
            type="file"
            name="imageInput"
            id="imageInput"
            className="ui-input ui-input--medium ui-image-input__input"
            accept="image/*"
            tabIndex="0"
          />
          <div className="ui-image-input__pseudo">Add image</div>
          <div className="ui-image-input__meta">
            <label htmlFor="imageTitle" className="ui-image-input__label">
              Title
            </label>
            <input
              type="text"
              name="imageTitle"
              id="imageTitle"
              className="ui-input ui-input--medium ui-image-input__title"
              placeholder="e.g. Cover illustration"
            />
            <button className="ui-image-input__reset" id="resetButton">
              Remove
            </button>
          </div>
        </div>
      );
    },
  },
];
