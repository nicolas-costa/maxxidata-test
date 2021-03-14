import model from "../models";

export const findAll = async () => {
  const { Profissional } = model;
  try {
    return await Profissional.findAll();
  } catch (e) {
    throw e;
  }
};

export const create = async (professionalData) => {
  const { Profissional } = model;
  try {
    return await Profissional.create(professionalData);
  } catch (e) {
    throw e;
  }
};
