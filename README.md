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

## How to Test on Multiple Devices (Local Host)

To ensure RoomSync is working across multiple devices on your local network:

1.  **Connect to same WiFi**: Make sure your computer (the Host) and your other devices (phones, tablets, etc.) are connected to the **same WiFi network**.
2.  **Start the Server**: Run `node server.js` in your terminal.
3.  **Find the Network IP**: The terminal will show a **Network address** (e.g., `http://192.168.1.5:3000`).
4.  **Open on Other Devices**:
    -   On your computer, open `http://localhost:3000`.
    -   On your phone/other device, open the **Network address** in the browser.
5.  **Use the QR Code**: 
    -   On the computer (Host), click the **📷 (Camera)** icon next to the room code.
    -   Scan the QR code with your phone's camera to join instantly!
6.  **Verify Sync**: 
    -   You will see a **pinking pulse** next to the room code on both devices.
    -   If the pulses are flashing at the exact same time, your devices are perfectly synchronized to the server time.
    -   Play music on the Host and it will stream to all connected devices.

## Enhanced Features
- **QR Code Joining**: No more typing 6-digit codes. Scan and join.
- **Visual Sync Pulse**: Real-time visual feedback that devices are in phase.
- **Direct IP Detection**: Server automatically detects and displays your local network address.
- **URL Joining**: Share the full URL (with `?room=XXXXXX`) to join automatically.

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
