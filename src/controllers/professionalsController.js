const {
    findAll
} = require('../services/professionalsService');

export const getAll = async (req, res) => {
    try {
        const professionals = await findAll();

        res.status(200)
            .send(professionals);
    } catch (e) {
        res.status(500)
            .send(e);
    }
}
