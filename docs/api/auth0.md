# Auth0

## Links

* URL: [https://auth0.com](https://auth0.com)
* Documentation: [https://auth0.com/docs](https://auth0.com/docs)
* Tags: web2
* Category: identity
* Type: identitymanagement

## API

### auth

#### accesstoken

##### GetAuthAccessToken

* Description: You can execute a client credentials exchange to get an access token for Auth0 Management API.
* Docs: [https://auth0.com/docs/api/authentication](https://auth0.com/docs/api/authentication)

### usersByEmail

#### get

##### Authentication

* Authorization: header:bearer

##### Search Users by Email

* Description: Retrieve users by E-Mail address.
* Docs: [https://auth0.com/docs/api/management/v2#!/Users_By_Email/get_users_by_email](https://auth0.com/docs/api/management/v2#!/Users_By_Email/get_users_by_email)

### users

#### listOrSearch

##### Authentication

* Authorization: header:bearer

##### ListOrSearchUsers

* Description: Retrieve details of users.
* Docs: [https://auth0.com/docs/api/management/v2#!/Users/get_users](https://auth0.com/docs/api/management/v2#!/Users/get_users)

#### get

##### Authentication

* Authorization: header:bearer

##### Get a User

* Description: Retrieve user details. A list of fields to include or exclude may also be specified.
* Docs: [https://auth0.com/docs/api/management/v2/#!/Users/get_users_by_id](https://auth0.com/docs/api/management/v2/#!/Users/get_users_by_id)

#### create

##### Authentication

* Authorization: header:bearer

##### Create a User

* Description: Create a new user for a given database or passwordless connection.
* Docs: [https://auth0.com/docs/api/management/v2#!/Users/post_users](https://auth0.com/docs/api/management/v2#!/Users/post_users)

#### update

##### Authentication

* Authorization: header:bearer

##### Update a User

* Description: Update a user.
* Docs: [https://auth0.com/docs/api/management/v2#!/Users/patch_users_by_id](https://auth0.com/docs/api/management/v2#!/Users/patch_users_by_id)

#### delete

##### Authentication

* Authorization: header:bearer

##### Delete a User

* Description: Delete a User.
* Docs: [https://auth0.com/docs/api/management/v2#!/Users/delete_users_by_id](https://auth0.com/docs/api/management/v2#!/Users/delete_users_by_id)

### connections

#### get

##### Authentication

* Authorization: header:bearer

##### Get all connections

* Description: Retrieves every connection matching the specified strategy. All connections are retrieved if no strategy is being specified. Accepts a list of fields to include or exclude in the resulting list of connection objects.
* Docs: [https://auth0.com/docs/api/management/v2#!/Connections/get_connections](https://auth0.com/docs/api/management/v2#!/Connections/get_connections)

### roles

#### get

##### Authentication

* Authorization: header:bearer

##### Get roles

* Description: Retrieve filtered list of roles that can be assigned to users.
* Docs: [https://auth0.com/docs/api/management/v2#!/Roles/get_roles](https://auth0.com/docs/api/management/v2#!/Roles/get_roles)
