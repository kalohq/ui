/* @flow */
/* eslint-env jest */
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';

import JSTokens from '../tokens.js';
import CSSTokens from '../tokens.css.js';
import ThemeTokens from '../tokens.theme.js';

expect.addSnapshotSerializer(serializer);

describe('Tokens', () => {
  test('should be present', () => {
    expect(JSTokens).toMatchSnapshot();
  });

  test('should exist in CSS form', () => {
    expect(CSSTokens).toBeDefined();
  });

  test('should exist in theme form', () => {
    expect(ThemeTokens).toBeDefined();
  });
});
