const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'QSH Market API Ready!' });
});

app.get('/nfts', (req, res) => {
    res.json({ nfts: [] });
});

app.listen(PORT, () => {
    console.log(`QSH Market backend running at http://localhost:${PORT}`);
});
