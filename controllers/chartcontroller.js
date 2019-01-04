// Controller for Charts
//======================


const db = require('../models');

module.exports = {
    updateLikes: (req, res) => {
        db.Chart
            .findOneAndUpdate({ _id: req.params.id } , {$set: req.body} , {new: true}
            .then((dbChart) => {
                res.json(dbChart);
            }))
            .catch(err => res.status(422).json(err));
    }
}