const router = require("express").Router();
const centercontroller = require('../../controllers/centercontroller');

router.route("/:id")
    .get(centercontroller.findCenter);


module.exports = router;
