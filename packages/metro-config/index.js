// Learn more https://docs.expo.io/guides/customizing-metro

const {getDefaultConfig: getDefaultExpoConfig} = require('@expo/metro-config');

function getDefaultConfig(projectRoot) {
  const config = getDefaultExpoConfig(projectRoot);

  // Configure react-native-svg-transformer
  // https://github.com/kristerkari/react-native-svg-transformer#step-3-configure-the-react-native-packager
  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
  config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

  return config;
}

module.exports = {
  getDefaultConfig,
};
