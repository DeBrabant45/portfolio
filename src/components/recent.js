import React from 'react'
import styled from "styled-components"
import Hover from './hover.js'

import Computer from '../images/Computer.png'
import FullyTapped from '../images/logo2.png'
import FullyTapped2 from '../images/FullyTapped.jpg'


const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    background: #7510F7;
`

const ContainerDiv = styled.div`
      display: flex;
      justify-content: space-evenly;
      padding-top: 50px;
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
  <div>
      <HeaderDiv>
        <Heading>Recent </Heading>
        <Heading>Projects</Heading>
      </HeaderDiv>
    <ContainerDiv>
      <div>
        <Heading>Front-End</Heading>
        <Hover image={FullyTapped2} desc="Fully Tapped Fitness, transforming fitness goals one cilent at a time" codelink="https://github.com/DeBrabant45/FullyTappedFitness" weblink="https://www.fullytappedfitness.com/"/>
        <Hover image={FullyTapped2} desc="Fully Tapped Fitness, transforming fitness goals one cilent at a time" codelink="https://github.com/DeBrabant45/FullyTappedFitness" weblink="https://www.fullytappedfitness.com/"/>
      </div>
      <div>
        <Heading>Unity</Heading>
        <Hover image={FullyTapped2} desc="Fully Tapped Fitness, transforming fitness goals one cilent at a time" codelink="https://github.com/DeBrabant45/FullyTappedFitness" weblink="https://www.fullytappedfitness.com/"/>
        <Hover image={FullyTapped2} desc="Fully Tapped Fitness, transforming fitness goals one cilent at a time" codelink="https://github.com/DeBrabant45/FullyTappedFitness" weblink="https://www.fullytappedfitness.com/"/>
      </div>
    </ContainerDiv>
  </div>
)


export default Recent