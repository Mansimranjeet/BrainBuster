const express = require('express');
const Sequelize = require('sequelize')
const router = express.Router();
let {Questions, CurrentQuestion}  = require('../../db')



router.get('/', async (request, response) => {
    response.json(await Questions.findAll())  
});

router.post('/', async (request, response) => {
    // currentQuestion = await CurrentQuestion.findOne({where:{id: 1}})
    cc = await CurrentQuestion.update({value: request.body.index}, {where:{id: 1}}) 
     response.json(cc)
});

module.exports = router;