import {
    getAll,
    createNew,
    editOne,
} from "../../controllers/professionalTypeController";
import professionalType from "./../validators/professionalType";

module.exports = (app) => {
    app
        .route("/api/tipo-de-profissional/")
        .get(getAll)
        .post(professionalType, createNew);

    app.put("/api/tipo-de-profissional/:id", professionalType, editOne);
};
