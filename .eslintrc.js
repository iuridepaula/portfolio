module.exports = {
  env: {
    browser: true,
  },
  extends: "plugin:vue/vue3-essential",
  parserOptions: {
    ecmaVersion: "13",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    semi: "never",
    quotes: "single",
  },
};
