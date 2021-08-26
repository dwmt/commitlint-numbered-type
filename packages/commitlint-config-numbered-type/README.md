# Commitlint Numbered Type | Config

Default configuration for the [numbered-type commitlint plugin](https://github.com/dwmt/commitlint-numbered-type).

## Configurable Rules

numbered-type offers the following configurable rules. By customizing these rules, you can define which messages should be accepted and rejected.

### numbered-type-type-enum

An enumeration of accepted types. If the type within the message is not included, then the message is rejected. By default, the value of this setting is `undefined`, which means that every type is accepted.

If you want to accept `feat` and `fix` only:

~~~~JavaScript
// commitlint.config.js
module.exports = {
  plugins: ['@dwmt/commitlint-plugin-numbered-type'],
  extends: ['@dwmt/commitlint-config-numbered-type'],
  rules: {
     // 2 sets the level of this rule to error.
     // always means that this rule should be applied as is
     // (the other value is "never", which inverts the rule) 
     'numbered-type-type-enum': [2, 'always', ['feat', 'fix']] 
  }
}
~~~~

## Further Information

Please see the [README of the parent monorepo](https://github.com/dwmt/commitlint-numbered-type/blob/master/README.md).
