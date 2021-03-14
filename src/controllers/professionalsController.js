const { findAll, create } = require("../services/professionalsService");

/**
 * Retorna a lista de profissionais.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getAll = async (req, res) => {
  try {
    const professionals = await findAll();

    res.status(200).send(professionals);
  } catch (e) {
    res.status(500).send(e);
  }
};

/**
 * Cria um novo profissional.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const createNew = async (req, res) => {
  try {
    const { body } = req;

    const professionals = await create(body);

    res.status(201).send(professionals);
  } catch (e) {
    res.status(500).send(e);
  }
};
