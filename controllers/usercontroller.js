// Controller for users
//======================


const db = require('../models');

module.exports = {
    // Create new User
    create: (req,res) => {
        db.User
            .create(req.body)
            .then(function(dbUser){
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },
    //Find all a user
    findUser: (req, res) =>{
        db.User
            .findById({ _id: req.params.id })
            .then(function(dbUser){
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
        },
    // Update Likes
    updateLikes: (req, res) => {
        db.User
            .findOneAndUpdate({ _id: req.params.id } , { $set: req.body }, {new: true}
                .then((dbUser) => {
                    res.json(dbUser);
                }))
                .catch(err => res.status(422).json(err));

    }



}

