import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../config/colors"


const Container = styled.div`
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
const SectionOne = styled.div`
  display: flex;
  align-items: center;
  height: 800px;

  & > div {
    padding: 20px;
  }
`

const SectionTwo = styled.div`
  align-items: center;
  h3 {
    font-size: 36px;
    letter-spacing: 5px;
    top: -15px;
    position: relative;
  }

  div.section {
    margin-top: 40px;
    .story {
      display: flex;
      margin-bottom: 30px;

      div {
        width: 50%;
        height: 400px;
      }
      span.name {
        display: block;
        font-family: "Molle";
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 100;
      }
      .writeup {
        align-items: center;
        justify-content: center;
        display: flex;

        p {
          font-weight: 100;
          font-size: 14px;
          letter-spacing: 2px;
          width: 80%;
        }
      }
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

const IndexPage = ({data}) => {

  // const getImage = (name) => 
  //     useStaticQuery(graphql`
  //       {
  //         allFile(filter: { name: { eq: "name" } }) {
  //           nodes {
  //             relativePath
  //             childImageSharp {
  //               fluid {
  //                 src
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `)

  // console.log(getImage("sam"))

  return (
    <Layout>
      <SEO title="Home" />

      <Container>
        <SectionOne>
          <div>
            <span className="tagline">#tomade2021</span>
            <h2 className="brideName">OLUWATOMISIN</h2>
            <span style={{ color: "#A8A8A8", fontFamily: "Molle" }}>and</span>
            <h2 className="groomName">SAMSON</h2>

            <div className="mt-3 ">
              <h2 className="getting-married position-relative">
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
              </h2>
              <span className="date">27th March 2021</span>
              <CountdownContainer>
                <span>24</span>:<span>12</span>:<span>43</span>:<span>43</span>
              </CountdownContainer>
            </div>
          </div>
          <div>
            <p></p>
          </div>
        </SectionOne>
        <SectionTwo>
          <img
            src={require("../images/sec2.png")}
            width="auto"
            height="auto"
            style={{}}
          />
          <h3>OUR LOVE STORY</h3>
          <div className="section">
            <div className="story">
              <div>
                <img src={require("../images/sam.png")} alt="Sam" />
                <span className="name">Samson</span>
              </div>
              <div className="writeup">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a arcu eu massa luctus imperdiet sed a nisl. In eu laoreet
                  dolor. Quisque arcu lacus, auctor sed sem sed, rutrum iaculis
                  ante. Donec vitae lorem non nibh congue accumsan. Integer sit
                  amet ipsum lorem. Vestibulum vehicula lacus scelerisque eros
                  rhoncus, id porttitor sem vestibulum. Nam tincidunt, arcu eget
                  pellentesque faucibus, augue lectus venenatis ante, non
                  sodales ex arcu vitae nibh. Pellentesque habitant morbi
                  tristique senectus
                </p>
              </div>
            </div>
            <div className="story">
              <div className="writeup">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a arcu eu massa luctus imperdiet sed a nisl. In eu laoreet
                  dolor. Quisque arcu lacus, auctor sed sem sed, rutrum iaculis
                  ante. Donec vitae lorem non nibh congue accumsan. Integer sit
                  amet ipsum lorem. Vestibulum vehicula lacus scelerisque eros
                  rhoncus, id porttitor sem vestibulum. Nam tincidunt, arcu eget
                  pellentesque faucibus, augue lectus venenatis ante, non
                  sodales ex arcu vitae nibh. Pellentesque habitant morbi
                  tristique senectus
                </p>
              </div>
              <div>
                <img src={require("../images/tomi.png")} alt="Tomi" />
                <span className="name">Tomisin</span>
              </div>
            </div>
          </div>
        </SectionTwo>
      </Container>
    </Layout>
  )
}

export default IndexPage;

