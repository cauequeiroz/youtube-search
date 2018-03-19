import Video from './Video';

export default class VideoList {
  constructor() {
    this.list = [];
  }

  add(video) {
    this.list.push(video);
  }

  reset() {
    this.list = [];
  }

  createListFrom(data) {
    data.forEach((item) => {
      const video = new Video({
        id: item.id,
        title: item.title,
        description: item.description,
        thumbnail: item.thumbnail,
      });

      this.add(video);
    });
  }

  getVideos() {
    return [].concat(this.list);
  }
}
