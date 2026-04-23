# Offline Code Editor

## Dependencies
This project is built using:
* **File System Access API:** Native browser API for local file management.
* **Service Worker:** Used for offline asset caching.

## Permissions & Usage
1.  **File Access:** The browser will prompt you for permission the first time you click "Open" or "Save". You must click **"Allow"** to grant read/write access to the specific file.
2.  **Offline Use:** Once the page is loaded once, the Service Worker caches the interface files. You can subsequently open the folder, launch `index.html` without internet, and it will function perfectly.
3.  **Installation:** Because of the `manifest.json`, you can click the "Install" icon in your browser address bar to add this as a standalone desktop app.
