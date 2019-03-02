import React from 'react'
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"


import HtmlImg from '../components/htmlimg'
import CSharpImg from '../components/csharpimg'
import JsImg from '../components/jsimg'
import CssImg from '../components/cssimg'



const SkillsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const SkillsSpan = styled.span`
      margin: auto;
      border-radius: 5px;
      margin-top: -2.5rem;
      background: orange;
      display: flex;
      box-shadow: 2px 3px 10px 3px rgba(1, 12, 16, 0.5);
      
`

const Column = styled.div`
    border-bottom: 0px solid black;
    border-right: 1px solid black;
    padding: 60px 35px;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 280px;
    border-radius: 5px;
    &:last-child {
        border-right: none;
    }
`

const Headline = styled.h1`
    width: 100%;
    font-size: 35px;
` 


class IndexPage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    })
  }
  render() {
    return (
        <SkillsDiv>
            <SkillsSpan>
                <Column>
                    <Headline>My Skills:</Headline>
                    <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                </Column>
                <Column>
                    <Headline>Languages I speak:</Headline>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p> 
                    <p>C#</p>
                </Column>
                <Column>
                    <Headline>Frameworks I use:</Headline>
                    <p>React.js</p>
                    <p>Gatsby.js</p>
                    <p>.Net</p> 
                    <p>Unity</p>
                </Column>
            </SkillsSpan>
      </SkillsDiv>
    )
  }
}

export default IndexPage
