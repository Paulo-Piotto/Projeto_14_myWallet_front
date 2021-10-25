import { MainContainer, Header } from "../styles/style";
import styled from "styled-components";
import { IoExitOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/userContext";
import { balance } from "../services/api.services";
import Transaction from "./transaction";
import Profit from "./profit";


export default function Home(){
    const history = useHistory();
    const [transactions, setTransactions] = useState({
        amount: { value: 0},
        history: []
    });
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        balance(user.token)
        .then((resp) => {
            setTransactions(resp.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    function logOut(){
        setUser({});
        history.push('/');
    }



    return (
        <MainContainer>
            <Header>
                <h2>Olá, {user.name}</h2>
                <IoExitOutline onClick={logOut} />
            </Header>
            <InfoTable transactions={transactions}>
                <Container>
                {!transactions.history[0] ? <p>Não há registros de entrada ou saída</p>
                :
                transactions.history.map((data, index) => <Transaction key={index} data={data} />)
                }
                </Container>
                {!transactions.history[0] ? ''
                : <Profit transactions={transactions} />
                }
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

const InfoTable = styled.div`
    width: 100%;
    height: 68%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: ${ ({transactions}) =>
            !transactions.history[0] ? 'center' : 'space-between' };
    align-items: center;
    text-align: center;
    color: ${ ({transactions}) =>
            !transactions.history[0] ? '#868686' : 'black' };
    padding: 15px;
    /* position: relative; */
    overflow-y: scroll;
`

const Buttons = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-top: 15px;
    font-size: 17px;
    font-weight: 700;
`

const Button = styled.div`
    width: 48%;
    height: 90%;
    background-color: #A328D6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 5px;
    padding: 10px;

    p{
        width: 50%;
    }
`

const Add = styled(IoAddCircleOutline)`
    font-size: 25px;
`

const Remove = styled(IoRemoveCircleOutline)`
    font-size: 25px;
`

const Container = styled.div`
    width: 100%;
`