import NewsItem from "./NewsItem";
import { useEffect } from "react";
import { useState } from "react";


const NewsBoard = ({category}) => {
    const[articles,setArticles]=useState([]);

   useEffect(()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=62817fff835b44ef9553877ab7e42d58`;
  fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
   },[category])

  return (
    <div>
    <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
   {articles.map((news,index)=>{
    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage}  url={news.url}/>
   })}
    </div>
  )
}

export default NewsBoard