import React from 'react'
import GoodsDetail from '../page/GoodsDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({auth}) => {
  return auth ? <GoodsDetail/> : <Navigate to = {"login"}/> 

}

export default PrivateRoute