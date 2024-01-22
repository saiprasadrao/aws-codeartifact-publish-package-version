/**
 * @param {string} folder The folder name provided will be zipped
 * @param {string} zipFileName Name of the tar.gz file to be created
 */
const { createHash } = require('crypto')
const tar = require('tar')
const fs = require('fs')

async function creategzFile(folder, zipFileName = 'temp.tar.gz') {
  // await exec.exec('tar', ['-czvf', zipFileName, folder])
  let hash = ''
  tar.create({
    file: zipFileName,
    cwd: folder,
    gzip: true
  },['.'])
  .then(() => {
    console.log('Tarball created successfully!')
    fs.readFile(zipFileName, (err, data) => {
      if (err) {
        console.log(err, err.stack)
      } else {
        return createHash('sha256').update(data).digest('hex')
      }
    })
  })
  .catch((error) => {
    console.error('Error creating tarball:', error)
  })
  .finally(() => {
    // Close the writable stream when done
    tarStream.end()
  })
}
module.exports = { creategzFile }
