import React, {Component} from "react"

export default class ArticleTextSection extends Component {
    render() {
        return(
            <section className="article-text-section">
                <h2>{this.props.data.headline}</h2>
                <div className="wysiwyg" dangerouslySetInnerHTML={{__html:this.props.data.content}}></div>
            </section>
        )
    }
}