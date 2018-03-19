import YoutubeAPI from 'youtube-api-client';
import AppView from '../view/AppView';

export default class YoutubeSearchController {
  constructor() {
    this.appView = new AppView('.appView');
    this.service = new YoutubeAPI({
      apiKey: 'AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc',
    });
  }

  search(event) {
    event.preventDefault();

    this.appView.closeFullScreenSearch();

    const query = this.appView.getSearchText();

    this.service
      .getSearchResultsFor(query)
      .then(result => console.log(result));
  }
}
