const { parser, rules, NotMyJob, Success, Failure } = require('../common')

module.exports = {
  name: rules.names.issueNumberNumeric,
  rule (parsed, _when) {
    if (!parsed.issueNumber) {
      return NotMyJob()
    }

    if (parsed.hasError(parser.errors.invalidIssueNumber)) {
      return Failure(`The provided issue number "${parsed.issueNumber}" is not a positive integer!`)
    }

    return Success()
  }
}
