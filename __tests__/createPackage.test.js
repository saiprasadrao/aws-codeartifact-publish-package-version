/**
 * Unit tests for the action's entrypoint, src/index.js
 */

const { run } = require('../src/main')

// Mock the action's entrypoint
jest.mock('../src/createPackage', () => ({
  run: jest.fn()
}))

describe('createPackage', () => {
  it('calls run when imported', async () => {
    require('../src/createPackage')

    expect(run).toHaveBeenCalled()
  })
})