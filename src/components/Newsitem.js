import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
   let  {title,description,imageurl,newsUrl}=this.props;
    return (
      <div className='my-3'>
                <div className="card" style={{width:"18rem"}}>
            <img src={imageurl} className="card-img-top" style={{height:"10rem"}} alt="..."/>
            <div className="card-body">
                <h5 className ="card-title">{title}......</h5>
                <p className="card-text">{description}.......</p>
                <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
