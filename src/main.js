const core = require('@actions/core')
const { creategzFile } = require('./shahash')
const { CodeartifactClient, PublishPackageVersionCommand } = require('@aws-sdk/client-codeartifact')
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
    const packageName = core.getInput('package_name')
    const packageVersion = core.getInput('package_version')
    const folder = core.getInput('folder')

    const hash = await creategzFile(folder)

    const params = {
      assetContent: 'temp.tar.gz',
      assetName: 'temp.tar.gz', // required
      assetSHA256: hash, // required
      domain,
      format,
      package: packageName, // required
      packageVersion, // required
      repository, // required
      domainOwner,
      namespace: packageName
    }
    const client = new CodeartifactClient({ region: awsRegion })
    const command = new PublishPackageVersionCommand(params)
    const response = await client.send(command)
    core.setCommandEcho(true)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.stack)
  }
}

module.exports = {
  run
}
