import { check, validationResult } from "express-validator";

export default [
    check("descricao")
        .isLength({ min: 1 })
        .withMessage("O tipo de profissional deve ter uma descrição.")
        .bail(),
    check("situacao")
        .isBoolean()
        .withMessage("O profissional deve ter a situação como verdadeiro ou falso.")
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];
