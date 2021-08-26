const { rules, NotMyJob, Failure } = require('../common')

module.exports = {
  name: rules.names.issueNumberEmpty,
  rule (parsed, _when) {
    if (parsed.issueNumberAndType && !parsed.issueNumber) {
      return Failure(`The issue number and type segment "${parsed.taskIdAndType}" (the part that precedes ":") contains no valid issue number! Please add an issue number before the single "/" separator.`)
    }

    return NotMyJob()
  }
}
