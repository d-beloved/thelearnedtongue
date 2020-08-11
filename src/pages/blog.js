import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from './blog.module.scss'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'Home'
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className={styles.blog}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3 className={styles.heading}>
                  <Link to={`/blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small className={styles.date}>{node.frontmatter.date} {"."}
                  <span className={styles.readTime}>{node.fields.readingTime.text}</span>
                </small>
                <p className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM. DD, YYYY")
            title
            description
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
