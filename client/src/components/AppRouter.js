import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

function AppRouter() {
  const {user} = useContext(Context);
  // console.log(user);
  return (
    <>
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
      <Route key={path} path={path} element={<Component/>} exact />
      )}
      {publicRoutes.map(({path, Component}) => 
      <Route key={path} path={path} element={<Component/>} exact />
      )}
      {!authRoutes && !publicRoutes? <Route element={<Navigate to={SHOP_ROUTE} />} /> : 'Idea'}
    </Routes>
      </>
  )
}

export default AppRouter
