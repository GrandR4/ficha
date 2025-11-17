const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/api/freetogame/games', async (req, res) => {
  try {
    const url = 'https://www.freetogame.com/api/games?platform=pc';
    const response = await axios.get(url, { timeout: 10000 });
    res.json(response.data);
  } catch (err) {
    console.error('Proxy fetch error:', err.message || err);
    res.status(502).json({ error: 'Error al obtener datos desde FreeToGame' });
  }
});

app.listen(PORT, () => console.log(`Proxy escuchando en http://localhost:${PORT}`));