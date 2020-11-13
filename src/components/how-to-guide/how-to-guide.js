import React, { Component } from "react"
import TextSection from "../article-text-section/article-text-section"

import "./how-to-guide.scss"
const NameToId = name => {
    return name.toLowerCase().replaceAll(" ", "-")
}


export default class HowToGuide extends Component {
    render() {
        return (
            <section className="how-to-guide">
                <TextSection data={this.props.data.overview} pageOrder={this.props.pageOrder}/>
                <ol className="how-to-steps">
                    {this.props.data.steps.map((step, idx) => (
                        <li key={"step-" + idx} id={NameToId(step.nav_label)}>
                            <h3>{step.headline}</h3>
                            <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: step.content }}></div>
                        </li>
                    ))}
                </ol>
            </section>
        )
    }
}