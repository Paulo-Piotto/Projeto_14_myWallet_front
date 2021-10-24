import { MainContainer, Logo, Input, Button, TextButton } from "../styles/style";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {  signUpUser } from "../services/api.services";

export default function SignUp(){
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function createUser(event){
        event.preventDefault();

        if(password === confirmPassword){
            signUpUser({name, email, password})
            .then(() => {
                alert('Usuário cadastrado com sucesso!')
                history.push('/')
            })
            .catch(() => alert('dados inválidos'))
        }else{
            alert('As senhas precisam ser iguais!')
        }
        
    }

    return (
        <MainContainer>
            <Logo>My Wallet</Logo>
            <form onSubmit={createUser}>
            <Input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} required ></Input>
            <Input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required ></Input>
            <Input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required ></Input>
            <Input type='password' placeholder='Confirme a senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required ></Input>
            <Button type='submit'>Entrar</Button>
            </form>
            <TextButton onClick={() => history.push('/')}>Já tem uma conta? Entre agora!</TextButton>
        </MainContainer>
    );
}