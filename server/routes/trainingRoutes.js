const { Router } = require('express');
const trainingController = require('../controllers/trainingController');
var {authRequired} = require('../middleware/authMiddleware');

const router = Router();


// - increase level
router.post('/increase-level/:wordId',authRequired, trainingController.increaseLevel);

// - decrease level
router.post('/decrease-level/:wordId',authRequired, trainingController.decreaseLevel);

// - random 50 words
router.get('/random-50-words', trainingController.getRandom50Words);
router.get('/random-50-words-with-audio', trainingController.getRandom50WordsWithAudio);

module.exports = router;






