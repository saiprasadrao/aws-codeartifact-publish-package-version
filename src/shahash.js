/**
 * @param {string} folder The folder name provided will be zipped
 * @param {string} zipFileName Name of the tar.gz file to be created
 */
const { createHash } = require('crypto')
const exec = require('@actions/exec')
const fs = require('fs')

async function creategzFile(folder, zipFileName = 'temp.tar.gz') {
  await exec.exec('tar', ['-czvf', zipFileName, folder])
  fs.readFile(zipFileName, (err, data) => {
    if (err) {
      console.log(err, err.stack)
    } else {
      return createHash('sha256').update(data).digest('hex')
    }
  })

}
module.exports = { creategzFile }
