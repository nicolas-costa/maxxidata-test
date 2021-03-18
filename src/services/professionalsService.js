import model from "../models";

export const findAll = async () => {
  try {
    const { Profissional, TipoDeProfissional } = model;

    return await Profissional.findAll({
      include: {
        model: TipoDeProfissional
      }
    });
  } catch (e) {
    throw e;
  }
};

export const create = async (professionalData) => {
  try {
    const { Profissional } = model;

    return await Profissional.create(professionalData);
  } catch (e) {
    throw e;
  }
};

export const edit = async (professionalData) => {
  try {
    const { Profissional } = model;
    const { id = -1 } = professionalData;
    const professional = await Profissional.update(professionalData, {
      where: {
        id,
      },
    });

    if (professional[0] === 0) {
      throw new Error("Not found.");
    }

    return professional;
  } catch (e) {
    throw e;
  }
};
