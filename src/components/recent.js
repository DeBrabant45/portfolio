import React from 'react'
import styled from "styled-components"
import Hover from './hover.js'

import FullyTapped from '../images/FullyTapped.png'


const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    background: #7510F7;
`

const ContainerDiv = styled.div`
      display: flex;
      justify-content: space-evenly;
      padding: 50px;
      background: #7510F7;
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

const Recent = (props) => (
  <div id="Recent">
      <HeaderDiv>
        <Heading>Recent </Heading>
        <Heading>Projects</Heading>
      </HeaderDiv>
    <ContainerDiv>
      <div>
        <Heading>Front-End</Heading>
        <Hover image={FullyTapped} desc="Fully Tapped Fitness, transforming fitness goals one cilent at a time" codelink="https://github.com/DeBrabant45/FullyTappedFitness" weblink="https://www.fullytappedfitness.com/"/>
      </div>
      <div>
        <Heading>Unity</Heading>
        <Hover image={FullyTapped} desc="Fully Tapped Fitness, transforming fitness goals one cilent at a time" codelink="https://github.com/DeBrabant45/FullyTappedFitness" weblink="https://www.fullytappedfitness.com/"/>
      </div>
    </ContainerDiv>
  </div>
)


export default Recent