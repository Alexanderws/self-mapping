module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    "no-multi-spaces": ["error"],
    "react/prop-types": 0,
    "no-useless-escape": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
};
