// http://eslint.org/docs/user-guide/configuring

const myExtends = [
    "eslint:recommended",
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    "standard",
    // https://github.com/feross/eslint-config-standard-react
    "standard-react",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/@typescript-eslint",
];

let config = {
    root: true,
    globals: { bd: true },
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
        },
    },
    env: {
        es6: true,
        commonjs: true,
        browser: true,
        jest: true,
    },
    extends: myExtends,
    // https://github.com/yannickcr/eslint-plugin-react
    plugins: [
        "babel",
        "sort-class-members",
        "react",
        "jsx-a11y",
        "promise",
        // 'react-ssr',
        "jest",
        "react-functional-set-state",
        // 'unicorn',
    ],
    // add your custom rules here
    rules: {
        "no-console": false,
        "no-unused-expressions": 0,
        "babel/no-unused-expressions": 2,
        "react/no-did-update-set-state": 0,
        "react-functional-set-state/no-this-state-props": 2,
        "sort-class-members/sort-class-members": [
            2,
            {
                order: [
                    "[static-properties]",
                    "[static-methods]",
                    "[properties]",
                    "[conventional-private-properties]",
                    "constructor",
                    "[methods]",
                    "[conventional-private-methods]",
                ],
                accessorPairPositioning: "getThenSet",
            },
        ],
        "unicorn/prevent-abbreviations": 0,
        "unicorn/filename-case": 0,
        "no-console": 2,
        "prefer-const": true,
        "space-before-function-paren": [0, "never"],
        "keyword-spacing": 0,
        "eol-last": 0,
        "no-tabs": 0,
        indent: ["error", 4, { SwitchCase: 1 }],
        "object-shorthand": ["error", "never"],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": [0],
        // allow paren-less arrow functions
        "arrow-parens": 0,
        // allow async-await
        "generator-star-spacing": 0,
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    },
};

module.exports = config;
