import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/main.scss"

const IndexPage = () => {
  return (
    <main>
      <nav className="navigation">
        <a>Home</a>
        <a>Portfolio</a>
        <a>Blog</a>
        <a>Talks</a>
      </nav>
      <div className="main-content">
        <div className="personal-image">
          <StaticImage
            className="image"
            src="../images/peter.png"
            alt="Peter" />
        </div>
        <div className="bio">
          <div className="bio-intro">Hello, it's me</div>
          <div className="bio-name">Okwara</div>
          <div className="bio-description">I am a Software Developer, with 3+ years
            of experience in full stack web development, DevOps and Blockchain development
            in Ethereum, IOTA and EOS.
          </div>
        </div>
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Peter Okwara</title>
