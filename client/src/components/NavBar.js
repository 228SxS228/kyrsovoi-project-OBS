import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, SHOPINGCART_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import bsk from '../assets/basket.jpg';


const NavBar = observer( () => {
    
    const {user} = useContext(Context);
    const {basket} = useContext(Context);
    const navigate = useNavigate();
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }


    return(
    
        <Navbar variant="light" bg="light">
            <Container >
                <NavLink style={{ color: 'black' }} to={SHOP_ROUTE}>
                    OBS
                </NavLink>            
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'black'}}>
                        <NavLink className="mr-3" to={SHOPINGCART_ROUTE}> <img src={bsk} alt={basket}/></NavLink>                    
                        <Button
                            variant="light"
                            onClick={() => navigate.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant="light"
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'black'}}>
                        <Button 
                            variant="light" 
                            onClick={() => navigate.push(LOGIN_ROUTE)}
                        >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;