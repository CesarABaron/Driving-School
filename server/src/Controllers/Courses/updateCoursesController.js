const {courses} =require("../../db")

const updateCoursesController = async (body, params) =>{
    const id = params
    const {courseName} = body
    const updated = await courses.update({
        body
    })

    if(updated){
        const updatedCourse = await courses.findAll({
            where:{courseName}
        })
        return updatedCourse
    }return false
}

module.exports = {
    updateCoursesController
}