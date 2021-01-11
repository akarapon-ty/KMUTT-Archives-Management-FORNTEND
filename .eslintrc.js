module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [0, 'never'],
    'react/prop-types': 'off',
    quotes: [1, 'single'],
    semi: [1, 'never'],
    'linebreak-style': [0, 'windows'],
    'no-unused-vars': [1],
    'max-len': [1, 250],
    'consistent-return': [0],
  },
}
