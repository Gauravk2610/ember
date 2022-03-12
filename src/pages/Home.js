import React, { useRef, useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ItemList from '../components/Home/ItemList'
import SplitCounter from '../components/Home/SplitCounter'
import videoIntro from '../assests/Intro.mp4'

const eventData = [
    {
        title: 'RoboSoccer',
        img: 'events/soccer',
        redirect: '/events/robosoccer',
        desc: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit."
    },
    {
        title: 'RoboSoccer',
        img: 'events/soccer',

        redirect: '/events/roboscooer',
        desc: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit."
    },
    {
        title: 'RoboSoccer',
        img: 'events/soccer',

        redirect: '/events/roboscooer',
        desc: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit."
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
                        <Register>Register Now</Register>
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
    
    }

`

const Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 107px;
    color: #FFFFFF;
    @media(max-width: 560px) {
        font-size: 50px
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