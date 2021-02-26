import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useState } from "react";
import { useEffect } from "react";
 import styled from 'styled-components';

import colors from "../config/colors";


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  position: fixed;
  z-index: 10;
  width: 100%;
  left: 0;
  right: 0;
  background-color: transparent;
  transition: .3s;
 top: 0;
  &.scroll {
    background-color: ${colors.dark};
  }
`

const NavBar = styled.nav`
  padding: 20px;
  height: 70px;
  & > ul {
    display: flex;
    margin: 0;
    justify-content: flex-end;
    width: 100%;
    list-style: none;
    align-items: center;

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
     }
     a:hover {
       opacity: .6;
     }
    }
    
    li.gift {
       border: 2px solid ${colors.primary};
       width: 90px;
       text-align: center;
       background-color: ${colors.primary};
    }

    li.gift:hover {
      opacity: .6;
    }
  }
`

const Header = ({ siteTitle }) => {

  const [headerClass, setHeaderClass] = useState(null);

  const onScroll = () => {
    if (window.scrollY > 70) return setHeaderClass("scroll")

    setHeaderClass(null)
  }

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", onScroll);
   
    return () => {
      window.removeEventListener("scroll", onScroll )
    }
  }, [])
 
  return (
    <HeaderWrapper className={headerClass}>
      <NavBar>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li className="gift">
            <Link to={"/gifts"}>Gift US</Link>
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
