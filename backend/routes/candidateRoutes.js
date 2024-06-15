const express = require('express');
const { searchCandidates, addCandidate } = require('../controllers/candidateController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, searchCandidates);
router.post('/', auth, addCandidate);

module.exports = router;
