// Controller for Charts
//======================


const db = require('../models');

module.exports = {
    findChart: (req, res) => {
        db.Chart
            .findById({ _id: req.params.id})
            .then(function(dbChart){
                res.json(dbChart)
            })
            .catch(err => res.status(422).json(err));
    },  
    updateLikes: (req, res) => {
        db.Chart
            .findOneAndUpdate({ _id: req.params.id } , {$set: req.body} , {new: true}
            .then((dbChart) => {
                res.json(dbChart);
            }))
            .catch(err => res.status(422).json(err));
    }
}