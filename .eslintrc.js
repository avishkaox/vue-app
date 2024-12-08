module.exports = {
  parser: "babel-eslint", // or '@babel/eslint-parser'
  parserOptions: {
    requireConfigFile: false, // Use this if Babel config isn't needed
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential", // For Vue 3
  ],
  rules: {
    // Add any custom rules if needed
  },
};
