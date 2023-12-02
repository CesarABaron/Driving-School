const { Router } = require("express");
const { createCourseHandler, getAllCoursesHandler,getCourseByIdHandler, updateCoursesHandler, deleteCourseHandler } = require("../Handlers/coursesHandlers")
const router = Router();

/* router.get("/", getAllProductsHandler) */
router.get("/",getAllCoursesHandler)
router.get("/:id",getCourseByIdHandler)
router.patch("/:id",updateCoursesHandler)
router.post("/",createCourseHandler)
router.delete("/:id",deleteCourseHandler)

module.exports = router;
