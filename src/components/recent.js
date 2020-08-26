import React from 'react'
import styled from "styled-components"
import Hover from './hover.js'

import FullyTapped from '../images/FullyTapped.png'
import CityBuilder from '../images/CityBuilder.png'

const ColoredContainerDiv = styled.div`
    background: #7510F7;
`

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;

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
  <ColoredContainerDiv id="Recent">
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
        <Hover image={CityBuilder} desc="A city builder game that I'm still creating" codelink="https://github.com/DeBrabant45/Unity3d-City-Builder"/>
      </div>
    </ContainerDiv>
  </ColoredContainerDiv>
)


export default Recent