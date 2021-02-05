import React from "react";
import Card from './Card';
import {useEffect,useState} from 'react';
function Dashboard1(){
  let {articles,setArticles}=useState([]);
    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=IN&apiKey=efe521c72773493abe336562cdfe2493"
          )
          .then((response)=>{
            if(response.ok)
              return response.json();
          }).then((data)=>{
            if (Array.isArray(data)) {
              setArticles(data);
            }   
          })
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
      <div>
      {articles.map((item)=>(

          <Card image={item.urlToImage}
          title={item.title}/>
      ))}
    </div>
  );
};
export default Dashboard1;
