import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
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
        <meta name="description" content="Gatsby example site using Emotion" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gatsby Emotion</title>
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
