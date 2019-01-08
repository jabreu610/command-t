import AppleVideoBackground from './apple-video-background.component';

if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
}

customElements.define('apple-video-background', AppleVideoBackground);
