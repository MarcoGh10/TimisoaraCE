const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Setăm un port pentru server

// Middleware pentru a servi fișierele statice din directorul 'public'
app.use(express.static(path.join(__dirname, 'templates')));

// Rute pentru pagina principală
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Ascultăm pe portul ales
app.listen(PORT, () => {
  console.log(`Serverul rulează la adresa http://localhost:${PORT}`);
});
