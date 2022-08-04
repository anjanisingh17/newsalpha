import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    

        constructor(){
            super();
            console.log('Inside constructor body');
            this.state = {
                    articles : [],
                    loading : false,
                    page:1,

            }
        }    

        async componentDidMount(){
            let url = 'https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=3ba5e7b3ba4e44c7b922ea03462be5d6&page=1&pageSize=7';
            let data = await fetch(url);
            let result = await data.json();
            console.log(result);   
            let total_result = result.totalResults;
            console.log('total',total_result);

            this.setState({
                articles: result.articles,
                totalArticles: total_result
            })
        }

        //handlePrevClick funciton
        handlePrevClick = async()=>{

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=3ba5e7b3ba4e44c7b922ea03462be5d6&page=${this.state.page-1}&pageSize=7`;
            let data = await fetch(url);
            let result = await data.json();
           
            this.setState({
                page: this.state.page-1,
                articles: result.articles
            })
        }
        
        handleNextClick = async()=>{
            console.log('Next')

            if(this.state.page+1 > Math.ceil(this.state.totalArticles/7) ){

            }else{
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=3ba5e7b3ba4e44c7b922ea03462be5d6&page=${this.state.page-1}&pageSize=7`;
                let data = await fetch(url);
                let result = await data.json();
               
                this.setState({
                    page: this.state.page+1,
                    articles: result.articles
                })
            }


        }


  render() {
    return (
      <>
      <h1>The News app</h1>
    <div className='container'>
     <div className='row'>  

  {this.state.articles.map((curElement,index)=>{

      return(
        
        <NewsItem key={index} title={curElement.title?curElement.title.slice(0,50):"This is title"} description={curElement.description?curElement.description.slice(0,80):"This is description for the above title"} imgurl={curElement.urlToImage?curElement.urlToImage:'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} newsurl={curElement.url} publishedAt={curElement.publishedAt.slice(0,10)} author={curElement.author} />

      )
    
  })}

     </div> 
        <div className='container d-flex justify-content-between my-4'>
        <button disabled={this.state.page <=1 } type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>  Next &rarr;</button>
        </div>
    </div>

      </>  
    )
  }
}

export default News