import styled from "styled-components";
import dayjs from "dayjs";

export default function Transaction({data}){
    return (
        <Container>
            <Info>
                <span>{dayjs(data.date).format('DD/MM')}</span>
                <p>{data.description}</p>
            </Info>
            <Cash value={data.value}>{data.value}</Cash>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 16px;    
`

const Info = styled.div`
    display: flex;

    span{
        color: #C6C6C6;
        margin-right: 12px;
    }

    p{
        max-width: 12ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const Cash = styled.p`
    color: ${ ({value}) =>
            value >= 0 ? '#03AC00' : '#C70000' };
`