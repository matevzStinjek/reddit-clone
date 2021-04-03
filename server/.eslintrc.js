module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-inferrable-types": [ "warn", { "ignoreParameters": true } ],
        "@typescript-eslint/no-unused-vars": "warn",
        "comma-dangle": ["error", "always-multiline"],
        "eol-last": "error",
        "linebreak-style": [ "error", "unix" ],
        "indent": [ "error", 4, { "SwitchCase": 1 } ],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-else-return": "error",
        "no-trailing-spaces": "error",
        "no-unreachable": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prefer-const": "error",
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "space-before-function-paren": [ "error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
        } ],
        "space-in-parens": [ "error", "always", { "exceptions": ["{}"] } ],
    },
};

