# Github

## Links

* URL: [https://github.com](https://github.com)
* Documentation: [https://docs.github.com/en/rest](https://docs.github.com/en/rest)
* Tags: web2
* Category: versioncontrol
* Type: hosted

## API

### issues

#### listrepository

##### Authentication

* Authorization: header:token

##### List Repository Issues

* Description: List issues in a repository.
* Docs: [https://docs.github.com/en/rest/issues/issues#list-repository-issues](https://docs.github.com/en/rest/issues/issues#list-repository-issues)

### repositories

#### getContent

##### Authentication

* Authorization: header:token

##### Get repository content

* Description: Gets the contents of a file or directory in a repository. Specify the file path or directory in :path.
* Docs: [https://docs.github.com/en/rest/repos/contents#get-repository-content](https://docs.github.com/en/rest/repos/contents#get-repository-content)

### gitDatabase

#### getTree

##### Authentication

* Authorization: header:token

##### Get a tree

* Description: Returns a single tree using the SHA1 value for that tree.
* Docs: [https://docs.github.com/en/rest/git/trees#get-a-tree](https://docs.github.com/en/rest/git/trees#get-a-tree)
