'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'import', 'flowtype', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@kalo/eslint-config',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  settings: {
    'import/ignore': ['node_modules', /.css$/],
    'import/resolver': {
      node: {
        moduleDirectory: ['src', 'src/components', 'node_modules'],
      },
    },
  },
  globals: {
    window: true,
    document: true,
    graphql: true,
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: false,
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
    'import/no-duplicates': 2,
    'import/first': 0,
    'no-duplicate-imports': 0,
    'no-useless-escape': 0,
    'arrow-parens': 0,
    'no-unused-vars': [
      2,
      {
        varsIgnorePattern: '^__*IGNORED',
        argsIgnorePattern: '^__*IGNORED',
        args: 'after-used',
      },
    ],
    'object-property-newline': [2, {allowMultiplePropertiesPerLine: true}],
    // definite nice to haves...
    'react/no-unused-prop-types': 0, // lots to type at this point... and flow may overtake soon
    'react/prop-types': 0, // lots to type at this point... and flow may overtake soon
    'react/no-danger': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-no-target-blank': 0, // security: should certainly address this at some point!
    'no-mixed-operators': 0, // one to raise in an infra meeting
    // breakages which will probably be resolved by deps over time
    'generator-star-spacing': 0, // babel issue
    'require-yield': 0, // babel issue
    'import/no-named-as-default': 0, // lots of false-positives
    'import/newline-after-import': 0, // lots of false-positives (confusing)
    /**
     *  maybe but probably not a priority
     */
    'no-plusplus': 0, // maybe but probably not a priority
    'no-restricted-properties': 0,
    'import/extensions': 0,
    'react/no-children-prop': 0,
    'react/sort-comp': 0,
    'operator-assignment': [0, 'never'], // incorrectly detects based on our usage
    'import/no-extraneous-dependencies': 0, // we define deps used during dev as devDep
    'react/jsx-filename-extension': 0, // more language extensions than just jsx...
    'react/require-default-props': 0, // props are defined with flow
    'import/prefer-default-export': 0, // generally prefer collections of utils than many micro-modules
    'arrow-body-style': 0, // freeeedom
    'no-extra-boolean-cast': 0, // no issues with a bit of extra clarity!
    'prefer-arrow-callback': 0, // no issues with a bit of extra clarity (from named funcs)!
    'react/no-find-dom-node': 0, // IS really useful/required *sometimes*
    'react/no-multi-comp': 0, // Useful to have internal breakup of components
    'new-cap': 0, // bad for performance + flow doesn’t allow it with Immutable.js
    'flowtype/space-after-type-colon': 0, // broken at the time of writing – false negatives
    'flowtype/space-before-type-colon': 0, // broken at the time of writing – false negatives
    'no-useless-rename': 0, // sometimes good for clarity
  },
};
