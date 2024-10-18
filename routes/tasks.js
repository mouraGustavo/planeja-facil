const express = require('express');
const { protect, authorize } = require('../middlewares/auth');
const Task = require('../models/Task');
const Project = require('../models/Project');
const router = express.Router();

// Criar nova tarefa (gestor ou membro)
router.post('/', protect, authorize('gestor', 'membro'), async (req, res) => {
  const { title, description, projectId, assignedTo, dueDate } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });

    // Verifica se o responsável pela tarefa pertence ao projeto
    if (!project.team.includes(assignedTo)) {
      return res.status(400).json({ message: 'Responsável pela tarefa não está neste projeto' });
    }

    const task = new Task({
      title,
      description,
      project: projectId,
      assignedTo,
      dueDate
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar tarefa' });
  }
});

// Atualizar status da tarefa
router.put('/:id/status', protect, authorize('gestor', 'membro', 'freelancer'), async (req, res) => {
  const { status } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });

    if (task.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Você não tem permissão para atualizar esta tarefa' });
    }

    task.status = status;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar status da tarefa' });
  }
});

// Visualizar tarefas do usuário logado
router.get('/', protect, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user._id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar tarefas' });
  }
});

module.exports = router;