import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { toastMessage } from '../features/navbar/navbarSlice';
import {Helmet} from "react-helmet";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'

function Contact() {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const feedBack = async(e) => {
        e.preventDefault();
        setLoading(true)
        const target = e.target
        const name = target.name.value   
        const email = target.email.value
        const phone = target.phone.value
        const message = target.message.value

        await addDoc(collection(db, 'contactus'), {
            name: name,
            email: email,
            phone: phone,
            message: message,
            timestamp: serverTimestamp()
        })


        target.phone.value = null
        target.name.value = null
        target.email.value = null
        target.message.value = null
        setLoading(false)
        dispatch(toastMessage(({trigger: true, message: 'Will get back to you soon'})))
        setTimeout(() => {
            dispatch(toastMessage(({trigger: false, message: null})))
        }, 2000);
    }

    return (
        <Container>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Wrap onSubmit={feedBack}>
                <Title>Get In Touch</Title>
                <SubTitle>Feel free to contact us in case of any queries</SubTitle>
                <Content>
                    <Left>
                        <input type="text" id='name' placeholder='Name' required />
                        <input type="text" className='email' id='email'  placeholder='Email-Id' required />
                        <input type="text" id='college' placeholder='College Name' required />
                        <input type="text" id='phone' placeholder='Phone No' maxLength={10} required />
                    </Left>
                    <Right>
                        <textarea name="" id="message" required placeholder='Write your query'></textarea>
                    </Right>
                </Content>
                <SubmitButton>
                    <button style={{ opacity: loading ? 0.4 : 1 }} disabled={loading} type='submit'>Send Message</button></SubmitButton>
            </Wrap>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    padding: 60px 20px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
`
    
const Wrap = styled.form`
    padding: 30px;
    width: 70%;
    border-radius: 10px;

    // background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    // color: white;
    @media(max-width: 560px){
        width: 98%;
    }
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
`

const SubTitle = styled.h4`
    padding: 26px 0;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    display: flex;

    @media(max-width: 600px){
        flex-direction: column;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    input {
        display: flex;
        margin: 10px;
        width: 80%;
        border: none;
        outline-width: 1px;
        outline-color: rgb(45,136,255,0.7);
        padding: 16px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        transition: box-shadow 400ms, outline-color 400ms;
    }
    input:active, input:focus {
        box-shadow: 0px 0px 10px rgba(255, 255, 255);
    }

    @media(max-width: 560px) {
        input {
            width: 100%
        }
    }
`

const Right = styled.div`
    display: flex;
    flex: 1;
    textarea {
        margin: 10px;
        width: 80%;
        flex: 1;
        height: auto;
        resize: none;
        padding: 16px;        
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        outline-width: 1px;
        outline-color: rgb(45,136,255,0.7);
        transition: box-shadow 400ms, outline-color 400ms;
        border: none;
    }
    textarea:active, textarea:focus {
        box-shadow: 0px 0px 10px rgba(255, 255, 255);
    }
    @media(max-width: 560px) {
        textarea {
            margin: 10px 0;

            width: 100%;;
        }
    }
`

const SubmitButton = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 30px 0;
    margin-bottom: 16px;
    button {
        width: 76%;
        padding: 16px;
        background-color: rgb(45,136,255,0.7);
        color: white;
        font-weight: 600;
        border: none;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 500ms, box-shadow 500ms;
    }

    button:hover {
        background-color: white;
        box-shadow: 0px 0px 10px rgb(45,136,255,0.7);
        color: black;
    }
`