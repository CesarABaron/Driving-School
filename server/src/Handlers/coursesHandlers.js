
const { createCoursesController } = require("../Controllers/Courses/createCoursesController")
const { getAllCoursesController } = require("../Controllers/Courses/getAllCoursesController")
const { updateCoursesController } = require("../Controllers/Courses/updateCoursesController")


const createCourseHandler = async (req, res) =>{
    try {
        const newCourse = await createCoursesController(req.body)
        if(newCourse) return res.status(200).json(newCourse)
        return res.status(400).json({error: "Course with the same name already exists."})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllCoursesHandler = async (req, res) =>{
    try {
        const courses = await getAllCoursesController()
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error: "There is no courses."})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateCoursesHandler = async (req, res) =>{
    try {
        const courses = await updateCoursesController(req.body, req.params)
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error:"Couldn't update the course."})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={
    createCourseHandler,
    getAllCoursesHandler,
    updateCoursesHandler
}