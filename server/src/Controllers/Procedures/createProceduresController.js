const { procedure } = require("../../db");

const createProcedureController = async (body) => {
  console.log(body);
  const { procedureName } = body;
  const [newProcedure, created] = await procedure.findOrCreate({
    where: { procedureName },
    defaults: { ...body },
  });
  if (created) return newProcedure.dataValues;
  return false;
};

module.exports = {
  createProcedureController,
};
