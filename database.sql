-- Create database
CREATE DATABASE IF NOT EXISTS task_management_db;

-- Use the database
USE task_management_db;

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in-progress', 'completed') DEFAULT 'pending',
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_priority (priority),
    INDEX idx_due_date (due_date)
);

-- Insert sample data
INSERT INTO tasks (title, description, status, priority, due_date) VALUES
('Setup development environment', 'Install Node.js, MySQL, and VS Code', 'completed', 'high', '2024-12-15'),
('Create API documentation', 'Document all endpoints with examples', 'in-progress', 'high', '2024-12-20'),
('Write unit tests', 'Add test cases for all controllers', 'pending', 'medium', '2024-12-25'),
('Deploy to production', 'Setup cloud hosting and deploy application', 'pending', 'high', '2024-12-30');

-- Verify data
SELECT * FROM tasks;