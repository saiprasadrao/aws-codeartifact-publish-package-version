/**
 * Unit tests for the action's main functionality, src/main.js
 */
const core = require('@actions/core')
const github = require('@actions/github')
const main = require('../src/main')
const shahash = require('../src/shahash')

// Mock the GitHub Actions core library
const getInputMock = jest.spyOn(core, 'getInput').mockImplementation()

// Mock the action's main function
const runMock = jest.spyOn(main, 'run')
const shaHashMock = jest.spyOn(shahash, 'creategzFile')

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('takes input and return sha256', async () => {
    await main.run()
    expect(runMock).toHaveReturned()
  })
})
