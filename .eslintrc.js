module.exports = {
  root: true,
  ignorePatterns: ["!.eslintrc.js", "dist/"],
  overrides: [
    {
      files: [".eslintrc.js", "test/**/*.js"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["**/*.ts"],
    },
  ],
};
