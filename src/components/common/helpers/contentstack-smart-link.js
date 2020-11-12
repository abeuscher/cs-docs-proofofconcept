import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CsSmartLink = ({ className, href, onClick, children }) => {
    return (href.indexOf("http") > -1 ?
        <a className={className} onClick={onClick} href={href} rel="noreferrer" target="_blank">{children}</a> :
        <Link onClick={onClick} className={className} to={href}>{children}</Link>)
}
CsSmartLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.node.isRequired,
    className: PropTypes.node
}

export default CsSmartLink