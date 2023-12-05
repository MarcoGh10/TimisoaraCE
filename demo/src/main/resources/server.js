const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serverul rulează la adresa http://localhost:${PORT}`);
});
