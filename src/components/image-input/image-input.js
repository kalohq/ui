export default class ImageInput {
  constructor(attr) {
    this.element = attr.element;
    this.inputLabel = attr.inputLabel;
    this.inputPlaceholder = attr.inputPlaceholder;

    this.resetInput = this.resetInput.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.removeThumbnailsElement = this.removeThumbnailsElement.bind(this);

    if (!window.FileReader) return false;
    this.element.classList.add('ui-has-feature__filereader');

    if (this.element) {
      this.inputElement = this.element.querySelector('#imageInput');
      this.resetElement = this.element.querySelector('#resetButton');
      this.element.addEventListener('change', this.handleFileSelect, false);
    }

    if (this.resetElement) {
      this.resetElement.addEventListener('click', this.resetInput);
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
  }

  removeThumbnailsElement() {
    const thumbnailsElement = this.element.querySelector('#thumbnails');
    if (thumbnailsElement) {
      thumbnailsElement.remove();
    }
  }

  resetInput() {
    this.removeThumbnailsElement();

    this.inputElement.value = '';
  }
}
