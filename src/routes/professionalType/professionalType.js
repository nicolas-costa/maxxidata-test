import {
    getAll,
    createNew,
    editOne,
} from "../../controllers/professionalTypeController";
import profissionalType from "./../validators/professionalType";

module.exports = (app) => {
    app
        .route("/api/tipo-de-profissional/")
        .get(getAll)
        .post(profissionalType, createNew)
        .put(profissionalType, editOne);
};
