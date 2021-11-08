import React, { useEffect, useState } from 'react'
import ArticleSkeleton from '../skeletons/ArticleSkeleton';

const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(()=>{
        setTimeout( async ()=> {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await res.json();
            setArticles(data);
        },2000);
    },[articles]);

    return (
        <div className="articles">
            <h2>Articles</h2> 
            
            {!articles && [1,2,3,5].map((index)=><ArticleSkeleton key={index} theme="light"/>)}
            
            {articles && articles.map(article=>(
                <div className="article" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Articles
