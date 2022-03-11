import React from 'react'
import styled from 'styled-components'
import CardDetail from './CardDetail'


function ItemList({title, data, redirect}) {
  return (
    <Container>
        <Title>{title}</Title>
        <CardWrapper>
            {
                data.map((item, index) => <CardDetail key={index} data={item} />)
            }
        </CardWrapper>
        <More href={redirect}>Click here to view all</More>
    </Container>
  )
}

export default ItemList

const Container = styled.div`
    padding: 32px;
`

const Title = styled.h1` 
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 54.4681px;
    line-height: 64px;
    color: #000000;

`

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

const More = styled.a`
    padding: 16px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

`