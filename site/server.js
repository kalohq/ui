const path = require('path');
const fs = require('fs');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const {createEngine: createReconEngine} = require('recon-engine');
const {getConfig: getReconConfig} = require('recon-config');
const glob = require('glob');
const {camelCase, upperFirst} = require('lodash');
const marked = require('marked');

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

  /** Import Markdown documentation files */
  glob.sync('src/components/**/README.md', {cwd}).map(docPath => {
    const fullDocumentationPath = path.resolve(cwd, docPath);

    const componentName = docPath
      .replace(/src\/components\//, '')
      .replace(/\/README.md/, '');

    console.log(`Converting markdown for ${componentName}`);

    return fs.writeFileSync(
      path.join(__dirname, `./content/components/${componentName}.html`),
      marked(fs.readFileSync(fullDocumentationPath, 'utf-8')),
      'utf8'
    );
  });

  // TODO: Move this hackiness out of here
  const storyPaths = glob
    .sync('src/**/__stories__/**/*.stories.js', {cwd})
    .map(storyPath => {
      const fullStoryPath = path.resolve(cwd, storyPath);
      const name = upperFirst(
        camelCase(path.parse(path.parse(storyPath).name).name)
      );

      return [name, fullStoryPath];
    });
  fs.writeFileSync(
    path.resolve(__dirname, '.stories.js'),
    `// This file is generated. Do not edit!
// import dynamic from 'next/dynamic';
${storyPaths
      .map(
        p =>
          `export const ${p[0]} = /*dynamic(*/import('${p[1]}')/*, {ssr: false})*/;`
      )
      .join('\n')}`,
    'utf8'
  );

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
