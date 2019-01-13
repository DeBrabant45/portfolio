import React from 'react'
import styled from "styled-components"

import DesignerImg from '../images/Designer.png'
import RBubble from '../images/bubbleright.png'
import LBubble from '../images/bubbleleft.png'
import Logo from '../images/Text01.png'

const ContainerDiv = styled.div`
    background: orange;
`
const BubbleContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
`
const SpeechRight = styled.img` 
    max-width: 100%;
    margin: 0px;
    opacity: 0;
    animation: opacityOn 10s normal forwards;
    animation-delay: 1s;  

    @keyframes opacityOn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @media (max-width: 700px) {
        max-width: 200px;
        max-height: 100px;
      } 
`
const SpeechLeft = styled.img` 
    max-width: 100%;
    margin: 0px;
    opacity: 0;
    animation: opacityOn 10s normal forwards;
    animation-delay: 10s;  

    @keyframes opacityOn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @media (max-width: 700px) {
        max-width: 200px;
        max-height: 100px;
      } 
`
const ImgDesigner = styled.img`
    margin: auto;
    max-width: 100%;
    display: block;
`
const LogoSpan = styled.span`
    position: absolute;
    opacity: 0.8;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
    height: 250px;
    width: 100%;

    
    @media (max-width: 700px) {
        top: 10px;
      } 
`

const Banner = () => (
    <ContainerDiv>
        <LogoSpan />
        <BubbleContainer>
            <SpeechLeft src={LBubble}/>
            <SpeechRight src={RBubble}/>
        </BubbleContainer>
        <ImgDesigner src={DesignerImg} atl='DesignerImg' />
    </ContainerDiv>
)


export default Banner