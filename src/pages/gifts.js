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

  h2 + p {
    font-size: 16px;
    max-width: 800px;
    margin: auto;
  }

  .transfer {
    max-width: 928px;
    margin: auto;
    background-color: #232323;
    margin-top: 3em;
    padding: 30px;
    font-family: "Galada";
    font-weight: 100;

    h3 {
      text-transform: uppercase;
      font-size: 18px;
      font-family: inherit;
      letter-spacing: 2px;
    }

    p {
      font-size: 14px;
      img {
        margin-right: 10px;
      }
    }
  }

  @media (min-width: 768px) {
    h2 + p {
      font-size: 18px;
    }

    .transfer {
      display: grid;
      grid-template-columns: 1fr 1fr;

      > :first-child {
        border-right: 1px solid #ededed;
      }

      p {
        display: flex;
        img {
          margin-right: 20px;
        }
      }
    }
  }
`
const GiftSection = styled.div`
  padding: 0 5% 5% 5%;
  max-width: 1400px;
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
const DeliveryInfo = styled.div`
  max-width: 750px;
  margin: auto;
  margin-top: 1em;
  font-size: 16px;
  font-weight: lighter;
  letter-spacing: 1px;
  text-align: center;
  padding: 30px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 100px 1fr;
  }
`

const SecondPage = () => (
  <Layout>
    <SEO title="Gifts" />
    <Container>
      <HeaderSection>
        <h2>Gift Us </h2>
        <p>
          We will truly appreciate that our friends, family and wedding guests
          send us mostly the gifts on this registry. There is also an option to
          just send us cash. We are both so grateful for your support
        </p>

        <div className="transfer">
          <div>
            <h3>For Bank Transfer</h3>
            <p>
              <img src={require("../images/gtlogo.png")} alt="gtbLogo" />
              Account Name - Account Number
            </p>
          </div>
          <div>
            <h3>For Online Transfer</h3>
          </div>
        </div>
      </HeaderSection>

      <DeliveryInfo>
        <img src={require("../images/jumialogo.png")} alt="jumia-logo" />
        <p>
          Delivery Details (please use our details to prevent a double order)
          <br />
          33D Kayode Adeyeri Crescent, Ogudu GRA, Ojota, Lagos.
          <br /> 
          +2348088018711
        </p>
      </DeliveryInfo>

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
