import { ArchiveRounded, BusinessCenterRounded, EventAvailable, Close, ContactsRounded, DashboardRounded, GroupRounded, GroupsRounded, GroupWorkRounded, HomeRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import Ember from '../Logo.jpeg'

function Navbar() {

    const url = useHistory();
    
    const [active, setActive] = useState(null)
    const [sideMenu, setSideMenu] = useState(false)

    useEffect(() => {
        if (url.location.pathname === '/') {
            setActive("Home")
        }else {
            const filtered_url = (url.location.pathname.replace('/', '')[0].toUpperCase() +url.location.pathname.replace('/', '').substr(1).toLowerCase())
            setActive(filtered_url)
        }
        window.addEventListener('resize', ()=> {
            setSideMenu(false)
        })
    }, [])

    const navList = [
        {
            'title': 'Home',
            'icon': <HomeRounded />,
            'link': '/'
        },
        {
            'title': 'About',
            'icon': <GroupRounded />,
            'link': 'about'
        },
        {
            'title': 'Initiatives',
            'icon': <BusinessCenterRounded />,
            'link': 'initiatives'
        },
        {
            'title': 'Workshops',
            'icon': <GroupWorkRounded />,
            'link': 'workshops'
        },
        {
            'title': 'Events',
            'icon': <EventAvailable />,
            'link': 'events'
        },
    ]

    const rightNavList = [
        {
            'title': 'Team',
            'icon': <GroupsRounded />,
            'link': 'team'
        },
        {
            'title': 'Contact',
            'icon': <ContactsRounded />,
            'link': 'contact'
        },
    ]

    return (
        <Container>
            <Main>
                <Left>
                    <NavLink to='/'>
                        <Logo src={Ember} alt='Logo' />
                    </NavLink>
                </Left>
                <Middle>
                    {navList.map((list, index) => (
                        <Section 
                            key={index} 
                            isFocused={list.title == active} 
                            onClick={()=>setActive(list.title)}
                        >
                            <NavLink exact to={list.link}>{list.icon}<p>{list.title}</p></NavLink>
                        </Section>
                    ))}
                </Middle>
                <Right>
                    {rightNavList.map((list, index) => (
                        <RightSection 
                            key={index} 
                            isFocused={list.title == active}
                            onClick={() => setActive(list.title)}
                        >
                            <NavLink exact to={list.link}>{list.icon}</NavLink>
                        </RightSection>
                    ))}
                    <CloseButton 
                        className='close' 
                        onClick={()=>setSideMenu(true)}
                    >
                        <a><DashboardRounded /></a>
                    </CloseButton>
                </Right>
            </Main>

            <BurgerNav active={sideMenu}>
                <Wrap>
                    <CloseSection>
                        <IconButton onClick={()=>setSideMenu(false)}>
                            <Close />  
                        </IconButton>
                    </CloseSection>

                    {navList.map((list, index) => (
                        <BurgerSection
                            key={index} 
                            isFocused={list.title == active} 
                            onClick={()=>{
                                setActive(list.title)
                                setSideMenu(false)
                            }}
                        >
                            <NavLink to={list.link}>{list.icon}<p>{list.title}</p></NavLink>
                        </BurgerSection>
                    ))}
                    
                    {rightNavList.map((list, index) => (
                        <BurgerSection
                            key={index} 
                            isFocused={list.title == active} 
                            onClick={()=>{
                                setActive(list.title)
                                setSideMenu(false)
                            }}
                        >
                            <NavLink to={list.link}>{list.icon}<p>{list.title}</p></NavLink>
                        </BurgerSection>
                    ))}
                </Wrap>
            </BurgerNav>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height: 60px;
`
    
const Main = styled.div`
    z-index: 100;
    position: fixed;
    height: inherit;
    padding: 0px 30px;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.5);

`

const Left = styled.div`

`

const Logo = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    // box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.5);
`

const Middle = styled.div`
    display: flex;
    height: 100%;

    @media(max-width: 800px) {
        display: none;
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 0 16px;
    margin: 0 10px;
    
    .MuiSvgIcon-root {
        margin-bottom: 4px;
        font-size: 28px;
        color: ${props => props.isFocused ?'#2d88ff':'rgb(0, 0, 0, 0.6)'};
    }

    a {
        font-weight: 600;
        font-size: 0.96rem;
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${props => props.isFocused ?'#2d88ff':'rgb(0, 0, 0, 0.6)'};
    }

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${props => props.isFocused? '100%': '100%'};
        height: 5%;
        background-color: ${props => props.isFocused ? '#2d88ff' : '#484848'};
        border-radius: 6px;
        // transition: width 0.5s, height 0.5s, left 0.5s;
        transition: transform 0.5s;
        transform: ${props => props.isFocused ? 'scaleX(1)' : 'scaleX(0)'};
        transform-origin: right;
    }
    :hover::after {
        left: 0;
        // width: ${props => props.isFocused? '': '100%'};
        // height: ${props => props.isFocused? '': '5%'};
        transform: scaleX(1);
        transform-origin: left;
    }

    :hover {
        cursor: pointer;
        .MuiSvgIcon-root {
            color: ${props => props.isFocused ?'':'black'};
            transition: color 200ms ease-in-out; 
        }
        a {
            color: ${props => props.isFocused ?'':'black'};
            transition: color 200ms ease-in-out; 
        }
    }

    @media(max-width: 1100px) {
        p {
            display: none;
        }
    }

`

const Underline = styled.div`
    position: absolute;
    bottom: 0;
    height: 1.8px;
    left: 0;
    background-color: ${props => props.isFocused ? 'black': ''};
    ::before {
        width: ${props => props.isFocused? '100%': '0px'};
        transition: width 0.5s, height 0.5s, left 0.5s;
        border-radius: 40px;
    }
`

const Right = styled.div`
    display: flex;
    height: 100%;
    .close {
        display: none;
    }
    
    @media(max-width: 800px) {
        .close {
            display: flex;
        }
    }
`

const RightSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    // padding: 0 8px;
    margin: 0 4px;

    a {
        height: 70%;
        border-radius: 10px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        background-color: ${props => props.isFocused ? 'rgb(255, 255, 255, 0.11)' : 'rgb(0, 0, 0, 0.11)'};
        border: ${props => props.isFocused ? '1px solid #2d88ff' : 'rgb(0, 0, 0, 0.6)'};
        transition: background-color 500ms, border 500ms;
    }

    .MuiSvgIcon-root {
        font-size: 28px;
        color: ${props => props.isFocused ? '#2d88ff' : 'rgb(0, 0, 0, 0.6)'};
    }

    @media(max-width: 800px) {
        display: none;
    }

`

const CloseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    // padding: 0 8px;
    cursor: pointer;
    margin: 0 4px;

    a {
        height: 70%;
        border-radius: 10px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        border: 1px solid rgb(0, 0, 0, 0.2);
        transition: border 300ms;

    }

    .MuiSvgIcon-root {
        font-size: 28px;
        color: rgb(0, 0, 0, 0.8);
    }

    :hover {
        a {
            border: 1px solid rgb(0, 0, 0, 0.5);
        }
    }
`

const BurgerNav = styled.div`
    position: fixed;
    z-index: 200;
    top: 0%;
    right: 0;
    bottom: 0%;
    width: 300px;
    background-color: white;
    box-shadow: ${props => props.active ? '0px 0px 20px rgb(0, 0, 0, 0.8)' : ''};
    display: flex;
    flex-direction: column;
    overflow-y: overlay;
    transform: ${props => props.active ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 500ms, box-shadow 500ms;
    
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: inherit;
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgb(136, 136, 136);
        border-radius: 10px;
    }   
    
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(126, 126, 126);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:active {
        background: rgb(126, 126, 126);
        border-radius: 10px;
    }
`

const Wrap = styled.div`
    margin: 16px 30px;

`

const CloseSection = styled.div`
    display: flex;
    justify-content: flex-end;

    .MuiSvgIcon-root {
        font-size: 28px;
    }

    .MuiIconButton-root  {
        color: inherit; 
    }
`

const BurgerSection = styled.div`
    display: flex;

    a {
        margin: 2px 0;
        padding: 8px 8px;
        font-weight: 600;
        font-size: 0.96rem;
        text-decoration: none;
        color: inherit;
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        color: ${props => props.isFocused ?'#2d88ff':'rgb(0, 0, 0, 0.6)'};
        background-color: ${props => props.isFocused ? 'rgb(0, 0, 0, 0.1)' : 'none'} ;
        transition: background-color 200ms ease-in-out
    }

    .MuiSvgIcon-root {
        font-size: 28px;
        margin-right: 10px;
    }

    :hover {
        a {
            background-color: ${props => props.isFocused ? 'rgb(0, 0, 0, 0.1)' : 'rgb(0, 0, 0, 0.1)'} 

        }
    }
`