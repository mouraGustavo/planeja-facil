const express = require('express');
const { protect, authorize } = require('../middlewares/auth');
const { createProject, getProjects, addTeamToProject, updateProject, deleteProject } = require('../controllers/projectController');
const router = express.Router();

// Criar novo projeto
router.post('/', protect, authorize('gestor'), createProject);

// Visualizar todos os projetos
router.get('/', protect, getProjects);

// Adicionar equipe ao projeto
router.post('/:id/team', protect, authorize('gestor'), addTeamToProject);

// Editar um projeto
router.put('/update/:id', protect, authorize('gestor'), updateProject);

// Deletar um projeto e suas tarefas
router.delete('/delete/:id', protect, authorize('gestor'), deleteProject);


module.exports = router;