const clone = require('lodash/cloneDeep');

const preset = clone(require('jest-expo/jest-preset'));

// __mocks__ディレクトリをjestディレクトリ内に配置したいので、ルートディレクトリにjestを設定しています。
preset.roots = ['<rootDir>/src', 'jest'];

module.exports = preset;
