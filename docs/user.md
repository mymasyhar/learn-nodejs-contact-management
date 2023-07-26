# USER API SPEC

#

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "masyhar@example.com",
  "password": "12345678",
  "name": "Masyhar M"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "masyhar@example.com",
    "name": "masyhar"
  }
}
```

Response Body Error :

```json
{
  "errors": "username already registered"
}
```

#

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "masyhar@exmample.com",
  "password": "12345678"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "username or password wrong"
}
```

#

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "masyhar", //optional
  "password": "new password" //optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "masyhar@example.com",
    "name": "Masyhar Muh"
  }
}
```

Response Body Error :

```json
{
  "error": "name length max 100"
}
```

#

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "masyhar@example.com",
    "name": "Masyhar Muh"
  }
}
```

Response Body Error :

```json
{
  "errors": "unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers:

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "unauthorized"
}
```
