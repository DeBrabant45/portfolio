import React from 'react'
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

import Logo from './logobanner'
import Hand from '../images/hand3.png'

const ColorContainer = styled.div`
    background: lightgray;
    padding-top: 50px;
`

const FlexDiv = styled.div `
    display: flex;
    justify-content: center;
`

const HandImage = styled.img`
    max-width: 400px;
    margin: auto;
    margin-bottom: -50px;
`

const BottomDiv = styled.div`
    background: white;
    display: flex;
    justify-content: space-evenly;
`

const Footer = (props) => (
    <>
        <ColorContainer>
            <Logo />
            <FlexDiv>
                <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="10000" >
                    <HandImage src={Hand} />
                </span>
            </FlexDiv>
        </ColorContainer>
        <BottomDiv>
            <span>Located in Waterford MI</span>
            <span>GITHUB, LINKED, GMAIL</span>
        </BottomDiv>
    </>
)


export default Footer