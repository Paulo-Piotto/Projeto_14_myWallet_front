import styled from 'styled-components';

export default function Profit({ transactions }) {
  const valor = transactions.amount.value;

  return (
    <BalanceContainer>
      <p>SALDO</p>
      <Cash value={valor}>{transactions.amount.value.toFixed(2)}</Cash>
    </BalanceContainer>
  );
}

const BalanceContainer = styled.div`
    display: flex;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 17px;
    margin-top: 20px;

    p{
        font-weight: bold;
    }
`;

const Cash = styled.span`
    color: ${({ value }) => (value >= 0 ? '#03AC00' : '#C70000')};
`;
