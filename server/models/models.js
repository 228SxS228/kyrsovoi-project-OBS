const sequalize = require('../db');
const {DataTypes, INTEGER} = require('sequelize');


const User = sequalize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'user'}
});

const ShopingCart = sequalize.define('shoping_cart', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const ShopingCartItem = sequalize.define('shoping_cart_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const Item = sequalize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    names: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    number: {type: DataTypes.INTEGER, allowNull:false}
});

const Brand = sequalize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Type = sequalize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nameb: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ItemInfo = sequalize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.TEXT, allowNull: false}
});

const TypeBrand = sequalize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


User.hasOne(ShopingCart)
ShopingCart.belongsTo(User)

ShopingCart.hasMany(ShopingCartItem)
ShopingCartItem.belongsTo(ShopingCart)

ShopingCartItem.hasMany(Item)
Item.belongsTo(ShopingCartItem)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Item.hasMany(ItemInfo, {as: 'info'});
ItemInfo.belongsTo(Item)

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })


module.exports = {
    User, 
    ShopingCart, 
    ShopingCart, 
    Item, 
    ItemInfo,
    TypeBrand,
    Type,
    Brand
}