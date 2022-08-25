import React from "react";
import './book.css'
import { Button } from "@mui/material";
import bookImage from '../../assets/bookImage.png'
import bookImage1 from '../../assets/bookimage1.png'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { addCartItem } from "../../services/dataservice";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { getCartItem } from "../../services/dataservice";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { UpdateCart } from "../../services/dataservice";
import { AddWishList } from "../../services/dataservice";
import { useNavigate } from "react-router-dom";



export const SelectedBook = (props) => {

    const [bookCount, setBookCount] = React.useState(0)
    const navigate = useNavigate();
    const [bookId, setBookId] = React.useState([])

    const addBooks = () => {
        addCartItem(props.book._id).then((res) => {
            console.log(res);
            setBookCount(1);
        }).catch((error) => {
            console.log(error);
        })
    }

    const IncreaseQuantity = () => {
        addCartItem(props.book._id).then((res) => {
            res.data.data.books.filter((cart) => {
                if (cart.productId == props.book._id) {
                    setBookCount(cart.quantity)
                }
            })
        })
    }

    const DecreaseQuantity = () => {
        UpdateCart(props.book._id).then((res) => {
            res.data.data.books.filter((cart) => {
                if (cart.productId == props.book._id) {
                    setBookCount(cart.quantity)
                }
            })
        })
    }

    React.useEffect(() => {
        getCartItem().then((res) => {
            console.log(res);
            let filterArr = res.data.data.books.filter((cart) => {
                if (cart.productId == props.book._id) {
                    setBookCount(cart.bookCount)
                    setBookId(props.book._id)
                    return cart;
                }
                else {
                    setBookCount(0)
                    return cart;
                }
                return {}
            })
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const AddToBag = () => {
        return (<div className="bagIncrement">
            <div className="bagIncrement1">
                <RemoveCircleOutlineIcon onClick={DecreaseQuantity} />
                <div className="bagquantityBox">{bookCount}</div>
                <AddCircleOutlineOutlinedIcon onClick={IncreaseQuantity} />
            </div>
        </div>)
    }

    const AddBookToWishList = () => {
        AddWishList(props.book._id).then((res) => {
            console.log(res);
            navigate('/Dashboard/Wishlist')
        }).catch((error) => {
            console.log(error);
        })
    }

    return (<div className="bookPage">
        <div className="bookPage1">Home/Books(01)</div>
        <div className="bookwholebody">
            <div className="booksection1">
                <div className="booksection1a">
                    <div className="booksection1b">
                        <div className="booksection1b1">
                            <div className="image1">
                                <img src={bookImage} style={{ width: '80%', height: '90%' }} className="image" />
                            </div>
                            <div className="image2">
                                <img src={bookImage1} style={{ width: '80%', height: '90%' }} className="image" />
                            </div>
                        </div>
                        <div className="booksection1b2">
                            <img src={bookImage} style={{ width: '75%', height: '90%' }} />
                        </div>
                    </div>
                    <div className="booksection1c">
                        {
                            (bookId.length > 0) ?
                                AddToBag() : <Button onClick={addBooks} variant="contained" style={{ backgroundColor: "#A03037" }} size="small" className="addcart">Add to bag</Button>
                        }
                        <Button onClick={AddBookToWishList} startIcon={<FavoriteOutlinedIcon />} variant="contained" style={{ backgroundColor: "black" }} size="small" className="wishlist">Wishlist</Button>
                    </div>
                </div>
            </div>
            <div className="booksection2">
                <div className="content">
                    <div className="booktitle">{props.book.bookName}</div>
                    <div className="bookauthor">By {props.book.author}</div>
                    <div className="bookrating">
                        <div className="bookrating1">
                            4.5
                            <StarOutlineIcon style={{ width: "50%", height: "90%" }} size="smaller" className="bookstar" />
                        </div>
                    </div>
                    <div className="bookprice">Rs.{props.book.price}</div>
                </div>
                <div className="content1">
                    <div className="bookdetail">Book Detail</div>
                    <div className="bookdetail1">{props.book.description}</div>
                </div>
            </div>
        </div>
    </div>)
}