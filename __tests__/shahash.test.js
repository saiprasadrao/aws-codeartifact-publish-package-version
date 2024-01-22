/**
 * Unit tests for src/shahash.js
 */

const { creategzFile } = require('../src/shahash')
const { expect } = require('@jest/globals')

describe('shahash', () => {
  it('create gzip and sha256 hash for a folder', async () => {
    const hash = await creategzFile('package.json')
    expect(hash).toBeDefined()
  })
})
