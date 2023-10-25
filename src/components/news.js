import React, { useEffect,useState } from 'react';

import Newsitem from './newsitem';
import Spinner from './spinner.js';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const  News =(props)=> {
   const[articles,setArticles]=useState([])
   const[loading,setLoading]=useState(true)
   const[page,setPage]=useState(1)
   const [totalResults,setTotalResults]=useState(0)
  //  document.title=`${capitalizeFirstLetter(props.category)}-NewsWorld`;
   const capitalizeFirstLetter=(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
  }
 
  const  updateNews=async(props)=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    
  }
  useEffect(()=>{
     updateNews();
  },[])
 

  const handlepreviousclick = async () => {
    
    setPage(page-1);
    updateNews();
  }

  const handlenextclick = async () => {
    console.log("Next");
   
    setPage(page+1);
    updateNews();
  }
  const fetchMoreData = async() => {
    
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);
    setArticles( articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    
  };

 
    return (
     <>
        <h1 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey-Top Headlines from  {capitalizeFirstLetter(props.category)} </h1>
        {loading &&<Spinner />}
        <InfiniteScroll
  dataLength={articles.length}
  next={fetchMoreData}
  hasMore={articles.length < totalResults}
  loader={<Spinner />}
>
  <div className='container'>
    <div className="row">
      {articles.map((element) => (
        <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} url={element.url} auhtor={element.author} date={element.publishedAt} />
        </div>
      ))}
    </div>
  </div>
</InfiniteScroll>

          
        
          </>
    );
  
}

News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general',
}
 
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}


export default News;
