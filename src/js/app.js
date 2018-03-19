import YoutubeSearchController from './controller/YoutubeSearchController';

const app = new YoutubeSearchController();

document
  .querySelector('.search')
  .addEventListener('submit', app.search.bind(app));
