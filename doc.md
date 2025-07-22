# API Documentation: Login Endpoint

## Endpoint

**POST** `/api/login`

Authenticate student using username and password from student site.

---

## Request

### Headers
- `Authorization: Bearer faizalganteng` (required)
- `Content-Type: application/json`

### Body Example
```json
{
  "username": "student123",
  "password": "password123"
}
```

---

## Responses

### Success (200)
```json
{
  "message": "success",
  "npm": "123456789",
  "phone": "081234567890",
  "email": "student@example.com",
  "username": "student123"
}
```

### Error: Bad Request (400)
```json
{
  "err": "Invalid request format"
}
```

### Error: Not Acceptable (406)
```json
{
  "err": "username atau password salah"
}
```

---

## Notes
- This endpoint is protected. You must provide the correct `Authorization` header.
- All fields in the request body are required.
- The response will include student details if authentication is successful.
