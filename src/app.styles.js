import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`
export const ButtonContainer = styled.main`
    margin-left: 237px;
    padding-top: 53px;
`
export const MenuContainer = styled.div`
    width: 237px;
    height: 100vh;
    position: fixed;
    left: 0;
    padding-left: 48px;
    padding-top: 38px;
`

export const MenuTitle = styled.span`
    font-family: Poppins;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.color === 'orange' ? '#F7542E' : '#090F31'};
`

export const MenuItem = styled.div`
    list-style:none;
    font-family: Noto Sans JP;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 142px;
`
export const Item = styled.div`
    padding-bottom: 40px;
    color: ${(props) => props.active ? '#090F31' : '#9E9E9E'};
`

export const Title = styled.h1`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #4F4F4F;
`

export const ButtonTitle = styled.p`
    font-family: 'Ubuntu Mono', monospace;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.active ? '#828282' : '#333'}
`

export const Section = styled.section`
    display: flex;
    margin-bottom: 50px;
    gap: 5px;
`
export const ButtonSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 275px;
`

export const Footer = styled.footer`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #A9A9A9;
`

export const Username = styled.a`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #A9A9A9;
`


