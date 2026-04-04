# RoomSync Deployment

This project provides a synchronized audio playback experience over a local network (WiFi hotspot or LAN).

## Getting Started

### Option A: Using Node.js (Recommended for full offline features)

1.  **Install Node.js**: Download it from [nodejs.org](https://nodejs.org/).
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the local server:
    ```bash
    npm start
    ```

### Option B: Using Python (Quickest way if Python is already installed)

Since you already have Python, you can start a simple server without installing anything:

1.  Open your terminal and run:
    ```bash
    python -m http.server 3000
    ```
2.  Access the application:
    Open `http://localhost:3000` on your host device.

*Note: Python's simple server does NOT provide local signaling. You will need an internet connection for the PeerJS cloud.*

## Local Network Usage (WiFi Hotspot)

To use RoomSync over a local WiFi hotspot:
1.  Enable your device's WiFi hotspot.
2.  Connect other devices to that hotspot.
3.  Identify the host's IP address (e.g., `192.168.1.1`).
4.  Guests should access the app at `http://192.168.1.1:3000`.

### Offline Mode Configuration

If you're using this in an environment without internet access, you'll need to modify `roomsync.html` to use the local PeerServer.

In `roomsync.html`, change the `Peer` initialization to:
```javascript
peer = new Peer('RS4-' + roomCode, {
  host: window.location.hostname,
  port: window.location.port || 80,
  path: '/peerjs/roomsync-peer',
  debug: 0
});
```
This ensures signaling happens locally rather than through PeerJS's public cloud.
