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
            <h1 className={styles.heading}>The Learned Tongue</h1>
            <p className={styles.welcome} style={{fontWeight: "900"}}>
              Welcome to the haven of wisdom.
            </p>
            <p className={styles.welcome}>
              As wisdom is the principal thing, it's paramount to daily ingest
              words of wisdom, especially in a world where vain philosophies of
              men abound. Here's a save haven, where you not only get wisdom,
              but you are inspired to also get understanding.
            </p>
            <Link className={styles.action} to="/blog/">
              <Button
                display="inline"
                marginTop="20px"
                radius="60px"
                background="#7d4c26"
              >
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
