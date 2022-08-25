import React from "react";
import './wishlist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import bookImage2 from '../../assets/bookImage2.png'
import { getAllWishList, RemoveFromWishList } from "../../services/dataservice";
import { Header } from "../Header/header";

export const WishList = () => {

    const[wishlistArray,setWishListArray] = React.useState([])

    const GetWishList = () =>{
        getAllWishList().then((res) =>{
            console.log(res);
            setWishListArray(res.data.data.books)
        }).catch((error) =>{
            console.log(error);
        })
    }

    React.useEffect(() =>{
        GetWishList()
    },[])

    const removeBookFromWishList = (event) =>{
        RemoveFromWishList(event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }

    return (<div className="wishlistwholepage">
        <Header/>
    <div className="wishListPage">
        <div className="wishListHeader">Home/ My Wishlist</div>
        <div className="wishListContent">
            <div className="contentHeader">My Wishlist (02)</div>
            {
                wishlistArray.map((book) =><div className="section1">
                <div className="section1a">
                    <div className="section1b">
                        <div className="bookImage1">
                            <img src={bookImage2} id="bookImg" />
                        </div>
                        <div className="bookContent">
                            <div className="bookTitle">{book.bookName}</div>
                            <div className="bookAuthor">{book.author}</div>
                            <div className="bookPrice">{book.price}</div>
                        </div>
                    </div>
                    <div className="section1c">
                        <DeleteForeverIcon id = {book.productId} onClick={removeBookFromWishList}/>
                    </div>
                </div>
            </div>)
            }
        </div>
    </div>
    </div>)
}