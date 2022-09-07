<!-- see https://github.com/othneildrew/Best-README-Template for more details about better README -->
<div id="top"></div>

<!-- ABOUT -->
## About

Provides Jest presets to use in this monorepo.

### Basic preset

The basic preset configuring directory structure etc.

* Inherit `jest-expo` default preset.
* Set `roots` to `src` and `jest`. Use `jest` directory to place `__mocks__` and other jest related files. (I don't want to put `__mocks__` in the `src` directory.)

### Preset for React Native

The preset for React Native apps and packages contains 2 project configuration: iOS and Android.

Each project is configured as following:

* Same directory structure from the basic preset.
* Inherit `jest-expo` preset for each platform.
* Setups of React Native, React Native Reanimated, React Native Gesture Handler.
* Workaround for the Promise issues.

### Built With

* [jest-expo][jest-expo-url]


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

If you use the preset for React Native:

* React Native, React Native Reanimated, React Native Gesture Handler


<!-- USAGE EXAMPLES -->
## Usage

To use the basic preset:

```javascript
module.exports = {
  preset: '@ryotan-vision-camera-sandbox/jest-preset',
};
```

To use the preset for React Native apps and packages:

```javascript
module.exports = {
  preset: '@ryotan-vision-camera-sandbox/jest-preset/react-native',
};
```


<!-- LICENSE -->
## License

This repository is licensed under the Apache License, Version 2.0. See [LICENSE](../../LICENSE) for the full license text.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[jest-expo-url]: https://github.com/expo/expo/tree/main/packages/jest-expo
[npm-workspace-url]: https://docs.npmjs.com/cli/v8/using-npm/workspaces
