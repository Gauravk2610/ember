import React from 'react'
import DisplayCard from '../components/DisplayCard'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const EventList = [
    {
        title: 'Robo Soccer',
        desc: "There will be a football arena where two players will compete with each other for the maximum goals. Goals shall be made by pushing the ball towards the goal post by the robot’s front only. The event will be held in a tournament form so if you win you will be promoted to the next round.",
        date: '3 - 6 April',
        rate: '50',
        price: '1000',
        Fprice:  null,
        Sprice:  null,
        Tprice: null,
        bg: 'bg-soccer.png',
        img: 'Soccer-bg.png',
        poster: 'RoboSoccer.png'
    },
    {
        title: 'Robo Maze',
        desc: "A robot will be provided which need to be driven through the maze and reach the end. (car robot controlled by remote)",
        date: '3 - 6 April',
        rate: '50',
        price: '1000',
        Fprice:  null,
        Sprice:  null,
        Tprice: null,
        bg: 'bg-soccer.png',
        img: 'robomaze-bg.png',
        poster: 'Robomaze.png'
    },

    {
        title: 'Drone Arena',
        desc: "You will get a drone by which you need to complete the racetrack by avoiding the hurdles and hoops in the minimum required time. (will get one minute of free trial and demo)",
        date: '3 - 6 April',
        rate: '50',
        price: '1000',
        Fprice:  null,
        Sprice:  null,
        Tprice: null,
        bg: 'bg-soccer.png',
        img: 'Drone-b.png',
        poster: 'Dronearena.png'
    },

    {
        title: 'Shark Tank',
        desc: null,
        date: '3 - 6 April',
        rate: '50',
        price: '1000',
        Fprice:  null,
        Sprice:  null,
        Tprice: null,
        bg: 'bg-soccer.png',
        img: 'Shark-bg.png',
        poster: 'SharkTank.png'
    },

    {
        title: 'Business Mela',
        desc: null,
        date: '3 - 6 April',
        rate: '50',
        price: '1000',
        Fprice:  null,
        Sprice:  null,
        Tprice: null,
        bg: 'bg-soccer.png',
        img: 'business-bg.jpeg',
        poster: 'Businessmela.png'
    },

    {
        title: 'Innovation Mela',
        desc: null,
        date: '3 - 6 April',
        rate: '75',
        price: null,
        Fprice: '1500',
        Sprice: '1000',
        Tprice: '750',
        bg: 'bg-soccer.png',
        img: 'innovation-bg.jpeg',
        poster: 'Innovation.png'
    },
]

function Events() {
  return (
    <Container>
        <Helmet>
            <title>Events</title>
        </Helmet>
        {
            EventList.map((event, index) => <DisplayCard key={index} data={event}  type={'events'} />)
        }
    </Container>
  )
}

export default Events

const Container = styled.div`
    margin: 32px 46px;
    
    @media(max-width: 560px) {
        margin: 32px 24px;
    }
`