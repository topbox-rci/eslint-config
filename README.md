# ESLint Config

This is a central location to keep eslinting shared amongst all of the projects.

## Requirements

* Node: 6.5.0

### Usage
In your root `.eslintrc.json`, extend the `es6.js` ruleset:

```
{
    "extends": "@topbox-rci/eslint-config/configs/es6.js"
}
```

For any subfolder that uses react you can also include an `.eslintrc.json` that extends the `react.js` ruleset:

```
{
    "extends": "@topbox-rci/eslint-config/configs/react.js"
}
```

### Test

    npm test
