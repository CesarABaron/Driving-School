const { Router } = require("express");
const { createCourseHandler, getAllCoursesHandler, updateCoursesHandler } = require("../Handlers/coursesHandlers")
const router = Router();

/* router.get("/", getAllProductsHandler) */
router.post("/",createCourseHandler)
router.get("/",getAllCoursesHandler)
router.patch("/:",updateCoursesHandler)

module.exports = router;
