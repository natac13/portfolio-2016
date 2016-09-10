import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import fs from 'fs';
import morgan from 'morgan';

import connectToDB from './dbConnection.js';

import errorHandler from './routes/errorHandler.js';


const app = express();
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// connect to DB
// connectToDB(env, process.env.MONGO_URI);
app.use(morgan('combined', { stream: accessLogStream }));
app.use(compression());
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// server static files
// will server the static index.html page in production as well.
app.use(express.static(path.join(__dirname, '../build')));

// Routes
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
