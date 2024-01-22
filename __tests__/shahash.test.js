/**
 * Unit tests for the action's entrypoint, src/index.js
 */

const { run } = require('../src/shahash')

// Mock the action's entrypoint
jest.mock('../src/shahash', () => ({
  run: jest.fn()
}))

describe('shahash', () => {
  it('calls run when imported', async () => {
    require('../src/shahash')

    expect(run).toHaveBeenCalled()
  })
})
