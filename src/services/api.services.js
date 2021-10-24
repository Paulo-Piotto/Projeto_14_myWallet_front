import axios from "axios";
import SignUp from "../components/signUp";

const URL = "http://localhost:4000/";

function config(token) {
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
}

function signInUser(user) {
    return axios.post(`${URL}sign-in`, user);
}

function signUpUser(user) {
    return axios.post(`${URL}sign-up`, user);
}

export{
    signInUser,
}