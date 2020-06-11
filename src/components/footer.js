import React from 'react'
import styled from "styled-components"

import Logo from './logobanner'
import Hand from '../images/hand3.png'
import Github from '../components/githubimg'

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

    @media (max-width: 700px) {
        max-width: 200px;
      }
`

const BottomDiv = styled.div`
    background: #7510F7;
    display: flex;
    justify-content: space-evenly;
`

const Footer = (props) => (
    <>
        <ColorContainer>
            <Logo />
            <FlexDiv>
                <span>
                    <HandImage src={Hand} />
                </span>
            </FlexDiv>
        </ColorContainer>
        <BottomDiv>
            <span>Located in Waterford MI</span>
            <span>
                <Github />
                LINKED, 
                GMAIL
            </span>
            <Github/> 
        </BottomDiv>
    </>
)


export default Footer