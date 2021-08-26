const { parser, rules, Success, Failure } = require('../common')

module.exports = {
  name: rules.names.hashMissing,
  rule (parsed, _when) {
    if (parsed.hasError(parser.errors.missingHash)) {
      return Failure('The commit message must start with a hash (#) sign.')
    }

    return Success()
  }
}
