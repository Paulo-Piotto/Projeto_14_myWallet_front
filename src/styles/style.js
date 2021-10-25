import styled from "styled-components";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
`

const Input = styled.input`
    width: 100%;
    height: 58px;
    background-color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 10px;
`
const Logo = styled.h1`
    color: white;
    font-family:'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 30px;
`
const Button =  styled.button`
    width: 100%;
    height: 46px;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #A328D6;
    font-size: 20px;
    font-weight: 700;
`

const TextButton = styled.p`
    color: white;
    font-weight: 700;
    font-size: 15px;
    margin-top: 36px;
`

const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 26px;
    font-weight: 500;
`

export{
    MainContainer,
    Input,
    Logo,
    Button,
    TextButton,
    Header,
}