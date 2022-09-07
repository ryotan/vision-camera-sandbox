module.exports = {
  extends: [
    // https://github.com/expo/expo/tree/master/packages/eslint-config-universe
    'universe/native',
    './shared',
  ],
  overrides: [
    {
      files: ['metro.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
