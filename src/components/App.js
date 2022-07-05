import React from "react";
import blogData from "../data/blog";
import Header from "./header"
import About from "./about";
import ArticleList from "./articlelist"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} image={blogData.image} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
