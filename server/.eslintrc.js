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
        "eol-last": "error",
        "linebreak-style": [ "error", "unix" ],
        "indent": [ "error", 4 ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "space-in-parens": [ "error", "always", { "exceptions": ["{}"] } ],
    },
};

