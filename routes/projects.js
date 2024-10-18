const express = require('express');
const { protect, authorize } = require('../middlewares/auth');
const { createProject, getProjects, addTeamToProject } = require('../controllers/projectController');
const router = express.Router();

// Criar novo projeto
router.post('/', protect, authorize('gestor'), createProject);

// Visualizar todos os projetos
router.get('/', protect, getProjects);

// Adicionar equipe ao projeto
router.post('/:id/team', protect, authorize('gestor'), addTeamToProject);

module.exports = router;