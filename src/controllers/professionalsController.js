import { findAll, create, edit } from '../services/professionalsService';

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
    const { body = {} } = req;

    const professional = await create(body);

    res.status(201)
        .send(professional);
  } catch (e) {
    res.status(500)
        .send(e);
  }
};

/**
 * Edita um profissional.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const editOne = async (req, res) => {
  try {
    const { body = {} } = req;

    const professional = await edit(body);

    res.status(200)
        .send(professional);
  } catch (e) {
    res.status(e.message === 'Not found.' ? 404 : 500)
        .send(e);
  }
}
