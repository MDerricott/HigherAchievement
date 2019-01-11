// Controller for centers
//======================


const db = require('../models');

module.exports = {
    findCenter: function (req, res) {
        db.Center.find({})
            .then(dbModel => {
                console.log("logging" + dbModel)
                return res.json(dbModel)
            })

            .catch(err => res.status(422).json(err));
    }
}