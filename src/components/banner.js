import React from 'react'
import styled from "styled-components"
import Designer from './designer'

import RBubble from '../images/bubbleright.png'
import LBubble from '../images/bubbleleft.png'


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
    animation-delay: 2s;  

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
    animation-delay: 12s;  

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

const Banner = () => (
    <div>
        <BubbleContainer>
            <SpeechLeft src={LBubble}/>
            <SpeechRight src={RBubble}/>
        </BubbleContainer>
        <Designer />
    </div>
)


export default Banner