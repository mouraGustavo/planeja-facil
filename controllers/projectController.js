const Project = require('../models/Project');
const Team = require('../models/Team');

exports.createProject = async (req, res) => {
  const { name, description, team, freelancers } = req.body;
  try {
    const project = new Project({
      name,
      description,
      owner: req.user._id, // Criar projeto somente com o dono/gestor??
      team,
      freelancers
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar o projeto', error });
  }
};

// TODO - verificar listagem somente por usuario
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ 
      $or: [{ owner: req.user._id }, { team: req.user._id }, { freelancers: req.user._id }]
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar projetos', error });
  }
};

// Função para adicionar equipe ao projeto
exports.addTeamToProject = async (req, res) => {
  const { teamId } = req.body;
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });

    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: 'Equipe não encontrada' });

    project.team.push(...team.members); // Adiciona membros da equipe ao projeto
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao adicionar equipe ao projeto', error });
  }
};
