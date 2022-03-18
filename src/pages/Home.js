import React, { useRef, useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ItemList from '../components/Home/ItemList'
import SplitCounter from '../components/Home/SplitCounter'
import videoIntro from '../assests/Intro.mp4'

const eventData = [
    {
        title: 'Robo Soccer',
        img: 'events/Soccer-bg',
        rate: 50,
        redirect: '/events',
        desc: "There will be a football arena where two players will compete with each other for the maximum goals. Goals shall be made by pushing the ball towards the goal post by the robot’s front only."
    },
    {
        title: 'Shark Tank',
        img: 'events/Shark-bg',
        rate: 50,
        redirect: '/events',
        desc: "Share your business mission, products, and services. State your current progress towards your plans including business model, USP",
        
    },
    {
        title: 'Drone Arena',
        img: 'events/Drone-b',
        rate: 50,
        redirect: '/events',
        desc: "You will get a drone by which you need to complete the racetrack by avoiding the hurdles and hoops in the minimum required time. (will get one minute of free trial and demo)",
        
    },
]

function Home() {

    const [play, setPlay] = useState(false)
    const videoControl = useRef(null)

    return (
        <Container>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Intro>
                <Bg>
                    <video ref={videoControl} loop muted >
                        <source src={videoIntro} type="video/mp4" />
                    </video>
                    {/* <img src='/assests/home-bg.png' /> */}
                </Bg>
                <MainBg show={play}>
                    <Content>
                        <Title>EMBER</Title>
                        <p>Amet minim mollit non
                        deserunt ullamco est sit
                        aliqua dolor do amet sint.
                        Velit officia consequat duis
                        enim velit mollit.</p>
                        {/* <Register>Register Now</Register> */}
                    </Content>
                    <Play onClick={() => {
                        setPlay(true)
                        videoControl.current.play()
                    }} 
                        show={play}>PLAY <img src="/assests/play.png" alt="play" /></Play>
                </MainBg>
            </Intro>
            <SplitCounter />
            <ItemList title={'Events'} data={eventData} redirect={'/events'} />
            <ItemList title={'Workshop'} data={eventData} redirect={'/workshop'} />
        </Container>
    )
}

export default Home

const Container = styled.div`

`

const Intro = styled.div`
    position: relative;

`

const Bg = styled.div`
    position: relative;
    img, video {
        width: 100%;
        object-fit: cover;
        height: 700px;
    }

    @media(max-width: 560px) {
        img, video {
            width: 100%;
            object-fit: cover;
            height: auto;
            min-height: 400px;
        }
    }
`

const MainBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    transform:  ${props => props.show ? 'translateX(-100%)' : 'translateX(0)'} ;
    transition: transform 500ms ease-in-out;
    transition-delay: 500ms;
    /* background: linear-gradient(90.07deg, rgba(4, 4, 4, 0.7) 0.06%, rgba(255, 255, 255, 0) 99.94%); */
`

const Content = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(90.22deg, rgba(255, 255, 255, 0.3) 0.18%, rgba(255, 255, 255, 0.3) 99.8%);
    border-right: 6px solid #FFFFFF;
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 64px;
    
    p {
        max-width: 360px;
        width: 100%;
        min-width: 260px;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 40px;
        color: #FFFFFF;
    }

    @media(max-width: 786px) {
        width: 100%;
        
        p {
            font-size: 18px;
            line-height: 20px;
            
        }
    }
    @media(max-width: 560px) {
        padding: 0 24px;
        background: rgba(0, 0, 0, 0.6);
        justify-content: flex-start;
        padding-top: 64px;
    }

`

const Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 107px;
    color: #FFFFFF;
    @media(max-width: 560px) {
        font-size: 50px;
        line-height: 60px;

    }
`

const Register = styled.div`
    margin-top: 36px;
    margin-bottom: 120px;
    width: 239px;
    height: 54px;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    @media(max-width: 560px) {
        display: none;
    }
`

const Play = styled.button`
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 120px;
    margin: 0 auto;
    width: 150px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.show ? 0 : 1};
    transform:  ${props => props.show ? 'translateY(100%)' : 'translateY(0)'} ;
    transition: all 500ms ease-in;

    img {
        margin-right: -24px;
        margin-left: 10px;
    }
    @media(max-width: 786px) {
        position: relative;
        
    }
`