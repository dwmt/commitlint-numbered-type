const { rules, parser, Success, Failure } = require('../common')

module.exports = {
  name: rules.names.issueNumberAndTypeEmpty,
  rule (parsed, _when) {
    if (parsed.hasError(parser.errors.missingIssueNumberAndType)) {
      return Failure('The commit message contains no issue number and type!')
    }

    return Success()
  }
}
