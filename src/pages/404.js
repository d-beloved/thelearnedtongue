import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from "./notfound.module.scss"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className={styles.notfound}>
          <h1 className={styles.heading}>Uh oh, page not Found</h1>
          <p className={styles.info}>
            kindly explore the{" "}
            <a
              style={{
                textDecoration: "none",
                color: "#7d4c46",
                fontWeight: "500",
              }}
              href="/blog/"
            >
              blog here,
            </a>{" "}
            thanks.
          </p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
