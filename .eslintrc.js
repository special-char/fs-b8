module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
  },
}
