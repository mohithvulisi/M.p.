# 🎧 RoomSync

**Universal High-Precision Synchronized Audio Streaming**

RoomSync is a production-ready mobile and web application designed for synchronized audio playback across multiple devices. Whether you're hosting a silent disco, a shared study session, or just want to sync music throughout your home, RoomSync provides sub-100ms latency synchronization using WebRTC.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Android-orange.svg)

## 🚀 Core Features

- **Universal Metadata Bridge**: Seamlessly resolve and sync links from **Spotify**, **Apple Music**, and **YouTube Music**.
- **High-Precision Sync**: Advanced RTT-based latency correction keeps all devices within a 1.5s drift threshold (optimized for WebRTC).
- **P2P Audio Streaming**: Direct peer-to-peer chunked transfer for local files (MP3/FLAC/WAV).
- **Zero Configuration**: Join rooms instantly via **QR Code** or 6-digit session codes.
- **Battery Saver Mode**: Dimmed UI for long-session audio streaming on mobile devices.
- **AES-GCM Encryption**: Secure guest authentication for private listening rooms.

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3 (Glassmorphism), Vanilla JavaScript.
- **Connectivity**: PeerJS (WebRTC) for P2P signaling and data channels.
- **Mobile**: Capacitor.js for native Android bridging.
- **Backend**: Node.js + Express for local signaling (Optional).
- **APIs**: Piped API (YouTube), OEmbed (Spotify), iTunes Lookup (Apple Music).

## 📥 Installation

### For Web Developers
1. Clone the repository:
   ```bash
   git clone https://github.com/mohithvulisi/M.p..git
   cd M.p.-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm start
   ```

### For Android
- Open the `/android` folder in Android Studio.
- Build the APK using the provided Gradle wrapper:
  ```bash
  ./gradlew assembleDebug
  ```

## 📖 Usage Guide

1. **Host a Room**: Select "Host a Room" and choose between **Online (YouTube)** or **Local Files**.
2. **Share the Code**: Guests can scan the generated QR code or enter the 6-digit ID.
3. **Sync & Play**: Once guests tap "READY TO SYNC", the host controls all playback. The "Sync Pulse" visualizer confirms phase alignment across all connected nodes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ for the open-source community.*
