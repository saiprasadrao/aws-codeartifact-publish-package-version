/**
 * Unit tests for the action's main functionality, src/main.js
 */
const core = require('@actions/core')
const main = require('../src/main')
const shahash = require('../src/shahash')

// Mock the GitHub Actions core library
const debugMock = jest.spyOn(core, 'debug').mockImplementation()
const getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
const setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation()
const setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()

// Mock the action's main function
const runMock = jest.spyOn(main, 'run')
const shaHashMock = jest.spyOn(shahash, 'creategzFile')

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('takes input and return sha256', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation(() => {
      domain: 'golang-projects'
      repository: 'mcc-agent'
      package_name: 'mcc-agent'
      package_version: '0.0.1'
      folder: 'src'
    })

    await main.run()
    expect(runMock).toHaveReturned()
    // expect(shaHashMock).toHaveBeenCalled()
    
    shaHashMock.mockRestore()
    runMock.mockRestore()
  
  })
})
