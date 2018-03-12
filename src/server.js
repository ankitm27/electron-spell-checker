const express = require('express');
const app = express();
const spell = require('spellchecker');
app.get('/api', (req, res) => {
    res.send({"check":!spell.isMisspelled(req.query.text)})
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
