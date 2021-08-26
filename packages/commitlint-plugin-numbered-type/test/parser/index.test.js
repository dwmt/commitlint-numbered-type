/* eslint-env jest */

const { parseCommitMessage, ERRORS } = require('../../src/parser')

describe('commit message parser', () => {
  describe('should return empty meessage error', () => {
    errorOnlyTestCase({
      name: 'if the message is completely empty',
      message: '',
      expectedErrors: [ERRORS.emptyMessage]
    })

    errorOnlyTestCase({
      name: 'if the message is just whitespace',
      message: '\n  \t \n  \n',
      expectedErrors: [ERRORS.emptyMessage]
    })
  })

  describe('should return missing commit separator', () => {
    errorOnlyTestCase({
      name: 'if the message does not contain the configured separator',
      message: 'minor fixes',
      expectedErrors: [ERRORS.missingHash, ERRORS.missingCommitSeparator]
    })
  })

  describe('should return missing issue number and type', () => {
    errorOnlyTestCase({
      name: 'if the issue number and type are completely empty',
      message: ': minor fixes',
      expectedErrors: [ERRORS.missingHash, ERRORS.missingIssueNumberAndType]
    })

    errorOnlyTestCase({
      name: 'if the issue number and type are whitespace only',
      message: '    : minor fixes',
      expectedErrors: [ERRORS.missingHash, ERRORS.missingIssueNumberAndType]
    })
  })

  describe('should return invalid issue number and type', () => {
    testCase({
      name: 'if the issue number and the type are just a simple string',
      message: 'something: minor fixes',
      expected: {
        issueNumberAndType: 'something',
        errors: [ERRORS.missingHash, ERRORS.invalidIssueNumberAndType]
      }
    })
  })

  describe('should return invalid issue number', () => {
    testCase({
      name: 'if the issue number is not numeric',
      message: 'number/type: minor fixes',
      expected: {
        issueNumberAndType: 'number/type',
        issueNumber: 'number',
        type: 'type',
        errors: [ERRORS.missingHash, ERRORS.invalidIssueNumber]
      }
    })
  })

  describe('should work fine', () => {
    testCase({
      name: 'if the message is a simple, well-formatted text',
      message: '#11/type: minor fixes',
      expected: {
        issueNumberAndType: 'PROJECT-11/type',
        issueNumber: '11',
        type: 'type'
      }
    })

    testCase({
      name: 'if the message is a well-formatted, but multiline',
      message: '#11/type: minor fixes\n\nsome longer description\n\nBREAKING',
      expected: {
        issueNumberAndType: '11/type',
        issueNumber: '11',
        type: 'type'
      }
    })

    testCase({
      name: 'if the message is a well-formatted, but contains an URI',
      message: '#11/type: see confluence.com/something',
      expected: {
        issueNumberAndType: '11/type',
        issueNumber: '11',
        type: 'type'
      }
    })

    testCase({
      name: 'if the message is a well-formatted, but the type contains multiple words',
      message: '#11/two words: see confluence.com/something',
      expected: {
        issueNumberAndType: '11/two words',
        issueNumber: '11',
        type: 'two words'
      }
    })

    testCase({
      name: 'if the message is a well-formatted, but contains the commit separator multiple times',
      message: '#11/type: see: what goes around: comes back around',
      expected: {
        issueNumberAndType: '11/type',
        issueNumber: '11',
        type: 'type'
      }
    })
  })
})

function errorOnlyTestCase ({ name, message, expectedErrors }) {
  test(name, () => {
    // When
    const actual = parseCommitMessage(message)

    // Then
    expect(actual.errors).toStrictEqual(expectedErrors)
  })
}

function testCase ({ name, message, expected }) {
  test(name, () => {
    // When
    const actual = parseCommitMessage(message)

    // Then
    expect(actual.errors).toStrictEqual(expected.errors || [])
    expect(actual.taskIdAndType).toBe(expected.taskIdAndType)
    expect(actual.taskId).toBe(expected.taskId)
    expect(actual.projectKey).toBe(expected.projectKey)
    expect(actual.taskNumber).toBe(expected.taskNumber)
    expect(actual.type).toBe(expected.type)
  })
}
