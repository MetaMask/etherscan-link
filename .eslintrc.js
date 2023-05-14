module.exports = {
  root: true,
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-mocha'],
  ignorePatterns: ['!.eslintrc.js', 'dist/'],
  rules: {
    // TODO: Fix jsdoc comments and enable rules
    'jsdoc/require-description': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns': 'off',
  },
  overrides: [
    {
      extends: ['@metamask/eslint-config-nodejs'],
      files: ['.eslintrc.js', 'test/**/*.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: ['@metamask/eslint-config-typescript'],
      files: ['**/*.ts'],
    },
  ],
};
