import express from "express";
import consign from "consign";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output';
import cors from 'cors';
const app = express();
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
});

const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(cors());

consign({ verbose: false }, { cwd: "src" })
  .include("./src/models/index.js")
  .then("./src/controllers/")
  .then("./src/routes/")
  .then("./src/services/")
  .then("./src/routes/validators/")
  .into(app);

const port = process.env.PORT || 3000;

// Don't run while running tests.
if(process.env.NODE_ENV != "test") {
  app.listen(port, () => {
    console.log("listening on", port);
  })
}

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
