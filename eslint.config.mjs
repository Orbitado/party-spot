export default {
  extends: [
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsdoc/recommended",
  ],
  plugins: ["react", "tailwindcss", "@typescript-eslint", "import", "jsdoc"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { vars: "all", args: "after-used", argsIgnorePattern: "^_" },
        ],
      },
    },
  ],
};
