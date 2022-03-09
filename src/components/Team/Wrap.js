import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

function Wrap({ list }) {
    return (
        <>
        {list.map((data, index) => (
            <Container key={index}>
                <Section>
                    <Image>
                        <img src={data.img} alt="" />
                    </Image>
                    <Content>
                        <Title>{data.title}</Title>
                        {data.post && <Post>{data.post}</Post>}
                        {data.status && <Status>{data.status}</Status>}
                        {data.email && <Email>{data.email}</Email>}
                    </Content>
                    <SocialMedia>
                        {data.insta && <a href={data.insta} target='_blank' rel='noreferrer noopener' >
                            <Instagram className='insta' />
                        </a>}
                        {data.fb && <a href={data.fb} target='_blank' rel='noreferrer noopener' >
                            <Facebook className='fb' />
                        </a>}
                        {data.linkdein && <a href={data.linkdein} target='_blank' rel='noreferrer noopener' >
                            <LinkedIn className='linkedin' />
                        </a>}
                        {data.tweet && <a href={data.tweet} target='_blank' rel='noreferrer noopener' >
                            <Twitter className='tweet' />
                        </a>}
                        
                    </SocialMedia>
                </Section>
            </Container>
        ))}
        </>
    )
}

export default Wrap

const Container = styled.div`
    margin: 16px;
    background-color: white;
`

const Section = styled.div`
    position: relative;
    box-shadow: 0px 0px 40px rgb(0, 0, 0, 0.6);
    // padding: 20px 16px; 
`

const Image = styled.div`
    position: relative;
    img {
        // position: absolute;;
        height: 300px;
        width: 300px;
        object-fit: cover;
    }

`

const Content = styled.div`
    padding: 6px 16px; 

`

const Title = styled.div`
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    color: rgb(0, 0, 0, 0.9);
    margin: 10px 0;
    margin-bottom: 6px;
`

const Post = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    color: grey;
    margin: 4px 0; 
`

const Status = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    color: grey;
    margin: 4px 0; 

`

const Email = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    color: grey;
    margin: 4px 0; 

`

const SocialMedia = styled.div`
    margin-top: 14px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid rgb(0, 0, 0, 0.2);
    // background-color: rgb();
    .MuiSvgIcon-root {
        margin: 0 6px;
        color: rgb(0, 0, 0, 0.6);
        font-size: 32px;
        cursor: pointer;
        transition: color 200ms;
    }

    .insta:hover {
        color: deeppink;
    }
    .fb:hover {
        color: rgb(45,138,255);
    }
    .linkedin:hover {
        color: #0a66c2;
    }
    .tweet:hover {
        color: #1d9bf0;     
    }
`