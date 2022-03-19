import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";

const SponsorList = [
    'baskins', 'bright', 'dcb', 'golds', 'hdfc', 'hyundai', 'IMFS', 'imperial', 'inox', 'KTM', 'mcdonalds', 'olivia', 'oppo', 'redbull', 'shein', 'suzuki', 'Tatahouse', 'tinder', 'union', 'zebronics'
]

function Sponsors() {
  return (
    <Container>
        <Title>Previous Sponsors</Title>

        <Marquee speed={50} gradientWidth={0} >
            {
                SponsorList.map((sponsor, index) => (
                    <img key={index} src={`/assests/sponsors/${sponsor}.png`} alt={sponsor} />
                ))
            }
        </Marquee>
    </Container>
  )
}

export default Sponsors

const Container = styled.div`
    padding: 32px 0;

    img {
        width: 240px;
        margin: 0 24px;
    }
`

const Title = styled.h1` 
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 54.4681px;
    line-height: 64px;
    color: #000000;

    margin-bottom: 32px;

    @media(max-width: 560px) {
        font-size: 36px;
    }

`