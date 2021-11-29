import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import {
  MainContainer, Logo, Input, Button, TextButton,
} from '../styles/style';
import UserContext from '../contexts/userContext';
import { signInUser } from '../services/api.services';

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const [logUser, setLogUser] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  function logIn(event) {
    event.preventDefault();

    signInUser(logUser)
      .then((resp) => {
        setUser(resp.data);
        history.push('/home');
      })
      .catch(() => {
        alert('Usuário ou senha incorretos!');
      });
  }

  return (
    <MainContainer>
      <Logo>My Wallet</Logo>
      <form onSubmit={logIn}>
        <Input type="email" placeholder="E-mail" value={logUser.email} onChange={(e) => setLogUser({ ...logUser, email: e.target.value })} required />
        <Input type="password" placeholder="Senha" value={logUser.password} onChange={(e) => setLogUser({ ...logUser, password: e.target.value })} required />
        <Button type="submit">Entrar</Button>
      </form>
      <TextButton onClick={() => history.push('/sign-up')}>Primeira vez? Cadastre-se!</TextButton>
    </MainContainer>
  );
}
