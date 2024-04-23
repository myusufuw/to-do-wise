module.exports = {
  root: true,
  env: { 
    'browser': true, 
    'es2020': true, 
    'node': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'perfectionist',
    '@stylistic/js'
  ],
  rules: {
    'perfectionist/sort-named-imports': [
      1,
      {
        'order': 'asc',
        'type': 'line-length'
      }
    ],
    'perfectionist/sort-named-exports': [
      1,
      {
        'order': 'asc',
        'type': 'line-length'
      }
    ],
    'perfectionist/sort-exports': [
      1,
      {
        'order': 'asc',
        'type': 'line-length'
      }
    ],
    'perfectionist/sort-imports': [
      1,
      {
        'order': 'asc',
        'type': 'line-length',
        'newlines-between': 'always',
        'groups': [
          [
            'builtin',
            'external'
          ],
          'custom-mui',
          'custom-routes',
          'custom-hooks',
          'custom-utils',
          'internal',
          'custom-components',
          'custom-sections',
          'custom-types',
          [
            'parent',
            'sibling',
            'index'
          ],
          'object',
          'unknown'
        ],
        'custom-groups': {
          'value': {
            'custom-mui': '@mui/**',
            'custom-routes': 'src/routes/**',
            'custom-hooks': 'src/hooks/**',
            'custom-utils': 'src/utils/**',
            'custom-components': 'src/components/**',
            'custom-sections': 'src/sections/**',
            'custom-types': 'src/types/**'
          }
        },
        'internal-pattern': [
          'src/**'
        ]
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    'react/jsx-indent' : ['error', 2],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    '@stylistic/js/no-trailing-spaces': 'error',
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    '@stylistic/js/array-bracket-spacing': ['error', 'always'],
    '@stylistic/js/arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }]
  },
}
