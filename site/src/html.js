import React from 'react';

export default function Html({headComponents, body, postBodyComponents}) {
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
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
      </body>
    </html>
  );
}
