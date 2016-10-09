import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import fs from 'fs';
import morgan from 'morgan';


import errorHandler from './routes/errorHandler.js';
import mailRouter from './routes/mailer.js';

require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });


app.use(morgan('combined', { stream: accessLogStream }));
app.use(compression());
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// server static files
// will server the static index.html page in production as well.
app.use(express.static(path.join(__dirname, '../build')));

// Routes
app.use('/feedback', mailRouter);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
