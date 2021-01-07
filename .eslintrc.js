module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["/node_modules/**", "/build/**"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "object-shorthand": ["error", "always"]
  },
};
