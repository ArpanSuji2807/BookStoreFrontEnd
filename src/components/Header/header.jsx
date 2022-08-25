import React from "react";
import './header.css'
import bookImage from '../../assets/education.png'
import { InputBase } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";


export const Header = (props) => {

    const navigate = useNavigate();

    const searchBooks = (event) => {
        props.showSearchedBooks(event.target.value);
    }

    return (<div className="header">
        <div className="headerContent">
            <div className="halfHeaderContent">
                <img src={bookImage} className="image" />
                <div className="bookstore">Bookstore</div>
                <div className="headerSearch">
                    <InputBase onChange={searchBooks} className="Search" placeholder="Search..." type="text" />
                </div>
            </div>
            <div className="headercontent2">
                <PermIdentityIcon className="accountcart"/>
                <ShoppingCartOutlinedIcon onClick={() =>navigate('/Dashboard/MyCart')} className="accountcart"/>
            </div>
        </div>
    </div>)
}