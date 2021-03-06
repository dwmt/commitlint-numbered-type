const { parser, rules, Success, Failure } = require('../common')

module.exports = {
  name: rules.names.commitMessageSeparator,
  rule (parsed, _when, separator = rules.defaultValues.commitMessageSeparator) {
    if (parsed.hasError(parser.errors.missingCommitSeparator)) {
      return Failure(`Please separate the part containing the issue number and the type with "${separator}" from the rest of the message.`)
    }

    return Success()
  }
}
