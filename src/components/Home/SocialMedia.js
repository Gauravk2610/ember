import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const SocialMediaLinks = [
    {
        'icon': <Instagram />,
        'link': 'https://www.instagram.com/embercouncil/',
        'name': 'Instagram'
    },
    {
        'icon': <Facebook />,
        'link': 'https://www.instagram.com/embercouncil/',
        'name': 'Facebook'
    },
    {
        'icon': <LinkedIn />,
        'link': 'https://www.linkedin.com/company/ember-e-cell/',
        'name': 'LinkedIn'
    },
    {
        'icon': <YouTube />,
        'link': 'https://youtube.com/channel/UCkFyHg8Wqm_KErFv5wWNXJQ',
        'name': 'Youtube'
    },
]

function SocialMedia() {
    return (
        <Container>
            <Title>Social Media</Title>
            <SectionWrap>
                {SocialMediaLinks.map((list, index) => (
                    <LinkWrap key={index} href={list.link}  target="_blank" rel="noopener noreferrer">
                        {list.icon}
                        <p>{list.name}</p>
                    </LinkWrap>
                ))}
            </SectionWrap>
        </Container>
    )
}

export default SocialMedia

const Container = styled.div`
    margin: 26px 0px;
    display: flex;
    flex: 1;
    min-width: 260px;
    max-width: fit-content;
    width: 100%;
    flex-direction: column;
`

const Title = styled.h2`
    font-weight: 600;
    display: flex;
    margin-bottom: 6px;
    // justify-content: center;
`

const SectionWrap = styled.div`

`

const LinkWrap = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 4px;
    width: fit-content;


    .MuiSvgIcon-root {
        font-size: 26px;
        color: rgba(255, 255, 255, 0.7);
        margin-right: 10px; 
    }

    p {
        color: rgba(255, 255, 255, 0.7); 
    }
`