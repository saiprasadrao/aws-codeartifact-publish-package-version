/**
 * @param {string} folder The folder name provided will be zipped
 * @param {string} zipFileName Name of the tar.gz file to be created
 */
const { createHash } = require('crypto')
const exec = require('@actions/exec')
const fs = require('fs')
const stream = require('stream/promises')


// async function creategzFile(folder, zipFileName = 'temp.tar.gz') {
//   await exec.exec('tar', ['-czvf', zipFileName, folder])
//   const data = fs.readFileSync(zipFileName)
//   const hash = await createHash('SHA-256').update(data).digest('hex')
//   console.log(hash)
//   return hash
// }

async function creategzFile(folder, zipFileName = 'temp.tar.gz') {
  await exec.exec('tar', ['-czvf', zipFileName, folder])
  const data = fs.createReadStream(zipFileName)
  const hash = createHash('sha256')
  await stream.pipeline(data, hash)
  return hash
}

module.exports = { creategzFile }
