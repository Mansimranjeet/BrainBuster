const express = require('express');
const router = express.Router();
const { Users } = require("../../db");

router.get('/', async (request, response) => {
    response.json(await Users.findAll())  
});

module.exports = router;