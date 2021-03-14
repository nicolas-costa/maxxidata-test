import express from "express";
import consign from "consign";
import bodyParser from "body-parser";
const app = express();
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
});

const jsonParser = bodyParser.json();
app.use(jsonParser);

consign({ verbose: false }, { cwd: "src" })
  .include("./src/models/index.js")
  .then("./src/controllers/")
  .then("./src/routes/")
  .then("./src/services/")
  .then("./src/routes/validators/")
  .into(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on", port);
});

export default app;
