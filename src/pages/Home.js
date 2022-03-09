import React from 'react'
import styled from 'styled-components'
import SplitCounter from '../components/Home/SplitCounter'

function Home() {
    return (
        <Container>
            <Intro>
                <Bg>
                    <img src='http://www.atharvacoe.ac.in/wp-content/uploads/07.jpg' />
                </Bg>
            </Intro>
            <SplitCounter />
        </Container>
    )
}

export default Home

const Container = styled.div`

`

const Intro = styled.div`


`

const Bg = styled.div`
    img {
        width: 100%;
        object-fit: cover;
        height: 46vw;
    }
`