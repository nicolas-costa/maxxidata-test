import { check, validationResult } from 'express-validator';
import model from '../../models';

export default [
    check('nome')
        .isLength({ min: 1})
        .withMessage('O profissional deve ter um nome.')
        .bail(),
    check('email')
        .isEmail()
        .withMessage('O profissional deve ter um email válido.')
        .bail(),
    check('situacao')
        .isBoolean()
        .withMessage('O profissional deve ter a situação como verdadeiro ou falso.')
        .bail(),
    check('tipoDeProfissional')
        .isBoolean()
        .withMessage('O profissional deve ter um tipo válido.')
        .custom(async (value, { req }) => {
            const { TipoDeProfissional } = model;
            return await !!TipoDeProfissional.findOne({
                where: {
                    id: value
                }
            });
        })
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
        next();
    }
];
