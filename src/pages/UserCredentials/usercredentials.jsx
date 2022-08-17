import React from "react";
import './usercredentials.css'
import { SignUp } from "../../components/signup/signup";
import bookstore from '../../assets/bookstoreimage.png'
import { SignIn } from "../../components/signin/signin";

export const Usercredentials = () =>{

    const[showLogin,setShowLogin] = React.useState(true)

    const showSignupPage = () =>{
        setShowLogin(false)
    }

    const showLoginPage = () =>{
        setShowLogin(true)
    }

    return(<div>
       <div className="wholeBody">
            <div className="imageContainer">
                <img src={bookstore} className="imagecontent"></img>
                <div className="textName">ONLINE BOOK SHOPING</div>
            </div>
            <div className="bothFormContainer">
                {
                    showLogin ? <SignIn showSignupPage = {showSignupPage}/> : <SignUp setShowLogin = {setShowLogin}/>
                }
            </div>
       </div>
    </div>)
}