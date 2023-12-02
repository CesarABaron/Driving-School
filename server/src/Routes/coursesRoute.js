const { Router } = require("express");
const { createCourseHandler, getAllCoursesHandler, updateCoursesHandler } = require("../Handlers/coursesHandlers")
const router = Router();

/* router.get("/", getAllProductsHandler) */
router.patch("/:id",updateCoursesHandler)
router.post("/",createCourseHandler)
router.get("/",getAllCoursesHandler)

module.exports = router;
