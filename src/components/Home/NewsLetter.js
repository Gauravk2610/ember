import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { toastMessage } from '../../features/navbar/navbarSlice';

function NewsLetter() {
    const dispatch = useDispatch();

    
    const Subscription = (e) => {
        e.preventDefault();
        console.log(e.target.email.value)
        e.target.email.value = null
        dispatch(toastMessage(({trigger: true, message: 'Thanks For Subscribing'})))
        setTimeout(() => {
            dispatch(toastMessage(({trigger: false, message: null})))
        }, 2000);
    }


    return (
        <Container>
            <Title>Useful Links</Title>
            <SectionWrap  onSubmit={Subscription} >
               <h3>Subscribe to our newsletter</h3> 
               <input id='email' type='email'  placeholder='embercouncil@gmail.com' />
            </SectionWrap>
        </Container>
    )
}

export default NewsLetter

const Container = styled.div`
    margin: 26px 0px;
    display: flex;

    flex-direction: column;
`

const Title = styled.h2`
    font-weight: 600;
    display: flex;
    margin-bottom: 6px;
    // justify-content: center;
`

const SectionWrap = styled.form`

    h3 {
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        outline-width: 0px;
    }
`