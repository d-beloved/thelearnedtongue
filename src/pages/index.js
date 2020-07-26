import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styles from './home.module.scss'

class IndexPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className={styles.home}>
          <div className={styles.inner}>
            <h1 className={styles.heading}>
              The Learned Tongue
            </h1>
            <p className={styles.welcome}>
              Welcome to your new Gatsby website. You are on your home page.
            </p>
            <p className={styles.welcome}>
              This starter comes out of the box with styled components and
              Gatsby's default starter blog running on Netlify CMS.
            </p>
            <p className={styles.welcome}>Now go build something great!</p>
            <Link className={styles.action} to="/blog/">
              <Button display="inline" marginTop="20px" radius="60px" background="#7d4c26">
                Go to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
