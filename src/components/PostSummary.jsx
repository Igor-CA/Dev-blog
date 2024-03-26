import Markdown from "react-markdown"
import "../index.css"

export default function PostSummary({post}){
    const {title, author, content} = post
    return(
        <div className="post-summary">
            <strong>{title}</strong><br />
            <small>{author}</small>
            <Markdown>{content}</Markdown>
        </div>
    )
}