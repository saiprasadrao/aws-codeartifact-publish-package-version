# aws-codeartifact-publish-package-version

Creates a new generic package version containing one or more assets (or files).

## `Depends on action`: 

- `aws-actions/configure-aws-credentials`

## `domain`

The name of the domain that contains the package to delete.

### `domain-owner`

The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.

## `region`

AWS CodeArtifact Region.

## `repository`

The name of the repository that contains the package versions to delete.

## `format`

The format of the package versions to delete. The valid value is "generic"

## `namespace`

The namespace of the package. The package component that specifies its namespace depends on its type. For example:

- The namespace of a Maven package is its groupId .
- The namespace of an npm package is its scope .

## `package_name`

The name of the package with the versions to publish.

## `package_version`

An array of strings that specify the versions of the package to publish.

## `files`

A single file or a folder that will be published as .tar.gz file in generic format.

### Example

```yml
Test:
  runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          role-to-assume: arn:aws:iam::*****
          aws-region: us-east-1
          
      - name: aws-codeartifact-publish-package-version
        uses: saiprasadrao/aws-codeartifact-publish-package-version@v****
        with:
          domain: ${{ secrets.DOMAIN }}
          domain-owner: ${{ secrets.OWNER }}
          region: ${{ secrets.REGION }}
          repository: ${{ secrets.REPO_NAME }}
          format: 'generic'
          package_name: 'github-test'
          package_version: '0.0.1'
          files: 'LICENSE'
```