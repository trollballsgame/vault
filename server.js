const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 4730;

app.use(express.json());
app.use(express.static('public'))
app.get('/api/news', (req, res) => {
    try {
        const data = fs.readFileSync('news.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: 'Failed to load news.' });
    }
});

app.post('/api/news', (req, res) => {
    const { command } = req.body;
    const match = command.match(/^news:add\(["'](.+)["']\)$/);

    if (!match) {
        return res.status(400).json({ error: 'Invalid syntax. Use: news:add("your news here")' });
    }

    const newsItem = `TB NEWS: ${match[1]}`;

    try {
        const data = JSON.parse(fs.readFileSync('news.json', 'utf8'));
        data.push(newsItem);
        fs.writeFileSync('news.json', JSON.stringify(data, null, 2));
        res.json({ message: 'News added', news: newsItem });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save news.' });
    }
});

app.listen(PORT, () => {
    console.log(`🧠 Trollballs News server running at http://localhost:${PORT}`);
});
