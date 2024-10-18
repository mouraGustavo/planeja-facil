const User = require('../models/User');

// Registrar novo usuário
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Usuário já registrado' });
    }

    user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao registrar usuário' });
  }
};

// Login de usuário
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

    // TODO: Implementar geração de token JWT (se necessário)
    res.status(200).json({ message: 'Login realizado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao realizar login' });
  }
};

// Obter informações do usuário logado
const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao obter informações do usuário' });
  }
};

// Atualizar informações do usuário
const updateUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password; // A criptografia é tratada pelo hook `pre('save')`
    }

    await user.save();
    res.status(200).json({ message: 'Usuário atualizado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar usuário' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  updateUser
};