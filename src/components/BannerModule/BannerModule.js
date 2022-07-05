import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }
  let link 
  if (title === 'Piritahi') {
    link = 'https://piritahi.nz'
  } else if (title === 'Strength Tracker') {
    link = 'https://strength-tracker.vercel.app'
  } else if (title === 'Take2') {
    link = 'https://take2nz.org'
  } else if (title === 'TakeMe') {
    link = 'https://take-me-nz.herokuapp.com/about'
  } else if (title === 'South City Towing'){
    link = 'https://www.southcitytowing.co.nz/'
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../../static/hero-img.JPG"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            <div className="banner__btns">
              {enquire && (
                <Button
                  className="btn"
                  text="View"
                  as={Link}
                  to={link}
                />
              )}
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
