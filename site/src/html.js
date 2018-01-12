import React from 'react';

import favicon from 'static/favicon.png';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require('!raw-loader!../public/styles.css'); // eslint-disable-line global-require, import/no-webpack-loader-syntax, import/no-unresolved
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
}

export default function Html({headComponents, body, postBodyComponents}) {
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        key="gatsby-inlined-css"
        dangerouslySetInnerHTML={{__html: stylesStr}}
      />
    );
  }
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Documentation, tooling, and resources for the Kalo Product team"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href={favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kalo Design System</title>
        {headComponents}
        {css}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
      </body>
    </html>
  );
}
