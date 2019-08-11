import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import Computer from '../images/Computer.png'
import FullyTapped from '../images/logo2.png'
import HtmlImg from '../components/htmlimg'
import CSharpImg from '../components/csharpimg'


const ContainerDiv = styled.div`
      display: flex;
      justify-content: center;
      padding-top: 150px;
`

const ContainerSpan = styled.span`
      margin: auto;
      display: block;
`

const Heading = styled.h1`
      text-align: center;
      padding: 0;
      margin: 0;
`
const PageLink = styled(Link)`
    text-decoration: none; 
    color: black;
    letter-spacing: .1em; 
    font-size: 14px; 
    font-variant-caps: small-caps; 
    font-weight: bolder;
`

const PLText = styled.h4`
    padding: 10px;
    border: solid black;
`

const Recent = (props) => (
  <ContainerDiv id="Recent">
    <ContainerSpan>
      <img src={FullyTapped} />
    </ContainerSpan>
    <ContainerSpan>
        <Heading>Recent</Heading>
        <Heading>Work</Heading>
        <PageLink to="/page-2/">
          <PLText>View All Work</PLText>
        </PageLink>
    </ContainerSpan>
    <ContainerSpan>
      <img src={Computer} />
    </ContainerSpan>
  </ContainerDiv>
)


export default Recent