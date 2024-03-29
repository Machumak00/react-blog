module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:i18next/recommended",
        "prettier",
    ],
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ["**/src/**/*.test.{ts,tsx}"],
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["tsconfig.json"],
        createDefaultProgram: true,
    },
    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "i18next",
        "machumak-plugin",
        "unused-imports",
    ],
    rules: {
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [".js", ".jsx", ".tsx"],
            },
        ],
        "unused-imports/no-unused-imports": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "i18next/no-literal-string": [
            "warn",
            {
                markupOnly: true,
                ignoreAttribute: [
                    "data-testid",
                    "to",
                    "reducerKey",
                    "view",
                    "target",
                    "justify",
                    "align",
                    "direction",
                    "gap",
                    "role",
                    "as",
                    "borderRadius",
                ],
            },
        ],
        "@typescript-eslint/consistent-type-assertions": "off",
        "react/display-name": [
            0,
            {
                ignoreTranspilerName: true,
            },
        ],
        "@typescript-eslint/no-confusing-void-expression": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-invalid-void-type": "off",
        "n/no-callback-literal": "off",
        "machumak-plugin/path-checker": [
            "error",
            {
                alias: "@",
            },
        ],
        "machumak-plugin/public-api-imports": [
            "error",
            {
                alias: "@",
                testFilePatterns: [
                    "**/*.test.*",
                    "**/*.story.*",
                    "**/StoreDecorator.tsx",
                ],
            },
        ],
        "machumak-plugin/layer-imports": [
            "error",
            {
                alias: "@",
                ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
            },
        ],
        "@typescript-eslint/consistent-type-imports": "off",
        "import/order": [
            "error",
            {
                pathGroups: [
                    {
                        pattern: "@/**",
                        group: "external",
                        position: "after",
                    },
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: false,
                },
            },
        ],
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/method-signature-style": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
    },
};
