const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

router.get('/experiences', experienceController.getAllExperiences);

router.post('/experiences', experienceController.createExperience);

router.put('/experiences/:id', experienceController.updateExperience);

router.delete('/experiences/:id', experienceController.deleteExperience);

module.exports = router;
