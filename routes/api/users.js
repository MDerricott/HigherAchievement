const router = require("express").Router();
const usercontroller = require('../../controllers/usercontroller');


//Matches with "/api/users"
router.route("/")
    .post(usercontroller.create)
    .get(usercontroller.findUser)
    .get(usercontroller.findAll)


// router.route("/likes/:id")
//     .post(usercontroller.updateLikes)


module.exports = router;





