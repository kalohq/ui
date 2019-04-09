/**
 * UI Image Input
 *
 * Implements some custom UI around a native file input, whilst
 * still supporting drag-and-drop
 *
 */

export const FILEREADER_ENABLED_CLASS = 'ui-has-feature__filereader';

export default class UIImageInput {
  constructor(attrs) {
    /** This class only works if the browser has FileReader enabled.
     * Lets return early if the browser doesnt support it. */
    if (!window) return false;
    if (!window.FileReader) return false;

    /** The root element */
    this.element = attrs.element;
    this.onChange = attrs.onChange;

    this.resetInput = this.resetInput.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.removeThumbnailsElement = this.removeThumbnailsElement.bind(this);

    this.element.classList.add(FILEREADER_ENABLED_CLASS);

    if (this.element) {
      this.element.addEventListener('change', this.handleFileSelect, false);

      this.inputElement = this.element.querySelector('#imageInput');
      this.resetElement = this.element.querySelector('#resetButton');

      if (this.resetElement) {
        this.resetElement.addEventListener('click', this.resetInput);
      }
    }
  }

  handleFileSelect(event) {
    const files = event.target.files[0];

    this.removeThumbnailsElement();

    const images = [...files].filter(file =>
      new RegExp('image/?').test(file.type)
    );

    if (images.length >= 1) {
      const reader = new FileReader(images[0]);

      reader.onload = (theFile => ev => {
        if (theFile) {
          const el = document.createElement('div');
          el.setAttribute('id', 'thumbnails');
          el.innerHTML = `<img class="ui-image-input__thumb" src="${
            ev.target.result
          }" title="${escape(theFile.name)}" />`;
          document.getElementById('inputWrapper').insertBefore(el, null);
          document.getElementsByClassName(
            'ui-image-input__meta'
          )[0].style.display = 'block';
        }
      })(images[0]);

      reader.readAsDataURL(images[0]);
    }

    if (this.onChange) {
      this.onChange({files});
    }
  }

  removeThumbnailsElement() {
    const thumbnailsElement = this.element.querySelector('#thumbnails');
    if (thumbnailsElement) {
      thumbnailsElement.remove();
    }
    document.getElementsByClassName('ui-image-input__meta')[0].style.display =
      'none';
  }

  resetInput() {
    this.removeThumbnailsElement();
    this.inputElement.value = '';
  }
}
