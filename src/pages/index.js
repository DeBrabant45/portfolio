import React from 'react'
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

import Banner from '../components/banner'
import LogoBanner from '../components/logobanner'
import Layout from '../components/layout'
//import SEO from '../components/seo'
import Skills from '../components/skills'
import Recent from '../components/recent'

const JobTitleDiv = styled.div`
    padding: 40px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media (min-width: 500px) {
        
      } 

`

const JobTitleSpan = styled.span`
      margin: auto;
      padding: 0;
      margin-bottom: 0px;
`

const HeaderOne = styled.h1`
      margin: 0;
      padding: 5px;
`

const HeaderFour = styled.h4`
      margin: 0;
      padding: 2px;
`

const IntroDiv = styled.div `
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 100px;
      background:#7510F7;

      @media (max-width: 700px) {
        padding: 30px;
      } 
`

const IntroSpan = styled.span`
      width: 60%;
      margin: auto;
      border-radius: 5px;
`

class IndexPage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      mirror: true,
    })
  }
  render() {
    return (
      <Layout pageColor='lightgray'>
        <LogoBanner />
        <Banner />
        <JobTitleDiv data-aos="fade-down">
          <JobTitleSpan>
            <HeaderFour>Driven and Determined</HeaderFour>
            <HeaderOne>Software Engineer</HeaderOne>
            <HeaderFour>Unity Developer</HeaderFour>
            <HeaderFour>Front-End Developer</HeaderFour>
            <HeaderFour>QA Specialist</HeaderFour>
          </JobTitleSpan>
        </JobTitleDiv>
        <IntroDiv id="MyInfo">
          <IntroSpan data-aos="fade-up">
            <h1>Hello, I'm Aaron. Nice to Meet you!</h1>
            <p>
              Since beginning my journey as a software engineer, 
              I've worked as a freelancer, developed for a startup, 
              and became a QA team lead. I've collaborated with talented people to create skills 
              that I put to use with business demands. I'm confident, 
              ambitious, and absolutely love what I do.
              </p>
          </IntroSpan>
        </IntroDiv>
        <Skills />
        <Recent />
    </Layout>
    )
  }
}

export default IndexPage
