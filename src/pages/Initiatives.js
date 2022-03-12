import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import RoadMapRow from '../components/Initiatives/RoadMapRow'

const StartupList = [
    {
        img: 'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/startup-investors.png?itok=F7dg8LFW',
        title: 'Audarya',
        desc: 'ACE Ember Ecell students Mahesh Chhavan,Yash Nikam, Kirtan Shirodkar and Harshraj Pardhi have won 3rd prize in state level competition “StartUp India Yatra Grand Finale” at Nagpur on 3 Nov 2018. They have won the prize for Innovation in Healthcare category for the concept “AUDARYA : to resolve the issues of amputees by providing a fully functional arm at an affordable cost.”',
        date: '2018-19'
    },
    {
        img: 'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/startup-investors.png?itok=F7dg8LFW',
        title: 'Audarya',
        desc: 'ACE Ember Ecell students Mahesh Chhavan,Yash Nikam, Kirtan Shirodkar and Harshraj Pardhi have won 3rd prize in state level competition “StartUp India Yatra Grand Finale” at Nagpur on 3 Nov 2018. They have won the prize for Innovation in Healthcare category for the concept “AUDARYA : to resolve the issues of amputees by providing a fully functional arm at an affordable cost.”',
        date: '2018-19'
    },
]

function Initiatives() {
  return (
    <Container>
        <Helmet>
            <title>Initiatives</title>
        </Helmet>
        <Title>Startups</Title>
        <RoadMapWrapper>
            {
                StartupList.map((data, index) => <RoadMapRow key={index} img={data.img} title={data.title} desc={data.desc} date={data.date} />)
            }
        </RoadMapWrapper>
    </Container>
  )
}

export default Initiatives

const Container = styled.div`
    padding: 42px 0;
`

const Title = styled.h1`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    color: #000000;
`

const RoadMapWrapper = styled.div`
    padding: 24px 0;
`