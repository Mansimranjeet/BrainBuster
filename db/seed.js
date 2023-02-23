const {questions, users} = require('./seedData.js');
const {db, Questions, Users, CurrentQuestion} = require('./');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await db.sync({ force: true });
    
        // insert data
      
          await Promise.all(questions.map(question => Questions.create(question)));
          await Promise.all(users.map(user => Users.create(user)));
          await CurrentQuestion.create({value : 0});
         

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();