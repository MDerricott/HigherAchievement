
const db = require('../models');

module.exports = {
    // Create new User
    create: (req,res) => {
        db.Surveys
            .create(req.body)
            .then(function(dbSurvey){
                res.json(dbSurvey)
            })
            .catch(err => res.status(422).json(err));
    },
    //Find all a user
    

    findAll: (req, res) =>{
        db.Surveys
            .find({})
            .then(function(dbSurvey){
                res.json(dbSurvey)
            })
            .catch(err => res.status(422).json(err));
         },
    


         deleteSurveys: (req, res) =>{
            db.Surveys
                .deleteOne(req.body)
                .then(function(dbSurvey){
                    res.json(dbSurvey)
                })
                .catch(err => res.status(422).json(err));
             },
        



}

