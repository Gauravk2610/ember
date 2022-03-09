import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CountUp, { useCountUp } from 'react-countup';

function Box({img, count, title}) {

    const [counter, setCounter] = useState(true)
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
      ref: countUpRef,
      start: 0,
      end: count,
      delay: 1000,
      duration: 2,
      startOnMount: false

    });    

    const triggerCounter = () => {

        const countersection = document.getElementsByClassName('CounterWrap')[0]
        const { pageYOffset } = window;

        
        const sectionTop = countersection.offsetTop;
        const sectionHeight = countersection.offsetHeight;

        if ((pageYOffset >= (sectionTop - sectionHeight/2))) {
                // setCounter(false)
            start()
            window.removeEventListener('scroll', triggerCounter)
                
            // trigger.click()

        }
        // } )

    }

    useEffect(() => {
        window.addEventListener('scroll', triggerCounter)
        return () => {
            window.removeEventListener('scroll', triggerCounter)
        }
    }, [])

    return (
        <Container>
            <StyleImg src={img}/>
            <Wrap className='CounterWrap'>
            <div>
                <div className='count' ref={countUpRef} style={{fontSize: '2.0em'}} />
            </div>
                <Title>
                    {title}
                </Title>
                
            </Wrap>

            
        </Container>
    )
}

export default Box

const Container = styled.div`
    display: flex;
    flex: 1;
    min-width: 300px;
    max-width: 360px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 10px;
    margin: 10px;
    justify-content: space-evenly;
    border: 1px solid rgb(0, 0, 0, 0.1);
    
    @media(max-width: 1100px) {
        min-width: 160px;
    }

    @media(max-width: 540px) {
        min-width: 160px;
        max-width: 200px;
    }
`
                
const StyleImg = styled.img`
    height: 100px;
    width: 100px;
    object-fit: contain;
    @media(max-width: 890px) {
        height: 60px;
        width: 60px;
    }
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    align-items: center;
    justify-content: center;

    @media(max-width: 890px) {
        .count {
            font-size: 1.6em !important;
        }
    }
`

const Title = styled.div`
    font-size: 1.2em;

    @media(max-width: 890px) {
        font-size: 1.0em
    }
` 