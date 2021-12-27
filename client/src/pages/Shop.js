import { observer } from "mobx-react-lite";
import React  from "react";
import { Context } from "..";


const Shop = observer(() => {
    const {item} = useContext(Context);
    const {shopingCart} = useContext(Context);
    const {user} = useContext(Context);
});

export default Shop;