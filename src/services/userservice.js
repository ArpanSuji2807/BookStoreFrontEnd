import axios from "axios";

export const UserSignUp = (Obj) =>{
    console.log(Obj);
    let response = axios.post('http://localhost:8000/api/v1/users/SignUp',Obj);
    return response;
}

export const UserSignIn = (Obj) =>{
    console.log(Obj);
    let response = axios.post('http://localhost:8000/api/v1/users/login',Obj);
    return response;
}