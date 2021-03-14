import { getAll, createNew } from '../../controllers/professionalsController';
import profissional from './../validators/profissionais'

module.exports = (app) => {
  app.route('/api/professionals/').get(getAll).post(profissional, createNew);
};
