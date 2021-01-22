import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import CsSmartLink from "../../common/helpers/contentstack-smart-link"

import "./header.scss"

export default function Header({ homeToggle }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      csHeader {
        notification_bar {
          links {
            label
            url
          }
        }        
        main_nav {
          logo {
            url
          }  
          search_bar_placeholder_text        
        }
      }
    }
  `)
  return (
    <header className="page-header">
      <div className="notification-bar">
        <div className="dropdown-bucket">
          <select><option>Venus</option><option>Legacy</option></select>
        </div>
        <div className="nav-bucket">
          <nav>
            {data.csHeader.notification_bar.links.map((link, idx) => (<CsSmartLink key={"utility-link=" + idx} href={link.url}>{link.label}</CsSmartLink>))}
          </nav>
        </div>
      </div>
      <div className="main-nav">
        <div className="max-width">
          <a className="wrapper-logo" href="/docs/">
            <img src={data.csHeader.main_nav.logo.url} alt="" />
          </a>
          {homeToggle ? null :
            <div className="wrapper-search"><h5>SEARCH</h5></div>}
        </div>
      </div>
    </header>
  )
}