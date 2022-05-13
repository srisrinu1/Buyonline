import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const userContext = createContext();

const initialAddress = {
    house: "",
    city: "",
    street: "",
    state: "",
    pin: "",
    saved: false

}

export const UserProvider = (props) => {
    const { loginWithRedirect, logout, user } = useAuth0();
    const [myUser,setMyUser] =useState(null);
    const [address,setAddress] = useState(initialAddress);
    const [orders,setOrders] = useState([]);
    const [perOrderTotal,setPerOrderTotal] = useState([]);

    useEffect(() => {
        setMyUser(user);
    },[user]);

    useEffect(() => {
        const localOrders=JSON.parse(localStorage.getItem('orders'));
        const localPerOrderTotal=JSON.parse(localStorage.getItem('perOrderTotal'));
        if(localOrders && localPerOrderTotal){
            setOrders(localOrders);
            setPerOrderTotal(localPerOrderTotal);
        }

    },[]);

    useEffect(() => {
        localStorage.setItem('orders',JSON.stringify(orders));
        localStorage.setItem('perOrderTotal',JSON.stringify(perOrderTotal));
    },[orders,perOrderTotal]);





    return (
        <userContext.Provider value={{
            loginWithRedirect,
            logout,
            user,
            myUser,
            address,
            setAddress,
            orders,
            setOrders,
            perOrderTotal,
            setPerOrderTotal

        }}>

        {props.children}

        </userContext.Provider>

    );
  };


  export const useUserContext =()=>{
    const context=useContext(userContext);
    if(context===undefined){
        throw new Error("useContext was used outside of its Provider");
    }
    return(context);
  }