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
        title: 'Faacil',
        desc: 'Startup by Abhimanyu Yadav is a food ordering and management application, re-defining the traditional ordering approach with the new system. Angel investment in this is of amount Rs 20 Lac by E-incarnation system ,LowerParel,Mumbai on 12th May 2017. (2017-18)',
        date: '2017-18'
    },
    {
        img: 'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/startup-investors.png?itok=F7dg8LFW',
        title: 'Pulsovisum duo: Blind’s friend',
        desc: 'Done by BE student had won FIRST PRIZE in UDAAN 2017 project competition held at Institute of Industrial & Computer Management & Research, Pune on 25 Feb 2017 for Innovative project. (2016-17)',
        date: '2016-17'
    },
    {
        img: 'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/startup-investors.png?itok=F7dg8LFW',
        title: 'Apnabookwala',
        desc: 'Startup by BE IT students was selected for the award and fund of Rs 10 lac from Start-Up NIDHI Competition under Department of Science and Technology, Govt. of India, New Delhi organized at EDII, Ahmedabad on March 6th and 7th, 2017. (2016-17)',
        date: '2016-17'
    },
    {
        img: 'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/startup-investors.png?itok=F7dg8LFW',
        title: 'Envisia',
        desc: 'Startup by Ridhima Sawant was shortlisted in top 12 winning team out of the 224 start-ups all over India in the competition NIDHI Competition under Department of Science and Technology, Govt. of India, New Delhi organized at EDII, Ahmedabad. (2015-16)',
        date: '2015-16'
    },
    {
        img: 'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/startup-investors.png?itok=F7dg8LFW',
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