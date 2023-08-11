module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      // Add other ESLint configurations or plugins as needed
    ],
    rules: {
      // Add or override specific ESLint rules as needed
      // For example, you can disable a rule by setting it to "off"
      // 'no-console': 'off',
      // 'no-unused-vars': 'off',
      // Add other custom rules here
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  