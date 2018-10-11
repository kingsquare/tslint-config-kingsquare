module.exports = {
    extends: 'tslint-config-airbnb',
    rules: {
        "max-line-length": [
            true,
            {
                "limit": 120,
                "ignore-pattern": "\\s*<" //jsx hack https://twitter.com/timtyrrell/status/689912501165658112
            }
        ],
        "react/jsx-filename-extension": [0],
        "react/prefer-stateless-function": [0],
        "react/react-in-jsx-scope": [0],
        "global-require": [1],
        "comma-dangle": [0],
        "no-param-reassign": [0], // e.g. reduce array to object
        "no-underscore-dangle": [0],
        "default-case": [0], // no default case in a switch is fine...
    }
};