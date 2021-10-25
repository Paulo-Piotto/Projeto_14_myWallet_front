import { MainContainer, Header } from "../styles/style";
import styled from "styled-components";
import { IoExitOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useContext } from "react/cjs/react.development";

export default function Home(){
    const history = useHistory();

    return (
        <MainContainer>
            <Header>
                <h2>Olá, Fulano</h2>
                <IoExitOutline />
            </Header>
            <InfoTable>
                <p>Não há registros de entrada ou saída</p>
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
    justify-content: center;
    align-items: center;
    text-align: center;
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