<!-- see https://github.com/othneildrew/Best-README-Template for more details about better README -->
<div id="top"></div>

<!-- ABOUT -->
## About

With React Query, the number of client states you want to manage can be reduced considerably, and you can even manage all local states in a React Context. However, if there are dependencies between multiple Contexts, it becomes difficult to manage them with Contexts alone.
In such cases, React Query can be used to manage client state.

This package provides `useAppState`, which can handle client state in a manner similar to `useState` of React.

For more on the original thinking behind this package, see following resources:

* [Does React Query replace Redux, MobX or other global state managers?][react-query-replace-other-url]
* [React Queryを状態管理ライブラリとして使い倒そう！/useQStateのススメ - Qiita][qiita-useQState-url]


### Built With

* [React Query][react-query-url]


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* React Query v4

  ```sh
  npm install @tanstack/react-query
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ryotan/frontend-sandbox.git
   ```
2. Move to monorepo root directory
   ```sh
   cd monorepo
   ```
3. Install NPM packages
   ```sh
   npm clean-install
   ```

To run npm scripts, use [npm workspace][npm-workspace-url] feature. For example, to run `npm run build` of this module, add `-w packages/react-query-app-state` and run it in the root directory of this workspace.

```shell
npm run build -w packages/react-query-app-state
```


<!-- USAGE EXAMPLES
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_
-->


<!-- LICENSE -->
## License

This repository is licensed under the Apache License, Version 2.0. See [LICENSE](../../LICENSE) for the full license text.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[react-query-url]: https://tanstack.com/query/v4/docs/overview
[react-query-replace-other-url]: https://tanstack.com/query/v4/docs/guides/does-this-replace-client-state
[qiita-useQState-url]: https://qiita.com/uehaj/items/4e41e294181b3771e77a
