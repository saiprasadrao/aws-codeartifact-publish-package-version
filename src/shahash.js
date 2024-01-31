/**
 * @param {string} folder The folder name provided will be zipped
 * @param {string} zipFileName Name of the tar.gz file to be created
 */
const { createHash, getHashes } = require('crypto')
const exec = require('@actions/exec')
const fs = require('fs')
const { resolve } = require('path')

async function creategzFile(folder, zipFileName = 'temp.tar.gz') {
  await exec.exec('tar', ['-czvf', zipFileName, folder])
  const data = fs.readFileSync(zipFileName)
  const hash = createHash('sha3-256').update(data).digest('hex')
  return hash
}

module.exports = { creategzFile }
