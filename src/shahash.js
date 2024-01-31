/**
 * @param {string} folder The folder name provided will be zipped
 * @param {string} zipFileName Name of the tar.gz file to be created
 */
const exec = require('@actions/exec')
const fs = require('fs')
const { Sha256 } = require('@aws-crypto/sha256-js')

async function creategzFile(folder, zipFileName = 'temp.tar.gz') {
  await exec.exec('tar', ['-czvf', zipFileName, folder])
  const data = fs.readFileSync(zipFileName)
  const hash = new Sha256()
  hash.update(data)
  const shaHash = await hash.digest()
  return shaHash
}

module.exports = { creategzFile }
