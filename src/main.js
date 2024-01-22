const core = require('@actions/core')
const github = require('@actions/github')

const { createPackage } = require('./createPackage')


/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */

async function run() {
  try {
    const domain = core.getInput('domain')
    const domainOwner = core.getInput('domain-owner')
    const awsRegion = core.getInput('region')
    const repository = core.getInput('repository')
    const format = core.getInput('format')
    const packageName = core.getInput('package-name')
    const packageVersion = core.getInput('package-version')
    const folder = core.getInput('folder')

    const hash = await createPackage.creategzFile(folder)

    var params = {
      assetContent: 'temp.tar.gz',
      assetName: 'temp.tar.gz', /* required */
      assetSHA256: hash, /* required */
      domain: domain,
      format: format,
      package: packageName, /* required */
      packageVersion: packageVersion, /* required */
      repository: repository, /* required */
      domainOwner: domainOwner,
      namespace: packageName
    }
    codeartifact.publishPackageVersion(params, function(err, data) {
      if (err) 
        console.log(err, err.stack); // an error occurred
      else     
        console.log(data);           // successful response
    });
  }catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}