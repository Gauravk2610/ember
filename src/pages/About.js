import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from '../assests/About-photo.jpg'

function About() {
    return (
        <Container>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Header>About Us</Header>
            <HeaderBody>
            <HeaderLeft>
                <img src={Img} alt="" srcset="" />
            </HeaderLeft>
            <HeaderRight>
            <div>
                <p>Atharva College of Engineering has an Entrepreneurship Cell (E-Cell) 
                called ACE EMBER since 2008.  EMBER has a tie-up with National
                Entrepreneurship Network (NEN),Bengaluru since its inception.The faculty
                members of Atharva College of Engineering have been trained by experts 
                from NEN to impart entrepreneurship skills among engineering students.</p>

                <List>
                <div>
                <li><span></span>Regular Meeting</li>
                <p>E-Cell conducts regular meeting regarding planning of workshops, seminars and formation of committee members for various activities.</p>
                </div>
                <div>
                <li><span></span>Regular Meeting</li>
                <p>E-Cell conducts regular meeting regarding planning of workshops, seminars and formation of committee members for various activities.</p>
                </div>
                <div>
                <li><span></span>Regular Meeting</li>
                <p>E-Cell conducts regular meeting regarding planning of workshops, seminars and formation of committee members for various activities.</p>
                </div>
                </List>
                </div>
            </HeaderRight>
            </HeaderBody>

            <Footer>
                
                <FooterLeft>
                <p>The annual fest of Ember E-Cell is Entrepreneurship-Week (E-Week), a week long extravaganza to showcase the entrepreneurial skills of students, organize various events to bring out business skills in participants. E-Week is a national competition where over 650 colleges participate through the affiliation of NEN & compete to create maximum impact & produce highest entrepreneurs.</p>
                </FooterLeft>
                <FooterRight>
                <img src={Img} alt="" srcset="" />

                </FooterRight>
            </Footer>
        </Container>
    )
}

export default About

const Container = styled.div`
    margin: 22px 0;
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.6em;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.76)
`

const HeaderBody = styled.div`
min-height: 500px;
width: 100%;
justify-content: space-evenly;

flex-direction: row;
display: flex;
margin: 50px 20px;
@media (max-width: 1200px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    padding: auto 0px;
}
`

const HeaderLeft = styled.div`
position: relative;
width: 50%;
img{
    max-width: 600px;
    width: 100%;
    min-width: 400px;
}


@media (max-width: 1200px){
    order: 1;
    justify-content: center;
    align-items: center;
    margin: 0 0;
    padding: auto 0px;


    img{
    max-width: 400px;
    width: 100%;

    }
}

`;

const HeaderRight = styled.div`
width: 50%;
position: relative;
/* max-width: 600px; */
min-width: 300px;

div{
    margin-top: 20px;
}

p{
    font-weight: 500;
    font-size: 16px;
    font-weight: bold;
}
@media (max-width: 1200px){
    order: 2;
    justify-content: center;
    align-items: center;
    margin: 0 0;
    padding: auto 0px;
}

`;


const List = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;

li{
   
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    display: block;
}


p{
    margin-top: 10px;
    font-weight: unset;

}
`

const Footer = styled.div`
min-height: 500px;
width: 100%;
justify-content: center;
flex-direction: row;
display: flex;
margin: 50px 0px;
@media (max-width: 1200px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    padding: auto 0px;
}
`;


const FooterRight = styled.div`
position: relative;
width: 50%;
img{
    max-width: 600px;
    width: 100%;
    min-width: 400px;
}


@media (max-width: 1200px){
    order: 1;
    justify-content: center;
    align-items: center;
    margin: 0 0;
    padding: auto 0px;


    img{
    max-width: 400px;
    width: 100%;

    }
}


`;

const FooterLeft = styled.div`
width: 50%;
position: relative;
max-width: 600px;
min-width: 300px;

div{
    margin-top: 20px;
}

p{
    font-weight: 500;
    font-size: 16px;
    font-weight: bold;
}
@media (max-width: 1200px){
    order: 2;
    justify-content: center;
    align-items: center;
    margin: 0 0;
    padding: auto 0px;
}

`;

