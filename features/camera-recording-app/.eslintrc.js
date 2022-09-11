module.exports = {
  extends: ['@ryotan-vision-camera-sandbox/eslint-config/native'],
  rules: {
    // https://eslint.org/docs/latest/rules/no-restricted-imports
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['SafeAreaProvider', 'SafeAreaView'],
            message: 'Please use SafeAreaProvider and SafeAreaView from react-native-safe-area-context instead.',
          },
        ],
      },
    ],
  },
};
