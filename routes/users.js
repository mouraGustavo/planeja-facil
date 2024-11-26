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
router.post('/getUser', findByEmail);

// Atualizar informações do usuário
router.put('/me', protect, updateUser);

// Deletar usuário
router.delete('/me', protect, deleteUser);

module.exports = router;