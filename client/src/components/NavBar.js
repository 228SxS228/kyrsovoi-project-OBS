import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTER} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'


const NavBar = observer( () => {
    const {user} = useContext(Context);
    return(
       <Navbar bg="dark" variant="dark">
           <NavLink style={{color:'white'}} to={SHOP_ROUTER}>OBS</NavLink>
           {user.isAuth ?
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"}>Админ панель</Button>
                <Button variant={"outline-light"} className="ml-10">Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"} 
                onClick={() => user.setIsAuth(true)}>
                    Авторизация
                </Button>
            </Nav>
            }
        </Navbar>
    );
});

export default NavBar;