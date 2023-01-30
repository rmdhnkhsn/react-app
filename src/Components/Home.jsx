import React from "react"
import Blog from "./Blog";

const Home = () => {
    return (
        <div>
            <Blog
                date="10-10-2023"
                title="Title 1"
                summary="Lorem."
            />
            <Blog
                date="11-10-2023"
                title="Title 2"
                summary="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Blog
                date="12-10-2023"
                title="Title 3"
                summary="Lorem, ipsum dolor sit "
            />
        </div>
    ); 
}

export default Home;