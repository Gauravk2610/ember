import React from 'react'
import styled from 'styled-components'

function CardDetail({data}) {
  return (
    <Container>
        {/* img  */}
        <img src={`/assests/${data.img}.png`} alt="" />
        <Content>
            <Title>{data.title}</Title>
            <Desc>{data.desc}</Desc>
            <ButtonWrapper>
                <Register href={'#'}>Register</Register>
                <View href={data.redirect}>View</View>
            </ButtonWrapper>
        </Content>
    </Container>
  )
}

export default CardDetail

const Container = styled.div`
    margin: 32px 0;
    max-width: 400px;
    width: 100%;
    min-width: 300px;
    box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.4);
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    box-sizing: border-box;
    border-radius: 20px;

    img {
        height: 260px;
        width: 100%;
        object-fit: cover;
        border-radius: 20px 20px 0px 0px;
    }
`

const Content = styled.div`
    padding: 20px;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
    @media(max-width: 560px) {
        font-size: 24px
    }
`

const Desc = styled.div`
    margin: 18px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #818181;
    @media(max-width: 560px) {
        font-size: 16px;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Register = styled.a`
    width: 164px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

const View = styled.a`
    width: 164px;
    height: 41px;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`
