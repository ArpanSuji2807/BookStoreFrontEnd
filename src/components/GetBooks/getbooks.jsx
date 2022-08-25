import React from "react";
import './getbooks.css'
import bookImage from '../../assets/bookImage.png'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const GetBooks = (props) => {
    return (
        <div onClick={() => props.openBook(props.book)} className="firstBook">
            <div className="booksImage">
                <img src={bookImage} className="imageBook"/>
            </div>
            <div className="bookContent">
                <div className="bookTitle">{props.book.bookName}</div>
                <div className="authorName">By {props.book.author}</div>
                <div className="rating">
                    <div className="rating1">4.5</div>
                    <div className="star"><StarOutlineIcon style={{height:'50%'}}/></div>
                </div>
                <div className="price">Rs.{props.book.price}</div>
            </div>
        </div>
    )
}