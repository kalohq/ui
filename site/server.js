const path = require('path');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const {createEngine: createReconEngine} = require('recon-engine');
const {getConfig: getReconConfig} = require('recon-config');

const routes = require('./routes');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
const app = next({
  dir: process.cwd(),
  dev: !IS_PRODUCTION,
});
const handler = routes.getRequestHandler(app);

// Start express
const express = require('express');
app.prepare().then(() => {
  const cwd = path.resolve(process.cwd(), '../');
  // TODO: getReconConfig should return appropriate cwd override if passed
  const reconConfig = getReconConfig({}, {cwd});
  // TODO: Add option to eagerly start crunching the numbers in recon
  const {schema} = createReconEngine(Object.assign({}, reconConfig, {cwd}));
  express()
    .use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    )
    .use(handler)
    .listen(PORT);
});
