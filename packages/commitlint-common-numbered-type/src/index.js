const RULES = {
  hashMissing: 'numbered-type-hash-missing',

  issueNumberEmpty: 'numbered-type-issue-number-empty',
  issueNumberNumeric: 'numbered-type-issue-number-numeric',

  issueNumberAndTypeEmpty: 'numbered-type-issue-number-and-type-empty',

  typeCase: 'numbered-type-type-empty',
  typeSeparator: 'numbered-type-type-separator',
  typeEmpty: 'numbered-type-type-empty',
  typeEnum: 'numbered-type-type-enum',

  commitMessageSeparator: 'numbered-type-commit-message-separator',

  messageEmpty: 'numbered-type-message-empty'
}

const VALUES = {
  lowercase: 'lowercase',
  uppercase: 'uppercase',
  any: 'any'
}

const DEFAULTS = {
  typeCase: VALUES.lowercase,
  typeSeparator: '/',
  typeEnum: undefined,

  commitMessageSeparator: ':'
}

const LEVEL = {
  disabled: 0,
  warning: 1,
  error: 2
}

const APPLICABLE = {
  always: 'always',
  never: 'never'
}

module.exports = {
  RULES,
  VALUES,
  DEFAULTS,
  LEVEL,
  APPLICABLE
}
