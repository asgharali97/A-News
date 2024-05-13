import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin'
import InfiniteScroll from 'react-infinite-scroll-component'
import propTypes from 'prop-types';
import './Navbar.css'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    let url = `  https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f2e695b17ff2417b8e204d2c2975a345&pageSize=${props.pageSize}`
    props.setProgress(10)
    setArticles(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
    console.log(parsedData)
    
  }

  useEffect(() => {
    document.title = `${capital(props.category)}   Anews`
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f2e695b17ff2417b8e204d2c2975a345&page=${page + 1}
    &pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }
  return (
    <>
      <h1 className='text-center' style={{ margin: '65px 0px' }}>
        A News  Top {capital(props.category)}    Headlines
      </h1>
      {loading && <Spin />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className='container'>
          <div className='row'>
            {!loading && articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
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
News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general"
}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
}
export default News
