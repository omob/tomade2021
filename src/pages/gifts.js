import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import colors from "../config/colors"

const Container = styled.div`
  padding: 20px;
`;

const HeaderSection = styled.div`
  text-align: center;
  padding: 2em;

  h2 {
    font-size: 3em;
    text-transform: uppercase;
    font-weight: 100;
  }

  @media (min-width: 992px) {
    p {
      width: 80%;
      margin: auto;
    }
  }
`
const GiftSection = styled.div`
  padding: 5%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-template-rows: auto;

  @media (min-width: 628px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .gift {
    width: 250px;
    font-weight: 100 !important;
    position: relative;
    margin: 10px;

    .img-div {
      background-color: white;
      height: 150px;
      margin-bottom: 10px;
    }

    .content {
      display: flex;

      & > div {
        flex: 1;

        h3 {
          margin-bottom: 2px;
        }

        h3,
        span {
          font-size: 14px;
        }
      }

      .gift-btn {
        width: 90px;
        text-align: center;
        display: block;
        background-color: ${colors.primary};
        color: ${colors.white};
        font-size: 12px;
        border-radius: 20px;
        letter-spacing: 2px;
        text-decoration: none;
        transition: 0.5s;
        height: 25px;
      }

      .gift-btn:hover {
        opacity: 0.8;
      }
    }
  }
`


const SecondPage = () => (
  <Layout>
    <SEO title="Gifts" />
    <Container>
      <HeaderSection>
        <h2>Gift Us </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a arcu
          eu massa luctus imperdiet sed a nisl. In eu laoreet dolor. Quisque
          arcu lacus, auctor sed sem sed, rutrum iaculis ante. Donec vitae lorem
          non nibh congue accumsan. Integer sit amet ipsum lorem. Vestibulum
          vehicula lacus scelerisque eros rhoncus, id porttitor sem vestibulum.
          Nam tincidunt, arcu eget pellentesque faucibus, augue lectus venenatis
          ante, non sodales ex arcu vitae nibh. Pellentesque habitant morbi
          tristique senectus
        </p>
      </HeaderSection>
      <GiftSection>
        <div className="gift">
          <div className="img-div">
            <img src=" " />
          </div>
          <div className="content">
            <div>
              <h3>Air Conditional</h3>
              <span>N78,000</span>
            </div>
            <a className="gift-btn" href="/">
              Gift
            </a>
          </div>
        </div>
        <div className="gift">
          <div className="img-div">
            <img src=" " />
          </div>
          <div className="content">
            <div>
              <h3>Air Conditional</h3>
              <span>N78,000</span>
            </div>
            <a className="gift-btn" href="/">
              Gift
            </a>
          </div>
        </div>
        <div className="gift">
          <div className="img-div">
            <img src=" " />
          </div>
          <div className="content">
            <div>
              <h3>Air Conditional</h3>
              <span>N78,000</span>
            </div>
            <a className="gift-btn" href="/">
              Gift
            </a>
          </div>
        </div>
        <div className="gift">
          <div className="img-div">
            <img src=" " />
          </div>
          <div className="content">
            <div>
              <h3>Air Conditional</h3>
              <span>N78,000</span>
            </div>
            <a className="gift-btn" href="/">
              Gift
            </a>
          </div>
        </div>
        <div className="gift">
          <div className="img-div">
            <img src=" " />
          </div>
          <div className="content">
            <div>
              <h3>Air Conditional</h3>
              <span>N78,000</span>
            </div>
            <a className="gift-btn" href="/">
              Gift
            </a>
          </div>
        </div>
        <div className="gift">
          <div className="img-div">
            <img src=" " />
          </div>
          <div className="content">
            <div>
              <h3>Air Conditional</h3>
              <span>N78,000</span>
            </div>
            <a className="gift-btn" href="/">
              Gift
            </a>
          </div>
        </div>
      </GiftSection>
    </Container>
  </Layout>
)

export default SecondPage
