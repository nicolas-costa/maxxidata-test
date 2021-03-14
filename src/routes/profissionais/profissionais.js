import {
    getAll
} from "../../controllers/professionalsController";

module.exports = (app) => {
    app.route('/api/professionals/').get(getAll);
};
