  import {videos} from './content.js';
  videos.forEach((video) => {
    const html = `
      <div class="video-preview">
        <div class="thumbnail-container">
          <img class="thumbnail" src="${video.thumbnail}" alt="Video Thumbnail">
          <div class="video-time">
            ${video.duration}
          </div>
        </div>
        
        <div class="video-info">
          <div class="channel-logo-container">
            <img class="channel-logo" src="${video.channelLogo}">
          </div>
          <div class="video-details">
            <p class="video-title">${video.title}</p>
            <div class="channel-name">${video.channelName} </div>
            <div class="video-stats">${video.states}</div>
          </div>
        </div>
      </div>
    `;
    let videoGrid = document.querySelector('.video-grid');
    videoGrid.innerHTML += html;
  })