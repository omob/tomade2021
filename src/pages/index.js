import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import colors from "../config/colors"


const Container = styled.div`
  display: flex;
  align-items: center;
  height: 800px;

  .position-relative {
    position: relative;
  }

  .mt-4 {
    margin-top: 4em;
  }

  .mt-3 {
    margin-top: 3em;
  }

  & > div {
    text-align: center;

    .tagline {
      color: ${colors.secondary};
      text-align: left !important;
      display: block;
      font-weight: 100;
    }

    .brideName, .groomName {
      font-weight: 400;
    }

    .brideName {
      font-size: 64px;
      margin-top: 40px;
      margin-bottom: 0;
    }

    .groomName {
      font-size: 64px;
      margin: 20px;
      text-align: center;
      margin-bottom: 0;
    }

    .getting-married {
      font-weight: 300;
      font-size: 30px;
      color: ${colors.lightDanger};
      margin-bottom: 15px;
      width: fit-content;
      margin: auto;
    }
    .date {
      font-size: 14px;
      font-weight: 100;
      letter-spacing: 1px;
    }
  }
`
const CountdownContainer = styled.div`
  border: 5px solid;
  width: 265px;
  margin: auto;
  padding: 10px;
  margin-top: 10px;

  & span {
    font-size: 24px;
    margin-left: 10px;
    padding: 10px;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <div style={{ padding: 20 }}>
        <span className="tagline">#tomade2021</span>
        <h2 className="brideName">OLUWATOMISIN</h2>
        <span style={{ color: "#A8A8A8" }}>and</span>
        <h2 className="groomName">SAMSON</h2>

        <div className="mt-3 ">
          <h3 className="getting-married position-relative">
            <img
              src={require("../images/rose.png")}
              width={41}
              height={46}
              style={{
                position: "absolute",
                right: -10,
                top: -55,
                transform: "rotate(45deg)",
              }}
            />
            ARE GETTING MARRIED
          </h3>
          <span className="date">27th March 2021</span>
          <CountdownContainer>
            <span>24</span>:<span>12</span>:<span>43</span>:<span>43</span>
          </CountdownContainer>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
