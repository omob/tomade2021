/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "@fontsource/galada"
import "fontsource-open-sans/";
// import "@fontsource/molle"

import "./layout.css"
import colors from "../config/colors"
import styled from "styled-components"



const Footer = styled.footer`
margin-top: 2rem;
text-align: center;
padding-top: 20px;
background-color: ${colors.black};
font-size: 14px;

a {
  color: ${colors.secondary};
}
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1440,
          backgroundColor: `#0D0D0D`,
        }}
      >
        <main>{children}</main>
        <Footer>
          #Tomade © {new Date().getFullYear()}
          <p>
            Built by
            {` `}
            <a href="https://www.deevcorp.com">DeevCorp Digital Agency</a>
          </p>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
