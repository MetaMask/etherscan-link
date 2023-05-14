module.exports = {
  root: true,
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-mocha'],
  ignorePatterns: ['!.eslintrc.js', 'dist/'],
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
