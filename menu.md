# Menu API Spec

## Create Menu API

Endpoint : POST /api/menu

Headers :
- Authorization : token

Query form-data :
- name: Coca Cola
- description: Optional description
- price: 10000
- stok: 12
- image: menu_image.jpg
- category: Drink


Response Body Success :

```json
{
  "data": {
        "id": 1,
        "name": "Coca Cola",
        "description": null,
        "price": "10000",
        "stok": "12",
        "category": "Drink",
        "image": "1700416199436.png"
    }
}
```

Response Body Error : 

```json
{
  "errors" : "Email already registered"
}
```


## Login User API

Endpoint : POST /api/login

Request Body :

```json
{
  "email" : "abdultalif@gmail.com",
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
  "errors" : "Email or password wrong"
}
```

## Autentikasi User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success:

```json
{
  "data" : {
    "email" : "abdultalif@gmail.com",
    "name" : "Abdul Talif Parinduri"
  }
}
```

Response Body Error : 

```json
{
  "errors" : "Unauthorized"
}
```


## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success : 

```json
{
  "data" : "OK"
}
```

Response Body Error : 

```json
{
  "errors" : "Unauthorized"
}
```