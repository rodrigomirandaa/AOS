const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

// Rota para obter todas as experiências
router.get('/experiences', experienceController.getAllExperiences);

// Rota para criar uma nova experiência
router.post('/experiences', experienceController.createExperience);

// Rota para atualizar uma experiência existente
router.put('/experiences/:id', experienceController.updateExperience);

// Rota para excluir uma experiência
router.delete('/experiences/:id', experienceController.deleteExperience);

module.exports = router;
