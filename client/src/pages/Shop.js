import { observer } from "mobx-react-lite";
import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchBrands, fetchDevices, fetchTypes, fetchBasketItems} from "../http/itemAPI";
import TypeBar from "../components/TypeBar";


const Shop = observer(() => {
    const {item} = useContext(Context);
    const {shopingCart} = useContext(Context);
    const {user} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data => {
            item.setDevices(data.rows)
            item.setTotalCount(data.count)
        })   
        if (!user.user) {
            fetchBasketItems(user.user.id).then(data => {
                item.setItems(data);
            })
        }
    }, [fetchTypes, fetchBrands, fetchDevices])

    useEffect(() => {
        fetchDevices(item.selectedType.id, item.selectedBrand.id, item.page, 2).then(data => {
            item.setDevices(data.rows)
            item.setTotalCount(data.count)
        })
        
    }, [item.page, item.selectedType, item.selectedBrand,])

    return(
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
            </Row>
        </Container>
    );

});

export default Shop;