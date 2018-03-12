const express = require('express');
const app = express();
const spell = require('spellchecker');


app.get('/api', (req, res) => {
    console.log("check");
    console.log("req.query",req.query);
    res.send({"check":!spell.isMisspelled(req.query.text)})
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
