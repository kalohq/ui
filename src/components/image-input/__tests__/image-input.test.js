/* eslint-env jest */
import imageInput from '../image-input';

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
    const instance = new imageInput({
      element,
    });

    expect(instance.element).toBe(element);
  });

  test('should get a file-reader available class if FileReader is enabled in the browser', () => {
    const instance = new imageInput({
      element: document.querySelector('#inputWrapper'),
    });

    expect(
      instance.element.classList.contains('ui-has-feature__filereader')
    ).toBe(true);
  });

  test('resetInput should remove the thumbnail element', () => {
    const instance = new imageInput({
      element: document.querySelector('#inputWrapper'),
    });

    instance.removeThumbnailsElement = jest.fn();
    instance.resetInput();

    expect(instance.removeThumbnailsElement).toHaveBeenCalled();
    expect(instance.inputElement.value).toBe('');
  });
});
