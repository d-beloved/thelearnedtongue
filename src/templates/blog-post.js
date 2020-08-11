import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styles from './blogpost.module.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = "View All Articles"
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className={styles.post}>
          <h1 className={styles.heading}>{post.frontmatter.title}</h1>
          <p className={styles.date}>
            {post.frontmatter.date} {'.'}
            <span className={styles.readTime}>{post.fields.readingTime.text}</span>
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <ul
          className={styles.movement}
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li style={{color: "#7d4c46"}}>
              {previous && (
                <Link style={{color: "#7d4c46", fontWeight: "bold"}} to={`/blog${previous.fields.slug}`} rel="prev">
                  ← Prev.
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link style={{color: "#7d4c46", fontWeight: "bold"}} to={`/blog${next.fields.slug}`} rel="next">
                  Next →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMM. DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
