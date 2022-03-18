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
            <Wrapper>
                <SubWrapper>
                    <Left src={Img} />
                    <Right>
                        <Intro>
                            Atharva College of Engineering has an Entrepreneurship Cell (E-Cell) 
                            called ACE EMBER since 2008.  EMBER has a tie-up with National
                            Entrepreneurship Network (NEN),Bengaluru since its inception.The faculty
                            members of Atharva College of Engineering have been trained by experts 
                            from NEN to impart entrepreneurship skills among engineering students.
                        </Intro>
                        <List>
                            <Line>
                                <img src="/assests/about/regular.png" alt="" />
                                <Content>
                                    <Title>Regular Meeting</Title>
                                    <Desc>E-Cell conducts regular meeting regarding planning of workshops, seminars and formation of committee members for various activities.</Desc>
                                </Content>
                            </Line>
                            <Line>
                                <img src="/assests/about/startup.png" alt="" />
                                <Content>
                                    <Title>Generate Start-up</Title>
                                    <Desc>EMBER has generated numerous start-ups and students have won various prizes at state and national level.</Desc>
                                </Content>
                            </Line>
                            <Line>
                                <img src="/assests/about/internship.png" alt="" />
                                <Content>
                                    <Title>Regular Meeting</Title>
                                    <Desc>E-Cell also coordinates between student’s venture and junior students who are seeking for internship.</Desc>
                                </Content>
                            </Line>
                        </List>
                    </Right>
                </SubWrapper>
            </Wrapper>                
            {/* <HeaderBody>
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
            </Footer> */}
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
    font-size: 40px;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.76);
`

const Wrapper = styled.div`
    margin: 32px auto;
    max-width: 1360px;
    @media(max-width: 1400px) {
        margin: 32px 64px
    }
    @media(max-width: 560px) {
        margin: 32px 32px
    }
`

const SubWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media(max-width: 1024px) {
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }

` 

const Left = styled.img`
    max-width: 560px;
    width: 100%;
    min-width: 360px;
    height: fit-content;
    object-fit: cover;
    @media(max-width: 1024px) {
        max-width: 100%;
        min-width: auto;
    }
`

const Right = styled.div`
    width: 50%;
    min-width: 460px;
    margin: 0 32px;
    @media(max-width: 1024px) {
        margin: 32px 0px;
        width: 100%;
        min-width: auto;
    }
    @media(max-width: 560px) {
        margin: 16px 0;
    }
`

const Intro = styled.div`
    max-width: 560px;
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #373B44;
    @media(max-width: 560px) {
        font-size: 16px;
    }
`

const List = styled.div`
    margin-top: 16px;

`

const Line = styled.div`
    display: flex;
    margin: 16px 0;
    img {
        height: 70px;
        width: 70px;
        object-fit: cover;
        margin-right: 16px;
    }
`

const Content = styled.div`
    
`

const Title = styled.div`
    font-weight: 500;
    font-size: 23px;
    line-height: 29px;
    color: #000000;   
    @media(max-width: 560px) {
        font-size: 18px;
    }
`

const Desc = styled.div`
    margin-top: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #6D6D6D;
    @media(max-width: 560px) {
        font-size: 16px;
    }
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


// const List = styled.div`
// margin-top: 20px;
// display: flex;
// flex-direction: column;

// li{
   
//     list-style: none;
//     font-size: 20px;
//     font-weight: bold;
//     display: block;
// }


// p{
//     margin-top: 10px;
//     font-weight: unset;

// }
// `

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

