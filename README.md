# DEPRECATED

This package is deprecated. Please use eslint / eslint-config-kingsquare

# tslint-config-kingsquare

This is the basic tslint config used by kingsquare.

To install and use do the following:

```
yarn add --dev tslint-config-kingsquare
```
also create a tslint.json:

```json
{
  "extends": "tslint-config-kingsquare"
}
```

That should do it!

## NOTE

Semver major number is based on tslint version.

## Use of Prettier

This config should work nicely with prettier. A config-file .prettierrc is adviced with

```
{
  "singleQuote": true
}
```