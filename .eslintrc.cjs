module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/stylistic",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "jsx-a11y"],
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: true,
      typescript: {
        alwaysTryTypes: true,
        project: ["./packages/*/tsconfig.json"],
      },
    },
    react: {
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "16.8.0",
    },
  },
  overrides: [
    {
      files: ["*.js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
  ],
  rules: {
    "eol-last": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "max-len": 0,
    "no-console": 0,
    indent: 0,
    "no-use-before-define": 0,
    "no-unused-expressions": "off",
    "space-infix-ops": 1,
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "import/no-cycle": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // `react` related packages & side effect imports come first.
          ["^react", "^\\u0000"],
          /*
           * Node.js builtins. You could also generate this regex if you use a `.js` config.
           * For example: `^(${require("module").builtinModules.join("|")})(/|$)`
           */
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // Other packages.
          ["^\\w", "^@\\w"],
          // internal package
          [
            "^(@|@assets|assets|@styles|styles|@static|static|@utils|utils|@tools|tools|@hooks|hooks|@pages|pages|@components|components|@component|component|@service|service|@services|services|@constants|@store|store|@types|types|@src|src|@providers|providers|@containers|containers|@layout|layout)(/.*|$)",
          ],
          [
            // Parent imports. Put `..` last.
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            // Other relative imports. Put same-folder imports and `.` last.
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
          [
            // Image imports.
            "^.+\\.(gif|png|jpg|jpeg|webp|svg)$",
            // Style imports.
            "^.+\\.(sass|scss|less|css)$",
          ],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/prefer-namespace-keyword": 0,
    "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-unused-expressions": 2,
    "@typescript-eslint/consistent-type-imports": [2, { disallowTypeAnnotations: false }],
  },
};
