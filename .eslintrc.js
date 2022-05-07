module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'strict': 'warn',
    'eqeqeq': ['warn', 'smart'],
    'no-var': 'warn',
    'prefer-const': 'warn',
    'no-multi-assign': 'warn',
    'curly': ['warn', 'multi-line'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'no-multi-spaces': ['warn', { 'ignoreEOLComments': true }],
    'func-style': ['warn', 'declaration', { 'allowArrowFunctions': true }],
    'func-call-spacing': 'warn',
    'operator-linebreak': ['warn', 'after'],
    'no-duplicate-imports': 'warn',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
  },
};
