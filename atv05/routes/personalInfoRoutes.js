const express = require('express');
const router = express.Router();
const personalInfoController = require('../controllers/personalInfoController');

// Rota para obter todas as informações pessoais
router.get('/personal-info', personalInfoController.getAllPersonalInfo);

// Rota para criar uma nova informação pessoal
router.post('/personal-info', personalInfoController.createPersonalInfo);

// Rota para atualizar informações pessoais existentes
router.put('/personal-info/:id', personalInfoController.updatePersonalInfo);

// Rota para excluir informações pessoais
router.delete('/personal-info/:id', personalInfoController.deletePersonalInfo);

module.exports = router;
