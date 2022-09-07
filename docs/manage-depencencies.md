# Manage dependencies

## Dependency version management

Managing version upgrades and compatibility is a very tedious and difficult task. To alleviate some of this pain, I have
decided to manage versions according to the following policy.

* Define main dependency version
  * Expo SDK (react, react-native, expo, react-native-reanimated etc.)
  * @tanstack/react-query
  * @shopify/restyle
  * etc.
* Install these packages as `devDependencies` of the **root** `package.json`
  * Only `expo` needs to be added to `dependencies`. Otherwise, when you add a package with `expo install`, it will not
    be installed with the version that has been tested with Expo SDK.
* To use these packages of the main version in workspace, specify version as `*`
* To use these packages of another version, specify version to use

If the workspace (app or package) is public and used in other repositories, you should not use `*`. However, at least
for this repository, I do not plan to publish packages.

## Add dependency of the main version

To install packages into workspace which has `expo` in `dependencies`, run the following command **in the root directory**:

```shell
npx expo install <package>
```

To install packages as `devDependencies`, it requires a little complicated process....

1. Install packages using `expo install`
   ```shell
   npx expo install <package>
   ```
2. Packages will be installed as `dependencies`. So move lines of installed packages in `dependencies` to `devDependencies`
   ```diff json
     "dependencies": {
   -   ...,
   +   ...
   -   "<package>": "<package-version>"
     },
     "devDependencies": {
   -   ...
   +   ...,
   +   "<package>": "<package-version>"
     },
   ```

## Use dependencies in each workspace

### Use dependencies of the main version

Add `"<package>": "*"` to `dependencies` etc.

### Use dependencies of another version

If app or package has `expo` in `dependencies`, run `npx expo install <package>[@<version>]` in the **workspace dir**. Otherwise, run `npm install [-D] <package>[@<version>]` in the **workspace dir**
