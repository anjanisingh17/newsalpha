import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {

    let {title,description,imgurl,newsurl} = this.props;

    return (
        <div className="col-lg-4 col-md-4 col-sm-1 card-group my-3" >
        <div className="card">
          <img src={imgurl} className="card-img-top" alt="..." width="250px" height="300px" />
          <div className="card-body">
              <h5 className="card-title">{title} ...</h5>
              <p className="card-text">{description} ...</p>
              <a href={newsurl} className='btn btn-sm btn-primary' target='_blank'>Read More</a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>   
    )
  }
}

export default NewsItem