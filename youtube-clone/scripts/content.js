  const videos = [{
    title:"Naruto recap all complete edition",
    states:"2.7M views · 1 month ago",
    duration:"09:11",
    channelName:"Dummyworld",
    channelLogo:"Channel-Logo/channel-2.jpeg",
    thumbnail:"Thumbnails/Thumbnail-1.webp"
  }, {
    title:"Original Money Heist or a recape? Ft....",
    states:"4B views · 2 weeks ago",
    duration:"12:20",
    channelName:"Netflix India",
    channelLogo:"Channel-Logo/channel-3.jpg",
    thumbnail:"Thumbnails/Thumbnail-2.webp"
  }, {
    title:"Survive 100 Days Traped In A Private Jet, Keep it",
    states:"4B views · 1 hour ago",
    duration:"10:30",
    channelName:"Mr.Beast",
    channelLogo:"Channel-Logo/channel-6.jpeg",
    thumbnail:"Thumbnails/Thumbnail-3.webp"
  }, {
    title:"Meet the steller cast of Son of Sardaar 2",
    states:"1.7M views · 2 months ago",
    duration:"15:58",
    channelName:"Netflix",
    channelLogo:"Channel-Logo/channel-3.jpg",
    thumbnail:"Thumbnails/Thumbnail-4.jpg"
  }, {
    title:"THE DOSA SONG| Yashraj Mukhate|",
    states:"560k views · 3 weeks ago",
    duration:"05:37",
    channelName:"Yashraj Mukhate",
    channelLogo:"Channel-Logo/channel-5.jpg",
    thumbnail:"Thumbnails/Thumbnail-5.webp"
  }, {
    title:"Playing Red Light Green Light Ft. Netflix",
    states:"480k views · 3 hour ago",
    duration:"14:30",
    channelName:"Not Your Type",
    channelLogo:"Channel-Logo/channel-7.jpeg",
    thumbnail:"Thumbnails/Thumbnail-7.jpg"
  },{
    title:"How Every Spider Man Unlocked There Powers!",
    states:"4B views · 2 mins ago",
    duration:"02:00",
    channelName:"I am Batman",
    channelLogo:"Channel-Logo/channel-8.jpeg",
    thumbnail:"Thumbnails/Thumbnail-6.webp"
  },{
    title:"Another Video With Not Your Type",
    states:"780k views · 4 months ago",
    duration:"10:00",
    channelName:"I'm Your Type",
    channelLogo:"Channel-Logo/channel-9.jpeg",
    thumbnail:"Thumbnails/Thumbnail-8.jpg"
  },{
    title:"Oggy and the Cocroaches-New Episode",
    states:"3M views · 2 years ago",
    duration:"22:32:30",
    channelName:"Oggy and the Cocroaches",
    channelLogo:"Channel-Logo/channel-10.jpeg",
    thumbnail:"Thumbnails/Thumbnail-10.jpg"
  },{
    title:"Luffy becomes the King of the Pirates",
    states:"4B views · 1 hour ago",
    duration:"17:39",
    channelName:"Monkey D. Luffy",
    channelLogo:"Channel-Logo/channel-11.jpeg",
    thumbnail:"Thumbnails/Thumbnail-11.jpg"
  },{
    title:"Luffy becomes the King of the Pirates",
    states:"4B views · 1 hour ago",
    duration:"03:33",
    channelName:"Monkey D. Luffy",
    channelLogo:"Channel-Logo/channel-12.jpeg",
    thumbnail:"Thumbnails/Thumbnail-12.jpg"
  },{
    title:"Luffy becomes the King of the Pirates",
    states:"4B views · 1 hour ago",
    duration:"06:36",
    channelName:"",
    channelLogo:"Channel-Logo/channel-4.jpeg",
    thumbnail:"Thumbnails/Thumbnail-9.jpg"
  }
  ]
  
  
  
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
            <p class="video-title">${video.title}</p></p>
            <p class="channel-name">${video.channelName}</p>
            <p class="video-stats">${video.states}</p>
          </div>
        </div>
      </div>
    `;
    let videoGrid = document.querySelector('.video-grid');
    videoGrid.innerHTML += html;
  })