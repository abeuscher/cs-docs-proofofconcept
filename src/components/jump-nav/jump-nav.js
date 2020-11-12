import React, { Component } from "react"
import { anchorate } from "anchorate"

import "./jump-nav.scss"

const NameToId = name => {
    return name.toLowerCase().replaceAll(" ", "-")
}
export default class JumpNav extends Component {
    componentDidMount() {
        anchorate({
            scroller: function (element) {
                if (!element) return false
                element.scrollIntoView({ behavior: 'smooth' })
                return true
            }
        })
    }
    render() {
        let navLinks = []
        this.props.sections.forEach((section, idx) => {
            if (section.add_to_nav) {
                navLinks.push({ "target": "#" + NameToId(section.nav_label), "label": section.nav_label,className:"level-one" })
            }
            Object.keys(section).forEach((sectionKey) => {
                if (typeof section[sectionKey] === 'object') {
                    console.log(section[sectionKey])
                    if(section[sectionKey].add_to_nav) {
                        navLinks.push({ "target": "#" + NameToId(section[sectionKey].nav_label), "label": section[sectionKey].nav_label,className:"level-one"})
                    }
                    Object.keys(section[sectionKey]).forEach((nestedSectionKey) => {
                        if (section[sectionKey][nestedSectionKey].add_to_nav) {
                            navLinks.push({ "target": "#" + NameToId(section[sectionKey][nestedSectionKey].nav_label), "label": section[sectionKey][nestedSectionKey].nav_label,className:"level-two" })
                        }
                    })
                }
            })
        })
        return (
            <nav className={"jump-nav" + (this.props.className ? " " + this.props.className : "")}>
                <h3>On This Page:</h3>
                <ul>
                    {navLinks.map((link, idx) => (<li className={link.className} key={"nav-link-" + idx}><a href={link.target}>{link.label}</a></li>))}
                </ul>
            </nav>
        )
    }
}