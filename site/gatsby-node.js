const path = require('path');
const fs = require('fs');
const slugify = require('slug');
const glob = require('glob');

const {camelCase, upperFirst} = require('lodash');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    /** @TODO write a proper REGEX */
    const componentName = relativePath
      .replace(/\//, '')
      .replace(/\/README\//, '');

    // if (!slug && relativePath.includes('components')) {
    // Generate final path + graphql fields for blog posts

    let slug = `/components/${slugify(componentName)}/`;

    if (!slug) {
      slug = relativePath;
    }

    createNodeField({
      node,
      name: `componentName`,
      value: componentName,
    });

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// exports.onPreBootstrap = () => {
//   console.log('Starting generating Stories import bundle');

//   const cwd = path.resolve(process.cwd(), '../');

//   const storyPaths = glob
//     .sync('src/**/__stories__/**/*.stories.js', {cwd})
//     .map(storyPath => {
//       const fullStoryPath = path.resolve(cwd, storyPath);
//       const name = upperFirst(
//         camelCase(path.parse(path.parse(storyPath).name).name)
//       );

//       return [name, fullStoryPath];
//     });

//   fs.writeFileSync(
//     path.resolve(__dirname, './src/data/stories.js'),
//     `// This file is generated. Do not edit!
// ${storyPaths.map(p => `export const ${p[0]} = import('${p[1]}');`).join('\n')}`,
//     'utf8'
//   );

//   console.log('Finished generating stories import bundle');
// };

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/component.js`);
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
              componentName
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Create pages for each markdown file.
    posts.forEach(({node}) => {
      const {slug} = node.fields;
      createPage({
        path: slug,
        component: blogPostTemplate,
        context: {
          slug,
        },
      });
    });

    return posts;
  });
};

exports.modifyWebpackConfig = ({config, env}) => {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json'],
    },
  });
  return config;
};
