// Controller for centers
//======================


const db = require('../models');

module.exports = {
    findCenter: (req, res) => {
        db.Center
            .findById({  _id: req.params.id })
            .then(dbModel => {
               
            res.json(dbModel)
            })

            .catch(err => res.status(422).json(err));
    }
}