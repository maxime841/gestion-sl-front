module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:import/typescript', 'standard'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ignorePatterns: ['*.json', '.eslintrc.js', '*.css', 'tailwind.config.js'],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      camelcase: 0,
      'no-unused-vars': 0,
      indent: 0,
      'multiline-ternary': 0,
      'no-undef': 0,
      'space-before-function-paren': 0,
      'comma-dangle': [
        'error',
        {
          arrays: 'ignore',
          objects: 'only-multiline',
          imports: 'only-multiline',
          exports: 'only-multiline',
          functions: 'ignore',
        },
      ],
      '@typescript-eslint/no-invalid-void-type': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/space-before-function-paren': 0,
      '@typescript-eslint/consistent-type-assertions': 0,
      '@typescript-eslint/consistent-type-definitions': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/prefer-nullish-coalescing': 0,
      'no-unused-vars': 0,
      indent: 0,
      'multiline-ternary': 0,
      'no-undef': 0,
      'space-before-function-paren': 0,
    },
  }
  