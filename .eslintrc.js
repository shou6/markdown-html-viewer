module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  },
  extends: [
    "prettier"
  ],
  plugins: [
    "prettier",
    "promise"
  ],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "arrow-body-style": "error",
    "arrow-spacing": "error",
    "generator-star-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        printWidth: 150
      }
    ]
  },
  globals: {
    $: false,
    jQuery: false
  }
};
