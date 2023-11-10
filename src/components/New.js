import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class New extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);

    console.log(props,'props');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category )}-News Monkey`;
  }
  async updatenews() {
    this.props.setProgress(10);
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ac0897e3e94a9ba3384536e36e555c&page=${this.state.page}&pageSize=${this.props.pagesize}`

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData,"parsedData")
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updatenews();
  }
  handlePrevious = async () => {
   this.setState({page:this.state.page-1});
   this.updatenews();
  };
  handleNext = async () => {
    this.setState({page:this.state.page+1});
    this.updatenews();
  };
  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ac0897e3e94a9ba3384536e36e555c&page=${this.state.page}&pageSize=${this.props.pagesize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  }
  render() {
    return (
      <>
      
        <h1 className="text-center" style={{margin:'35px 0px'}}>News-Top {this.capitalizeFirstLetter(this.props.category)} Headline </h1>
        {this.state.loading && <Spinner />}
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          >
            <div className="container">
        <div className="row">
          {
            
          this.state.articles.map((element) => {
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
}

export default New;
