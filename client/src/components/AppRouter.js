import React, { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes, adminRoutes } from '../routes';
import {Context} from '../index';

function AppRouter() {
    
    
    const {user} = useContext(Context);
    return (
        <Routes>
            {/* {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />
            )} */}
            {user.isAdmin && adminRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />
            )}
        </Routes>
    )
}

export default AppRouter;
