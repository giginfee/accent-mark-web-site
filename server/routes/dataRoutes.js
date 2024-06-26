const { Router } = require('express');
const dataController = require('../controllers/dataController');
var {authRequired} = require('../middleware/authMiddleware');

const router = Router();


//- all words
router.get('/all-words', dataController.allWords);

// - all rules
router.get('/all-rules', dataController.allRules);

// - word by id
router.get('/word/:wordId', dataController.wordById);

// - words for rule
router.get('/words-for-rule/:ruleId', dataController.wordsForRule);

// - rule for word
router.get('/rule-for-word/:wordId', dataController.ruleForWord);

// - all words with levels for user
router.get('/all-words-with-levels',authRequired, dataController.allWordsWithLevels);

// - all words with levels for user
router.get('/user-progress',authRequired, dataController.userProgress);

router.post('/record', dataController.createAudio);


module.exports = router;