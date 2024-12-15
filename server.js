const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.json());
app.use(express.static('public')); // Serve file statici

// Endpoints
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log(`Nuovo utente: ${username}, Email: ${email}`);
    res.send('Registrazione completata!');
});

app.post('/createServer', (req, res) => {
    const { userId } = req.body;
    console.log(`Creazione server per l'utente con ID: ${userId}`);
    res.json({ message: 'Server creato con successo' });
});

// Configurazione del caricamento dei plugin
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/plugins');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/uploadPlugin', upload.single('pluginFile'), (req, res) => {
  res.send('Plugin caricato con successo!');
});

// Avvia il server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
