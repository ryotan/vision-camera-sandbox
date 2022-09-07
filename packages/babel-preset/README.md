<!-- see https://github.com/othneildrew/Best-README-Template for more details about better README -->
<div id="top"></div>

<!-- ABOUT -->
## About

Creating babel config for each app or package is boring work and it's hard to maintenance. So use shared preset in monorepo.

### Preset for packages

The preset for packages inherits `babel-preset-expo` and configure directory structure as follows.

* Set `@/` as an alias of `./src/`.

### Preset for apps

The preset for apps inherits `babel-preset-expo` and configure directory structure as follows.

* Set `@/` as an alias of `./src/app`.
* Set `@lib/` as an alias of `./src/lib`.
* Set `@assets/` as an alias of `./src/assets`.

### Built With

* [babel-preset-expo][babel-preset-expo-url]
* [babel-plugin-module-resolver][babel-plugin-module-resolver-url]


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Requires `@babel/core` and `babel-preset-expo` as dependencies or devDependencies.


<!-- USAGE EXAMPLES -->
## Usage

To use the preset for packages:

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@ryotan-vision-camera-sandbox/babel-preset/package'],
    plugins: [/* snip */],
  };
};
```

To use the preset for apps:

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@ryotan-vision-camera-sandbox/babel-preset/app'],
    plugins: [/* snip */],
  };
};
```


<!-- LICENSE -->
## License

This repository is licensed under the Apache License, Version 2.0. See [LICENSE](../../LICENSE) for the full license text.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[babel-preset-expo-url]: https://github.com/expo/expo/tree/main/packages/babel-preset-expo
[babel-plugin-module-resolver-url]: https://github.com/tleunen/babel-plugin-module-resolver
