module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@ryotan-vision-camera-sandbox/babel-preset/package'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
