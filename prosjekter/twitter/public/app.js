const express = require('express');
const app = express();

const database = require('better-sqlite3');
const db = new database('TweetDB.db');

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());


app.post('/leggtilpost', (req, res) => {
console.log(req.body); // Sjekk hva som blir sendt fra klienten

    const { nameoftweet, content, author, dateoftweet } = req.body;

    if (!nameoftweet || !content || !author || !dateoftweet) {
        return res.status(400).json({ error: 'Alle feltene må fylles ut!' });
    }

    const stmt = db.prepare('INSERT INTO tweets (nameoftweet, content, author, dateoftweet) VALUES (?, ?, ?, ?)');
    const info = stmt.run(nameoftweet, content, author, dateoftweet);

    res.json({ message: 'Tweet lagt til!', id: info.lastInsertRowid });
});


// henter meldinger fra databasen
app.get('/hentmeldinger', (req, res) => {
    const stmt = db.prepare('SELECT * FROM tweets ORDER BY dateoftweet DESC');
    const tweets = stmt.all();
    res.json(tweets);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});