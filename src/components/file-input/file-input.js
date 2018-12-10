export default class UIFileInput {
  constructor(element, instanceOptions = {}) {
    this.element = element;
    this.previewElement = element.querySelector('.ui-file-input__preview');
    this.inputElement = element.querySelector('input');
    this.labelElement = element.querySelector('.ui-file-input__label');

    this.files = [];

    this.options = {
      showPreview: true,
      ...instanceOptions,
    };

    this.onUpload = this.onUpload.bind(this);
    this.showFilePreview = this.showFilePreview.bind(this);
    this.formatFileSize = this.formatFileSize.bind(this);

    this.element.classList.add('ui-file-input--js-loaded');
    this.inputElement.addEventListener('change', this.onUpload, false);
  }

  onUpload(ev) {
    const files = ev.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.showFilePreview(files[i]);
      }

      this.labelElement.innerHTML = `${files.length} ${files.length >= 2
        ? 'files'
        : 'file'} selected`;
    }
  }

  formatFileSize(size) {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    const appender = ['B', 'kB', 'MB', 'GB', 'TB'][i];
    return `${(size / Math.pow(1024, i)).toFixed(2) * 1} ${appender}`;
  }

  showFilePreview(file) {
    this.previewElement.innerHTML += `
      <li class="ui-file-input__preview__item">
        ${file.name} ${this.formatFileSize(file.size)}
      </li>
    `;
  }
}
