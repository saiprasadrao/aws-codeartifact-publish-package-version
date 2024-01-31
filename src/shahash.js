/**
 * @param {string} folder The folder name provided will be zipped
 * @param {string} zipFileName Name of the tar.gz file to be created
 */
const { createHmac } = require('crypto')
const exec = require('@actions/exec')
const fs = require('fs')


async function creategzFile(folder, zipFileName = 'temp.tar.gz') {
  await exec.exec('tar', ['-czvf', zipFileName, folder])
  const data = fs.readFileSync(zipFileName)
  const hash = await createHmac('sha256', 'secret').update(data).digest('hex')
  console.log(hash)
  return hash
}

module.exports = { creategzFile }
