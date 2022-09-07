module.exports = {
  extends: [
    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.*',
          '**/*.spec.*',
          'jest/**',
          '.eslintrc.js',
          'babel.config.js',
          'jest.config.js',
          'metro.config.js',
        ],
      },
    ],
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    // WORKAROUND: Can not handle packages with the scope of this monorepo as the internal packages.
    //   When `import/internal-regex` includes the scope of this monorepo, `import/no-extraneous-dependencies`
    //   will not report errors about extraneous dependency usage of these packages.
    //   Because using packages not listed in dependencies is more critical problem than import order,
    //   removed the prefix from `import/internal-regex`
    //     cf: https://github.com/import-js/eslint-plugin-import/issues/1678
    'import/internal-regex': '^(@assets/*|@lib/*)',
    // 'import/internal-regex': '^(@ryotan-*|@assets/*|@lib/*)',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      plugins: [
        // https://github.com/gund/eslint-plugin-deprecation
        'deprecation',
      ],
      rules: {
        'deprecation/deprecation': 'error',
        // Consistent type usage
        // https://typescript-eslint.io/rules/consistent-type-definitions
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // https://typescript-eslint.io/rules/consistent-type-exports
        '@typescript-eslint/consistent-type-exports': 'error',
        // https://typescript-eslint.io/rules/consistent-type-imports
        '@typescript-eslint/consistent-type-imports': 'error',
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      extends: [
        // https://github.com/expo/expo/tree/master/packages/eslint-config-universe
        'universe/shared/typescript-analysis',
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      extends: [
        // https://github.com/jest-community/eslint-plugin-jest#shareable-configurations
        'plugin:jest/recommended',
      ],
      rules: {
        // you should turn the original rule off *only* for test files
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            // It is too strict to prohibit passing async functions to `onPress`, so disable the rule.
            checksVoidReturn: false,
          },
        ],
      },
    },
    {
      // Allow to use Node.js specific global variables like `__dirname` in the following files.
      files: ['.eslintrc.js', 'babel.config.js', 'jest.config.js', 'metro.config.js', 'jest/**'],
      globals: {
        __dirname: 'readonly',
      },
    },
  ],
  ignorePatterns: ['node_modules/', 'dist/'],
};
