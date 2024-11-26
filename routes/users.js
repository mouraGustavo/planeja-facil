const express = require('express');
const { protect } = require('../middlewares/auth');
const { registerUser, loginUser, getCurrentUser, findByEmail, updateUser, deleteUser} = require('../controllers/userController');
const router = express.Router();

// Registrar novo usuário
router.post('/register', registerUser);

// Login de usuário
router.post('/login', loginUser);

// Obter informações do usuário logado
router.get('/me', protect, getCurrentUser);

// Obter informações de um usuário
router.post('/findByEmail', findByEmail);

// Atualizar informações do usuário
router.put('/update', protect, updateUser);

// Deletar usuário
router.delete('/delete', protect, deleteUser);

module.exports = router;