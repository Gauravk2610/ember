import React from 'react'
import styled from 'styled-components'
import Box from './Box'

function SplitCounter() {
    return (
        <Container>
            <Wrap>
                <Counter>
                    <Box 
                    img='https://www.misdepartment.com/images/services/remote-server-support.png' 
                    count={100}
                    title='StartUps'
                    />
                    <Box 
                    img='https://www.misdepartment.com/images/services/remote-server-support.png' 
                    count={100}
                    title='StartUps'
                    />
                    <Box 
                    img='https://www.misdepartment.com/images/services/remote-server-support.png' 
                    count={100}
                    title='StartUps'
                    />
                    
                    

                </Counter>
            </Wrap>
            <Main>

                <br />  
                <br />  
            </Main>
        </Container>
    )
}

export default SplitCounter

const Container = styled.div`
    position: relative;
`

const Wrap = styled.div`
    cursor: pointer;
    left: 0;
    right: 0;
    display: flex;
    margin-top: -5%;
    justify-content: center;
`

const Counter = styled.div`

    z-index: 20;
    // margin: 0 60px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 80%;
    justify-content: space-evenly;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    /* box-shadow: 0px 0px 40px white;  */
    transition: transform 0.3s;

    :hover {
        transform: scale(1.1)
    }
`

const Main = styled.div`
    
`