const express = require('express');
const { ExpressPeerServer } = require('peer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve roomsync.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'roomsync.html'));
});

const server = app.listen(port, () => {
  console.log(`RoomSync running at http://localhost:${port}`);
});

// Optional: Integrated PeerServer for true local network usage (offline-capable)
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/roomsync-peer'
});

app.use('/peerjs', peerServer);
