const express = require('express');
const router = express.Router();
const { users } = require("/Users/stup/Documents/Multiverse/BrainBuster/db/seedData");

router.get('/', (request, response) => {
    response.json(users)  
});

module.exports = router;