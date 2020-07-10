module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //空格
    'no-tabs':'off',
    'space-before-function-paren':'off',
    'space-before-blocks':0,
    'key-spacing':0,
    'no-trailing-spaces':0,
    'no-mixed-spaces-and-tabs':0,
    'semi': 0,
    'quotes': 0,
    'indent':0,
  }
}
