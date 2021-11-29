import { IoExitOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {
  InfoTable, Buttons, Button, Add, Remove, Container,
} from '../styles/homeStyles';
import { MainContainer, Header } from '../styles/style';
import UserContext from '../contexts/userContext';
import { balance } from '../services/api.services';
import Transaction from './transaction';
import Profit from './profit';

export default function Home() {
  const history = useHistory();
  const [transactions, setTransactions] = useState({
    amount: { value: 0 },
    history: [],
  });
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    balance(user.token)
      .then((resp) => {
        setTransactions(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function logOut() {
    setUser({});
    history.push('/');
  }

  return (
    <MainContainer>
      <Header>
        <h2>
          Olá,
          {' '}
          {user.name}
        </h2>
        <IoExitOutline onClick={logOut} />
      </Header>
      <InfoTable transactions={transactions}>
        <Container>
          {!transactions.history[0] ? <p>Não há registros de entrada ou saída</p>
            : transactions.history.map((data, index) => <Transaction key={index} data={data} />)}
        </Container>
        {!transactions.history[0] ? ''
          : <Profit transactions={transactions} />}
      </InfoTable>
      <Buttons>
        <Button onClick={() => history.push('/add')}>
          <Add />
          <p>Nova entrada</p>
        </Button>
        <Button onClick={() => history.push('/remove')}>
          <Remove />
          <p>Nova Saída</p>
        </Button>
      </Buttons>
    </MainContainer>
  );
}
