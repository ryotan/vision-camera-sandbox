module.exports = {
  expo: {
    name: 'Vision Camera (Expo)',
    slug: 'expo-managed-app',
    version: '1.0.0',
    platforms: ['ios', 'android'],
    jsEngine: 'hermes',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      enabled: false,
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['src/**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'pw.itr0.sandbox.vision.camera',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'pw.itr0.sandbox.vision.camera',
    },
    plugins: [
      [
        'react-native-vision-camera',
        {
          cameraPermissionText: '$(PRODUCT_NAME) needs access to your Camera.',

          // optionally, if you want to record audio:
          enableMicrophonePermission: true,
          microphonePermissionText: '$(PRODUCT_NAME) needs access to your Microphone.',
        },
      ],
    ],
  },
};
