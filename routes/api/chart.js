const router = require("express").Router();
const chartcontroller = require('../../controllers/chartcontroller');

router.route("/:id")
    .get(chartcontroller.findChart);

router.route("/likes/:id")
    .post(chartcontroller.updateLikes)


module.exports = router;
