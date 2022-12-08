const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8008;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
