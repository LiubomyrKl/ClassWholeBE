const express = require('express');
const dotenv = require('dotenv');
const path = require('path')
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});