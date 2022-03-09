import { ArchiveRounded, BusinessCenterRounded, GroupRounded, GroupWorkRounded, HomeRounded } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Links = [
    {
        'name': 'Initiatives',
        'icon': <BusinessCenterRounded />,
        'link': '/initiatives'
    },
    {
        'name': 'What we do',
        'icon': <GroupWorkRounded />,
        'link': '/whatwedo'
    },
    {
        'name': 'Archives',
        'icon': <ArchiveRounded />,
        'link': '/archives'

    },
]

function UsefulLinks() {
    return (
        <Container>
            <Title>Useful Links</Title>
            <SectionWrap>
                {Links.map((list, index) => (
                    <LinkWrap key={index} href={list.link}>
                        {list.icon}
                        <p>{list.name}</p>
                    </LinkWrap>
                ))}
            </SectionWrap>
        </Container>
    )
}

export default UsefulLinks


const Container = styled.div`
    margin: 26px 0px;
    display: flex;
    min-width: 260px;
    flex: 1;
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


    .MuiSvgIcon-root {
        font-size: 26px;
        color: rgba(255, 255, 255, 0.7);
        margin-right: 10px; 
    }

    p {
        color: rgba(255, 255, 255, 0.7); 
    }
`