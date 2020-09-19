module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  env: {
    browser: true,
  },
};

// module.exports = {
//   extends: ["airbnb-base", "plugin:prettier/recommended"],
//   rules: {
//     "no-console": "off",
//   },
// };
