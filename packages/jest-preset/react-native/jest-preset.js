const fs = require('fs');
const clone = require('lodash/cloneDeep');
const path = require('path');

const presets = [clone(require('jest-expo/ios/jest-preset')), clone(require('jest-expo/android/jest-preset'))];

const projects = presets.map(preset => {
  preset.roots = ['<rootDir>/src', ...(fs.existsSync(path.resolve('jest')) ? ['jest'] : [])];
  preset.setupFiles = [
    ...(preset.setupFiles ?? []),
    '@ryotan-vision-camera-sandbox/jest-preset/react-native/setup/react-native.js',
    '@ryotan-vision-camera-sandbox/jest-preset/react-native/setup/react-native-gesture-handler.js',
    '@ryotan-vision-camera-sandbox/jest-preset/react-native/setup/react-native-reanimated.js',
  ];
  preset.moduleNameMapper = {
    ...(preset.moduleNameMapper ?? {}),
    // WORKAROUND: Suppress warning about usage of `act`.
    //   https://github.com/callstack/react-native-testing-library/issues/379#issuecomment-1133038481
    //   https://github.com/testing-library/react-hooks-testing-library/issues/825#issuecomment-1119588405
    '^asap$': '@ryotan-vision-camera-sandbox/jest-preset/react-native/workaround/asap.js',
    '^asap/raw$': '@ryotan-vision-camera-sandbox/jest-preset/react-native/workaround/asap.js',
  };
  return preset;
});

module.exports = {projects};
