import React from 'react'
import styled from "styled-components"
import Hover from './hover.js'

import FullyTapped from '../images/FullyTapped.png'
import CityBuilder from '../images/CityBuilder.png'
import JollyRoger from '../images/JollyRoger.jpg'
import Dojo from '../images/DojoPromo.png'
import Computer from '../images/Computer.png'

const ColoredContainerDiv = styled.div`
    background: #002D62;
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
      background: #002D62;

      @media (max-width: 768px) {
        display: block;
        padding: 10px;
      } 
`

const Heading = styled.h1`
      text-align: center;
      padding: 0;
      margin: 0;
      color: silver;
`
const PCLogo = styled.img`
    text-align: center;
    padding-bottom: 10px;
    margin: auto;
    display: block;
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
        <Heading>C#</Heading>
        <Hover image={CityBuilder} desc="My First fully completed 3D game" codelink="https://github.com/DeBrabant45/Unity3d-City-Builder" weblink="https://debrabant45.github.io/Unity3d-City-Builder/"/>
        <Hover image={Dojo} desc="My Second fully completed 3D game" codelink="https://github.com/DeBrabant45/Unity3d-Dojo-Demo/tree/main/Assets/Scripts" weblink="https://aarondebrabant.itch.io/samurai-dojo"/>
        <Hover image={JollyRoger} desc="My 3D Survival project still in development" codelink="https://github.com/DeBrabant45/Unity3d-Survival"/>
      </div>
    </ContainerDiv>
    <PCLogo src={Computer} alt="Computer screen with logos"/>
  </ColoredContainerDiv>
)


export default Recent