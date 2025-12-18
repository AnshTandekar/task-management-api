const db = require('../config/database');

class Task {
    // Get all tasks
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
        return rows;
    }

    // Get task by ID
    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
        return rows[0];
    }

    // Create new task
    static async create(taskData) {
        const { title, description, status, priority, due_date } = taskData;
        const [result] = await db.query(
            'INSERT INTO tasks (title, description, status, priority, due_date) VALUES (?, ?, ?, ?, ?)',
            [title, description, status || 'pending', priority || 'medium', due_date]
        );
        return result.insertId;
    }

    // Update task
    static async update(id, taskData) {
        const { title, description, status, priority, due_date } = taskData;
        const [result] = await db.query(
            'UPDATE tasks SET title = ?, description = ?, status = ?, priority = ?, due_date = ? WHERE id = ?',
            [title, description, status, priority, due_date, id]
        );
        return result.affectedRows;
    }

    // Delete task
    static async delete(id) {
        const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);
        return result.affectedRows;
    }

    // Get tasks by status
    static async getByStatus(status) {
        const [rows] = await db.query('SELECT * FROM tasks WHERE status = ? ORDER BY created_at DESC', [status]);
        return rows;
    }
}

module.exports = Task;