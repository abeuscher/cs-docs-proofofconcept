import React, {Component} from "react"

export default class HowToGuide extends Component {
    render() {
        return(
            <section className="how-to-guide">
                <h2>{this.props.data.overview.headline}</h2>
                <div className="wysiwyg" dangerouslySetInnerHTML={{__html:this.props.data.overview.content}}></div>
            </section>
        )
    }
}