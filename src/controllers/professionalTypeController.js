import { findAll, create, edit } from '../services/professionalTypesService';

/**
 * Retorna a lista de tipos de profissional.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getAll = async (req, res) => {
  try {
    const professionalTypes = await findAll();

    res.status(200).send(professionalTypes);
  } catch (e) {
    res.status(500).send(e);
  }
};

/**
 * Cria um novo tipo de profissional.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const createNew = async (req, res) => {
  try {
    const { body = {} } = req;

    const professionalTypes = await create(body);

    res.status(201)
        .send(professionalTypes);
  } catch (e) {
    res.status(500)
        .send(e);
  }
};

/**
 * Edita um tipo de profissional.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const editOne = async (req, res) => {
  try {
    const { body = {} } = req;

    const professionalTypes = await edit(body);

    res.status(200)
        .send(professionalTypes);
  } catch (e) {
    res.status(e.message === 'Not found.' ? 404 : 500)
        .send(e);
  }
}
