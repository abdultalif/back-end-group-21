# User API Spec

## Register User API

Endpoint :  POST /api/register 

Request Body :

```json
{
  "username" : "talif",
  "password" : "12345",
  "name" : "Abdul Talif Parinduri"
}
```

Response Body Success :

```json
{
  "data" : {
    "username" : "talif",
    "name" : "Abdul Talif Parinduri"
  }
}
```

Response Body Error : 

```json
{
  "errors" : "Username already registered"
}
```