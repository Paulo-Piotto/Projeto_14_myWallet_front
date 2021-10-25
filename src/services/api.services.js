import axios from "axios";

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

function transaction(money, token){
    return axios.post(`${URL}transactions`, money, config(token));
}

function balance(token){
    return axios.get(`${URL}balance`, config(token));
}

export{
    signInUser,
    signUpUser,
    transaction,
    balance,
}