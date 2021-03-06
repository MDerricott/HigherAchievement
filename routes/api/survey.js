const router = require("express").Router();
const surveycontroller = require('../../controllers/surveycontroller');


//Matches with "/api/survey"
router.route("/")
    .post(surveycontroller.create)
    .get(surveycontroller.findAll)
    .delete(surveycontroller.deleteSurveys)


// router.route("/likes/:id")
//     .post(usercontroller.updateLikes)


module.exports = router;

