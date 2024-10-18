const express = require('express');
const { protect } = require('../middlewares/auth');
const Project = require('../models/Project');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', protect, async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user._id });
    const tasks = await Task.find({ assignedTo: req.user._id });

    res.status(200).json({
      projects,
      tasks,
      tasksProgress: {
        total: tasks.length,
        toDo: tasks.filter(task => task.status === 'to-do').length,
        inProgress: tasks.filter(task => task.status === 'in-progress').length,
        done: tasks.filter(task => task.status === 'done').length
      }
    });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao carregar dashboard' });
  }
});

module.exports = router;