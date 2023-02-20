const express = require('express');
const router = express.Router();
const { questions } = require("/Users/stup/Documents/Multiverse/BrainBuster/db/seedData");

router.get('/', (request, response) => {
    response.json(questions)  
});

module.exports = router;