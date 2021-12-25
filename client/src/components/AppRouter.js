import React, { useContext }  from "react";
import {Routes, Route} from 'react-router-dom';
import { Context } from "../index";
import {privateRoutes, publickRoutes} from '../routes';


const AppRouter = () => {
    
    const {user} = useContext(Context);
    console.log(user);

    return (
        <Routes>
            {user.isAuth && privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact
                />
            )}
            {publickRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact
                />
            )} 
        </Routes>
    );
};

export default AppRouter;