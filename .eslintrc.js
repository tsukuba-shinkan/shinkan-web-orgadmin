module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off',
    'import/order': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
