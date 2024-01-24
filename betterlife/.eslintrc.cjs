/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // "prettier/prettier": "warn", // use eslitn to run prettier
    quotes: [2, 'double', 'avoid-escape'],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-indent': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering']
      }
    ],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'react/destructuring-assignment': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never'
      }
    ],
    'object-curly-newline': [
      'off',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    'no-restricted-syntax': ['off'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25
      }
    ],
    'react-hooks/exhaustive-deps': 'error',
    'no-multi-spaces': 'error',
    'no-unused-expressions': 'error',
    'space-before-blocks': 'error'
  }
}
