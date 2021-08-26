const common = require('@dwmt/commitlint-common-numbered-type')

function parseCommitMessage (message) {
  const output = {
    errors: [],
    hasError (error) {
      return this.errors.includes(error)
    }
  }

  if (isEmpty(message)) {
    output.errors.push(ERRORS.emptyMessage)
    return output
  }

  let header = message.split('\n')[0]

  if (header[0] !== '#') {
    output.errors.push(ERRORS.missingHash)
  } else {
    header = header.slice(1)
  }

  const headerParts = header.split(common.DEFAULTS.commitMessageSeparator)
  if (headerParts.length < 2) {
    output.errors.push(ERRORS.missingCommitSeparator)
    return output
  }

  output.issueNumberAndType = headerParts[0]
  if (isEmpty(output.issueNumberAndType)) {
    output.errors.push(ERRORS.missingIssueNumberAndType)
    return output
  }

  const issueNumberAndTypeParts = output.issueNumberAndType.split(common.DEFAULTS.typeSeparator)
  if (issueNumberAndTypeParts.length !== 2) {
    output.errors.push(ERRORS.invalidIssueNumberAndType)
    return output
  }

  output.issueNumber = issueNumberAndTypeParts[0]
  output.type = issueNumberAndTypeParts[1]

  validateIssueNumber(output.issueNumber, output.errors)

  return output
}

function isEmpty (str) {
  return !str || str.trim() === ''
}

const ISSUE_NUMBER_PATTERN = /^[0-9]+$/

function validateIssueNumber (issueNumber, errors) {
  if (!ISSUE_NUMBER_PATTERN.test(issueNumber)) {
    errors.push(ERRORS.invalidIssueNumber)
  }
}

const ERRORS = {
  emptyMessage: 'emptyMessage',
  missingHash: 'missingHash',
  missingCommitSeparator: 'missingCommitSeparator',
  missingIssueNumberAndType: 'missingTaskIdAndType',
  invalidIssueNumberAndType: 'invalidIssueNumberAndType',
  invalidIssueNumber: 'invalidIssueNumber'
}

module.exports = {
  parseCommitMessage,
  ERRORS
}
