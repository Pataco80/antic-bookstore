import React from 'react'
import BcgImg from 'gatsby-background-image'
import { Container } from 'react-bootstrap'


export default function BackgroundImage({ img, styles, title, children }) {
 return (
  <BcgImg className={styles} fluid={img}>
   <Container>
    <h1 className="title"><strong>{title}</strong></h1>
   </Container>


   {children}
  </BcgImg>
 )
}

BackgroundImage.defaultProps = {
 title: "Titre de page",
 styles: "bcg-img-section"
}
