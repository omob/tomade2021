import React from 'react';
import { Gallery } from "gatsby-theme-gallery"
import Layout from "../components/layout"
import styled from '@emotion/styled';
import SEO from '../components/seo';
import colors from '../config/colors';

const Container = styled.div`
  padding: 20px;
  padding-top: 100px;
`
const HeaderSection = styled.div`
  text-align: center;
  padding: 2em;

  h2 {
    font-size: 3em;
    font-weight: 100;
    color: ${colors.secondary}
  }
`
const MyGallery = () => (
  <Layout>
    <SEO 
      title="Gallery" 
      description="Our Pre-wedding, Introduction and Proposal Pictures"/>
    <Container>
      <HeaderSection>
        <h2>Gallery</h2>
      </HeaderSection>
      <Gallery />
    </Container>
  </Layout>
)

export default MyGallery;
