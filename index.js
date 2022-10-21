// common js module
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ Bye: 'buddy'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT); 
