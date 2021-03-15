import model from "../models";

export const findAll = async () => {
  try {
    const { TipoDeProfissional } = model;

    return await TipoDeProfissional.findAll();
  } catch (e) {
    throw e;
  }
};

export const create = async (professionalTypeData) => {
  try {
    const { TipoDeProfissional } = model;

    return await TipoDeProfissional.create(professionalTypeData);
  } catch (e) {
    throw e;
  }
};

export const edit = async (id, professionalTypeData) => {
  try {
    const { TipoDeProfissional } = model;
    const profType = await TipoDeProfissional.update(professionalTypeData, {
      where: {
        id,
      },
    });

    if (profType[0] === 0) {
      throw new Error("Not found.");
    }

    return profType;
  } catch (e) {
    throw e;
  }
};
