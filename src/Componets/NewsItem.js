import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props
  return (
    <div className='my-3'>
      <div className="card">
        <img src={!imageUrl ? "https://picsum.photos/640/360" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ left: "80%", zIndex: "1" }}> {source}</span>
          </h5>
          <p className="card-text">{description}</p>
          <div className="card-footer text-body-secondary">By {!author ? "Unknown" : author} On {new Date(date).toGMTString()} </div>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark"> Read more </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
