const {ShopingCart, ShopingCartItem, Item} = require('../models/models');
const ApiError = require('../error/ApiError');


class ShopingCartController {
    async addItem(req, res, next) {
        try {
            const {userId, itemId} = req.body;
            const basket = await ShopingCart.findOne({
                where: {userId}
            });

            const itemItTheBasket = await ShopingCartItem.findOne({
                where: {
                    shopingCartid: shopingCart.id,
                    itemId: itemId
                }
            });
            if (!itemItTheBasket) {
                await ShopingCartItem.create({shopingCartid: shopingCart.id, itemId})
            } else {
                await ShopingCartItem.update({
                    quantity: itemInTheBasket.quantity + 1
                }, {
                where: {
                    shopingCartid: shopingCart.id,
                    itemId: itemId
                }
            })
        }
        const userBasket = await ShopingCartItem.finAll(
            {
                where: {shopingCartid: shopingCart.id},
                include: {
                    model: Item,
                    as: 'item'
                }
            }
        );
        return res.json(userBasket);
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async removeItems(req, res, next) {
        try {
            const {id} = req.query;
            await ShopingCartItem.destroy({
                where: {id}
            })
            return res.json("Успешно удалено");
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async removeOneItems(req, res) {
        try {
            const {userId, itemId} = req.body;
            const item = await ShopingCart.findOne({
                where:{userId}
            });
            const itemInTheBasket = await ShopingCartItem.findOne({
                where: {
                    shopingCartid: shopingCart.id,
                    itemId: item.id
                }
            });
            if (itemInTheBasket) {
                if (itemInTheBasket.quantity <= 1){
                    await ShopingCartItem.destroy({
                        where:{
                            shopingCartid: shopingCart.id,
                            itemId: itemId
                        }
                    })
            }
            }else {
            await ShopingCartItem.update({
                quantity: itemInTheBasket.quantity -1
            }, {
                where: {
                    shopingCartid: shopingCart.id,
                    itemId: itemId
                }
            })
            const userBasket = await ShopingCartItem.finAll(
                {
                    where: {shopingCartid: shopingCart.id},
                    include:{
                        model: Item,
                        as:'item'
                    }
                }
            );
            
            return res.json(userBasket);
        }
        return res.json(`$(userId) - ${shopingCartid}`);
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllItems(req, res, next) {
        try {
            const {userId} = req.params;
            const basket = await ShopingCart.findOne({
                where: {userId}
            });
            const userBasket = await ShopingCartItem.findAll({
                where: {shopingCartid: shopingCart.id},
                include: {
                    model: Item,
                    as:'item'
                }
            });
            return res.json(userBasket);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}    

module.exports = new ShopingCartController();