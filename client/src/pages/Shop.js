import { observer } from "mobx-react-lite";
import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchBrands, fetchDevices, fetchTypes, fetchBasketItems} from "../http/itemAPI";
import TypeBar from "../components/TypeBar";


const Shop = () => {

    return(
        <div>
        </div>
    );

};

export default Shop;