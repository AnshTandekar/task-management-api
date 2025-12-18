const express = require('express');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Root route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Task Management API',
        version: '1.0.0',
        status: 'Running',
        endpoints: {
            'GET /api/tasks': 'Get all tasks',
            'GET /api/tasks/:id': 'Get task by ID',
            'GET /api/tasks/status/:status': 'Get tasks by status',
            'POST /api/tasks': 'Create new task',
            'PUT /api/tasks/:id': 'Update task',
            'DELETE /api/tasks/:id': 'Delete task'
        }
    });
});

// API routes
app.use('/api', taskRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log('=================================');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
    console.log(`📚 API Docs: http://localhost:${PORT}/`);
    console.log('=================================');
});

module.exports = app;