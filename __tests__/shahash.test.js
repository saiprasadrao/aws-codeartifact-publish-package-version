/**
 * Unit tests for src/shahash.js
 */

const { creategzFile } = require('../src/shahash')
const { expect } = require('@jest/globals')

describe('shahash', () => {
  it('create sha256 hash for a folder', async () => {
    const hash = await creategzFile('src')
    console.log(hash)
    expect(hash).not.toBeFalsy()
  })
})
