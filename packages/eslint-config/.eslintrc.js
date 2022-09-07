module.exports = {
  root: true,
  extends: './default.js',
  // Suppress warning:
  // > Warning: React version was set to "detect" in eslint-plugin-react settings,
  // > but the "react" package is not installed in this package. Assuming latest React version for linting.
  settings: {react: {version: '1000.0.0'}},
};
