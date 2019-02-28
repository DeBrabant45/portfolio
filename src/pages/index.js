import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

import Banner from '../components/banner'
import LogoBanner from '../components/logobanner'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Skills from '../components/skills'

const JobTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    text-align: center;

    @media (min-width: 500px) {
        
      } 

`

const JobTitleSpan = styled.span`
      margin: auto;
      padding: 0;
      margin-bottom: 0px;
`

const IntroDiv = styled.div `
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 80px;
      text-align: center;
      background: white;
      padding: 100px;
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
    })
  }
  render() {
    return (
      <Layout pageColor='orange'>
        <div data-aos="fade-down">
          <LogoBanner />
        </div>
        <div data-aos="fade-up">
          <Banner />
        </div>
        <JobTitleDiv data-aos="fade-down">
          <JobTitleSpan>
            <h4>Driven and Determined</h4>
            <h1>Front-End Devloper</h1>
            <h4>Unity developer hobbyist</h4>
          </JobTitleSpan>
        </JobTitleDiv>
        <IntroDiv>
          <IntroSpan data-aos="fade-up">
            <h1>Hello, I'm Aaron. Nice to Meet you!</h1>
            <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops.</p>
          </IntroSpan>
        </IntroDiv>
        <Skills />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    )
  }
}

export default IndexPage
