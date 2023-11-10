import React from 'react'

const Newsitem =(props)=> {
    

   let  {title,description,imageurl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
                <div className="card" >
                  <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}> <span className="badge rounded-pill bg-danger" >{source}</span>
</div>
            <img src={!imageurl?"https://www.livemint.com/lm-img/img/2023/11/06/1600x900/PTI11-06-2023-000041B-0_1699260902194_1699260919277.jpg":imageurl} className="card-img-top" style={{height:"10rem"}} alt="..."/>
            <div className="card-body">
                <h5 className ="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">by {!author?"unknow":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="blank" className="btn btn-sm btn-dark ">read More</a>
            </div>
            </div>
      </div>
    )
  
}

export default Newsitem
