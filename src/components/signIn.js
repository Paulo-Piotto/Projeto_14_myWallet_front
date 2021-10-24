import styled from "styled-components";
import { MainContainer, Logo, Input, Button, TextButton } from "../styles/style";

export default function SignIn(){
    return (
        <MainContainer>
            <Logo>My Wallet</Logo>
            <Input type='text' placeholder='E-mail'></Input>
            <Input type='text' placeholder='Senha'></Input>
            <Button>Entrar</Button>
            <TextButton>Primeira vez? Cadastre-se!</TextButton>
        </MainContainer>
    );
}