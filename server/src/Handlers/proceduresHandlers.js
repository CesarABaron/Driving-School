
const { createProceduresController } = require("../Controllers/Procedures/createProceduresController")
const { getAllProceduresController } = require("../Controllers/Procedures/getAllProceduresControles")
const { updateProceduresController } = require("../Controllers/Procedures/updateProceduresController")
const { deleteProcedureController } = require("../Controllers/Procedures/deleteProcedureController")
const { getProcedureByIdController } = require("../Controllers/Procedures/getProcedureByIdController")


const createProcedureHandler = async (req, res) =>{
    try {
        const newCourse = await createProceduresController(req.body)
        if(newCourse) return res.status(200).json(newCourse)
        return res.status(400).json({error: "Course with the same name already exists."})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllProceduresHandler = async (req, res) =>{
    try {
        const courses = await getAllProceduresController()
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error: "There is no courses."})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getProcedureByIdHandler = async (req, res) =>{
    try {
        const course = await getProcedureByIdController(req.params.id)
        if(course) return res.status(200).json(course)
        return res.status(400).json({error:"The course couldn't be found"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateProceduresHandler = async (req, res) =>{
    try {
        const courses = await updateProceduresController(req.body, req.params.id)
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error:"Couldn't update the course."})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteProcedureHandler = async (req, res) =>{
    try {
        deletedCourse = await deleteProcedureController(req.params.id)
        if(deletedCourse) return res.status(200).json({message: "The course has been removed"})
        return res.status(400).json({error:"The course doesn't exist"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports={
    createProcedureHandler,
    getAllProceduresHandler,
    getProcedureByIdHandler,
    updateProceduresHandler,
    deleteProcedureHandler
}