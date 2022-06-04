import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from "react-redux"
import jwt_decode from "jwt-decode";

function PrivateRouter({ component: Component, ...rest }) {
    const {userInfo}=useSelector(state=>state.loginUser)
    const [userTokenInfo,setUserTokenInfo]=useState("");
    useEffect(()=>{
        if(userInfo && userInfo.token){
            setUserTokenInfo(jwt_decode(userInfo.token));
        }
    },[userInfo])
  return (
    <Route
      {...rest}
      component={(props) => {
        if (userInfo) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/login`} />;
        }
      }}
    />
  );
}

export default PrivateRouter;
