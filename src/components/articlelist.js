import React from "react";
import Article from "./article";

function ArticleList({posts}) {
  const articlelists = posts.map(post => (
    <Article 
      key = {post.id}
      title = {post.title}
      date = {post.date}
      preview = {post.preview}
      minutes = {post.minutes}
    />)
  )

  return (
    <main>{articlelists}</main>
  )
}

export default ArticleList