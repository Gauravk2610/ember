import styled from '@emotion/styled'
import React from 'react'

function RoadMapRow({img, title, desc, date}) {
  return (
    <Container>
        <Left className='img-startup'>
            <img src={img} alt={title} />
        </Left>
        <Middle>
            <Dot><Icon /></Dot>
            <Line className='divider' />
        </Middle>
        <Right className='details-startup'>
            <Card>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <Date>{date}</Date>
            </Card>
        </Right>
    </Container>
  )
}

export default RoadMapRow

const Container = styled.div`
    margin: 0 64px;
    display: flex;
    min-height: 350px;
    padding-bottom: 64px;
    justify-content: center;
    position: relative;
    :nth-child(even) {
        flex-direction: row-reverse;

        .img-startup {
            margin-right: 0%;
            margin-left: 5%;
            justify-content: flex-start;
        }

        .details-startup {
            margin-right: 5%;
            margin-left: 0% !important;
            display: flex;
            justify-content: flex-end;
        }
    }
    :last-child{
        .divider {
            height: 0%;
        }
    }

    @media(max-width: 1000px) {
        margin: 0 32px;
    }

    @media(max-width: 760px) {
        flex-direction: column !important;
        .img-startup {
            margin-right: 0% !important;
            margin-left: 0% !important;
            width: 100% !important;
            justify-content: center !important;
        }

        .details-startup {
            width: 100% !important;
            margin-top: 32px;
            margin-right: 0% !important;
            margin-left: 0% !important;
            display: flex;
            justify-content: center !important;
        }
    }

    @media(max-width: 560px) {
        margin: 0 16px;
        .img-startup , .details-startup {
            margin-left: 32px !important;
            margin-right: 32px !important;
        }
    }
    @media(max-width: 520px) {
        .img-startup , .details-startup {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }

`

const Middle = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    height: 100%;
    @media(max-width: 760px) {
        align-items: flex-start;
    }
    
    @media(max-width: 520px) {
        display: none;
    }
`

const Dot = styled.div`
    height: 50px;
    width: 50px;
    border: 2px dotted black ;
    border-spacing: 100px;
    border-radius: 100%;
    display: flex;
    align-items: center;

`

const Icon = styled.div`
    margin: auto;
    height: 25px;
    width: 25px;
    border-radius: 100%;
    background: #2D88FF;
`

const Line = styled.div`
    height: 100%;
    width: 4px;
    background-color: #303030d7;
    @media(max-width: 760px) {
        margin-left: 22.5px;
    }

`

const Left = styled.div`
    width: 50%;
    margin-right: 5%;
    display: flex;
    justify-content: flex-end;
    img {
        min-width: 250px;
        width: 100%;
        max-width: 450px;
        height: 250px;
        object-fit: cover;
        border-radius: 20px;
    }

`

const Right = styled.div`
    margin-left: 5%;
    width: 50%;
`

const Card = styled.div`
    min-width: 200px;
    max-width: 450px;
    padding: 24px;
    width: 100%;
    min-height: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #373B44;
    text-transform: uppercase;
`

const Desc = styled.p`
    padding: 6px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #6D6D6D;
`

const Date = styled.div`
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #6D6D6D;
`