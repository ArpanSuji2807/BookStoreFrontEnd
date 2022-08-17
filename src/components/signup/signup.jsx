import React from "react";
import './signup.css'
import { TextField, Button } from '@mui/material';
import { UserSignUp } from "../../services/userservice";
const NameRegex = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/
const MobileRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

export const SignUp = (props) => {

    const[regexObj,setRegexObj] = React.useState({NameError:false,NameHelperText:'',EmailError:false,EmailHelperText:'',PasswordError:false,PasswordHelperText:'',MobileError:false,MobileHelperText:''})
    const[signUpObj,setSignUpObj] = React.useState({fullName:'',email:'',password:'',mobile:''})

    const switchForm = () =>{
        props.showLoginPage()
    }

    function takeFullName(event){
        setSignUpObj({...signUpObj,fullName:event.target.value})
    }

    function takeEmail(event){
        setSignUpObj({...signUpObj,email:event.target.value})
    }
    function takePassword(event){
        setSignUpObj({...signUpObj,password:event.target.value})
    }
    function takeMobile(event){
        setSignUpObj({...signUpObj,mobile:event.target.value})
    }

    function onSubmit(){
        let fullNameTest = NameRegex.test(signUpObj.fullName)
        let emailTest = EmailRegex.test(signUpObj.email)
        let passwordTest = PasswordRegex.test(signUpObj.password)
        let mobileTest = MobileRegex.test(signUpObj.mobile)

        if(fullNameTest == true){
            setRegexObj(prevState =>({...prevState,NameError: false,NameHelperText:''}))
        }
        else if(fullNameTest == false){
            setRegexObj(prevState =>({...prevState,NameError: true,NameHelperText:'Enter Valid Name'}))
        }
        if (emailTest == true) {
            setRegexObj(prevState => ({ ...prevState, EmailError: false, EmailHelperText: '' }))
        }
        else if (emailTest == false) {
            setRegexObj(prevState => ({ ...prevState, EmailError: true, EmailHelperText: 'Enter valid email' }))
        }

        if (passwordTest == true) {
            setRegexObj(prevState => ({ ...prevState, PasswordError: false, PasswordHelperText: '' }))
        }
        else if(passwordTest == false) {
            setRegexObj(prevState => ({ ...prevState, PasswordError: true, PasswordHelperText: 'Enter valid password' }))
        }
        if(mobileTest == true){
            setRegexObj(prevState =>({...prevState,MobileError:false,MobileHelperText:''}))
        }
        else if(mobileTest == false){
            setRegexObj(prevState =>({...prevState,MobileError:true,MobileHelperText:'Enter valid number'}))
        }
        if (fullNameTest === true && emailTest === true  && mobileTest === true) {
            console.log(signUpObj)
            UserSignUp(signUpObj).then((res) =>{
                console.log(res);
            }).catch((error) =>{
                console.log(error);
            })
        }
    }

    return (
        <div className="signupPage">
            <div className="signupPage1">
                <div className="signupheader">
                    <div style={{ color: 'gray' }} className='form-name-container' onClick={switchForm}>login</div>
                    <div className='form-name-container' >signup</div>
                </div>
                <div className="signupformContent">
                    <TextField onChange={takeFullName} error={regexObj.NameError} helperText={regexObj.NameHelperText} label="Full Name" variant="outlined" size="small" className='form-content'/>
                    <TextField onChange={takeEmail} error={regexObj.EmailError} helperText={regexObj.EmailHelperText} label="Email" variant="outlined" size="small" className='form-content'/>
                    <TextField onChange={takePassword} error={regexObj.PasswordError} helperText={regexObj.PasswordHelperText} label="Password" variant="outlined" size="small" className='form-content'/>
                    <TextField onChange={takeMobile} error={regexObj.MobileError} helperText={regexObj.MobileHelperText} label="Mobile" variant="outlined" size="small" className='form-content'/>
                    <Button onClick={onSubmit} variant='contained' style={{backgroundColor: "#A03037", opacity: 1}} size="small">signup</Button>
                </div>
            </div>
        </div>
    )
}