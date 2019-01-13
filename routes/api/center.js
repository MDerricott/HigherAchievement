const router = require("express").Router();
const centercontroller = require('../../controllers/centercontroller');

router.route("/:centerName")
    .get(centercontroller.findCenter);


module.exports = router;
