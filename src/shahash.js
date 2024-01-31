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
  const hash = await createHash('SHA-256').update(data)
  console.log(hash.digest('hex'))
  return hash.digest('hex')
}

module.exports = { creategzFile }
