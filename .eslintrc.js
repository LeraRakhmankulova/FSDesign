module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["off", "tab"],
    quotes: ["error", "double"],
    semi: ["off", "never"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent" : ["off", 4],
    "react/jsx-indent-props": ["off", 4],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".jsx", ".js", ".tsx"]},
    ],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "object-curly-spacing": ["error", "always", { arraysInObjects: false }],
    "import/no-unresolved": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-undef": "off",
    "linebreak-style": "off"
  },
}
