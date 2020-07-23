import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../../content/assets/Logo_crop.png"

// import { rhythm, scale } from "../../utils/typography"
import layoutStyle from './layout.module.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let top

    if (location.pathname === rootPath || location.pathname === blogPath) {
      top = (
        <>
          <div className={layoutStyle.left}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <h3 className={layoutStyle.right}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </>
      )
    } else {
      top = (
        <>
          <div className={layoutStyle.left}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <h3 className={layoutStyle.right}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/blog/`}
            >
              {title}
            </Link>
          </h3>
        </>
      )
    }
    return (
      <div className={layoutStyle.wrapper}>
        <div className={layoutStyle.inside}>
          <header className={layoutStyle.header}>{top}</header>
          <main className={layoutStyle.main}>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </div>
    )
  }
}

const Footer = styled.footer`
  text-align: center;
  margin: 20px;
  font-size: 11px;
`

export default Layout
