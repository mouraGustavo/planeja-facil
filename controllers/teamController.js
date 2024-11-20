const Team = require('../models/Team');
const User = require('../models/User');

// Create
exports.createTeam = async (req, res) => {
    const { name, description } = req.body;

    try {
        const team = await Team.create({
            name,
            description,
            owner: req.user._id,
        });

        res.status(201).json({ message: 'Equipe criada com sucesso!', team });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar a equipe', error });
    }
};

// List (lista por usuário)
exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find({ owner: req.user._id }).populate('members', 'name email');
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar as equipes', error });
    }
};

// Add member
exports.addMemberToTeam = async (req, res) => {
    const { teamId } = req.params;
    const { memberId } = req.body;

    try {
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ message: 'Equipe não encontrada' });
        }

        if (team.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Você não tem permissão para modificar esta equipe' });
        }

        const member = await User.findById(memberId);
        if (!member) {
            return res.status(404).json({ message: 'Membro não encontrado' });
        }

        if (!team.members.includes(memberId)) {
            team.members.push(memberId);
            await team.save();
        }

        res.status(200).json({ message: 'Membro adicionado com sucesso!', team });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar membro', error });
    }
};

// Delete (remover da equipe)
exports.removeMemberFromTeam = async (req, res) => {
    const { teamId } = req.params;
    const { memberId } = req.body;

    try {
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ message: 'Equipe não encontrada' });
        }

        if (team.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Você não tem permissão para modificar esta equipe' });
        }

        team.members = team.members.filter((id) => id.toString() !== memberId);
        await team.save();

        res.status(200).json({ message: 'Membro removido com sucesso!', team });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover membro', error });
    }
};