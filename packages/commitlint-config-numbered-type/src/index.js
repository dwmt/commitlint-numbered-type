const { RULES, DEFAULTS, LEVEL, APPLICABLE } = require('@dwmt/commitlint-common-numbered-type')

module.exports = {
  rules: {
    [RULES.issueNumberEmpty]: [LEVEL.error, APPLICABLE.always],
    [RULES.issueNumberNumeric]: [LEVEL.error, APPLICABLE.always],

    [RULES.issueNumberAndTypeEmpty]: [LEVEL.error, APPLICABLE.always],

    [RULES.typeCase]: [LEVEL.error, APPLICABLE.always, DEFAULTS.typeCase],
    [RULES.typeSeparator]: [LEVEL.error, APPLICABLE.always, DEFAULTS.typeSeparator],
    [RULES.typeEmpty]: [LEVEL.error, APPLICABLE.always],
    [RULES.typeEnum]: [LEVEL.error, APPLICABLE.always, DEFAULTS.typeEnum],

    [RULES.commitMessageSeparator]: [LEVEL.error, APPLICABLE.always, DEFAULTS.commitMessageSeparator],

    [RULES.messageEmpty]: [LEVEL.error, APPLICABLE.always]
  }
}
