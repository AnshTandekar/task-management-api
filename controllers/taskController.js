console.log("taskController loaded");

const Task = require('../models/taskModel');

// GET all tasks
exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.getAll();
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

// GET single task by ID
exports.getTaskById = async (req, res, next) => {
    try {
        const task = await Task.getById(req.params.id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        next(error);
    }
};

// POST create new task
exports.createTask = async (req, res, next) => {
    try {
        const { title, description, status, priority, due_date } = req.body;
        
        // Validation
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required'
            });
        }

        const taskId = await Task.create(req.body);
        const newTask = await Task.getById(taskId);
        
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: newTask
        });
    } catch (error) {
        next(error);
    }
};

// PUT update task
exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.getById(req.params.id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        const affectedRows = await Task.update(req.params.id, req.body);
        const updatedTask = await Task.getById(req.params.id);
        
        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: updatedTask
        });
    } catch (error) {
        next(error);
    }
};

// DELETE task
exports.deleteTask = async (req, res, next) => {
    try {
        const task = await Task.getById(req.params.id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        await Task.delete(req.params.id);
        
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

// GET tasks by status
exports.getTasksByStatus = async (req, res, next) => {
    try {
        const tasks = await Task.getByStatus(req.params.status);
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};