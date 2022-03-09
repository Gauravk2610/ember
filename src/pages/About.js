import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <Container>
            <Header>About Us</Header>
        </Container>
    )
}

export default About

const Container = styled.div`
    margin: 22px 0;
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.6em;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.76)
`