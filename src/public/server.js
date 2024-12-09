const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
const songs = [];
const playlists = [];

// Routes
app.get('/songs', (req, res) => {
  res.json(songs);
});

app.post('/songs', (req, res) => {
  const song = req.body;
  songs.push(song);
  res.status(201).json(song);
});

app.get('/playlists', (req, res) => {
  res.json(playlists);
});

app.post('/playlists', (req, res) => {
  const playlist = req.body;
  playlists.push(playlist);
  res.status(201).json(playlist);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
