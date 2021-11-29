import styled from 'styled-components';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

const InfoTable = styled.div`
    width: 100%;
    height: 68%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: ${({ transactions }) => (!transactions.history[0] ? 'center' : 'space-between')};
    align-items: center;
    text-align: center;
    color: ${({ transactions }) => (!transactions.history[0] ? '#868686' : 'black')};
    padding: 15px;
    /* position: relative; */
    overflow-y: scroll;
`;

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
`;

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
`;

const Add = styled(IoAddCircleOutline)`
    font-size: 25px;
`;

const Remove = styled(IoRemoveCircleOutline)`
    font-size: 25px;
`;

const Container = styled.div`
    width: 100%;
`;

export {
  InfoTable,
  Buttons,
  Button,
  Add,
  Remove,
  Container,
};
