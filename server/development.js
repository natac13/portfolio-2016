import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

import connectToDB from './dbConnection.js';


import errorHandler from './routes/errorHandler.js';
import mailRouter from './routes/mailer.js';
// import javascriptProjects from './routes/javascriptProjects.js';

/** Webpack imports ***/
import webpack from 'webpack';
import config from '../webpack.config.js';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(config);
const webpackOptions = {
  publicPath: config.output.publicPath,
  quiet: false,
  // hides all the bundling file names
  noInfo: true,
  // adds color to the terminal
  stats: {
    colors: true,
  },
};


const app = express();
const port = process.env.PORT || 3013;
const env = process.env.NODE_ENV;

// connect to DB
connectToDB(env, process.env.MONGO_URI);
if (env === 'development') {
  // logging
  const morgan = require('morgan');
  app.use(morgan('dev'));
  // webpack middleware and hot reloading
  app.use(webpackMiddleware(compiler, webpackOptions));
  app.use(webpackHotMiddleware(compiler));
}

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// server static files same as output.publicPath from webpack.config.js
// app.use(express.static(path.join(__dirname, '../assets')));

// Routes
// app.use('/api/javascript-projects', javascriptProjects);
app.use(favicon(path.resolve(__dirname, '../favicon.ico')));
app.use('/feedback', mailRouter);

// base route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.use(errorHandler);


// Do not need to listen when testing routes.
// if (env !== 'test') {
  app.listen(port, 'localhost', () => {
    console.log(`Listening on port ${port}...`);
  });
// }

export default app;
