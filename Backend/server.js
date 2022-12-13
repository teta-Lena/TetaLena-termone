const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/', require('./calc'));
app.use(function (req, res, next) {
    return res.status(404).json({ error: 'Resource not found' });
  });

const { port,host } = process.env;
app.listen(PORT, () => console.log(`server listening on ${port}:${host}`));

module.exports = app;