import React from "react"
import ReactHTMLParser from "react-html-parser"
import hljs from 'highlight.js';
import 'highlight.js/styles/paraiso.dark.css'
import javascript from 'highlight.js/lib/languages/javascript';

import "./article-text-section.scss"

hljs.registerLanguage('javascript', javascript);

const ArticleTextSection = ({ data }) => {
    const transform = (node,idx) => {
        
        if (node.name==="pre") {
console.log(node)
            return (<pre key={idx}><code>{node.children[0].data}</code></pre>)
        }
      }    

    const markup = ReactHTMLParser(data.content, {transform:transform})

      React.useEffect(() => {
          console.log("Set highlights")
        hljs.initHighlighting();
    }, []);
    return (
        <section className="article-text-section">
            <p></p>
            <div className="wysiwyg">{markup}</div>
        </section>
    )
}
export default ArticleTextSection