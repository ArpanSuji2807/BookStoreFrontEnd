import React from "react";
import './cartdetails.css';
import PinDropIcon from '@mui/icons-material/PinDrop';
import bookImage from '../../assets/bookImage.png'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Button from '@mui/material/Button';
import { addCartItem, getCartItem, RemoveBookFromCart, UpdateCart } from "../../services/dataservice";


export const CartDetails = (props) => {

    const [cartArr, setCartArr] = React.useState([])


    const showCustomer = () => {
        props.showAddresDetails()
    }

    const getAllCartItem = () => {
        getCartItem().then((res) => {
            console.log(res);
            setCartArr(res.data.data.books)
        }).catch((error) => {
            console.log(error);
        })
    }

    React.useEffect(() => {
        getAllCartItem()
    }, [])



    const MinusQuantity = (event) =>{
        console.log(cartArr);
        UpdateCart(event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }

    const PlusQuantity = (event) =>{
        console.log(cartArr);
       addCartItem(event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }

    const removeBook = (event) =>{
        RemoveBookFromCart(event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }



    return (<div className="cartdetails">
        <div className="cartdetails1">
            <div className="cartdetailsHeader">
                <div className="cartdetailsHeader1">My cart({cartArr.length})</div>
                <div className="cartdetailsHeader2"><PinDropIcon style={{ color: '#A03037' }} /><span>Use current location</span></div>
            </div>
            {
                cartArr.map((book) => <div className="cartsection1">
                    <div className="booksection"><img src={bookImage} style={{ width: '70%', height: '80%' }} /></div>
                    <div className="bookContent">
                        <div className="bookContent1">
                            <div className="bookHeading">{book.bookName}</div>
                            <div className="bookAuthor">{book.author}</div>
                            <div className="bookPrice">{book.price }</div>
                        </div>
                        <div className="bookIncrement">
                            <div className="bookIncrement1">
                                <RemoveCircleOutlineIcon id ={book.productId} onClick={MinusQuantity} />
                                <div className="quantityBox">{book.quantity}</div>
                                <AddCircleOutlineOutlinedIcon id ={book.productId}  onClick={PlusQuantity}/>
                            </div>
                            <div id ={book.productId} onClick={removeBook} className="remove">
                                <button>Remove</button>
                                </div>
                        </div>
                    </div>
                </div>)
            }

            <div className="PlaceOrder">
                {
                    props.sectTwo ? <div></div> :
                        <Button onClick={showCustomer} size="small" style={{ width: '20%' }} variant="contained">Place Order</Button>
                }
            </div>
        </div>
    </div>)
}