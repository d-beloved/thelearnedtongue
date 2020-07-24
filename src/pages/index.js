import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import face from "../../content/assets/background_resized.jpeg"

class IndexPage extends React.Component {
  render() {
    // const siteTitle = "The Learned Tongue"

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              maxWidth: "40%",
            }}
          >
            <h1
              style={{
                maxWidth: "70%",
                marginTop: 0,
              }}
            >
              The Learned Tongue
            </h1>
            <p>
              Welcome to your new Gatsby website. You are on your home page.
            </p>
            <p>
              This starter comes out of the box with styled components and
              Gatsby's default starter blog running on Netlify CMS.
            </p>
            <p>Now go build something great!</p>
            <Link to="/blog/">
              <Button marginTop="35px" radius="60px" background="#7d4c26">
                Go to Blog
              </Button>
            </Link>
          </div>
          <div
            style={{
              borderRadius: "500px",
              overflow: "hidden",
              height: "25rem",
              width: "25rem",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={face}
              alt="face of the blog"
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
