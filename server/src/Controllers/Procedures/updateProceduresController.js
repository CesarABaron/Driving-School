const { procedure } = require("../../db");

const updateProcedureController = async (body, id) => {
  const updated = await procedure.update(body, { where: { id: id } });

  if (updated) {
    const updatedProcedure = await procedure.findOne({
      where: { id },
    });
    return updatedProcedure;
  }
  return false;
};

module.exports = {
  updateProcedureController,
};
