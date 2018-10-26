module.exports = {
  "extends": [
    "tslint:latest",
    "tslint-react",
    "tslint-config-prettier"
  ],
  "rules": {
    "object-literal-sort-keys": false, // cannot be done automatically. Takes up too much time.
    "no-namespace": false // Is official typescript feature. Don't understand why this should not be allowed
  }
};