module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src/app/',
            '@lib': './src/lib/',
            '@assets': './src/assets/',
          },
        },
      ],
    ],
  };
};
