const { procedure } = require("../../db");

const getAllProceduresController = async () => {
  const allProcedure = await procedure.findAll();
  if (allProcedure.length > 0) return allProcedure;
  return false;
};

module.exports = {
  getAllProceduresController,
};
