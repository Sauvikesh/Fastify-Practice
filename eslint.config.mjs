module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json', // Path to your tsconfig.json file
  },
  plugins: ['@typescript-eslint'],
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
  ],
  rules: {
      // Additional rules or overrides can be added here
  },
};