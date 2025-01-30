document.addEventListener('DOMContentLoaded', () => {
  const speedSelect = document.getElementById('speed-select');

  // Load saved speed from storage and set the dropdown
  chrome.storage.sync.get(['videoSpeed'], (result) => {
    if (result.videoSpeed) {
      speedSelect.value = result.videoSpeed;
    } else {
      speedSelect.value = '2'; // Default to 2x if not set
    }
  });

  // When the user changes the selection
  speedSelect.addEventListener('change', () => {
    const selectedSpeed = parseFloat(speedSelect.value);

    // Save the selected speed to storage
    chrome.storage.sync.set({ videoSpeed: selectedSpeed }, () => {
      console.log('Video speed set to', selectedSpeed);
    });

    // Send a message to all tabs to change video speed
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        // Ensure the tab has an ID before sending a message
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, {action: "setSpeed", speed: selectedSpeed}, (response) => {
            if (chrome.runtime.lastError) {
              // Handle the case where the tab does not have the content script injected
              console.warn(`Could not send message to tab ${tab.id}: ${chrome.runtime.lastError.message}`);
            } else {
              console.log(`Tab ${tab.id}: ${response.status}`);
            }
          });
        }
      });
    });
  });
});
