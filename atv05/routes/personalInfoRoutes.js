const express = require('express');
const router = express.Router();
const personalInfoController = require('../controllers/personalInfoController');

router.get('/personal-info', personalInfoController.getAllPersonalInfo);

router.post('/personal-info', personalInfoController.createPersonalInfo);

router.put('/personal-info/:id', personalInfoController.updatePersonalInfo);

router.delete('/personal-info/:id', personalInfoController.deletePersonalInfo);

module.exports = router;
