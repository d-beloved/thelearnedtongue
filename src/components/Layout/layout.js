import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../../content/assets/Logo_crop.png"

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
          <h3 className={`${title ? layoutStyle.right : ""}`}>
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
          <div className={layoutStyle.xleft}>
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
          <h3 className={layoutStyle.xright}>
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
      <div className={layoutStyle.width}>
        <div className={layoutStyle.wrapper}>
          <div className={layoutStyle.inside}>
            <header className={layoutStyle.header}>{top}</header>
            <main className={layoutStyle.main}>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()}, Handcrafted by
            {` `}
            D-Beloved
          </Footer>
        </div>
      </div>
    )
  }
}

const Footer = styled.footer`
  text-align: center;
  margin: 20px;
  font-size: 11px;
  font-weight: 600;
  z-index: 1;
`

export default Layout
