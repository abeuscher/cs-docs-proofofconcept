import React, {Component} from "react"
const NameToId = name => {
    return name.toLowerCase().replaceAll(" ", "-")
}
export default class ArticleTextSection extends Component {
    render() {
        return(
            <section className="article-text-section" id={NameToId(this.props.data.nav_label)}>
                {this.props.pageOrder===0 ? <h1>{this.props.data.headline}</h1> :<h2>{this.props.data.headline}</h2>}
                
                <div className="wysiwyg" dangerouslySetInnerHTML={{__html:this.props.data.content}}></div>
            </section>
        )
    }
}