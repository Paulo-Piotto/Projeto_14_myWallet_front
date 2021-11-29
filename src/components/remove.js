/* eslint-disable max-len */
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  MainContainer, Input, Button, Header,
} from '../styles/style';
import { transaction } from '../services/api.services';
import UserContext from '../contexts/userContext';

export default function RemoveMoney() {
  const { user } = useContext(UserContext);
  const [operation, setOperation] = useState({
    value: '',
    description: '',
  });
  const history = useHistory();

  function makeOperation(event) {
    event.preventDefault();

    if (user.token) {
      transaction({ value: (operation.value) * (-1), description: operation.description }, user.token)
        .then(() => {
          alert('Operação realizada com sucesso!');
          history.push('/home');
        })
        .catch(() => {
          alert('algo deu errado, tente novamente mais tarde...');
        });
    } else {
      alert('Você precisa estar logado para realizar uma transação');
    }
  }

  return (
    <Container>
      <Head>
        <p>Nova saída</p>
      </Head>
      <form onSubmit={makeOperation}>
        <Input type="number" placeholder="Valor" value={operation.value} onChange={(e) => setOperation({ ...operation, value: Number(e.target.value) })} required />
        <Input type="text" placeholder="Descrição" value={operation.description} onChange={(e) => setOperation({ ...operation, description: e.target.value })} required />
        <Button type="submit">Salvar saída</Button>
      </form>
    </Container>
  );
}

const Container = styled(MainContainer)`
    justify-content: flex-start;
`;

const Head = styled(Header)`
    margin-bottom: 30px;
`;
