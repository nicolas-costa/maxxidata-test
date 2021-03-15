import {
  getAll,
  createNew,
  editOne,
} from "../../controllers/professionalsController";
import professional from "../validators/professional";

module.exports = (app) => {
  app
    .route("/api/profissionais/")
    .get(getAll)
    .post(professional, createNew);


  app.put("/api/profissionais/:id", professional, editOne);
};
