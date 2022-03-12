import React from 'react'
import styled from 'styled-components'
import Wrap from './Wrap'

const teamList = [
    {
        'title': 'Faculty-in-charge',
        'list': [
            {
                'title': 'Prof. Mohan Kumar',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Incharge',
                'status': null,
                'email': 'random@gmail.com',
                'insta': null,
                'linkdein': null,
                'fb': null,
                'tweet': null,
            }
        ]
    },
    {
        'title': 'Entire-team',
        'list': [
            {
                'title': 'Atharva Pansare',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'President',
                'status': null,
                'email': 'atharvapansare2@gmail.com',
                'insta': 'https://instagram.com/atharva_pansare?utm_medium=copy_link',
                'linkdein': 'https://www.linkedin.com/in/atharva-p-16b9a61b4',
                'tweet': 'https://twitter.com/AtharvaPansare4?s=09',
                'fb': 'https://www.facebook.com/atharva.pansare.7'
            },
            {
                'title': 'Parth Satpute',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Treasurer',
                'status': null,
                'email': 'satputeparth7@gmail.com',
                'insta': 'https://instagram.com/sojwalboy?utm_medium=copy_link',
                'linkdein': 'https://www.linkedin.com/in/parth-satpute-448487188',
                'tweet': 'https://twitter.com/TakeMahSeed?s=09',
                'fb': 'https://www.facebook.com/parth.satpute.10'
            },
            {
                'title': 'Darshan Rajpurohit',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Venture Head',
                'status': null,
                'email': 'darshanrajpurohit47@gmail.com',
                'insta': 'https://www.instagram.com/daarrsshhaannn/',
                'linkdein': 'https://www.linkedin.com/in/darshan-rajpurohit-b9a0b01b7',
                'tweet': null,
                'fb': null
            },
            {
                'title': 'Manasvi Patil',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Documentation Head',
                'status': null,
                'email': 'manasvipatil2001@gmail.com',
                'insta': 'http://instagram.com/manasvipatil__?utm_source=qr',
                'linkdein': 'https://www.linkedin.com/in/manasvi-patil-aa6238218',
                'tweet': null,
                'fb': null
            },
            {
                'title': 'Rohan Vhatkar',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Hospitality Head',
                'status': null,
                'email': 'rohanvhtkr2002@gmail.com',
                'insta': 'https://instagram.com/_i__am__rv_?utm_medium=copy_link',
                'linkdein': 'https://www.linkedin.com/in/rohan-vhatkar-93b567175',
                'tweet': 'https://twitter.com/rohanVhatkar1?s=09',
                'fb': 'https://www.facebook.com/rohan.rv.77'
            },
            {
                'title': 'Hrigved Suryawanshi ',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Technical Head',
                'status': null,
                'email': 'hrigsuryawanshi@gmail.com',
                'insta': 'https://www.instagram.com/hrigx_6/',
                'linkdein': 'https://www.linkedin.com/in/hrigved-suryawanshi-a81251221/',
                'tweet': null,
                'fb': null
            },
            {
                'title': 'Gaurav Konde',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Technical Head',
                'status': 'Software Developer',
                'email': 'gauravkonde26@gmail.com',
                'insta': 'https://www.instagram.com/gaurav_konde/',
                'linkdein': 'https://www.linkedin.com/in/gaurav-konde-51aab6193/',
                'tweet': 'https://twitter.com/KondeGaurav',
                'fb': 'https://www.facebook.com/gaurav.konde.71'
            },
            {
                'title': 'Sai Bhatkar',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Technical Head',
                'status': null,
                'email': 'saibhatkar999@gmail.com ',
                'insta': 'https://www.instagram.com/_saibhatkar_99/',
                'linkdein': 'https://www.linkedin.com/in/sai-bhatkar-6084901a7/',
                'tweet': null,
                'fb': 'https://www.facebook.com/sai.bhatkar.52'
            },
            {
                'title': 'Pranav Trivedi',
                'img': 'https://th.bing.com/th/id/OIP.ey-3jS9s1-8_fteFv78vnQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
                'post': 'Assistant Technical Head',
                'status': null,
                'email': 'saibhatkar999@gmail.com ',
                'insta': 'https://www.instagram.com/_saibhatkar_99/',
                'linkdein': 'https://www.linkedin.com/in/sai-bhatkar-6084901a7/',
                'tweet': null,
                'fb': 'https://www.facebook.com/sai.bhatkar.52'
            },
            
        ]
    },
    
]

function SubWrap() {
    return (
        <>
        {teamList.map((data, index) => (
                <Container key={index}>
                <Title>
                    <h2>{data.title}
                    <LineBreaker />
                    </h2>
                </Title>
                <CardWrap>
                    <Wrap list={data.list} />
                </CardWrap>
        </Container>
            ))}
        </>
    )
}

export default SubWrap

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    h2 {
        padding-bottom: 14px;
        position: relative;
    }
`

const LineBreaker = styled.div`
    position: absolute;
    bottom: 0;
    height: 4px;
    background-color: rgb(45, 136, 255);
    // width: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    animation: App-logo-spin infinite 2s linear ;
    transform-origin: right;
    @keyframes App-logo-spin {
        0% {
          left: 0%;
          right: 80%;
        }
        25% {
            left: 80%;
            right: 0%;
        }
        50% {
          left: 100%;
          right: 0%;
        }
        75% {
            left: 60%;
            right: 20%;
        }
        100% {
            left: 0%;
            right: 80%;
        }
    }
`

const CardWrap = styled.div`
    margin: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`