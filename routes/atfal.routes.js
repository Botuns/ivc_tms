const express = require('express');
const router = express.Router();
const atfalController = require('../controllers/_atfalController');

router.get('/atfal', atfalController.getAllAtfal);
router.get('/atfal/dila/:dila', atfalController.getAtfalByDila);
router.get('/atfal/tag/:tagNumber', atfalController.getAtfalByTagNumber);
router.post('/atfal/new',atfalController.createAtfal)
router.get('/atfal/counts',atfalController.getCountOfAllAtfal)
router.get('/atfal/counts/:dila',atfalController.getCountOfPaymentAtfalByDila)
router.get('/atfal/payments',atfalController.getCountsOfPaymentAtfal)
router.get('/atfal/:ids',atfalController.getAtfalByIds)
router.get('/atfal/stage/:stage',atfalController.getCountOfAtfalByStage)



module.exports= router