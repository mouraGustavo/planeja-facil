const express = require('express');
const { protect } = require('../middlewares/auth');
const {
    createTeam,
    getTeams,
    addMemberToTeam,
    removeMemberFromTeam,
} = require('../controllers/teamController');

const router = express.Router();

// Criar uma nova equipe
router.post('/', protect, createTeam);

// Listar equipes
router.get('/', protect, getTeams);

// Adicionar um membro à equipe
router.post('/:teamId/members', protect, addMemberToTeam);

// Remover um membro da equipe
router.delete('/:teamId/members', protect, removeMemberFromTeam);

module.exports = router;