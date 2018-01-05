/**
 * Converts all icons in the icon directory to symbols.
 */

const fs = require('fs');
const path = require('path');
const SVGSpriter = require('svg-sprite');

const ICONS_DIRECTORY = path.resolve(__dirname, '../src/icons/svg');
const OUT_DIRECTORY = path.resolve(__dirname, '../src/components/icon-symbols');

const spriter = new SVGSpriter({
  dest: OUT_DIRECTORY,
  mode: {
    symbol: true,
  },
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false,
    namespaceClassnames: false,
  },
});

const template = data => `
import React from 'react';
export default () => (
  ${data}
);
`;

const generate = () => {
  fs.readdir(ICONS_DIRECTORY, (err, files) => {
    if (err) return console.log(err); // eslint-disable-line no-console

    files.map(file => {
      const filePath = path.resolve(ICONS_DIRECTORY, file);
      return spriter.add(
        filePath,
        null,
        fs.readFileSync(filePath, {
          encoding: 'utf-8',
        })
      );
    });

    return spriter.compile((error, result) => {
      if (error) return console.log(error); // eslint-disable-line no-console
      const formattedData = result.symbol.sprite.contents
        .toString()
        .replace(/xlink:href/g, 'xlinkHref')
        .replace(/fill-opacity/g, 'fillOpacity')
        .replace(/fill-rule/g, 'fillRule')
        .replace(/clip-path/g, 'clipPath')
        .replace(
          'xmlns:xlink="http://www.w3.org/1999/xlink"',
          'style={{display: "none"}}'
        );
      return fs.writeFileSync(
        path.join(OUT_DIRECTORY, 'icon-symbols.js'),
        template(formattedData)
      );
    });
  });
};

generate();
