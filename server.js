const express = require('express');
const cors = require('cors');
require('dotenv').config();

// ✅ CREATE app FIRST (MOST IMPORTANT)
const app = express();
const PORT = process.env.PORT || 3000;

// Routes & middleware
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

// =======================
// Middleware (Order matters!)
// =======================

// ✅ CORS - MUST be first
app.use(cors({
  origin: '*', // Allow all origins in development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files BEFORE logging middleware
app.use(express.static('public'));

// ✅ Log all requests (helpful for debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} | ${req.method} ${req.path}`);
  next();
});

// =======================
// Routes
// =======================

// Root route (serves UI)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API routes
app.use('/api', taskRoutes);

// Health check endpoint (useful for debugging)
app.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// =======================
// 404 handler
// =======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.path}`
  });
});

// =======================
// Error handling middleware (MUST be last)
// =======================
app.use(errorHandler);

// =======================
// Start server
// =======================
app.listen(PORT, () => {
  console.log('=================================');
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`📋 API endpoint: http://localhost:${PORT}/api/tasks`);
  console.log('=================================');
});

module.exports = app;