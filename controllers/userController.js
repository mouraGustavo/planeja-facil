const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Registrar novo usuário
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  // console.log('Dados recebidos no formulário: ', req.body);
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Usuário já registrado' });
    }

    user = new User({ name, email, password, role });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES || '1h',
    });
    res.status(201).json({ message: 'Usuário registrado com sucesso', user, token });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao registrar usuário', error });
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
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES || '1h',
    });
    
    res.status(200).json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
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

const findByEmail = async (req, res) => {
  const { email } = req.body;
  
  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar usuário', error });
  }
};

// Atualizar informações do usuário
const updateUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password;
    }
    if (role) {
      user.role = role;
    }

    await user.save();
    res.status(200).json({ message: 'Usuário atualizado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar usuário', error });
  }
};

// Deletar usuário
const deleteUser = async (req, res) => {
  try {
    
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    await User.findByIdAndDelete(req.user._id);

    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  findByEmail,
  updateUser,
  deleteUser
};