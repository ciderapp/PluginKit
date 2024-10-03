import unjs from "eslint-config-unjs";

export default unjs({
  ignores: [
    // ignore paths
  ],
  rules: {
    "unicorn/filename-case": "off",
    // other rule overrides
  },
  markdown: {
    rules: {
      // markdown rule overrides
    },
  },
});
