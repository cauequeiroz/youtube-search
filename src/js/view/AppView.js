export default class AppView {
  constructor(element) {
    this.element = document.querySelector(element);
    this.isSearchFullScreen = true;
  }

  closeFullScreenSearch() {
    if (this.isSearchFullScreen) {
      this.element.querySelector('header').classList.remove('header--expanded');
      this.isSearchFullScreen = false;
    }
  }

  getSearchText() {
    return this.element.querySelector('.search__input').value;
  }
}
