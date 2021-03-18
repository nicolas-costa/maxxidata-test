import {
    getAll,
    createNew,
    editOne,
} from "../../controllers/professionalTypeController";
import professionalType from "./../validators/professionalType";

module.exports = (app) => {
    app
        .route("/api/tipos-de-profissional/")
        .get(getAll)
        .post(professionalType, createNew);

    app.put("/api/tipos-de-profissional/:id", professionalType, editOne);
};
