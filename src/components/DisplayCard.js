import React from 'react'
import styled from 'styled-components'

function DisplayCard({data}) {
  return (
    <Container bg={data.bg}>
        <Left src={'/assests/events/'+data.poster} />
        <Right>
            <Title>{data.title}</Title>
            <Desc>{data.desc}</Desc>
            <Date>{data.date}</Date>
            <Rate>ENTRY FEE:- ₹ {data.rate}</Rate>
            <Register>Register Now</Register>
        </Right>
    </Container>
  )
}

export default DisplayCard

const Container = styled.div`
    width: 100%;
    padding: 0 64px;
    min-height: 650px;
    background-image: url(${props => props.bg ? '/assests/events/'+props.bg: ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    @media(max-width: 860px) {
        flex-direction: column;
    }

    @media(max-width: 560px) {
        padding: 0 32px;
    }
`

const Left = styled.img`
    margin: auto 0;
    min-width: 200px;
    width: 100%;
    height: 515.36px;
    max-width: 380px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    object-fit: cover;
    @media(max-width: 560px) {
        margin: 32px 0;
        height: 400px;
    }
`

const Right = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 515.36px;
    margin-left: 64px;
    max-width: 360px;
    width: 100%;
    min-width: 200px;
    @media(max-width: 860px) {
        margin-left: 0px;
    }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #FFFFFF;
    @media(max-width: 500px) {
        font-size: 30px;
        line-height: 37px;
    }
`

const Desc = styled.div`
    padding: 6px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

const Date = styled.div`
    padding: 6px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

const Rate = styled.div`
    padding: 24px 0;
    color: #FFFFFF;
`

const Register = styled.button`
    border: none;
    outline: none;
    width: 164px;
    height: 41px;
    text-align: center;
    background: #000000;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;
`
