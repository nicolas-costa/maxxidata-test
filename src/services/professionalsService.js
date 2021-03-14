import model from "../models";

export const findAll = async () => {
  try {
    const { Profissional } = model;

    return await Profissional.findAll();
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
