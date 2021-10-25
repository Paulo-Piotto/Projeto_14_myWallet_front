import styled from "styled-components";

export default function Profit({transactions}){
    const valor = transactions.amount.value;

    return(
        <BalanceContainer>
            <p>SALDO</p>
            <Cash value={valor}>{transactions.amount.value.toFixed(2)}</Cash>
        </BalanceContainer>
    );
}

const BalanceContainer = styled.div`
    position: absolute;
    display: flex;
    background-color: white;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    height: 12%;
    bottom: 2px;
    font-size: 17px;

    p{
        font-weight: bold;
    }
`

const Cash = styled.span`
    color: ${ ({value}) =>
    value >= 0 ? '#03AC00' : '#C70000' };
`

