import React from "react";
import { SelectedBook } from "../../components/Book/book";
import { Header } from "../../components/Header/header";
import { HomePage } from "../../components/Home/homepage";
import './dashboard.css'



export const DashBoard = () => {

    const [currentBook, setCurrentBook] = React.useState({})
    const [view, setView] = React.useState(false)
    const[searchBook,setSearchBook] = React.useState('')

    const openBook = (book) => {
        console.log(book);
        setCurrentBook(book)
        setView(true);
    }

    const showSearchedBooks = (string) =>{
        setSearchBook(string)
    }

    return (<div className="wholeDashboardPage">
        <Header  showSearchedBooks = {showSearchedBooks} />
        <div className="pageHome">
            { view? <SelectedBook book ={currentBook}/>:<HomePage searchBook ={searchBook}  openBook={openBook}/>}
        </div>
        
    </div>)
}