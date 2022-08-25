import React from "react";
import { Route, BrowserRouter, Switch, Routes } from "react-router-dom";
import { Usercredentials } from "../pages/UserCredentials/usercredentials";
import { DashBoard } from "../pages/DashBoard/dashboard";
import { Mycart } from "../components/mycart/mycart";
import { WishList } from "../components/wishlist/wishlist";
import { PlaceOrder } from "../components/orderplace/orderplace";

function Router() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Usercredentials/>}/>
                <Route path='/Dashboard' element = {<DashBoard/>}/>
                <Route path='/Dashboard/MyCart' element = {<Mycart/>}/>
                <Route path='/Dashboard/Wishlist' element = {<WishList/>}/>
                <Route path='/Dashboard/MyCart/orderplaced' element = {<PlaceOrder/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;