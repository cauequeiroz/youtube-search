import YoutubeSearchController from './controller/YoutubeSearchController';

const app = new YoutubeSearchController();

document
  .querySelector('.search__button')
  .addEventListener('click', app.search.bind(app));
