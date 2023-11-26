module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    '__dirname': true,
    'process': true
  },
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'keyword-spacing': ['warn', {
      'before': true,
      'after': true
    }],
    'object-curly-spacing': ['warn', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],
    'space-before-blocks': ['warn'],
    'arrow-parens': 0,
    'comma-dangle': 0,
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-named-default': 0,
    'max-len': 0,
    'no-param-reassign': ['warn', {
      'props': false
    }],
    'no-case-declarations': 0,
    'no-console': 0,
    'no-debugger': 'warn',
    'no-else-return': ['error', {
      'allowElseIf': true
    }],
    'no-restricted-syntax': 0,
    'no-trailing-spaces': ['error', {
      'ignoreComments': true
    }],
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'operator-linebreak': ['warn', 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'prefer-object-spread': 0,
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'radix': 0,
    // 'space-before-function-paren': ['error', 'always'],
  }
}
