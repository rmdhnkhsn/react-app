import React from "react"

const Blog = (props) => {
    return (
        <div className="cards">
            <img src="https://placeimg.com/640/480/tech" alt="" />
            <p>{props.date}</p>
            <p>{props.title}</p>
            <p>{props.summary}</p>
        </div>
    );
}

export default Blog;