const express = require('express');
const axios = require('axios');
const qs = require('querystring');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.get('/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  try {
    const payload = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REDIRECT_URI,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    };

    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(payload),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    console.log('Access Token:', response.data.access_token);
    res.json(response.data);
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Token exchange failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Spotify auth server running on http://localhost:${PORT}`);
});
