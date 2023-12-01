const { Router } = require("express");
const router = Router();

const coursesRoute = require("./coursesRoute");

router.use("/courses", coursesRoute);

module.exports = router;
