const { Router } = require("express");
const { createCourseHandler, getAllCoursesHandler } = require("../Handlers/coursesHandlers")
const router = Router();

/* router.get("/", getAllProductsHandler) */
router.post("/",createCourseHandler)
router.get("/",getAllCoursesHandler)

module.exports = router;
