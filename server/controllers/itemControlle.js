const uuid = require('uuid');
const path = require('path');
const {Item, ItemInfo} = require('../models/models');
const ApiError = require('../error/ApiError');


class ItemController {

    async create(req, res, next) {
      try {
        let {names, price, brandId, info} = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const item = await Item.create({
            names, price, brandId, img: fileName
        });

        if (info) {
          info = JSON.parse(info);
          info.forEach(i =>
            ItemInfo.create({
              description: i.description,
              itemId: item.id
            })
            )
        }

        return res.json(item);
      } catch(e){
          next(ApiError.badRequest(e.message));
      }
    }

    async getAll(req, res) {
      let {brandId, typeId, limit, page} = req.query
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let itemes;
      if (!brandId && !typeId) {
        itemes = await Item.findAndCountAll({ limit, offset});
      }
      if (brandId && !typeId) {
        itemes = await Item.findAndCountAll({where:{brandId}, limit, offset});
      }
      if (!brandId && typeId) {
        itemes = await Item.findAndCountAll({where:{typeId}, limit, offset});
      }
      if (brandId && typeId) {
        itemes = await Item.findAndCountAll({where:{typeId, brandId}, limit, offset});
      }
      return res.json(itemes);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const item = await Item.findOne(
          {
            where: {id},
            include: [{model: ItemInfo, as: 'info'}]
          },
        )
        return res.json(item);
    }
}

module.exports = new ItemController;