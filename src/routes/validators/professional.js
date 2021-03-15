import { check, validationResult } from "express-validator";
import model from "../../models";
import { Op } from "sequelize";

export default [
  check("nome")
    .isLength({ min: 1 })
    .withMessage("O profissional deve ter um nome.")
    .bail(),
  check("email")
    .isEmail()
    .withMessage("O profissional deve ter um email único e válido.")
    .custom(async (value, { req }) => {
      const findWhere = {};
      if (req.method === "PUT") {
        findWhere.where = {
          email: value,
          id: {
            [Op.ne]: req.params.id,
          },
        };
      } else {
        findWhere.where = {
          email: value,
        };
      }

      const { Profissional } = model;
      return Profissional.findOne(findWhere).then((user) => {
        if (user) {
          return Promise.reject("Email já utilizado.");
        }
      });
    })
    .bail(),
  check("situacao")
    .isBoolean()
    .withMessage("O profissional deve ter a situação como verdadeiro ou falso.")
    .bail(),
  check("tipoDeProfissional")
    .isInt()
    .withMessage("O profissional deve ter um tipo válido.")
    .custom(async (value, { req }) => {
      const { TipoDeProfissional } = model;
      return TipoDeProfissional.findOne({
        where: {
          id: value,
        },
      }).then((tipoDePro) => {
        if (!tipoDePro) {
          return Promise.reject("Tipo de profissional não existe.");
        }
      });
    })
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
