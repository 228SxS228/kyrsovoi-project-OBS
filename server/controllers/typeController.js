const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {nameb} = req.body
        const type = await Type.create({nameb})
        return res.json(type)
    }

    async getAll(req, res) {
        const typese = await Type.findAll()
        return res.json(typese)
    }

}

module.exports = new TypeController();