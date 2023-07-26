# CONTACT API SPEC

#

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "firstName": "Masyhar",
  "lastName": "M",
  "email": "masyhar@example.com",
  "phone": "801234567890"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Masyhar",
    "lastName": "M",
    "email": "masyhar@example.com",
    "phone": "801234567890"
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid format"
}
```

#

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "firstName": "Masyhar",
  "lastName": "M",
  "email": "masyhar@example.com",
  "phone": "801234567890"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Masyhar",
    "lastName": "Muharam",
    "email": "masyhar@example.com",
    "phone": "801234567890"
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid format"
}
```

#

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json

```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Masyhar",
    "lastName": "Muharam",
    "email": "masyhar@example.com",
    "phone": "801234567890"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact not found"
}
```

#

## Search Contact API

Endpoint : GET /api/contacts

Headers :

- Authorization : token

Query Params :

- name: search by firstName or lastName, using like //optional
- email: search by email, using like //optional
- phone: search by phone, using like //optional
- page: number of page, default 1
- size: size per page, default 10

Request Body :

```json

```

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "firstName": "Masyhar",
      "lastName": "Muharam",
      "email": "masyhar@example.com",
      "phone": "801234567890"
    },
    {
      "id": 1,
      "firstName": "Masyhar",
      "lastName": "Muharam",
      "email": "masyhar@example.com",
      "phone": "801234567890"
    },
    {
      "id": 1,
      "firstName": "Masyhar",
      "lastName": "Muharam",
      "email": "masyhar@example.com",
      "phone": "801234567890"
    }
  ],
  "paging": {
    "page": 1,
    "totalPage": 3,
    "totalRecord": 30
  }
}
```

Response Body Error :

#

## Remove Contact API

Endpoint : DELETE /api/contacts

Headers :

- Authorization : token

Request Body :

```json

```

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```
