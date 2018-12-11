/* eslint-env jest */
import UIFileInput from '../file-input';

describe('UIFileInput', () => {
  const element = `
    <label class="ui-file-input">
      <span class="ui-file-input__label">
        Click to upload (doc or pdf, max 10MB)
      </span>
      <input type="file" multiple={true} accept=".png" />
      <ul class="ui-file-input__preview" />
    </label>
  `;

  const createElement = options => {
    document.body.innerHTML = element;
    return new UIFileInput(
      document.body.querySelector('.ui-file-input'),
      options
    );
  };

  test('Allows overriding of default options', () => {
    const instance = createElement({showPreview: false});
    expect(instance.options.showPreview).toBe(false);
  });

  test('formatFileSize', () => {
    const instance = createElement();
    expect(instance.formatFileSize(82900)).toBe('80.96 kB');
    expect(instance.formatFileSize(12345678910)).toBe('11.5 GB');
  });
});
