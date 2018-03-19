export default class ResultView {
  constructor(element) {
    this.element = document.querySelector(element);
    this.model = null;
  }

  update(model) {
    this.model = model;
    this.element.innerHTML = this.template();
  }

  template() {
    return `
      <ul>
        ${this.model.getVideos().map(video => `
          <li>
            <a class="video" href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
              <img class="video__thumbnail" src="${video.thumbnail}" alt="Thumbnail">
              <h2 class="video__title">${video.title}</h2>
              <p class="video__description">${video.description}</p>
            </a>
          </li>
        `).join('')}
      </ul>
    `;
  }
}
