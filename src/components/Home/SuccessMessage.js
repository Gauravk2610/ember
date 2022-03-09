import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectTrigger, selectMessage } from '../../features/navbar/navbarSlice'

function SuccessMessage() {

    const show = useSelector(selectTrigger)
    const message = useSelector(selectMessage)

    return (
        <Container>
            <Toast active={show}>
                {message} 
            </Toast>
        </Container>
    )
}

export default SuccessMessage

const Container = styled.div`
    position: relative;
`

const Toast = styled.div`
    position: fixed;
    z-index: ${props => props.active ? '100': '0'};
    background-color: #00d900b9;
    right: 20px;
    padding: 16px 30px; 
    width: 60%;
    display: flex;
    justify-content: center;
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.6s;
`