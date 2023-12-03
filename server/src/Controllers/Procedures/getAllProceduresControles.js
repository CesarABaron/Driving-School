const { procedure } = require("../../db");

const getAllProceduresController = async () => {
  const allProcedures = await procedure.findAll();
  if (allProcedures.length > 0) return allProcedures;
  return false;
};

module.exports = {
  getAllProceduresController,
};
