const {procedure} = require("../../db")

const getCourseByIdController = async (id) =>{
    const foundProcedure = await procedure.findOne({
        where: {id}
    })
    if(foundProcedure) return foundProcedure
    return false
}

module.exports = {
    getCourseByIdController
}