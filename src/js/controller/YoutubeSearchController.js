import YoutubeAPI from 'youtube-api-client';
import AppView from '../view/AppView';
import VideoList from '../model/VideoList';
import ResultView from '../view/ResultView';

export default class YoutubeSearchController {
  constructor() {
    this.videoList = new VideoList();

    this.appView = new AppView('.appView');
    this.resultView = new ResultView('.resultView');

    this.service = new YoutubeAPI({
      apiKey: 'AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc',
    });
  }

  search(event) {
    event.preventDefault();

    const query = this.appView.getSearchText();

    this.service
      .getSearchResultsFor(query)
      .then((result) => {
        this.videoList.reset();
        this.videoList.createListFrom(result.videos);
        this.resultView.update(this.videoList);
      });

    this.appView.closeFullScreenSearch();
  }
}
