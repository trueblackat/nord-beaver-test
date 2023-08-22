require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb',
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": {
      "ts": "@typescript-eslint/parser",
      "<template>": "espree"
    },
    "sourceType": "module"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'import/no-unresolved': 'off', // странная ошибка eslint
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn", // https://github.com/typescript-eslint/tslint-to-eslint-config/issues/856
  },
  "ignorePatterns": ["dist/**/*", "node_modules/**/*", "vite.config.ts"],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
