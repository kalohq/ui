/* eslint-env jest */
import React from 'react';
import ImageInput from '../image-input.react';
import UIImageInput, {FILEREADER_ENABLED_CLASS} from '../image-input';

import {shallow} from 'utils/test/enzyme';

describe('ImageInput (web)', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div
        id="inputWrapper"
        class="ui-image-input"
      >
        <input
          type="file"
          name="imageInput"
          id="imageInput"
          class="ui-input ui-input--medium ui-image-input__input"
          accept="image/*"
          tabIndex="0"
        />
        <div class="ui-image-input__pseudo">Add image</div>
        <div class="ui-image-input__meta">
          <label htmlFor="imageTitle" class="ui-image-input__label">
            Title
          </label>
          <input
            type="text"
            name="imageTitle"
            id="imageTitle"
            class="ui-input ui-input--medium ui-image-input__title"
            placeholder="e.g. Cover illustration"
          />
          <button class="ui-image-input__reset" id="resetButton">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  test('should instantiate correctly', () => {
    const element = document.querySelector('#inputWrapper');
    const instance = new UIImageInput({
      element,
    });

    expect(instance.element).toBe(element);
  });

  test('should get a file-reader available class if FileReader is enabled in the browser', () => {
    const instance = new UIImageInput({
      element: document.querySelector('#inputWrapper'),
    });

    expect(instance.element.classList.contains(FILEREADER_ENABLED_CLASS)).toBe(
      true
    );
  });

  test('resetInput should remove the thumbnail element', () => {
    const instance = new UIImageInput({
      element: document.querySelector('#inputWrapper'),
    });

    instance.removeThumbnailsElement = jest.fn();
    instance.resetInput();

    expect(instance.removeThumbnailsElement).toHaveBeenCalled();
    expect(instance.inputElement.value).toBe('');
  });
});

describe('ImageInput (React)', () => {
  test('should mount', () => {
    const create = <ImageInput />;

    const result = shallow(create);

    const wrapper = result.find('.ui-image-input');
    expect(wrapper.length).toBe(1);
  });
});
