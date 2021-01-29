import React, { useState } from "react"
import styled from "styled-components"
import Countdown from "../components/countdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
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
      color: ${colors.light};
      text-align: left !important;
      display: block;
      font-weight: 100;
    }

    .brideName,
    .groomName {
      font-weight: 400;
      color: ${colors.secondary};
      font-size: 64px;
    }

    .brideName {
      margin-top: 40px;
      margin-bottom: 0;
    }

    .brideName + span {
      color: ${colors.light};
      font-family: "Molle";
      font-size: 24px;
      left: -40px;
      position: relative;
      margin: 10px;
      display: block;
      font-weight: 100;
    }

    .groomName {
      margin: 20px;
      text-align: center;
      margin-bottom: 0;
      text-indent: -30px;
    }

    .l-2 {
      left: -20px;
      position: relative;
    }

    .getting-married {
      font-weight: 300;
      font-size: 30px;
      color: ${colors.white};
      margin-bottom: 15px;
      width: fit-content;
      margin: 10px auto;
      letter-spacing: 4px;
    }
    .date {
      font-size: 14px;
      font-weight: 100;
      letter-spacing: 1px;
      color: ${colors.primary};
    }
  }

  .section-title {
    color: ${colors.secondary};
  }
  @media (max-width: 550px) {
    & {
      margin-top: 0;
    }

    & > div {
      .tagline {
        color: ${colors.white};
      }
      .brideName,
      .groomName {
        font-size: 42px;
        letter-spacing: 2px;
      }

      .brideName + span {
        left: 0;
      }
      .groomName {
        margin: 0px;
        margin-bottom: 0;
        text-align: left;
        text-indent: 50px;
      }
      .groomName + .mt-4 {
        margin-top: 20px;
        left: 0;
      }
      .getting-married {
        display: none;
      }

      .date {
        color: ${colors.white};
        text-align: center;
        display: block;
      }
    }
  }

  @media (min-width: 360px) and (max-width: 768px) {
    .sm-only {
      display: block !important;
    }
    .sm-none {
      display: none !important;
    }

    .md-only {
      display: none !important;
    }
  }

  @media (min-width: 768px) {
    .sm-only {
      display: none !important;
    }
    .md-only {
      display: block;
      display: flex;
    }
  }
`
const SectionOne = styled.div`
  display: flex;
  align-items: center;
  height: 800px;

  & > div:first-child {
    padding: 20px;
    padding-left: 6%;
  }

   @media (max-width: 550px) {
      & {
        height: 600px;
      }
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
    max-width: 1200px;
    margin: auto;
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
          width: 90%;
          line-height: 20px;
          margin: auto;
        }
      }
    }
  }
  @media (max-width: 550px) {
    & {
      div.section {
        .story {
          display: block !important;
          div {
            width: 100%;
          }
        }
      }
    }
  }
`
const SectionThree = styled.div`
  ${"" /* align-items: center; */}

  .proposalWrapper {
    background-color: ${colors.black};
    position: relative;

    .speech-box {
      max-width: 419px;
      background-color: ${colors.white};
      padding: 20px 30px 0px;
      position: absolute;
      top: 30%;
      left: 10px;
      transition: .3s;
      cursor: pointer;

      h3 {
        font-size: 16px;
        color: ${colors.primary};
        top: 0;
        padding-top: 20px;
        letter-spacing: 0;
      }

      p {
        color: ${colors.primary};
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 1.3em;
        font-style: italic;
      }
    }

    .speech-box:hover {
      opacity: .2;
    }
  }

  h3 {
    font-size: 36px;
    letter-spacing: 5px;
    top: -15px;
    position: relative;
  }

  @media (max-width: 768px) {
    .proposalWrapper {
      .speech-box {
        visibility: hidden;
      }
    }
  }
`

const SectionFour = styled.div`
  padding-top: 5em;
  padding-bottom: 5em;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 36px;
    letter-spacing: 5px;
  }

  .infoWrapper {
    display: grid;
    max-width: 1024px;
    margin: auto;
  }

  div.lg-only {
    display: none;
  } 

  .infoWrapper div,
  div.rsvp {
    background-color: ${colors.white};
    color: ${colors.black};
    padding: 30px 20px;
    width: 300px;
    height: 220px;
    margin: 2em auto;

    h4 {
      font-size: 16px;
      font-family: "Molle";
      font-weight: 100;
    }

    p {
      font-size: 14px;
      font-family: "Open Sans";
      line-height: 1.6em;
      font-weight: 600;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    a:hover {
      opacity: 0.5;
    }
  }

  ${"" /* div.rsvp {
    margin: 2em auto;
  } */}

  @media (max-width: 768px) {
    .infoWrapper {
      display: grid;
      grid-template-columns: 1fr;
    }

    .infoWrapper div,
      margin: 2em auto;
    }
  }

  @media (min-width: 769px) {
    .infoWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .infoWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    div.lg-only {
      display: block;
    }

    .infoWrapper div.rsvp {
      display: none;
    }

  }

  ${
    "" /* @media (min-width: 769px) {
    .infoWrapper {
      display: grid;
      grid-column
    }
  } */
  }
