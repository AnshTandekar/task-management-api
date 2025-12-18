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
// Middleware
// =======================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// =======================
// Routes
// =======================

// Root route (serves UI or API info)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API routes
app.use('/api', taskRoutes);

// =======================
// 404 handler
// =======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// =======================
// Error handling middleware
// =======================
app.use(errorHandler);

// =======================
// Start server
// =======================
app.listen(PORT, () => {
  console.log('=================================');
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log('=================================');
});

module.exports = app;
