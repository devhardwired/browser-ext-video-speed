# Video Speed Controller

A cross-browser extension that sets all videos to **2x speed by default** and allows you to choose different playback speeds via a dropdown menu. Compatible with both **Chrome** and **Firefox** using Manifest V3.

## Features

- **Default 2x Speed:** Automatically sets video playback speed to 2x on supported websites.
- **Customizable Speeds:** Click the extension icon to select speeds from 0.5x to 4x.
- **Cross-Browser Support:** Works seamlessly on both Chrome and Firefox without external dependencies.

## Installation

### Chrome

1. **Download the Extension Files:**
   - Clone the repository or download the ZIP and extract it to a folder on your computer.

2. **Open Chrome Extensions Page:**
   - Navigate to `chrome://extensions/` in your Chrome browser.

3. **Enable Developer Mode:**
   - Toggle the "Developer mode" switch in the top right corner.

4. **Load Unpacked Extension:**
   - Click on the "Load unpacked" button.
   - Select the folder containing the extension files (e.g., `video-speed-controller/`).

5. **Verify Installation:**
   - The extension icon should appear in the Chrome toolbar.

### Firefox

1. **Download the Extension Files:**
   - Clone the repository or download the ZIP and extract it to a folder on your computer.

2. **Open Firefox Add-ons Page:**
   - Navigate to `about:debugging#/runtime/this-firefox` in your Firefox browser.

3. **Load Temporary Add-on:**
   - Click on the "Load Temporary Add-on" button.
   - Select the `manifest.json` file from the extracted extension folder.

4. **Verify Installation:**
   - The extension icon should appear in the Firefox toolbar.

> **Note:** In Firefox, the extension loaded as a temporary add-on will be removed upon restarting the browser. To install it permanently, consider submitting it to [Mozilla Add-ons](https://addons.mozilla.org/).

## Usage

1. **Automatic Speed Adjustment:**
   - Visit any website with HTML5 videos (e.g., YouTube, Vimeo).
   - Videos will automatically play at **2x speed**.

2. **Changing Playback Speed:**
   - Click on the extension icon in the toolbar.
   - Select your desired speed from the dropdown menu (0.5x, 0.75x, 1x, 1.5x, 2x, 2.5x, 3x, 3.5x, 4x).
   - The selected speed will apply immediately to all videos on the current page.

3. **Persisting Settings:**
   - Your selected playback speed is saved and will persist across sessions and browser restarts.
