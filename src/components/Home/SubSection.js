import React from 'react'
import styled from 'styled-components'

function SubSection() {
    return (
        <Container>
            <Title>Contact</Title>
            <SectionWrap>
                <p>
                <b>Atharva College Of Engineering</b><br />
                Atharva Educational Complex,<br />
                Malad Marve Road, Charkop Naka,<br />
                Malad (W), Mumbai – 400095, India<br /><br />
                <span>embercouncil@gmail.com</span>
                </p>
            </SectionWrap>
        </Container>
    )
}

export default SubSection

const Container = styled.div`
    margin: 26px 4px;
    display: flex;
    flex: 1;
    max-width: fit-content;
    width: 100%;
    min-width: 260px;
    flex-direction: column;
`

const Title = styled.h2`
    font-weight: 600;
    display: flex;
    margin-bottom: 10px;
    // justify-content: center;
`

const SectionWrap = styled.div`

    p {
        display: -webkit-box;
        // justify-content: center;
        align-items: center;
        color: rgba(255, 255, 255, 0.6);
    }

    b {
        color: white;
        font-size: 1.1em;
    }

    span {
        margin-top: 10px !important;
        color: rgba(255, 255, 255, 0.9);
    }

`