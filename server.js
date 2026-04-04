const express = require('express');
const { ExpressPeerServer } = require('peer');
const path = require('path');

const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

// Function to get local IP address
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve roomsync.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'roomsync.html'));
});

const server = app.listen(port, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log(`\n🚀 RoomSync is live!`);
  console.log(`-------------------------------------------`);
  console.log(`Local:   http://localhost:${port}`);
  console.log(`Network: http://${localIP}:${port}`);
  console.log(`-------------------------------------------\n`);
  console.log(`On other devices, join using the Network address.`);
});

// Optional: Integrated PeerServer for true local network usage (offline-capable)
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/roomsync-peer'
});

app.use('/peerjs', peerServer);
