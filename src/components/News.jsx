import React from 'react'
import { useState,useEffect } from 'react'
import NewsItem from './NewsItem.jsx'
const News = (props) => {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)
    
    const capitalizeFirstLetter= (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstLetter(props.category)} News`
    

    const updateNews = async ( )=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        updateNews();
    }, [page, props.category, props.apiKey]);
    const handleNextClick = async ()=>{
        setPage(page+1)
        updateNews();
    }
    const handlePreviousClick = async ()=>{
        setPage(page-1)
        updateNews();
    }

  return (
    <>
        <div className="container my-3">
            <h2 className='text-center'>News - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            <div className="row">
                {!loading && articles.map((element)=>{
                    return <div className="col-md-4" key = {element.url}>
                        <NewsItem category={props.category} defaultImage={props.defaultImage} title={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source = {element.source.name}
                        />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
            <button disabled={(page + 1 > Math.ceil(totalResults/props.pageSize))} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
          </div>
        </div>
    </>
  )
}

News.defaultProps ={
    country : 'in',
    category : 'general'
}
export default News

