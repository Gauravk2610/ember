import React from 'react'
import DisplayCard from '../components/DisplayCard'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const EventList = [
    {
        title: 'ROBO SOCCER',
        desc: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.",
        date: '3 - 6 April',
        rate: '30',
        bg: 'bg-soccer.png',
        poster: 'banner-soccer.png'
    },
    {
        title: 'ROBO SOCCER',
        desc: "Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.",
        date: '3 - 6 April',
        rate: '30',
        bg: 'bg-soccer.png',
        poster: 'banner-soccer.png'
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