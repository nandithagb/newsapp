import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const  New =(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,settotalResults]=useState(1);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updatenews=async()=>  {
    props.setProgress(10);
   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2ac0897e3e94a9ba3384536e36e555c&page=${page}&pageSize=${props.pagesize}`

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData,"parsedData")
    setArticles(parsedData.articles)
    setLoading(false)
    settotalResults(parsedData.totalResults)
    props.setProgress(100);
  }
  useEffect(()=>{
      document.title = `${capitalizeFirstLetter(props.category )}-News Monkey`;
    updatenews();
  },[])

  const fetchMoreData=async()=>{

    setPage(page+1)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2ac0897e3e94a9ba3384536e36e555c&page=${page}&pageSize=${props.pagesize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults)
  }
    return (
      <>
      
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>News-Top {capitalizeFirstLetter(props.category)} Headline </h1>
        {loading && <Spinner />}
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
          >
            <div className="container">
        <div className="row">
          {
            
          articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
      </div>
        </div>
      </InfiniteScroll>
      </>
    );
  
}
New.defaultProps = {
  country: "in",
  pagesize: 5,
  category: "general",
};
New.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default New;
