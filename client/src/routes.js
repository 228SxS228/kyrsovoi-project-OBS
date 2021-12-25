import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import ItemPage from "./pages/ItemPage"
import Shop from "./pages/Shop"
import ShopingCart from "./pages/ShopingCart"
import { ADMIN_ROUTER, ITEM_ROUTER, LOGIN_ROUTER, REGISTRATION_ROUTER, SHOPINGCART_ROUTER, SHOP_ROUTER } from "./utils/consts"

export const privateRoutes = [

    {
        path: ADMIN_ROUTER,
        Component: Admin
    },

    {
        path: SHOPINGCART_ROUTER,
        Component: ShopingCart
    },

]

export const publickRoutes = [
    
    {
        path: SHOP_ROUTER,
        Component: Shop
    },

    {
        path: LOGIN_ROUTER,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Auth
    },

    {
        path: ITEM_ROUTER + '/:id',
        Component: ItemPage
    },

]