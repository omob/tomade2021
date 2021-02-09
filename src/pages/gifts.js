import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import colors from "../config/colors"

const Container = styled.div`
  padding: 20px;

  p {
    font-family: "Open Sans";
  }
`

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

    div.account-info {
      font-size: 16px;
      img {
        margin-right: 10px;
      }

      div {
        font-family: "Open Sans";
        font-size: 16px;
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

      div.account-info {
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
      overflow: hidden;

      .gatsby-image-wrapper {
        height: 90%;
      }
    }

    .content {
      display: flex;

      & > div {
        flex: 1;

        h6 {
          margin-bottom: 2px;
          font-weight: 500;
        }

        h6,
        span {
          font-size: 14px;
        }
        span {
          letter-spacing: 1px;
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

const GiftsPage = ({ data: { gifts: { nodes: gifts } }  }) => {

  const Gift = ({ item: { title, price, image: {fixed: image }, url, isOrdered }}) => {
   return (
     <div className="gift">
       <div className="img-div">
         <Img fluid={image} alt={title} />
       </div>
       <div className="content">
         <div>
           <h6>{title}</h6>
           <span>₦ {price}</span>
         </div>
         <a href={url} target="_blank" alt={title} className="gift-btn">
           Gift
         </a>
       </div>
     </div>
   )
  }
  return (
    <Layout>
      <SEO title="Gifts" />
      <Container>
        <HeaderSection>
          <h2>Gift Us </h2>
          <p>
            We will truly appreciate that our friends, family and wedding guests
            send us mostly the gifts on this registry. There is also an option
            to just send us cash. We are both so grateful for your support
          </p>

          <div className="transfer">
            <div>
              <h3>For Bank Transfer</h3>
              <div className="account-info">
                <img src={require("../images/gtlogo.png")} alt="gtbLogo" />
                <div>
                  <>
                    <b>Account Name </b>- Oke Oluwatosin Roseline <br />
                    <b>Account Number </b> - 0049784272
                  </>
                </div>
              </div>
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
            3, Reverend Adegoke Street, Canal Estate, Okota, Lagos.
            <br />
            +234 0812 044 6099
          </p>
        </DeliveryInfo>

        <GiftSection>
          {gifts.map(gift => (
            <Gift item={gift} />
          ))}
        </GiftSection>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    gifts: allContentfulGift {
      nodes {
        title
        url
        isOrdered
        image {
          fixed(height: 200) {
            ...GatsbyContentfulFixed
          }
        }
        price
      }
    }
  }
`
export default GiftsPage