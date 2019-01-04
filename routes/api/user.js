const router = require("express").Router();
const usercontroller = require('../../controllers/usercontroller');


//Matches with "/api/user"
router.route("/")
    .post(usercontroller.create);

//Matches with "/api/user/:id"
router.route("/:id")
    .get(usercontroller.findUser)

router.route("/likes/:id")
    .post(usercontroller.updateLikes)


module.exports = router;





