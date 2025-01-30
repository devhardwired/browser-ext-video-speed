// Function to set playback speed for a single video element
function setVideoSpeed(video, speed) {
  if (video.playbackRate !== speed) {
    video.playbackRate = speed;
    console.log(`Set video playback speed to ${speed}x`);
  }
}

// Function to set playback speed for all existing video elements
function applySpeedToAllVideos(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => setVideoSpeed(video, speed));
}

// Load saved speed from storage or set default to 2x
chrome.storage.sync.get(['videoSpeed'], (result) => {
  let currentSpeed = result.videoSpeed !== undefined ? result.videoSpeed : 2;
  applySpeedToAllVideos(currentSpeed);

  // Listen for messages to update speed
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "setSpeed") {
      currentSpeed = request.speed;
      applySpeedToAllVideos(currentSpeed);
      sendResponse({status: "success"});
    }
  });

  // Observe DOM changes to handle dynamically added videos
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) { // Element Node
          if (node.tagName.toLowerCase() === 'video') {
            setVideoSpeed(node, currentSpeed);
          } else {
            // If the added node contains video elements
            const nestedVideos = node.querySelectorAll('video');
            nestedVideos.forEach(video => setVideoSpeed(video, currentSpeed));
          }
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Additional enforcement for platforms like YouTube
  setInterval(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (video.playbackRate !== currentSpeed) {
        setVideoSpeed(video, currentSpeed);
      }
    });
  }, 1000); // Check every second
});
