import aerial from './assets/aerial.json';
import { getRandomIntInclusive } from './utils';

interface AppleVideo {
  indentifier: string;
  timedCaptions: {
    [key: number]: string;
  };
  urls: {
    h264: string;
    [key: string]: string;
  };
}

export default class AppleVideoBackground extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'video-background');

    const video = document.createElement('video');
    video.setAttribute('class', 'video-background--video');
    video.setAttribute('muted', 'true');
    video.setAttribute('loop', 'true');
    video.setAttribute('autoplay', 'true');

    const source = document.createElement('source');
    source.setAttribute('type', 'video/mp4');
    source.setAttribute('src', this.getUrl().urls.h264);

    const style = document.createElement('style');
    style.textContent = `
      .video-background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        z-index: -100;
      }

      .video-background--video {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(video);
    video.appendChild(source);
  }

  getUrl = (): AppleVideo => {
    const localeIdx = getRandomIntInclusive(0, aerial.data.length - 1);
    const screensaverIdx = getRandomIntInclusive(
      0,
      aerial.data[localeIdx].screensavers.length - 1
    );
    return aerial.data[localeIdx].screensavers[screensaverIdx];
  };
}
