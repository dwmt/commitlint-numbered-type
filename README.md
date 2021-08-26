# Commitlint Numbered Type

[![Continuous Integration](https://github.com/dwmt/commitlint-numbered-type/actions/workflows/continuous-integration.yml/badge.svg)](https://github.com/dwmt/commitlint-numbered-type/actions/workflows/continuous-integration.yml)
[![npm](https://img.shields.io/npm/v/@dwmt/commitlint-plugin-numbered-type)](https://www.npmjs.com/package/@dwmt/commitlint-plugin-numbered-type)
[![LICENSE](https://img.shields.io/github/license/dwmt/commitlint-numbered-type)](LICENSE)

Check if your commit messages start with an issue number and a type.

Accepts commit messages like:

~~~~
#1/feat: implemented a new message handler
#729/fix: removed erroneous handling of a key
~~~~

## Getting Started

If you want to lint your commits with numbered-type, follow along:

  1. Install Commitlint, Husky and the numbered-type dependencies
     ~~~~
     npm i @commitlint/cli husky @dwmt/commitlint-plugin-numbered-type @dwmt/commitlint-config-numbered-type -D
     ~~~~
  1. Configure [commitlint](https://github.com/conventional-changelog/commitlint)
     ~~~~JavaScript
     // commitlint.config.js
     module.exports = {
       plugins: ['@dwmt/commitlint-plugin-numbered-type'],
       extends: ['@dwmt/commitlint-config-numbered-type'],
     }
     ~~~~
  1. Setup [Husky](https://github.com/typicode/husky/). To lint commits before they are created you can use the `commit-msg` hook
     ~~~~
     mkdir .husky
     npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
     ~~~~

You can find detailed instructions regarding the local setup of Commitlint and Husky at [Commitlint Local Setup](https://commitlint.js.org/#/guides-local-setup).

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

## Packages

This is a monorepo containing the following packages:

  * [commitlint-common-numbered-type](./commitlint-common-numbered-type)
    * Definitions shared between the packages of the monorepo. For example rule names and rule default values.
  * [commitlint-config-numbered-type](./commitlint-config-numbered-type)
    * Default configuration for all the rules supported by numbered-type.
  * [commitlint-plugin-numbered-type](./commitlint-plugin-numbered-type)
    * The actual rule implementations.
