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


## Login User API

Endpoint : POST /api/login

Request Body :

```json
{
  "username" : "talif",
  "password" : "12345"
}
```

Response Body Success : 

```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Username or password wrong"
}
```