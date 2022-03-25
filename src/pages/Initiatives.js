import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import RoadMapRow from '../components/Initiatives/RoadMapRow'

const StartupList = [
    {
        img: '/assests/solidbeta.jpeg',
        title: 'Solid Beta',
        desc: 'SolidBeta proto labs is prototype designing and manufacturing company founded by Rahul Deshpande in 2019 . It also provides 3D printing services and manufacturing of 3D printers',
        date: '2019 -2020'
    },
    {
        img: '/assests/techq.jpg',
        title: 'Techq Connect',
        desc: 'Techq Konnect is a service as well as product based company in Mumbai. We offer Services to Companies in various domains to turn their ideas into reality, resolve their issues and get their work done easily. We at Techq Konnect offer various Technical Certification Courses, Workshops and Webinars to students and working professionals to meet the need of the hour.',
        date: '2018-19'
    },
    {
        img: '/assests/stech.jpeg',
        title: 'STech',
        desc: 'Done by BE student had won FIRST PRIZE in UDAAN 2017 project competition held at Institute of Industrial & Computer Management & Research, Pune on 25 Feb 2017 for Innovative project. (2016-17)',
        date: '2019-20'
    },
    {
        img: '/assests/apnabook.png',
        title: 'Apnabookwala',
        desc: 'Startup by BE IT students was selected for the award and fund of Rs 10 lac from Start-Up NIDHI Competition under Department of Science and Technology, Govt. of India, New Delhi organized at EDII, Ahmedabad on March 6th and 7th, 2017. (2016-17)',
        date: '2016-17'
    },
    {
        img: '/assests/envisia.jpg',
        title: 'Envisia',
        desc: 'Startup by Ridhima Sawant was shortlisted in top 12 winning team out of the 224 start-ups all over India in the competition NIDHI Competition under Department of Science and Technology, Govt. of India, New Delhi organized at EDII, Ahmedabad. (2015-16)',
        date: '2015-16'
    },
    {
        img: '/assests/trigbug.png',
        title: 'Trigbug',
        desc: 'Dating app Heartconnect, Start-Up operated by Trigbug, has been selected by Facebook for its FbStartprogramme. Heartonnect has partnered with Trigbug, a Mumbai-based IT and marketing consultancy firm, to develop its app and software. (2015-16)',
        date: '2015-16'
    },
    {
        img: 'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/startup-investors.png?itok=F7dg8LFW',
        title: 'Getdeal: Search engine optimized',
        desc: 'Done by BE Computer students have won FIRST PRIZE in UDAAN 2016 Innovative project competition held at Institute of Industrial & Computer Management & Research ,Pune on 6th Feb 2016 for Innovative project. (2015-16)',
        date: '2015-16'
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