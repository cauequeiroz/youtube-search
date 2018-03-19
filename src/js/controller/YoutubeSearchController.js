export default class YoutubeSearchController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this.searchInput = $('.search__input');
  }

  search() {
    const query = this.searchInput.value;

    console.log(`[DEV] Searching for: ${query}`);
  }
}
