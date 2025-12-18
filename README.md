# 📋 Task Management CRUD API

A RESTful API built with Node.js, Express, and MySQL for managing tasks with full CRUD operations.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

## 🚀 Features

- ✅ Complete CRUD operations (Create, Read, Update, Delete)
- ✅ RESTful API design
- ✅ MySQL database integration with connection pooling
- ✅ MVC architecture pattern
- ✅ Error handling middleware
- ✅ Environment-based configuration
- ✅ CORS enabled
- ✅ Clean and scalable code structure

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn
- Git

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/AnshTandekar/task-management-api.git
cd task-management-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management_db
DB_PORT=3306
NODE_ENV=development
```

### 4. Setup database
```bash
# Login to MySQL
mysql -u root -p

# Run the database script
source database.sql
```

### 5. Start the server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The API will be running at `http://localhost:3000`

## 📚 API Endpoints

### Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get task by ID |
| GET | `/tasks/status/:status` | Get tasks by status |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

## 🧪 API Usage Examples

### Get all tasks
```bash
curl http://localhost:3000/api/tasks
```

### Get task by ID
```bash
curl http://localhost:3000/api/tasks/1
```

### Create new task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README",
    "status": "pending",
    "priority": "high",
    "due_date": "2024-12-31"
  }'
```

### Update task
```bash
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated task",
    "status": "completed"
  }'
```

### Delete task
```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

## 📁 Project Structure

```
task-management-api/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   └── taskController.js    # Request handlers
├── models/
│   └── taskModel.js         # Database queries
├── routes/
│   └── taskRoutes.js        # API routes
├── middleware/
│   └── errorHandler.js      # Error handling
├── .env                     # Environment variables
├── .gitignore              # Git ignore file
├── server.js               # Entry point
├── package.json            # Dependencies
├── database.sql            # Database schema
└── README.md               # Documentation
```

## 🗄️ Database Schema

### Tasks Table
| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key (auto-increment) |
| title | VARCHAR(255) | Task title (required) |
| description | TEXT | Task description |
| status | ENUM | pending, in-progress, completed |
| priority | ENUM | low, medium, high |
| due_date | DATE | Task deadline |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

## 🔒 Response Format

### Success Response
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": 1,
    "title": "Sample Task",
    "status": "pending"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Task not found"
}
```

## 🛡️ Error Handling

The API includes centralized error handling for:
- Database connection errors
- Validation errors
- Not found errors (404)
- Internal server errors (500)

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku create your-app-name
heroku config:set DB_HOST=your_db_host
heroku config:set DB_USER=your_db_user
heroku config:set DB_PASSWORD=your_db_password
git push heroku main
```

## 🧰 Built With

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **mysql2** - MySQL client for Node.js
- **dotenv** - Environment variables management
- **cors** - Cross-origin resource sharing

## 👨‍💻 Author

Ansh Tandekar
- GitHub: [@AnshTandekar](https://github.com/AnshTandekar)
- LinkedIn: [AnshTandekar](https://www.linkedin.com/in/ansh-tandekar/)

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built as part of job preparation for Opus Technologies
- Demonstrates backend development, database management, and RESTful API design
- Follows industry best practices and MVC architecture

---

⭐ Star this repository if you find it helpful!
```
