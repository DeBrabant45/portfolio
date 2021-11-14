import React from 'react'
import styled from "styled-components"

import Logo from './logobanner'
import Hand from '../images/hand3.png'
import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'  

const ColorContainer = styled.div`
    background: lightgray;
    padding-top: 30px;
`

const FlexDiv = styled.div `
    display: flex;
    justify-content: center;
`

const HandImage = styled.img`
    max-width: 400px;
    margin: auto;
    margin-bottom: -49px;

    @media (max-width: 700px) {
        max-width: 200px;
        margin-bottom: -47px;
      }
`

const BottomDiv = styled.div`
    background: #002D62;
    display: flex;
    justify-content: space-between;
`

const LocationDiv = styled.div`
      margin: auto;
      color: silver;
`

const MediaIconDiv = styled.div`
      margin: auto;
      padding-top: 5px;
`

const GitHubImage = styled.img`
      max-width: 30px;
      margin-bottom:0;
`

const LinkedInImage = styled.img`
      max-width: 30px;
      margin-bottom:0;
      margin: 0;
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
            <LocationDiv>Located in Farmington Hills, MI</LocationDiv>
            <MediaIconDiv>
                <a href="https://github.com/DeBrabant45">
                    <GitHubImage src={GitHub} atl='Github logo Image'/>
                </a>
                <a href="https://www.linkedin.com/in/aaron-debrabant-38940813a/">
                    <LinkedInImage src={LinkedIn} atl='LinkedIn logo Image' />
                </a>
            </MediaIconDiv>
        </BottomDiv>
    </>
)


export default Footer