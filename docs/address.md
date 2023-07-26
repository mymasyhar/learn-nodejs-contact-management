# ADDRESS API SPEC

#

## Create Address API
Endpoint : POST /api/address/:contactId/addresses

Headers
- Authorization : token

Request Body :

```json
{
  "street": "24th Streets",
  "postalCode": "93232",
  "city": "Kendari",
  "region": "South East Sulawesi",
  "country": "Indonesia"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "24th Streets",
    "postalCode": "93232",
    "city": "Kendari",
    "region": "South East Sulawesi",
    "country": "Indonesia"
  }
}
```

Response Body Error :

```json
{
  "errors": "country is required"
}
```



## Update Address API
Endpoint : PUT /api/address:contactId/addresses/:addressId

Headers
- Authorization : token

Request Body :

```json
{
  "street": "24th Streets, 8th Avenue",
  "postalCode": "93232",
  "city": "Kendari",
  "region": "South East Sulawesi",
  "country": "Indonesia"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "24th Streets, 8th Avenue",
    "postalCode": "93232",
    "city": "Kendari",
    "region": "South East Sulawesi",
    "country": "Indonesia"
  }
}
```


Response Body Error :

```json
{
  "errors": "country is required"
}
```


## Get Address API
Endpoint : POST /api/contacts/:contactId/addresses/:addressId

Headers
- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "24th Streets, 8th Avenue",
    "postalCode": "93232",
    "city": "Kendari",
    "region": "South East Sulawesi",
    "country": "Indonesia"
  }
}
```

Response Body Success :

```json
{
  "errors": "contact is not found"
}
```

## List Address API
Endpoint : GET /api/contacts/:contactId/addresses/

Headers
- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "24th Streets, 8th Avenue",
      "postalCode": "93232",
      "city": "Kendari",
      "region": "South East Sulawesi",
      "country": "Indonesia"
    },
    {
      "id": 2,
      "street": "24th Streets, 8th Avenue",
      "postalCode": "93232",
      "city": "Kendari",
      "region": "South East Sulawesi",
      "country": "Indonesia"
    },
    {
      "id": 3,
      "street": "24th Streets, 8th Avenue",
      "postalCode": "93232",
      "city": "Kendari",
      "region": "South East Sulawesi",
      "country": "Indonesia"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "address is not found"
}
```

## Remove Address API
Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers
- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Success :

```json
{
  "errors": "address is not found"
}
```