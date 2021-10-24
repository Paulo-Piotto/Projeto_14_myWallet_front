import { MainContainer, Logo, Input, Button, TextButton } from "../styles/style";
import { Link } from 'react-router-dom';

export default function SignUp(){
    return (
        <MainContainer>
            <Logo>My Wallet</Logo>
            <Input type='text' placeholder='Nome'></Input>
            <Input type='text' placeholder='E-mail'></Input>
            <Input type='text' placeholder='Senha'></Input>
            <Input type='text' placeholder='Confirme a senha'></Input>
            <Button>Entrar</Button>
            <Link to='/'>
                <TextButton>Já tem uma conta? Entre agora!</TextButton>
            </Link>
        </MainContainer>
    );
}