import { MainContainer, Input, Button, Header } from "../styles/style";
import styled from "styled-components";
import { transaction } from "../services/api.services";
import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";
import { useHistory } from "react-router-dom";


export default function AddMoney(){
    const { user } = useContext(UserContext);
    const [operation, setOperation] = useState({
        value: '',
        description: ''
    });
    const history = useHistory();
    
    function makeOperation(event){
        event.preventDefault();

        if(user.token){
            transaction(operation, user.token)
                .then((resp) => {
                    alert('Operação realizada com sucesso!');
                    history.push('/home');
                })
                .catch((error) => {
                    alert('algo deu errado, tente novamente mais tarde...');
                })
        }else{
            alert('Você precisa estar logado para realizar uma transação');
        }
    }

    return (
        <Container>
            <Head>
                <p>Nova entrada</p>
            </Head>
            <form onSubmit={makeOperation} >
                <Input type='number' placeholder='Valor' value={operation.value} onChange={(e) => setOperation({...operation, value: Number(e.target.value)})} required />
                <Input type='text' placeholder='Descrição' value={operation.description} onChange={(e) => setOperation({...operation, description: e.target.value})} required />
                <Button type='submit' >Salvar entrada</Button>
            </form>
        </Container>
    );
}

const Container = styled(MainContainer)`
    justify-content: flex-start;
`

const Head = styled(Header)`
    margin-bottom: 30px;
`