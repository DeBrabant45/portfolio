import React from 'react'
import styled from "styled-components"
import DesignerImg from '../images/Designer.png'
import Bubble from '../images/speechbubble.png'
import Text from '../images/Text01.png'

const ContainerDiv = styled.div`
    background: orange;
`
const BubbleContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
`
const SpeechLeft = styled.img` 
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
`
const SpeechRight = styled.img` 
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
`
const ImgDesigner = styled.img`
    margin: auto;
    max-width: 100%;
    display: block;
`

const LogoSpan = styled.span`
    position: absolute;
    opacity: 0.8;
    background-image: url(${Text});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
    height: 250px;
    width: 100%;
`

const Banner = () => (
    <ContainerDiv>
        <LogoSpan />
        <BubbleContainer>
            <SpeechRight src={Bubble}/>
            <SpeechLeft src={Bubble}/>
        </BubbleContainer>
        <ImgDesigner src={DesignerImg} atl='DesignerImg' />
    </ContainerDiv>
)


export default Banner