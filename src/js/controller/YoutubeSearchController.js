import AppView from '../view/AppView';

export default class YoutubeSearchController {
  constructor() {
    this.appView = new AppView('.appView');
  }

  search(event) {
    event.preventDefault();

    this.appView.closeFullScreenSearch();

    const query = this.appView.getSearchText();

    console.log(`[DEV] Searching for: ${query}`);
  }
}
