import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import ItemPage from "./pages/ItemPage"
import Shop from "./pages/Shop"
import ShopingCart from "./pages/ShopingCart"
import { ADMIN_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOPINGCART_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const privateRoutes = [

    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

    {
        path: SHOPINGCART_ROUTE,
        Component: ShopingCart
    },

]

export const publickRoutes = [
    
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },

]