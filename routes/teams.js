const express = require('express');
const { protect, authorize } = require('../middlewares/auth');
const Team = require('../models/Team');
const router = express.Router();

// Criar nova equipe
router.post('/', protect, authorize('gestor'), async (req, res) => {
  const { name, members } = req.body;
  try {
    const team = new Team({
      name,
      members
    });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar equipe' });
  }
});

// Adicionar membro à equipe
router.post('/:id/member', protect, authorize('gestor'), async (req, res) => {
  const { memberId } = req.body;
  try {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: 'Equipe não encontrada' });

    team.members.push(memberId);
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao adicionar membro à equipe' });
  }
});

// Visualizar equipes
router.get('/', protect, async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar equipes' });
  }
});

module.exports = router;