`
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
  const [areMarried, setAreMarried] = useState(false);
  const handleOnComplete = () => {
    setAreMarried(true);
  }

  return (
    <Layout>
      <SEO title="Home" />

      <Container>
        <SectionOne>
          <div>
            <span className="tagline">#tomade2021</span>
            <h2 className="brideName">OLUWATOMISIN</h2>
            <span>and</span>
            <h2 className="groomName">SAMSON</h2>

            <div className="mt-4 l-2">
              <h2 className="getting-married position-relative">
                <img
                  src={require("../images/rose.png")}
                  width={41}
                  height={46}
                  alt=""
                  style={{
                    position: "absolute",
                    right: -5,
                    top: -55,
                    transform: "rotate(45deg)",
                  }}
                />
                {areMarried && "ARE MARRIED!!! "}
                {!areMarried && "ARE GETTING MARRIED"}
              </h2>
              <span className="date">27th March 2021</span>
              <Countdown
                className="md"
                timeTillDate="Mar 27, 2021 7:00:00"
                onComplete={handleOnComplete}
              />
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
          <h3 className="section-title">OUR LOVE STORY</h3>
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
              <div className="writeup md-only sm-none">
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
              <div className="writeup sm-only md-none">
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
          </div>
        </SectionTwo>

        <SectionThree className="mt-4">
          <img
            src={require("../images/sec3.png")}
            alt={""}
            height="auto"
            style={{}}
          />
          <h3 className="section-title">THE PROPOSAL</h3>
          <div className="proposalWrapper">
            <Video
              videoSrcURL={require("../assets/video/sam proposal.mp4")}
              videoTitle="Samson's Proposal"
            />

            <div className="speech-box">
              <h3>THE PROPOSAL SPEECH</h3>
              <p> Oluwatomisin!!!! (God is enough for me) </p>
              <p>
                You’ve been there through the “Not so good times”. You’ve
                trusted my judgments and seen me through it even when it looked
                like the path wasn’t clear. You’ve indeed been patient!!!
                Patient with quite a number of things. Our path hasn’t been so
                smooth but it’s been interesting. Quite a number of things, I’ve
                learnt from your quiet rebuke (part of which is being
                SENsITIVE). Thank you for bringing me PEACE! I DO NOT take our
                love for granted and that’s why I’ve chosen this day to ask you
                my Choco candy! Will you marry me??????
              </p>
              <img
                src={require("../images/sec2.png")}
                height="auto"
                width={50}
                alt=""
              />
            </div>
          </div>
        </SectionThree>
        <SectionFour>
          <h3 className="section-title">THE WEDDING</h3>
          <img src={require("../images/sec4.png")} height="auto" style={{}} />

          <div className="infoWrapper">
            <div>
              <h4>Engagement Ceremony</h4>
              <p>
                Iyeru Ideal Hall, Opposite Ibikunle Lawal School, Parakin
                Estate, Ile-Ife, Osun State. <br />
                Time: 7am <br />
                Date: 27 March, 2021
              </p>
            </div>
            <div>
              <h4>Solemnization of Holy Matrimony</h4>
              <p>
                Christ Resurrection Chapel. 15, Afolabi Ajomale Street, Parakin
                Layout, Ile-Ife, Osun State.
                <br />
                Time: 12pm <br />
                Date: 27 March, 2021
              </p>
            </div>
            <div>
              <h4>Reception</h4>
              <p>
                IIyeru Ideal Hall, Opposite Ibikunle Lawal School, Parakin
                Estate, Ile-Ife, Osun State. <br />
                Time: 2pm
              </p>
            </div>
            <div className="rsvp">
              <h4>RSVP</h4>
              <p>
                <a href="tel:08033019048">Akinbode Oloidi Jnr: 08033019048 </a>
                <br />
                <a href="tel:08104198032">Oluwaseyi Oloidi: 08104198032 </a>
                <br />
                <a href="tel:08033151464">Bright Musa: 08033151464</a>
                <br />
                <a href="tel:08108675212"> Ella Chioma: 08108675212</a>
              </p>
            </div>
          </div>
          <div className="rsvp lg-only">
            <h4>RSVP</h4>
            <p>
              <a href="tel:08033019048">Akinbode Oloidi Jnr: 08033019048 </a>
              <br />
              <a href="tel:08104198032">Oluwaseyi Oloidi: 08104198032 </a>
              <br />
              <a href="tel:08033151464">Bright Musa: 08033151464</a>
              <br />
              <a href="tel:08108675212"> Ella Chioma: 08108675212</a>
            </p>
          </div>
        </SectionFour>
      </Container>
    </Layout>
  )
}

export default IndexPage;

