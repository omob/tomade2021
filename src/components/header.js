import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
 import styled from 'styled-components';

import colors from "../config/colors";

const HeaderWrapper = styled.header`
  position: relative;
  height: 100px;
`

const NavBar = styled.nav`
  margin: 0 auto;
  max-width: 1280px;
  padding: 20px;
  grid-template-columns: 1fr;
  height: 80px;

  & > ul {
    display: flex;
    margin: 0;
    justify-content: flex-end;
    width: 100%;
    list-style: none;

    li {
      margin: 0 20px;
      text-transform: uppercase;
      font-size: 14px;
      font-family: "Open Sans";
      font-weight: bold;
      letter-spacing: 1.5px;

     a {
        color: inherit;
        text-decoration: none;
     }:hover {
       opacity: .6;
     }
    }
    li.gift {
       border: 2px solid ${colors.lightDanger};
       width: 90px;
       text-align: center;
       background-color: ${colors.lightDanger};
    }

    li.gift:hover {
      opacity: .6;
    }
`
const Logo = styled.img`
  height: 85px;
  width: auto;
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <NavBar>
        <ul>
          <li>
            <Link>The Story</Link>
          </li>
          <li>
            <Link>Proposal</Link>
          </li>
          <li>
            <Link>Gallery</Link>
          </li>
          <li className="gift">
            <Link to={"/gift"}>Gift US</Link>
          </li>
        </ul>
      </NavBar>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
