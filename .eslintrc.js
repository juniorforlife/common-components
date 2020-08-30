module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'rules': {
    'quotes': ['error', 'single'],
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
  },
};
