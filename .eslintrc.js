const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  extends: [
    "eslint:recommended",
    isProduction ? "plugin:vue/vue3-recommended" : "plugin:vue/vue3-essential",
  ],
  plugins: ["vue"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  globals: {
    Shopify: "readonly",
  },
  ignorePatterns: [],
  rules: {
    "no-unused-vars": "error",
    quotes: "error",
  },
};
