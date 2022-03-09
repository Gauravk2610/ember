import React from 'react'
import styled from 'styled-components'
import SubWrap from '../components/Team/SubWrap'

function Team() {
    return (
        <Container>
            <Header><h2>Ember Team</h2></Header>
            <Divider />
            <Wrapper>
                <SubWrap />
            </Wrapper>
        </Container>
    )
}

export default Team

const Container = styled.div`
    margin: 22px 0;
`

const Header = styled.div`
    font-weight: 600;
    font-size: 2.6em;
    color: rgb(0, 0, 0, 0.76);
    display: flex;
    justify-content: center;

    h2 {
        width: fit-content;
        cursor: pointer;
        transition: letter-spacing 0.5s, transform 0.2s;
    }

        
    h2:hover {
        letter-spacing: 16px;
        // transform: scale(1.4);
    }
`

const Divider = styled.div`
    margin: 20px 0;
    height: 2.6px;
    background-color: rgb(0, 0, 0, 0.2);
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`