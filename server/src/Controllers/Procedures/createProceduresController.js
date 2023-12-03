const { procedures } = require("../../db");

const createProceduresController = async (body) => {
  const { basado } = body;
  const [newProcedure, created] = await procedures.findOrCreate({
    where: { basado },
    defaults: { ...body },
  });
  if (created) return newProcedure.dataValues;
  return false;
};

module.exports = {
  createProceduresController,
};
