module.exports = {
  extends: "stylelint-config-recommended",
  plugins: [],
  ignoreFiles: [],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
        ],
      },
    ],
    "no-descending-specificity": null,
  },
  customSyntax: "postcss-html",
};
