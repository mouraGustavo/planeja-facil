const express = require('express');
const { protect } = require('../middlewares/auth');
const { registerUser, loginUser, getCurrentUser, updateUser } = require('../controllers/userController');
const router = express.Router();

// Registrar novo usuário
router.post('/register', registerUser);

// Login de usuário
router.post('/login', loginUser);

// Obter informações do usuário logado
router.get('/me', protect, getCurrentUser);

// Atualizar informações do usuário
router.put('/me', protect, updateUser);

module.exports = router;