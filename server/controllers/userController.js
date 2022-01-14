const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const {User, ShopingCart} = require('../models/models');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign({
        id, email, role
    }, 
    process.env.SECRET_KEY,{expiresIn: '24h'}
    );
}

class UserController {

    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Не коректыные данные'));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Email такой уже есть'));
        }
        const hasPassword = await bcrypt.hash(password, 5);
        const user = await User.create({
            email, password:hasPassword, role
        });
        const shopingCart = await ShopingCart.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where:{email}});
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Неверный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }

    async deleteUser(req, res) {
        const {id} = req.params;
        const deleteUser = await User.delete({where:{id}});
        return res.json(deleteUser);
    };
}

module.exports = new UserController;