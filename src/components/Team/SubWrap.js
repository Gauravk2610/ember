import React from 'react'
import styled from 'styled-components'
import Wrap from './Wrap'

const teamList = [
    {
        'title': 'Faculty-in-charge',
        'list': [
            {
                'title': 'Prof. Garima Gurjar',
                'img': 'garima.webp',
                'post': 'Incharge',
                'status': null,
                'email': 'garimagujar@gmail.com',
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
                'img': 'Atharva.JPG',
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
                'img': 'Parth.JPG',
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
                'img': 'Darshan.JPG',
                'post': 'Venture Head',
                'status': null,
                'email': 'darshanrajpurohit47@gmail.com',
                'insta': 'https://www.instagram.com/daarrsshhaannn/',
                'linkdein': 'https://www.linkedin.com/in/darshan-rajpurohit-b9a0b01b7',
                'tweet': 'https://www.linkedin.com/in/darshan-rajpurohit-b9a0b01b7/',
                'fb': null
            },
            {
                'title': 'Manasvi Patil',
                'img': 'Manasvi.JPG',
                'post': 'Documentation Head',
                'status': null,
                'email': 'manasvipatil2001@gmail.com',
                'insta': 'http://instagram.com/manasvipatil__?utm_source=qr',
                'linkdein': 'https://www.linkedin.com/in/manasvi-patil-aa6238218',
                'tweet': null,
                'fb': null
            },
            {
                'title': 'Shivang Patil ',
                'img': 'Shivang.JPG',
                'post': 'Registration Head',
                'status': null,
                'email': 'asshivang67@gmail.com',
                'insta': 'https://www.instagram.com/shivang__patil/?utm_medium=copy_link',
                'linkdein': 'https://twitter.com/shivangpatil09?s=21',
                'tweet': 'https://twitter.com/shivangpatil09?s=21',
                'fb': null,
            },
            {
                'title': 'Hrigved Suryawanshi ',
                'img': 'Hrigved.JPG',
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
                'img': 'Gaurav.JPG',
                'post': 'Technical Head',
                'status': null,
                'email': 'gauravkonde26@gmail.com',
                'insta': 'https://www.instagram.com/gaurav_konde/',
                'linkdein': 'https://www.linkedin.com/in/gaurav-konde-51aab6193/',
                'tweet': 'https://twitter.com/KondeGaurav',
                'fb': 'https://www.facebook.com/gaurav.konde.71'
            },
            {
                'title': 'Sai Bhatkar',
                'img': 'Sai.JPG',
                'post': 'Technical Head',
                'status': null,
                'email': 'saibhatkar999@gmail.com ',
                'insta': 'https://www.instagram.com/_saibhatkar_99/',
                'linkdein': 'https://www.linkedin.com/in/sai-bhatkar-6084901a7/',
                'tweet': null,
                'fb': 'https://www.facebook.com/sai.bhatkar.52'
            },
            
            {
                'title': 'Rohan Vhatkar',
                'img': 'Rohan.JPG',
                'post': 'Hospitality Head',
                'status': null,
                'email': 'rohanvhtkr2002@gmail.com',
                'insta': 'https://instagram.com/_i__am__rv_?utm_medium=copy_link',
                'linkdein': 'https://www.linkedin.com/in/rohan-vhatkar-93b567175',
                'tweet': 'https://twitter.com/rohanVhatkar1?s=09',
                'fb': 'https://www.facebook.com/rohan.rv.77'
            },
            {
                'title': 'Shree Agrawal',
                'img': 'Shree.JPG',
                'post': 'Assistant Marketing Head',
                'status': null,
                'email': 'shree.agrawal123456@gmail.com',
                'insta': 'https://www.instagram.com/the_shree_agrawal/',
                'linkdein': null,
                'tweet': null,
                'fb': null,
            },
            {
                'title': 'Pranav Trivedi',
                'img': 'Pranav.JPG',
                'post': 'Assistant Technical Head',
                'status': null,
                'email': 'pranavtrivedi02@gmail.com',
                'insta': 'https://www.instagram.com/_saibhatkar_99/',
                'linkdein': 'https://www.linkedin.com/in/sai-bhatkar-6084901a7/',
                'tweet': null,
                'fb': 'https://www.facebook.com/sai.bhatkar.52'
            },
            {
                'title': 'Manasi Kamble',
                'img': 'Manasi.JPG',
                'post': 'Assistant Registration Head',
                'status': null,
                'email': 'manasikamble664@gmail.com',
                'insta': 'https://www.instagram.com/_manasi.kamble/',
                'linkdein': 'https://www.linkedin.com/in/manasi-kamble-baa3641ba/',
                'tweet': null,
                'fb': 'https://www.facebook.com/sai.bhatkar.52'
            },
            {
                'title': 'Samiksha Palande',
                'img': 'Samiksha.JPG',
                'post': 'Assistant registration head',
                'status': null,
                'email': 'samikshapalande0@gmail.com',
                'insta': 'https://www.instagram.com/samiksha_palande/',
                'linkdein': 'https://www.linkedin.com/in/samiksha-palande-a7351721b',
                'tweet': null,
                'fb': null,
            },
            
            {
                'title': 'Khushi Kashyap ',
                'img': 'Khushi.JPG',
                'post': 'Assistant Hospitality Head',
                'status': null,
                'email': 'khushi.akshayap@gmail.com',
                'insta': 'https://www.instagram.com/khushi__009kw__/',
                'linkdein': 'https://www.linkedin.com/in/khushi-kashyap-558694229',
                'tweet': null,
                'fb': null,
            },
            {
                'title': 'Kushal lohiya',
                'img': 'Kushal.JPG',
                'post': 'Assistant marketing head',
                'status': null,
                'email': 'lohiyakushal47@gmail.com',
                'insta': 'https://www.instagram.com/lohiyakushal/',
                'linkdein': null,
                'tweet': null,
                'fb': null,
            },
           
            
            {
                'title': 'Shruti Balekar',
                'img': 'Shruti.JPG',
                'post': 'Assistant Decor Head',
                'status': null,
                'email': 'shruti13nov2002@gmail.com',
                'insta': 'https://www.instagram.com/_shruu_balekar/',
                'linkdein': null,
                'tweet': null,
                'fb': null,
            },
            
            {
                'title': 'Sarvesh Kadlag',
                'img': 'Sarvesh.JPG',
                'post': 'Assistant Event Coordinator',
                'status': null,
                'email': 'sarveshtkadlag@gmail.com',                
                'insta': null,
                'linkdein': 'https://www.linkedin.com/in/k-sarvesh-519707233/',
                'tweet': 'https://twitter.com/Sarvesh_K25?t=5cJ2uJkHwSRlfHbuHTscTA&s=08',
                'fb': 'https://www.facebook.com/sarvesh.kadlag.3',
            },
          
            {
                'title': 'Pratiksha Shetty',
                'img': 'Pratiksha.JPG',
                'post': 'Assistant Event Co-ordinator Head ',
                'status': null,
                'email': 'shettypratiksha049@gmail.com',
                'insta': 'https://www.instagram.com/_pratiksha__04/',
                'linkdein': 'https://www.linkedin.com/in/pratiksha-shetty-a3599621b',
                'tweet': null,
                'fb': null,
            },
            {
                'title': 'Heli Shah',
                'img': 'Heli.JPG',
                'post': 'Assistant Documentation Head',
                'status': null,
                'email': 'shahhelib@gmail.com',
                'insta': 'https://www.instagram.com/helishah2002/',
                'linkdein': null,
                'tweet': null,
                'fb': null,
            },
            {
                'title': 'Om Sawant',
                'img': 'Om.jpg',
                'post': 'Assistant Digital Creative Head',
                'status': null,
                'email': 'omsawant22670@gmail.com',                
                'insta': ' https://instagram.com/omsawant_?utm_medium=copy_link',
                'linkdein': 'https://www.linkedin.com/in/om-sawant-8ab720211',
                'tweet': null,
                'fb': null,
            },
            {
                'title': 'Amrit Suthar',
                'img': 'Amrit.png',
                'post': 'Assistant Digital Creative Head',
                'status': null,
                'email': 'amritsuthar19@gmail.com',                
                'insta': 'https://www.instagram.com/amrit_19_/',
                'linkdein': null,
                'tweet': null,
                'fb': null,
            },
            
            {
                'title': 'Prachi Sangar',
                'img': 'Prachi.jpg',
                'post': 'Assistant Public Relations Head',
                'status': null,
                'email': 'prachisangar31@gmail.com',                
                'insta': ' https://www.instagram.com/invites/contact/?i=tspc8huoo1bc&utm_content=3ebsjer',
                'linkdein': null,
                'tweet': null,
                'fb': 'https://www.facebook.com/prachi.sangar.31',
            },
            {
                'title': 'Palavee Chavan',
                'img': 'Palavee.JPG',
                'post': 'Assistant Publicity Head',
                'status': null,
                'email': 'palaveepchavan05@gmail.com',
                'insta': 'https://www.instagram.com/palavee_chavan/',
                'linkdein': 'https://www.linkedin.com/in/palavee-chavan-42a300219/',
                'tweet': null,
                'fb': null,
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