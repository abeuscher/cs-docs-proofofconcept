import React from "react"
import useIntersectionObserver from "./use-intersection-observer"


const LazyThumb = props => {

    const ref = React.useRef();
    const [isVisible, setIsVisible] = React.useState(false);
    
    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref.current);
            }
        }
    })
    
    const style = props.src ? { backgroundImage: "url('" + props.src + "')" } : {}
    return (<div ref={ref} className={props.className} style={isVisible ? style : {}}></div>)

}

export default LazyThumb