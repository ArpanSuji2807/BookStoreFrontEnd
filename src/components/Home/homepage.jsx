import React from "react";
import { GetBooks } from "../GetBooks/getbooks";
import './homepage.css'
import { GetAllBooks } from "../../services/dataservice";
import Pagination from '@mui/material/Pagination';



export const HomePage = (props) => {

    const [booksArray,setBooksArray] = React.useState([])
    const[page,setPage] = React.useState(1)
    const[postPerPage,setPostPerPage] = React.useState(8)
    const lastPostIndex = page * postPerPage;
    const firsPostIndex = lastPostIndex - postPerPage;

    const GetBook =() =>{
        GetAllBooks().then((res) =>{
            console.log(res);
            setBooksArray(res.data.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    React.useEffect(() =>{
        GetBook()
    },[])

    const takePage = (e,v) =>{
        console.log(v)
        setPage(v);
    }

    return (
        <div className="totalPage">
            <div className="home-header">
                <div className="Books">Books ({booksArray.length} items)</div>
                <div className="reference">Sort by reference</div>
            </div>
            <div className="getBooksPage">
                {
                    booksArray.slice(firsPostIndex,lastPostIndex).filter((book) =>book.bookName.toLowerCase().includes(props.searchBook.toLowerCase())).map(book =><GetBooks book ={book} openBook ={props.openBook}/>)
                }
            </div>
            <div className="pagination">
                <Pagination onChange={takePage} page = {page}  count={10} color="secondary"/>
                </div>
        </div>
    )
}