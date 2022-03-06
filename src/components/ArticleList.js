import React from "react"
import Article from "./Article"

function ArticleList({posts}) {
    console.log({posts})
    
    const postArrays = (posts.map((post) => <Article key={post.id} post={post}/>))
    
    return(
        <main>
            {postArrays}
        </main>
    )
}

export default ArticleList