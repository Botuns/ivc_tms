const express = require('express');
const router = express.Router();
const atfalController = require('../controllers/_atfalController');

router.get('/atfal', atfalController.getAllAtfal);
router.get('/atfal/dila/:dila', atfalController.getAtfalByDila);
router.get('/atfal/tag/:tagNumber', atfalController.getAtfalByTagNumber);
router.post('/atfal/new',atfalController.createAtfal)

module.exports= router