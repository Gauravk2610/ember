import React from 'react'
import styled from 'styled-components'
import NewsLetter from './NewsLetter'
import SocialMedia from './SocialMedia'
import SubSection from './SubSection'
import UsefulLinks from './UsefulLinks'

function Footer() {
    return (
        <>
            <Container>
                <Wrap>
                    <SubSection />
                    <SocialMedia />
                    <UsefulLinks />
                    <NewsLetter />
                </Wrap>
            </Container>
            <Bottom>Ember | 2022 </Bottom>
        </>
    )
}

export default Footer

const Container = styled.div`
    position: relative;
    background-color: rgb(45, 136, 255, 0.7);
    color: white;
`

const Wrap = styled.div`
    padding: 32px 46px;
    display: flex;
    justify-content: space-evenly;

    @media(max-width: 1000px) {
        padding: 32px 10px;
        
    }
    @media(max-width: 900px) {
        padding: 32px 10px;
        flex-wrap: wrap;
        
    }
    @media(max-width: 400px) {
        padding: 32px 0px;
        flex-wrap: wrap;
        
    }
`

const Bottom = styled.div`
    background: #000000;
    display: flex;
    justify-content: center;
    padding: 8px 0;
    color: white;
`