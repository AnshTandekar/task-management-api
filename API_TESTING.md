# API Testing Guide

## Using Postman

### 1. Create New Task
- Method: POST
- URL: `http://localhost:3000/api/tasks`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "title": "Learn Node.js",
  "description": "Complete Node.js tutorial",
  "status": "pending",
  "priority": "high",
  "due_date": "2024-12-31"
}
```

### 2. Get All Tasks
- Method: GET
- URL: `http://localhost:3000/api/tasks`

### 3. Get Task by ID
- Method: GET
- URL: `http://localhost:3000/api/tasks/1`

### 4. Update Task
- Method: PUT
- URL: `http://localhost:3000/api/tasks/1`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "title": "Learn Node.js - Updated",
  "status": "in-progress",
  "priority": "high"
}
```

### 5. Delete Task
- Method: DELETE
- URL: `http://localhost:3000/api/tasks/1`

### 6. Get Tasks by Status
- Method: GET
- URL: `http://localhost:3000/api/tasks/status/pending`

## Expected Status Codes

- 200: Success (GET, PUT, DELETE)
- 201: Created (POST)
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error