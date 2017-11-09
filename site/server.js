// server.js
const next = require('next');
const routes = require('./routes');
const app = next({
  dir: './',
  dev: process.env.NODE_ENV !== 'production',
});
const handler = routes.getRequestHandler(app);

// Start express
const express = require('express');
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000);
});
